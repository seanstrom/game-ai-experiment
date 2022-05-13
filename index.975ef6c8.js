// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _mainPy = require("./main.py");
var _indexScss = require("./index.scss");
_mainPy.main();

},{"./main.py":"lKqyR","./index.scss":"lJZlQ"}],"lKqyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainJs = require("../.build/main.js");
parcelHelpers.exportAll(_mainJs, exports);

},{"../.build/main.js":"ksBEn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tick", ()=>Tick
);
parcelHelpers.export(exports, "Vec", ()=>Vec
);
parcelHelpers.export(exports, "Box", ()=>Box
);
parcelHelpers.export(exports, "Pawn", ()=>Pawn
);
parcelHelpers.export(exports, "Entity", ()=>Entity
);
parcelHelpers.export(exports, "Entities", ()=>Entities
);
parcelHelpers.export(exports, "FuzzyLogic", ()=>FuzzyLogic
);
parcelHelpers.export(exports, "RelDir", ()=>RelDir
);
parcelHelpers.export(exports, "magnitude", ()=>magnitude
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "dot_product", ()=>dot_product
);
parcelHelpers.export(exports, "to_center_pos", ()=>to_center_pos
);
parcelHelpers.export(exports, "is_centered_within", ()=>is_centered_within
);
parcelHelpers.export(exports, "to_dir", ()=>to_dir
);
parcelHelpers.export(exports, "relative_dir", ()=>relative_dir
);
parcelHelpers.export(exports, "input_dir", ()=>input_dir
);
parcelHelpers.export(exports, "is_vec_eq", ()=>is_vec_eq
);
parcelHelpers.export(exports, "concat", ()=>concat
);
parcelHelpers.export(exports, "run_clock", ()=>run_clock
);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
parcelHelpers.export(exports, "interval", ()=>interval
);
parcelHelpers.export(exports, "delay", ()=>delay
);
parcelHelpers.export(exports, "every", ()=>every
);
parcelHelpers.export(exports, "clock", ()=>clock
);
parcelHelpers.export(exports, "Keyboard", ()=>Keyboard
);
parcelHelpers.export(exports, "KeyChange", ()=>KeyChange
);
parcelHelpers.export(exports, "ArrowKeys", ()=>ArrowKeys
);
parcelHelpers.export(exports, "is_arrow_key", ()=>is_arrow_key
);
parcelHelpers.export(exports, "keyboard_change", ()=>keyboard_change
);
parcelHelpers.export(exports, "to_x_dir", ()=>to_x_dir
);
parcelHelpers.export(exports, "to_y_dir", ()=>to_y_dir
);
parcelHelpers.export(exports, "run_keyboard_up", ()=>run_keyboard_up
);
parcelHelpers.export(exports, "keyboard_up", ()=>keyboard_up
);
parcelHelpers.export(exports, "run_keyboard_down", ()=>run_keyboard_down
);
parcelHelpers.export(exports, "keyboard_down", ()=>keyboard_down
);
parcelHelpers.export(exports, "Ids", ()=>Ids
);
parcelHelpers.export(exports, "BotModes", ()=>BotModes
);
parcelHelpers.export(exports, "BotConfig", ()=>BotConfig
);
parcelHelpers.export(exports, "Bot", ()=>Bot
);
parcelHelpers.export(exports, "Player", ()=>Player
);
parcelHelpers.export(exports, "Proximity", ()=>Proximity
);
parcelHelpers.export(exports, "State", ()=>State
);
parcelHelpers.export(exports, "Ref", ()=>Ref
);
parcelHelpers.export(exports, "within_boundary", ()=>within_boundary
);
parcelHelpers.export(exports, "make_outer_rect", ()=>make_outer_rect
);
parcelHelpers.export(exports, "make_inner_rect", ()=>make_inner_rect
);
parcelHelpers.export(exports, "detect_proximity", ()=>detect_proximity
);
parcelHelpers.export(exports, "init_proximity", ()=>init_proximity
);
parcelHelpers.export(exports, "update_proximity", ()=>update_proximity
);
parcelHelpers.export(exports, "view_proximity", ()=>view_proximity
);
parcelHelpers.export(exports, "init_visibility", ()=>init_visibility
);
parcelHelpers.export(exports, "update_visibility", ()=>update_visibility
);
parcelHelpers.export(exports, "view_visibility", ()=>view_visibility
);
parcelHelpers.export(exports, "init_player", ()=>init_player
);
parcelHelpers.export(exports, "update_player_pos", ()=>update_player_pos
);
parcelHelpers.export(exports, "update_player_dir", ()=>update_player_dir
);
parcelHelpers.export(exports, "update_player", ()=>update_player
);
parcelHelpers.export(exports, "view_player", ()=>view_player
);
parcelHelpers.export(exports, "init_bot", ()=>init_bot
);
parcelHelpers.export(exports, "update_bot_aggression", ()=>update_bot_aggression
);
parcelHelpers.export(exports, "update_bot_mode", ()=>update_bot_mode
);
parcelHelpers.export(exports, "update_bot_dir", ()=>update_bot_dir
);
parcelHelpers.export(exports, "update_bot_pos", ()=>update_bot_pos
);
parcelHelpers.export(exports, "update_bot_steps", ()=>update_bot_steps
);
parcelHelpers.export(exports, "update_bot", ()=>update_bot
);
parcelHelpers.export(exports, "view_bot", ()=>view_bot
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "subscriptions", ()=>subscriptions
);
parcelHelpers.export(exports, "ToggleStats", ()=>ToggleStats
);
parcelHelpers.export(exports, "ToggleCharts", ()=>ToggleCharts
);
parcelHelpers.export(exports, "update_keyboard", ()=>update_keyboard
);
parcelHelpers.export(exports, "py_update", ()=>py_update
);
parcelHelpers.export(exports, "action", ()=>action
);
parcelHelpers.export(exports, "view_box", ()=>view_box
);
parcelHelpers.export(exports, "view_stat", ()=>view_stat
);
parcelHelpers.export(exports, "view_chart", ()=>view_chart
);
parcelHelpers.export(exports, "view_stats", ()=>view_stats
);
parcelHelpers.export(exports, "view_charts", ()=>view_charts
);
parcelHelpers.export(exports, "view", ()=>view
);
parcelHelpers.export(exports, "main", ()=>main
);
// Transcrypt'ed from Python, 2022-05-13 10:58:45
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var _ffiJsJs = require("./ffi.js.js");
var _typingJs = require("./typing.js");
var _dataclassesJs = require("./dataclasses.js");
var _mathJs = require("./math.js");
var __name__ = '__main__';
var Tick = _orgTranscryptRuntimeJs.__class__('Tick', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    }
});
for (let aClass of Tick.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Tick, aClass);
_orgTranscryptRuntimeJs.__mergefields__(Tick, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var Vec = _orgTranscryptRuntimeJs.__class__('Vec', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    x: 0,
    y: 0
});
for (let aClass1 of Vec.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Vec, aClass1);
_orgTranscryptRuntimeJs.__mergefields__(Vec, {
    __reprfields__: new Set([
        'x',
        'y'
    ]),
    __comparefields__: new Set([
        'x',
        'y'
    ]),
    __initfields__: new Set([
        'x',
        'y'
    ])
});
var Box = _orgTranscryptRuntimeJs.__class__('Box', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    pos: Vec(),
    color: '',
    width: 0,
    height: 0
});
for (let aClass2 of Box.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Box, aClass2);
_orgTranscryptRuntimeJs.__mergefields__(Box, {
    __reprfields__: new Set([
        'pos',
        'color',
        'width',
        'height'
    ]),
    __comparefields__: new Set([
        'pos',
        'color',
        'width',
        'height'
    ]),
    __initfields__: new Set([
        'pos',
        'color',
        'width',
        'height'
    ])
});
var Pawn = _orgTranscryptRuntimeJs.__class__('Pawn', [
    Box
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    dir: Vec()
});
for (let aClass3 of Pawn.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Pawn, aClass3);
_orgTranscryptRuntimeJs.__mergefields__(Pawn, {
    __reprfields__: new Set([
        'dir'
    ]),
    __comparefields__: new Set([
        'dir'
    ]),
    __initfields__: new Set([
        'dir'
    ])
});
var Entity = _orgTranscryptRuntimeJs.__class__('Entity', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    id: '',
    state: null,
    view: null,
    update_: null
});
for (let aClass4 of Entity.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Entity, aClass4);
_orgTranscryptRuntimeJs.__mergefields__(Entity, {
    __reprfields__: new Set([
        'id',
        'state'
    ]),
    __comparefields__: new Set([
        'id',
        'state'
    ]),
    __initfields__: new Set([
        'id',
        'state'
    ])
});
var Entities = _orgTranscryptRuntimeJs.__class__('Entities', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    data: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    background: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    observers: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    pawns: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    get py_get () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, entity_id) {
            return self.data[entity_id];
        });
    }
});
for (let aClass5 of Entities.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Entities, aClass5);
_orgTranscryptRuntimeJs.__mergefields__(Entities, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var FuzzyLogic = _orgTranscryptRuntimeJs.__class__('FuzzyLogic', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    inputs: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.dict
    })),
    outputs: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.dict
    })),
    rules: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    }))
});
for (let aClass6 of FuzzyLogic.__bases__)_orgTranscryptRuntimeJs.__mergefields__(FuzzyLogic, aClass6);
_orgTranscryptRuntimeJs.__mergefields__(FuzzyLogic, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var RelDir = _orgTranscryptRuntimeJs.__class__('RelDir', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    Up: Vec(0, -1),
    Down: Vec(0, 1),
    Left: Vec(-1, 0),
    Right: Vec(1, 0),
    UpLeft: Vec(-1, -1),
    UpRight: Vec(1, -1),
    DownLeft: Vec(-1, 1),
    DownRight: Vec(1, 1),
    Zero: Vec(0, 0)
});
var magnitude = function(v) {
    return _mathJs.sqrt(_orgTranscryptRuntimeJs.pow(v.x, 2) + _orgTranscryptRuntimeJs.pow(v.y, 2));
};
var normalize = function(v) {
    var mag = magnitude(v);
    var normalized_x = v.x / mag;
    var normalized_y = v.y / mag;
    var x = _ffiJsJs.is_nan(normalized_x) ? 0 : normalized_x;
    var y = _ffiJsJs.is_nan(normalized_y) ? 0 : normalized_y;
    return Vec(x, y);
};
var dot_product = function(a, b) {
    return a.x * b.x + a.y * b.y;
};
var to_center_pos = function(box) {
    var x = box.pos.x + box.width / 2;
    var y = box.pos.y + box.height / 2;
    return Vec(x, y);
};
var is_centered_within = function(box, boundary) {
    var bot_pos = to_center_pos(box);
    var boundary_pos = to_center_pos(boundary);
    var x = _orgTranscryptRuntimeJs.round(_orgTranscryptRuntimeJs.abs(bot_pos.x - boundary_pos.x));
    var y = _orgTranscryptRuntimeJs.round(_orgTranscryptRuntimeJs.abs(bot_pos.y - boundary_pos.y));
    var is_centered = x <= 1 && y <= 1;
    return is_centered;
};
var to_dir = function(start, end) {
    var x = end.x - start.x;
    var y = end.y - start.y;
    return Vec(x, y);
};
var relative_dir = function(origin, target) {
    var origin_center = to_center_pos(origin);
    var target_center = to_center_pos(target);
    return normalize(to_dir(origin_center, target_center));
};
var input_dir = function(dir) {
    return Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
        x: _orgTranscryptRuntimeJs.round(dir.x, 0),
        y: _orgTranscryptRuntimeJs.round(dir.y, 0)
    }));
};
var is_vec_eq = function(a, b) {
    return a.x == b.x && a.y == b.y;
};
var concat = function() {
    var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(0));
    var result = [];
    for (var arg of args)result.extend(arg);
    return result;
};
var run_clock = function(dispatch, msg) {
    var send = function() {
        dispatch(msg);
        run_clock(dispatch, msg);
    };
    var id = _ffiJsJs.window.requestAnimationFrame(send);
    return function __lambda__() {
        return _ffiJsJs.window.cancelAnimationFrame(id);
    };
};
var timeout = function(dispatch, args) {
    var __left0__ = args;
    var msg = __left0__[0];
    var ms = __left0__[1];
    var send = function() {
        dispatch(msg);
    };
    var id = _ffiJsJs.window.setTimeout(send, ms);
    return function __lambda__() {
        return _ffiJsJs.window.clearTimeout(id);
    };
};
var interval = function(dispatch, args) {
    var __left0__ = args;
    var msg = __left0__[0];
    var ms = __left0__[1];
    var send = function() {
        dispatch(msg);
    };
    var id = _ffiJsJs.window.setInterval(send, ms);
    return function __lambda__() {
        return _ffiJsJs.window.clearInterval(id);
    };
};
var delay = function(ms, msg) {
    return [
        timeout,
        _orgTranscryptRuntimeJs.tuple([
            msg,
            ms
        ])
    ];
};
var every = function(ms, msg) {
    return [
        interval,
        _orgTranscryptRuntimeJs.tuple([
            msg,
            ms
        ])
    ];
};
var clock = function(msg) {
    return [
        run_clock,
        msg
    ];
};
var Keyboard = _orgTranscryptRuntimeJs.__class__('Keyboard', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    up: false,
    down: false,
    left: false,
    right: false
});
for (let aClass7 of Keyboard.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Keyboard, aClass7);
_orgTranscryptRuntimeJs.__mergefields__(Keyboard, {
    __reprfields__: new Set([
        'up',
        'down',
        'left',
        'right'
    ]),
    __comparefields__: new Set([
        'up',
        'down',
        'left',
        'right'
    ]),
    __initfields__: new Set([
        'up',
        'down',
        'left',
        'right'
    ])
});
var KeyChange = _orgTranscryptRuntimeJs.__class__('KeyChange', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    key: '',
    is_down: false
});
for (let aClass8 of KeyChange.__bases__)_orgTranscryptRuntimeJs.__mergefields__(KeyChange, aClass8);
_orgTranscryptRuntimeJs.__mergefields__(KeyChange, {
    __reprfields__: new Set([
        'key',
        'is_down'
    ]),
    __comparefields__: new Set([
        'key',
        'is_down'
    ]),
    __initfields__: new Set([
        'key',
        'is_down'
    ])
});
var ArrowKeys = _orgTranscryptRuntimeJs.__class__('ArrowKeys', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Left: 'ArrowLeft',
    Right: 'ArrowRight'
});
var is_arrow_key = function(key) {
    return _orgTranscryptRuntimeJs.__in__(key, [
        ArrowKeys.Up,
        ArrowKeys.Down,
        ArrowKeys.Left,
        ArrowKeys.Right
    ]);
};
var keyboard_change = function(is_down) {
    var to_msg = function(key) {
        return KeyChange(_orgTranscryptRuntimeJs.__kwargtrans__({
            is_down: is_down,
            key: key
        }));
    };
    return to_msg;
};
var to_x_dir = function(keyboard) {
    return (keyboard.right ? 1 : 0) - (keyboard.left ? 1 : 0);
};
var to_y_dir = function(keyboard) {
    return (keyboard.down ? 1 : 0) - (keyboard.up ? 1 : 0);
};
var run_keyboard_up = function(dispatch, to_msg) {
    var listener = function(event) {
        var msg = to_msg(event.key);
        if (msg !== null) dispatch(action(msg));
    };
    _ffiJsJs.window.addEventListener('keyup', listener);
    return function __lambda__() {
        return _ffiJsJs.window.removeEventListener('keyup', listener);
    };
};
var keyboard_up = function(to_msg) {
    return [
        run_keyboard_up,
        to_msg
    ];
};
var run_keyboard_down = function(dispatch, to_msg) {
    var listener = function(event) {
        var msg = to_msg(event.key);
        if (msg !== null) {
            if (is_arrow_key(event.key)) event.preventDefault();
            dispatch(action(msg));
        }
    };
    _ffiJsJs.window.addEventListener('keydown', listener);
    return function __lambda__() {
        return _ffiJsJs.window.removeEventListener('keydown', listener);
    };
};
var keyboard_down = function(to_msg) {
    return [
        run_keyboard_down,
        to_msg
    ];
};
var Ids = _orgTranscryptRuntimeJs.__class__('Ids', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    bot: 'bot',
    player: 'player',
    boundary: 'boundary',
    proximity: 'proximity',
    visibility: 'visibility'
});
for (let aClass9 of Ids.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Ids, aClass9);
_orgTranscryptRuntimeJs.__mergefields__(Ids, {
    __reprfields__: new Set([
        'bot',
        'player',
        'boundary',
        'proximity',
        'visibility'
    ]),
    __comparefields__: new Set([
        'bot',
        'player',
        'boundary',
        'proximity',
        'visibility'
    ]),
    __initfields__: new Set([
        'bot',
        'player',
        'boundary',
        'proximity',
        'visibility'
    ])
});
var BotModes = _orgTranscryptRuntimeJs.__class__('BotModes', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    stop: 'stop',
    start: 'start',
    restart: 'restart',
    patrol: 'patrol',
    pursue: 'pursue',
    attack: 'attack'
});
var BotConfig = _orgTranscryptRuntimeJs.__class__('BotConfig', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    max_steps: 2,
    patrol_dirs: [
        _orgTranscryptRuntimeJs.tuple([
            RelDir.Up,
            RelDir.UpRight
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.UpRight,
            RelDir.Right
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.Right,
            RelDir.DownRight
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.DownRight,
            RelDir.Down
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.Down,
            RelDir.DownLeft
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.DownLeft,
            RelDir.Left
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.Left,
            RelDir.UpLeft
        ]),
        _orgTranscryptRuntimeJs.tuple([
            RelDir.UpLeft,
            RelDir.Up
        ])
    ],
    speeds: _orgTranscryptRuntimeJs.dict([
        [
            '{}'.format(BotModes.stop),
            0
        ],
        [
            '{}'.format(BotModes.start),
            0
        ],
        [
            '{}'.format(BotModes.restart),
            1
        ],
        [
            '{}'.format(BotModes.patrol),
            1
        ],
        [
            '{}'.format(BotModes.pursue),
            1.75
        ],
        [
            '{}'.format(BotModes.attack),
            2.5
        ]
    ])
});
for (let aClass10 of BotConfig.__bases__)_orgTranscryptRuntimeJs.__mergefields__(BotConfig, aClass10);
_orgTranscryptRuntimeJs.__mergefields__(BotConfig, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var Bot = _orgTranscryptRuntimeJs.__class__('Bot', [
    Pawn
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    steps: 0,
    aggression: 0,
    mode: BotModes.start,
    controller: FuzzyLogic(),
    config: BotConfig
});
for (let aClass11 of Bot.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Bot, aClass11);
_orgTranscryptRuntimeJs.__mergefields__(Bot, {
    __reprfields__: new Set([
        'steps',
        'aggression',
        'mode',
        'controller',
        'config'
    ]),
    __comparefields__: new Set([
        'steps',
        'aggression',
        'mode',
        'controller',
        'config'
    ]),
    __initfields__: new Set([
        'steps',
        'aggression',
        'mode',
        'controller',
        'config'
    ])
});
var Player = _orgTranscryptRuntimeJs.__class__('Player', [
    Pawn
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    }
});
for (let aClass12 of Player.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Player, aClass12);
_orgTranscryptRuntimeJs.__mergefields__(Player, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var Proximity = _orgTranscryptRuntimeJs.__class__('Proximity', [
    Box
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    distance: 0,
    inner_rect: Box(),
    outer_rect: Box()
});
for (let aClass13 of Proximity.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Proximity, aClass13);
_orgTranscryptRuntimeJs.__mergefields__(Proximity, {
    __reprfields__: new Set([
        'distance',
        'inner_rect',
        'outer_rect'
    ]),
    __comparefields__: new Set([
        'distance',
        'inner_rect',
        'outer_rect'
    ]),
    __initfields__: new Set([
        'distance',
        'inner_rect',
        'outer_rect'
    ])
});
var State = _orgTranscryptRuntimeJs.__class__('State', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    ids: Ids(),
    keyboard: Keyboard(),
    entities: Entities(),
    update_order: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    render_order: _ffiJsJs.field(_orgTranscryptRuntimeJs.__kwargtrans__({
        default_factory: _orgTranscryptRuntimeJs.list
    })),
    show_stats: false,
    show_charts: false
});
for (let aClass14 of State.__bases__)_orgTranscryptRuntimeJs.__mergefields__(State, aClass14);
_orgTranscryptRuntimeJs.__mergefields__(State, {
    __reprfields__: new Set([
        'ids',
        'keyboard',
        'entities',
        'show_stats',
        'show_charts'
    ]),
    __comparefields__: new Set([
        'ids',
        'keyboard',
        'entities',
        'show_stats',
        'show_charts'
    ]),
    __initfields__: new Set([
        'ids',
        'keyboard',
        'entities',
        'show_stats',
        'show_charts'
    ])
});
var Ref = _orgTranscryptRuntimeJs.__class__('Ref', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    value: State()
});
for (let aClass15 of Ref.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Ref, aClass15);
_orgTranscryptRuntimeJs.__mergefields__(Ref, {
    __reprfields__: new Set([
        'value'
    ]),
    __comparefields__: new Set([
        'value'
    ]),
    __initfields__: new Set([
        'value'
    ])
});
var within_boundary = function(item, boundary) {
    var __left0__ = item;
    var item_box = __left0__[0];
    var item_pos = __left0__[1];
    var __left0__ = boundary;
    var boundary_box = __left0__[0];
    var boundary_offsets = __left0__[1];
    var x = _orgTranscryptRuntimeJs.min(_orgTranscryptRuntimeJs.max(boundary_box.pos.x + boundary_offsets.x, item_pos.x), boundary_box.pos.x + boundary_box.width - item_box.width - boundary_offsets.x);
    var y = _orgTranscryptRuntimeJs.min(_orgTranscryptRuntimeJs.max(boundary_box.pos.y + boundary_offsets.y, item_pos.y), boundary_box.pos.y + boundary_box.height - item_box.height - boundary_offsets.y);
    return Vec(x, y);
};
var make_outer_rect = function(player, bot) {
    var x = _orgTranscryptRuntimeJs.min(player.pos.x, bot.pos.x);
    var y = _orgTranscryptRuntimeJs.min(player.pos.y, bot.pos.y);
    var width = _orgTranscryptRuntimeJs.max(bot.pos.x + bot.width - player.pos.x, player.pos.x + player.width - bot.pos.x);
    var height = _orgTranscryptRuntimeJs.max(bot.pos.y + bot.height - player.pos.y, player.pos.y + player.height - bot.pos.y);
    return Box(_orgTranscryptRuntimeJs.__kwargtrans__({
        color: 'yellow',
        height: height,
        width: width,
        pos: Vec(x, y)
    }));
};
var make_inner_rect = function(outer_rect, player, bot) {
    var x = _orgTranscryptRuntimeJs.min(_orgTranscryptRuntimeJs.min(player.pos.x + player.width, bot.pos.x + bot.width), _orgTranscryptRuntimeJs.max(player.pos.x, bot.pos.x));
    var y = _orgTranscryptRuntimeJs.min(_orgTranscryptRuntimeJs.min(player.pos.y + player.height, bot.pos.y + bot.height), _orgTranscryptRuntimeJs.max(player.pos.y, bot.pos.y));
    var width = _orgTranscryptRuntimeJs.abs(outer_rect.width - player.width - bot.width);
    var height = _orgTranscryptRuntimeJs.abs(outer_rect.height - player.height - bot.height);
    return Box(_orgTranscryptRuntimeJs.__kwargtrans__({
        color: 'green',
        height: height,
        width: width,
        pos: Vec(x, y)
    }));
};
var detect_proximity = function(player, bot) {
    var outer_rect = make_outer_rect(player, bot);
    var inner_rect = make_inner_rect(outer_rect, player, bot);
    var width = _orgTranscryptRuntimeJs.max(0, outer_rect.width - player.width - bot.width);
    var height = _orgTranscryptRuntimeJs.max(0, outer_rect.height - player.height - bot.height);
    var min_distance = _mathJs.sqrt(_orgTranscryptRuntimeJs.pow(height, 2) + _orgTranscryptRuntimeJs.pow(width, 2));
    return _orgTranscryptRuntimeJs.tuple([
        outer_rect,
        inner_rect,
        min_distance
    ]);
};
var init_proximity = function(player, bot) {
    var __left0__ = detect_proximity(player, bot);
    var outer_rect = __left0__[0];
    var inner_rect = __left0__[1];
    var distance = __left0__[2];
    return Proximity(_orgTranscryptRuntimeJs.__kwargtrans__({
        distance: distance,
        outer_rect: outer_rect,
        inner_rect: inner_rect
    }));
};
var update_proximity = function(proximity, state) {
    var bot = state.entities.py_get(state.ids.bot);
    var player = state.entities.py_get(state.ids.player);
    var __left0__ = detect_proximity(player.state, bot.state);
    var outer_rect = __left0__[0];
    var inner_rect = __left0__[1];
    var distance = __left0__[2];
    proximity.distance = distance;
    proximity.inner_rect = inner_rect;
    proximity.outer_rect = outer_rect;
    return proximity;
};
var view_proximity = function(proximity) {
    return _ffiJsJs.Svg.g(_orgTranscryptRuntimeJs.dict({}), [
        view_box(proximity.outer_rect),
        view_box(proximity.inner_rect)
    ]);
};
var init_visibility = function(origin, target) {
    var target_pos = to_center_pos(target);
    var origin_pos = to_center_pos(origin);
    var to_target_dir = normalize(to_dir(origin_pos, target_pos));
    var dot = dot_product(normalize(origin.dir), to_target_dir);
    return dot;
};
var update_visibility = function(_visibility, state) {
    var bot = state.entities.py_get(state.ids.bot);
    var player = state.entities.py_get(state.ids.player);
    return init_visibility(bot.state, player.state);
};
var view_visibility = function(visibility, state) {
    return null;
};
var init_player = function() {
    return Player(_orgTranscryptRuntimeJs.__kwargtrans__({
        width: 50,
        height: 50,
        color: '#8ca9ff',
        dir: Vec(1, 0),
        pos: Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
            x: 5,
            y: 5
        }))
    }));
};
var update_player_pos = function(player, boundary, keyboard) {
    var dt = 1.666;
    var speed_multiplier = 3;
    var speed = 1 * speed_multiplier;
    var x = player.pos.x + to_x_dir(keyboard) * speed * dt;
    var y = player.pos.y + to_y_dir(keyboard) * speed * dt;
    return within_boundary(_orgTranscryptRuntimeJs.tuple([
        player,
        Vec(x, y)
    ]), _orgTranscryptRuntimeJs.tuple([
        boundary,
        Vec(3, 3)
    ]));
};
var update_player_dir = function(player, keyboard) {
    var x = to_x_dir(keyboard);
    var y = to_y_dir(keyboard);
    if (x != 0 || y != 0) {
        player.dir.x = x;
        player.dir.y = y;
    }
    return player.dir;
};
var update_player = function(player, state) {
    var boundary = state.entities.py_get(state.ids.boundary);
    player.dir = update_player_dir(player, state.keyboard);
    player.pos = update_player_pos(player, boundary.state, state.keyboard);
    return player;
};
var view_player = function(player) {
    return view_box(player);
};
var init_bot = function(boundary) {
    var width = 50;
    var height = 50;
    var config = BotConfig();
    var boundary_center = to_center_pos(boundary);
    var boundary_diagonal = _mathJs.sqrt(_orgTranscryptRuntimeJs.pow(boundary.height, 2) + _orgTranscryptRuntimeJs.pow(boundary.width, 2));
    var pos = Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
        x: boundary_center.x - width / 2,
        y: boundary_center.y - height / 2
    }));
    var controller = FuzzyLogic(_orgTranscryptRuntimeJs.__kwargtrans__({
        inputs: _orgTranscryptRuntimeJs.dict({
            'distance': _ffiJsJs.Fuzzy.variable([
                0,
                boundary_diagonal
            ], _orgTranscryptRuntimeJs.dict({
                'near': _ffiJsJs.Fuzzy.gaussian(0, 50),
                'neutral': _ffiJsJs.Fuzzy.trapezoid(32, 80, 180, 228),
                'far': _ffiJsJs.Fuzzy.ramp(100, 300)
            })),
            'visibility': _ffiJsJs.Fuzzy.variable([
                -1,
                1
            ], _orgTranscryptRuntimeJs.dict({
                'hidden': _ffiJsJs.Fuzzy.gaussian(-1, 0.5),
                'peripheral': _ffiJsJs.Fuzzy.gaussian(0, 0.1),
                'visible': _ffiJsJs.Fuzzy.gaussian(1, 0.5)
            }))
        }),
        outputs: _orgTranscryptRuntimeJs.dict({
            'aggression': _ffiJsJs.Fuzzy.variable([
                0,
                100
            ], _orgTranscryptRuntimeJs.dict({
                'low': _ffiJsJs.Fuzzy.gaussian(30, 20),
                'medium': _ffiJsJs.Fuzzy.gaussian(70, 20),
                'high': _ffiJsJs.Fuzzy.gaussian(100, 10)
            }))
        }),
        rules: [
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'near',
                'visibility': 'visible'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'high'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'near',
                'visibility': 'peripheral'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'medium'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'near',
                'visibility': 'hidden'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'neutral',
                'visibility': 'visible'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'medium'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'neutral',
                'visibility': 'peripheral'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'neutral',
                'visibility': 'hidden'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'far',
                'visibility': 'visible'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'far',
                'visibility': 'peripheral'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            })),
            _ffiJsJs.Fuzzy.and_(_orgTranscryptRuntimeJs.dict({
                'distance': 'far',
                'visibility': 'hidden'
            }), _orgTranscryptRuntimeJs.dict({
                'aggression': 'low'
            }))
        ]
    }));
    return Bot(_orgTranscryptRuntimeJs.__kwargtrans__({
        color: '#ff9393',
        pos: pos,
        config: config,
        width: width,
        height: height,
        dir: RelDir.Right,
        mode: BotModes.start,
        steps: config.max_steps,
        controller: controller
    }));
};
var update_bot_aggression = function(bot, proximity, visibility) {
    var result = _ffiJsJs.Fuzzy.defuzz(bot.controller.inputs, bot.controller.outputs, bot.controller.rules, _orgTranscryptRuntimeJs.dict({
        'distance': proximity.distance,
        'visibility': visibility
    }));
    return result.aggression;
};
var update_bot_mode = function(bot, boundary) {
    var aggression_level = _ffiJsJs.Fuzzy.classify(bot.controller.outputs.aggression, bot.aggression);
    if (bot.mode === BotModes.start) {
        var is_centered = is_centered_within(bot, boundary);
        if (is_centered) return BotModes.patrol;
        else return BotModes.start;
    }
    if (bot.mode === BotModes.restart) {
        if (_orgTranscryptRuntimeJs.__in__(aggression_level, [
            'medium',
            'high'
        ])) return BotModes.pursue;
        else if (is_centered_within(bot, boundary)) return BotModes.patrol;
        else return BotModes.restart;
    }
    if (bot.mode === BotModes.patrol) {
        if (_orgTranscryptRuntimeJs.__in__(aggression_level, [
            'medium',
            'high'
        ])) return BotModes.pursue;
        else return BotModes.patrol;
    }
    if (_orgTranscryptRuntimeJs.__in__(bot.mode, [
        BotModes.pursue,
        BotModes.attack
    ])) {
        if (aggression_level === 'high') return BotModes.attack;
        else if (aggression_level === 'medium') return BotModes.pursue;
        else return BotModes.restart;
    }
    return bot.mode;
};
var update_bot_dir = function(bot, player, boundary) {
    if (_orgTranscryptRuntimeJs.__in__(bot.mode, [
        BotModes.start,
        BotModes.restart
    ])) return relative_dir(bot, boundary);
    if (_orgTranscryptRuntimeJs.__in__(bot.mode, [
        BotModes.pursue,
        BotModes.attack
    ])) return relative_dir(bot, player);
    if (bot.mode === BotModes.stop) return RelDir.Zero;
    if (bot.mode === BotModes.patrol && bot.steps === 0) {
        var keyboard_dir = input_dir(bot.dir);
        for (var [prev_dir, next_dir] of bot.config.patrol_dirs){
            if (is_vec_eq(keyboard_dir, prev_dir)) return normalize(Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
                x: bot.dir.x + next_dir.x * 0.1,
                y: bot.dir.y + next_dir.y * 0.1
            })));
        }
        return Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
            x: _orgTranscryptRuntimeJs.round(bot.dir.x, 0),
            y: _orgTranscryptRuntimeJs.round(bot.dir.y, 0)
        }));
    }
    return bot.dir;
};
var update_bot_pos = function(bot, boundary) {
    var dt = 1.666;
    var speed = 1 * (bot.config.speeds[bot.mode] || 1);
    var x = bot.pos.x + bot.dir.x * speed * dt;
    var y = bot.pos.y + bot.dir.y * speed * dt;
    return within_boundary(_orgTranscryptRuntimeJs.tuple([
        bot,
        Vec(x, y)
    ]), _orgTranscryptRuntimeJs.tuple([
        boundary,
        Vec(3, 3)
    ]));
};
var update_bot_steps = function(bot) {
    if (bot.mode === BotModes.patrol) {
        if (bot.steps == 0) return bot.config.max_steps;
        return bot.steps - 1;
    } else return bot.config.max_steps;
};
var update_bot = function(bot, state) {
    var player = state.entities.py_get(state.ids.player);
    var boundary = state.entities.py_get(state.ids.boundary);
    var proximity = state.entities.py_get(state.ids.proximity);
    var visibility = state.entities.py_get(state.ids.visibility);
    bot.steps = update_bot_steps(bot);
    bot.aggression = update_bot_aggression(bot, proximity.state, visibility.state);
    bot.mode = update_bot_mode(bot, boundary.state);
    bot.dir = update_bot_dir(bot, player.state, boundary.state);
    bot.pos = update_bot_pos(bot, boundary.state);
    return bot;
};
var view_bot = function(bot) {
    var center = to_center_pos(bot);
    var arrow_center = Vec(center.x + bot.dir.x * 15, center.y + bot.dir.y * 15);
    var other_center = Vec(arrow_center.x + bot.dir.x * 10, arrow_center.y + bot.dir.y * 10);
    return _ffiJsJs.Svg.g(_orgTranscryptRuntimeJs.dict({}), [
        view_box(bot),
        _ffiJsJs.Svg.line(_orgTranscryptRuntimeJs.dict({
            'x1': center.x,
            'y1': center.y,
            'x2': arrow_center.x,
            'y2': arrow_center.y,
            'stroke': 'black'
        })),
        _ffiJsJs.Svg.line(_orgTranscryptRuntimeJs.dict({
            'x1': arrow_center.x,
            'y1': arrow_center.y,
            'x2': other_center.x,
            'y2': other_center.y,
            'stroke': 'black',
            'stroke-width': 3
        }))
    ]);
};
var init = function() {
    var boundary = Entity(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: Ids.boundary,
        update_: function __lambda__(_state) {
            return _state;
        },
        view: view_box,
        state: Box(_orgTranscryptRuntimeJs.__kwargtrans__({
            width: 600,
            height: 400,
            color: '#5d6177',
            pos: Vec(_orgTranscryptRuntimeJs.__kwargtrans__({
                x: 0,
                y: 0
            }))
        }))
    }));
    var player = Entity(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: Ids.player,
        state: init_player(),
        update_: update_player,
        view: view_player
    }));
    var bot = Entity(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: Ids.bot,
        update_: update_bot,
        view: view_bot,
        state: init_bot(boundary.state)
    }));
    var proximity = Entity(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: Ids.proximity,
        state: init_proximity(player.state, bot.state),
        update_: update_proximity,
        view: view_proximity
    }));
    var visibility = Entity(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: Ids.visibility,
        state: init_visibility(bot.state, player.state),
        update_: update_visibility,
        view: view_visibility
    }));
    var entities = Entities(_orgTranscryptRuntimeJs.__kwargtrans__({
        background: [
            Ids.boundary
        ],
        observers: [
            Ids.visibility,
            Ids.proximity
        ],
        pawns: [
            Ids.player,
            Ids.bot
        ],
        data: _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
            bot: bot,
            visibility: visibility,
            player: player,
            boundary: boundary,
            proximity: proximity
        }))
    }));
    var update_order = concat(entities.background, entities.pawns, entities.observers);
    var render_order = concat(entities.background, entities.observers, entities.pawns);
    var state = Ref(_orgTranscryptRuntimeJs.__kwargtrans__({
        value: State(_orgTranscryptRuntimeJs.__kwargtrans__({
            ids: Ids(),
            entities: entities,
            update_order: update_order,
            render_order: render_order,
            keyboard: Keyboard()
        }))
    }));
    return state;
};
var subscriptions = function() {
    var tick = action(Tick());
    return [
        clock(tick),
        keyboard_up(keyboard_change(false)),
        keyboard_down(keyboard_change(true))
    ];
};
var ToggleStats = _orgTranscryptRuntimeJs.__class__('ToggleStats', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__
});
var ToggleCharts = _orgTranscryptRuntimeJs.__class__('ToggleCharts', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__
});
var update_keyboard = function(state, msg) {
    var keyboard = state.keyboard;
    if (msg.key === ArrowKeys.Up) keyboard.up = msg.is_down;
    if (msg.key === ArrowKeys.Down) keyboard.down = msg.is_down;
    if (msg.key === ArrowKeys.Left) keyboard.left = msg.is_down;
    if (msg.key === ArrowKeys.Right) keyboard.right = msg.is_down;
    return keyboard;
};
var py_update = function(ref, msg) {
    var state = ref.value;
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === Tick) {
        for (var entity_id of state.update_order){
            var entity = state.entities.py_get(entity_id);
            entity.state = entity.update_(entity.state, state);
        }
        return Ref(_orgTranscryptRuntimeJs.__kwargtrans__({
            value: state
        }));
    }
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === KeyChange) {
        state.keyboard = update_keyboard(state, msg);
        return Ref(_orgTranscryptRuntimeJs.__kwargtrans__({
            value: state
        }));
    }
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === ToggleStats) {
        state.show_stats = !state.show_stats;
        return Ref(_orgTranscryptRuntimeJs.__kwargtrans__({
            value: state
        }));
    }
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === ToggleCharts) {
        state.show_charts = !state.show_charts;
        return Ref(_orgTranscryptRuntimeJs.__kwargtrans__({
            value: state
        }));
    }
    return ref;
};
var action = function(msg) {
    return function __lambda__(state) {
        return py_update(state, msg);
    };
};
var view_box = function(box) {
    var stroke_width = 2;
    var stroke_color = '#374048';
    return _ffiJsJs.Svg.rect(_orgTranscryptRuntimeJs.dict({
        'fill': box.color,
        'width': box.width,
        'height': box.height,
        'stroke': stroke_color,
        'stroke-width': stroke_width,
        'transform': 'translate({}, {})'.format(box.pos.x, box.pos.y)
    }));
};
var view_stat = function(key, value) {
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'stat-field'
    }), [
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'stat-label'
        }), [
            _ffiJsJs.Html.text('{}: '.format(key))
        ]),
        _ffiJsJs.Html.text(value)
    ]);
};
var view_chart = function(key, value) {
    var elem_id = '{}-viz'.format(key);
    var svg = _ffiJsJs.FuzzyViz.varToSvg(value, _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
        samples: 200,
        width: 600,
        height: 120
    })));
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'stat-row fuzzy-input-chart'
    }), [
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'chart-label'
        }), [
            _ffiJsJs.Html.text('{} Memberships'.format(key.capitalize()))
        ]),
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
            id: elem_id,
            innerHTML: svg
        })), [])
    ]);
};
var view_stats = function(state) {
    if (!state.show_stats) return null;
    var bot = state.entities.py_get(state.ids.bot).state;
    var proximity = state.entities.py_get(state.ids.proximity).state;
    var visibility = state.entities.py_get(state.ids.visibility).state;
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'stats'
    }), [
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'stat-row'
        }), [
            _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                'class': 'stat-column'
            }), [
                view_stat('Visibility', _ffiJsJs.Fuzzy.classify(bot.controller.inputs.visibility, visibility, 0.2).capitalize()),
                view_stat('Proximity Distance', _orgTranscryptRuntimeJs.round(proximity.distance, 3))
            ]),
            _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                'class': 'stat-column'
            }), [
                view_stat('Proximity Level', _ffiJsJs.Fuzzy.classify(bot.controller.inputs.distance, proximity.distance).capitalize()),
                view_stat('Aggression Level', _ffiJsJs.Fuzzy.classify(bot.controller.outputs.aggression, bot.aggression).capitalize())
            ])
        ])
    ]);
};
var view_charts = function(state) {
    if (!state.show_charts) return null;
    var bot = state.entities.py_get(state.ids.bot).state;
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'charts'
    }), [
        view_chart('distance', bot.controller.inputs.distance),
        view_chart('visibility', bot.controller.inputs.visibility),
        view_chart('aggression', bot.controller.outputs.aggression)
    ]);
};
var view = function(ref) {
    var state = ref.value;
    var boundary = state.entities.py_get(state.ids.boundary).state;
    var render_entity = function(entity) {
        if (entity.id === state.ids.proximity) return null;
        return entity.view(entity.state);
    };
    return _ffiJsJs.Html.main(_orgTranscryptRuntimeJs.dict({
        'class': 'container'
    }), [
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'canvas'
        }), [
            _ffiJsJs.Svg.svg(_orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
                width: boundary.width,
                height: boundary.height,
                viewBox: '0 0 {} {}'.format(boundary.width, boundary.height)
            })), [
                _ffiJsJs.Svg.g(_orgTranscryptRuntimeJs.dict({}), function() {
                    var __accu0__ = [];
                    for (var entity_id of state.render_order)__accu0__.append(render_entity(state.entities.py_get(entity_id)));
                    return __accu0__;
                }())
            ])
        ]),
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'buttons'
        }), [
            _ffiJsJs.Html.button(_orgTranscryptRuntimeJs.dict({
                'onclick': action(ToggleStats())
            }), [
                _ffiJsJs.Html.text(state.show_stats ? 'Hide Stats' : 'Show Stats')
            ]),
            _ffiJsJs.Html.button(_orgTranscryptRuntimeJs.dict({
                'onclick': action(ToggleCharts())
            }), [
                _ffiJsJs.Html.text(state.show_charts ? 'Hide Charts' : 'Show Charts')
            ])
        ]),
        view_stats(state),
        view_charts(state)
    ]);
};
var main = function() {
    var element = _ffiJsJs.document.getElementById('root');
    _ffiJsJs.Hyper.app(_orgTranscryptRuntimeJs.__kwargtrans__({
        node: element,
        view: view,
        init: init,
        subscriptions: subscriptions
    }));
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","./ffi.js.js":"4SQGX","./typing.js":"2pquK","./dataclasses.js":"gr1Cz","./math.js":"gyJGq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJoBq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__envir__", ()=>__envir__
);
parcelHelpers.export(exports, "__nest__", ()=>__nest__
);
parcelHelpers.export(exports, "__init__", ()=>__init__
);
parcelHelpers.export(exports, "__get__", ()=>__get__
);
parcelHelpers.export(exports, "__getcm__", ()=>__getcm__
);
parcelHelpers.export(exports, "__getsm__", ()=>__getsm__
);
parcelHelpers.export(exports, "py_metatype", ()=>py_metatype
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "__class__", ()=>__class__
);
parcelHelpers.export(exports, "__pragma__", ()=>__pragma__
);
parcelHelpers.export(exports, "__call__", ()=>__call__
);
parcelHelpers.export(exports, "__kwargtrans__", ()=>__kwargtrans__
);
parcelHelpers.export(exports, "__super__", ()=>__super__
);
parcelHelpers.export(exports, "property", ()=>property
);
parcelHelpers.export(exports, "__setproperty__", ()=>__setproperty__
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "__mergekwargtrans__", ()=>__mergekwargtrans__
);
parcelHelpers.export(exports, "__mergefields__", ()=>__mergefields__
);
parcelHelpers.export(exports, "__withblock__", ()=>__withblock__
);
parcelHelpers.export(exports, "dir", ()=>dir
);
parcelHelpers.export(exports, "setattr", ()=>setattr
);
parcelHelpers.export(exports, "getattr", ()=>getattr
);
parcelHelpers.export(exports, "hasattr", ()=>hasattr
);
parcelHelpers.export(exports, "delattr", ()=>delattr
);
parcelHelpers.export(exports, "__in__", ()=>__in__
);
parcelHelpers.export(exports, "__specialattrib__", ()=>__specialattrib__
);
parcelHelpers.export(exports, "len", ()=>len
);
parcelHelpers.export(exports, "__i__", ()=>__i__
);
parcelHelpers.export(exports, "__k__", ()=>__k__
);
parcelHelpers.export(exports, "__t__", ()=>__t__
);
parcelHelpers.export(exports, "float", ()=>float
);
parcelHelpers.export(exports, "int", ()=>int
);
parcelHelpers.export(exports, "bool", ()=>bool
);
parcelHelpers.export(exports, "py_typeof", ()=>py_typeof
);
parcelHelpers.export(exports, "issubclass", ()=>issubclass
);
parcelHelpers.export(exports, "isinstance", ()=>isinstance
);
parcelHelpers.export(exports, "callable", ()=>callable
);
parcelHelpers.export(exports, "repr", ()=>repr
);
parcelHelpers.export(exports, "chr", ()=>chr
);
parcelHelpers.export(exports, "ord", ()=>ord
);
parcelHelpers.export(exports, "max", ()=>max
);
parcelHelpers.export(exports, "min", ()=>min
);
parcelHelpers.export(exports, "abs", ()=>abs
);
parcelHelpers.export(exports, "round", ()=>round
);
parcelHelpers.export(exports, "__jsUsePyNext__", ()=>__jsUsePyNext__
);
parcelHelpers.export(exports, "__pyUseJsNext__", ()=>__pyUseJsNext__
);
parcelHelpers.export(exports, "py_iter", ()=>py_iter
);
parcelHelpers.export(exports, "py_next", ()=>py_next
);
parcelHelpers.export(exports, "__PyIterator__", ()=>__PyIterator__
);
parcelHelpers.export(exports, "__JsIterator__", ()=>__JsIterator__
);
parcelHelpers.export(exports, "py_reversed", ()=>py_reversed
);
parcelHelpers.export(exports, "zip", ()=>zip
);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "any", ()=>any
);
parcelHelpers.export(exports, "all", ()=>all
);
parcelHelpers.export(exports, "sum", ()=>sum
);
parcelHelpers.export(exports, "enumerate", ()=>enumerate
);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "deepcopy", ()=>deepcopy
);
parcelHelpers.export(exports, "list", ()=>list
);
parcelHelpers.export(exports, "tuple", ()=>tuple
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "bytearray", ()=>bytearray
);
parcelHelpers.export(exports, "bytes", ()=>bytes
);
parcelHelpers.export(exports, "str", ()=>str
);
parcelHelpers.export(exports, "dict", ()=>dict
);
parcelHelpers.export(exports, "__jsmod__", ()=>__jsmod__
);
parcelHelpers.export(exports, "__mod__", ()=>__mod__
);
parcelHelpers.export(exports, "__pow__", ()=>__pow__
);
parcelHelpers.export(exports, "pow", ()=>pow
);
parcelHelpers.export(exports, "__neg__", ()=>__neg__
);
parcelHelpers.export(exports, "__matmul__", ()=>__matmul__
);
parcelHelpers.export(exports, "__mul__", ()=>__mul__
);
parcelHelpers.export(exports, "__truediv__", ()=>__truediv__
);
parcelHelpers.export(exports, "__floordiv__", ()=>__floordiv__
);
parcelHelpers.export(exports, "__add__", ()=>__add__
);
parcelHelpers.export(exports, "__sub__", ()=>__sub__
);
parcelHelpers.export(exports, "__lshift__", ()=>__lshift__
);
parcelHelpers.export(exports, "__rshift__", ()=>__rshift__
);
parcelHelpers.export(exports, "__or__", ()=>__or__
);
parcelHelpers.export(exports, "__xor__", ()=>__xor__
);
parcelHelpers.export(exports, "__and__", ()=>__and__
);
parcelHelpers.export(exports, "__eq__", ()=>__eq__
);
parcelHelpers.export(exports, "__ne__", ()=>__ne__
);
parcelHelpers.export(exports, "__lt__", ()=>__lt__
);
parcelHelpers.export(exports, "__le__", ()=>__le__
);
parcelHelpers.export(exports, "__gt__", ()=>__gt__
);
parcelHelpers.export(exports, "__ge__", ()=>__ge__
);
parcelHelpers.export(exports, "__imatmul__", ()=>__imatmul__
);
parcelHelpers.export(exports, "__ipow__", ()=>__ipow__
);
parcelHelpers.export(exports, "__ijsmod__", ()=>__ijsmod__
);
parcelHelpers.export(exports, "__imod__", ()=>__imod__
);
parcelHelpers.export(exports, "__imul__", ()=>__imul__
);
parcelHelpers.export(exports, "__idiv__", ()=>__idiv__
);
parcelHelpers.export(exports, "__iadd__", ()=>__iadd__
);
parcelHelpers.export(exports, "__isub__", ()=>__isub__
);
parcelHelpers.export(exports, "__ilshift__", ()=>__ilshift__
);
parcelHelpers.export(exports, "__irshift__", ()=>__irshift__
);
parcelHelpers.export(exports, "__ior__", ()=>__ior__
);
parcelHelpers.export(exports, "__ixor__", ()=>__ixor__
);
parcelHelpers.export(exports, "__iand__", ()=>__iand__
);
parcelHelpers.export(exports, "__getitem__", ()=>__getitem__
);
parcelHelpers.export(exports, "__setitem__", ()=>__setitem__
);
parcelHelpers.export(exports, "__getslice__", ()=>__getslice__
);
parcelHelpers.export(exports, "__setslice__", ()=>__setslice__
);
parcelHelpers.export(exports, "BaseException", ()=>BaseException
);
parcelHelpers.export(exports, "Exception", ()=>Exception
);
parcelHelpers.export(exports, "IterableError", ()=>IterableError
);
parcelHelpers.export(exports, "StopIteration", ()=>StopIteration
);
parcelHelpers.export(exports, "ValueError", ()=>ValueError
);
parcelHelpers.export(exports, "KeyError", ()=>KeyError
);
parcelHelpers.export(exports, "AssertionError", ()=>AssertionError
);
parcelHelpers.export(exports, "NotImplementedError", ()=>NotImplementedError
);
parcelHelpers.export(exports, "IndexError", ()=>IndexError
);
parcelHelpers.export(exports, "AttributeError", ()=>AttributeError
);
parcelHelpers.export(exports, "py_TypeError", ()=>py_TypeError
);
parcelHelpers.export(exports, "Warning", ()=>Warning
);
parcelHelpers.export(exports, "UserWarning", ()=>UserWarning
);
parcelHelpers.export(exports, "DeprecationWarning", ()=>DeprecationWarning
);
parcelHelpers.export(exports, "RuntimeWarning", ()=>RuntimeWarning
);
parcelHelpers.export(exports, "__sort__", ()=>__sort__
);
parcelHelpers.export(exports, "sorted", ()=>sorted
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "divmod", ()=>divmod
);
parcelHelpers.export(exports, "__Terminal__", ()=>__Terminal__
);
parcelHelpers.export(exports, "__terminal__", ()=>__terminal__
);
parcelHelpers.export(exports, "print", ()=>print
);
parcelHelpers.export(exports, "input", ()=>input
);
// Transcrypt'ed from Python, 2022-05-10 08:40:21
var __name__ = 'org.transcrypt.__runtime__';
var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.9.0';
function __nest__(headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split('.');
        var firstNewIndex = tailChain.length;
        for(var index = 0; index < tailChain.length; index++){
            if (!current.hasOwnProperty(tailChain[index])) {
                firstNewIndex = index;
                break;
            }
            current = current[tailChain[index]];
        }
        for(var index = firstNewIndex; index < tailChain.length; index++){
            current[tailChain[index]] = {};
            current = current[tailChain[index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames(value))Object.defineProperty(current, attrib, {
        get () {
            return value[attrib];
        },
        enumerable: true,
        configurable: true
    });
}
function __init__(module) {
    if (!module.__inited__) {
        module.__all__.__init__(module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
}
function __get__(aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) Object.defineProperty(aThis, quotedFuncName, {
                value: function() {
                    var args = [].slice.apply(arguments);
                    return func.apply(null, [
                        aThis
                    ].concat(args));
                },
                writable: true,
                enumerable: true,
                configurable: true
            });
            return function() {
                var args = [].slice.apply(arguments);
                return func.apply(null, [
                    aThis.__proxy__ ? aThis.__proxy__ : aThis
                ].concat(args));
            };
        } else return func;
    } else return func;
}
function __getcm__(aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty('__class__')) return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis.__class__
        ].concat(args));
    };
    else return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis
        ].concat(args));
    };
}
function __getsm__(aThis, func, quotedFuncName) {
    return func;
}
var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function(meta, name, bases, attribs) {
        var cls = function() {
            var args = [].slice.apply(arguments);
            return cls.__new__(args);
        };
        for(var index = bases.length - 1; index >= 0; index--){
            var base = bases[index];
            for(var attrib in base){
                var descrip = Object.getOwnPropertyDescriptor(base, attrib);
                if (descrip == null) continue;
                Object.defineProperty(cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols(base)){
                let descrip = Object.getOwnPropertyDescriptor(base, symbol);
                Object.defineProperty(cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith('py_') ? name.slice(3) : name;
        cls.__bases__ = bases;
        for(var attrib in attribs){
            var descrip = Object.getOwnPropertyDescriptor(attribs, attrib);
            Object.defineProperty(cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols(attribs)){
            let descrip = Object.getOwnPropertyDescriptor(attribs, symbol);
            Object.defineProperty(cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
var object = {
    __init__: function(self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function(args) {
        var instance = Object.create(this, {
            __class__: {
                value: this,
                enumerable: true
            }
        });
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy(instance, {
                get: function(target, name) {
                    let result = target[name];
                    if (result == undefined) return target.__getattr__(name);
                    else return result;
                },
                set: function(target, name, value) {
                    try {
                        target.__setattr__(name, value);
                    } catch (exception) {
                        target[name] = value;
                    }
                    return true;
                }
            });
            instance = instance.__proxy__;
        }
        this.__init__.apply(null, [
            instance
        ].concat(args));
        return instance;
    }
};
function __class__(name, bases, attribs, meta) {
    if (meta === undefined) meta = bases[0].__metaclass__;
    return meta.__new__(meta, name, bases, attribs);
}
function __pragma__() {}
function __call__() {
    var args = [].slice.apply(arguments);
    if (typeof args[0] == 'object' && '__call__' in args[0]) return args[0].__call__.apply(args[1], args.slice(2));
    else return args[0].apply(args[1], args.slice(2));
}
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {
    __file__: ''
};
var __except__ = null;
function __kwargtrans__(anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function __super__(aClass, methodName) {
    for (let base of aClass.__bases__){
        if (methodName in base) return base[methodName];
    }
    throw new Exception('Superclass method not found');
}
function property(getter, setter) {
    if (!setter) setter = function() {};
    return {
        get: function() {
            return getter(this);
        },
        set: function(value) {
            setter(this, value);
        },
        enumerable: true
    };
}
function __setproperty__(anObject, name, descriptor) {
    if (!anObject.hasOwnProperty(name)) Object.defineProperty(anObject, name, descriptor);
}
function assert(condition, message) {
    if (!condition) throw AssertionError(message, new Error());
}
function __mergekwargtrans__(object0, object1) {
    var result = {};
    for(var attrib in object0)result[attrib] = object0[attrib];
    for(var attrib in object1)result[attrib] = object1[attrib];
    return result;
}
function __mergefields__(targetClass, sourceClass) {
    let fieldNames = [
        '__reprfields__',
        '__comparefields__',
        '__initfields__'
    ];
    if (sourceClass[fieldNames[0]]) {
        if (targetClass[fieldNames[0]]) for (let fieldName of fieldNames)targetClass[fieldName] = new Set([
            ...targetClass[fieldName],
            ...sourceClass[fieldName]
        ]);
        else for (let fieldName1 of fieldNames)targetClass[fieldName1] = new Set(sourceClass[fieldName1]);
    }
}
function __withblock__(manager, statements) {
    if (hasattr(manager, '__enter__')) try {
        manager.__enter__();
        statements();
        manager.__exit__();
    } catch (exception) {
        if (!manager.__exit__(exception.name, exception, exception.stack)) throw exception;
    }
    else {
        statements();
        manager.close();
    }
}
function dir(obj) {
    var aList = [];
    for(var aKey in obj)aList.push(aKey.startsWith('py_') ? aKey.slice(3) : aKey);
    aList.sort();
    return aList;
}
function setattr(obj, name, value) {
    obj[name] = value;
}
function getattr(obj, name) {
    return name in obj ? obj[name] : obj['py_' + name];
}
function hasattr(obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    } catch (exception) {
        return false;
    }
}
function delattr(obj, name) {
    if (name in obj) delete obj[name];
    else delete obj['py_' + name];
}
function __in__(element, container) {
    if (container === undefined || container === null) return false;
    if (container.__contains__ instanceof Function) return container.__contains__(element);
    else return container.indexOf ? container.indexOf(element) > -1 : container.hasOwnProperty(element);
}
function __specialattrib__(attrib) {
    return attrib.startswith('__') && attrib.endswith('__') || attrib == 'constructor' || attrib.startswith('py_');
}
function len(anObject) {
    if (anObject === undefined || anObject === null) return 0;
    if (anObject.__len__ instanceof Function) return anObject.__len__();
    if (anObject.length !== undefined) return anObject.length;
    var length = 0;
    for(var attr in anObject)if (!__specialattrib__(attr)) length++;
    return length;
}
function __i__(any1) {
    return py_typeof(any1) == dict ? any1.py_keys() : any1;
}
function __k__(keyed, key) {
    var result = keyed[key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array) {
            if (key == +key && key >= 0 && keyed.length > key) return result;
            else throw IndexError(key, new Error());
        } else throw KeyError(key, new Error());
    }
    return result;
}
function __t__(target) {
    return target === undefined || target === null ? false : [
        'boolean',
        'number'
    ].indexOf(typeof target) >= 0 ? target : target.__bool__ instanceof Function ? target.__bool__() ? target : false : target.__len__ instanceof Function ? target.__len__() !== 0 ? target : false : target instanceof Function ? target : len(target) !== 0 ? target : false;
}
function float(any2) {
    if (any2 == 'inf') return Infinity;
    else if (any2 == '-inf') return -Infinity;
    else if (any2 == 'nan') return NaN;
    else if (isNaN(parseFloat(any2))) {
        if (any2 === false) return 0;
        else if (any2 === true) return 1;
        else throw ValueError("could not convert string to float: '" + str(any2) + "'", new Error());
    } else return +any2;
}
float.__name__ = 'float';
float.__bases__ = [
    object
];
function int(any3) {
    return float(any3) | 0;
}
int.__name__ = 'int';
int.__bases__ = [
    object
];
function bool(any4) {
    return !!__t__(any4);
}
bool.__name__ = 'bool';
bool.__bases__ = [
    int
];
function py_typeof(anObject) {
    var aType = typeof anObject;
    if (aType == 'object') try {
        return '__class__' in anObject ? anObject.__class__ : object;
    } catch (exception) {
        return aType;
    }
    else return aType == 'boolean' ? bool : aType == 'string' ? str : aType == 'number' ? anObject % 1 == 0 ? int : float : null;
}
function issubclass(aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo){
            if (issubclass(aClass, aClass2)) return true;
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) return true;
        else {
            var bases = [].slice.call(aClass2.__bases__);
            while(bases.length){
                aClass2 = bases.shift();
                if (aClass2 == classinfo) return true;
                if (aClass2.__bases__.length) bases = [].slice.call(aClass2.__bases__).concat(bases);
            }
            return false;
        }
    } catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
}
function isinstance(anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass(anObject.__class__, classinfo) : issubclass(py_typeof(anObject), classinfo);
    } catch (exception) {
        return issubclass(py_typeof(anObject), classinfo);
    }
}
function callable(anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
}
function repr(anObject) {
    try {
        return anObject.__repr__();
    } catch (exception) {
        try {
            return anObject.__str__();
        } catch (exception) {
            try {
                if (anObject == null) return 'None';
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for(var attrib in anObject)if (!__specialattrib__(attrib)) {
                        if (attrib.isnumeric()) var attribRepr = attrib;
                        else var attribRepr = '\'' + attrib + '\'';
                        if (comma) result += ', ';
                        else comma = true;
                        result += attribRepr + ': ' + repr(anObject[attrib]);
                    }
                    result += '}';
                    return result;
                } else return typeof anObject == 'boolean' ? anObject.toString().capitalize() : anObject.toString();
            } catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
}
function chr(charCode) {
    return String.fromCharCode(charCode);
}
function ord(aChar) {
    return aChar.charCodeAt(0);
}
function max(nrOrSeq) {
    return arguments.length == 1 ? Math.max(...nrOrSeq) : Math.max(...arguments);
}
function min(nrOrSeq) {
    return arguments.length == 1 ? Math.min(...nrOrSeq) : Math.min(...arguments);
}
var abs = Math.abs;
function round(number, ndigits) {
    if (ndigits) {
        var scale = Math.pow(10, ndigits);
        number *= scale;
    }
    var rounded = Math.round(number);
    if (rounded - number == 0.5 && rounded % 2) rounded -= 1;
    if (ndigits) rounded /= scale;
    return rounded;
}
function __jsUsePyNext__() {
    try {
        var result = this.__next__();
        return {
            value: result,
            done: false
        };
    } catch (exception) {
        return {
            value: undefined,
            done: true
        };
    }
}
function __pyUseJsNext__() {
    var result = this.next();
    if (result.done) throw StopIteration(new Error());
    else return result.value;
}
function py_iter(iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__();
        result.next = __jsUsePyNext__;
    } else if ('selector' in iterable) {
        var result = list(iterable).__iter__();
        result.next = __jsUsePyNext__;
    } else if ('next' in iterable) {
        var result = iterable;
        if (!('__next__' in result)) result.__next__ = __pyUseJsNext__;
    } else if (Symbol.iterator in iterable) {
        var result = iterable[Symbol.iterator]();
        result.__next__ = __pyUseJsNext__;
    } else throw IterableError(new Error());
    result[Symbol.iterator] = function() {
        return result;
    };
    return result;
}
function py_next(iterator) {
    try {
        var result = iterator.__next__();
    } catch (exception) {
        var result = iterator.next();
        if (result.done) throw StopIteration(new Error());
        else return result.value;
    }
    if (result == undefined) throw StopIteration(new Error());
    else return result;
}
function __PyIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) return this.iterable[this.index++];
    else throw StopIteration(new Error());
};
function __JsIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function() {
    if (this.index < this.iterable.py_keys.length) return {
        value: this.index++,
        done: false
    };
    else return {
        value: undefined,
        done: true
    };
};
function py_reversed(iterable) {
    iterable = iterable.slice();
    iterable.reverse();
    return iterable;
}
function zip() {
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i++){
        if (typeof args[i] == 'string') args[i] = args[i].split('');
        else if (!Array.isArray(args[i])) args[i] = Array.from(args[i]);
    }
    var shortest = args.length == 0 ? [] : args.reduce(function(array0, array1) {
        return array0.length < array1.length ? array0 : array1;
    });
    return shortest.map(function(current1, index) {
        return args.map(function(current) {
            return current[index];
        });
    });
}
function range(start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) step = 1;
    if (step > 0 && start >= stop || step < 0 && start <= stop) return [];
    var result = [];
    for(var i = start; step > 0 ? i < stop : i > stop; i += step)result.push(i);
    return result;
}
function any(iterable) {
    for (let item of iterable){
        if (bool(item)) return true;
    }
    return false;
}
function all(iterable) {
    for (let item of iterable){
        if (!bool(item)) return false;
    }
    return true;
}
function sum(iterable) {
    let result = 0;
    for (let item of iterable)result += item;
    return result;
}
function enumerate(iterable) {
    return zip(range(len(iterable)), iterable);
}
function copy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {};
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = anObject[attrib];
        return result;
    }
}
function deepcopy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {};
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = deepcopy(anObject[attrib]);
        return result;
    }
}
function list(iterable) {
    let instance = iterable ? Array.from(iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [
    object
];
Array.prototype.__iter__ = function() {
    return new __PyIterator__(this);
};
Array.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    else if (stop > this.length) stop = this.length;
    if (step == 1) return Array.prototype.slice.call(this, start, stop);
    let result = list([]);
    for(let index = start; index < stop; index += step)result.push(this[index]);
    return result;
};
Array.prototype.__setslice__ = function(start, stop, step, source) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    if (step == null) Array.prototype.splice.apply(this, [
        start,
        stop - start
    ].concat(source));
    else {
        let sourceIndex = 0;
        for(let targetIndex = start; targetIndex < stop; targetIndex += step)this[targetIndex] = source[sourceIndex++];
    }
};
Array.prototype.__repr__ = function() {
    if (this.__class__ == set && !this.length) return 'set()';
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for(let index = 0; index < this.length; index++){
        if (index) result += ', ';
        result += repr(this[index]);
    }
    if (this.__class__ == tuple && this.length == 1) result += ',';
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function(element) {
    this.push(element);
};
Array.prototype.py_clear = function() {
    this.length = 0;
};
Array.prototype.extend = function(aList) {
    this.push.apply(this, aList);
};
Array.prototype.insert = function(index, element) {
    this.splice(index, 0, element);
};
Array.prototype.remove = function(element) {
    let index = this.indexOf(element);
    if (index == -1) throw ValueError("list.remove(x): x not in list", new Error());
    this.splice(index, 1);
};
Array.prototype.index = function(element) {
    return this.indexOf(element);
};
Array.prototype.py_pop = function(index) {
    if (index == undefined) return this.pop();
    else return this.splice(index, 1)[0];
};
Array.prototype.py_sort = function() {
    __sort__.apply(null, [
        this
    ].concat([].slice.apply(arguments)));
};
Array.prototype.__add__ = function(aList) {
    return list(this.concat(aList));
};
Array.prototype.__mul__ = function(scalar) {
    let result = this;
    for(let i = 1; i < scalar; i++)result = result.concat(this);
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function tuple(iterable) {
    let instance = iterable ? [].slice.apply(iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [
    object
];
function set(iterable) {
    let instance = [];
    if (iterable) for(let index = 0; index < iterable.length; index++)instance.add(iterable[index]);
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [
    object
];
Array.prototype.__bindexOf__ = function(element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while(mindex <= maxdex){
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this[index] + '';
        if (middle < element) mindex = index + 1;
        else if (middle > element) maxdex = index - 1;
        else return index;
    }
    return -1;
};
Array.prototype.add = function(element) {
    if (this.indexOf(element) == -1) this.push(element);
};
Array.prototype.discard = function(element) {
    var index = this.indexOf(element);
    if (index != -1) this.splice(index, 1);
};
Array.prototype.isdisjoint = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) != -1) return false;
    }
    return true;
};
Array.prototype.issuperset = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) == -1) return false;
    }
    return true;
};
Array.prototype.issubset = function(other) {
    return set(other.slice()).issuperset(this);
};
Array.prototype.union = function(other) {
    let result = set(this.slice().sort());
    for(let i = 0; i < other.length; i++)if (result.__bindexOf__(other[i]) == -1) result.push(other[i]);
    return result;
};
Array.prototype.intersection = function(other) {
    this.sort();
    let result = set();
    for(let i = 0; i < other.length; i++)if (this.__bindexOf__(other[i]) != -1) result.push(other[i]);
    return result;
};
Array.prototype.difference = function(other) {
    let sother = set(other.slice().sort());
    let result = set();
    for(let i = 0; i < this.length; i++)if (sother.__bindexOf__(this[i]) == -1) result.push(this[i]);
    return result;
};
Array.prototype.symmetric_difference = function(other) {
    return this.union(other).difference(this.intersection(other));
};
Array.prototype.py_update = function() {
    let updated = [].concat.apply(this.slice(), arguments).sort();
    this.py_clear();
    for(let i = 0; i < updated.length; i++)if (updated[i] != updated[i - 1]) this.push(updated[i]);
};
Array.prototype.__eq__ = function(other) {
    if (this.length != other.length) return false;
    if (this.__class__ == set) {
        this.sort();
        other.sort();
    }
    for(let i = 0; i < this.length; i++){
        if (this[i] != other[i]) return false;
    }
    return true;
};
Array.prototype.__ne__ = function(other) {
    return !this.__eq__(other);
};
Array.prototype.__le__ = function(other) {
    if (this.__class__ == set) return this.issubset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] > other[i]) return false;
            else if (this[i] < other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__ge__ = function(other) {
    if (this.__class__ == set) return this.issuperset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] < other[i]) return false;
            else if (this[i] > other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__lt__ = function(other) {
    return this.__class__ == set ? this.issubset(other) && !this.issuperset(other) : !this.__ge__(other);
};
Array.prototype.__gt__ = function(other) {
    return this.__class__ == set ? this.issuperset(other) && !this.issubset(other) : !this.__le__(other);
};
function bytearray(bytable, encoding) {
    if (bytable == undefined) return new Uint8Array(0);
    else {
        let aType = py_typeof(bytable);
        if (aType == int) return new Uint8Array(bytable);
        else if (aType == str) {
            let aBytes = new Uint8Array(len(bytable));
            for(let i = 0; i < len(bytable); i++)aBytes[i] = bytable.charCodeAt(i);
            return aBytes;
        } else if (aType == list || aType == tuple) return new Uint8Array(bytable);
        else throw py_TypeError;
    }
}
var bytes = bytearray;
Uint8Array.prototype.__add__ = function(aBytes) {
    let result = new Uint8Array(this.length + aBytes.length);
    result.set(this);
    result.set(aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function(scalar) {
    let result = new Uint8Array(scalar * this.length);
    for(let i = 0; i < scalar; i++)result.set(this, i * this.length);
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function str(stringable) {
    if (typeof stringable === 'number') return stringable.toString();
    else try {
        return stringable.__str__();
    } catch (exception) {
        try {
            return repr(stringable);
        } catch (exception) {
            return String(stringable);
        }
    }
}
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [
    object
];
String.prototype.__iter__ = function() {
    new __PyIterator__(this);
};
String.prototype.__repr__ = function() {
    return (this.indexOf('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"').py_replace('\t', '\\t').py_replace('\n', '\\n');
};
String.prototype.__str__ = function() {
    return this;
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.endswith = function(suffix) {
    if (suffix instanceof Array) for(var i = 0; i < suffix.length; i++){
        if (this.slice(-suffix[i].length) == suffix[i]) return true;
    }
    else return suffix == '' || this.slice(-suffix.length) == suffix;
    return false;
};
String.prototype.find = function(sub, start) {
    return this.indexOf(sub, start);
};
String.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    var result = '';
    if (step == 1) result = this.substring(start, stop);
    else for(var index = start; index < stop; index += step)result = result.concat(this.charAt(index));
    return result;
};
__setproperty__(String.prototype, 'format', {
    get: function() {
        return __get__(this, function(self) {
            var args = tuple([].slice.apply(arguments).slice(1));
            var autoIndex = 0;
            return self.replace(/\{(\w*)\}/g, function(match, key) {
                if (key == '') key = autoIndex++;
                if (key == +key) return args[key] === undefined ? match : str(args[key]);
                else {
                    for(var index = 0; index < args.length; index++){
                        if (typeof args[index] == 'object' && args[index][key] !== undefined) return str(args[index][key]);
                    }
                    return match;
                }
            });
        });
    },
    enumerable: true
});
String.prototype.isalnum = function() {
    return /^[0-9a-zA-Z]{1,}$/.test(this);
};
String.prototype.isalpha = function() {
    return /^[a-zA-Z]{1,}$/.test(this);
};
String.prototype.isdecimal = function() {
    return /^[0-9]{1,}$/.test(this);
};
String.prototype.isdigit = function() {
    return this.isdecimal();
};
String.prototype.islower = function() {
    return /^[a-z]{1,}$/.test(this);
};
String.prototype.isupper = function() {
    return /^[A-Z]{1,}$/.test(this);
};
String.prototype.isspace = function() {
    return /^[\s]{1,}$/.test(this);
};
String.prototype.isnumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
String.prototype.join = function(strings) {
    strings = Array.from(strings);
    return strings.join(this);
};
String.prototype.lower = function() {
    return this.toLowerCase();
};
String.prototype.py_replace = function(old, aNew, maxreplace) {
    return this.split(old, maxreplace).join(aNew);
};
String.prototype.lstrip = function() {
    return this.replace(/^\s*/g, '');
};
String.prototype.rfind = function(sub, start) {
    return this.lastIndexOf(sub, start);
};
String.prototype.rsplit = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [
                result.slice(0, maxrsplit).join(sep)
            ].concat(result.slice(maxrsplit));
        } else return result;
    }
};
String.prototype.rstrip = function() {
    return this.replace(/\s*$/g, '');
};
String.prototype.py_split = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) return result.slice(0, maxsplit).concat([
            result.slice(maxsplit).join(sep)
        ]);
        else return result;
    }
};
String.prototype.startswith = function(prefix) {
    if (prefix instanceof Array) for(var i = 0; i < prefix.length; i++){
        if (this.indexOf(prefix[i]) == 0) return true;
    }
    else return this.indexOf(prefix) == 0;
    return false;
};
String.prototype.strip = function() {
    return this.trim();
};
String.prototype.upper = function() {
    return this.toUpperCase();
};
String.prototype.__mul__ = function(scalar) {
    var result = '';
    for(var i = 0; i < scalar; i++)result = result + this;
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__(element) {
    return this.hasOwnProperty(element);
}
function __keys__() {
    var keys = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) keys.push(attrib);
    return keys;
}
function __items__() {
    var items = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) items.push([
        attrib,
        this[attrib]
    ]);
    return items;
}
function __del__(key) {
    delete this[key];
}
function __clear__() {
    for(var attrib in this)delete this[attrib];
}
function __getdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result == undefined) result = this['py_' + aKey];
    return result == undefined ? aDefault == undefined ? null : aDefault : result;
}
function __setdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) return result;
    var val = aDefault == undefined ? null : aDefault;
    this[aKey] = val;
    return val;
}
function __pop__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) {
        delete this[aKey];
        return result;
    } else {
        if (aDefault === undefined) throw KeyError(aKey, new Error());
    }
    return aDefault;
}
function __popitem__() {
    var aKey = Object.keys(this)[0];
    if (aKey == null) throw KeyError("popitem(): dictionary is empty", new Error());
    var result = tuple([
        aKey,
        this[aKey]
    ]);
    delete this[aKey];
    return result;
}
function __update__(aDict) {
    for(var aKey in aDict)this[aKey] = aDict[aKey];
}
function __values__() {
    var values = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) values.push(this[attrib]);
    return values;
}
function __dgetitem__(aKey) {
    return this[aKey];
}
function __dsetitem__(aKey, aValue) {
    this[aKey] = aValue;
}
function dict(objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) for(var index = 0; index < objectOrPairs.length; index++){
            var pair = objectOrPairs[index];
            if (!(pair instanceof Array) || pair.length != 2) throw ValueError("dict update sequence element #" + index + " has length " + pair.length + "; 2 is required", new Error());
            var key = pair[0];
            var val = pair[1];
            if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                if (!isinstance(objectOrPairs, dict)) val = dict(val);
            }
            instance[key] = val;
        }
    } else {
        if (isinstance(objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys();
            for(var index = 0; index < aKeys.length; index++){
                var key = aKeys[index];
                instance[key] = objectOrPairs[key];
            }
        } else if (objectOrPairs instanceof Object) instance = objectOrPairs;
        else throw ValueError("Invalid type of object for dict creation", new Error());
    }
    __setproperty__(instance, '__class__', {
        value: dict,
        enumerable: false,
        writable: true
    });
    __setproperty__(instance, '__contains__', {
        value: __contains__,
        enumerable: false
    });
    __setproperty__(instance, 'py_keys', {
        value: __keys__,
        enumerable: false
    });
    __setproperty__(instance, '__iter__', {
        value: function() {
            new __PyIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, Symbol.iterator, {
        value: function() {
            new __JsIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, 'py_items', {
        value: __items__,
        enumerable: false
    });
    __setproperty__(instance, 'py_del', {
        value: __del__,
        enumerable: false
    });
    __setproperty__(instance, 'py_clear', {
        value: __clear__,
        enumerable: false
    });
    __setproperty__(instance, 'py_get', {
        value: __getdefault__,
        enumerable: false
    });
    __setproperty__(instance, 'py_setdefault', {
        value: __setdefault__,
        enumerable: false
    });
    __setproperty__(instance, 'py_pop', {
        value: __pop__,
        enumerable: false
    });
    __setproperty__(instance, 'py_popitem', {
        value: __popitem__,
        enumerable: false
    });
    __setproperty__(instance, 'py_update', {
        value: __update__,
        enumerable: false
    });
    __setproperty__(instance, 'py_values', {
        value: __values__,
        enumerable: false
    });
    __setproperty__(instance, '__getitem__', {
        value: __dgetitem__,
        enumerable: false
    });
    __setproperty__(instance, '__setitem__', {
        value: __dsetitem__,
        enumerable: false
    });
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [
    object
];
function __setdoc__(docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__(Function.prototype, '__setdoc__', {
    value: __setdoc__,
    enumerable: false
});
function __jsmod__(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return a % b;
}
function __mod__(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __pow__(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
var pow = __pow__;
function __neg__(a) {
    if (typeof a == 'object' && '__neg__' in a) return a.__neg__();
    else return -a;
}
function __matmul__(a, b) {
    return a.__matmul__(b);
}
function __mul__(a, b) {
    if (typeof a == 'object' && '__mul__' in a) return a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return b.__rmul__(a);
    else if (typeof a == 'string') return a.__mul__(b);
    else if (typeof b == 'string') return b.__rmul__(a);
    else return a * b;
}
function __truediv__(a, b) {
    if (typeof a == 'object' && '__truediv__' in a) return a.__truediv__(b);
    else if (typeof b == 'object' && '__rtruediv__' in b) return b.__rtruediv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return a / b;
}
function __floordiv__(a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) return a.__floordiv__(b);
    else if (typeof b == 'object' && '__rfloordiv__' in b) return b.__rfloordiv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return Math.floor(a / b);
}
function __add__(a, b) {
    if (typeof a == 'object' && '__add__' in a) return a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return b.__radd__(a);
    else return a + b;
}
function __sub__(a, b) {
    if (typeof a == 'object' && '__sub__' in a) return a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return b.__rsub__(a);
    else return a - b;
}
function __lshift__(a, b) {
    if (typeof a == 'object' && '__lshift__' in a) return a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return b.__rlshift__(a);
    else return a << b;
}
function __rshift__(a, b) {
    if (typeof a == 'object' && '__rshift__' in a) return a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return b.__rrshift__(a);
    else return a >> b;
}
function __or__(a, b) {
    if (typeof a == 'object' && '__or__' in a) return a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return b.__ror__(a);
    else return a | b;
}
function __xor__(a, b) {
    if (typeof a == 'object' && '__xor__' in a) return a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return b.__rxor__(a);
    else return a ^ b;
}
function __and__(a, b) {
    if (typeof a == 'object' && '__and__' in a) return a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return b.__rand__(a);
    else return a & b;
}
function __eq__(a, b) {
    if (typeof a == 'object' && '__eq__' in a) return a.__eq__(b);
    else return a == b;
}
function __ne__(a, b) {
    if (typeof a == 'object' && '__ne__' in a) return a.__ne__(b);
    else return a != b;
}
function __lt__(a, b) {
    if (typeof a == 'object' && '__lt__' in a) return a.__lt__(b);
    else return a < b;
}
function __le__(a, b) {
    if (typeof a == 'object' && '__le__' in a) return a.__le__(b);
    else return a <= b;
}
function __gt__(a, b) {
    if (typeof a == 'object' && '__gt__' in a) return a.__gt__(b);
    else return a > b;
}
function __ge__(a, b) {
    if (typeof a == 'object' && '__ge__' in a) return a.__ge__(b);
    else return a >= b;
}
function __imatmul__(a, b) {
    if ('__imatmul__' in a) return a.__imatmul__(b);
    else return a.__matmul__(b);
}
function __ipow__(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__ipow__(b);
    else if (typeof a == 'object' && '__ipow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
function __ijsmod__(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__ismod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rmod__(a);
    else return a % b;
}
function __imod__(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__imod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __imul__(a, b) {
    if (typeof a == 'object' && '__imul__' in a) return a.__imul__(b);
    else if (typeof a == 'object' && '__mul__' in a) return a = a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return a = b.__rmul__(a);
    else if (typeof a == 'string') return a = a.__mul__(b);
    else if (typeof b == 'string') return a = b.__rmul__(a);
    else return a *= b;
}
function __idiv__(a, b) {
    if (typeof a == 'object' && '__idiv__' in a) return a.__idiv__(b);
    else if (typeof a == 'object' && '__div__' in a) return a = a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return a = b.__rdiv__(a);
    else return a /= b;
}
function __iadd__(a, b) {
    if (typeof a == 'object' && '__iadd__' in a) return a.__iadd__(b);
    else if (typeof a == 'object' && '__add__' in a) return a = a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return a = b.__radd__(a);
    else return a += b;
}
function __isub__(a, b) {
    if (typeof a == 'object' && '__isub__' in a) return a.__isub__(b);
    else if (typeof a == 'object' && '__sub__' in a) return a = a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return a = b.__rsub__(a);
    else return a -= b;
}
function __ilshift__(a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) return a.__ilshift__(b);
    else if (typeof a == 'object' && '__lshift__' in a) return a = a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return a = b.__rlshift__(a);
    else return a <<= b;
}
function __irshift__(a, b) {
    if (typeof a == 'object' && '__irshift__' in a) return a.__irshift__(b);
    else if (typeof a == 'object' && '__rshift__' in a) return a = a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return a = b.__rrshift__(a);
    else return a >>= b;
}
function __ior__(a, b) {
    if (typeof a == 'object' && '__ior__' in a) return a.__ior__(b);
    else if (typeof a == 'object' && '__or__' in a) return a = a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return a = b.__ror__(a);
    else return a |= b;
}
function __ixor__(a, b) {
    if (typeof a == 'object' && '__ixor__' in a) return a.__ixor__(b);
    else if (typeof a == 'object' && '__xor__' in a) return a = a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return a = b.__rxor__(a);
    else return a ^= b;
}
function __iand__(a, b) {
    if (typeof a == 'object' && '__iand__' in a) return a.__iand__(b);
    else if (typeof a == 'object' && '__and__' in a) return a = a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return a = b.__rand__(a);
    else return a &= b;
}
function __getitem__(container, key) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__(key);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) return container[container.length + key];
    else return container[key];
}
function __setitem__(container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__(key, value);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) container[container.length + key] = value;
    else container[key] = value;
}
function __getslice__(container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__([
        lower,
        upper,
        step
    ]);
    else return container.__getslice__(lower, upper, step);
}
function __setslice__(container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__([
        lower,
        upper,
        step
    ], value);
    else container.__setslice__(lower, upper, step, value);
}
var BaseException = __class__('BaseException', [
    object
], {
    __module__: __name__
});
var Exception = __class__('Exception', [
    BaseException
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            var kwargs = dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.__args__ = args;
            if (kwargs.error != null) self.stack = kwargs.error.stack;
            else if (Error) self.stack = new Error().stack;
            else self.stack = 'No stack trace available';
        });
    },
    get __repr__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return '{}{}'.format(self.__class__.__name__, repr(tuple(self.__args__)));
            else if (len(self.__args__)) return '{}({})'.format(self.__class__.__name__, repr(self.__args__[0]));
            else return '{}()'.format(self.__class__.__name__);
        });
    },
    get __str__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return str(tuple(self.__args__));
            else if (len(self.__args__)) return str(self.__args__[0]);
            else return '';
        });
    }
});
var IterableError = __class__('IterableError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, "Can't iterate over non-iterable", __kwargtrans__({
                error: error
            }));
        });
    }
});
var StopIteration = __class__('StopIteration', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, 'Iterator exhausted', __kwargtrans__({
                error: error
            }));
        });
    }
});
var ValueError = __class__('ValueError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var KeyError = __class__('KeyError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AssertionError = __class__('AssertionError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            if (message) Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
            else Exception.__init__(self, __kwargtrans__({
                error: error
            }));
        });
    }
});
var NotImplementedError = __class__('NotImplementedError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var IndexError = __class__('IndexError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AttributeError = __class__('AttributeError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var py_TypeError = __class__('py_TypeError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var Warning = __class__('Warning', [
    Exception
], {
    __module__: __name__
});
var UserWarning = __class__('UserWarning', [
    Warning
], {
    __module__: __name__
});
var DeprecationWarning = __class__('DeprecationWarning', [
    Warning
], {
    __module__: __name__
});
var RuntimeWarning = __class__('RuntimeWarning', [
    Warning
], {
    __module__: __name__
});
var __sort__ = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (key) iterable.sort(function __lambda__(a, b) {
        if (arguments.length) {
            var __ilastarg0__ = arguments.length - 1;
            if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                var __allkwargs0__ = arguments[__ilastarg0__--];
                for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                    case 'a':
                        var a = __allkwargs0__[__attrib0__];
                        break;
                    case 'b':
                        var b = __allkwargs0__[__attrib0__];
                        break;
                }
            }
        }
        return key(a) > key(b) ? 1 : -1;
    });
    else iterable.sort();
    if (reverse) iterable.reverse();
};
var sorted = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (py_typeof(iterable) == dict) var result = copy(iterable.py_keys());
    else var result = copy(iterable);
    __sort__(result, key, reverse);
    return result;
};
var map = function(func, iterable) {
    return function() {
        var __accu0__ = [];
        for (var item of iterable)__accu0__.append(func(item));
        return __accu0__;
    }();
};
var filter = function(func, iterable) {
    if (func == null) var func = bool;
    return function() {
        var __accu0__ = [];
        for (var item of iterable)if (func(item)) __accu0__.append(item);
        return __accu0__;
    }();
};
var divmod = function(n, d) {
    return tuple([
        Math.floor(n / d),
        __mod__(n, d)
    ]);
};
var __Terminal__ = __class__('__Terminal__', [
    object
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            self.buffer = '';
            try {
                self.element = document.getElementById('__terminal__');
            } catch (__except0__) {
                self.element = null;
            }
            if (self.element) {
                self.element.style.overflowX = 'auto';
                self.element.style.boxSizing = 'border-box';
                self.element.style.padding = '5px';
                self.element.innerHTML = '_';
            }
        });
    },
    get print () {
        return __get__(this, function(self) {
            var sep = ' ';
            var end = '\n';
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'sep':
                            var sep = __allkwargs0__[__attrib0__];
                            break;
                        case 'end':
                            var end = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.buffer = '{}{}{}'.format(self.buffer, sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()), end).__getslice__(-4096, null, 1);
            if (self.element) {
                self.element.innerHTML = self.buffer.py_replace('\n', '<br>').py_replace(' ', '&nbsp');
                self.element.scrollTop = self.element.scrollHeight;
            } else console.log(sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()));
        });
    },
    get input () {
        return __get__(this, function(self, question) {
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'question':
                            var question = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
            }
            self.print('{}'.format(question), __kwargtrans__({
                end: ''
            }));
            var answer = window.prompt('\n'.join(self.buffer.py_split('\n').__getslice__(-8, null, 1)));
            self.print(answer);
            return answer;
        });
    }
});
var __terminal__ = __Terminal__();
var print = __terminal__.print;
var input = __terminal__.input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4SQGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hyper", ()=>Hyper
);
parcelHelpers.export(exports, "Html", ()=>Html
);
parcelHelpers.export(exports, "Svg", ()=>Svg
);
parcelHelpers.export(exports, "Fuzzy", ()=>Fuzzy
);
parcelHelpers.export(exports, "FuzzyViz", ()=>FuzzyViz
);
parcelHelpers.export(exports, "window", ()=>window
);
parcelHelpers.export(exports, "console", ()=>console
);
parcelHelpers.export(exports, "document", ()=>document
);
parcelHelpers.export(exports, "is_nan", ()=>is_nan
);
parcelHelpers.export(exports, "Json", ()=>Json
);
parcelHelpers.export(exports, "asdict", ()=>asdict
);
parcelHelpers.export(exports, "field", ()=>field
);
// Transcrypt'ed from Python, 2022-05-13 10:58:45
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var _typingJs = require("./typing.js");
var __name__ = 'ffi.js';
var Hyper = require('hyperapp');
var Html = require('@hyperapp/html');
var Svg = require('@hyperapp/svg');
var Fuzzy = require('@thi.ng/fuzzy');
Fuzzy['or_'] = Fuzzy['or'];
Fuzzy['and_'] = Fuzzy['and'];
var FuzzyViz = require('@thi.ng/fuzzy-viz');
var window = require('global/window');
var console = require('global/console');
var document = require('global/document');
var is_nan = window.Number.isNaN;
var Json = window.JSON;
var asdict = function(data) {
    var props = _orgTranscryptRuntimeJs.dict();
    var propNames = window.Object['keys'](data);
    for (var propName of propNames){
        if (_orgTranscryptRuntimeJs.__in__('__', propName)) continue;
        else props[propName] = data[propName];
    }
    return props;
};
var field = function(default_factory) {
    if (typeof default_factory == 'undefined' || default_factory != null && default_factory.hasOwnProperty("__kwargtrans__")) var default_factory = null;
    if (default_factory) return default_factory();
    else return default_factory;
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","./typing.js":"2pquK","hyperapp":"7OIza","@hyperapp/html":"iA7mS","@hyperapp/svg":"cTOdV","@thi.ng/fuzzy":"deD8F","@thi.ng/fuzzy-viz":"gh5C1","global/window":"iU6IE","global/console":"ig8ew","global/document":"fUl09","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pquK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClassVar", ()=>ClassVar
);
// Transcrypt'ed from Python, 2022-05-10 08:40:21
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = 'typing';
var ClassVar = 'ClassVar';

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OIza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "app", ()=>app
);
var SSR_NODE = 1;
var TEXT_NODE = 3;
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var SVG_NS = "http://www.w3.org/2000/svg";
var id = (a)=>a
;
var map = EMPTY_ARR.map;
var isArray = Array.isArray;
var enqueue = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;
var createClass = (obj)=>{
    var out = "";
    if (typeof obj === "string") return obj;
    if (isArray(obj)) {
        for(var k = 0, tmp; k < obj.length; k++)if (tmp = createClass(obj[k])) out += (out && " ") + tmp;
    } else {
        for(var k in obj)if (obj[k]) out += (out && " ") + k;
    }
    return out;
};
var shouldRestart = (a, b)=>{
    for(var k in {
        ...a,
        ...b
    }){
        if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") b[k] = a[k];
        else if (a[k] !== b[k]) return true;
    }
};
var patchSubs = (oldSubs, newSubs = EMPTY_ARR, dispatch)=>{
    for(var subs = [], i = 0, oldSub, newSub; i < oldSubs.length || i < newSubs.length; i++){
        oldSub = oldSubs[i];
        newSub = newSubs[i];
        subs.push(newSub && newSub !== true ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [
            newSub[0],
            newSub[1],
            (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1])), 
        ] : oldSub : oldSub && oldSub[2]());
    }
    return subs;
};
var getKey = (vdom)=>vdom == null ? vdom : vdom.key
;
var patchProperty = (node, key, oldValue, newValue, listener, isSvg)=>{
    if (key === "style") for(var k in {
        ...oldValue,
        ...newValue
    }){
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
        if (k[0] === "-") node[key].setProperty(k, oldValue);
        else node[key][k] = oldValue;
    }
    else if (key[0] === "o" && key[1] === "n") {
        if (!((node.events || (node.events = {}))[key = key.slice(2)] = newValue)) node.removeEventListener(key, listener);
        else if (!oldValue) node.addEventListener(key, listener);
    } else if (!isSvg && key !== "list" && key !== "form" && key in node) node[key] = newValue == null ? "" : newValue;
    else if (newValue == null || newValue === false) node.removeAttribute(key);
    else node.setAttribute(key, newValue);
};
var createNode = (vdom, listener, isSvg)=>{
    var props = vdom.props;
    var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.tag) : (isSvg = isSvg || vdom.tag === "svg") ? document.createElementNS(SVG_NS, vdom.tag, props.is && props) : document.createElement(vdom.tag, props.is && props);
    for(var k in props)patchProperty(node, k, null, props[k], listener, isSvg);
    for(var i = 0; i < vdom.children.length; i++)node.appendChild(createNode(vdom.children[i] = maybeVNode(vdom.children[i]), listener, isSvg));
    return vdom.node = node;
};
var patch = (parent, node, oldVNode, newVNode, listener, isSvg)=>{
    if (oldVNode === newVNode) ;
    else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
        if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
        node = parent.insertBefore(createNode(newVNode = maybeVNode(newVNode), listener, isSvg), node);
        if (oldVNode != null) parent.removeChild(oldVNode.node);
    } else {
        var tmpVKid;
        var oldVKid;
        var oldKey;
        var newKey;
        var oldProps = oldVNode.props;
        var newProps = newVNode.props;
        var oldVKids = oldVNode.children;
        var newVKids = newVNode.children;
        var oldHead = 0;
        var newHead = 0;
        var oldTail = oldVKids.length - 1;
        var newTail = newVKids.length - 1;
        isSvg = isSvg || newVNode.tag === "svg";
        for(var i in {
            ...oldProps,
            ...newProps
        })if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldProps[i]) !== newProps[i]) patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) break;
            patch(node, oldVKids[oldHead].node, oldVKids[oldHead], newVKids[newHead] = maybeVNode(newVKids[newHead++], oldVKids[oldHead++]), listener, isSvg);
        }
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) break;
            patch(node, oldVKids[oldTail].node, oldVKids[oldTail], newVKids[newTail] = maybeVNode(newVKids[newTail--], oldVKids[oldTail--]), listener, isSvg);
        }
        if (oldHead > oldTail) while(newHead <= newTail)node.insertBefore(createNode(newVKids[newHead] = maybeVNode(newVKids[newHead++]), listener, isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
        else if (newHead > newTail) while(oldHead <= oldTail)node.removeChild(oldVKids[oldHead++].node);
        else {
            for(var keyed = {}, newKeyed = {}, i = oldHead; i <= oldTail; i++)if ((oldKey = oldVKids[i].key) != null) keyed[oldKey] = oldVKids[i];
            while(newHead <= newTail){
                oldKey = getKey(oldVKid = oldVKids[oldHead]);
                newKey = getKey(newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid));
                if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
                    if (oldKey == null) node.removeChild(oldVKid.node);
                    oldHead++;
                    continue;
                }
                if (newKey == null || oldVNode.type === SSR_NODE) {
                    if (oldKey == null) {
                        patch(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newHead++;
                    }
                    oldHead++;
                } else {
                    if (oldKey === newKey) {
                        patch(node, oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                        oldHead++;
                    } else if ((tmpVKid = keyed[newKey]) != null) {
                        patch(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                    } else patch(node, oldVKid && oldVKid.node, null, newVKids[newHead], listener, isSvg);
                    newHead++;
                }
            }
            while(oldHead <= oldTail)if (getKey(oldVKid = oldVKids[oldHead++]) == null) node.removeChild(oldVKid.node);
            for(var i in keyed)if (newKeyed[i] == null) node.removeChild(keyed[i].node);
        }
    }
    return newVNode.node = node;
};
var propsChanged = (a, b)=>{
    for(var k in a)if (a[k] !== b[k]) return true;
    for(var k in b)if (a[k] !== b[k]) return true;
};
var maybeVNode = (newVNode, oldVNode)=>newVNode !== true && newVNode !== false && newVNode ? typeof newVNode.tag === "function" ? ((!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.memo)) && ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo), oldVNode) : newVNode : text("")
;
var recycleNode = (node)=>node.nodeType === TEXT_NODE ? text(node.nodeValue, node) : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ, map.call(node.childNodes, recycleNode), SSR_NODE, node)
;
var createVNode = (tag, { key , ...props }, children, type, node)=>({
        tag,
        props,
        key,
        children,
        type,
        node
    })
