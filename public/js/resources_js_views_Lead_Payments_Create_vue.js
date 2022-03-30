"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Lead_Payments_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/lead'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/project'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/payment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/briefform'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/userbriefs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/status.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StatusChip: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/status.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      createPaymentTgl: false,
      createBriefTgl: false,
      lead: {},
      payments: [],
      briefs: [],
      form: {
        amount: 0,
        status: 0,
        merchant: "stripe",
        description: "",
        payment_type: 'sell',
        project_id: 0,
        currency: 'USD'
      },
      briefform: {
        name: "",
        form_id: 0
      },
      briefforms: [],
      formerrors: {
        amount: [],
        status: [],
        merchant: [],
        description: [],
        payment_type: [],
        project_id: [],
        currency: []
      },
      merchants: [{
        key: "stripe",
        value: "Stripe"
      }, {
        key: "paypal",
        value: "paypal"
      }, {
        key: "authorize.net",
        value: "Authorize.Net"
      }, {
        key: "other",
        value: "Other"
      }],
      statuses: [{
        key: 0,
        value: "Pending/Waiting"
      }, {
        key: 1,
        value: "Paid"
      }, {
        key: 2,
        value: "Failed"
      }],
      payment_types: [{
        key: 'sell',
        value: 'Sell'
      }, {
        key: 'upsell',
        value: 'UpSell'
      }, {
        key: 'bonus',
        value: 'Bonus'
      }],
      lead_projects: [],
      valid: false,
      loaders: [0]
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.startupreqs();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    sendForm: function sendForm() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formdata, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.briefform.form_id > 0 && _this2.briefform.name != "")) {
                  _context2.next = 19;
                  break;
                }

                formdata = new FormData();
                formdata.append("form_name", _this2.briefform.name);
                formdata.append("form_id", _this2.briefform.form_id);
                formdata.append("user_id", _this2.lead.user_id);
                formdata.append("brand_id", _this2.lead.brand_id);
                _context2.next = 8;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/userbriefs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(formdata);

              case 8:
                res = _context2.sent;

                if (!res.status) {
                  _context2.next = 17;
                  break;
                }

                _this2.$store.commit("setNotification", "Brief Sent to Customer");

                _context2.next = 13;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/userbriefs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("?user_id=" + _this2.lead.user_id);

              case 13:
                _this2.briefs = _context2.sent;
                _this2.briefform.form_id = 0;
                _this2.briefform.name = "";
                _this2.createBriefTgl = false;

              case 17:
                _context2.next = 20;
                break;

              case 19:
                _this2.$store.commit("setNotification", "Please Select Form and Type name to sent brief to user");

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getLead: function getLead(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/lead'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id);

              case 2:
                _this3.lead = _context3.sent;

                if (!_this3.lead) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 6;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/payment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this3.lead.id, "");

              case 6:
                _this3.payments = _context3.sent;

                if (!(_this3.lead.user_id > 0)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 10;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/userbriefs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("?user_id=" + _this3.lead.user_id);

              case 10:
                _this3.briefs = _context3.sent;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    CopyLinkToClipBoard: function CopyLinkToClipBoard(payment_link) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                navigator.clipboard.writeText(payment_link);

                _this4.$store.commit("setNotification", "Payment Link Copied to Clip Board");

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    createPayment: function createPayment() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var formData, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.formerrors = {
                  amount: [],
                  status: [],
                  merchant: [],
                  description: [],
                  project_id: [],
                  payment_type: [],
                  currency: []
                };
                formData = new FormData();
                formData.append("amount", _this5.form.amount);
                formData.append("status", _this5.form.status);
                formData.append("merchant", _this5.form.merchant);
                formData.append("description", _this5.form.description);
                formData.append("payment_type", _this5.form.payment_type);
                formData.append("project_id", _this5.form.project_id);
                formData.append("currency", _this5.form.currency);
                _context5.next = 11;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/payment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this5.lead.id, formData);

              case 11:
                res = _context5.sent;

                if (!res.status) {
                  _context5.next = 22;
                  break;
                }

                _this5.$store.commit("setNotification", "Payment Created");

                _this5.form = {
                  amount: 0,
                  status: 0,
                  merchant: "stripe",
                  description: "",
                  currency: 'USD'
                };
                _this5.createPaymentTgl = false;

                if (!_this5.lead) {
                  _context5.next = 20;
                  break;
                }

                _context5.next = 19;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/payment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this5.lead.id, "");

              case 19:
                _this5.payments = _context5.sent;

              case 20:
                _context5.next = 29;
                break;

              case 22:
                if (res.data.amount) {
                  _this5.formerrors.amount = res.data.amount;
                }

                if (res.data.status) {
                  _this5.formerrors.status = res.data.status;
                }

                if (res.data.merchant) {
                  _this5.formerrors.merchant = res.data.merchant;
                }

                if (res.data.description) {
                  _this5.formerrors.description = res.data.description;
                }

                if (res.data.payment_type) {
                  _this5.formerrors.payment_type = res.data.payment_type;
                }

                if (res.data.project_id) {
                  _this5.formerrors.project_id = res.data.project_id;
                }

                if (res.data.currency) {
                  _this5.formerrors.currency = res.data.currency;
                }

              case 29:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    signupUserManually: function signupUserManually() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.loaders[0] = 1;
                _context6.next = 3;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/lead'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this6.lead.id).then(function (e) {
                  _this6.lead = e;
                });

              case 3:
                _this6.loaders[0] = 0;

                _this6.startupreqs();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    startupreqs: function startupreqs() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.getLead(_this7.$route.params.id);

                _context7.next = 3;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/briefform'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("?all=true");

              case 3:
                _this7.briefforms = _context7.sent;

                if (!(parseInt(_this7.lead.user_id) > 0)) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 7;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/project'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('?perpage=0&customer_id=' + _this7.lead.user_id).then(function (e) {
                  return e.data;
                });

              case 7:
                _this7.lead_projects = _context7.sent;

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  },
  watch: {},
  computed: {}
});

