from dataclasses import dataclass
from ffi.js import asdict, document, window, Html, Hyper, Svg


# State

@dataclass
class Coord:
    x: float = 0
    y: float = 0


@dataclass
class Keyboard:
    up: bool = False
    down: bool = False
    left: bool = False
    right: bool = False


@dataclass
class State:
    dir: str = ""
    pos: Coord = None
    keyboard: Keyboard = None


@dataclass
class Tick:
    pass


@dataclass
class KeyChange:
    key: str = ""
    isDown: bool = False


# Init

def init():
    state = State(
        dir="right",
        pos=Coord(x=0, y=0),
        keyboard=Keyboard())
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


def keyboard_change(isDown):
    def to_msg(key):
        return KeyChange(isDown=isDown, key=key)
    return to_msg


def subscriptions():
    tick = action(Tick())
    return [
        clock(tick),
        keyboard_up(keyboard_change(False)),
        keyboard_down(keyboard_change(True))
    ]


# Update

def update_pos(state):
    pos = state.pos
    dt = 1.666
    size = 1

    def to_x(keyboard):
        return (1 if keyboard.right else 0) - (1 if keyboard.left else 0)

    def to_y(keyboard):
        return (1 if keyboard.down else 0) - (1 if keyboard.up else 0)

    x = pos.x + (to_x(state.keyboard) * size * dt)
    y = pos.y + (to_y(state.keyboard) * size * dt)
    return Coord(x=x, y=y)


def update_keyboard(state, msg):
    keyboard = state.keyboard

    if msg.key is "ArrowUp":
        keyboard.up = msg.isDown
    if msg.key is "ArrowDown":
        keyboard.down = msg.isDown
    if msg.key is "ArrowLeft":
        keyboard.left = msg.isDown
    if msg.key is "ArrowRight":
        keyboard.right = msg.isDown

    return keyboard


def update(state, msg):
    """
    Responsible for:
        * transitioning the program's state machine based on the interactions in the program
    """
    if type(msg) is Tick:
        next_state = State(**asdict(state))
        next_state.pos = update_pos(next_state)
        return next_state

    if type(msg) is KeyChange:
        next_state = State(**asdict(state))
        next_state.keyboard = update_keyboard(state, msg)
        return next_state

    return state


def action(msg):
    """
    Returns a function that will update the program state when called
    """
    return lambda state: update(state, msg)


# Views

def view_player(coord):
    return Svg.rect({
        "transform": f"translate({coord.x}, {coord.y})",
        "width": 50,
        "height": 50,
        "fill": "#bcaba0",
        "stroke": "#706660",
        "stroke-width": 2
    })


def view(state):
    """
    Visualizes the entire program state as maze of cells with controls to traverse the maze
    """
    width = 600
    height = 400

    return Html.main({"class": "container"}, [
        Svg.svg(dict(
            viewBox=f"0 0 {width} {height}",
            width=width,
            height=height
        ), [
            Svg.g({}, [
                Svg.rect(dict(x=0, y=0, width=width, height=height, fill='#a4b398')),
                view_player(state.pos)
            ])
        ])
    ])


# Main

def main():
    """
    * Initializes the search of a maze layout with a search strategy
    * Visualize the maze of cells as HTML elements
    """
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init, subscriptions=subscriptions)