;
var memo = (tag, memo1)=>({
        tag,
        memo: memo1
    })
;
var text = (value, node)=>createVNode(value, EMPTY_OBJ, EMPTY_ARR, TEXT_NODE, node)
;
var h = (tag, { class: c , ...props }, children = EMPTY_ARR)=>createVNode(tag, {
        ...props,
        ...c ? {
            class: createClass(c)
        } : EMPTY_OBJ
    }, isArray(children) ? children : [
        children
    ])
;
var app = ({ node , view , subscriptions , dispatch =id , init =EMPTY_OBJ ,  })=>{
    var vdom = node && recycleNode(node);
    var subs = [];
    var state;
    var busy;
    var update = (newState)=>{
        if (state !== newState) {
            if ((state = newState) == null) dispatch = subscriptions = render = id;
            if (subscriptions) subs = patchSubs(subs, subscriptions(state), dispatch);
            if (view && !busy) enqueue(render, busy = true);
        }
    };
    var render = ()=>node = patch(node.parentNode, node, vdom, vdom = view(state), listener, busy = false)
    ;
    var listener = function(event) {
        dispatch(this.events[event.type], event);
    };
    return (dispatch = dispatch((action, props)=>typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" ? dispatch(action[0], action[1]) : action.slice(1).map((fx)=>fx && fx !== true && (fx[0] || fx)(dispatch, fx[1])
        , update(action[0])) : update(action)
    ))(init), dispatch;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iA7mS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>a
);
parcelHelpers.export(exports, "b", ()=>b
);
parcelHelpers.export(exports, "i", ()=>i
);
parcelHelpers.export(exports, "p", ()=>p
);
parcelHelpers.export(exports, "q", ()=>q
);
parcelHelpers.export(exports, "s", ()=>s
);
parcelHelpers.export(exports, "br", ()=>br
);
parcelHelpers.export(exports, "dd", ()=>dd
);
parcelHelpers.export(exports, "dl", ()=>dl
);
parcelHelpers.export(exports, "dt", ()=>dt
);
parcelHelpers.export(exports, "em", ()=>em
);
parcelHelpers.export(exports, "h1", ()=>h1
);
parcelHelpers.export(exports, "h2", ()=>h2
);
parcelHelpers.export(exports, "h3", ()=>h3
);
parcelHelpers.export(exports, "h4", ()=>h4
);
parcelHelpers.export(exports, "h5", ()=>h5
);
parcelHelpers.export(exports, "h6", ()=>h6
);
parcelHelpers.export(exports, "hr", ()=>hr
);
parcelHelpers.export(exports, "li", ()=>li
);
parcelHelpers.export(exports, "ol", ()=>ol
);
parcelHelpers.export(exports, "rp", ()=>rp
);
parcelHelpers.export(exports, "rt", ()=>rt
);
parcelHelpers.export(exports, "td", ()=>td
);
parcelHelpers.export(exports, "th", ()=>th
);
parcelHelpers.export(exports, "tr", ()=>tr
);
parcelHelpers.export(exports, "ul", ()=>ul
);
parcelHelpers.export(exports, "bdi", ()=>bdi
);
parcelHelpers.export(exports, "bdo", ()=>bdo
);
parcelHelpers.export(exports, "col", ()=>col
);
parcelHelpers.export(exports, "del", ()=>del
);
parcelHelpers.export(exports, "dfn", ()=>dfn
);
parcelHelpers.export(exports, "div", ()=>div
);
parcelHelpers.export(exports, "img", ()=>img
);
parcelHelpers.export(exports, "ins", ()=>ins
);
parcelHelpers.export(exports, "kbd", ()=>kbd
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "nav", ()=>nav
);
parcelHelpers.export(exports, "pre", ()=>pre
);
parcelHelpers.export(exports, "rtc", ()=>rtc
);
parcelHelpers.export(exports, "sub", ()=>sub
);
parcelHelpers.export(exports, "sup", ()=>sup
);
parcelHelpers.export(exports, "wbr", ()=>wbr
);
parcelHelpers.export(exports, "abbr", ()=>abbr
);
parcelHelpers.export(exports, "area", ()=>area
);
parcelHelpers.export(exports, "cite", ()=>cite
);
parcelHelpers.export(exports, "code", ()=>code
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "form", ()=>form
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "mark", ()=>mark
);
parcelHelpers.export(exports, "ruby", ()=>ruby
);
parcelHelpers.export(exports, "samp", ()=>samp
);
parcelHelpers.export(exports, "span", ()=>span
);
parcelHelpers.export(exports, "time", ()=>time
);
parcelHelpers.export(exports, "aside", ()=>aside
);
parcelHelpers.export(exports, "audio", ()=>audio
);
parcelHelpers.export(exports, "input", ()=>input
);
parcelHelpers.export(exports, "label", ()=>label
);
parcelHelpers.export(exports, "meter", ()=>meter
);
parcelHelpers.export(exports, "param", ()=>param
);
parcelHelpers.export(exports, "small", ()=>small
);
parcelHelpers.export(exports, "table", ()=>table
);
parcelHelpers.export(exports, "tbody", ()=>tbody
);
parcelHelpers.export(exports, "tfoot", ()=>tfoot
);
parcelHelpers.export(exports, "thead", ()=>thead
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "video", ()=>video
);
parcelHelpers.export(exports, "button", ()=>button
);
parcelHelpers.export(exports, "canvas", ()=>canvas
);
parcelHelpers.export(exports, "dialog", ()=>dialog
);
parcelHelpers.export(exports, "figure", ()=>figure
);
parcelHelpers.export(exports, "footer", ()=>footer
);
parcelHelpers.export(exports, "header", ()=>header
);
parcelHelpers.export(exports, "iframe", ()=>iframe
);
parcelHelpers.export(exports, "legend", ()=>legend
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "option", ()=>option
);
parcelHelpers.export(exports, "output", ()=>output
);
parcelHelpers.export(exports, "select", ()=>select
);
parcelHelpers.export(exports, "source", ()=>source
);
parcelHelpers.export(exports, "strong", ()=>strong
);
parcelHelpers.export(exports, "address", ()=>address
);
parcelHelpers.export(exports, "article", ()=>article
);
parcelHelpers.export(exports, "caption", ()=>caption
);
parcelHelpers.export(exports, "details", ()=>details
);
parcelHelpers.export(exports, "section", ()=>section
);
parcelHelpers.export(exports, "summary", ()=>summary
);
parcelHelpers.export(exports, "picture", ()=>picture
);
parcelHelpers.export(exports, "colgroup", ()=>colgroup
);
parcelHelpers.export(exports, "datalist", ()=>datalist
);
parcelHelpers.export(exports, "fieldset", ()=>fieldset
);
parcelHelpers.export(exports, "menuitem", ()=>menuitem
);
parcelHelpers.export(exports, "optgroup", ()=>optgroup
);
parcelHelpers.export(exports, "progress", ()=>progress
);
parcelHelpers.export(exports, "textarea", ()=>textarea
);
parcelHelpers.export(exports, "blockquote", ()=>blockquote
);
parcelHelpers.export(exports, "figcaption", ()=>figcaption
);
parcelHelpers.export(exports, "text", ()=>_hyperapp.text
);
var _hyperapp = require("hyperapp");
const EMPTY_ARR = [];
const EMPTY_OBJ = {};
const tag = (tag1)=>(props = EMPTY_OBJ, children = props.tag != null || Array.isArray(props) ? props : EMPTY_ARR)=>_hyperapp.h(tag1, props === children ? EMPTY_OBJ : props, children)
;
const a = tag("a");
const b = tag("b");
const i = tag("i");
const p = tag("p");
const q = tag("q");
const s = tag("s");
const br = tag("br");
const dd = tag("dd");
const dl = tag("dl");
const dt = tag("dt");
const em = tag("em");
const h1 = tag("h1");
const h2 = tag("h2");
const h3 = tag("h3");
const h4 = tag("h4");
const h5 = tag("h5");
const h6 = tag("h6");
const hr = tag("hr");
const li = tag("li");
const ol = tag("ol");
const rp = tag("rp");
const rt = tag("rt");
const td = tag("td");
const th = tag("th");
const tr = tag("tr");
const ul = tag("ul");
const bdi = tag("bdi");
const bdo = tag("bdo");
const col = tag("col");
const del = tag("del");
const dfn = tag("dfn");
const div = tag("div");
const img = tag("img");
const ins = tag("ins");
const kbd = tag("kbd");
const map = tag("map");
const nav = tag("nav");
const pre = tag("pre");
const rtc = tag("rtc");
const sub = tag("sub");
const sup = tag("sup");
const wbr = tag("wbr");
const abbr = tag("abbr");
const area = tag("area");
const cite = tag("cite");
const code = tag("code");
const data = tag("data");
const form = tag("form");
const main = tag("main");
const mark = tag("mark");
const ruby = tag("ruby");
const samp = tag("samp");
const span = tag("span");
const time = tag("time");
const aside = tag("aside");
const audio = tag("audio");
const input = tag("input");
const label = tag("label");
const meter = tag("meter");
const param = tag("param");
const small = tag("small");
const table = tag("table");
const tbody = tag("tbody");
const tfoot = tag("tfoot");
const thead = tag("thead");
const track = tag("track");
const video = tag("video");
const button = tag("button");
const canvas = tag("canvas");
const dialog = tag("dialog");
const figure = tag("figure");
const footer = tag("footer");
const header = tag("header");
const iframe = tag("iframe");
const legend = tag("legend");
const object = tag("object");
const option = tag("option");
const output = tag("output");
const select = tag("select");
const source = tag("source");
const strong = tag("strong");
const address = tag("address");
const article = tag("article");
const caption = tag("caption");
const details = tag("details");
const section = tag("section");
const summary = tag("summary");
const picture = tag("picture");
const colgroup = tag("colgroup");
const datalist = tag("datalist");
const fieldset = tag("fieldset");
const menuitem = tag("menuitem");
const optgroup = tag("optgroup");
const progress = tag("progress");
const textarea = tag("textarea");
const blockquote = tag("blockquote");
const figcaption = tag("figcaption");

},{"hyperapp":"7OIza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTOdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>a
);
parcelHelpers.export(exports, "g", ()=>g
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "use", ()=>use
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "line", ()=>line
);
parcelHelpers.export(exports, "path", ()=>path
);
parcelHelpers.export(exports, "rect", ()=>rect
);
parcelHelpers.export(exports, "desc", ()=>desc
);
parcelHelpers.export(exports, "defs", ()=>defs
);
parcelHelpers.export(exports, "mask", ()=>mask
);
parcelHelpers.export(exports, "tref", ()=>tref
);
parcelHelpers.export(exports, "font", ()=>font
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "view", ()=>view
);
parcelHelpers.export(exports, "text_", ()=>text_
);
parcelHelpers.export(exports, "image", ()=>image
);
parcelHelpers.export(exports, "mpath", ()=>mpath
);
parcelHelpers.export(exports, "title", ()=>title
);
parcelHelpers.export(exports, "glyph", ()=>glyph
);
parcelHelpers.export(exports, "tspan", ()=>tspan
);
parcelHelpers.export(exports, "style", ()=>style
);
parcelHelpers.export(exports, "circle", ()=>circle
);
parcelHelpers.export(exports, "marker", ()=>marker
);
parcelHelpers.export(exports, "symbol", ()=>symbol
);
parcelHelpers.export(exports, "feTile", ()=>feTile
);
parcelHelpers.export(exports, "cursor", ()=>cursor
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "switch_", ()=>switch_
);
parcelHelpers.export(exports, "ellipse", ()=>ellipse
);
parcelHelpers.export(exports, "polygon", ()=>polygon
);
parcelHelpers.export(exports, "animate", ()=>animate
);
parcelHelpers.export(exports, "pattern", ()=>pattern
);
parcelHelpers.export(exports, "feBlend", ()=>feBlend
);
parcelHelpers.export(exports, "feFlood", ()=>feFlood
);
parcelHelpers.export(exports, "feFuncA", ()=>feFuncA
);
parcelHelpers.export(exports, "feFuncB", ()=>feFuncB
);
parcelHelpers.export(exports, "feFuncG", ()=>feFuncG
);
parcelHelpers.export(exports, "feFuncR", ()=>feFuncR
);
parcelHelpers.export(exports, "feImage", ()=>feImage
);
parcelHelpers.export(exports, "feMerge", ()=>feMerge
);
parcelHelpers.export(exports, "polyline", ()=>polyline
);
parcelHelpers.export(exports, "metadata", ()=>metadata
);
parcelHelpers.export(exports, "altGlyph", ()=>altGlyph
);
parcelHelpers.export(exports, "glyphRef", ()=>glyphRef
);
parcelHelpers.export(exports, "textPath", ()=>textPath
);
parcelHelpers.export(exports, "feOffset", ()=>feOffset
);
parcelHelpers.export(exports, "clipPath", ()=>clipPath
);
parcelHelpers.export(exports, "altGlyphDef", ()=>altGlyphDef
);
parcelHelpers.export(exports, "feComposite", ()=>feComposite
);
parcelHelpers.export(exports, "feMergeNode", ()=>feMergeNode
);
parcelHelpers.export(exports, "feSpotLight", ()=>feSpotLight
);
parcelHelpers.export(exports, "animateColor", ()=>animateColor
);
parcelHelpers.export(exports, "altGlyphItem", ()=>altGlyphItem
);
parcelHelpers.export(exports, "feMorphology", ()=>feMorphology
);
parcelHelpers.export(exports, "feTurbulence", ()=>feTurbulence
);
parcelHelpers.export(exports, "fePointLight", ()=>fePointLight
);
parcelHelpers.export(exports, "colorProfile", ()=>colorProfile
);
parcelHelpers.export(exports, "foreignObject", ()=>foreignObject
);
parcelHelpers.export(exports, "animateMotion", ()=>animateMotion
);
parcelHelpers.export(exports, "feColorMatrix", ()=>feColorMatrix
);
parcelHelpers.export(exports, "linearGradient", ()=>linearGradient
);
parcelHelpers.export(exports, "radialGradient", ()=>radialGradient
);
parcelHelpers.export(exports, "feGaussianBlur", ()=>feGaussianBlur
);
parcelHelpers.export(exports, "feDistantLight", ()=>feDistantLight
);
parcelHelpers.export(exports, "animateTransform", ()=>animateTransform
);
parcelHelpers.export(exports, "feConvolveMatrix", ()=>feConvolveMatrix
);
parcelHelpers.export(exports, "feDiffuseLighting", ()=>feDiffuseLighting
);
parcelHelpers.export(exports, "feDisplacementMap", ()=>feDisplacementMap
);
parcelHelpers.export(exports, "feSpecularLighting", ()=>feSpecularLighting
);
parcelHelpers.export(exports, "feComponentTransfer", ()=>feComponentTransfer
);
var _hyperapp = require("hyperapp");
const EMPTY_ARR = [];
const EMPTY_OBJ = {};
const tag = (tag1)=>(props, children = props.tag != null || Array.isArray(props) ? props : EMPTY_ARR)=>_hyperapp.h(tag1, props === children ? EMPTY_OBJ : props, children)
;
const a = tag("a");
const g = tag("g");
const svg = tag("svg");
const use = tag("use");
const set = tag("set");
const line = tag("line");
const path = tag("path");
const rect = tag("rect");
const desc = tag("desc");
const defs = tag("defs");
const mask = tag("mask");
const tref = tag("tref");
const font = tag("font");
const stop = tag("stop");
const view = tag("view");
const text_ = tag("text");
const image = tag("image");
const mpath = tag("mpath");
const title = tag("title");
const glyph = tag("glyph");
const tspan = tag("tspan");
const style = tag("style");
const circle = tag("circle");
const marker = tag("marker");
const symbol = tag("symbol");
const feTile = tag("feTile");
const cursor = tag("cursor");
const filter = tag("filter");
const switch_ = tag("switch");
const ellipse = tag("ellipse");
const polygon = tag("polygon");
const animate = tag("animate");
const pattern = tag("pattern");
const feBlend = tag("feBlend");
const feFlood = tag("feFlood");
const feFuncA = tag("feFuncA");
const feFuncB = tag("feFuncB");
const feFuncG = tag("feFuncG");
const feFuncR = tag("feFuncR");
const feImage = tag("feImage");
const feMerge = tag("feMerge");
const polyline = tag("polyline");
const metadata = tag("metadata");
const altGlyph = tag("altGlyph");
const glyphRef = tag("glyphRef");
const textPath = tag("textPath");
const feOffset = tag("feOffset");
const clipPath = tag("clipPath");
const altGlyphDef = tag("altGlyphDef");
const feComposite = tag("feComposite");
const feMergeNode = tag("feMergeNode");
const feSpotLight = tag("feSpotLight");
const animateColor = tag("animateColor");
const altGlyphItem = tag("altGlyphItem");
const feMorphology = tag("feMorphology");
const feTurbulence = tag("feTurbulence");
const fePointLight = tag("fePointLight");
const colorProfile = tag("colorProfile");
const foreignObject = tag("foreignObject");
const animateMotion = tag("animateMotion");
const feColorMatrix = tag("feColorMatrix");
const linearGradient = tag("linearGradient");
const radialGradient = tag("radialGradient");
const feGaussianBlur = tag("feGaussianBlur");
const feDistantLight = tag("feDistantLight");
const animateTransform = tag("animateTransform");
const feConvolveMatrix = tag("feConvolveMatrix");
const feDiffuseLighting = tag("feDiffuseLighting");
const feDisplacementMap = tag("feDisplacementMap");
const feSpecularLighting = tag("feSpecularLighting");
const feComponentTransfer = tag("feComponentTransfer");

},{"hyperapp":"7OIza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"deD8F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("./api.js");
parcelHelpers.exportAll(_apiJs, exports);
var _defuzzJs = require("./defuzz.js");
parcelHelpers.exportAll(_defuzzJs, exports);
var _rulesJs = require("./rules.js");
parcelHelpers.exportAll(_rulesJs, exports);
var _shapesJs = require("./shapes.js");
parcelHelpers.exportAll(_shapesJs, exports);
var _tnormsJs = require("./tnorms.js");
parcelHelpers.exportAll(_tnormsJs, exports);
var _varJs = require("./var.js");
parcelHelpers.exportAll(_varJs, exports);
var _bisectorJs = require("./strategies/bisector.js");
parcelHelpers.exportAll(_bisectorJs, exports);
var _centroidJs = require("./strategies/centroid.js");
parcelHelpers.exportAll(_centroidJs, exports);
var _maximaJs = require("./strategies/maxima.js");
parcelHelpers.exportAll(_maximaJs, exports);

},{"./api.js":"h1aTP","./defuzz.js":"kbVxf","./rules.js":"5e598","./shapes.js":"lIBev","./tnorms.js":"ic2eH","./var.js":"diu3T","./strategies/bisector.js":"hxVa3","./strategies/centroid.js":"aJZ4s","./strategies/maxima.js":"10fWt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1aTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbVxf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defuzz", ()=>defuzz
);
var _shapesJs = require("./shapes.js");
var _centroidJs = require("./strategies/centroid.js");
var _tnormsJs = require("./tnorms.js");
const defuzz = (ins, outs, rules, vals, strategy = _centroidJs.centroidStrategy(), imply = _tnormsJs.tnormMin, combine = _tnormsJs.snormMax)=>{
    const ruleTerms = rules.map((r)=>{
        let alpha = null;
        for(let id in vals)if (r.if[id]) {
            const v = ins[id].terms[r.if[id]](vals[id]);
            alpha = alpha !== null ? r.op(alpha, v) : v;
        }
        const terms = {};
        if (alpha) {
            const aterm = _shapesJs.constant(alpha);
            for(let id in r.then)if (outs[id]) {
                const oterm = outs[id].terms[r.then[id]];
                terms[id] = _shapesJs.intersect(imply, r.weight == 1 ? oterm : _shapesJs.weighted(oterm, r.weight), aterm);
            }
        }
        return terms;
    });
    const res = {};
    for(let id1 in outs)res[id1] = strategy(_shapesJs.union(combine, ...ruleTerms.map((r)=>r[id1]
    ).filter((f)=>!!f
    )), outs[id1].domain);
    return res;
};

},{"./shapes.js":"lIBev","./strategies/centroid.js":"aJZ4s","./tnorms.js":"ic2eH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIBev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "constant", ()=>constant
);
parcelHelpers.export(exports, "point", ()=>point
);
parcelHelpers.export(exports, "ramp", ()=>ramp
);
parcelHelpers.export(exports, "triangle", ()=>triangle
);
parcelHelpers.export(exports, "trapezoid", ()=>trapezoid
);
parcelHelpers.export(exports, "sigmoid", ()=>sigmoid
);
parcelHelpers.export(exports, "gaussian", ()=>gaussian
);
parcelHelpers.export(exports, "negate", ()=>negate
);
parcelHelpers.export(exports, "invRamp", ()=>invRamp
);
parcelHelpers.export(exports, "invSigmoid", ()=>invSigmoid
);
parcelHelpers.export(exports, "weighted", ()=>weighted
);
parcelHelpers.export(exports, "alphaCut", ()=>alphaCut
);
parcelHelpers.export(exports, "invAlphaCut", ()=>invAlphaCut
);
parcelHelpers.export(exports, "compose", ()=>compose
);
parcelHelpers.export(exports, "intersect", ()=>intersect
);
parcelHelpers.export(exports, "union", ()=>union
);
var _api = require("@thi.ng/math/api");
var _eqdelta = require("@thi.ng/math/eqdelta");
var _fit = require("@thi.ng/math/fit");
var _mix = require("@thi.ng/math/mix");
const constant = (x)=>()=>x
;
const point = (p, eps = _api.EPS)=>(x)=>_eqdelta.eqDelta(x, p, eps) ? 1 : 0
;
const ramp = (a, b)=>(x)=>_fit.fitClamped(x, a, b, 0, 1)
;
const triangle = (a, b, c)=>(x)=>x < a || x > c ? 0 : x <= b ? _fit.fit(x, a, b, 0, 1) : _fit.fit(x, b, c, 1, 0)
;
const trapezoid = (a, b, c, d)=>(x)=>x < a || x > d ? 0 : x > b && x < c ? 1 : x <= b ? _fit.fit(x, a, b, 0, 1) : _fit.fit(x, c, d, 1, 0)
;
const sigmoid = (bias, steep)=>(x)=>_mix.sigmoid(bias, steep, x)
;
const gaussian = (bias, sigma)=>(x)=>_mix.gaussian(bias, sigma, x)
;
const negate = (fn)=>(x)=>1 - fn(x)
;
const invRamp = (a, b)=>negate(ramp(a, b))
;
const invSigmoid = (bias, steep)=>negate(sigmoid(bias, steep))
;
const weighted = (fn, weight)=>(x)=>weight * fn(x)
;
const alphaCut = (fn, alpha = 0.5)=>(x)=>{
        const y = fn(x);
        return y > alpha ? y : 0;
    }
