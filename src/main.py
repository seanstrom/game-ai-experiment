from math import sqrt
from dataclasses import dataclass
from typing import Any, Dict, List, Callable
from ffi.js import document, is_nan, window, Html, Hyper, Svg, Fuzzy, FuzzyViz


# Platform

@dataclass
class Tick:
    pass


@dataclass
class Vec:
    x: float = 0
    y: float = 0


@dataclass
class Box:
    pos: Vec = Any
    color: str = ""
    width: float = 0
    height: float = 0


@dataclass
class Pawn(Box):
    dir: Vec = Any


@dataclass
class Entity:
    id: str = ""
    state: Any = Any
    view: Callable[[Any], Any] = Any
    update_: Callable[[Any, Any], Any] = Any


@dataclass
class Entities:
    data: Dict[str, Entity] = Any
    background: List[str] = Any
    observers: List[str] = Any
    pawns: List[str] = Any

    def get(self, entity_id: str):
        return self.data[entity_id]


@dataclass
class FuzzyLogic:
    inputs: Dict[str, Any] = Any
    outputs: Dict[str, Any] = Any
    rules: List[Any] = Any


class RelDir:
    Up = Vec(0, -1)
    Down = Vec(0, 1)
    Left = Vec(-1, 0)
    Right = Vec(1, 0)
    UpLeft = Vec(-1, -1)
    UpRight = Vec(1, -1)
    DownLeft = Vec(-1, 1)
    DownRight = Vec(1, 1)
    Zero = Vec(0, 0)


def magnitude(v: Vec) -> float:
    return sqrt(pow(v.x, 2) + pow(v.y, 2))


def normalize(v: Vec) -> Vec:
    mag = magnitude(v)
    normalized_x = v.x / mag
    normalized_y = v.y / mag
    x = 0 if is_nan(normalized_x) else normalized_x
    y = 0 if is_nan(normalized_y) else normalized_y
    return Vec(x, y)


def dot_product(a: Vec, b: Vec) -> float:
    return a.x * b.x + a.y * b.y


def to_center_pos(box: Box) -> Vec:
    x = box.pos.x + box.width / 2
    y = box.pos.y + box.height / 2
    return Vec(x, y)


def is_centered_within(box: Box, boundary: Box):
    bot_pos = to_center_pos(box)
    boundary_pos = to_center_pos(boundary)
    x = round(abs(bot_pos.x - boundary_pos.x))
    y = round(abs(bot_pos.y - boundary_pos.y))
    is_centered = x <= 1 and y <= 1
    return is_centered


def to_dir(start: Vec, end: Vec) -> Vec:
    x = end.x - start.x
    y = end.y - start.y
    return Vec(x, y)


def relative_dir(origin: Box, target: Box):
    origin_center = to_center_pos(origin)
    target_center = to_center_pos(target)

    if origin_center.x > target_center.x:
        x = -1
    elif origin_center.x < target_center.x:
        x = 1
    else:
        x = 0

    if origin_center.y > target_center.y:
        y = -1
    elif origin_center.y < target_center.y:
        y = 1
    else:
        y = 0

    return Vec(x, y)


def is_vec_eq(a: Vec, b: Vec) -> bool:
    return a.x == b.x and a.y == b.y


def concat(*args):
    result = []
    for arg in args:
        result.extend(arg)
    return result


# Time

def run_clock(dispatch, msg):
    def send():
        dispatch(msg)
        run_clock(dispatch, msg)
    id = window.requestAnimationFrame(send)
    return lambda: window.cancelAnimationFrame(id)


def timeout(dispatch, args):
    (msg, ms) = args
    def send(): dispatch(msg)
    id = window.setTimeout(send, ms)
    return lambda: window.clearTimeout(id)


def interval(dispatch, args):
    (msg, ms) = args
    def send(): dispatch(msg)
    id = window.setInterval(send, ms)
    return lambda: window.clearInterval(id)


def delay(ms, msg):
    return [timeout, (msg, ms)]


def every(ms, msg):
    return [interval, (msg, ms)]


def clock(msg):
    return [run_clock, msg]


# Keyboard

@dataclass
class Keyboard:
    up: bool = False
    down: bool = False
    left: bool = False
    right: bool = False


@dataclass
class KeyChange:
    key: str = ""
    is_down: bool = False


class ArrowKeys:
    Up = "ArrowUp"
    Down = "ArrowDown"
    Left = "ArrowLeft"
    Right = "ArrowRight"


