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


# Hyperapp FFI

Hyper = require('hyperapp')
Html = require('@hyperapp/html')
Svg = require('@hyperapp/svg')


# Thi-ng Fuzzy FFI

Fuzzy = require('@thi.ng/fuzzy')
Fuzzy['or_'] = Fuzzy['or']
Fuzzy['and_'] = Fuzzy['and']

FuzzyViz = require('@thi.ng/fuzzy-viz')


# Globals FFI

window = require('global/window')
console = require('global/console')
document = require('global/document')

is_nan = window.Number.js_isNaN


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


# Polyfill field for dataclasses

def field(default_factory=None):
    if default_factory:
        return default_factory()
    else:
        return default_factory
