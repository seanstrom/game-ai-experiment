from math import sqrt
from typing import Any, Dict, List, Callable
from dataclasses import dataclass
from ffi.js import asdict, document, window, Html, Hyper, Svg, Fuzzy, FuzzyViz


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
class Entity:
    id: str = ""
    state: Any = Any
    view: Callable[[Any], Any] = Any
    update_: Callable[[Any, Any], Any] = Any


@dataclass
class FuzzyLogic:
    inputs: Dict[str, Any] = Any
    outputs: Dict[str, Any] = Any
    rules: List[Any] = Any


# Keyboard

@dataclass
class Keyboard:
    up: bool = False
    down: bool = False
    left: bool = False
    right: bool = False


@dataclass
class ArrowKeys:
    Up = "ArrowUp"
    Down = "ArrowDown"
    Left = "ArrowLeft"
    Right = "ArrowRight"


@dataclass
class KeyChange:
    key: str = ""
    is_down: bool = False


Arrow = ArrowKeys()


def is_arrow_key(key) -> bool:
    return key in [Arrow.Up, Arrow.Down, Arrow.Left, Arrow.Right]


def to_x(keyboard):
    return (1 if keyboard.right else 0) - (1 if keyboard.left else 0)


def to_y(keyboard):
    return (1 if keyboard.down else 0) - (1 if keyboard.up else 0)


# Game

@dataclass
class Bot(Box):
    dir: Any = Any


@dataclass
class Player(Box):
    dir: Vec = Any
    brakes: float = 0.0
    controller: FuzzyLogic = Any


@dataclass
class Proximity(Box):
    distance: float = 0.0
    inner_rect: Box = Any
    outer_rect: Box = Any


@dataclass
class Ids:
    bot: str = "bot"
    fov: str = "fov"
    player: str = "player"
    boundary: str = "boundary"
    proximity: str = "proximity"


@dataclass
class State:
    ids: Ids = Any
    keyboard: Keyboard = Any
    entities: Dict[str, Entity] = Any


@dataclass
class Ref:
    value: State = Any


# Box

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


# Proximity

def make_outer_rect(player: Player, bot: Bot):
    x = min(player.pos.x, bot.pos.x)
    y = min(player.pos.y, bot.pos.y)

    width = max(
        bot.pos.x + bot.width - player.pos.x,
        player.pos.x + player.width - bot.pos.x)

    height = max(
        bot.pos.y + bot.height - player.pos.y,
        player.pos.y + player.height - bot.pos.y)

    return Box(color="yellow", height=height, width=width, pos=Vec(x=x, y=y))


def make_inner_rect(outer_rect: Box, player: Player, bot: Bot):
    x = min(min(player.pos.x + player.width, bot.pos.x + bot.width),
            max(player.pos.x, bot.pos.x))

    y = min(min(player.pos.y + player.height, bot.pos.y + bot.height),
            max(player.pos.y, bot.pos.y))

    width = abs(outer_rect.width - player.width - bot.width)
    height = abs(outer_rect.height - player.height - bot.height)

    return Box(color="green", height=height, width=width, pos=Vec(x=x, y=y))


def detect_proximity(player: Player, bot: Bot):
    outer_rect = make_outer_rect(player, bot)
    inner_rect = make_inner_rect(outer_rect, player, bot)

    width = max(0.0, outer_rect.width - player.width - bot.width)
    height = max(0.0, outer_rect.height - player.height - bot.height)
    min_distance = sqrt(pow(height, 2) + pow(width, 2))

    return (outer_rect, inner_rect, min_distance)


def init_proximity(player: Player, bot: Bot):
    (outer_rect, inner_rect, distance) = detect_proximity(player, bot)
    return Proximity(distance=distance, outer_rect=outer_rect, inner_rect=inner_rect)


def update_proximity(proximity: Proximity, state: State) -> Proximity:
    bot = state.entities[Ids.bot]
    player = state.entities[Ids.player]
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

def magnitude(v: Vec) -> float:
    return sqrt(pow(v.x, 2) + pow(v.y, 2))


def to_dir(start: Vec, end: Vec) -> Vec:
    x = end.x - start.x
    y = end.y - start.y
    return Vec(x, y)