;
const invAlphaCut = (fn, alpha = 0.5)=>(x)=>{
        const y = fn(x);
        return y < alpha ? y : 0;
    }
;
const compose = (op, initial, ...fns)=>{
    const [a, b] = fns;
    switch(fns.length){
        case 0:
            throw new Error("no fuzzy sets given");
        case 1:
            return a;
        case 2:
            return (x)=>op(a(x), b(x))
            ;
        default:
            return (x)=>fns.reduce((acc, f)=>op(acc, f(x))
                , initial)
            ;
    }
};
const intersect = (op, ...fns)=>compose(op, 1, ...fns)
;
const union = (op, ...fns)=>compose(op, 0, ...fns)
;

},{"@thi.ng/math/api":"4a98p","@thi.ng/math/eqdelta":"cmNLt","@thi.ng/math/fit":"8JCov","@thi.ng/math/mix":"cHjhA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4a98p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PI", ()=>PI
);
parcelHelpers.export(exports, "TAU", ()=>TAU
);
parcelHelpers.export(exports, "HALF_PI", ()=>HALF_PI
);
parcelHelpers.export(exports, "THIRD_PI", ()=>THIRD_PI
);
parcelHelpers.export(exports, "QUARTER_PI", ()=>QUARTER_PI
);
parcelHelpers.export(exports, "SIXTH_PI", ()=>SIXTH_PI
);
parcelHelpers.export(exports, "INV_PI", ()=>INV_PI
);
parcelHelpers.export(exports, "INV_TAU", ()=>INV_TAU
);
parcelHelpers.export(exports, "INV_HALF_PI", ()=>INV_HALF_PI
);
parcelHelpers.export(exports, "DEG2RAD", ()=>DEG2RAD
);
parcelHelpers.export(exports, "RAD2DEG", ()=>RAD2DEG
);
parcelHelpers.export(exports, "PHI", ()=>PHI
);
parcelHelpers.export(exports, "SQRT2", ()=>SQRT2
);
parcelHelpers.export(exports, "SQRT3", ()=>SQRT3
);
parcelHelpers.export(exports, "SQRT2_2", ()=>SQRT2_2
);
parcelHelpers.export(exports, "SQRT3_2", ()=>SQRT3_2
);
parcelHelpers.export(exports, "THIRD", ()=>THIRD
);
parcelHelpers.export(exports, "TWO_THIRD", ()=>TWO_THIRD
);
parcelHelpers.export(exports, "SIXTH", ()=>SIXTH
);
parcelHelpers.export(exports, "EPS", ()=>EPS
);
const PI = Math.PI;
const TAU = PI * 2;
const HALF_PI = PI / 2;
const THIRD_PI = PI / 3;
const QUARTER_PI = PI / 4;
const SIXTH_PI = PI / 6;
const INV_PI = 1 / PI;
const INV_TAU = 1 / TAU;
const INV_HALF_PI = 1 / HALF_PI;
const DEG2RAD = PI / 180;
const RAD2DEG = 180 / PI;
const PHI = (1 + Math.sqrt(5)) / 2;
const SQRT2 = Math.SQRT2;
const SQRT3 = Math.sqrt(3);
const SQRT2_2 = SQRT2 / 2;
const SQRT3_2 = SQRT3 / 2;
const THIRD = 1 / 3;
const TWO_THIRD = 2 / 3;
const SIXTH = 1 / 6;
let EPS = 0.000001;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmNLt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eqDelta", ()=>eqDelta
);
parcelHelpers.export(exports, "eqDeltaScaled", ()=>eqDeltaScaled
);
var _apiJs = require("./api.js");
const abs = Math.abs;
const max = Math.max;
const eqDelta = (a, b, eps = _apiJs.EPS)=>abs(a - b) <= eps
;
const eqDeltaScaled = (a, b, eps = _apiJs.EPS)=>abs(a - b) <= eps * max(1, abs(a), abs(b))
;

},{"./api.js":"4a98p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JCov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "norm", ()=>norm
);
parcelHelpers.export(exports, "fit", ()=>fit
);
parcelHelpers.export(exports, "fitClamped", ()=>fitClamped
);
parcelHelpers.export(exports, "fit01", ()=>fit01
);
parcelHelpers.export(exports, "fit10", ()=>fit10
);
parcelHelpers.export(exports, "fit11", ()=>fit11
);
var _intervalJs = require("./interval.js");
const norm = (x, a, b)=>b !== a ? (x - a) / (b - a) : 0
;
const fit = (x, a, b, c, d)=>c + (d - c) * norm(x, a, b)
;
const fitClamped = (x, a, b, c, d)=>c + (d - c) * _intervalJs.clamp01(norm(x, a, b))
;
const fit01 = (x, a, b)=>a + (b - a) * _intervalJs.clamp01(x)
;
const fit10 = (x, a, b)=>b + (a - b) * _intervalJs.clamp01(x)
;
const fit11 = (x, a, b)=>a + (b - a) * (0.5 + 0.5 * _intervalJs.clamp11(x))
;

},{"./interval.js":"1TDWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TDWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "clamp0", ()=>clamp0
);
parcelHelpers.export(exports, "clamp01", ()=>clamp01
);
parcelHelpers.export(exports, "clamp11", ()=>clamp11
);
parcelHelpers.export(exports, "clamp05", ()=>clamp05
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
parcelHelpers.export(exports, "wrapOnce", ()=>wrapOnce
);
parcelHelpers.export(exports, "wrap01", ()=>wrap01
);
parcelHelpers.export(exports, "wrap11", ()=>wrap11
);
parcelHelpers.export(exports, "min2id", ()=>min2id
);
parcelHelpers.export(exports, "min3id", ()=>min3id
);
parcelHelpers.export(exports, "min4id", ()=>min4id
);
parcelHelpers.export(exports, "max2id", ()=>max2id
);
parcelHelpers.export(exports, "max3id", ()=>max3id
);
parcelHelpers.export(exports, "max4id", ()=>max4id
);
parcelHelpers.export(exports, "minNonZero2", ()=>minNonZero2
);
parcelHelpers.export(exports, "minNonZero3", ()=>minNonZero3
);
parcelHelpers.export(exports, "smin", ()=>smin
);
parcelHelpers.export(exports, "smax", ()=>smax
);
parcelHelpers.export(exports, "sclamp", ()=>sclamp
);
parcelHelpers.export(exports, "absMin", ()=>absMin
);
parcelHelpers.export(exports, "absMax", ()=>absMax
);
parcelHelpers.export(exports, "foldback", ()=>foldback
);
parcelHelpers.export(exports, "inRange", ()=>inRange
);
parcelHelpers.export(exports, "inOpenRange", ()=>inOpenRange
);
const clamp = (x, min, max)=>x < min ? min : x > max ? max : x
;
const clamp0 = (x)=>x > 0 ? x : 0
;
const clamp01 = (x)=>x < 0 ? 0 : x > 1 ? 1 : x
;
const clamp11 = (x)=>x < -1 ? -1 : x > 1 ? 1 : x
;
const clamp05 = (x)=>x < 0 ? 0 : x > 0.5 ? 0.5 : x
;
const wrap = (x, min, max)=>{
    if (min === max) return min;
    if (x > max) {
        const d = max - min;
        x -= d;
        if (x > max) x -= d * ((x - min) / d | 0);
    } else if (x < min) {
        const d = max - min;
        x += d;
        if (x < min) x += d * ((min - x) / d + 1 | 0);
    }
    return x;
};
const wrapOnce = (x, min, max)=>x < min ? x - min + max : x > max ? x - max + min : x
;
const wrap01 = (x)=>x < 0 ? x + 1 : x > 1 ? x - 1 : x
;
const wrap11 = (x)=>x < -1 ? x + 2 : x > 1 ? x - 2 : x
;
const min2id = (a, b)=>a <= b ? 0 : 1
;
const min3id = (a, b, c)=>a <= b ? a <= c ? 0 : 2 : b <= c ? 1 : 2
;
const min4id = (a, b, c, d)=>a <= b ? a <= c ? a <= d ? 0 : 3 : c <= d ? 2 : 3 : b <= c ? b <= d ? 1 : 3 : c <= d ? 2 : 3
;
const max2id = (a, b)=>a >= b ? 0 : 1
;
const max3id = (a, b, c)=>a >= b ? a >= c ? 0 : 2 : b >= c ? 1 : 2
;
const max4id = (a, b, c, d)=>a >= b ? a >= c ? a >= d ? 0 : 3 : c >= d ? 2 : 3 : b >= c ? b >= d ? 1 : 3 : c >= d ? 2 : 3
;
const minNonZero2 = (a, b)=>a !== 0 ? b !== 0 ? Math.min(a, b) : a : b
;
const minNonZero3 = (a, b, c)=>minNonZero2(minNonZero2(a, b), c)
;
const smin = (a, b, k)=>smax(a, b, -k)
;
const smax = (a, b, k)=>{
    const ea = Math.exp(a * k);
    const eb = Math.exp(b * k);
    return (a * ea + b * eb) / (ea + eb);
};
const sclamp = (x, min, max, k)=>smin(smax(x, min, k), max, k)
;
const absMin = (a, b)=>Math.abs(a) < Math.abs(b) ? a : b
;
const absMax = (a, b)=>Math.abs(a) > Math.abs(b) ? a : b
;
const foldback = (e, x)=>x < -e || x > e ? Math.abs(Math.abs((x - e) % (4 * e)) - 2 * e) - e : x
;
const inRange = (x, min, max)=>x >= min && x <= max
;
const inOpenRange = (x, min, max)=>x > min && x < max
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHjhA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix
);
parcelHelpers.export(exports, "mixBilinear", ()=>mixBilinear
);
parcelHelpers.export(exports, "mixQuadratic", ()=>mixQuadratic
);
parcelHelpers.export(exports, "mixCubic", ()=>mixCubic
);
parcelHelpers.export(exports, "mixHermite", ()=>mixHermite
);
parcelHelpers.export(exports, "mixCubicHermite", ()=>mixCubicHermite
);
parcelHelpers.export(exports, "mixCubicHermiteFromPoints", ()=>mixCubicHermiteFromPoints
);
parcelHelpers.export(exports, "mixBicubic", ()=>mixBicubic
);
parcelHelpers.export(exports, "tangentCardinal", ()=>tangentCardinal
);
parcelHelpers.export(exports, "tangentDiff3", ()=>tangentDiff3
);
parcelHelpers.export(exports, "tween", ()=>tween
);
parcelHelpers.export(exports, "circular", ()=>circular
);
parcelHelpers.export(exports, "invCircular", ()=>invCircular
);
parcelHelpers.export(exports, "lens", ()=>lens
);
parcelHelpers.export(exports, "cosine", ()=>cosine
);
parcelHelpers.export(exports, "decimated", ()=>decimated
);
parcelHelpers.export(exports, "bounce", ()=>bounce
);
parcelHelpers.export(exports, "ease", ()=>ease
);
parcelHelpers.export(exports, "impulse", ()=>impulse
);
parcelHelpers.export(exports, "gain", ()=>gain
);
parcelHelpers.export(exports, "parabola", ()=>parabola
);
parcelHelpers.export(exports, "cubicPulse", ()=>cubicPulse
);
parcelHelpers.export(exports, "sinc", ()=>sinc
);
parcelHelpers.export(exports, "sincNormalized", ()=>sincNormalized
);
parcelHelpers.export(exports, "lanczos", ()=>lanczos
);
parcelHelpers.export(exports, "sigmoid", ()=>sigmoid
);
parcelHelpers.export(exports, "sigmoid01", ()=>sigmoid01
);
parcelHelpers.export(exports, "sigmoid11", ()=>sigmoid11
);
parcelHelpers.export(exports, "schlick", ()=>schlick
);
parcelHelpers.export(exports, "expFactor", ()=>expFactor
);
parcelHelpers.export(exports, "gaussian", ()=>gaussian
);
var _apiJs = require("./api.js");
const mix = (a, b, t)=>a + (b - a) * t
;
const mixBilinear = (a, b, c, d, u, v)=>{
    const iu = 1 - u;
    const iv = 1 - v;
    return a * iu * iv + b * u * iv + c * iu * v + d * u * v;
};
const mixQuadratic = (a, b, c, t)=>{
    const s = 1 - t;
    return a * s * s + b * 2 * s * t + c * t * t;
};
const mixCubic = (a, b, c, d, t)=>{
    const t2 = t * t;
    const s = 1 - t;
    const s2 = s * s;
    return a * s2 * s + b * 3 * s2 * t + c * 3 * t2 * s + d * t2 * t;
};
const mixHermite = (a, b, c, d, t)=>{
    const y1 = 0.5 * (c - a);
    const y2 = 1.5 * (b - c) + 0.5 * (d - a);
    return ((y2 * t + a - b + y1 - y2) * t + y1) * t + b;
};
const mixCubicHermite = (a, ta, b, tb, t)=>{
    const s = t - 1;
    const t2 = t * t;
    const s2 = s * s;
    const h00 = (1 + 2 * t) * s2;
    const h10 = t * s2;
    const h01 = t2 * (3 - 2 * t);
    const h11 = t2 * s;
    return h00 * a + h10 * ta + h01 * b + h11 * tb;
};
const mixCubicHermiteFromPoints = (a, b, c, d, t)=>{
    d *= 0.5;
    const aa = -0.5 * a + 1.5 * b - 1.5 * c + d;
    const bb = a - 2.5 * b + 2 * c - d;
    const cc = -0.5 * a + 0.5 * c;
    const dd = b;
    const t2 = t * t;
    return t * t2 * aa + t2 * bb + t * cc + dd;
};
const mixBicubic = (s00, s01, s02, s03, s10, s11, s12, s13, s20, s21, s22, s23, s30, s31, s32, s33, u, v)=>mixCubicHermiteFromPoints(mixCubicHermiteFromPoints(s00, s01, s02, s03, u), mixCubicHermiteFromPoints(s10, s11, s12, s13, u), mixCubicHermiteFromPoints(s20, s21, s22, s23, u), mixCubicHermiteFromPoints(s30, s31, s32, s33, u), v)
;
const tangentCardinal = (prev, next, scale = 0.5, ta = 0, tc = 2)=>scale * ((next - prev) / (tc - ta))
;
const tangentDiff3 = (prev, curr, next, ta = 0, tb = 1, tc = 2)=>0.5 * ((next - curr) / (tc - tb) + (curr - prev) / (tb - ta))
;
const tween = (f, from, to)=>(t)=>mix(from, to, f(t))
;
const circular = (t)=>{
    t = 1 - t;
    return Math.sqrt(1 - t * t);
};
const invCircular = (t)=>1 - circular(1 - t)
;
const lens = (pos, strength, t)=>{
    const impl = strength > 0 ? invCircular : circular;
    const tp = 1 - pos;
    const tl = t <= pos ? impl(t / pos) * pos : 1 - impl((1 - t) / tp) * tp;
    return mix(t, tl, Math.abs(strength));
};
const cosine = (t)=>1 - (Math.cos(t * _apiJs.PI) * 0.5 + 0.5)
;
const decimated = (n, t)=>Math.floor(t * n) / n
;
const bounce = (k, amp, t)=>{
    const tk = t * k;
    return 1 - amp * Math.sin(tk) / tk * Math.cos(t * _apiJs.HALF_PI);
};
const ease = (ease1, t)=>Math.pow(t, ease1)
;
const impulse = (k, t)=>{
    const h = k * t;
    return h * Math.exp(1 - h);
};
const gain = (k, t)=>t < 0.5 ? 0.5 * Math.pow(2 * t, k) : 1 - 0.5 * Math.pow(2 - 2 * t, k)
;
const parabola = (k, t)=>Math.pow(4 * t * (1 - t), k)
;
const cubicPulse = (w, c, t)=>{
    t = Math.abs(t - c);
    return t > w ? 0 : (t /= w, 1 - t * t * (3 - 2 * t));
};
const sinc = (t)=>t !== 0 ? Math.sin(t) / t : 1
;
const sincNormalized = (k, t)=>sinc(_apiJs.PI * k * t)
;
const lanczos = (a, t)=>t !== 0 ? -a < t && t < a ? sinc(_apiJs.PI * t) * sinc(_apiJs.PI * t / a) : 0 : 1
;
const sigmoid = (bias, k, t)=>t != bias ? 1 / (1 + Math.exp(-k * (t - bias))) : 0.5
;
const sigmoid01 = (k, t)=>sigmoid(0.5, k, t)
;
const sigmoid11 = (k, t)=>sigmoid(0, k, t)
;
const schlick = (a, b, t)=>t <= b ? b * t / (t + a * (b - t) + _apiJs.EPS) : (1 - b) * (t - 1) / (1 - t - a * (b - t) + _apiJs.EPS) + 1
;
const expFactor = (a, b, num)=>(b / a) ** (1 / num)
;
const gaussian = (bias, sigma, t)=>Math.exp(-((t - bias) ** 2) / (2 * sigma * sigma))
;

},{"./api.js":"4a98p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJZ4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "centroidStrategy", ()=>centroidStrategy
);
var _optsJs = require("./opts.js");
const centroidStrategy = (opts)=>{
    let { samples  } = _optsJs.defaultOpts(opts);
    return (fn, [min, max])=>{
        const delta = (max - min) / samples;
        let num = 0;
        let denom = 0;
        for(let i = 0; i <= samples; i++){
            const x = min + i * delta;
            const y = fn(x);
            num += x * y;
            denom += y;
        }
        return num / denom;
    };
};

},{"./opts.js":"4rhJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rhJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOpts", ()=>defaultOpts
);
const defaultOpts = (opts)=>({
        samples: 100,
        eps: 0.000001,
        ...opts
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ic2eH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tnormMin", ()=>tnormMin
);
parcelHelpers.export(exports, "tnormProduct", ()=>tnormProduct
);
parcelHelpers.export(exports, "tnormLukasiewicz", ()=>tnormLukasiewicz
);
parcelHelpers.export(exports, "tnormDrastic", ()=>tnormDrastic
);
parcelHelpers.export(exports, "tnormNilpotent", ()=>tnormNilpotent
);
parcelHelpers.export(exports, "tnormHamacher", ()=>tnormHamacher
);
parcelHelpers.export(exports, "tnormYager", ()=>tnormYager
);
parcelHelpers.export(exports, "tnormDombi", ()=>tnormDombi
);
parcelHelpers.export(exports, "tnormAczelAlsina", ()=>tnormAczelAlsina
);
parcelHelpers.export(exports, "snormMax", ()=>snormMax
);
parcelHelpers.export(exports, "snormProbabilistic", ()=>snormProbabilistic
);
parcelHelpers.export(exports, "snormBoundedSum", ()=>snormBoundedSum
);
parcelHelpers.export(exports, "snormDrastic", ()=>snormDrastic
);
parcelHelpers.export(exports, "snormNilpotent", ()=>snormNilpotent
);
parcelHelpers.export(exports, "snormEinstein", ()=>snormEinstein
);
parcelHelpers.export(exports, "ordinalSum", ()=>ordinalSum
);
var _fit = require("@thi.ng/math/fit");
var _interval = require("@thi.ng/math/interval");
const tnormMin = (x, y)=>Math.min(x, y)
;
const tnormProduct = (x, y)=>x * y
;
const tnormLukasiewicz = (x, y)=>_interval.clamp0(x + y - 1)
;
const tnormDrastic = (x, y)=>x === 1 ? y : y === 1 ? x : 0
;
const tnormNilpotent = (x, y)=>x + y > 1 ? Math.min(x, y) : 0
;
const tnormHamacher = (p = 2)=>(x, y)=>x === 0 && y === 0 ? 0 : x * y / (p + (1 - p) * (x + y - x * y))
;
const tnormYager = (p = 2)=>p === 0 ? ()=>0
     : (x, y)=>_interval.clamp0(1 - ((1 - x) ** p + (1 - y) ** p) ** (1 / p))
;
const tnormDombi = (p = 2)=>p === 0 ? ()=>0
     : (x, y)=>x === 0 || y === 0 ? 0 : 1 / (1 + (((1 - x) / x) ** p + ((1 - y) / y) ** p) ** (1 / p))
;
const tnormAczelAlsina = (p = 2)=>(x, y)=>Math.exp(-((Math.abs(Math.log(x)) ** p + Math.abs(Math.log(y)) ** p) ** (1 / p)))
;
const snormMax = (x, y)=>Math.max(x, y)
;
const snormProbabilistic = (x, y)=>x + y - x * y
;
const snormBoundedSum = (x, y)=>Math.min(x + y, 1)
;
const snormDrastic = (x, y)=>x === 0 ? y : y === 0 ? x : 1
;
const snormNilpotent = (x, y)=>x + y < 1 ? Math.max(x, y) : 1
;
const snormEinstein = (x, y)=>(x + y) / (1 + x * y)
;
const ordinalSum = (specs)=>(x, y)=>{
        for (let s of specs){
            const [a, b] = s.domain;
            if (x >= a && x <= b && y >= a && y <= b) return a + (b - a) * s.tnorm(_fit.norm(x, a, b), _fit.norm(y, a, b));
        }
        return Math.min(x, y);
    }
;

},{"@thi.ng/math/fit":"8JCov","@thi.ng/math/interval":"1TDWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5e598":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rule", ()=>rule
);
parcelHelpers.export(exports, "and", ()=>and
);
parcelHelpers.export(exports, "strongAnd", ()=>strongAnd
);
parcelHelpers.export(exports, "or", ()=>or
);
var _tnormsJs = require("./tnorms.js");
const rule = (op, $if, then, weight = 1)=>({
        if: $if,
        then,
        op,
        weight
    })
