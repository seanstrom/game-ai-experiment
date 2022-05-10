from math import sqrt
from dataclasses import dataclass
from typing import Any, Dict, List, Callable
from ffi.js import document, field, is_nan, window, Html, Hyper, Svg, Fuzzy, FuzzyViz


# Platform

@dataclass
class Tick:
    """
    The game loop tick event
    """
    pass


@dataclass
class Vec:
    x: float = 0
    y: float = 0


@dataclass
class Box:
    pos: Vec = Vec()
    color: str = ""
    width: float = 0
    height: float = 0


@dataclass
class Pawn(Box):
    dir: Vec = Vec()


@dataclass
class Entity:
    id: str = ""
    state: Any = None
    view: Callable[[Any], Any] = None
    update_: Callable[[Any, Any], Any] = None


@dataclass
class Entities:
    """
    * The data structure that references all game entities
    * and maintains their update and rendering orders
    """
    data: Dict[str, Entity] = field(default_factory=list)
    background: List[str] = field(default_factory=list)
    observers: List[str] = field(default_factory=list)
    pawns: List[str] = field(default_factory=list)

    def get(self, entity_id: str):
        return self.data[entity_id]


@dataclass
class FuzzyLogic:
    """
    The data structure that stores the fuzzy logic controller arguments
    """
    inputs: Dict[str, Any] = field(default_factory=dict)
    outputs: Dict[str, Any] = field(default_factory=dict)
    rules: List[Any] = field(default_factory=list)


class RelDir:
    """
    All of these possible movement directions based on keyboard input
    """
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
    return normalize(to_dir(origin_center, target_center))


def input_dir(dir: Vec):
    return Vec(x=round(dir.x, 0), y=round(dir.y, 0))


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
    """
    The data structure that stores the states of the keyboard arrow keys
    """
    up: bool = False
    down: bool = False
    left: bool = False
    right: bool = False


@dataclass
class KeyChange:
    """
    The event data structure that emits when a keyboard key is pressed or released
    """
    key: str = ""
    is_down: bool = False


class ArrowKeys:
    """
    The constants for the arrow key string identifiers
    """
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
    """
    The string constants for all the game entities
    """
    bot: str = "bot"
    player: str = "player"
    boundary: str = "boundary"
    proximity: str = "proximity"
    visibility: str = "visibility"


class BotModes:
    """
    The string constants for all of the AI bot behaviour states
    """
    stop = "stop"
    start = "start"
    restart = "restart"
    patrol = "patrol"
    pursue = "pursue"
    attack = "attack"


@dataclass()
class BotConfig:
    """
    The AI bot configuration for the step counter, patrol directions, and bot speed
    """
    max_steps = 2
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
        f"{BotModes.restart}": 1,
        f"{BotModes.patrol}": 1,
        f"{BotModes.pursue}": 1.75,
        f"{BotModes.attack}": 2.5,
    }


@dataclass
class Bot(Pawn):
    """
    The AI bot's state data structure that stores:
        * the AI bot step counter
        * the aggression level
        * its mode / behaviour state
        * the fuzzy logic controller for aggression level
        * the AI bot configuration
    """
    steps: int = 0
    aggression: float = 0.0
    mode: str = BotModes.start
    controller: FuzzyLogic = FuzzyLogic()
    config: BotConfig = BotConfig


@dataclass
class Player(Pawn):
    """
    * The wrapping data structure of the Pawn class
    * Ready to be extended
    """
    pass


@dataclass
class Proximity(Box):
    """
    The data structure for storing the proximity sensor data
    """
    distance: float = 0.0
    inner_rect: Box = Box()
    outer_rect: Box = Box()


@dataclass
class State:
    """
    The game state data structure that stores:
        * entity ids
        * keyboard state
        * entity state
        * entity rendering and updating orders
    """
    ids: Ids = Ids()
    keyboard: Keyboard = Keyboard()
    entities: Entities = Entities()
    update_order: List[str] = list()
    render_order: List[str] = list()
    show_stats: bool = False
    show_charts: bool = False


@dataclass
class Ref:
    """
    A reference data structure for wrapping the game state
    """
    value: State = State()


def within_boundary(item: (Box, Vec), boundary: (Box, Vec)) -> Vec:
    """
    * Clamp the position of the AI bot or player based on the game's boundary
    """
    (item_box, item_pos) = item
    (boundary_box, boundary_offsets) = boundary

    x = min(
        max(boundary_box.pos.x + boundary_offsets.x, item_pos.x),
        boundary_box.pos.x + boundary_box.width - item_box.width - boundary_offsets.x)

    y = min(
        max(boundary_box.pos.y + boundary_offsets.y, item_pos.y),
        boundary_box.pos.y + boundary_box.height - item_box.height - boundary_offsets.y)

    return Vec(x, y)


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
    """
    * Calculate the minimum distance between the player and AI bot
    """
    outer_rect = make_outer_rect(player, bot)
    inner_rect = make_inner_rect(outer_rect, player, bot)

    width = max(0.0, outer_rect.width - player.width - bot.width)
    height = max(0.0, outer_rect.height - player.height - bot.height)
    min_distance = sqrt(pow(height, 2) + pow(width, 2))

    return (outer_rect, inner_rect, min_distance)