def normalize(v: Vec) -> Vec:
    mag = magnitude(v)
    x = v.x / mag
    y = v.y / mag
    return Vec(x, y)


def dot_product(a: Vec, b: Vec) -> float:
    return a.x * b.x + a.y * b.y


def to_center_pos(pos, width, height) -> Vec:
    x = pos.x + width / 2
    y = pos.y + height / 2
    return Vec(x, y)


def init_fov(player: Player, bot: Bot) -> float:
    bot_pos = to_center_pos(bot.pos, bot.width, bot.height)
    player_pos = to_center_pos(player.pos, player.width, player.height)
    to_bot_dir = normalize(to_dir(player_pos, bot_pos))
    dot = dot_product(normalize(player.dir), to_bot_dir)
    return dot


def update_fov(fov: float, state: State) -> float:
    bot = state.entities[state.ids.bot]
    player = state.entities[state.ids.player]
    return init_fov(player.state, bot.state)


def view_fov(fov: float):
    return None


# Player

def init_player(boundary: Box) -> Player:
    boundary_diagonal = sqrt(pow(boundary.height, 2) + pow(boundary.width, 2))

    controller = FuzzyLogic(
        inputs={
            "distance": Fuzzy.variable([0, boundary_diagonal], {
                "near": Fuzzy.gaussian(0, 50),
                "neutral": Fuzzy.trapezoid(32, 80, 180, 228),
                "far": Fuzzy.ramp(100, 300)
            })
        },
        outputs={
            "brakes": Fuzzy.variable([0, 100], {
                "low": Fuzzy.gaussian(30, 20),
                "medium": Fuzzy.gaussian(70, 20),
                "high": Fuzzy.gaussian(100, 10),
            })
        },
        rules=[
            Fuzzy['or']({"distance": "near",}, {"brakes": "high"}),
            Fuzzy['or']({"distance": "neutral", }, {"brakes": "medium"}),
            Fuzzy['or']({"distance": "far", }, {"brakes": "low"}),
        ])

    return Player(
        width=50,
        height=50,
        brakes=0.0,
        color="blue",
        dir=Vec(1, 0),
        pos=Vec(x=0, y=0),
        controller=controller)


def update_player_pos(player: Player, boundary: Box, keyboard: Keyboard) -> Vec:
    dt = 1.666
    speed_multiplier = 3
    brakes = (player.brakes / 100)
    base_speed = max(0.0, 1.0 - brakes)
    speed = base_speed * speed_multiplier

    x = player.pos.x + (to_x(keyboard) * speed * dt)
    y = player.pos.y + (to_y(keyboard) * speed * dt)

    player.pos.x = min(
        max(boundary.pos.x, x),
        boundary.pos.x + boundary.width - player.width)

    player.pos.y = min(
        max(boundary.pos.y, y),
        boundary.pos.y + boundary.height - player.height)

    return player.pos


def update_player_dir(player: Player, keyboard: Keyboard) -> Vec:
    x = to_x(keyboard)
    y = to_y(keyboard)

    if x != 0 or y != 0:
        player.dir.x = x
        player.dir.y = y

    return player.dir


def update_player_brakes(player: Player, proximity: Proximity) -> float:
    result = Fuzzy.defuzz(
        player.controller.inputs,
        player.controller.outputs,
        player.controller.rules,
        {"distance": proximity.distance})

    return result.brakes


def update_player(player: Player, state: State) -> Player:
    boundary = state.entities[state.ids.boundary]
    proximity = state.entities[state.ids.proximity]

    player.brakes = update_player_brakes(player, proximity.state)
    player.dir = update_player_dir(player, state.keyboard)
    player.pos = update_player_pos(player, boundary.state, state.keyboard)

    return player


def view_player(player: Player):
    return view_box(player)


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
        state=init_player(boundary.state),
        update_=update_player,
        view=view_player)

    bot = Entity(
        id=Ids.bot,
        update_=lambda _state: _state,
        view=view_box,
        state=Box(
            width=50,
            height=50,
            color="red",
            pos=Vec(x=100, y=100)))

    proximity = Entity(
        id=Ids.proximity,
        state=init_proximity(player.state, bot.state),
        update_=update_proximity,
        view=view_proximity)

    fov = Entity(
        id=Ids.fov,
        state=init_fov(player.state, bot.state),
        update_=update_fov,
        view=view_fov)

    entities = dict(
        boundary=boundary,
        proximity=proximity,
        fov=fov,
        player=player,
        bot=bot)

    state = Ref(
        value=State(
            ids=Ids(),
            entities=entities,
            keyboard=Keyboard()))

    return state


