"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Order_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    order_status: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      //1 = pending, 2 = processing, 3 = holded, 4 = canceled, 5 = complete/delivered
      statuses: {
        1: {
          color: 'primary',
          name: 'Pending'
        },
        2: {
          color: 'orange',
          name: 'Processing'
        },
        3: {
          color: 'blue',
          name: 'Holded'
        },
        4: {
          color: 'red',
          name: 'Canceled'
        },
        5: {
          color: 'green',
          name: 'Completed/Delivered'
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");
/* harmony import */ var _components_orders_status_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/orders/status.vue */ "./resources/js/components/orders/status.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var service = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]("orders");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return service.get(_this.$route.params.id).then(function (e) {
                _this.loading = false;
                return e;
              });

            case 2:
              _this.invoice = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      invoice: {},
      loading: true,
      tracking_id: ""
    };
  },
  components: {
    OrderStatus: _components_orders_status_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    sendTrackingCode: function sendTrackingCode() {
      alert("her");
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/default.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/default.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var defaultservice = /*#__PURE__*/function () {
  function defaultservice(baseuri) {
    _classCallCheck(this, defaultservice);

    // Constructor
    this.baseuri = baseuri;
  }

  _createClass(defaultservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/".concat(this.baseuri).concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/' + this.baseuri, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/".concat(this.baseuri, "/").concat(id));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(id)).then(function (e) {
        return e.data.data;
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData.append('_method', 'put');
                _context2.next = 3;
                return axios.post('/api/' + this.baseuri + '/' + id, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return defaultservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultservice);

/***/ }),

/***/ "./resources/js/components/orders/status.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/orders/status.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.vue?vue&type=template&id=8eb8ffbe& */ "./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe&");
/* harmony import */ var _status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/status.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__.render,
  _status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/status.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/View.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Order/View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=5792b445& */ "./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/status.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/orders/status.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/View.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Order/View.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_template_id_8eb8ffbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./status.vue?vue&type=template&id=8eb8ffbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe&");


/***/ }),

/***/ "./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Order/View.vue?vue&type=template&id=5792b445& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=5792b445& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/status.vue?vue&type=template&id=8eb8ffbe& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-inline" },
    [
      _c(
        "v-chip",
        {
          attrs: {
            "text-color": "white",
            color: _vm.statuses[_vm.order_status].color,
          },
        },
        [_vm._v(" " + _vm._s(_vm.statuses[_vm.order_status].name) + " ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticClass: "mx-auto",
      attrs: { outlined: "", elevation: "2", loading: _vm.loading },
    },
    [
      _c("v-card-title", [
        _vm._v("Invoice #"),
        _c("b", [_vm._v(_vm._s(_vm.invoice.id))]),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            { attrs: { align: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-h6" },
                            [
                              _vm._v(
                                "\n              Order Status:\n              "
                              ),
                              _c("OrderStatus", {
                                attrs: {
                                  order_status: _vm.invoice.order_status,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var hover = ref.hover
                                  return [
                                    _c(
                                      "v-list-item-title",
                                      { staticClass: "text-h6" },
                                      [
                                        _vm._v(
                                          "\n                Date:\n                "
                                        ),
                                        hover
                                          ? _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.invoice
                                                    .created_date_formatted_us
                                                )
                                              ),
                                            ])
                                          : _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.invoice
                                                    .created_date_formatted
                                                )
                                              ),
                                            ]),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "text-h6" },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "mdi-truck-cargo-container",
                                  "append-outer-icon": _vm.tracking_id
                                    ? "mdi-send"
                                    : "",
                                  filled: "",
                                  "clear-icon": "mdi-close-circle",
                                  clearable: "",
                                  label: "Tracking ID",
                                  type: "text",
                                },
                                on: {
                                  "click:append-outer": _vm.sendTrackingCode,
                                },
                                model: {
                                  value: _vm.tracking_id,
                                  callback: function ($$v) {
                                    _vm.tracking_id = $$v
                                  },
                                  expression: "tracking_id",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "pink", dark: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Shipping Detail")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-account "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(_vm.invoice.shipping_first_name) +
                                    "\n                " +
                                    _vm._s(_vm.invoice.shipping_last_name)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [_vm._v("Full Name")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-phone "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.shipping_phone)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v("Mobile/Lan line"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-email "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.shipping_email)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v("Order Email"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-map-marker "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.shipping_address)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  _vm._s(_vm.invoice.scity.name) +
                                    ", " +
                                    _vm._s(_vm.invoice.sstate.name) +
                                    "\n                " +
                                    _vm._s(_vm.invoice.shipping_zip)
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.invoice.scountry.name)
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "red", dark: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Billing Detail")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-account "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(_vm.invoice.billing_first_name) +
                                    "\n                " +
                                    _vm._s(_vm.invoice.billing_last_name)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [_vm._v("Full Name")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-phone "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.billing_phone)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v("Mobile/Lan line"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-email "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.billing_email)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v("Order Email"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v(" mdi-map-marker "),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.invoice.billing_address)),
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  _vm._s(_vm.invoice.bcity.name) +
                                    ", " +
                                    _vm._s(_vm.invoice.bstate.name) +
                                    "\n                " +
                                    _vm._s(_vm.invoice.billing_zip)
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.invoice.bcountry.name)
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12" } }, [_c("v-divider")], 1),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _vm._l(5, function (i) {
                    return _c(
                      "v-sheet",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.loading,
                            expression: "loading",
                          },
                        ],
                        key: i,
                        attrs: { color: "grey lighten-4" },
                      },
                      [
                        _c("v-skeleton-loader", {
                          staticClass: "mx-auto",
                          attrs: { type: "list-item" },
                        }),
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("v-simple-table", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.loading,
                        expression: "!loading",
                      },
                    ],
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function () {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Product"),
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Qty"),
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Total"),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.invoice.products, function (item) {
                                return _c("tr", { key: item.id }, [
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        item.product ? item.product.sku : "N/A"
                                      )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.quantity))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v("$ " + _vm._s(item.rowtotal)),
                                  ]),
                                ])
                              }),
                              0
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12" } }, [_c("v-divider")], 1),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "pb-0",
                  attrs: { cols: "4", sm: "4", offset: "8" },
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "", color: "blue-grey", dark: "" } },
                        [_c("v-toolbar-title", [_vm._v("Total")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              label: "Sub Total",
                              readonly: "",
                              value: _vm.invoice.subtotal,
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              label: "Discount",
                              type: "number",
                              step: "any",
                              readonly: "",
                            },
                            model: {
                              value: _vm.invoice.discount_amount,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.invoice,
                                  "discount_amount",
                                  _vm._n($$v)
                                )
                              },
                              expression: "invoice.discount_amount",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              label: "Tax",
                              type: "number",
                              step: "any",
                              readonly: "",
                            },
                            model: {
                              value: _vm.invoice.tax_amount,
                              callback: function ($$v) {
                                _vm.$set(_vm.invoice, "tax_amount", _vm._n($$v))
                              },
                              expression: "invoice.tax_amount",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              label: "Total",
                              readonly: "",
                              value: _vm.invoice.total,
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);