;
const and = ($if, then, weight)=>rule(_tnormsJs.tnormMin, $if, then, weight)
;
const strongAnd = ($if, then, weight)=>rule(_tnormsJs.tnormProduct, $if, then, weight)
;
const or = ($if, then, weight)=>rule(_tnormsJs.snormMax, $if, then, weight)
;

},{"./tnorms.js":"ic2eH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"diu3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "variable", ()=>variable
);
parcelHelpers.export(exports, "classify", ()=>classify
);
parcelHelpers.export(exports, "evaluate", ()=>evaluate
);
const variable = (domain, terms)=>({
        domain,
        terms
    })
;
const classify = ({ terms  }, x, threshold = 0.5)=>{
    let max = threshold;
    let maxID;
    for(let id in terms){
        const t = terms[id](x);
        if (t >= max) {
            max = t;
            maxID = id;
        }
    }
    return maxID;
};
const evaluate = ({ terms  }, x)=>{
    const res = {};
    for(let id in terms)res[id] = terms[id](x);
    return res;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxVa3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectorStrategy", ()=>bisectorStrategy
);
var _fit = require("@thi.ng/math/fit");
var _optsJs = require("./opts.js");
const bisectorStrategy = (opts)=>{
    let { samples  } = _optsJs.defaultOpts(opts);
    return (fn, [min, max])=>{
        const delta = (max - min) / samples;
        let sum = [];
        for(let i = 0, acc = 0; i <= samples; i++){
            acc += fn(min + i * delta);
            sum.push(acc);
        }
        if (!sum.length) return min;
        const mean = sum[samples] * 0.5;
        for(let i1 = 1; i1 <= samples; i1++){
            if (sum[i1] >= mean) return _fit.fit(mean, sum[i1 - 1], sum[i1], min + (i1 - 1) * delta, min + i1 * delta);
        }
        return min;
    };
};

},{"@thi.ng/math/fit":"8JCov","./opts.js":"4rhJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10fWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "meanOfMaximaStrategy", ()=>meanOfMaximaStrategy
);
parcelHelpers.export(exports, "firstOfMaximaStrategy", ()=>firstOfMaximaStrategy
);
parcelHelpers.export(exports, "lastOfMaximaStrategy", ()=>lastOfMaximaStrategy
);
var _eqdelta = require("@thi.ng/math/eqdelta");
var _optsJs = require("./opts.js");
const meanOfMaximaStrategy = (opts)=>{
    const { samples , eps  } = _optsJs.defaultOpts(opts);
    return (fn, [min, max])=>{
        const delta = (max - min) / samples;
        let peak = -Infinity;
        let peakPos = min;
        let n = 1;
        for(let i = 0; i <= samples; i++){
            const t = min + i * delta;
            const x = fn(t);
            if (_eqdelta.eqDelta(x, peak, eps)) {
                peakPos += t;
                n++;
            } else if (x > peak) {
                peak = x;
                peakPos = t;
                n = 1;
            }
        }
        return peakPos / n;
    };
};
const firstOfMaximaStrategy = (opts)=>{
    const { samples  } = _optsJs.defaultOpts(opts);
    return (fn, [min, max])=>{
        const delta = (max - min) / samples;
        let peak = -Infinity;
        let peakPos = min;
        for(let i = 0; i <= samples; i++){
            const t = min + i * delta;
            const x = fn(t);
            if (x > peak) {
                peak = x;
                peakPos = t;
            }
        }
        return peakPos;
    };
};
const lastOfMaximaStrategy = (opts)=>{
    const impl = firstOfMaximaStrategy(opts);
    return (fn, [min, max])=>impl(fn, [
            max,
            min
        ])
    ;
};

},{"@thi.ng/math/eqdelta":"cmNLt","./opts.js":"4rhJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gh5C1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _strategyJs = require("./strategy.js");
parcelHelpers.exportAll(_strategyJs, exports);
var _varJs = require("./var.js");
parcelHelpers.exportAll(_varJs, exports);

},{"./strategy.js":"guRsp","./var.js":"lsaX0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guRsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instrumentStrategy", ()=>instrumentStrategy
);
parcelHelpers.export(exports, "fuzzySetToHiccup", ()=>fuzzySetToHiccup
);
parcelHelpers.export(exports, "fuzzySetToSvg", ()=>fuzzySetToSvg
);
parcelHelpers.export(exports, "fuzzySetToAscii", ()=>fuzzySetToAscii
);
var _var = require("@thi.ng/fuzzy/var");
var _convert = require("@thi.ng/hiccup-svg/convert");
var _serialize = require("@thi.ng/hiccup/serialize");
var _fit = require("@thi.ng/math/fit");
var _repeat = require("@thi.ng/strings/repeat");
var _bars = require("@thi.ng/text-canvas/bars");
var _varJs = require("./var.js");
const instrumentStrategy = (strategy, instrument)=>{
    const acc = [];
    const impl = (fn, domain)=>{
        const res = strategy(fn, domain);
        acc.push(instrument(fn, domain, res));
        return res;
    };
    impl.clear = ()=>acc.length = 0
    ;
    impl.deref = ()=>acc
    ;
    return impl;
};
const fuzzySetToHiccup = (opts)=>(fn, domain, res)=>{
        const tree = _varJs.varToHiccup(_var.variable(domain, {
            main: fn
        }), {
            labels: false,
            stroke: ()=>"#333"
            ,
            fill: ()=>"#999"
            ,
            ...opts
        });
        const { width , height  } = tree[1];
        const x = _fit.fit(res, domain[0], domain[1], 0, width);
        tree.push([
            "g",
            {
                translate: [
                    x,
                    0
                ]
            },
            [
                "line",
                {
                    stroke: "red"
                },
                [
                    0,
                    0
                ],
                [
                    0,
                    height - 12
                ]
            ],
            [
                "text",
                {
                    align: "center",
                    fill: "red"
                },
                [
                    0,
                    height - 2
                ],
                res.toFixed(2), 
            ], 
        ]);
        return tree;
    }