# Subscriptions

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


def delay(ms, msg):
    return [timeout, (msg, ms)]


def every(ms, msg):
    return [interval, (msg, ms)]


def clock(msg):
    return [run_clock, msg]


def keyboard_change(is_down):
    def to_msg(key):
        return KeyChange(is_down=is_down, key=key)
    return to_msg


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

    if msg.key is "ArrowUp":
        keyboard.up = msg.is_down
    if msg.key is "ArrowDown":
        keyboard.down = msg.is_down
    if msg.key is "ArrowLeft":
        keyboard.left = msg.is_down
    if msg.key is "ArrowRight":
        keyboard.right = msg.is_down

    return keyboard


def update(ref: Ref, msg) -> Ref:
    """
    Responsible for:
        * transitioning the program's state machine based on the interactions in the program
    """
    state = ref.value

    if type(msg) is Tick:
        for entity in state.entities.values():
            if entity.id in [Ids.proximity, Ids.fov]:
                continue
            state.entities[entity.id].state = entity.update_(entity.state, state)

        proximity = state.entities[state.ids.proximity]
        proximity.state = proximity.update_(proximity.state, state)
        state.entities[proximity.id] = proximity

        fov = state.entities[state.ids.fov]
        fov.state = fov.update_(fov.state, state)
        state.entities[fov.id] = fov

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

def view_viz(variable, elem_id):
    def renderViz():
        svg = FuzzyViz.varToSvg(variable, dict(samples=200))
        document.getElementById(elem_id).innerHTML = svg
    window.setTimeout(renderViz, 0)


def view_stat(key, value):
    return Html.div({"class": "stat-field"}, [
        Html.span({"class": "stat-label"}, [
            Html.text(f"{key}: "),
        ]),
        Html.text(value)
    ])


def view(ref: Ref):
    """
    Visualizes the entire program state as maze of cells with controls to traverse the maze
    """
    state = ref.value
    fov = state.entities[state.ids.fov].state
    player = state.entities[state.ids.player].state
    boundary = state.entities[state.ids.boundary].state
    proximity = state.entities[state.ids.proximity].state

    return Html.main({"class": "container"}, [
        Html.div({"class": "canvas"}, [
            Svg.svg(dict(
                width=boundary.width,
                height=boundary.height,
                viewBox=f"0 0 {boundary.width} {boundary.height}",
            ), [
                Svg.g({}, [
                    entity.view(entity.state) for entity in state.entities.values()
                ])
            ]),
        ]),
        Html.div({"class": "stats"}, [
            Html.div({"class": "stat-row"}, [
                Html.div({"class": "stat-column"}, [
                    view_stat("Field of View", fov),
                    view_stat("Input Distance", proximity.distance),
                    view_stat("Output Brakes", Fuzzy.defuzz(
                        player.controller.inputs,
                        player.controller.outputs,
                        player.controller.rules,
                        {"distance": proximity.distance}).brakes),

                    # Html.div({"class": "stat-field"}, [
                    #     view_stat(k, v) for (k, v) in
                    # ]),
                ]),

                Html.div({"class": "stat-column"}, [
                    view_stat("Distance Type", Fuzzy.classify(player.controller.inputs.distance, proximity.distance)),
                    view_stat("Brakes State", Fuzzy.classify(player.controller.outputs.brakes, player.brakes)),
                ]),
            ]),

            Html.div({"class": "fuzzy-input-chart"}, [
                Html.div(dict(id="distance-viz"), []),
                view_viz(player.controller.inputs.distance, "distance-viz")
            ]),

            Html.div({"class": "fuzzy-input-chart"}, [
                Html.div(dict(id="brakes-viz"), []),
                view_viz(player.controller.outputs.brakes, "brakes-viz")
            ]),
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