/***/ }),

/***/ "./resources/js/views/Lead/Payments/Create.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Lead/Payments/Create.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=267a818a& */ "./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Lead/Payments/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_267a818a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=267a818a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/Payments/Create.vue?vue&type=template&id=267a818a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    [
      _vm._l(5, function (q) {
        return _c(
          "v-col",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.lead.id,
                expression: "!lead.id",
              },
            ],
            key: q,
          },
          [
            _c(
              "v-sheet",
              { staticClass: "pa-3" },
              [
                _c("v-skeleton-loader", {
                  staticClass: "mx-auto",
                  attrs: { "max-width": "300", type: "card" },
                }),
              ],
              1
            ),
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm.lead.id > 0
        ? _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2", tile: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" mdi-projector-screen "),
                      ]),
                      _vm._v("\n        Total Projects"),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "pink",
                            label: "",
                            "text-color": "white",
                          },
                        },
                        [_vm._v("\n          Tags\n        ")]
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
        : _vm._e(),
      _vm._v(" "),
      _vm.lead.id > 0
        ? _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2", tile: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" mdi-currency-usd "),
                      ]),
                      _vm._v("\n        Total Paid"),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "pink",
                            label: "",
                            "text-color": "white",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.lead.totalPaid) +
                              "\n        "
                          ),
                        ]
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
        : _vm._e(),
      _vm._v(" "),
      _vm.lead.id > 0
        ? _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2", tile: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" mdi-calendar-today "),
                      ]),
                      _vm._v("\n        Created@\n        "),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "pink",
                            label: "",
                            "text-color": "white",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.lead.created_at_formatted) +
                              "\n        "
                          ),
                        ]
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
        : _vm._e(),
      _vm._v(" "),
      _vm.lead.id > 0
        ? _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2", tile: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" mdi-calendar-alert "),
                      ]),
                      _vm._v("\n        Total Running Tasks"),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "pink",
                            label: "",
                            "text-color": "white",
                          },
                        },
                        [_vm._v("\n          Tags\n        ")]
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
        : _vm._e(),
      _vm._v(" "),
      _vm.lead.id > 0
        ? _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2", tile: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" mdi-watermark "),
                      ]),
                      _vm._v("\n        Brand"),
                      _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "pink",
                            label: "",
                            "text-color": "white",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.lead.brand_code) +
                              "\n        "
                          ),
                        ]
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
        : _vm._e(),
      _vm._v(" "),
      _c("v-col", { attrs: { cols: "12" } }, [_c("v-divider")], 1),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-form",
            {
              model: {
                value: _vm.valid,
                callback: function ($$v) {
                  _vm.valid = $$v
                },
                expression: "valid",
              },
            },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function ($event) {
                                  _vm.createPaymentTgl = !_vm.createPaymentTgl
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n              Generate Payment Link\n              "
                              ),
                              _c("v-icon", [
                                _vm._v(
                                  _vm._s(
                                    _vm.createPaymentTgl
                                      ? "mdi-chevron-up"
                                      : "mdi-chevron-down"
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.lead.user_id > 0
                            ? _c("v-btn", { attrs: { color: "success" } }, [
                                _vm._v("User Signedup"),
                              ])
                            : _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    loading: _vm.loaders[0] == 1,
                                    disabled: _vm.loaders[0] == 1,
                                  },
                                  on: { click: _vm.signupUserManually },
                                },
                                [_vm._v("Create User")]
                              ),
                          _vm._v(" "),
                          _vm.lead.user_id > 0
                            ? _c(
                                "v-btn",
                                {
                                  on: {
                                    click: function ($event) {
                                      _vm.createBriefTgl = !_vm.createBriefTgl
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Send Brief Form\n              "
                                  ),
                                  _c("v-icon", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.createBriefTgl
                                          ? "mdi-chevron-up"
                                          : "mdi-chevron-down"
                                      )
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.lead.user_id > 0
                            ? _c(
                                "v-badge",
                                {
                                  attrs: {
                                    bordered: "",
                                    color: "info",
                                    content:
                                      _vm.lead.unseen_messages == 0
                                        ? "0"
                                        : _vm.lead.unseen_messages,
                                    overlap: "",
                                  },
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        link: "",
                                        to: {
                                          name: "auth.leads.messages",
                                          params: { id: _vm.lead.id },
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                Messages\n                "
                                      ),
                                      _c("v-icon", [
                                        _vm._v(
                                          "mdi-message-processing-outline"
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-expand-transition", [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.createPaymentTgl,
                                expression: "createPaymentTgl",
                              },
                            ],
                            staticClass: "col-md-12",
                          },
                          [
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { staticClass: "pa-4" },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Amount$",
                                        required: "",
                                        "error-messages": _vm.formerrors.amount,
                                      },
                                      model: {
                                        value: _vm.form.amount,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "amount", $$v)
                                        },
                                        expression: "form.amount",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.merchants,
                                        label: "Merchant",
                                        "item-text": "value",
                                        "item-value": "key",
                                        required: "",
                                        "error-messages":
                                          _vm.formerrors.merchant,
                                      },
                                      model: {
                                        value: _vm.form.merchant,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "merchant", $$v)
                                        },
                                        expression: "form.merchant",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Description",
                                        "error-messages":
                                          _vm.formerrors.description,
                                      },
                                      model: {
                                        value: _vm.form.description,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "description", $$v)
                                        },
                                        expression: "form.description",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.statuses,
                                        label: "Payment Status",
                                        "item-text": "value",
                                        "item-value": "key",
                                        required: "",
                                        "error-messages": _vm.formerrors.status,
                                      },
                                      model: {
                                        value: _vm.form.status,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "status", $$v)
                                        },
                                        expression: "form.status",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "3", md: "3" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.payment_types,
                                        label: "Type",
                                        "item-text": "value",
                                        "item-value": "key",
                                        required: "",
                                        "error-messages": _vm.formerrors.status,
                                      },
                                      model: {
                                        value: _vm.form.payment_type,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "payment_type",
                                            $$v
                                          )
                                        },
                                        expression: "form.payment_type",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "3", md: "3" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: [
                                          { key: "USD", value: "USD" },
                                          { key: "GBP", value: "GBP" },
                                        ],
                                        label: "Currency",
                                        "item-text": "key",
                                        "item-value": "value",
                                        required: "",
                                        "error-messages":
                                          _vm.formerrors.currency,
                                      },
                                      model: {
                                        value: _vm.form.currency,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "currency", $$v)
                                        },
                                        expression: "form.currency",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.lead.user_id > 0
                                  ? _c(
                                      "v-col",
                                      { attrs: { cols: "6", md: "6" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.lead_projects,
                                            label: "Projects",
                                            "item-text": "project_id",
                                            "item-value": "project_id_int",
                                            required: "",
                                            "error-messages":
                                              _vm.formerrors.project_id,
                                          },
                                          model: {
                                            value: _vm.form.project_id,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "project_id",
                                                $$v
                                              )
                                            },
                                            expression: "form.project_id",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "12" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "white--text",
                                        attrs: {
                                          color: "blue-grey float-left",
                                        },
                                        on: { click: _vm.createPayment },
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { left: "", dark: "" } },
                                          [_vm._v(" mdi-currency-usd ")]
                                        ),
                                        _vm._v(
                                          "\n                    Generate\n                  "
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
                      ]),
                      _vm._v(" "),
                      _c("v-expand-transition", [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.createBriefTgl,
                                expression: "createBriefTgl",
                              },
                            ],
                            staticClass: "col-md-12",
                          },
                          [
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { staticClass: "pa-4" },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.briefforms,
                                        label: "Brief Forms",
                                        "item-text": "form_name",
                                        "item-value": "id",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.briefform.form_id,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.briefform,
                                            "form_id",
                                            $$v
                                          )
                                        },
                                        expression: "briefform.form_id",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: "Name", required: "" },
                                      model: {
                                        value: _vm.briefform.name,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.briefform, "name", $$v)
                                        },
                                        expression: "briefform.name",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6", md: "12" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "white--text",
                                        attrs: {
                                          color: "blue-grey float-right",
                                        },
                                        on: { click: _vm.sendForm },
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { left: "", dark: "" } },
                                          [_vm._v(" mdi-database-eye-outline ")]
                                        ),
                                        _vm._v(
                                          "\n                    Send\n                  "
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
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                    _c("h2", [_vm._v("Past Payment Links")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-simple-table", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function () {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Amount"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Description"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Merchant"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Type"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Currency"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Project"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v("Status"),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.payments, function (item) {
                                    return _c("tr", { key: item.id }, [
                                      _c("td", [_vm._v(_vm._s(item.amount))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.description)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.merchant))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.payment_type_text)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.currency))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            item.project_id > 0
                                              ? item.project.project_id
                                              : "N/A"
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          item.status == 0
                                            ? _c("StatusChip", {
                                                attrs: {
                                                  status: "orange",
                                                  text: item.payment_status_text,
                                                },
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          item.status == 1
                                            ? _c("StatusChip", {
                                                attrs: {
                                                  status: "green",
                                                  text: item.payment_status_text,
                                                },
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          item.status == 2
                                            ? _c("StatusChip", {
                                                attrs: {
                                                  status: "red",
                                                  text: item.payment_status_text,
                                                },
                                              })
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          item.status != 1 &&
                                          item.merchant != "other"
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    small: "",
                                                    color: "blue float-right",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.CopyLinkToClipBoard(
                                                        item.payment_link
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        left: "",
                                                        dark: "",
                                                      },
                                                    },
                                                    [_vm._v(" mdi-anchor ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                      Copy Link\n                    "
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
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
      _vm.lead.user_id > 0
        ? _c("v-col", { attrs: { cols: "12" } }, [_c("v-divider")], 1)
        : _vm._e(),
      _vm._v(" "),
      _vm.lead.user_id > 0
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                        _c("h2", [_vm._v("Briefs Sent to Client")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-simple-table", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function () {
                                    return [
                                      _c("thead", [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [_vm._v("Form")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [_vm._v("Status")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [_vm._v("Sent@")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-left" },
                                            [_vm._v("Filled@")]
                                          ),
                                          _vm._v(" "),
                                          _c("th", {
                                            staticClass: "text-left",
                                          }),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(_vm.briefs, function (brief) {
                                          return _c("tr", { key: brief.id }, [
                                            _c("td", [
                                              _vm._v(_vm._s(brief.form_name)),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(brief.status_text)),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  brief.created_at_formatted
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(
                                                    brief.status != 0
                                                      ? brief.updated_at_formatted
                                                      : "N/A"
                                                  ) +
                                                  "\n                  "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                brief.status != 0
                                                  ? _c(
                                                      "v-btn",
                                                      {
                                                        staticClass:
                                                          "white--text",
                                                        attrs: {
                                                          link: "",
                                                          to: {
                                                            name: "guest.brief.detail",
                                                            params: {
                                                              id: brief.id,
                                                            },
                                                          },
                                                          small: "",
                                                          color:
                                                            "blue float-right",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              left: "",
                                                              dark: "",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              " mdi-database-eye-outline "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(
                                                          "\n                      See Details\n                    "
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                              ],
                                              1
                                            ),
                                          ])
                                        }),
                                        0
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              false,
                              3443444841
                            ),
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
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);