;
const fuzzySetToSvg = (opts)=>(fn, domain, res)=>_serialize.serialize(_convert.convertTree(fuzzySetToHiccup(opts)(fn, domain, res)))
;
const fuzzySetToAscii = (opts)=>(fn, domain, res)=>{
        const { width , height , empty  } = {
            width: 100,
            height: 16,
            empty: ".",
            ...opts
        };
        const [min, max] = domain;
        const delta = (max - min) / width;
        const vals = [];
        for(let i = min; i <= max; i += delta)vals.push(fn(i));
        const index = Math.round(_fit.fit(res, min, max, 0, vals.length));
        let chart = _bars.barChartHLines(height, vals, 0, 1).map((line)=>line.substring(0, index) + "|" + line.substring(index + 1)
        ).join("\n").replace(/ /g, empty);
        const legend = _repeat.repeat(" ", index) + "^ " + res.toFixed(2);
        return chart + "\n" + legend;
    }
;

},{"@thi.ng/fuzzy/var":"diu3T","@thi.ng/hiccup-svg/convert":"4tYbL","@thi.ng/hiccup/serialize":"aU5ZC","@thi.ng/math/fit":"8JCov","@thi.ng/strings/repeat":"jrSWh","@thi.ng/text-canvas/bars":"aK2w1","./var.js":"lsaX0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tYbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertTree", ()=>convertTree
);
var _implementsFunction = require("@thi.ng/checks/implements-function");
var _isArray = require("@thi.ng/checks/is-array");
var _circleJs = require("./circle.js");
var _ellipseJs = require("./ellipse.js");
var _formatJs = require("./format.js");
var _gradientsJs = require("./gradients.js");
var _imageJs = require("./image.js");
var _lineJs = require("./line.js");
var _pathJs = require("./path.js");
var _pointsJs = require("./points.js");
var _polygonJs = require("./polygon.js");
var _polylineJs = require("./polyline.js");
var _rectJs = require("./rect.js");
var _textJs = require("./text.js");
const ATTRIB_ALIASES = {
    alpha: "opacity",
    dash: "stroke-dasharray",
    dashOffset: "stroke-dashoffset",
    lineCap: "stroke-linecap",
    lineJoin: "stroke-linejoin",
    miterLimit: "stroke-miterlimit",
    weight: "stroke-width"
};
const TEXT_ALIGN = {
    left: "start",
    right: "end",
    center: "middle",
    start: "start",
    end: "end"
};
const BASE_LINE = {
    top: "text-top",
    bottom: "text-bottom"
};
const convertTree = (tree)=>{
    if (tree == null) return null;
    if (_implementsFunction.implementsFunction(tree, "toHiccup")) return convertTree(tree.toHiccup());
    const type = tree[0];
    if (_isArray.isArray(type)) return tree.map(convertTree);
    let attribs = convertAttribs(tree[1]);
    switch(tree[0]){
        case "svg":
        case "defs":
        case "a":
        case "g":
            {
                const res = [
                    type,
                    _formatJs.fattribs(attribs)
                ];
                for(let i = 2, n = tree.length; i < n; i++){
                    const c = convertTree(tree[i]);
                    c != null && res.push(c);
                }
                return res;
            }
        case "linearGradient":
            return _gradientsJs.linearGradient(attribs.id, attribs.from, attribs.to, tree[2], {
                gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
                gradientTransform: attribs.gradientTransform
            });
        case "radialGradient":
            return _gradientsJs.radialGradient(attribs.id, attribs.from, attribs.to, attribs.r1, attribs.r2, tree[2], {
                gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
                gradientTransform: attribs.gradientTransform
            });
        case "circle":
            return _circleJs.circle(tree[2], tree[3], attribs, ...tree.slice(4));
        case "ellipse":
            return _ellipseJs.ellipse(tree[2], tree[3][0], tree[3][1], attribs, ...tree.slice(4));
        case "rect":
            {
                const r = tree[5] || 0;
                return _rectJs.roundedRect(tree[2], tree[3], tree[4], r, r, attribs, ...tree.slice(6));
            }
        case "line":
            return _lineJs.line(tree[2], tree[3], attribs, ...tree.slice(4));
        case "hline":
            return _lineJs.hline(tree[2], attribs);
        case "vline":
            return _lineJs.vline(tree[2], attribs);
        case "polyline":
            return _polylineJs.polyline(tree[2], attribs, ...tree.slice(3));
        case "polygon":
            return _polygonJs.polygon(tree[2], attribs, ...tree.slice(3));
        case "path":
            return _pathJs.path(tree[2], attribs, ...tree.slice(3));
        case "text":
            return _textJs.text(tree[2], tree[3], attribs, ...tree.slice(4));
        case "img":
            return _imageJs.image(tree[3], tree[2].src, attribs, ...tree.slice(4));
        case "points":
            return _pointsJs.points(tree[2], attribs.shape, attribs.size, attribs, ...tree.slice(3));
        case "packedPoints":
            return _pointsJs.packedPoints(tree[2], attribs.shape, attribs.size, attribs, ...tree.slice(3));
        default:
            return tree;
    }
};
const convertAttribs = (attribs)=>{
    const res = {};
    if (!attribs) return res;
    // convertTransforms(res, attribs);
    for(let id in attribs){
        const v = attribs[id];
        const aid = ATTRIB_ALIASES[id];
        if (aid) res[aid] = v;
        else convertAttrib(res, id, v);
    }
    return res;
};
const convertAttrib = (res, id, v)=>{
    switch(id){
        case "font":
            {
                const i = v.indexOf(" ");
                res["font-size"] = v.substring(0, i);
                res["font-family"] = v.substring(i + 1);
                break;
            }
        case "align":
            res["text-anchor"] = TEXT_ALIGN[v];
            break;
        case "baseline":
            res["dominant-baseline"] = BASE_LINE[v] || v;
            break;
        // case "filter":
        // TODO needs to be translated into <filter> def first
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
        // break;
        default:
            res[id] = v;
    }
};

},{"@thi.ng/checks/implements-function":"cjrzK","@thi.ng/checks/is-array":"cOR5q","./circle.js":"2KCyg","./ellipse.js":"3CRD4","./format.js":"2MpCW","./gradients.js":"inrTO","./image.js":"1nw8e","./line.js":"a3AZB","./path.js":"b6rbe","./points.js":"dHAvc","./polygon.js":"kl70r","./polyline.js":"bbCqQ","./rect.js":"19TXk","./text.js":"1PJMQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cjrzK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implementsFunction", ()=>implementsFunction
);
const implementsFunction = (x, fn)=>x != null && typeof x[fn] === "function"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOR5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
const isArray = Array.isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KCyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circle", ()=>circle
);
var _formatJs = require("./format.js");
const circle = (p, r, attribs, ...body)=>[
        "circle",
        _formatJs.fattribs({
            ...attribs,
            cx: _formatJs.ff(p[0]),
            cy: _formatJs.ff(p[1]),
            r: _formatJs.ff(r)
        }),
        ...body, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MpCW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPrecision", ()=>setPrecision
);
parcelHelpers.export(exports, "ff", ()=>ff
);
parcelHelpers.export(exports, "fpoint", ()=>fpoint
);
parcelHelpers.export(exports, "fpoints", ()=>fpoints
);
parcelHelpers.export(exports, "fattribs", ()=>fattribs
);
parcelHelpers.export(exports, "fcolor", ()=>fcolor
);
parcelHelpers.export(exports, "withoutKeys", ()=>withoutKeys
);
var _isArraylike = require("@thi.ng/checks/is-arraylike");
var _isString = require("@thi.ng/checks/is-string");
var _css = require("@thi.ng/color/css/css");
let PRECISION = 2;
const setPrecision = (n)=>PRECISION = n
;
const ff = (x)=>x === (x | 0) ? x : x.toFixed(PRECISION)
;
const fpoint = (p)=>ff(p[0]) + "," + ff(p[1])
;
const fpoints = (pts, sep = " ")=>pts ? pts.map(fpoint).join(sep) : ""
;
const DEFAULT_NUMERIC_IDS = [
    "font-size",
    "opacity",
    "stroke-width",
    "stroke-miterlimit", 
];
/**
 * Takes an attributes object and a number of attrib IDs whose values should be
 * formatted using {@link ff}. Mutates and returns `attribs` object.
 *
 * @param attribs -
 * @param ids -
 *
 * @internal
 */ const numericAttribs = (attribs, ids)=>{
    let v;
    for (let id of DEFAULT_NUMERIC_IDS.concat(ids))typeof (v = attribs[id]) === "number" && (attribs[id] = ff(v));
    return attribs;
};
const fattribs = (attribs, ...numericIDs)=>{
    if (!attribs) return;
    const res = ftransforms(attribs);
    let v;
    (v = attribs.fill) && (res.fill = fcolor(v));
    (v = attribs.stroke) && (res.stroke = fcolor(v));
    return numericAttribs(attribs, numericIDs);
};
/**
 * Converts any transformation related attribs.
 *
 * {@link fattribs}
 *
 * @param attribs - attributes object
 *
 * @internal
 */ const ftransforms = (attribs)=>{
    let v;
    if ((v = attribs.transform) || attribs.translate || attribs.scale || attribs.rotate) {
        if (v) {
            attribs.transform = !_isString.isString(v) ? `matrix(${[
                ...v
            ].map(ff).join(" ")})` : v;
            delete attribs.translate;
            delete attribs.rotate;
            delete attribs.scale;
        } else attribs.transform = buildTransform(attribs);
    }
    return attribs;
};
/**
 * @internal
 */ const buildTransform = (attribs)=>{
    const tx = [];
    let v;
    if (v = attribs.translate) {
        tx.push(_isString.isString(v) ? v : `translate(${ff(v[0])} ${ff(v[1])})`);
        delete attribs.translate;
    }
    if (v = attribs.rotate) {
        tx.push(_isString.isString(v) ? v : `rotate(${ff(v * 180 / Math.PI)})`);
        delete attribs.rotate;
    }
    if (v = attribs.scale) {
        tx.push(_isString.isString(v) ? v : _isArraylike.isArrayLike(v) ? `scale(${ff(v[0])} ${ff(v[1])})` : `scale(${ff(v)})`);
        delete attribs.scale;
    }
    return tx.join(" ");
};
const fcolor = (col)=>_isString.isString(col) ? col[0] === "$" ? `url(#${col.substring(1)})` : col : _css.css(col)
;
const withoutKeys = (src, keys)=>{
    const dest = {};
    for(let k in src)src.hasOwnProperty(k) && !keys.has(k) && (dest[k] = src[k]);
    return dest;
};

},{"@thi.ng/checks/is-arraylike":"8nYo2","@thi.ng/checks/is-string":"1uZe6","@thi.ng/color/css/css":"lbZ2A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nYo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike
);
const isArrayLike = (x)=>x != null && typeof x !== "function" && x.length !== undefined
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uZe6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString
);
const isString = (x)=>typeof x === "string"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbZ2A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css
);
var _isNumber = require("@thi.ng/checks/is-number");
var _isString = require("@thi.ng/checks/is-string");
var _convertJs = require("../convert.js");
var _hslCssJs = require("../hsl/hsl-css.js");
var _hsvCssJs = require("../hsv/hsv-css.js");
var _intCssJs = require("../int/int-css.js");
var _intIntJs = require("../int/int-int.js");
var _labLchJs = require("../lab/lab-lch.js");
var _labRgbJs = require("../lab/lab-rgb.js");
var _rgbCssJs = require("../rgb/rgb-css.js");
var _rgbSrgbJs = require("../rgb/rgb-srgb.js");
var _srgbCssJs = require("../srgb/srgb-css.js");
/** @internal */ const CSS_CONVERSIONS = {
    abgr32: (x)=>_intCssJs.intArgb32Css(_intIntJs.intAbgr32Argb32(x[0]))
    ,
    argb32: (x)=>_intCssJs.intArgb32Css(x[0])
    ,
    hsl: _hslCssJs.hslCss,
    hsv: _hsvCssJs.hsvCss,
    // TODO temporarily disabled until CSS L4 is officially supported in browsers
    // currently serializing as sRGB CSS
    // lab50: labCss,
    // lab65: (x) => labCss(labLabD65_50([], x)),
    // lch: lchCss,
    lab50: (src)=>_srgbCssJs.srgbCss(_rgbSrgbJs.rgbSrgb(null, _labRgbJs.labRgb([], src)))
    ,
    lab65: (src)=>_srgbCssJs.srgbCss(_rgbSrgbJs.rgbSrgb(null, _labRgbJs.labRgbD65([], src)))
    ,
    lch: (src)=>_srgbCssJs.srgbCss(_rgbSrgbJs.rgbSrgb(null, _labRgbJs.labRgb(null, _labLchJs.lchLab([], src))))
    ,
    rgb: _rgbCssJs.rgbCss,
    srgb: _srgbCssJs.srgbCss
};
const css = (src)=>{
    let asCss;
    return _isString.isString(src) ? src : _isNumber.isNumber(src) ? _intCssJs.intArgb32Css(src) : src.mode ? (asCss = CSS_CONVERSIONS[src.mode]) ? asCss(src) : CSS_CONVERSIONS.rgb(_convertJs.convert([], src, "rgb", src.mode)) : _srgbCssJs.srgbCss(src);
};

},{"@thi.ng/checks/is-number":"hNf8P","@thi.ng/checks/is-string":"1uZe6","../convert.js":"fhgPB","../hsl/hsl-css.js":"6K8Al","../hsv/hsv-css.js":"12iu8","../int/int-css.js":"lrDpL","../int/int-int.js":"cnENi","../lab/lab-lch.js":"i1piX","../lab/lab-rgb.js":"3RVY8","../rgb/rgb-css.js":"9Selw","../rgb/rgb-srgb.js":"12R05","../srgb/srgb-css.js":"bLmEC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNf8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>isNumber
);
const isNumber = (x)=>typeof x === "number"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fhgPB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONVERSIONS", ()=>CONVERSIONS
);
parcelHelpers.export(exports, "defConversions", ()=>defConversions
);
parcelHelpers.export(exports, "convert", ()=>convert
);
var _isArray = require("@thi.ng/checks/is-array");
var _assert = require("@thi.ng/errors/assert");
var _unsupported = require("@thi.ng/errors/unsupported");
const CONVERSIONS = {};
const defConversions = (mode, spec)=>{
    for(let id in spec){
        const val = spec[id];
        if (_isArray.isArray(val)) {
            const [a, b, c, d] = val;
            spec[id] = val.length === 2 ? (out, src)=>b(out, a(out, src))
             : val.length === 3 ? (out, src)=>c(out, b(out, a(out, src)))
             : (out, src)=>d(out, c(out, b(out, a(out, src))))
            ;
        }
    }
    CONVERSIONS[mode] = {
        ...CONVERSIONS[mode],
        ...spec
    };
};
const convert = (res, src, destMode, srcMode)=>{
    const spec = CONVERSIONS[destMode];
    _assert.assert(!!spec, `no conversions available for ${destMode}`);
    let $convert = spec[srcMode];
    return $convert ? $convert(res, src) : CONVERSIONS.rgb[srcMode] ? spec.rgb(res, CONVERSIONS.rgb[srcMode]([], src)) : _unsupported.unsupported(`can't convert: ${srcMode} -> ${destMode}`);
};

},{"@thi.ng/checks/is-array":"cOR5q","@thi.ng/errors/assert":"zM8kA","@thi.ng/errors/unsupported":"dDHMM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zM8kA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AssertionError", ()=>AssertionError
);
parcelHelpers.export(exports, "assert", ()=>assert
);
var _deferrorJs = require("./deferror.js");
var process = require("process");
const AssertionError = _deferrorJs.defError(()=>"Assertion failed"
);
const assert = (()=>typeof process !== "undefined" && typeof process.env !== "undefined" ? true : typeof __SNOWPACK_ENV__ !== "undefined" ? __SNOWPACK_ENV__.MODE !== "production" || !!__SNOWPACK_ENV__.UMBRELLA_ASSERTS || !!__SNOWPACK_ENV__.SNOWPACK_PUBLIC_UMBRELLA_ASSERTS : true
)() ? (test, msg)=>{
    if (typeof test === "function" && !test() || !test) throw new AssertionError(typeof msg === "function" ? msg() : msg);
} : ()=>{};

},{"./deferror.js":"l9nQt","process":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9nQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defError", ()=>defError
);
const defError = (prefix, suffix = (msg)=>msg !== undefined ? ": " + msg : ""
)=>class extends Error {
        constructor(msg){
            super(prefix(msg) + suffix(msg));
        }
    }
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"dDHMM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsupportedOperationError", ()=>UnsupportedOperationError
);
parcelHelpers.export(exports, "unsupported", ()=>unsupported
);
var _deferrorJs = require("./deferror.js");
const UnsupportedOperationError = _deferrorJs.defError(()=>"unsupported operation"
);
const unsupported = (msg)=>{
    throw new UnsupportedOperationError(msg);
};

},{"./deferror.js":"l9nQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6K8Al":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslCss", ()=>hslCss
);
var _interval = require("@thi.ng/math/interval");
var _prec = require("@thi.ng/math/prec");
var _constantsJs = require("../api/constants.js");
var _ensureJs = require("../internal/ensure.js");
const hslCss = (src)=>{
    const h = _constantsJs.FF(_prec.fract(src[0]) * 360);
    const s = _constantsJs.PC(_interval.clamp01(src[1]));
    const l = _constantsJs.PC(_interval.clamp01(src[2]));
    const a = _ensureJs.__ensureAlpha(src[3]);
    // TODO update to new syntax once CSS Color L4 is more widely supported
    // https://www.w3.org/TR/css-color-4/#serializing-lab-lch
    // https://test.csswg.org/harness/results/css-color-4_dev/grouped/ (test reports)
    // return `hsl(${h} ${s} ${l}` + (a < 1 ? `/${FF(a)})` : ")");
    return a < 1 ? `hsla(${h},${s},${l},${_constantsJs.FF(a)})` : `hsl(${h},${s},${l})`;
};

},{"@thi.ng/math/interval":"1TDWA","@thi.ng/math/prec":"7e7rg","../api/constants.js":"atfY9","../internal/ensure.js":"4sVaN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7e7rg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mod", ()=>mod
);
parcelHelpers.export(exports, "fract", ()=>fract
);
parcelHelpers.export(exports, "trunc", ()=>trunc
);
parcelHelpers.export(exports, "roundTo", ()=>roundTo
);
parcelHelpers.export(exports, "floorTo", ()=>floorTo
);
parcelHelpers.export(exports, "ceilTo", ()=>ceilTo
);
parcelHelpers.export(exports, "roundEps", ()=>roundEps
);
var _apiJs = require("./api.js");
const mod = (a, b)=>a - b * Math.floor(a / b)
;
const fract = (x)=>x - Math.floor(x)
;
const trunc = (x)=>x < 0 ? Math.ceil(x) : Math.floor(x)
;
const roundTo = (x, prec = 1)=>Math.round(x / prec) * prec
;
const floorTo = (x, prec = 1)=>Math.floor(x / prec) * prec
;
const ceilTo = (x, prec = 1)=>Math.ceil(x / prec) * prec
;
const roundEps = (x, eps = _apiJs.EPS)=>{
    const f = fract(x);
    return f <= eps || f >= 1 - eps ? Math.round(x) : x;
};

},{"./api.js":"4a98p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atfY9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BLACK", ()=>BLACK
);
parcelHelpers.export(exports, "WHITE", ()=>WHITE
);
parcelHelpers.export(exports, "RED", ()=>RED
);
parcelHelpers.export(exports, "GREEN", ()=>GREEN
);
parcelHelpers.export(exports, "BLUE", ()=>BLUE
);
parcelHelpers.export(exports, "CYAN", ()=>CYAN
);
parcelHelpers.export(exports, "MAGENTA", ()=>MAGENTA
);
parcelHelpers.export(exports, "YELLOW", ()=>YELLOW
);
parcelHelpers.export(exports, "RGB_LUMINANCE_REC601", ()=>RGB_LUMINANCE_REC601
);
parcelHelpers.export(exports, "RGB_LUMINANCE_REC709", ()=>RGB_LUMINANCE_REC709
);
parcelHelpers.export(exports, "RGB_LUMINANCE_REC2020", ()=>RGB_LUMINANCE_REC2020
);
parcelHelpers.export(exports, "RGB_XYZ_D50", ()=>RGB_XYZ_D50
);
parcelHelpers.export(exports, "XYZ_RGB_D50", ()=>XYZ_RGB_D50
);
parcelHelpers.export(exports, "RGB_XYZ_D65", ()=>RGB_XYZ_D65
);
parcelHelpers.export(exports, "XYZ_RGB_D65", ()=>XYZ_RGB_D65
);
parcelHelpers.export(exports, "BRADFORD_D50_D65", ()=>BRADFORD_D50_D65
);
parcelHelpers.export(exports, "BRADFORD_D65_D50", ()=>BRADFORD_D65_D50
);
parcelHelpers.export(exports, "D50", ()=>D50
);
parcelHelpers.export(exports, "D65", ()=>D65
);
parcelHelpers.export(exports, "OKLAB_M1", ()=>OKLAB_M1
);
parcelHelpers.export(exports, "OKLAB_M2", ()=>OKLAB_M2
);
parcelHelpers.export(exports, "FF", ()=>FF
);
parcelHelpers.export(exports, "PC", ()=>PC
);
parcelHelpers.export(exports, "setPrecision", ()=>setPrecision
);
parcelHelpers.export(exports, "INV8BIT", ()=>INV8BIT
);
parcelHelpers.export(exports, "EPS", ()=>EPS
);
var _float = require("@thi.ng/strings/float");
var _percent = require("@thi.ng/strings/percent");
const BLACK = Object.freeze([
    0,
    0,
    0,
    1
]);
const WHITE = Object.freeze([
    1,
    1,
    1,
    1
]);
const RED = Object.freeze([
    1,
    0,
    0,
    1
]);
const GREEN = Object.freeze([
    0,
    1,
    0,
    1
]);
const BLUE = Object.freeze([
    0,
    0,
    1,
    1
]);
const CYAN = Object.freeze([
    0,
    1,
    1,
    1
]);
const MAGENTA = Object.freeze([
    1,
    0,
    1,
    1
]);
const YELLOW = Object.freeze([
    1,
    1,
    0,
    1
]);
const RGB_LUMINANCE_REC601 = [
    0.299,
    0.587,
    0.114
];
const RGB_LUMINANCE_REC709 = [
    0.2126,
    0.7152,
    0.0722
];
const RGB_LUMINANCE_REC2020 = [
    0.2627,
    0.678,
    0.0593
];
const RGB_XYZ_D50 = [
    0.4360747,
    0.2225045,
    0.0139322,
    0.3850649,
    0.7168786,
    0.0971045,
    0.1430804,
    0.0606169,
    0.7141733, 
];
const XYZ_RGB_D50 = [
    3.1338561,
    -0.9787684,
    0.0719453,
    -1.6168667,
    1.9161415,
    -0.2289914,
    -0.4906146,
    0.033454,
    1.4052427, 
];
const RGB_XYZ_D65 = [
    0.4124564,
    0.2126729,
    0.0193339,
    0.3575761,
    0.7151522,
    0.119192,
    0.1804375,
    0.072175,
    0.9503041, 
];
const XYZ_RGB_D65 = [
    3.2404542,
    -0.969266,
    0.0556434,
    -1.5371385,
    1.8760108,
    -0.2040259,
    -0.4985314,
    0.041556,
    1.0572252, 
];
const BRADFORD_D50_D65 = [
    0.9555766,
    -0.0282895,
    0.0122982,
    -0.0230393,
    1.0099416,
    -0.020483,
    0.0631636,
    0.0210077,
    1.3299098, 
];
const BRADFORD_D65_D50 = [
    1.0478112,
    0.0295424,
    -0.0092345,
    0.0228866,
    0.9904844,
    0.0150436,
    -0.050127,
    -0.0170491,
    0.7521316, 
];
const D50 = [
    0.96422,
    1,
    0.82521
];
const D65 = [
    0.95047,
    1,
    1.08883
];
const OKLAB_M1 = [
    0.8189330101,
    0.0329845436,
    0.0482003018,
    0.3618667424,
    0.9293118715,
    0.2643662691,
    -0.1288597137,
    0.0361456387,
    0.633851707, 
];
const OKLAB_M2 = [
    0.2104542553,
    1.9779984951,
    0.0259040371,
    0.793617785,
    -2.428592205,
    0.7827717662,
    -0.0040720468,
    0.4505937099,
    -0.808675766, 
];
let FF = _float.float(3);
let PC = _percent.percent(3);
const setPrecision = (x)=>{
    FF = _float.float(x);
    PC = _percent.percent(x);
};
const INV8BIT = 1 / 255;
const EPS = 1 / 256;

},{"@thi.ng/strings/float":"8t0B1","@thi.ng/strings/percent":"fivDg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8t0B1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "float", ()=>float
);
parcelHelpers.export(exports, "floatFixedWidth", ()=>floatFixedWidth
);
var _memoizej = require("@thi.ng/memoize/memoizej");
var _padLeftJs = require("./pad-left.js");
const float = _memoizej.memoizeJ((prec, special = false)=>special ? (x)=>nanOrInf(x) || x.toFixed(prec)
     : (x)=>x.toFixed(prec)
);
const floatFixedWidth = _memoizej.memoizeJ((width, prec = 3)=>{
    const l = width - prec - 1;
    const pl = Math.pow(10, l);
    const pln = -Math.pow(10, l - 1);
    const pr = Math.pow(10, -(prec - 1));
    const pad = _padLeftJs.padLeft(width);
    return (x)=>{
        const ax = Math.abs(x);
        return pad(nanOrInf(x) || (x === 0 ? "0" : ax < pr || ax >= pl ? exp(x, width) : x.toFixed(prec - (x < pln ? 1 : 0))));
    };
});
const exp = (x, w)=>x.toExponential(Math.max(w - 4 - (Math.log(Math.abs(x)) / Math.LN10 >= 10 ? 2 : 1) - (x < 0 ? 1 : 0), 0))
;
const nanOrInf = (x)=>isNaN(x) ? "NaN" : x === Infinity ? "+∞" : x === -Infinity ? "-∞" : undefined
;

},{"@thi.ng/memoize/memoizej":"kpZq7","./pad-left.js":"jyWQa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpZq7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoizeJ", ()=>memoizeJ
);
function memoizeJ(fn, cache) {
    !cache && (cache = {});
    return (...args)=>{
        const key = JSON.stringify(args);
        if (key !== undefined) return key in cache ? cache[key] : cache[key] = fn.apply(null, args);
        return fn.apply(null, args);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyWQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "padLeft", ()=>padLeft
);
parcelHelpers.export(exports, "Z2", ()=>Z2
);
parcelHelpers.export(exports, "Z3", ()=>Z3
);
parcelHelpers.export(exports, "Z4", ()=>Z4
);
var _memoizej = require("@thi.ng/memoize/memoizej");
var _repeatJs = require("./repeat.js");
const padLeft = _memoizej.memoizeJ((n, ch = " ")=>{
    const buf = _repeatJs.repeat(String(ch), n);
    return (x, len)=>{
        if (x == null) return buf;
        x = x.toString();
        len = len !== undefined ? len : x.length;
        return len < n ? buf.substring(len) + x : x;
    };
});
const Z2 = padLeft(2, "0");
const Z3 = padLeft(3, "0");
const Z4 = padLeft(4, "0");

},{"@thi.ng/memoize/memoizej":"kpZq7","./repeat.js":"jrSWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrSWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
var _memoizej = require("@thi.ng/memoize/memoizej");
const repeat = _memoizej.memoizeJ((ch, n)=>ch.repeat(n)
);

},{"@thi.ng/memoize/memoizej":"kpZq7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fivDg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "percent", ()=>percent
);
const percent = (prec = 0)=>(x)=>(x * 100).toFixed(prec) + "%"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sVaN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__ensureAlpha", ()=>__ensureAlpha
);
parcelHelpers.export(exports, "__ensureArgs", ()=>__ensureArgs
);
var _interval = require("@thi.ng/math/interval");
const __ensureAlpha = (x, def = 1)=>x != undefined ? _interval.clamp01(x) : def
;
const __ensureArgs = (args)=>{
    if (typeof args[0] === "number") switch(args.length){
        case 1:
            return args.push(0, 0, 1), [
                args
            ];
        case 2:
            return args.push(0, 1), [
                args
            ];
        case 3:
            return args.push(1), [
                args
            ];
        default:
            return [
                args
            ];
    }
    return args;
};

},{"@thi.ng/math/interval":"1TDWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12iu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsvCss", ()=>hsvCss
);
var _hslCssJs = require("../hsl/hsl-css.js");
var _hsvHslJs = require("./hsv-hsl.js");
const hsvCss = (src)=>_hslCssJs.hslCss(_hsvHslJs.hsvHsl([], src))
;

},{"../hsl/hsl-css.js":"6K8Al","./hsv-hsl.js":"kJFBf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJFBf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsvHsl", ()=>hsvHsl
);
var _clampJs = require("../clamp.js");
const hsvHsl = (out, src)=>{
    out = _clampJs.clampH(out || src, src);
    const s = out[1];
    const v = out[2];
    const l = (2 - s) * v / 2;
    out[2] = l;
    out[1] = l && l < 1 ? s * v / (l < 0.5 ? l * 2 : 2 - l * 2) : s;
    return out;
};

},{"../clamp.js":"fx53q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fx53q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "clampH", ()=>clampH
);
var _interval = require("@thi.ng/math/interval");
var _prec = require("@thi.ng/math/prec");
var _setc = require("@thi.ng/vectors/setc");
var _ensureJs = require("./internal/ensure.js");
const clamp = (out, src, alpha = 1)=>_setc.setC4(out || src, _interval.clamp01(src[0]), _interval.clamp01(src[1]), _interval.clamp01(src[2]), _ensureJs.__ensureAlpha(src[3], alpha))
;
const clampH = (out, src, alpha = 1)=>_setc.setC4(out || src, _prec.fract(src[0]), _interval.clamp01(src[1]), _interval.clamp01(src[2]), _ensureJs.__ensureAlpha(src[3], alpha))
;

},{"@thi.ng/math/interval":"1TDWA","@thi.ng/math/prec":"7e7rg","@thi.ng/vectors/setc":"jST0o","./internal/ensure.js":"4sVaN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jST0o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setC2", ()=>setC2
);
parcelHelpers.export(exports, "setC3", ()=>setC3
);
parcelHelpers.export(exports, "setC4", ()=>setC4
);
parcelHelpers.export(exports, "setC6", ()=>setC6
);
parcelHelpers.export(exports, "setC", ()=>setC
);
const setC2 = (out, x, y)=>(!out && (out = []), out[0] = x, out[1] = y, out)
;
const setC3 = (out, x, y, z)=>(!out && (out = []), out[0] = x, out[1] = y, out[2] = z, out)
;
const setC4 = (out, x, y, z, w)=>(!out && (out = []), out[0] = x, out[1] = y, out[2] = z, out[3] = w, out)
;
const setC6 = (out, a, b, c, d, e, f)=>(!out && (out = []), out[0] = a, out[1] = b, out[2] = c, out[3] = d, out[4] = e, out[5] = f, out)
;
const setC = (out, ...xs)=>{
    !out && (out = []);
    for(let i = 0, n = xs.length; i < n; i++)out[i] = xs[i];
    return out;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lrDpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intArgb32Css", ()=>intArgb32Css
);
parcelHelpers.export(exports, "intRgb24Css", ()=>intRgb24Css
);
var _radix = require("@thi.ng/strings/radix");
var _constantsJs = require("../api/constants.js");
const intArgb32Css = (src)=>{
    const a = src >>> 24;
    return a < 255 ? `rgba(${src >> 16 & 255},${src >> 8 & 255},${src & 255},${_constantsJs.FF(a * _constantsJs.INV8BIT)})` : `#${_radix.U24(src & 16777215)}`;
};
const intRgb24Css = (src)=>`#${_radix.U24(src & 16777215)}`
;

},{"@thi.ng/strings/radix":"1GSdH","../api/constants.js":"atfY9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GSdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "radix", ()=>radix
);
parcelHelpers.export(exports, "B8", ()=>B8
);
parcelHelpers.export(exports, "B16", ()=>B16
);
parcelHelpers.export(exports, "B32", ()=>B32
);
parcelHelpers.export(exports, "U8", ()=>U8
);
parcelHelpers.export(exports, "U16", ()=>U16
);
parcelHelpers.export(exports, "U24", ()=>U24
);
parcelHelpers.export(exports, "U32", ()=>U32
);
parcelHelpers.export(exports, "U64", ()=>U64
);
var _hex = require("@thi.ng/hex");
var _memoizej = require("@thi.ng/memoize/memoizej");
var _repeatJs = require("./repeat.js");
const radix = _memoizej.memoizeJ((radix1, n, prefix = "")=>{
    const buf = _repeatJs.repeat("0", n);
    return (x)=>{
        x = (x >>> 0).toString(radix1);
        return prefix + (x.length < n ? buf.substring(x.length) + x : x);
    };
});
const B8 = radix(2, 8);
const B16 = radix(2, 16);
const B32 = radix(2, 32);
const U8 = _hex.U8;
const U16 = _hex.U16;
const U24 = _hex.U24;
const U32 = _hex.U32;
const U64 = _hex.U64HL;

},{"@thi.ng/hex":"04fMk","@thi.ng/memoize/memoizej":"kpZq7","./repeat.js":"jrSWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04fMk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HEX", ()=>HEX
);
parcelHelpers.export(exports, "U4", ()=>U4
);
parcelHelpers.export(exports, "U8", ()=>U8
);
parcelHelpers.export(exports, "U8A", ()=>U8A
);
parcelHelpers.export(exports, "U16", ()=>U16
);
parcelHelpers.export(exports, "U16BE", ()=>U16BE
);
parcelHelpers.export(exports, "U16LE", ()=>U16LE
);
parcelHelpers.export(exports, "U24", ()=>U24
);
parcelHelpers.export(exports, "U24BE", ()=>U24BE
);
parcelHelpers.export(exports, "U24LE", ()=>U24LE
);
parcelHelpers.export(exports, "U32", ()=>U32
);
parcelHelpers.export(exports, "U32BE", ()=>U32BE
);
parcelHelpers.export(exports, "U32LE", ()=>U32LE
);
parcelHelpers.export(exports, "U48", ()=>U48
);
parcelHelpers.export(exports, "U48HL", ()=>U48HL
);
parcelHelpers.export(exports, "U48BE", ()=>U48BE
);
parcelHelpers.export(exports, "U48LE", ()=>U48LE
);
parcelHelpers.export(exports, "U64", ()=>U64
);
parcelHelpers.export(exports, "U64HL", ()=>U64HL
);
parcelHelpers.export(exports, "U64BE", ()=>U64BE
);
parcelHelpers.export(exports, "U64LE", ()=>U64LE
);
parcelHelpers.export(exports, "uuid", ()=>uuid
);
const P32 = 4294967296;
const HEX = "0123456789abcdef";
const U4 = (x)=>HEX[x & 15]
;
const U8 = (x)=>HEX[x >>> 4 & 15] + HEX[x & 15]
;
const U8A = (x, i)=>U8(x[i])
;
const U16 = (x)=>U8(x >>> 8) + U8(x & 255)
;
const U16BE = (x, i)=>U8(x[i]) + U8(x[i + 1])
;
const U16LE = (x, i)=>U8(x[i + 1]) + U8(x[i])
;
const U24 = (x)=>U8(x >>> 16) + U16(x)
;
const U24BE = (x, i)=>U8(x[i]) + U16BE(x, i + 1)
;
const U24LE = (x, i)=>U8(x[i + 2]) + U16LE(x, i)
;
const U32 = (x)=>U16(x >>> 16) + U16(x)
;
const U32BE = (x, i)=>U16BE(x, i) + U16BE(x, i + 2)
;
const U32LE = (x, i)=>U16LE(x, i + 2) + U16LE(x, i)
;
const U48 = (x)=>U48HL(x / P32, x % P32)
;
const U48HL = (hi, lo)=>U16(hi) + U32(lo)
;
const U48BE = (x, i)=>U16BE(x, i) + U32BE(x, i + 2)
;
const U48LE = (x, i)=>U16LE(x, i + 4) + U32LE(x, i)
;
const U64 = (x)=>U64HL(x / P32, x % P32)
;
const U64HL = (hi, lo)=>U32(hi) + U32(lo)
;
const U64BE = (x, i)=>U32BE(x, i) + U32BE(x, i + 4)
;
const U64LE = (x, i)=>U32LE(x, i + 4) + U32LE(x, i)
;
const uuid = (id, i = 0)=>// prettier-ignore
    `${U32BE(id, i)}-${U16BE(id, i + 4)}-${U16BE(id, i + 6)}-${U16BE(id, i + 8)}-${U48BE(id, i + 10)}`
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnENi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intArgb32Abgr32", ()=>intArgb32Abgr32
);
parcelHelpers.export(exports, "intAbgr32Argb32", ()=>intAbgr32Argb32
);
var _swizzle = require("@thi.ng/binary/swizzle");
const intArgb32Abgr32 = _swizzle.swapLane13;
const intAbgr32Argb32 = _swizzle.swapLane13;

},{"@thi.ng/binary/swizzle":"fNvtP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNvtP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lane16", ()=>lane16
);
parcelHelpers.export(exports, "lane8", ()=>lane8
);
parcelHelpers.export(exports, "lane4", ()=>lane4
);
parcelHelpers.export(exports, "lane2", ()=>lane2
);
parcelHelpers.export(exports, "setLane16", ()=>setLane16
);
parcelHelpers.export(exports, "setLane8", ()=>setLane8
);
parcelHelpers.export(exports, "setLane4", ()=>setLane4
);
parcelHelpers.export(exports, "setLane2", ()=>setLane2
);
parcelHelpers.export(exports, "swizzle8", ()=>swizzle8
);
parcelHelpers.export(exports, "swizzle4", ()=>swizzle4
);
parcelHelpers.export(exports, "mux", ()=>mux
);
parcelHelpers.export(exports, "flip8", ()=>flip8
);
parcelHelpers.export(exports, "flip16", ()=>flip16
);
parcelHelpers.export(exports, "flipBytes", ()=>flipBytes
);
parcelHelpers.export(exports, "swapLane02", ()=>swapLane02
);
parcelHelpers.export(exports, "swapLane13", ()=>swapLane13
);
const lane16 = (x, lane)=>x >>> (1 - lane << 4) & 65535
;
const lane8 = (x, lane)=>x >>> (3 - lane << 3) & 255
;
const lane4 = (x, lane)=>x >>> (7 - lane << 2) & 15
;
const lane2 = (x, lane)=>x >>> (15 - lane << 1) & 3
;
const setLane16 = (x, y, lane)=>lane ? mux(x, y, 65535) : mux(x, y << 16, 4294901760)
;
const setLane8 = (x, y, lane)=>{
    const l = 3 - lane << 3;
    return (~(255 << l) & x | (y & 255) << l) >>> 0;
};
const setLane4 = (x, y, lane)=>{
    const l = 7 - lane << 2;
    return (~(15 << l) & x | (y & 15) << l) >>> 0;
};
const setLane2 = (x, y, lane)=>{
    const l = 15 - lane << 1;
    return (~(3 << l) & x | (y & 3) << l) >>> 0;
};
const swizzle8 = (x, a, b, c, d)=>(lane8(x, a) << 24 | lane8(x, b) << 16 | lane8(x, c) << 8 | lane8(x, d)) >>> 0
;
const swizzle4 = (x, a, b, c, d, e, f, g, h)=>(lane4(x, a) << 28 | lane4(x, b) << 24 | lane4(x, c) << 20 | lane4(x, d) << 16 | lane4(x, e) << 12 | lane4(x, f) << 8 | lane4(x, g) << 4 | lane4(x, h)) >>> 0
;
const mux = (a, b, mask)=>~mask & a | mask & b
;
const flip8 = (x)=>(x >>> 24 | x >> 8 & 65280 | (x & 65280) << 8 | x << 24) >>> 0
;
const flip16 = (x)=>mux(x << 16, x >>> 16, 65535)
;
const flipBytes = flip8;
const swapLane02 = (x)=>(x & 65280) << 16 | x >>> 16 & 65280 | x & 16711935
;
const swapLane13 = (x)=>(x & 255) << 16 | x >> 16 & 255 | x & 4278255360
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1piX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labLch", ()=>labLch
);
parcelHelpers.export(exports, "lchLab", ()=>lchLab
);
var _angle = require("@thi.ng/math/angle");
var _api = require("@thi.ng/math/api");
var _setc = require("@thi.ng/vectors/setc");
var _ensureJs = require("../internal/ensure.js");
const labLch = (out, src)=>{
    const { 1: a , 2: b  } = src;
    return _setc.setC4(out || src, src[0], Math.hypot(a, b), a === 0 && b === 0 ? 0 : _angle.atan2Abs(b, a) * _api.INV_TAU, _ensureJs.__ensureAlpha(src[3]));
};
const lchLab = (out, src)=>{
    let { 1: c , 2: h  } = src;
    h *= _api.TAU;
    const a = _ensureJs.__ensureAlpha(src[3]);
    return c > 0 ? _setc.setC4(out || src, src[0], Math.cos(h) * c, Math.sin(h) * c, a) : _setc.setC4(out || src, src[0], 0, 0, a);
};

},{"@thi.ng/math/angle":"el41q","@thi.ng/math/api":"4a98p","@thi.ng/vectors/setc":"jST0o","../internal/ensure.js":"4sVaN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"el41q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sincos", ()=>sincos
);
parcelHelpers.export(exports, "cossin", ()=>cossin
);
parcelHelpers.export(exports, "absTheta", ()=>absTheta
);
parcelHelpers.export(exports, "absInnerAngle", ()=>absInnerAngle
);
parcelHelpers.export(exports, "angleDist", ()=>angleDist
);
parcelHelpers.export(exports, "atan2Abs", ()=>atan2Abs
);
parcelHelpers.export(exports, "quadrant", ()=>quadrant
);
parcelHelpers.export(exports, "deg", ()=>deg
);
parcelHelpers.export(exports, "rad", ()=>rad
);
parcelHelpers.export(exports, "csc", ()=>csc
);
parcelHelpers.export(exports, "sec", ()=>sec
);
parcelHelpers.export(exports, "cot", ()=>cot
);
parcelHelpers.export(exports, "loc", ()=>loc
);
parcelHelpers.export(exports, "normCos", ()=>normCos
);
parcelHelpers.export(exports, "fastCos", ()=>fastCos
);
parcelHelpers.export(exports, "fastSin", ()=>fastSin
);
var _apiJs = require("./api.js");
const sincos = (theta, n = 1)=>[
        Math.sin(theta) * n,
        Math.cos(theta) * n, 
    ]