def init_proximity(player: Player, bot: Bot) -> Proximity:
    """
    * Initialize the proximity sensor state
    """
    (outer_rect, inner_rect, distance) = detect_proximity(player, bot)
    return Proximity(distance=distance, outer_rect=outer_rect, inner_rect=inner_rect)


def update_proximity(proximity: Proximity, state: State) -> Proximity:
    """
    * Update the proximity sensor with the minimum distance between the player and the AI bot
    """
    bot = state.entities.get(state.ids.bot)
    player = state.entities.get(state.ids.player)
    (outer_rect, inner_rect, distance) =\
        detect_proximity(player.state, bot.state)

    proximity.distance = distance
    proximity.inner_rect = inner_rect
    proximity.outer_rect = outer_rect
    return proximity


def view_proximity(proximity: Proximity):
    """
    * Visualize the proximity between the player and the AI bot
    """
    return Svg.g({}, [
        view_box(proximity.outer_rect),
        view_box(proximity.inner_rect)
    ])


# Visibility

def init_visibility(origin: Pawn, target: Pawn) -> float:
    """
    * Initialize the state for the visibility of the player for the AI bot
    """
    target_pos = to_center_pos(target)
    origin_pos = to_center_pos(origin)
    to_target_dir = normalize(to_dir(origin_pos, target_pos))
    dot = dot_product(normalize(origin.dir), to_target_dir)
    return dot


def update_visibility(_visibility: float, state: State) -> float:
    """
    * Update the sensor data for the visibility of the player for the AI bot
    """
    bot = state.entities.get(state.ids.bot)
    player = state.entities.get(state.ids.player)
    return init_visibility(bot.state, player.state)


def view_visibility(visibility: float, state: State):
    return None


# Player

def init_player() -> Player:
    """
    * Initialize the player state
    """
    return Player(
        width=50,
        height=50,
        color="#8ca9ff",
        dir=Vec(1, 0),
        pos=Vec(x=5, y=5))


def update_player_pos(player: Player, boundary: Box, keyboard: Keyboard) -> Vec:
    """
    * Update the player's position based on keyboard input
    """
    dt = 1.666
    speed_multiplier = 3
    speed = 1.0 * speed_multiplier
    x = player.pos.x + (to_x_dir(keyboard) * speed * dt)
    y = player.pos.y + (to_y_dir(keyboard) * speed * dt)
    return within_boundary((player, Vec(x, y)), (boundary, Vec(3, 3)))


def update_player_dir(player: Player, keyboard: Keyboard) -> Vec:
    """
    * Update the player's direction
    * Keep the player's last moving direction if idle
    """
    x = to_x_dir(keyboard)
    y = to_y_dir(keyboard)

    if x != 0 or y != 0:
        player.dir.x = x
        player.dir.y = y

    return player.dir


def update_player(player: Player, state: State) -> Player:
    """
    * Update the player's state for its position and direction
    """
    boundary = state.entities.get(state.ids.boundary)
    player.dir = update_player_dir(player, state.keyboard)
    player.pos = update_player_pos(player, boundary.state, state.keyboard)
    return player


def view_player(player: Player):
    """
    * Visualize the player as a blue box
    """
    return view_box(player)


# Bot

def init_bot(boundary: Box):
    """
    * Initialize the state of the AI bot
    * Configure the fuzzy logic controller for the aggression level
    """
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
            "visibility": Fuzzy.variable([-1, 1], {
                "hidden": Fuzzy.gaussian(-1, 0.5),
                "peripheral": Fuzzy.gaussian(0, 0.1),
                "visible": Fuzzy.gaussian(1, 0.5)
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
                {"distance": "near", "visibility": "visible"},
                {"aggression": "high"}),
            Fuzzy.and_(
                {"distance": "near", "visibility": "peripheral"},
                {"aggression": "medium"}),
            Fuzzy.and_(
                {"distance": "near", "visibility": "hidden"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "neutral", "visibility": "visible"},
                {"aggression": "medium"}),
            Fuzzy.and_(
                {"distance": "neutral", "visibility": "peripheral"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "neutral", "visibility": "hidden"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "far", "visibility": "visible"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "far", "visibility": "peripheral"},
                {"aggression": "low"}),
            Fuzzy.and_(
                {"distance": "far", "visibility": "hidden"},
                {"aggression": "low"}),
        ])

    return Bot(
        color="#ff9393",
        pos=pos,
        config=config,
        width=width,
        height=height,
        dir=RelDir.Right,
        mode=BotModes.start,
        steps=config.max_steps,
        controller=controller)


