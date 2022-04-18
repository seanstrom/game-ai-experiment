from typing import Any

# __pragma__ ('skip')
def require(lib):
    return lib

class document:
    getElementById = None
    addEventListener = None

def __new__(*args) -> Any:
    pass
# __pragma__ ('noskip')


# Globals FFI

window = require('global/window')
console = require('global/console')
document = require('global/document')


# JSON

Json = window.JSON


# Polyfill asdict for dataclasses

def asdict(data):
    props = dict()
    propNames = window.Object['keys'](data)

    for propName in propNames:
        if "__" in propName:
            continue
        else:
            props[propName] = data[propName]

    return props