;
const cossin = (theta, n = 1)=>[
        Math.cos(theta) * n,
        Math.sin(theta) * n, 
    ]
;
const absTheta = (theta)=>(theta %= _apiJs.TAU, theta < 0 ? _apiJs.TAU + theta : theta)
;
const absInnerAngle = (theta)=>(theta = Math.abs(theta), theta > _apiJs.PI ? _apiJs.TAU - theta : theta)
;
const angleDist = (a, b)=>absInnerAngle(absTheta(b % _apiJs.TAU - a % _apiJs.TAU))
;
const atan2Abs = (y, x)=>absTheta(Math.atan2(y, x))
;
const quadrant = (theta)=>absTheta(theta) * _apiJs.INV_HALF_PI | 0
;
const deg = (theta)=>theta * _apiJs.RAD2DEG
;
const rad = (theta)=>theta * _apiJs.DEG2RAD
;
const csc = (theta)=>1 / Math.sin(theta)
;
const sec = (theta)=>1 / Math.cos(theta)
;
const cot = (theta)=>1 / Math.tan(theta)
;
const loc = (a, b, gamma)=>Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(gamma))
;
const normCos = (x)=>{
    const x2 = x * x;
    return 1 + x2 * (-4 + 2 * x2);
};
const __fastCos = (x)=>{
    const x2 = x * x;
    return 0.99940307 + x2 * (-0.49558072 + 0.03679168 * x2);
};
const fastCos = (theta)=>{
    theta %= _apiJs.TAU;
    theta < 0 && (theta = -theta);
    switch(theta * _apiJs.INV_HALF_PI | 0){
        case 0:
            return __fastCos(theta);
        case 1:
            return -__fastCos(_apiJs.PI - theta);
        case 2:
            return -__fastCos(theta - _apiJs.PI);
        default:
            return __fastCos(_apiJs.TAU - theta);
    }
};
const fastSin = (theta)=>fastCos(_apiJs.HALF_PI - theta)
;

},{"./api.js":"4a98p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RVY8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labRgb", ()=>labRgb
);
parcelHelpers.export(exports, "labRgbD65", ()=>labRgbD65
);
var _labXyzJs = require("./lab-xyz.js");
var _xyzRgbJs = require("../xyz/xyz-rgb.js");
const labRgb = (out, src)=>_xyzRgbJs.xyzRgb(null, _labXyzJs.labXyz(out, src))
;
const labRgbD65 = (out, src)=>_xyzRgbJs.xyzRgbD65(null, _labXyzJs.labXyzD65(out, src))
;

},{"./lab-xyz.js":"8gQFf","../xyz/xyz-rgb.js":"4kaV5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gQFf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labXyz", ()=>labXyz
);
parcelHelpers.export(exports, "labXyzD65", ()=>labXyzD65
);
var _setc = require("@thi.ng/vectors/setc");
var _constantsJs = require("../api/constants.js");
var _ensureJs = require("../internal/ensure.js");
const transform = (x)=>{
    const y = x ** 3;
    return y > 0.008856 ? y : (x - 16 / 116) / 7.787;
};
const labXyz = (out, src, white = _constantsJs.D50)=>{
    const y = (src[0] + 0.16) / 1.16;
    return _setc.setC4(out || src, transform(src[1] / 5 + y) * white[0], transform(y) * white[1], transform(y - src[2] / 2) * white[2], _ensureJs.__ensureAlpha(src[3]));
};
const labXyzD65 = (out, src)=>labXyz(out, src, _constantsJs.D65)
;

},{"@thi.ng/vectors/setc":"jST0o","../api/constants.js":"atfY9","../internal/ensure.js":"4sVaN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kaV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xyzRgb", ()=>xyzRgb
);
parcelHelpers.export(exports, "xyzRgbD65", ()=>xyzRgbD65
);
var _constantsJs = require("../api/constants.js");
var _matrixOpsJs = require("../internal/matrix-ops.js");
const xyzRgb = (out, src, mat = _constantsJs.XYZ_RGB_D50)=>_matrixOpsJs.__mulV33(out, mat, src)
;
const xyzRgbD65 = (out, src)=>xyzRgb(out, src, _constantsJs.XYZ_RGB_D65)
;

},{"../api/constants.js":"atfY9","../internal/matrix-ops.js":"4XUNV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XUNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__mulV33", ()=>__mulV33
);
parcelHelpers.export(exports, "__mulV45", ()=>__mulV45
);
parcelHelpers.export(exports, "__mulM45", ()=>__mulM45
);
var _interval = require("@thi.ng/math/interval");
var _dots = require("@thi.ng/vectors/dots");
var _setc = require("@thi.ng/vectors/setc");
var _ensureJs = require("./ensure.js");
const __mulV33 = (out, mat, src, clampOut = false)=>{
    const x = _dots.dotS3(mat, src, 0, 0, 3);
    const y = _dots.dotS3(mat, src, 1, 0, 3);
    const z = _dots.dotS3(mat, src, 2, 0, 3);
    const a = _ensureJs.__ensureAlpha(src[3]);
    return clampOut ? _setc.setC4(out || src, _interval.clamp01(x), _interval.clamp01(y), _interval.clamp01(z), a) : _setc.setC4(out || src, x, y, z, a);
};
const __mulV45 = (out, mat, src, clampOut = true)=>{
    out = _setc.setC4(out || src, src[0], src[1], src[2], _ensureJs.__ensureAlpha(src[3]));
    const x = _dots.dotS4(out, mat, 0, 0) + mat[4];
    const y = _dots.dotS4(out, mat, 0, 5) + mat[9];
    const z = _dots.dotS4(out, mat, 0, 10) + mat[14];
    const w = _dots.dotS4(out, mat, 0, 15) + mat[19];
    return clampOut ? _setc.setC4(out, _interval.clamp01(x), _interval.clamp01(y), _interval.clamp01(z), _interval.clamp01(w)) : _setc.setC4(out, x, y, z, w);
};
const __mulM45 = (a, b)=>[
        _dots.dotS4(b, a, 0, 0, 1, 5),
        _dots.dotS4(b, a, 0, 1, 1, 5),
        _dots.dotS4(b, a, 0, 2, 1, 5),
        _dots.dotS4(b, a, 0, 3, 1, 5),
        _dots.dotS4(b, a, 0, 4, 1, 5) + b[4],
        _dots.dotS4(b, a, 5, 0, 1, 5),
        _dots.dotS4(b, a, 5, 1, 1, 5),
        _dots.dotS4(b, a, 5, 2, 1, 5),
        _dots.dotS4(b, a, 5, 3, 1, 5),
        _dots.dotS4(b, a, 5, 4, 1, 5) + b[9],
        _dots.dotS4(b, a, 10, 0, 1, 5),
        _dots.dotS4(b, a, 10, 1, 1, 5),
        _dots.dotS4(b, a, 10, 2, 1, 5),
        _dots.dotS4(b, a, 10, 3, 1, 5),
        _dots.dotS4(b, a, 10, 4, 1, 5) + b[14],
        _dots.dotS4(b, a, 15, 0, 1, 5),
        _dots.dotS4(b, a, 15, 1, 1, 5),
        _dots.dotS4(b, a, 15, 2, 1, 5),
        _dots.dotS4(b, a, 15, 3, 1, 5),
        _dots.dotS4(b, a, 15, 4, 1, 5) + b[19], 
    ]
;

},{"@thi.ng/math/interval":"1TDWA","@thi.ng/vectors/dots":"3KJkk","@thi.ng/vectors/setc":"jST0o","./ensure.js":"4sVaN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KJkk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dotS", ()=>dotS
);
parcelHelpers.export(exports, "dotS2", ()=>dotS2
);
parcelHelpers.export(exports, "dotS3", ()=>dotS3
);
parcelHelpers.export(exports, "dotS4", ()=>dotS4
);
var _emitJs = require("./compile/emit.js");
var _templatesJs = require("./compile/templates.js");
const dotS = (a, b, n, ia = 0, ib = 0, sa = 1, sb = 1)=>{
    let sum = 0;
    for(; n-- > 0; ia += sa, ib += sb)sum += a[ia] * b[ib];
    return sum;
};
const $ = (dim)=>_emitJs.compile(dim, _templatesJs.DOT, `o,a,${_templatesJs.SARGS_V}`, "o,a", "", "+", "return ", ";", true)
;
const dotS2 = $(2);
const dotS3 = $(3);
const dotS4 = $(4);

},{"./compile/emit.js":"hpIek","./compile/templates.js":"1B2Pe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpIek":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOut", ()=>defaultOut
);
parcelHelpers.export(exports, "compile", ()=>compile
);
parcelHelpers.export(exports, "compileHOF", ()=>compileHOF
);
parcelHelpers.export(exports, "compileG", ()=>compileG
);
parcelHelpers.export(exports, "compileS", ()=>compileS
);
parcelHelpers.export(exports, "compileGHOF", ()=>compileGHOF
);
parcelHelpers.export(exports, "defOp", ()=>defOp
);
parcelHelpers.export(exports, "defFnOp", ()=>defFnOp
);
parcelHelpers.export(exports, "defHofOp", ()=>defHofOp
);
parcelHelpers.export(exports, "defOpS", ()=>defOpS
);
parcelHelpers.export(exports, "defHofOpS", ()=>defHofOpS
);
parcelHelpers.export(exports, "defMathOp", ()=>defMathOp
);
parcelHelpers.export(exports, "defMathOpN", ()=>defMathOpN
);
parcelHelpers.export(exports, "defBitOp", ()=>defBitOp
);
parcelHelpers.export(exports, "defBitOpN", ()=>defBitOpN
);
var _comp = require("@thi.ng/transducers/comp");
var _map = require("@thi.ng/transducers/map");
var _mapIndexed = require("@thi.ng/transducers/map-indexed");
var _range = require("@thi.ng/transducers/range");
var _str = require("@thi.ng/transducers/str");
var _take = require("@thi.ng/transducers/take");
var _transduce = require("@thi.ng/transducers/transduce");
var _zip = require("@thi.ng/transducers/zip");
var _vopJs = require("../vop.js");
var _templatesJs = require("./templates.js");
/**
 * HOF array index lookup gen to provide optimized versions of:
 *
 * @example
 * ```ts
 * lookup("a")(0) // a[ia]
 * lookup("a")(1) // a[ia * sa]
 * lookup("a")(2) // a[ia + 2 * sa]
 * ```
 *
 * @param sym -
 */ const lookup = (sym)=>(i)=>i > 1 ? `${sym}[i${sym}+${i}*s${sym}]` : i == 1 ? `${sym}[i${sym}+s${sym}]` : `${sym}[i${sym}]`
;
/**
 * Infinite iterator of strided index lookups for `sym`.
 *
 * @param sym -
 */ const indicesStrided = (sym)=>_map.map(lookup(sym), _range.range())
;
/**
 * Infinite iterator of simple (non-strided) index lookups for `sym`.
 *
 * @param sym -
 */ const indices = (sym)=>_map.map((i)=>`${sym}[${i}]`
    , _range.range())
;
/**
 * Code generator for loop-unrolled vector operations. Takes a vector
 * size `dim`, a code template function `tpl` and an array of symbol
 * names participating in the template. For each symbol, creates
 * iterator of index lookups (e.g. `a[0]` or `a[ia+k*sa]`), forms them
 * into tuples and passes them to template to generate code and joins
 * generated result with `opJoin` separator (default:
 * `""`).
 *
 * If the optional `ret` arg is not `null` (default `"a"`), appends a
 * `return` statement to the result array, using `ret` as return value.
 * Returns array of source code lines.
 *
 * The optional `pre` and `post` strings can be used to wrap the
 * generated code. `post` will be injected **before** the generated
 * return statement (if not suppressed).
 *
 * @param dim -
 * @param tpl -
 * @param syms -
 * @param ret -
 * @param opJoin -
 * @param pre -
 * @param post -
 * @param strided -
 */ const assemble = (dim, tpl, syms, ret = "a", opJoin = "", pre = "", post = "", strided = false)=>[
        pre,
        _transduce.transduce(_comp.comp(_take.take(dim), _mapIndexed.mapIndexed((i, x)=>tpl(x, i)
        )), _str.str(opJoin), _zip.zip.apply(null, syms.split(",").map(strided ? indicesStrided : indices))),
        post,
        ret !== "" ? `return ${ret};` : "", 
    ]
;
const assembleG = (tpl, syms, ret = "a", pre, post, strided = false)=>[
        pre,
        "for(let i=a.length;--i>=0;) {",
        tpl(syms.split(",").map(strided ? (x)=>`${x}[i${x}+i*s${x}]`
         : (x)=>`${x}[i]`
        )),
        "}",
        post,
        ret !== null ? `return ${ret};` : "", 
    ]
;
const assembleS = (tpl, syms = _templatesJs.ARGS_VV, ret = "o", pre = _templatesJs.DEFAULT_OUT, post)=>[
        pre,
        "while(k-->0) {",
        tpl(syms.split(",").map((x)=>`${x}[i${x}+k*s${x}]`
        )),
        "}",
        post,
        ret !== null ? `return ${ret};` : "", 
    ]