def is_arrow_key(key) -> bool:
    return key in [ArrowKeys.Up, ArrowKeys.Down, ArrowKeys.Left, ArrowKeys.Right]


def keyboard_change(is_down):
    def to_msg(key):
        return KeyChange(is_down=is_down, key=key)
    return to_msg


def to_x_dir(keyboard):
    return (1 if keyboard.right else 0) - (1 if keyboard.left else 0)


def to_y_dir(keyboard):
    return (1 if keyboard.down else 0) - (1 if keyboard.up else 0)


def run_keyboard_up(dispatch, to_msg):
    def listener(event):
        msg = to_msg(event.key)
        if msg is not None:
            dispatch(action(msg))
    window.addEventListener("keyup", listener)
    return lambda: window.removeEventListener("keyup", listener)


def keyboard_up(to_msg):
    return [run_keyboard_up, to_msg]


def run_keyboard_down(dispatch, to_msg):
    def listener(event):
        msg = to_msg(event.key)
        if msg is not None:
            if is_arrow_key(event.key):
                event.preventDefault()
            dispatch(action(msg))
    window.addEventListener("keydown", listener)
    return lambda: window.removeEventListener("keydown", listener)


def keyboard_down(to_msg):
    return [run_keyboard_down, to_msg]


# Game

@dataclass
class Ids:
    bot: str = "bot"
    fov: str = "fov"
    player: str = "player"
    boundary: str = "boundary"
    proximity: str = "proximity"


class BotModes:
    stop = "stop"
    start = "start"
    restart = "restart"
    patrol = "patrol"
    pursue = "pursue"
    attack = "attack"


@dataclass()
class BotConfig:
    max_steps = 20
    patrol_dirs = [
        (RelDir.Up, RelDir.UpRight),
        (RelDir.UpRight, RelDir.Right),
        (RelDir.Right, RelDir.DownRight),
        (RelDir.DownRight, RelDir.Down),
        (RelDir.Down, RelDir.DownLeft),
        (RelDir.DownLeft, RelDir.Left),
        (RelDir.Left, RelDir.UpLeft),
        (RelDir.UpLeft, RelDir.Up),
    ]
    speeds = {
        f"{BotModes.stop}": 0.0,
        f"{BotModes.start}": 0.0,
        f"{BotModes.restart}": 0.8,
        f"{BotModes.patrol}": 0.8,
        f"{BotModes.pursue}": 1.3,
        f"{BotModes.attack}": 2.0,
    }


@dataclass
class Bot(Pawn):
    steps: int = 0
    aggression: float = 0.0
    mode: str = BotModes.start
    controller: FuzzyLogic = Any
    config: BotConfig = BotConfig


@dataclass
class Player(Pawn):
    pass


@dataclass
class Proximity(Box):
    distance: float = 0.0
    inner_rect: Box = Any
    outer_rect: Box = Any


@dataclass
class State:
    ids: Ids = Any
    keyboard: Keyboard = Any
    entities: Entities = Any
    update_order: List[str] = Any
    render_order: List[str] = Any


@dataclass
class Ref:
    value: State = Any


# Proximity

def make_outer_rect(player: Player, bot: Bot) -> Box:
    x = min(player.pos.x, bot.pos.x)
    y = min(player.pos.y, bot.pos.y)

    width = max(
        bot.pos.x + bot.width - player.pos.x,
        player.pos.x + player.width - bot.pos.x)

    height = max(
        bot.pos.y + bot.height - player.pos.y,
        player.pos.y + player.height - bot.pos.y)

    return Box(color="yellow", height=height, width=width, pos=Vec(x, y))


def make_inner_rect(outer_rect: Box, player: Player, bot: Bot) -> Box:
    x = min(min(player.pos.x + player.width, bot.pos.x + bot.width),
            max(player.pos.x, bot.pos.x))

    y = min(min(player.pos.y + player.height, bot.pos.y + bot.height),
            max(player.pos.y, bot.pos.y))

    width = abs(outer_rect.width - player.width - bot.width)
    height = abs(outer_rect.height - player.height - bot.height)

    return Box(color="green", height=height, width=width, pos=Vec(x, y))


def detect_proximity(player: Player, bot: Bot) -> (Box, Box, float):
    outer_rect = make_outer_rect(player, bot)
    inner_rect = make_inner_rect(outer_rect, player, bot)

    width = max(0.0, outer_rect.width - player.width - bot.width)
    height = max(0.0, outer_rect.height - player.height - bot.height)
    min_distance = sqrt(pow(height, 2) + pow(width, 2))

    return (outer_rect, inner_rect, min_distance)


