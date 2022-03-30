"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Task_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/task'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/taskType.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/taskTimer.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    taskType: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/taskType.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    taskTimer: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/common/taskTimer.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      search: "",
      taskType: "",
      tasks: [],
      loading: true,
      totalRecords: 0,
      options: {},
      perpage: 10,
      headers: [{
        text: "#",
        align: "start",
        sortable: true,
        value: "id"
      }, {
        text: "Type",
        align: "start",
        sortable: true,
        value: "task_type"
      }, {
        text: "Title",
        align: "start",
        sortable: true,
        value: "task_title"
      }, {
        text: "Project ID",
        align: "start",
        sortable: true,
        value: "project_id"
      }, {
        text: "Assigned On",
        align: "start",
        sortable: true,
        value: "created_at_formatted"
      }, {
        text: "Resource Working",
        align: "start",
        sortable: true,
        value: "developer_name"
      }, {
        text: "Assigned To",
        align: "start",
        sortable: true,
        value: "assigned_user_name"
      }, {
        text: "Due",
        align: "start",
        sortable: true,
        value: "due_date"
      }, {
        text: "Time Worked",
        align: "start",
        sortable: false,
        value: "total_time_on_task"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }]
    };
  },
  methods: {
    timeUpdate: function timeUpdate(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.tasks = [];
                _this.loading = true;
                _context.next = 4;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/task'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item.id);

              case 4:
                _this.getTasks();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setRowCls: function setRowCls(item) {
      if (item.status == 3) {
        return 'orange lighten-4';
      }

      if (item.status == 2) {
        return 'green lighten-4';
      }

      if (item.status == 1) {
        return 'blue lighten-4';
      }
    },
    getTasks: function getTasks() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var q, page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                q = "";

                if (_this2.taskType != "all") {
                  q += "?type=" + _this2.taskType;
                }

                page = _this2.options.page;
                q += (q == "" ? "?" : "&") + "page=" + page;

                if (_this2.options.sortBy.length > 0) {
                  q += "&sortCol=" + _this2.options.sortBy[0];
                }

                if (_this2.options.sortDesc.length > 0) {
                  //if 1 then by desc else asc
                  q += "&sortByDesc=" + (_this2.options.sortDesc[0] == true ? 1 : 0);
                }

                q += "&perpage=" + _this2.options.itemsPerPage;

                if (_this2.search != "") {
                  q += "&search=" + _this2.search;
                }

                _context2.next = 11;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/task'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(q);

              case 11:
                res = _context2.sent;
                _this2.totalRecords = res.total;
                _this2.tasks = res.data;
                _this2.loading = false;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.taskType = _this3.$route.params.type;

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  watch: {
    $route: function $route() {
      this.taskType = this.$route.params.type;
    },
    taskType: function taskType() {
      this.getTasks();
    },
    perpage: function perpage() {
      this.getTasks();
    },
    options: {
      handler: function handler() {
        this.getTasks();
      },
      deep: true
    },
    search: function search() {
      this.getTasks();
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Task/List.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Task/List.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=bca68e0e& */ "./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/Task/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Task/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Task/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Task/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=bca68e0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.tasks,
      options: _vm.options,
      "server-items-length": _vm.totalRecords,
      loading: _vm.loading,
      "item-key": "id",
      "item-class": _vm.setRowCls,
    },
    on: {
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function () {
          return [
            _c("v-text-field", {
              staticClass: "mx-4",
              attrs: { label: "Search" },
              model: {
                value: _vm.search,
                callback: function ($$v) {
                  _vm.search = $$v
                },
                expression: "search",
              },
            }),
          ]
        },
        proxy: true,
      },
      {
        key: "item.task_type",
        fn: function (ref) {
          var item = ref.item
          return [_c("taskType", { attrs: { type: item.task_type } })]
        },
      },
      {
        key: "item.total_time_on_task",
        fn: function (ref) {
          var item = ref.item
          return [
            _c("taskTimer", {
              attrs: { status: item.status, time: item.total_time_on_task },
            }),
          ]
        },
      },
      {
        key: "item.actions",
        fn: function (ref) {
          var item = ref.item
          return [
            _c(
              "v-tooltip",
              {
                attrs: { top: "" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-badge",
                            {
                              attrs: {
                                content: item.unseen_comments,
                                value: item.unseen_comments,
                                color: "green",
                                overlap: "",
                              },
                            },
                            [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        color: "info",
                                        fab: "",
                                        "x-small": "",
                                        dark: "",
                                        to: {
                                          name: "auth.task.summary",
                                          params: {
                                            project: item.project_id_root,
                                          },
                                          query: { task: item.id },
                                        },
                                      },
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_c("v-icon", [_vm._v("mdi-file-tree")])],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      },
                    },
                  ],
                  null,
                  true
                ),
              },
              [_vm._v(" "), _c("span", [_vm._v("Task Detail")])]
            ),
            _vm._v(" "),
            _vm.user.role_id == 8 && (item.status == 0 || item.status == 1)
              ? _c(
                  "v-tooltip",
                  {
                    attrs: { top: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        color:
                                          item.task_started == 0
                                            ? "primary"
                                            : "error",
                                        fab: "",
                                        "x-small": "",
                                        dark: "",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.timeUpdate(item)
                                        },
                                      },
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_c("v-icon", [_vm._v("mdi-watch")])],
                                1
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          item.task_started == 0 ? "Start Timer" : "Stop Timer"
                        )
                      ),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.role_id != 8 && item.task_started == 1
              ? _c(
                  "v-tooltip",
                  {
                    attrs: { top: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-progress-circular",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        indeterminate: "",
                                        color: "primary",
                                      },
                                    },
                                    "v-progress-circular",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Timer in Progress")])]
                )
              : _vm._e(),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);