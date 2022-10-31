/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 430:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(757);
const exec = __nccwpck_require__(372);
const io = __nccwpck_require__(447);

async function cleanup() {
  const path = core.getInput('settings-xml-path', { required: true });
  await io.rmRF(path);
}

module.exports = cleanup;

if (require.main === require.cache[eval('__filename')]) {
  cleanup();
}


/***/ }),

/***/ 757:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = eval("require")("@actions/exec");


/***/ }),

/***/ 447:
/***/ ((module) => {

module.exports = eval("require")("@actions/io");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(430);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;