def init_proximity(player: Player, bot: Bot) -> Proximity:
    (outer_rect, inner_rect, distance) = detect_proximity(player, bot)
    return Proximity(distance=distance, outer_rect=outer_rect, inner_rect=inner_rect)


def update_proximity(proximity: Proximity, state: State) -> Proximity:
    bot = state.entities.get(state.ids.bot)
    player = state.entities.get(state.ids.player)
    (outer_rect, inner_rect, distance) =\
        detect_proximity(player.state, bot.state)

    proximity.distance = distance
    proximity.inner_rect = inner_rect
    proximity.outer_rect = outer_rect
    return proximity


def view_proximity(proximity: Proximity):
    return Svg.g({}, [
        view_box(proximity.outer_rect),
        view_box(proximity.inner_rect)
    ])


# Field of View

def init_fov(origin: Pawn, target: Pawn) -> float:
    target_pos = to_center_pos(target)
    origin_pos = to_center_pos(origin)
    to_target_dir = normalize(to_dir(origin_pos, target_pos))
    dot = dot_product(normalize(origin.dir), to_target_dir)
    return dot


def update_fov(_fov: float, state: State) -> float:
    bot = state.entities.get(state.ids.bot)
    player = state.entities.get(state.ids.player)
    return init_fov(bot.state, player.state)


def view_fov(fov: float, state: State):
    return None


# Player

def init_player() -> Player:
    return Player(
        width=50,
        height=50,
        color="blue",
        dir=Vec(1, 0),
        pos=Vec(x=0, y=0))


def update_player_pos(player: Player, boundary: Box, keyboard: Keyboard) -> Vec:
    dt = 1.666
    speed_multiplier = 3
    speed = 1.0 * speed_multiplier

    x = player.pos.x + (to_x_dir(keyboard) * speed * dt)
    y = player.pos.y + (to_y_dir(keyboard) * speed * dt)

    player.pos.x = min(
        max(boundary.pos.x, x),
        boundary.pos.x + boundary.width - player.width)

    player.pos.y = min(
        max(boundary.pos.y, y),
        boundary.pos.y + boundary.height - player.height)

    return player.pos


def update_player_dir(player: Player, keyboard: Keyboard) -> Vec:
    x = to_x_dir(keyboard)
    y = to_y_dir(keyboard)

    if x != 0 or y != 0:
        player.dir.x = x
        player.dir.y = y

    return player.dir


def update_player(player: Player, state: State) -> Player:
    boundary = state.entities.get(state.ids.boundary)
    player.dir = update_player_dir(player, state.keyboard)
    player.pos = update_player_pos(player, boundary.state, state.keyboard)
    return player


def view_player(player: Player):
    return view_box(player)


# Bot

def init_bot(boundary: Box):
    width = 50
    height = 50
    config = BotConfig()
    boundary_center = to_center_pos(boundary)
    boundary_diagonal = sqrt(
        pow(boundary.height, 2) + pow(boundary.width, 2))

    pos = Vec(
        x=boundary_center.x - width / 2,
        y=boundary_center.y - height / 2)

    controller = FuzzyLogic(
        inputs={
            "distance": Fuzzy.variable([0, boundary_diagonal], {
                "near": Fuzzy.gaussian(0, 50),
                "neutral": Fuzzy.trapezoid(32, 80, 180, 228),
                "far": Fuzzy.ramp(100, 300)
            }),
            "viewing": Fuzzy.variable([-1, 1], {
                "hidden": Fuzzy.gaussian(-1, 0.50),
                "visible": Fuzzy.gaussian(1, 0.50)
            }),
        },
        outputs={
            "aggression": Fuzzy.variable([0, 100], {
                "low": Fuzzy.gaussian(30, 20),
                "medium": Fuzzy.gaussian(70, 20),
                "high": Fuzzy.gaussian(100, 10),
            }),
        },
        rules=[
            Fuzzy.and_(
                {"distance": "near", "viewing": "visible"},
                {"aggression": "high"}),
            Fuzzy.and_(
                {"distance": "near", "viewing": "hidden"},
                {"aggression": "medium"}),
            Fuzzy.and_(
                {"distance": "neutral", "viewing": "visible"},
                {"aggression": "medium"}),
            Fuzzy.and_(
                {"distance": "neutral", "viewing": "hidden"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "far", "viewing": "visible"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "far", "viewing": "hidden"},
                {"aggression": "low"}),
        ])

    return Bot(
        color="red",
        pos=pos,
        config=config,
        width=width,
        height=height,
        dir=RelDir.Zero,
        mode=BotModes.start,
        steps=config.max_steps,
        controller=controller)