;
const defaultOut = (o, args)=>`!${o} && (${o}=${args.split(",")[1]});`
;
const compile = (dim, tpl, args, syms = args, ret = "a", opJoin, pre, post, strided = false)=>new Function(args, assemble(dim, tpl, syms, ret, opJoin, pre, post, strided).join(""))
;
const compileHOF = (dim, fns, tpl, hofArgs, args, syms = args, ret = "a", opJoin = "", pre, post, strided = false)=>{
    return new Function(hofArgs, `return (${args})=>{${assemble(dim, tpl, syms, ret, opJoin, pre, post, strided).join("")}}`)(...fns);
};
const compileG = (tpl, args, syms = args, ret = "a", pre, post, strided = false)=>new Function(args, assembleG(tpl, syms, ret, pre, post, strided).join(""))
;
const compileS = (tpl, args, syms = args, ret, pre, post)=>new Function(args, assembleS(tpl, syms, ret, pre, post).join(""))
;
const compileGHOF = (fns, tpl, hofArgs, args, syms = args, ret = "a", pre, post, strided = false)=>new Function(hofArgs, `return (${args})=>{${assembleG(tpl, syms, ret, pre, post, strided).join("")}}`)(...fns)
;
const defOp = (tpl, args = _templatesJs.ARGS_VV, syms, ret = "o", dispatch = 1, pre)=>{
    syms = syms || args;
    pre = pre != null ? pre : defaultOut(ret, args);
    const fn = _vopJs.vop(dispatch);
    const $ = (dim)=>fn.add(dim, compile(dim, tpl, args, syms, ret, "", pre))
    ;
    fn.default(compileG(tpl, args, syms, ret, pre));
    return [
        fn,
        $(2),
        $(3),
        $(4)
    ];
};
const defFnOp = (op)=>defOp(_templatesJs.FN(op), _templatesJs.ARGS_V)
;
const defHofOp = (op, tpl, args = _templatesJs.ARGS_V, syms, ret = "o", dispatch = 1, pre)=>{
    const _tpl = tpl || _templatesJs.FN("op");
    syms = syms || args;
    pre = pre != null ? pre : defaultOut(ret, args);
    const fn = _vopJs.vop(dispatch);
    const $ = (dim)=>fn.add(dim, compileHOF(dim, [
            op
        ], _tpl, "op", args, syms, ret, "", pre))
    ;
    fn.default(compileGHOF([
        op
    ], _tpl, "op", args, syms, ret, pre));
    return [
        fn,
        $(2),
        $(3),
        $(4)
    ];
};
const defOpS = (tpl, args = _templatesJs.ARGS_VV, idxArgs = _templatesJs.SARGS_VV, syms = _templatesJs.ARGS_VV, ret = "o", pre, sizes = [
    2,
    3,
    4
])=>[
        compileS(tpl, `${args},k,${idxArgs}`, syms, ret, pre),
        ...sizes.map((dim)=>compile(dim, tpl, `${args},${idxArgs}`, syms, ret, "", pre != null ? pre : defaultOut(ret, args), "", true)
        ), 
    ]
;
const defHofOpS = (op, tpl, args = _templatesJs.ARGS_VV, idxArgs = _templatesJs.SARGS_VV, syms = _templatesJs.ARGS_VV, ret = "o", pre, sizes = [
    2,
    3,
    4
])=>[
        new Function("op", `return (${args},k,${idxArgs})=>{${assembleS(tpl, syms, ret, pre).join("")}}`)(op),
        ...sizes.map((dim)=>compileHOF(dim, [
                op
            ], tpl, "op", `${args},${idxArgs}`, syms, ret, "", pre != null ? pre : defaultOut(ret, args), "", true)
        ), 
    ]
;
const defMathOp = (op)=>defOp(_templatesJs.MATH(op))
;
const defMathOpN = (op)=>defOp(_templatesJs.MATH_N(op), _templatesJs.ARGS_VN)
;
const defBitOp = (op, signed = false)=>defOp((signed ? _templatesJs.SIGNED : _templatesJs.UNSIGNED)(op))
;
const defBitOpN = (op, signed = false)=>defOp((signed ? _templatesJs.SIGNED_N : _templatesJs.UNSIGNED_N)(op), _templatesJs.ARGS_VN)
;

},{"@thi.ng/transducers/comp":"7g4yM","@thi.ng/transducers/map":"fW6Xn","@thi.ng/transducers/map-indexed":"feveV","@thi.ng/transducers/range":"lUHc9","@thi.ng/transducers/str":"9x5I6","@thi.ng/transducers/take":"cr3ZD","@thi.ng/transducers/transduce":"1Ttho","@thi.ng/transducers/zip":"ithYS","../vop.js":"4v2k5","./templates.js":"1B2Pe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7g4yM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "comp", ()=>comp
);
var _comp = require("@thi.ng/compose/comp");
var _ensureJs = require("./ensure.js");
function comp(...fns) {
    fns = fns.map(_ensureJs.ensureTransducer);
    return _comp.comp.apply(null, fns);
}

},{"@thi.ng/compose/comp":"87ham","./ensure.js":"lSMoA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87ham":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "comp", ()=>comp
);
parcelHelpers.export(exports, "compL", ()=>compL
);
parcelHelpers.export(exports, "compI", ()=>compI
);
var _illegalArity = require("@thi.ng/errors/illegal-arity");
function comp(...fns) {
    let [a, b, c, d, e, f, g, h, i, j] = fns;
    switch(fns.length){
        case 0:
            _illegalArity.illegalArity(0);
        case 1:
            return a;
        case 2:
            return (...xs)=>a(b(...xs))
            ;
        case 3:
            return (...xs)=>a(b(c(...xs)))
            ;
        case 4:
            return (...xs)=>a(b(c(d(...xs))))
            ;
        case 5:
            return (...xs)=>a(b(c(d(e(...xs)))))
            ;
        case 6:
            return (...xs)=>a(b(c(d(e(f(...xs))))))
            ;
        case 7:
            return (...xs)=>a(b(c(d(e(f(g(...xs)))))))
            ;
        case 8:
            return (...xs)=>a(b(c(d(e(f(g(h(...xs))))))))
            ;
        case 9:
            return (...xs)=>a(b(c(d(e(f(g(h(i(...xs)))))))))
            ;
        case 10:
        default:
            const fn = (...xs)=>a(b(c(d(e(f(g(h(i(j(...xs))))))))))
            ;
            return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
    }
}
function compL(...fns) {
    return comp.apply(null, fns.reverse());
}
const compI = compL;

},{"@thi.ng/errors/illegal-arity":"fOKRC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOKRC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IllegalArityError", ()=>IllegalArityError
);
parcelHelpers.export(exports, "illegalArity", ()=>illegalArity
);
var _deferrorJs = require("./deferror.js");
const IllegalArityError = _deferrorJs.defError(()=>"illegal arity"
);
const illegalArity = (n)=>{
    throw new IllegalArityError(n);
};

},{"./deferror.js":"l9nQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSMoA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureTransducer", ()=>ensureTransducer
);
var _implementsFunction = require("@thi.ng/checks/implements-function");
const ensureTransducer = (x)=>_implementsFunction.implementsFunction(x, "xform") ? x.xform() : x
;

},{"@thi.ng/checks/implements-function":"cjrzK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fW6Xn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "mapA", ()=>mapA
);
var _isIterable = require("@thi.ng/checks/is-iterable");
var _comprJs = require("./compr.js");
var _iteratorJs = require("./iterator.js");
function map(fn, src) {
    return _isIterable.isIterable(src) ? _iteratorJs.iterator1(map(fn), src) : (rfn)=>{
        const r = rfn[2];
        return _comprJs.compR(rfn, (acc, x)=>r(acc, fn(x))
        );
    };
}
const mapA = (fn, src)=>[
        ...map(fn, src), 
    ]
;

},{"@thi.ng/checks/is-iterable":"bDbbO","./compr.js":"ePFjm","./iterator.js":"8km8L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDbbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable
);
const isIterable = (x)=>x != null && typeof x[Symbol.iterator] === "function"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePFjm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compR", ()=>compR
);
const compR = (rfn, fn)=>[
        rfn[0],
        rfn[1],
        fn
    ]
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8km8L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Takes a transducer and input iterable. Returns iterator of
 * transformed results.
 *
 * @param xform -
 * @param xs -
 */ parcelHelpers.export(exports, "iterator", ()=>iterator
);
/**
 * Optimized version of {@link iterator} for transducers which are
 * guaranteed to:
 *
 * 1) Only produce none or a single result per input
 * 2) Do not require a `completion` reduction step
 *
 * @param xform -
 * @param xs -
 */ parcelHelpers.export(exports, "iterator1", ()=>iterator1
);
parcelHelpers.export(exports, "__iter", ()=>__iter
);
var _api = require("@thi.ng/api/api");
var _isIterable = require("@thi.ng/checks/is-iterable");
var _ensureJs = require("./ensure.js");
var _pushJs = require("./push.js");
var _reducedJs = require("./reduced.js");
function* iterator(xform, xs) {
    const rfn = _ensureJs.ensureTransducer(xform)(_pushJs.push());
    const complete = rfn[1];
    const reduce = rfn[2];
    for (let x of xs){
        const y = reduce([], x);
        if (_reducedJs.isReduced(y)) {
            yield* _reducedJs.unreduced(complete(y.deref()));
            return;
        }
        if (y.length) yield* y;
    }
    yield* _reducedJs.unreduced(complete([]));
}
function* iterator1(xform, xs) {
    const reduce = _ensureJs.ensureTransducer(xform)([
        _api.NO_OP,
        _api.NO_OP,
        (_, x)=>x
    ])[2];
    for (let x1 of xs){
        let y = reduce(_api.SEMAPHORE, x1);
        if (_reducedJs.isReduced(y)) {
            y = _reducedJs.unreduced(y.deref());
            if (y !== _api.SEMAPHORE) yield y;
            return;
        }
        if (y !== _api.SEMAPHORE) yield y;
    }
}
const __iter = (xform, args, impl = iterator1)=>{
    const n = args.length - 1;
    return _isIterable.isIterable(args[n]) ? args.length > 1 ? impl(xform.apply(null, args.slice(0, n)), args[n]) : impl(xform(), args[0]) : undefined;
};

},{"@thi.ng/api/api":"efej5","@thi.ng/checks/is-iterable":"bDbbO","./ensure.js":"lSMoA","./push.js":"8Qmga","./reduced.js":"cAjrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"efej5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_EPS", ()=>DEFAULT_EPS
);
parcelHelpers.export(exports, "SEMAPHORE", ()=>SEMAPHORE
);
parcelHelpers.export(exports, "NO_OP", ()=>NO_OP
);
parcelHelpers.export(exports, "EVENT_ALL", ()=>EVENT_ALL
);
parcelHelpers.export(exports, "EVENT_ENABLE", ()=>EVENT_ENABLE
);
parcelHelpers.export(exports, "EVENT_DISABLE", ()=>EVENT_DISABLE
);
const DEFAULT_EPS = 0.000001;
const SEMAPHORE = Symbol();
const NO_OP = ()=>{};
const EVENT_ALL = "*";
const EVENT_ENABLE = "enable";
const EVENT_DISABLE = "disable";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qmga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "push", ()=>push
);
var _reduceJs = require("./reduce.js");
function push(xs) {
    return xs ? [
        ...xs
    ] : _reduceJs.reducer(()=>[]
    , (acc, x)=>(acc.push(x), acc)
    );
}

},{"./reduce.js":"hP05c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hP05c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce
);
parcelHelpers.export(exports, "reduceRight", ()=>reduceRight
);
parcelHelpers.export(exports, "reducer", ()=>reducer
);
parcelHelpers.export(exports, "$$reduce", ()=>$$reduce
);
var _implementsFunction = require("@thi.ng/checks/implements-function");
var _isArraylike = require("@thi.ng/checks/is-arraylike");
var _isIterable = require("@thi.ng/checks/is-iterable");
var _illegalArity = require("@thi.ng/errors/illegal-arity");
var _reducedJs = require("./reduced.js");
const parseArgs = (args)=>args.length === 2 ? [
        undefined,
        args[1]
    ] : args.length === 3 ? [
        args[1],
        args[2]
    ] : _illegalArity.illegalArity(args.length)
;
function reduce(...args) {
    const rfn = args[0];
    const init = rfn[0];
    const complete = rfn[1];
    const reduce1 = rfn[2];
    args = parseArgs(args);
    const acc = args[0] == null ? init() : args[0];
    const xs = args[1];
    return _reducedJs.unreduced(complete(_implementsFunction.implementsFunction(xs, "$reduce") ? xs.$reduce(reduce1, acc) : _isArraylike.isArrayLike(xs) ? reduceArray(reduce1, acc, xs) : reduceIterable(reduce1, acc, xs)));
}
function reduceRight(...args) {
    const rfn = args[0];
    const init = rfn[0];
    const complete = rfn[1];
    const reduce2 = rfn[2];
    args = parseArgs(args);
    let acc = args[0] == null ? init() : args[0];
    const xs = args[1];
    for(let i = xs.length; i-- > 0;){
        acc = reduce2(acc, xs[i]);
        if (_reducedJs.isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return _reducedJs.unreduced(complete(acc));
}
const reduceArray = (rfn, acc, xs)=>{
    for(let i = 0, n = xs.length; i < n; i++){
        acc = rfn(acc, xs[i]);
        if (_reducedJs.isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return acc;
};
const reduceIterable = (rfn, acc, xs)=>{
    for (let x of xs){
        acc = rfn(acc, x);
        if (_reducedJs.isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return acc;
};
const reducer = (init, rfn)=>[
        init,
        (acc)=>acc
        ,
        rfn
    ]
;
const $$reduce = (rfn, args)=>{
    const n = args.length - 1;
    return _isIterable.isIterable(args[n]) ? args.length > 1 ? reduce(rfn.apply(null, args.slice(0, n)), args[n]) : reduce(rfn(), args[0]) : undefined;
};

},{"@thi.ng/checks/implements-function":"cjrzK","@thi.ng/checks/is-arraylike":"8nYo2","@thi.ng/checks/is-iterable":"bDbbO","@thi.ng/errors/illegal-arity":"fOKRC","./reduced.js":"cAjrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAjrZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Reduced", ()=>Reduced
);
parcelHelpers.export(exports, "reduced", ()=>reduced
);
parcelHelpers.export(exports, "isReduced", ()=>isReduced
);
parcelHelpers.export(exports, "ensureReduced", ()=>ensureReduced
);
parcelHelpers.export(exports, "unreduced", ()=>unreduced
);
class Reduced {
    constructor(val){
        this.value = val;
    }
    deref() {
        return this.value;
    }
}
const reduced = (x)=>new Reduced(x)
;
const isReduced = (x)=>x instanceof Reduced
;
const ensureReduced = (x)=>x instanceof Reduced ? x : new Reduced(x)
;
const unreduced = (x)=>x instanceof Reduced ? x.deref() : x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"feveV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapIndexed", ()=>mapIndexed
);
var _comprJs = require("./compr.js");
var _iteratorJs = require("./iterator.js");
function mapIndexed(...args) {
    return _iteratorJs.__iter(mapIndexed, args) || ((rfn)=>{
        const r = rfn[2];
        const fn = args[0];
        let i = args[1] || 0;
        return _comprJs.compR(rfn, (acc, x)=>r(acc, fn(i++, x))
        );
    });
}

},{"./compr.js":"ePFjm","./iterator.js":"8km8L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lUHc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range
);
/**
 * Simple class wrapper around given range interval and implementing
 * `Iterable` and {@link IReducible} interfaces, the latter is used to
 * accelerate use with {@link (reduce:1)}.
 */ parcelHelpers.export(exports, "Range", ()=>Range
);
var _reducedJs = require("./reduced.js");
function range(from, to, step) {
    return new Range(from, to, step);
}
class Range {
    constructor(from, to, step){
        if (from === undefined) {
            from = 0;
            to = Infinity;
        } else if (to === undefined) {
            to = from;
            from = 0;
        }
        step = step === undefined ? from < to ? 1 : -1 : step;
        this.from = from;
        this.to = to;
        this.step = step;
    }
    *[Symbol.iterator]() {
        let { from , to , step  } = this;
        if (step > 0) while(from < to){
            yield from;
            from += step;
        }
        else if (step < 0) while(from > to){
            yield from;
            from += step;
        }
    }
    $reduce(rfn, acc) {
        const step = this.step;
        if (step > 0) for(let i = this.from, n = this.to; i < n && !_reducedJs.isReduced(acc); i += step)acc = rfn(acc, i);
        else for(let i1 = this.from, n1 = this.to; i1 > n1 && !_reducedJs.isReduced(acc); i1 += step)acc = rfn(acc, i1);
        return acc;
    }
}

},{"./reduced.js":"cAjrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9x5I6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "str", ()=>str
);
var _reduceJs = require("./reduce.js");
function str(sep, xs) {
    sep = sep || "";
    let first = true;
    return xs ? [
        ...xs
    ].join(sep) : _reduceJs.reducer(()=>""
    , (acc, x)=>(acc = first ? acc + x : acc + sep + x, first = false, acc)
    );
}

},{"./reduce.js":"hP05c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cr3ZD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "take", ()=>take
);
var _isIterable = require("@thi.ng/checks/is-iterable");
var _comprJs = require("./compr.js");
var _iteratorJs = require("./iterator.js");
var _reducedJs = require("./reduced.js");
function take(n, src) {
    return _isIterable.isIterable(src) ? _iteratorJs.iterator(take(n), src) : (rfn)=>{
        const r = rfn[2];
        let m = n;
        return _comprJs.compR(rfn, (acc, x)=>--m > 0 ? r(acc, x) : m === 0 ? _reducedJs.ensureReduced(r(acc, x)) : _reducedJs.reduced(acc)
        );
    };
}

},{"@thi.ng/checks/is-iterable":"bDbbO","./compr.js":"ePFjm","./iterator.js":"8km8L","./reduced.js":"cAjrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ttho":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transduce", ()=>transduce
);
parcelHelpers.export(exports, "transduceRight", ()=>transduceRight
);
var _illegalArity = require("@thi.ng/errors/illegal-arity");
var _ensureJs = require("./ensure.js");
var _mapJs = require("./map.js");
var _reduceJs = require("./reduce.js");
function transduce(...args) {
    return $transduce(transduce, _reduceJs.reduce, args);
}
function transduceRight(...args) {
    return $transduce(transduceRight, _reduceJs.reduceRight, args);
}
const $transduce = (tfn, rfn, args)=>{
    let acc, xs;
    switch(args.length){
        case 4:
            xs = args[3];
            acc = args[2];
            break;
        case 3:
            xs = args[2];
            break;
        case 2:
            return _mapJs.map((x)=>tfn(args[0], args[1], x)
            );
        default:
            _illegalArity.illegalArity(args.length);
    }
    return rfn(_ensureJs.ensureTransducer(args[0])(args[1]), acc, xs);
};

},{"@thi.ng/errors/illegal-arity":"fOKRC","./ensure.js":"lSMoA","./map.js":"fW6Xn","./reduce.js":"hP05c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ithYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
function* zip(...src) {
    const iters = src.map((s)=>s[Symbol.iterator]()
    );
    while(true){
        const tuple = [];
        for (let i of iters){
            let v = i.next();
            if (v.done) return;
            tuple.push(v.value);
        }
        yield tuple;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4v2k5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vop", ()=>vop
);
var _unsupported = require("@thi.ng/errors/unsupported");
const vop = (dispatch = 0)=>{
    const impls = new Array(5);
    let fallback;
    const fn1 = (...args)=>{
        const g = impls[args[dispatch].length] || fallback;
        return g ? g(...args) : _unsupported.unsupported(`no impl for vec size ${args[dispatch].length}`);
    };
    fn1.add = (dim, fn)=>impls[dim] = fn
    ;
    fn1.default = (fn)=>fallback = fn
    ;
    fn1.impl = (dim)=>impls[dim] || fallback
    ;
    // fn.impls = impls;
    return fn1;
};

},{"@thi.ng/errors/unsupported":"dDHMM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1B2Pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ARGS_V", ()=>ARGS_V
);
parcelHelpers.export(exports, "ARGS_VV", ()=>ARGS_VV
);
parcelHelpers.export(exports, "ARGS_VVV", ()=>ARGS_VVV
);
parcelHelpers.export(exports, "ARGS_VN", ()=>ARGS_VN
);
parcelHelpers.export(exports, "ARGS_VNV", ()=>ARGS_VNV
);
parcelHelpers.export(exports, "ARGS_VVN", ()=>ARGS_VVN
);
parcelHelpers.export(exports, "SARGS_V", ()=>SARGS_V
);
parcelHelpers.export(exports, "SARGS_VV", ()=>SARGS_VV
);
parcelHelpers.export(exports, "SARGS_VVV", ()=>SARGS_VVV
);
parcelHelpers.export(exports, "DEFAULT_OUT", ()=>DEFAULT_OUT
);
parcelHelpers.export(exports, "NEW_OUT", ()=>NEW_OUT
);
parcelHelpers.export(exports, "NEW_OUT_A", ()=>NEW_OUT_A
);
parcelHelpers.export(exports, "MATH", ()=>MATH
);
parcelHelpers.export(exports, "MATH_N", ()=>MATH_N
);
parcelHelpers.export(exports, "MATH2", ()=>MATH2
);
parcelHelpers.export(exports, "MATH2_N", ()=>MATH2_N
);
parcelHelpers.export(exports, "MATH2A_N", ()=>MATH2A_N
);
parcelHelpers.export(exports, "SIGNED", ()=>SIGNED
);
parcelHelpers.export(exports, "UNSIGNED", ()=>UNSIGNED
);
parcelHelpers.export(exports, "SIGNED_N", ()=>SIGNED_N
);
parcelHelpers.export(exports, "UNSIGNED_N", ()=>UNSIGNED_N
);
parcelHelpers.export(exports, "FN", ()=>FN
);
parcelHelpers.export(exports, "FN2", ()=>FN2
);
parcelHelpers.export(exports, "FN3", ()=>FN3
);
parcelHelpers.export(exports, "FN5", ()=>FN5
);
parcelHelpers.export(exports, "FN_N", ()=>FN_N
);
parcelHelpers.export(exports, "DOT", ()=>DOT
);
parcelHelpers.export(exports, "DOT_G", ()=>DOT_G
);
parcelHelpers.export(exports, "SET", ()=>SET
);
parcelHelpers.export(exports, "SET_N", ()=>SET_N
);
parcelHelpers.export(exports, "MIX", ()=>MIX
);
parcelHelpers.export(exports, "MIX_N", ()=>MIX_N
);
const ARGS_V = "o,a";
const ARGS_VV = "o,a,b";
const ARGS_VVV = "o,a,b,c";
const ARGS_VN = "o,a,n";
const ARGS_VNV = "o,a,n,b";
const ARGS_VVN = "o,a,b,n";
const SARGS_V = "io=0,ia=0,so=1,sa=1";
const SARGS_VV = "io=0,ia=0,ib=0,so=1,sa=1,sb=1";
const SARGS_VVV = "io=0,ia=0,ib=0,ic=0,so=1,sa=1,sb=1,sc=1";
const DEFAULT_OUT = "!o&&(o=a);";
const NEW_OUT = "!o&&(o=[]);";
const NEW_OUT_A = "!a&&(a=[]);";
const MATH = (op)=>([o, a, b])=>`${o}=${a}${op}${b};`
;
const MATH_N = (op)=>([o, a])=>`${o}=${a}${op}n;`
;
const MATH2 = (op1, op2)=>([o, a, b, c])=>`${o}=(${a}${op1}${b})${op2}${c};`
;
const MATH2_N = (op1, op2)=>([o, a, b])=>`${o}=(${a}${op1}${b})${op2}n;`
;
const MATH2A_N = (op1, op2)=>([o, a, b])=>`${o}=(${a}${op1}n)${op2}${b};`
;
const SIGNED = (op)=>([o, a, b])=>`${o}=(${a}${op}${b})|0;`
;
const UNSIGNED = (op)=>([o, a, b])=>`${o}=(${a}${op}${b})>>>0;`
;
const SIGNED_N = (op)=>([o, a])=>`${o}=(${a}${op}n)|0;`
;
const UNSIGNED_N = (op)=>([o, a])=>`${o}=(${a}${op}n)>>>0;`
;
const FN = (op = "op")=>([o, a])=>`${o}=${op}(${a});`
;
const FN2 = (op = "op")=>([o, a, b])=>`${o}=${op}(${a},${b});`
;
const FN3 = (op = "op")=>([o, a, b, c])=>`${o}=${op}(${a},${b},${c});`
;
const FN5 = (op = "op")=>([o, a, b, c, d, e])=>`${o}=${op}(${a},${b},${c},${d},${e});`
;
const FN_N = (op = "op")=>([o, a])=>`${o}=${op}(${a},n);`
;
const DOT = ([a, b])=>`${a}*${b}`
;
const DOT_G = ([a, b])=>`s+=${a}*${b};`
;
const SET = ([o, a])=>`${o}=${a};`
;
const SET_N = ([a])=>`${a}=n;`
;
const MIX = ([o, a, b, c])=>`${o}=${a}+(${b}-${a})*${c};`
;
const MIX_N = ([o, a, b])=>`${o}=${a}+(${b}-${a})*n;`
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Selw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbCss", ()=>rgbCss
);
var _rgbSrgbJs = require("./rgb-srgb.js");
var _srgbCssJs = require("../srgb/srgb-css.js");
const rgbCss = (src)=>_srgbCssJs.srgbCss(_rgbSrgbJs.rgbSrgb([], src))
;

},{"./rgb-srgb.js":"12R05","../srgb/srgb-css.js":"bLmEC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12R05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbSrgb", ()=>rgbSrgb
);
parcelHelpers.export(exports, "rgbSrgbApprox", ()=>rgbSrgbApprox
);
var _setc = require("@thi.ng/vectors/setc");
var _ensureJs = require("../internal/ensure.js");
var _linearJs = require("../linear.js");
const rgbSrgb = (out, src)=>_setc.setC4(out || src, _linearJs.linearSrgb(src[0]), _linearJs.linearSrgb(src[1]), _linearJs.linearSrgb(src[2]), _ensureJs.__ensureAlpha(src[3]))
;
const GAMMA = 1 / 2.2;
const rgbSrgbApprox = (out, src)=>_setc.setC4(out || src, src[0] ** GAMMA, src[1] ** GAMMA, src[2] ** GAMMA, _ensureJs.__ensureAlpha(src[3]))
;

},{"@thi.ng/vectors/setc":"jST0o","../internal/ensure.js":"4sVaN","../linear.js":"kkPsW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkPsW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearSrgb", ()=>linearSrgb
);
parcelHelpers.export(exports, "srgbLinear", ()=>srgbLinear
);
const linearSrgb = (x)=>x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055
;
const srgbLinear = (x)=>x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLmEC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "srgbCss", ()=>srgbCss
);
var _radix = require("@thi.ng/strings/radix");
var _constantsJs = require("../api/constants.js");
var _ensureJs = require("../internal/ensure.js");
var _scaleJs = require("../internal/scale.js");
const srgbCss = (src)=>{
    const r = _scaleJs.__scale8bit(src[0]);
    const g = _scaleJs.__scale8bit(src[1]);
    const b = _scaleJs.__scale8bit(src[2]);
    const a = _ensureJs.__ensureAlpha(src[3]);
    // TODO update to `rgb(${r} ${g} ${b}/${FF(a)})` (CSS L4 syntax)
    return a < 1 ? `rgba(${r},${g},${b},${_constantsJs.FF(a)})` : `#${_radix.U24(r << 16 | g << 8 | b)}`;
};

},{"@thi.ng/strings/radix":"1GSdH","../api/constants.js":"atfY9","../internal/ensure.js":"4sVaN","../internal/scale.js":"5Q9zu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Q9zu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__scale8bit", ()=>__scale8bit
);
const __scale8bit = (x, shift = 0)=>(x < 0 ? 0 : x > 1 ? 1 : x) * 255 + 0.5 << shift
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3CRD4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ellipse", ()=>ellipse
);
var _formatJs = require("./format.js");
const ellipse = (p, rx, ry, attribs, ...body)=>[
        "ellipse",
        _formatJs.fattribs({
            ...attribs,
            cx: _formatJs.ff(p[0]),
            cy: _formatJs.ff(p[1]),
            rx: _formatJs.ff(rx),
            ry: _formatJs.ff(ry)
        }),
        ...body, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inrTO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearGradient", ()=>linearGradient
);
parcelHelpers.export(exports, "radialGradient", ()=>radialGradient
);
var _formatJs = require("./format.js");
const RE_ALPHA_COLOR = /(rgb|hsl)a\(([a-z0-9.-]+),([0-9.%]+),([0-9.%]+),([0-9.]+)\)/;
const gradient = (type, attribs, stops)=>[
        type,
        _formatJs.fattribs(attribs),
        ...stops.map(gradientStop), 
    ]
;
const gradientStop = ([offset, col])=>{
    col = _formatJs.fcolor(col);
    // use stop-opacity attrib for safari compatibility
    // https://stackoverflow.com/a/26220870/294515
    let opacity;
    const parts = RE_ALPHA_COLOR.exec(col);
    if (parts) {
        col = `${parts[1]}(${parts[2]},${parts[3]},${parts[4]})`;
        opacity = parts[5];
    }
    return [
        "stop",
        {
            offset,
            "stop-color": col,
            "stop-opacity": opacity
        }
    ];
};
const linearGradient = (id, from, to, stops, attribs)=>gradient("linearGradient", {
        ...attribs,
        id,
        x1: _formatJs.ff(from[0]),
        y1: _formatJs.ff(from[1]),
        x2: _formatJs.ff(to[0]),
        y2: _formatJs.ff(to[1])
    }, stops)
;
const radialGradient = (id, from, to, fr, r, stops, attribs)=>gradient("radialGradient", {
        ...attribs,
        id,
        fx: _formatJs.ff(from[0]),
        fy: _formatJs.ff(from[1]),
        cx: _formatJs.ff(to[0]),
        cy: _formatJs.ff(to[1]),
        fr: _formatJs.ff(fr),
        r: _formatJs.ff(r)
    }, stops)
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nw8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image", ()=>image
);
var _formatJs = require("./format.js");
const image = (pos, url, attribs, ...body)=>[
        "image",
        _formatJs.fattribs({
            ...attribs,
            // TODO replace w/ SVG2 `href` once Safari supports it
            "xlink:href": url,
            x: _formatJs.ff(pos[0]),
            y: _formatJs.ff(pos[1])
        }),
        ...body, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3AZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "line", ()=>line
);
parcelHelpers.export(exports, "hline", ()=>hline
);
parcelHelpers.export(exports, "vline", ()=>vline
);
var _formatJs = require("./format.js");
const line = (a, b, attribs, ...body)=>[
        "line",
        _formatJs.fattribs({
            ...attribs,
            x1: _formatJs.ff(a[0]),
            y1: _formatJs.ff(a[1]),
            x2: _formatJs.ff(b[0]),
            y2: _formatJs.ff(b[1])
        }),
        ...body, 
    ]
;
const hline = (y, attribs)=>line([
        -1000000,
        y
    ], [
        1000000,
        y
    ], attribs)
