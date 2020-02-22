// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var n = 1;
var string = "\n\u753B\u4E2A\u76AE\u5361\u4E18\u7ED9\u4F60\u770B\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n*::before,*::after{\n    box-sizing: border-box;\n}\n#demo{\n    height:65vh;\n    background: #FFE600;\n}\n.skin{\n    position: relative;\n}\n.triangle{\n    /* width:10px;\n    height: 10px; */\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    margin-left: -10px;\n    z-index: 10;\n}\n@keyframes wave{\n    0%{\n        transform:rotate(0deg);\n    }\n    33%{\n        transform:rotate(10deg);\n    }\n    66%{\n        transform:rotate(-10deg);\n    }\n    100%{\n        transform:rotate(0deg);\n    }\n}\n.triangle:hover{\n    transform-origin: 50% 100%;\n    animation: wave 0.8s infinite;\n}\n.circle{\n    background-color: black;\n    position: absolute;\n    width: 19px;\n    height: 6px;\n    border: 1px solid black;\n    top:-15px;\n    left: -9.5px;\n    border-radius: 10px 10px 0 0;\n}\n.eyeLeft{\n    border: 2px solid rgb(0, 0, 0);\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n     transform: translateX(-100px); \n    background-color: rgb(46, 46, 46);\n} \n.eyeRight{\n    border: 2px solid rgb(0, 0, 0);\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n     transform: translateX(100px); \n    background-color: rgb(46, 46, 46);\n} \n .eyeLeft::before{\n    content: '';\n    display: block;/*\u4F2A\u7C7B\u5143\u7D20before\u9ED8\u8BA4\u662F\u4E00\u4E2Aspan\u5143\u7D20*/\n    width: 20px;\n    height: 20px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    top: 2px;\n    left: 10px;\n}\n.eyeRight::before{\n    content: '';\n    display: block;/*\u4F2A\u7C7B\u5143\u7D20before\u9ED8\u8BA4\u662F\u4E00\u4E2Aspan\u5143\u7D20*/\n    width: 20px;\n    height: 20px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    top:2px;\n    left:10px;\n} \n.mouth{\n    /*border-color: blue black yellow green;\u4E0A\u53F3\u4E0B\u5DE6*/\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 180px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    top: -10px;\n    z-index: 1;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n    margin-left: -50px;\n}\n.mouth .up .lip{\n    border: 5px solid black; \n    height: 30px;\n    width:100px;\n    border-top-color: transparent;\n    border-right-color: transparent; \n    position: absolute;\n    left: 50%;\n    background: #FFE600;\n}\n.mouth .up .lip::before{\n    content: '';\n    position: absolute;\n    display: block;\n    width: 11px;\n    height: 25px;\n    background: #FFE600;\n    bottom: 0;\n}\n.mouth .up .lip.left::before{\n    right: -5px;\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0px;\n    transform: rotate(15deg) translateX(53px);\n    margin-left: -50px;\n}\n.mouth .up .lip.right::before{\n    left: -5px;\n}\n.mouth .down{\n    height: 230px;\n    position: absolute;\n    top: 15px;\n    width: 100%;\n    overflow: hidden;\n}\n.mouth .down .circle1{\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom:0;\n    left: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background:  rgb(155, 0, 10);\n    overflow: hidden;\n}\n.mouth .down .circle1 .circle2{\n    /* border: 1px solid green; */\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    background: rgb(255, 72, 95);\n    bottom: -95px;\n    left: 50%;\n    border-radius: 50%;\n    margin-left: -100px;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n    background: rgb(255, 0, 0);\n}\n .face.left{\n    transform: translateX(-300px);\n    border-radius: 50%;\n} \n.face.right{\n    transform: translateX(300px);\n    border-radius: 50%;\n}\n.face>img{\n   position: absolute;\n   top: 50%;\n   left: 50%;\n}\n.face.right>img{\n    transform: translateY(180deg);\n    transform-origin: 0 0;\n}";
demo1.innerHTML = string.substring(0, n);
console.log(n);
var id = setInterval(function () {
  n = n + 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  console.log(n + ':' + string.substring(0, n));
  demo1.innerHTML = string.substring(0, n);
  demo2.innerText = string.substring(0, n);
  demo2.scrollTop = demo2.scrollHeight;
}, 15);
},{}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57993" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map