def update_bot_aggression(bot: Bot, proximity: Proximity, visibility: float) -> float:
    """
    * Execute the fuzzy logic controller for the aggression level based on:
        * player proximity
        * player visibility
    """
    result = Fuzzy.defuzz(
        bot.controller.inputs,
        bot.controller.outputs,
        bot.controller.rules,
        {"distance": proximity.distance, "visibility": visibility})
    return result.aggression


def update_bot_mode(bot: Bot, boundary: Box) -> str:
    """
    * Update the AI bot's behaviour state based on its aggression level
    * Coordinate the AI bot to:
        * attack when very near to a visible player
        * pursue when near a visible player
        * patrol when not near a visible player
        * return to its post if it lost or caught the player
    """
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
    """
    * Update the direction the AI bot is facing base on its behaviour state
    * Coordinate the AI bot to walk in circles when on patrol
    """
    if bot.mode in [BotModes.start, BotModes.restart]:
        return relative_dir(bot, boundary)

    if bot.mode in [BotModes.pursue, BotModes.attack]:
        return relative_dir(bot, player)

    if bot.mode is BotModes.stop:
        return RelDir.Zero

    if bot.mode is BotModes.patrol and bot.steps is 0:
        keyboard_dir = input_dir(bot.dir)
        for (prev_dir, next_dir) in bot.config.patrol_dirs:
            if is_vec_eq(keyboard_dir, prev_dir):
                return normalize(
                    Vec(x=bot.dir.x + (next_dir.x * 0.1),
                        y=bot.dir.y + next_dir.y * 0.1))
        return Vec(x=round(bot.dir.x, 0), y=round(bot.dir.y, 0))

    return bot.dir


def update_bot_pos(bot: Bot, boundary: Box) -> Vec:
    """
    * Update the position of the AI bot
    * Adapt the speed of the AI bot based on its behaviour state
    """
    dt = 1.666
    speed = 1 * (bot.config.speeds[bot.mode] or 1)
    x = bot.pos.x + (bot.dir.x * speed * dt)
    y = bot.pos.y + (bot.dir.y * speed * dt)
    return within_boundary((bot, Vec(x, y)), (boundary, Vec(3, 3)))


def update_bot_steps(bot: Bot) -> int:
    """
    * Decrement the step counter or reset the counter if at zero
    """
    if bot.mode is BotModes.patrol:
        if bot.steps == 0:
            return bot.config.max_steps
        return bot.steps - 1
    else:
        return bot.config.max_steps


def update_bot(bot: Bot, state: State) -> Bot:
    """
    * Update the AI bot state
        * the amount of steps taken by the AI bot on patrol
        * the aggression level by the AI bot
        * the behaviour mode of the AI bot
        * the direction the AI bot is facing
        * the position of the AI bot
    """
    player = state.entities.get(state.ids.player)
    boundary = state.entities.get(state.ids.boundary)
    proximity = state.entities.get(state.ids.proximity)
    visibility = state.entities.get(state.ids.visibility)
    bot.steps = update_bot_steps(bot)
    bot.aggression = update_bot_aggression(bot, proximity.state, visibility.state)
    bot.mode = update_bot_mode(bot, boundary.state)
    bot.dir = update_bot_dir(bot, player.state, boundary.state)
    bot.pos = update_bot_pos(bot, boundary.state)
    return bot


def view_bot(bot: Bot):
    """
    * Visualize the AI bot as a red square
    * Visualize an indicator for the direction the AI bot is facing
    """
    center = to_center_pos(bot)
    arrow_center = Vec(
        (center.x + bot.dir.x * 15),
        (center.y + bot.dir.y * 15))
    other_center = Vec(
        (arrow_center.x + bot.dir.x * 10),
        (arrow_center.y + bot.dir.y * 10))

    return Svg.g({}, [
        view_box(bot),
        Svg.line({
            "x1": center.x,
            "y1": center.y,
            "x2": arrow_center.x,
            "y2": arrow_center.y,
            "stroke": "black",
        }),
        Svg.line({
            "x1": arrow_center.x,
            "y1": arrow_center.y,
            "x2": other_center.x,
            "y2": other_center.y,
            "stroke": "black",
            "stroke-width": 3,
        })
    ])


# Init