def update_bot_aggression(bot: Bot, proximity: Proximity, fov: float) -> float:
    result = Fuzzy.defuzz(
        bot.controller.inputs,
        bot.controller.outputs,
        bot.controller.rules,
        {"distance": proximity.distance, "viewing": fov})
    return result.aggression


def update_bot_mode(bot: Bot, boundary: Box) -> str:
    aggression_level = Fuzzy.classify(
        bot.controller.outputs.aggression, bot.aggression)

    if bot.mode is BotModes.start:
        is_centered = is_centered_within(bot, boundary)
        if is_centered:
            return BotModes.patrol
        else:
            return BotModes.start

    if bot.mode is BotModes.restart:
        if aggression_level in ["medium", "high"]:
            return BotModes.pursue
        elif is_centered_within(bot, boundary):
            return BotModes.patrol
        else:
            return BotModes.restart

    if bot.mode is BotModes.patrol:
        if aggression_level in ["medium", "high"]:
            return BotModes.pursue
        else:
            return BotModes.patrol

    if bot.mode in [BotModes.pursue, BotModes.attack]:
        if aggression_level is "high":
            return BotModes.attack
        elif aggression_level is "medium":
            return BotModes.pursue
        else:
            return BotModes.restart

    return bot.mode


def update_bot_dir(bot: Bot, player: Player, boundary: Box) -> Vec:
    if bot.mode in [BotModes.start, BotModes.restart]:
        return relative_dir(bot, boundary)

    if bot.mode in [BotModes.pursue, BotModes.attack]:
        return relative_dir(bot, player)

    if bot.mode is BotModes.stop:
        return RelDir.Zero

    if bot.mode is BotModes.patrol and bot.steps is 0:
        for (prev_dir, next_dir) in bot.config.patrol_dirs:
            if is_vec_eq(bot.dir, prev_dir):
                return next_dir

    return bot.dir


def update_bot_pos(bot: Bot, boundary: Box) -> Vec:
    dt = 1.666
    speed = 1 * (bot.config.speeds[bot.mode] or 1)
    x = bot.pos.x + (bot.dir.x * speed * dt)
    y = bot.pos.y + (bot.dir.y * speed * dt)

    min_x = min(
        max(boundary.pos.x, x),
        boundary.pos.x + boundary.width - bot.width)

    min_y = min(
        max(boundary.pos.y, y),
        boundary.pos.y + boundary.height - bot.height)

    return Vec(x=min_x, y=min_y)


def update_bot_steps(bot: Bot) -> int:
    if bot.mode is BotModes.patrol:
        if bot.steps == 0:
            return bot.config.max_steps
        return bot.steps - 1
    else:
        return bot.config.max_steps


def update_bot(bot: Bot, state: State) -> Bot:
    fov = state.entities.get(state.ids.fov)
    player = state.entities.get(state.ids.player)
    boundary = state.entities.get(state.ids.boundary)
    proximity = state.entities.get(state.ids.proximity)
    bot.steps = update_bot_steps(bot)
    bot.aggression = update_bot_aggression(bot, proximity.state, fov.state)
    bot.mode = update_bot_mode(bot, boundary.state)
    bot.dir = update_bot_dir(bot, player.state, boundary.state)
    bot.pos = update_bot_pos(bot, boundary.state)
    return bot


def view_bot(bot: Bot):
    return view_box(bot)


# Init

def init() -> Ref:
    boundary = Entity(
        id=Ids.boundary,
        update_=lambda _state: _state,
        view=view_box,
        state=Box(
            width=600,
            height=400,
            color='#a4b398',
            pos=Vec(x=0, y=0)))

    player = Entity(
        id=Ids.player,
        state=init_player(),
        update_=update_player,
        view=view_player)

    bot = Entity(
        id=Ids.bot,
        update_=update_bot,
        view=view_box,
        state=init_bot(boundary.state))

    proximity = Entity(
        id=Ids.proximity,
        state=init_proximity(player.state, bot.state),
        update_=update_proximity,
        view=view_proximity)

    fov = Entity(
        id=Ids.fov,
        state=init_fov(bot.state, player.state),
        update_=update_fov,
        view=view_fov)

    entities = Entities(
        background=[Ids.boundary],
        observers=[Ids.fov, Ids.proximity],
        pawns=[Ids.player, Ids.bot],
        data=dict(
            bot=bot,
            fov=fov,
            player=player,
            boundary=boundary,
            proximity=proximity))

    update_order = concat(
        entities.background,
        entities.pawns,
        entities.observers)

    render_order = concat(
        entities.background,
        entities.observers,
        entities.pawns)

    state = Ref(
        value=State(
            ids=Ids(),
            entities=entities,
            update_order=update_order,
            render_order=render_order,
            keyboard=Keyboard()))

    return state


