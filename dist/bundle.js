/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Message */ \"./src/scripts/modules/Message.js\");\n/* harmony import */ var _modules_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ApiClient */ \"./src/scripts/modules/ApiClient.js\");\n/* harmony import */ var _modules_api_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/api_token */ \"./src/scripts/modules/api_token.js\");\n\r\n\r\n\r\n\r\nconst $message_form = document.querySelector('form#message-form');\r\n$message_form.addEventListener('submit', function(event) {\r\n    event.preventDefault();\r\n    const message = new _modules_Message__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const apiClient = new _modules_ApiClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n        url: 'https://api.openai.com/v1/chat/completions',\r\n        token: _modules_api_token__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN,\r\n        model_id: 'gpt-3.5-turbo',\r\n        headers: {\r\n            \"Content-Type\": \"application/json\",\r\n            \"Auhorization\": \"Bearer \"+_modules_api_token__WEBPACK_IMPORTED_MODULE_2__.API_TOKEN,\r\n            \"Accept\": \"application/json\"\r\n        }\r\n    });\r\n    const inputValue = document.querySelector('input[name=\"message-content\"]').value.trim();\r\n    const chat_gpt_response = apiClient.send_message(inputValue);\r\n    message.content = inputValue;\r\n    message.build(true);\r\n    if(chat_gpt_response) {\r\n        message.content = chat_gpt_response.choices[0].message;\r\n        message.build(false);\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n});\n\n//# sourceURL=webpack://ai_chat/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/ApiClient.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/ApiClient.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiClient)\n/* harmony export */ });\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ \"./src/scripts/modules/Message.js\");\n\r\n\r\nclass ApiClient {\r\n    constructor(configs) {\r\n        this.url = configs.url;\r\n        this.model_id = configs.model_id;\r\n        this.headers = configs.headers;\r\n        this.send_message = this.send_message.bind(this);\r\n    }\r\n\r\n    async send_message(payload) {\r\n        const message = new _Message__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        const request = await fetch(url, {\r\n            method: 'POST',\r\n            mode: 'cors',\r\n            cache: 'no-cache',\r\n            headers: this.headers,\r\n            body: JSON.stringify(payload)\r\n        }).catch((error) => {\r\n            message.content = error.message;\r\n            message.build(false);\r\n            console.error('Error: ' + error.message);\r\n        }),\r\n        response = await request.json();\r\n        return response;\r\n    }\r\n}\n\n//# sourceURL=webpack://ai_chat/./src/scripts/modules/ApiClient.js?");

/***/ }),

/***/ "./src/scripts/modules/Message.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/Message.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\nclass Message {\r\n    constructor(content) {\r\n        this.content = content;\r\n        this.all = this.all.bind(this);\r\n        this.build = this.build.bind(this);\r\n    };\r\n\r\n    build(is_mine) {\r\n        const create_element = (element) => document.createElement(element),\r\n        $messages_container = document.querySelector('#messages-container'),\r\n        $new_message_container = create_element('section'),\r\n        $message_sender_resume_container = create_element('div'),\r\n        $message_sender_resume_image = create_element('img'),\r\n        $message_sender_resume_name_element = create_element('p'),\r\n        message_sender_data = {\r\n            image: is_mine ? './assets/img/User.png' :'./assets/img/ChatGPT_logo.svg.png',\r\n            name: is_mine ? 'You' : 'ChatGpt',\r\n        },\r\n        $messages_content_element = create_element('p');\r\n\r\n        $new_message_container.classList.add('message');\r\n\r\n        $message_sender_resume_container.classList.add('message-sender-resume');\r\n        $message_sender_resume_image.setAttribute('src', message_sender_data.image);\r\n        $message_sender_resume_image.classList.add('message-sender-pic');\r\n        $message_sender_resume_name_element.innerText = message_sender_data.name;\r\n        $message_sender_resume_container.appendChild($message_sender_resume_image);\r\n        $message_sender_resume_container.appendChild($message_sender_resume_name_element);\r\n        $new_message_container.appendChild($message_sender_resume_container);\r\n\r\n        $messages_content_element.classList.add('message-content');\r\n        $messages_content_element.innerText = this.content;\r\n        $new_message_container.appendChild($messages_content_element);\r\n\r\n        $messages_container.appendChild($new_message_container);\r\n        return true;\r\n    };\r\n}\n\n//# sourceURL=webpack://ai_chat/./src/scripts/modules/Message.js?");

/***/ }),

/***/ "./src/scripts/modules/api_token.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/api_token.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_TOKEN: () => (/* binding */ API_TOKEN)\n/* harmony export */ });\nconst API_TOKEN = ''; //ADD HERE.\n\n//# sourceURL=webpack://ai_chat/./src/scripts/modules/api_token.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;