def init() -> Ref:
    """
    * Initialize the entire game state
    * Create the state for all entities like the AI bot and player
    """
    boundary = Entity(
        id=Ids.boundary,
        update_=lambda _state: _state,
        view=view_box,
        state=Box(
            width=600,
            height=400,
            color='#5d6177',
            pos=Vec(x=0, y=0)))

    player = Entity(
        id=Ids.player,
        state=init_player(),
        update_=update_player,
        view=view_player)

    bot = Entity(
        id=Ids.bot,
        update_=update_bot,
        view=view_bot,
        state=init_bot(boundary.state))

    proximity = Entity(
        id=Ids.proximity,
        state=init_proximity(player.state, bot.state),
        update_=update_proximity,
        view=view_proximity)

    visibility = Entity(
        id=Ids.visibility,
        state=init_visibility(bot.state, player.state),
        update_=update_visibility,
        view=view_visibility)

    entities = Entities(
        background=[Ids.boundary],
        observers=[Ids.visibility, Ids.proximity],
        pawns=[Ids.player, Ids.bot],
        data=dict(
            bot=bot,
            visibility=visibility,
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
    """
    * Configure game to listen for clock ticks at 60 FPS
    * Configure game to listen for keyboard presses for the player inputs
    """
    tick = action(Tick())
    return [
        clock(tick),
        keyboard_up(keyboard_change(False)),
        keyboard_down(keyboard_change(True))
    ]


# Update

class ToggleStats:
    pass


class ToggleCharts:
    pass


def update_keyboard(state, msg):
    """
    * Update the state of the keyboard bindings based on keyboard events
    """
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
    * Listen for keyboard events from the web browser
    * Listen for clock "ticks" to render the game at 60 FPS
    * Update the state of the game and all entities every frame
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

    if type(msg) is ToggleStats:
        state.show_stats = not state.show_stats
        return Ref(value=state)

    if type(msg) is ToggleCharts:
        state.show_charts = not state.show_charts
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
    stroke_color = "#374048"

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
        Html.div({"class": "stat-label"}, [
            Html.text(f"{key}: "),
        ]),
        Html.text(value)
    ])


def view_chart(key, value):
    elem_id = f"{key}-viz"
    svg = FuzzyViz.varToSvg(value, dict(samples=200, width=600, height=120))
    return Html.div({"class": "stat-row fuzzy-input-chart"}, [
        Html.div({"class": "chart-label"}, [
            Html.text(f"{key.capitalize()} Memberships")
        ]),
        Html.div(dict(id=elem_id, innerHTML=svg), [])
    ])


def view_stats(state: State):
    if not state.show_stats:
        return None

    bot = state.entities.get(state.ids.bot).state
    proximity = state.entities.get(state.ids.proximity).state
    visibility = state.entities.get(state.ids.visibility).state

    return Html.div({"class": "stats"}, [
        Html.div({"class": "stat-row"}, [
            Html.div({"class": "stat-column"}, [
                view_stat(
                    "Visibility",
                    Fuzzy.classify(bot.controller.inputs.visibility, visibility, 0.20).capitalize()
                ),
                view_stat("Proximity Distance", round(proximity.distance, 3)),
            ]),

            Html.div({"class": "stat-column"}, [
                view_stat(
                    "Proximity Level",
                    Fuzzy.classify(bot.controller.inputs.distance, proximity.distance).capitalize()),
                view_stat(
                    "Aggression Level",
                    Fuzzy.classify(bot.controller.outputs.aggression, bot.aggression).capitalize()),
            ])
        ])
    ])


def view_charts(state: State):
    if not state.show_charts:
        return None

    bot = state.entities.get(state.ids.bot).state
    return Html.div({"class": "charts"}, [
        view_chart('distance', bot.controller.inputs.distance),
        view_chart('visibility', bot.controller.inputs.visibility),
        view_chart('aggression', bot.controller.outputs.aggression),
    ])


def view(ref: Ref):
    """
    * Visualize the AI bot and player boxes
    * Visualize the metrics between the AI bot and player
    * Visualize the membership functions for the fuzzy logic controller
    """
    state = ref.value
    boundary = state.entities.get(state.ids.boundary).state

    def render_entity(entity):
        if entity.id is state.ids.proximity: return None
        return entity.view(entity.state)

    return Html.main({"class": "container"}, [
        Html.div({"class": "canvas"}, [
            Svg.svg(dict(
                width=boundary.width,
                height=boundary.height,
                viewBox=f"0 0 {boundary.width} {boundary.height}",
            ), [
                Svg.g({}, [
                    render_entity(state.entities.get(entity_id))
                    for entity_id in state.render_order
                ])
            ]),
        ]),
        Html.div({"class": "buttons"}, [
            Html.button({"onclick": action(ToggleStats())}, [
                Html.text("Hide Stats" if state.show_stats else "Show Stats")
            ]),
            Html.button({"onclick": action(ToggleCharts())}, [
                Html.text("Hide Charts" if state.show_stats else "Show Charts")
            ])
        ]),
        view_stats(state),
        view_charts(state)
    ])


# Main

def main():
    """
    * Initialize the rendering of the game loop
    * Render each frame to the web page
    """
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init, subscriptions=subscriptions)