def subscriptions():
    tick = action(Tick())
    return [
        clock(tick),
        keyboard_up(keyboard_change(False)),
        keyboard_down(keyboard_change(True))
    ]


# Update

def update_keyboard(state, msg):
    keyboard = state.keyboard

    if msg.key is ArrowKeys.Up:
        keyboard.up = msg.is_down
    if msg.key is ArrowKeys.Down:
        keyboard.down = msg.is_down
    if msg.key is ArrowKeys.Left:
        keyboard.left = msg.is_down
    if msg.key is ArrowKeys.Right:
        keyboard.right = msg.is_down

    return keyboard


def update(ref: Ref, msg) -> Ref:
    """
    Responsible for:
        * transitioning the program's state machine based on the interactions in the program
    """
    state = ref.value

    if type(msg) is Tick:
        for entity_id in state.update_order:
            entity = state.entities.get(entity_id)
            entity.state = entity.update_(entity.state, state)

        return Ref(value=state)

    if type(msg) is KeyChange:
        state.keyboard = update_keyboard(state, msg)
        return Ref(value=state)

    return ref


def action(msg):
    """
    Returns a function that will update the program state when called
    """
    return lambda state: update(state, msg)


# Views

def view_box(box: Box):
    stroke_width = 2
    stroke_color = "#706660"

    return Svg.rect({
        "fill": box.color,
        "width": box.width,
        "height": box.height,
        "stroke": stroke_color,
        "stroke-width": stroke_width,
        "transform": f"translate({box.pos.x}, {box.pos.y})",
    })


def view_stat(key, value):
    return Html.div({"class": "stat-field"}, [
        Html.span({"class": "stat-label"}, [
            Html.text(f"{key}: "),
        ]),
        Html.text(value)
    ])


def view_chart(key, value):
    elem_id = f"{key}-viz"
    svg = FuzzyViz.varToSvg(value, dict(samples=200))
    return Html.div({"class": "fuzzy-input-chart"}, [
        Html.div(dict(id=elem_id, innerHTML=svg), []),
    ])


def view(ref: Ref):
    """
    Visualizes the entire program state as maze of cells with controls to traverse the maze
    """
    state = ref.value
    bot = state.entities.get(state.ids.bot).state
    fov = state.entities.get(state.ids.fov).state
    boundary = state.entities.get(state.ids.boundary).state
    proximity = state.entities.get(state.ids.proximity).state

    def render_entity(entity):
        return entity.view(entity.state)

    return Html.main({"class": "container"}, [
        Html.div({"class": "canvas"}, [
            Svg.svg(dict(
                width=boundary.width,
                height=boundary.height,
                viewBox=f"0 0 {boundary.width} {boundary.height}",
            ), [
                Svg.g({}, [
                    render_entity(state.entities.get(entity_id)) for entity_id in state.render_order
                ])
            ]),
        ]),
        Html.div({"class": "stats"}, [
            Html.div({"class": "stat-row"}, [
                Html.div({"class": "stat-column"}, [
                    view_stat("Field of View", fov),
                    view_stat("Input Distance", proximity.distance),
                ]),

                Html.div({"class": "stat-column"}, [
                    view_stat(
                        "Distance Type",
                        Fuzzy.classify(bot.controller.inputs.distance, proximity.distance)),
                    view_stat(
                        "Aggression State",
                        Fuzzy.classify(bot.controller.outputs.aggression, bot.aggression)),
                ]),
            ]),

            view_chart('distance', bot.controller.inputs.distance),
            view_chart('viewing', bot.controller.inputs.viewing),
            view_chart('aggression', bot.controller.outputs.aggression),
        ]),
    ])


# Main

def main():
    """
    * Initializes the search of a maze layout with a search strategy
    * Visualize the maze of cells as HTML elements
    """
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init, subscriptions=subscriptions)