;
const vline = (x, attribs)=>line([
        x,
        -1000000
    ], [
        x,
        1000000
    ], attribs)
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6rbe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "path", ()=>path
);
var _formatJs = require("./format.js");
const DEG = 180 / Math.PI;
const path = (segments, attribs, ...body)=>{
    let res = [];
    for (let seg of segments){
        res.push(seg[0]);
        switch(seg[0].toLowerCase()){
            case "a":
                res.push([
                    // rx
                    _formatJs.ff(seg[1]),
                    // ry
                    _formatJs.ff(seg[2]),
                    // x-axis (theta)
                    _formatJs.ff(seg[3] * DEG),
                    // xl
                    seg[4] ? 1 : 0,
                    // clockwise
                    seg[5] ? 1 : 0,
                    // target xy
                    _formatJs.ff(seg[6][0]),
                    _formatJs.ff(seg[6][1]), 
                ].join(","));
                break;
            case "h":
            case "v":
                res.push(_formatJs.ff(seg[1]));
                break;
            case "m":
            case "l":
                res.push(_formatJs.fpoint(seg[1]));
                break;
            case "z":
                break;
            default:
                res.push(_formatJs.fpoints(seg.slice(1), ","));
        }
    }
    return [
        "path",
        _formatJs.fattribs({
            ...attribs,
            d: res.join("")
        }),
        ...body
    ];
};

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHAvc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "points", ()=>points
);
parcelHelpers.export(exports, "packedPoints", ()=>packedPoints
);
var _formatJs = require("./format.js");
const points = (pts, shape, size = 1, attribs, ...body)=>{
    const group = [
        "g",
        _formatJs.fattribs(_formatJs.withoutKeys(attribs, new Set([
            "shape",
            "size"
        ]))),
        ...body, 
    ];
    const href = buildSymbol(group, shape, size);
    for (let p of pts)// TODO replace w/ SVG2 `href` once Safari supports it
    group.push([
        "use",
        {
            "xlink:href": href,
            x: _formatJs.ff(p[0]),
            y: _formatJs.ff(p[1])
        }
    ]);
    return group;
};
const packedPoints = (pts, shape, size = 1, attribs, ...body)=>{
    attribs = {
        start: 0,
        cstride: 1,
        estride: 2,
        ...attribs
    };
    const { start , cstride , estride  } = attribs;
    let num = attribs && attribs.num != null ? attribs.num : (pts.length - start) / estride | 0;
    const group = [
        "g",
        _formatJs.fattribs(_formatJs.withoutKeys(attribs, new Set([
            "start",
            "cstride",
            "estride",
            "shape",
            "size",
            "num"
        ]))),
        ...body, 
    ];
    const href = buildSymbol(group, shape, size);
    for(let i = start; num-- > 0; i += estride)// TODO replace w/ SVG2 `href` once Safari supports it
    group.push([
        "use",
        {
            "xlink:href": href,
            x: _formatJs.ff(pts[i]),
            y: _formatJs.ff(pts[i + cstride])
        }, 
    ]);
    return group;
};
const buildSymbol = (group, shape, size)=>{
    let href;
    if (!shape || shape[0] !== "#") {
        href = "_" + (Math.random() * 1000000 | 0).toString(36);
        group.push([
            "g",
            {
                opacity: 0
            },
            buildShape(shape, href, size)
        ]);
        href = "#" + href;
    } else href = shape;
    return href;
};
const buildShape = (shape, id, r)=>{
    const rf = _formatJs.ff(r);
    if (shape === "circle") return [
        "circle",
        {
            id,
            cx: 0,
            cy: 0,
            r: rf
        }
    ];
    const rf2 = _formatJs.ff(-r / 2);
    return [
        "rect",
        {
            id,
            x: rf2,
            y: rf2,
            width: rf,
            height: rf
        }
    ];
};

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kl70r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polygon", ()=>polygon
);
var _formatJs = require("./format.js");
const polygon = (pts, attribs, ...body)=>[
        "polygon",
        _formatJs.fattribs({
            ...attribs,
            points: _formatJs.fpoints(pts)
        }),
        ...body, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbCqQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyline", ()=>polyline
);
var _formatJs = require("./format.js");
const polyline = (pts, attribs, ...body)=>[
        "polyline",
        _formatJs.fattribs({
            fill: "none",
            points: _formatJs.fpoints(pts),
            ...attribs
        }),
        ...body, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19TXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rect", ()=>rect
);
parcelHelpers.export(exports, "roundedRect", ()=>roundedRect
);
var _formatJs = require("./format.js");
const rect = (p, width, height, attribs, ...body)=>roundedRect(p, width, height, 0, 0, attribs, ...body)
;
const roundedRect = (p, width, height, rx, ry, attribs, ...body)=>{
    attribs = _formatJs.fattribs({
        ...attribs,
        x: _formatJs.ff(p[0]),
        y: _formatJs.ff(p[1]),
        width: _formatJs.ff(width),
        height: _formatJs.ff(height)
    });
    if (rx > 0 || ry > 0) {
        attribs.rx = _formatJs.ff(rx);
        attribs.ry = _formatJs.ff(ry);
    }
    return [
        "rect",
        attribs,
        ...body
    ];
};

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PJMQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "text", ()=>text
);
var _formatJs = require("./format.js");
const text = (p, body, attribs, ...xs)=>[
        "text",
        _formatJs.fattribs({
            ...attribs,
            x: _formatJs.ff(p[0]),
            y: _formatJs.ff(p[1])
        }),
        body,
        ...xs, 
    ]
;

},{"./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aU5ZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serialize", ()=>serialize
);
var _deref = require("@thi.ng/api/deref");
var _implementsFunction = require("@thi.ng/checks/implements-function");
var _isArray = require("@thi.ng/checks/is-array");
var _isFunction = require("@thi.ng/checks/is-function");
var _isNotStringIterable = require("@thi.ng/checks/is-not-string-iterable");
var _isPlainObject = require("@thi.ng/checks/is-plain-object");
var _isString = require("@thi.ng/checks/is-string");
var _illegalArguments = require("@thi.ng/errors/illegal-arguments");
var _entities = require("@thi.ng/strings/entities");
var _apiJs = require("./api.js");
var _cssJs = require("./css.js");
var _normalizeJs = require("./normalize.js");
var _prefixJs = require("./prefix.js");
const serialize = (tree, ctx, escape = false, span = false, keys = span, path = [
    0
])=>_serialize(tree, ctx, escape, span, keys, path)
;
const _serialize = (tree, ctx, esc, span, keys, path)=>tree == null ? "" : Array.isArray(tree) ? serializeElement(tree, ctx, esc, span, keys, path) : _isFunction.isFunction(tree) ? _serialize(tree(ctx), ctx, esc, span, keys, path) : _implementsFunction.implementsFunction(tree, "toHiccup") ? _serialize(tree.toHiccup(ctx), ctx, esc, span, keys, path) : _deref.isDeref(tree) ? _serialize(tree.deref(), ctx, esc, span, keys, path) : _isNotStringIterable.isNotStringAndIterable(tree) ? serializeIter(tree, ctx, esc, span, keys, path) : (tree = esc ? _entities.escapeEntities(String(tree)) : String(tree), span) ? `<span${keys ? ` key="${path.join("-")}"` : ""}>${tree}</span>` : tree
;
const serializeElement = (tree, ctx, esc, span, keys, path)=>{
    let tag = tree[0];
    return !tree.length ? "" : _isFunction.isFunction(tag) ? _serialize(tag.apply(null, [
        ctx,
        ...tree.slice(1)
    ]), ctx, esc, span, keys, path) : _implementsFunction.implementsFunction(tag, "render") ? _serialize(tag.render.apply(null, [
        ctx,
        ...tree.slice(1)
    ]), ctx, esc, span, keys, path) : tag === _apiJs.COMMENT ? serializeComment(tree) : tag == _apiJs.CDATA ? serializeCData(tree) : _isString.isString(tag) ? serializeTag(tree, ctx, esc, span, keys, path) : _isNotStringIterable.isNotStringAndIterable(tree) ? serializeIter(tree, ctx, esc, span, keys, path) : _illegalArguments.illegalArgs(`invalid tree node: ${tree}`);
};
const serializeTag = (tree, ctx, esc, span, keys, path)=>{
    tree = _normalizeJs.normalize(tree);
    const attribs = tree[1];
    if (attribs.__skip || attribs.__serialize === false) return "";
    keys && attribs.key === undefined && (attribs.key = path.join("-"));
    const tag = tree[0];
    const body = tree[2] ? serializeBody(tag, tree[2], ctx, esc, span, keys, path) : !_apiJs.VOID_TAGS[tag] && !_apiJs.NO_CLOSE_EMPTY[tag] ? `></${tag}>` : _apiJs.PROC_TAGS[tag] || "/>";
    return `<${tag}${serializeAttribs(attribs, esc)}${body}`;
};
const serializeAttribs = (attribs, esc)=>{
    let res = "";
    for(let a in attribs){
        if (a.startsWith("__")) continue;
        const v = serializeAttrib(attribs, a, _deref.deref(attribs[a]), esc);
        v != null && (res += v);
    }
    return res;
};
const serializeAttrib = (attribs, a, v, esc)=>{
    return v == null ? null : _isFunction.isFunction(v) && (/^on\w+/.test(a) || (v = v(attribs)) == null) ? null : v === true ? " " + a : v === false ? null : a === "data" ? serializeDataAttribs(v, esc) : attribPair(a, v, esc);
};
const attribPair = (a, v, esc)=>{
    v = a === "style" && _isPlainObject.isPlainObject(v) ? _cssJs.css(v) : a === "prefix" && _isPlainObject.isPlainObject(v) ? _prefixJs.formatPrefixes(v) : _isArray.isArray(v) ? v.join(_apiJs.ATTRIB_JOIN_DELIMS[a] || " ") : v.toString();
    return v.length ? ` ${a}="${esc ? _entities.escapeEntities(v) : v}"` : null;
};
const serializeDataAttribs = (data, esc)=>{
    let res = "";
    for(let id in data){
        let v = _deref.deref(data[id]);
        _isFunction.isFunction(v) && (v = v(data));
        v != null && (res += ` data-${id}="${esc ? _entities.escapeEntities(v) : v}"`);
    }
    return res;
};
const serializeBody = (tag, body, ctx, esc, span, keys, path)=>{
    if (_apiJs.VOID_TAGS[tag]) _illegalArguments.illegalArgs(`No body allowed in tag: ${tag}`);
    const proc = _apiJs.PROC_TAGS[tag];
    let res = proc ? " " : ">";
    span = span && !proc && !_apiJs.NO_SPANS[tag];
    for(let i = 0, n = body.length; i < n; i++)res += _serialize(body[i], ctx, esc, span, keys, [
        ...path,
        i
    ]);
    return res + (proc || `</${tag}>`);
};
const serializeComment = (tree)=>tree.length > 2 ? `\n<!--\n${tree.slice(1).map((x)=>"    " + x
    ).join("\n")}\n-->\n` : `\n<!-- ${tree[1]} -->\n`
;
const serializeCData = (tree)=>`<![CDATA[\n${tree.slice(1).join("\n")}\n]]>`
;
const serializeIter = (iter, ctx, esc, span, keys, path)=>{
    const res = [];
    const p = path.slice(0, path.length - 1);
    let k = 0;
    for (let i of iter)res.push(_serialize(i, ctx, esc, span, keys, [
        ...p,
        k++
    ]));
    return res.join("");
};

},{"@thi.ng/api/deref":"70I2T","@thi.ng/checks/implements-function":"cjrzK","@thi.ng/checks/is-array":"cOR5q","@thi.ng/checks/is-function":"4VSWl","@thi.ng/checks/is-not-string-iterable":"gGPzP","@thi.ng/checks/is-plain-object":"cv2RJ","@thi.ng/checks/is-string":"1uZe6","@thi.ng/errors/illegal-arguments":"co01S","@thi.ng/strings/entities":"eS00A","./api.js":"aHywZ","./css.js":"7vPEF","./normalize.js":"73Zmi","./prefix.js":"eEfHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70I2T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDeref", ()=>isDeref
);
parcelHelpers.export(exports, "deref", ()=>deref
);
const isDeref = (x)=>x != null && typeof x["deref"] === "function"
;
const deref = (x)=>isDeref(x) ? x.deref() : x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VSWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
const isFunction = (x)=>typeof x === "function"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGPzP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNotStringAndIterable", ()=>isNotStringAndIterable
);
const isNotStringAndIterable = (x)=>x != null && typeof x !== "string" && typeof x[Symbol.iterator] === "function"
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cv2RJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
const OBJP = Object.getPrototypeOf;
const isPlainObject = (x)=>{
    let p;
    return x != null && typeof x === "object" && ((p = OBJP(x)) === null || OBJP(p) === null);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"co01S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IllegalArgumentError", ()=>IllegalArgumentError
);
parcelHelpers.export(exports, "illegalArgs", ()=>illegalArgs
);
var _deferrorJs = require("./deferror.js");
const IllegalArgumentError = _deferrorJs.defError(()=>"illegal argument(s)"
);
const illegalArgs = (msg)=>{
    throw new IllegalArgumentError(msg);
};

},{"./deferror.js":"l9nQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eS00A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENTITIES", ()=>ENTITIES
);
parcelHelpers.export(exports, "RE_ENTITIES", ()=>RE_ENTITIES
);
parcelHelpers.export(exports, "ENTITIES_REV", ()=>ENTITIES_REV
);
parcelHelpers.export(exports, "RE_ENTITIES_REV", ()=>RE_ENTITIES_REV
);
parcelHelpers.export(exports, "escapeEntities", ()=>escapeEntities
);
parcelHelpers.export(exports, "unescapeEntities", ()=>unescapeEntities
);
const ENTITIES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
    "—": "&mdash;",
    "–": "&ndash;",
    "…": "&hellip;",
    "¢": "&cent;",
    "€": "&euro;",
    "£": "&pound;",
    "§": "&sect;",
    "©": "&copy;",
    "®": "&reg;",
    "™": "&trade;",
    "\xa0": "&nbsp;"
};
const RE_ENTITIES = new RegExp(`[${Object.keys(ENTITIES).join("")}]`, "g");
const ENTITIES_REV = Object.entries(ENTITIES).reduce((acc, [k, v])=>(acc[v] = k, acc)
, {});
const RE_ENTITIES_REV = new RegExp(`(${Object.keys(ENTITIES_REV).join("|")})`, "g");
const $esc = (re, index)=>(src)=>src.replace(re, (x)=>index[x]
        )
;
const escapeEntities = $esc(RE_ENTITIES, ENTITIES);
const unescapeEntities = $esc(RE_ENTITIES_REV, ENTITIES_REV);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHywZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PROC_TAGS", ()=>PROC_TAGS
);
parcelHelpers.export(exports, "RE_TAG", ()=>RE_TAG
);
parcelHelpers.export(exports, "COMMENT", ()=>COMMENT
);
parcelHelpers.export(exports, "CDATA", ()=>CDATA
);
parcelHelpers.export(exports, "NO_SPANS", ()=>NO_SPANS
);
parcelHelpers.export(exports, "SVG_TAGS", ()=>SVG_TAGS
);
parcelHelpers.export(exports, "VOID_TAGS", ()=>VOID_TAGS
);
parcelHelpers.export(exports, "NO_CLOSE_EMPTY", ()=>NO_CLOSE_EMPTY
);
parcelHelpers.export(exports, "ATTRIB_JOIN_DELIMS", ()=>ATTRIB_JOIN_DELIMS
);
const PROC_TAGS = {
    "?xml": "?>\n",
    "!DOCTYPE": ">\n",
    "!ENTITY": ">\n",
    "!ELEMENT": ">\n",
    "!ATTLIST": ">\n"
};
const RE_TAG = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/;
const COMMENT = "__COMMENT__";
const CDATA = "!CDATA";
const NO_SPANS = {
    button: 1,
    option: 1,
    script: 1,
    style: 1,
    text: 1,
    textarea: 1,
    title: 1
};
const tagMap = (tags)=>tags.split(" ").reduce((acc, x)=>(acc[x] = true, acc)
    , {})
;
const SVG_TAGS = tagMap("animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view");
const VOID_TAGS = tagMap("area base br col command embed hr img input keygen link meta param source stop track use wbr ?xml");
const NO_CLOSE_EMPTY = tagMap("animate circle ellipse line path polygon polyline rect");
const ATTRIB_JOIN_DELIMS = {
    accept: ",",
    sizes: ",",
    srcset: ","
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7vPEF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css
);
var _deref = require("@thi.ng/api/deref");
var _isFunction = require("@thi.ng/checks/is-function");
const css = (rules)=>{
    let css1 = "";
    let v;
    for(let r in rules){
        v = _deref.deref(rules[r]);
        _isFunction.isFunction(v) && (v = v(rules));
        v != null && (css1 += `${r}:${v};`);
    }
    return css1;
};

},{"@thi.ng/api/deref":"70I2T","@thi.ng/checks/is-function":"4VSWl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73Zmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
var _isPlainObject = require("@thi.ng/checks/is-plain-object");
var _isString = require("@thi.ng/checks/is-string");
var _illegalArguments = require("@thi.ng/errors/illegal-arguments");
var _apiJs = require("./api.js");
var _attribsJs = require("./attribs.js");
const normalize = (tag)=>{
    let name = tag[0];
    let match;
    const hasAttribs = _isPlainObject.isPlainObject(tag[1]);
    const attribs = hasAttribs ? {
        ...tag[1]
    } : {};
    if (!_isString.isString(name) || !(match = _apiJs.RE_TAG.exec(name))) _illegalArguments.illegalArgs(`"${name}" is not a valid tag name`);
    name = match[1];
    _attribsJs.mergeEmmetAttribs(attribs, match[2], match[3]);
    if (tag.length > 1) {
        tag = tag.slice(hasAttribs ? 2 : 1).filter((x)=>x != null
        );
        if (tag.length > 0) return [
            name,
            attribs,
            tag
        ];
    }
    return [
        name,
        attribs
    ];
};

},{"@thi.ng/checks/is-plain-object":"cv2RJ","@thi.ng/checks/is-string":"1uZe6","@thi.ng/errors/illegal-arguments":"co01S","./api.js":"aHywZ","./attribs.js":"kftXr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kftXr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeClasses", ()=>mergeClasses
);
parcelHelpers.export(exports, "mergeEmmetAttribs", ()=>mergeEmmetAttribs
);
var _deref = require("@thi.ng/api/deref");
var _isString = require("@thi.ng/checks/is-string");
const mergeClasses = (existing, val)=>{
    val = _deref.deref(val);
    if (val == null) return existing;
    if (_isString.isString(val)) return existing + " " + val;
    const classes = new Set(existing.split(" "));
    for(let id in val)_deref.deref(val[id]) ? classes.add(id) : classes.delete(id);
    return [
        ...classes
    ].join(" ");
};
const mergeEmmetAttribs = (attribs, id, classes)=>{
    id && (attribs.id = id);
    let aclass = _deref.deref(attribs.class);
    if (classes) {
        classes = classes.replace(/\./g, " ");
        attribs.class = aclass ? mergeClasses(classes, aclass) : classes;
    } else if (aclass) attribs.class = _isString.isString(aclass) ? aclass : mergeClasses("", aclass);
    return attribs;
};

},{"@thi.ng/api/deref":"70I2T","@thi.ng/checks/is-string":"1uZe6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEfHc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatPrefixes", ()=>formatPrefixes
);
const formatPrefixes = (prefixes)=>Object.keys(prefixes).reduce((acc, k)=>(acc.push(`${k}: ${prefixes[k]}`), acc)
    , []).join(" ")
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aK2w1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "barChartHLines", ()=>barChartHLines
);
parcelHelpers.export(exports, "barChartHStr", ()=>barChartHStr
);
parcelHelpers.export(exports, "barChartVLines", ()=>barChartVLines
);
parcelHelpers.export(exports, "barChartVStr", ()=>barChartVStr
);
parcelHelpers.export(exports, "barHorizontal", ()=>barHorizontal
);
parcelHelpers.export(exports, "barVertical", ()=>barVertical
);
var _fit = require("@thi.ng/math/fit");
var _prec = require("@thi.ng/math/prec");
var _padLeft = require("@thi.ng/strings/pad-left");
var _padRight = require("@thi.ng/strings/pad-right");
var _repeat = require("@thi.ng/strings/repeat");
var _map = require("@thi.ng/transducers/map");
var _apiJs = require("./api.js");
const barChartHLines = (height, vals, min = 0, max = 1)=>{
    const bars = [
        ..._map.map((x)=>barVertical(height, x, min, max, "")
        , vals)
    ];
    const num = bars.length;
    const res = [];
    for(let i = 0; i < height; i++){
        let line = "";
        for(let j = 0; j < num; j++)line += bars[j][i];
        res.push(line);
    }
    return res;
};
const barChartHStr = (height, vals, min, max)=>barChartHLines(height, vals, min, max).join("\n")
;
const barChartVLines = (width, vals, min = 0, max = 1)=>[
        ..._map.map((x)=>barHorizontal(width, x, min, max)
        , vals)
    ]
;
const barChartVStr = (width, vals, min, max)=>barChartVLines(width, vals, min, max).join("\n")
;
const barHorizontal = (width, x, min = 0, max = 1)=>bar(_apiJs.BARS_H, width, false, x, min, max, "")
;
const barVertical = (height, x, min = 0, max = 1, delim = "\n")=>bar(_apiJs.BARS_V, height, true, x, min, max, delim)
;
const bar = (chars, size, left, x, min, max, delim)=>{
    x = _fit.fitClamped(x, min, max, 0, size);
    const f = _prec.fract(x) * 9 | 0;
    const full = _repeat.repeat(chars[8] + delim, x | 0);
    const partial = f > 0 ? chars[f] + delim : "";
    size += size * delim.length;
    return left ? _padLeft.padLeft(size, " ")(partial + full) : _padRight.padRight(size, " ")(full + partial);
};

},{"@thi.ng/math/fit":"8JCov","@thi.ng/math/prec":"7e7rg","@thi.ng/strings/pad-left":"jyWQa","@thi.ng/strings/pad-right":"hnIPe","@thi.ng/strings/repeat":"jrSWh","@thi.ng/transducers/map":"fW6Xn","./api.js":"jEY8m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnIPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "padRight", ()=>padRight
);
var _memoizej = require("@thi.ng/memoize/memoizej");
var _repeatJs = require("./repeat.js");
const padRight = _memoizej.memoizeJ((n, ch = " ")=>{
    const buf = _repeatJs.repeat(String(ch), n);
    return (x, len)=>{
        if (x == null) return buf;
        x = x.toString();
        len = len !== undefined ? len : x.length;
        return len < n ? x + buf.substring(len) : x;
    };
});

},{"@thi.ng/memoize/memoizej":"kpZq7","./repeat.js":"jrSWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEY8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Align", ()=>Align
);
parcelHelpers.export(exports, "Border", ()=>Border
);
parcelHelpers.export(exports, "STYLE_ASCII", ()=>STYLE_ASCII
);
parcelHelpers.export(exports, "STYLE_THIN", ()=>STYLE_THIN
);
parcelHelpers.export(exports, "STYLE_THIN_ROUNDED", ()=>STYLE_THIN_ROUNDED
);
parcelHelpers.export(exports, "STYLE_DASHED", ()=>STYLE_DASHED
);
parcelHelpers.export(exports, "STYLE_DASHED_ROUNDED", ()=>STYLE_DASHED_ROUNDED
);
parcelHelpers.export(exports, "STYLE_DOUBLE", ()=>STYLE_DOUBLE
);
parcelHelpers.export(exports, "ENDINGS", ()=>ENDINGS
);
parcelHelpers.export(exports, "BARS_H", ()=>BARS_H
);
parcelHelpers.export(exports, "BARS_V", ()=>BARS_V
);
parcelHelpers.export(exports, "SHADES_ASCII_10", ()=>SHADES_ASCII_10
);
parcelHelpers.export(exports, "SHADES_ASCII_16", ()=>SHADES_ASCII_16
);
parcelHelpers.export(exports, "SHADES_BLOCK", ()=>SHADES_BLOCK
);
parcelHelpers.export(exports, "SHADES_BLOCK_ALT", ()=>SHADES_BLOCK_ALT
);
var Align;
(function(Align1) {
    Align1[Align1["LEFT"] = 0] = "LEFT";
    Align1[Align1["RIGHT"] = 1] = "RIGHT";
    Align1[Align1["CENTER"] = 2] = "CENTER";
})(Align || (Align = {}));
var Border;
(function(Border1) {
    Border1[Border1["NONE"] = 0] = "NONE";
    Border1[Border1["H"] = 1] = "H";
    Border1[Border1["V"] = 2] = "V";
    Border1[Border1["ALL"] = 3] = "ALL";
    Border1[Border1["FRAME"] = 4] = "FRAME";
    Border1[Border1["FRAME_H"] = 5] = "FRAME_H";
    Border1[Border1["FRAME_V"] = 6] = "FRAME_V";
})(Border || (Border = {}));
const STYLE_ASCII = {
    hl: "-",
    vl: "|",
    tl: "+",
    tr: "+",
    bl: "+",
    br: "+",
    tjl: "+",
    tjr: "+",
    tjt: "+",
    tjb: "+",
    jct: "+",
    dot: "."
};
const STYLE_THIN = {
    hl: "─",
    vl: "│",
    tl: "┌",
    tr: "┐",
    bl: "└",
    br: "┘",
    tjl: "├",
    tjr: "┤",
    tjt: "┬",
    tjb: "┴",
    jct: "┼",
    dot: "•"
};
const STYLE_THIN_ROUNDED = {
    ...STYLE_THIN,
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯"
};
const STYLE_DASHED = {
    ...STYLE_THIN,
    hl: "╌",
    vl: "┆"
};
const STYLE_DASHED_ROUNDED = {
    ...STYLE_DASHED,
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯"
};
const STYLE_DOUBLE = {
    hl: "═",
    vl: "║",
    tl: "╔",
    tr: "╗",
    bl: "╚",
    br: "╝",
    tjl: "╠",
    tjr: "╣",
    tjt: "╦",
    tjb: "╩",
    jct: "╬",
    dot: "•"
};
const ENDINGS = "()[]{}<>^v◀▶▲▼•●";
const BARS_H = " ▏▎▍▌▋▊▉█";
const BARS_V = " ▁▂▃▄▅▆▇█";
const SHADES_ASCII_10 = " .-:=+*#%@";
const SHADES_ASCII_16 = " .,:|+*=il3GOWQ0";
const SHADES_BLOCK = " ░▒▓█";
const SHADES_BLOCK_ALT = " ▖▞▟█";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsaX0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "varToHiccup", ()=>varToHiccup
);
parcelHelpers.export(exports, "varToSvg", ()=>varToSvg
);
var _convert = require("@thi.ng/hiccup-svg/convert");
var _svg = require("@thi.ng/hiccup-svg/svg");
var _serialize = require("@thi.ng/hiccup/serialize");
var _fit = require("@thi.ng/math/fit");
var _interval = require("@thi.ng/math/interval");
const varToHiccup = ({ domain: [min, max] , terms  }, opts = {})=>{
    const { samples , width , height , labels , stroke: strokeFn , fill: fillFn ,  } = {
        samples: 200,
        width: 600,
        height: 100,
        labels: true,
        stroke: (x)=>`hsl(${x * 360 | 0},100%,40%)`
        ,
        fill: (x)=>`hsla(${x * 360 | 0},100%,50%,20%)`
        ,
        ...opts
    };
    const keys = Object.keys(terms);
    const dt = (max - min) / samples;
    const ds = width / samples;
    const dn = 1 / keys.length;
    const curves = [];
    const legend = [];
    for(let i = 0; i < keys.length; i++){
        const id = keys[i];
        const f = terms[id];
        const y = (i + 1) * 12;
        const stroke = strokeFn(i * dn);
        const curr = [];
        for(let i1 = 0; i1 <= samples; i1++)curr.push([
            i1 * ds,
            (1 - f(min + i1 * dt)) * height
        ]);
        curr.push([
            width,
            height
        ], [
            0,
            height
        ]);
        curves.push([
            "polygon",
            {
                stroke,
                fill: fillFn(i * dn)
            },
            curr, 
        ]);
        if (labels) legend.push([
            "line",
            {
                stroke
            },
            [
                0,
                y
            ],
            [
                20,
                y
            ]
        ], [
            "text",
            {
                baseline: "middle",
                fill: "black"
            },
            [
                30,
                y
            ],
            id, 
        ]);
    }
    const zero = _fit.fit(0, min, max, 0, width);
    return _svg.svg({
        width,
        height: height + 12,
        fill: "none",
        "font-family": "sans-serif",
        "font-size": 10
    }, ...curves, ...legend, _interval.inRange(zero, width * 0.05, width * 0.95) ? [
        "g",
        {},
        [
            "line",
            {
                stroke: "black",
                dash: [
                    1,
                    1
                ]
            },
            [
                zero,
                0
            ],
            [
                zero,
                height
            ], 
        ],
        [
            "text",
            {
                align: "center",
                fill: "black"
            },
            [
                zero,
                height + 10
            ],
            "0.00", 
        ], 
    ] : null, [
        "g",
        {
            fill: "black"
        },
        [
            "text",
            {},
            [
                0,
                height + 10
            ],
            min.toFixed(2)
        ],
        [
            "text",
            {
                align: "end"
            },
            [
                width,
                height + 10
            ],
            max.toFixed(2)
        ], 
    ]);
};
const varToSvg = ($var, opts)=>_serialize.serialize(_convert.convertTree(varToHiccup($var, opts)))
;

},{"@thi.ng/hiccup-svg/convert":"4tYbL","@thi.ng/hiccup-svg/svg":"9TyfA","@thi.ng/hiccup/serialize":"aU5ZC","@thi.ng/math/fit":"8JCov","@thi.ng/math/interval":"1TDWA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9TyfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svg", ()=>svg
);
var _xml = require("@thi.ng/prefixes/xml");
var _convertJs = require("./convert.js");
var _formatJs = require("./format.js");
const svg = (attribs, ...body)=>{
    attribs = _formatJs.fattribs({
        version: "1.1",
        xmlns: _xml.XML_SVG,
        "xmlns:xlink": _xml.XML_XLINK,
        ...attribs
    }, "width", "height", "stroke-width");
    if (attribs.convert) {
        delete attribs.convert;
        body = body.map(_convertJs.convertTree);
    }
    return [
        "svg",
        attribs,
        ...body
    ];
};

},{"@thi.ng/prefixes/xml":"4Y3jZ","./convert.js":"4tYbL","./format.js":"2MpCW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Y3jZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XML", ()=>XML
);
parcelHelpers.export(exports, "XML_FN", ()=>XML_FN
);
parcelHelpers.export(exports, "XML_FO", ()=>XML_FO
);
parcelHelpers.export(exports, "XML_SVG", ()=>XML_SVG
);
parcelHelpers.export(exports, "XML_XHTML", ()=>XML_XHTML
);
parcelHelpers.export(exports, "XML_XLINK", ()=>XML_XLINK
);
parcelHelpers.export(exports, "XML_XMLNS", ()=>XML_XMLNS
);
parcelHelpers.export(exports, "XML_XSD", ()=>XML_XSD
);
parcelHelpers.export(exports, "XML_XSL", ()=>XML_XSL
);
const XML = "http://www.w3.org/XML/1998/namespace";
const XML_FN = "http://www.w3.org/2005/xpath-functions";
const XML_FO = "http://www.w3.org/1999/XSL/Format";
const XML_SVG = "http://www.w3.org/2000/svg";
const XML_XHTML = "http://www.w3.org/1999/xhtml";
const XML_XLINK = "http://www.w3.org/1999/xlink";
const XML_XMLNS = "http://www.w3.org/2000/xmlns/";
const XML_XSD = "http://www.w3.org/2001/XMLSchema";
const XML_XSL = "http://www.w3.org/1999/XSL/Transform";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iU6IE":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"ig8ew":[function(require,module,exports) {
module.exports = console;

},{}],"fUl09":[function(require,module,exports) {
var global = arguments[3];
var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};
var minDoc = require('min-document');
var doccy;
if (typeof document !== 'undefined') doccy = document;
else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
    if (!doccy) doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
}
module.exports = doccy;

},{"min-document":"jhUEF"}],"gr1Cz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataclass", ()=>dataclass
);
// Transcrypt'ed from Python, 2022-05-10 08:40:21
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = 'dataclasses';
var dataclass = null;

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyJGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pi", ()=>pi
);
parcelHelpers.export(exports, "e", ()=>e
);
parcelHelpers.export(exports, "exp", ()=>exp
);
parcelHelpers.export(exports, "expm1", ()=>expm1
);
parcelHelpers.export(exports, "log", ()=>log
);
parcelHelpers.export(exports, "log1p", ()=>log1p
);
parcelHelpers.export(exports, "log2", ()=>log2
);
parcelHelpers.export(exports, "log10", ()=>log10
);
parcelHelpers.export(exports, "pow", ()=>pow
);
parcelHelpers.export(exports, "sqrt", ()=>sqrt
);
parcelHelpers.export(exports, "sin", ()=>sin
);
parcelHelpers.export(exports, "cos", ()=>cos
);
parcelHelpers.export(exports, "tan", ()=>tan
);
parcelHelpers.export(exports, "asin", ()=>asin
);
parcelHelpers.export(exports, "acos", ()=>acos
);
parcelHelpers.export(exports, "atan", ()=>atan
);
parcelHelpers.export(exports, "atan2", ()=>atan2
);
parcelHelpers.export(exports, "hypot", ()=>hypot
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
parcelHelpers.export(exports, "radians", ()=>radians
);
parcelHelpers.export(exports, "sinh", ()=>sinh
);
parcelHelpers.export(exports, "cosh", ()=>cosh
);
parcelHelpers.export(exports, "tanh", ()=>tanh
);
parcelHelpers.export(exports, "asinh", ()=>asinh
);
parcelHelpers.export(exports, "acosh", ()=>acosh
);
parcelHelpers.export(exports, "atanh", ()=>atanh
);
parcelHelpers.export(exports, "floor", ()=>floor
);
parcelHelpers.export(exports, "ceil", ()=>ceil
);
parcelHelpers.export(exports, "trunc", ()=>trunc
);
parcelHelpers.export(exports, "isnan", ()=>isnan
);
parcelHelpers.export(exports, "inf", ()=>inf
);
parcelHelpers.export(exports, "nan", ()=>nan
);
parcelHelpers.export(exports, "modf", ()=>modf
);
// Transcrypt'ed from Python, 2022-05-10 08:40:21
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = 'math';
var pi = Math.PI;
var e = Math.E;
var exp = Math.exp;
var expm1 = function(x) {
    return Math.exp(x) - 1;
};
var log = function(x, base) {
    return base === undefined ? Math.log(x) : Math.log(x) / Math.log(base);
};
var log1p = function(x) {
    return Math.log(x + 1);
};
var log2 = function(x) {
    return Math.log(x) / Math.LN2;
};
var log10 = function(x) {
    return Math.log(x) / Math.LN10;
};
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var asin = Math.asin;
var acos = Math.acos;
var atan = Math.atan;
var atan2 = Math.atan2;
var hypot = Math.hypot;
var degrees = function(x) {
    return x * 180 / Math.PI;
};
var radians = function(x) {
    return x * Math.PI / 180;
};
var sinh = Math.sinh;
var cosh = Math.cosh;
var tanh = Math.tanh;
var asinh = Math.asinh;
var acosh = Math.acosh;
var atanh = Math.atanh;
var floor = Math.floor;
var ceil = Math.ceil;
var trunc = Math.trunc;
var isnan = isNaN;
var inf = Infinity;
var nan = NaN;
var modf = function(n) {
    var sign = n >= 0 ? 1 : -1;
    var __left0__ = _orgTranscryptRuntimeJs.divmod(_orgTranscryptRuntimeJs.abs(n), 1);
    var f = __left0__[0];
    var mod = __left0__[1];
    return _orgTranscryptRuntimeJs.tuple([
        mod * sign,
        f * sign
    ]);
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJZlQ":[function() {},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire9f4d")

//# sourceMappingURL=index.975ef6c8.js.map
