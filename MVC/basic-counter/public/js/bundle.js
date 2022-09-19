/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// CONTROLLER - accepts instructions from the VIEW and informs the MODEL
// what actions or changes to carry out, which will (potentially) go on to
// affect whatever is rendered to the user via the VIEW
var MutableNumberController = /** @class */ (function () {
    function MutableNumberController(model, view) {
        var _this = this;
        this.model = model;
        this.view = view;
        this.model.registerChangeCallback(function () { return _this.view.renderUpdate(); });
        this.view.registerIncrementHandler(function () { return _this.model.increment(); });
        this.view.registerDecrementHandler(function () { return _this.model.decrement(); });
    }
    return MutableNumberController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutableNumberController);


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// MODEL - Describes the data and how business logic manipulates that data.
// Changes in the data will manifest in changes to the view
var MutableNumberModel = /** @class */ (function () {
    function MutableNumberModel(value) {
        this.value = value;
    }
    MutableNumberModel.prototype.increment = function () {
        this.value++;
        this._onChangeCallback();
    };
    MutableNumberModel.prototype.decrement = function () {
        this.value--;
        this._onChangeCallback();
    };
    MutableNumberModel.prototype.registerChangeCallback = function (cb) {
        this._onChangeCallback = cb;
    };
    return MutableNumberModel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutableNumberModel);


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// VIEW - Describes how the MODEL is rendered to the UI and invokes the
// controller whenever there is an ation that needs to occur.
var MutableNumberView = /** @class */ (function () {
    function MutableNumberView(model) {
        this._model = model;
    }
    MutableNumberView.prototype.registerIncrementHandler = function (cb) {
        this.handleIncrement = cb;
    };
    MutableNumberView.prototype.registerDecrementHandler = function (cb) {
        this.handleDecrement = cb;
    };
    MutableNumberView.prototype.renderUpdate = function () {
        this.numberSpan.textContent = this._model.value.toString();
    };
    MutableNumberView.prototype.renderInitial = function () {
        var _this = this;
        this.container = document.createElement('div');
        this.numberSpan = document.createElement('span');
        this.incrementButton = document.createElement('button');
        this.decrementButton = document.createElement('button');
        this.incrementButton.textContent = '+';
        this.decrementButton.textContent = '-';
        this.incrementButton.onclick = function () { return _this.handleIncrement(); };
        this.decrementButton.onclick = function () { return _this.handleDecrement(); };
        this.container.appendChild(this.decrementButton);
        this.container.appendChild(this.numberSpan);
        this.container.appendChild(this.incrementButton);
        this.renderUpdate();
        return this.container;
    };
    return MutableNumberView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutableNumberView);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");



var model = new _model__WEBPACK_IMPORTED_MODULE_0__["default"](33);
var view = new _view__WEBPACK_IMPORTED_MODULE_1__["default"](model);
var controller = new _controller__WEBPACK_IMPORTED_MODULE_2__["default"](model, view);
document.body.appendChild(view.renderInitial());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUztJQUN2QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsaUJBQWlCOzs7Ozs7O1VDakRoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRjtBQUNZO0FBRWxELElBQU0sS0FBSyxHQUFHLElBQUksOENBQWtCLENBQUMsRUFBRSxDQUFDO0FBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksNkNBQWlCLENBQUMsS0FBSyxDQUFDO0FBQ3pDLElBQU0sVUFBVSxHQUFHLElBQUksbURBQXVCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztBQUUzRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMvLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRST0xMRVIgLSBhY2NlcHRzIGluc3RydWN0aW9ucyBmcm9tIHRoZSBWSUVXIGFuZCBpbmZvcm1zIHRoZSBNT0RFTFxuLy8gd2hhdCBhY3Rpb25zIG9yIGNoYW5nZXMgdG8gY2Fycnkgb3V0LCB3aGljaCB3aWxsIChwb3RlbnRpYWxseSkgZ28gb24gdG9cbi8vIGFmZmVjdCB3aGF0ZXZlciBpcyByZW5kZXJlZCB0byB0aGUgdXNlciB2aWEgdGhlIFZJRVdcblxuaW1wb3J0IE11dGFibGVOdW1iZXJNb2RlbCBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IE11dGFibGVOdW1iZXJWaWV3IGZyb20gJy4vdmlldydcblxuY2xhc3MgTXV0YWJsZU51bWJlckNvbnRyb2xsZXIge1xuICBtb2RlbDogTXV0YWJsZU51bWJlck1vZGVsXG4gIHZpZXc6IE11dGFibGVOdW1iZXJWaWV3XG5cbiAgY29uc3RydWN0b3IobW9kZWw6IE11dGFibGVOdW1iZXJNb2RlbCwgdmlldzogYW55KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMubW9kZWwucmVnaXN0ZXJDaGFuZ2VDYWxsYmFjaygoKSA9PiB0aGlzLnZpZXcucmVuZGVyVXBkYXRlKCkpXG4gICAgdGhpcy52aWV3LnJlZ2lzdGVySW5jcmVtZW50SGFuZGxlcigoKSA9PiB0aGlzLm1vZGVsLmluY3JlbWVudCgpKVxuICAgIHRoaXMudmlldy5yZWdpc3RlckRlY3JlbWVudEhhbmRsZXIoKCkgPT4gdGhpcy5tb2RlbC5kZWNyZW1lbnQoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXRhYmxlTnVtYmVyQ29udHJvbGxlclxuIiwiLy8gTU9ERUwgLSBEZXNjcmliZXMgdGhlIGRhdGEgYW5kIGhvdyBidXNpbmVzcyBsb2dpYyBtYW5pcHVsYXRlcyB0aGF0IGRhdGEuXG4vLyBDaGFuZ2VzIGluIHRoZSBkYXRhIHdpbGwgbWFuaWZlc3QgaW4gY2hhbmdlcyB0byB0aGUgdmlld1xuXG5jbGFzcyBNdXRhYmxlTnVtYmVyTW9kZWwge1xuICBwdWJsaWMgdmFsdWU6IG51bWJlclxuICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrITogRnVuY3Rpb25cblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy52YWx1ZSsrXG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpXG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy52YWx1ZS0tXG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpXG4gIH1cblxuICByZWdpc3RlckNoYW5nZUNhbGxiYWNrKGNiOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBjYlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11dGFibGVOdW1iZXJNb2RlbCIsIi8vIFZJRVcgLSBEZXNjcmliZXMgaG93IHRoZSBNT0RFTCBpcyByZW5kZXJlZCB0byB0aGUgVUkgYW5kIGludm9rZXMgdGhlXG4vLyBjb250cm9sbGVyIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGF0aW9uIHRoYXQgbmVlZHMgdG8gb2NjdXIuXG5cbmltcG9ydCBNdXRhYmxlTnVtYmVyTW9kZWwgZnJvbSAnLi9tb2RlbCdcblxuY2xhc3MgTXV0YWJsZU51bWJlclZpZXcge1xuICBwcml2YXRlIF9tb2RlbDogTXV0YWJsZU51bWJlck1vZGVsXG4gIGhhbmRsZUluY3JlbWVudCE6IEZ1bmN0aW9uXG4gIGhhbmRsZURlY3JlbWVudCE6IEZ1bmN0aW9uXG4gIGNvbnRhaW5lciE6IEhUTUxEaXZFbGVtZW50XG4gIG51bWJlclNwYW4hOiBIVE1MU3BhbkVsZW1lbnRcbiAgaW5jcmVtZW50QnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgZGVjcmVtZW50QnV0dG9uITogSFRNTEJ1dHRvbkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTXV0YWJsZU51bWJlck1vZGVsKSB7XG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbFxuICB9XG5cbiAgcmVnaXN0ZXJJbmNyZW1lbnRIYW5kbGVyKGNiOiBGdW5jdGlvbikge1xuICAgIHRoaXMuaGFuZGxlSW5jcmVtZW50ID0gY2JcbiAgfVxuXG4gIHJlZ2lzdGVyRGVjcmVtZW50SGFuZGxlcihjYjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLmhhbmRsZURlY3JlbWVudCA9IGNiXG4gIH1cblxuICByZW5kZXJVcGRhdGUoKSB7XG4gICAgdGhpcy5udW1iZXJTcGFuLnRleHRDb250ZW50ID0gdGhpcy5fbW9kZWwudmFsdWUudG9TdHJpbmcoKVxuICB9XG5cbiAgcmVuZGVySW5pdGlhbCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5udW1iZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGhpcy5pbmNyZW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoaXMuZGVjcmVtZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIHRoaXMuaW5jcmVtZW50QnV0dG9uLnRleHRDb250ZW50ID0gJysnXG4gICAgdGhpcy5kZWNyZW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnLSdcbiAgICB0aGlzLmluY3JlbWVudEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5oYW5kbGVJbmNyZW1lbnQoKVxuICAgIHRoaXMuZGVjcmVtZW50QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmhhbmRsZURlY3JlbWVudCgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlY3JlbWVudEJ1dHRvbilcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm51bWJlclNwYW4pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbmNyZW1lbnRCdXR0b24pXG4gICAgdGhpcy5yZW5kZXJVcGRhdGUoKVxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11dGFibGVOdW1iZXJWaWV3XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNdXRhYmxlTnVtYmVyTW9kZWwgZnJvbSAnLi9tb2RlbCdcbmltcG9ydCBNdXRhYmxlTnVtYmVyVmlldyBmcm9tICcuL3ZpZXcnXG5pbXBvcnQgTXV0YWJsZU51bWJlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJ1xuXG5jb25zdCBtb2RlbCA9IG5ldyBNdXRhYmxlTnVtYmVyTW9kZWwoMzMpXG5jb25zdCB2aWV3ID0gbmV3IE11dGFibGVOdW1iZXJWaWV3KG1vZGVsKVxuY29uc3QgY29udHJvbGxlciA9IG5ldyBNdXRhYmxlTnVtYmVyQ29udHJvbGxlcihtb2RlbCwgdmlldylcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlckluaXRpYWwoKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==