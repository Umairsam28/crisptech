"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Project_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/project'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _views_Project_taskTimeline_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/Project/taskTimeline.vue */ "./resources/js/views/Project/taskTimeline.vue");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'task-timeline': _views_Project_taskTimeline_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      expanded: [],
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Project",
        to: {
          name: "auth.projects.listing"
        },
        disabled: false,
        exact: true
      }],
      selectedProject: [],
      search: "",
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [{
        text: "Title",
        align: "start",
        sortable: true,
        value: "title"
      }, {
        text: "Project ID",
        align: "start",
        sortable: true,
        value: "project_id"
      }, {
        text: "Customer",
        align: "start",
        sortable: true,
        value: "customer_email"
      }, {
        text: "Created@",
        align: "start",
        sortable: false,
        value: "created_at_formatted"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }]
    };
  },
  watch: {
    $route: function $route() {
      this.getDataFromApi();
    },
    perpage: function perpage() {
      this.getDataFromApi();
    },
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    },
    search: function search() {
      this.getDataFromApi();
    },
    expanded: function expanded() {
      if (this.expanded.length > 0) {//getting timeline
        // this.expanded[0].project_id_int
      }
    }
  },
  mounted: function mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.fakeApiCall();

              case 2:
                data = _context.sent;
                _this.items = data.data;

                try {
                  _this.totalRecords = data.meta.total;
                } catch (ex) {//this.totalRecords=0
                }

                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fakeApiCall: function fakeApiCall() {
      this.loading = true; // this.items = []

      var query = "";
      var page = this.options.page;
      query += "?page=" + page;

      if (this.options.sortBy.length > 0) {
        query += "&sortCol=" + this.options.sortBy[0];
      }

      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }

      query += "&perpage=" + this.options.itemsPerPage;

      if (this.search != "") {
        query += "&search=" + this.search;
      }

      return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/project'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(query);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/task'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["projectid"],
  mounted: function mounted() {
    this.getSummary();
  },
  methods: {
    getSummary: function getSummary() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@services/auth/task'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.projectid);

              case 2:
                _this.tasks = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  data: function data() {
    return {
      tasks: [],
      calendarColor: {
        Today: "green",
        Overdue: "red",
        Upcomming: "blue"
      }
    };
  },
  watch: {
    projectid: function projectid() {
      this.getSummary();
    }
  },
  computed: {
    tasks_grouped: function tasks_grouped() {
      var groups = {};

      for (var i = 0; i < this.tasks.length; i++) {
        if (!groups[this.tasks[i].due_type]) {
          groups[this.tasks[i].due_type] = [];
        }

        groups[this.tasks[i].due_type].push(this.tasks[i]);
      }

      return groups;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Project/List.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Project/List.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=4bd60093& */ "./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/Project/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Project/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Project/taskTimeline.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Project/taskTimeline.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskTimeline.vue?vue&type=template&id=7fb413bb& */ "./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb&");
/* harmony import */ var _taskTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTimeline.vue?vue&type=script&lang=js& */ "./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__.render,
  _taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Project/taskTimeline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Project/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Project/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskTimeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4bd60093___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=4bd60093& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093&");


/***/ }),

/***/ "./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimeline_vue_vue_type_template_id_7fb413bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskTimeline.vue?vue&type=template&id=7fb413bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/List.vue?vue&type=template&id=4bd60093& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c("v-breadcrumbs", {
            attrs: { items: _vm.bread },
            scopedSlots: _vm._u([
              {
                key: "divider",
                fn: function () {
                  return [_c("v-icon", [_vm._v("mdi-forward")])]
                },
                proxy: true,
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.items,
          options: _vm.options,
          "server-items-length": _vm.totalRecords,
          loading: _vm.loading,
          "item-key": "project_id",
          "show-expand": "",
          expanded: _vm.expanded,
          "single-expand": true,
        },
        on: {
          "update:options": function ($event) {
            _vm.options = $event
          },
          "update:expanded": function ($event) {
            _vm.expanded = $event
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
            key: "item.email",
            fn: function (ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n        " +
                    _vm._s(item.name) +
                    " | " +
                    _vm._s(item.email) +
                    "\n      "
                ),
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
                                          name: "auth.task.open",
                                          query: {
                                            project: item.project_id_int,
                                          },
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
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Create/Assign Task")])]
                ),
              ]
            },
          },
          {
            key: "expanded-item",
            fn: function (ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c(
                  "td",
                  { attrs: { colspan: headers.length } },
                  [
                    _c("task-timeline", {
                      attrs: { projectid: item.project_id_int },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/taskTimeline.vue?vue&type=template&id=7fb413bb& ***!
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
    "div",
    _vm._l(_vm.tasks_grouped, function (group, groupk) {
      return _c(
        "v-timeline",
        {
          key: groupk,
          staticStyle: { "max-width": "600px" },
          attrs: { dense: "", clipped: "" },
        },
        [
          _c("v-timeline-item", {
            staticClass: "white--text mb-12",
            attrs: {
              "fill-dot": "",
              color: _vm.calendarColor[groupk],
              large: "",
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "icon",
                  fn: function () {
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
                                    groupk == "Today"
                                      ? _c(
                                          "v-icon",
                                          _vm._g(
                                            _vm._b(
                                              { attrs: { color: "white" } },
                                              "v-icon",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [_vm._v("mdi-calendar-today")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    groupk == "Overdue"
                                      ? _c(
                                          "v-icon",
                                          _vm._g(
                                            _vm._b(
                                              { attrs: { color: "white" } },
                                              "v-icon",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [_vm._v("mdi-calendar-alert")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    groupk == "Upcomming"
                                      ? _c(
                                          "v-icon",
                                          _vm._g(
                                            _vm._b(
                                              { attrs: { color: "white" } },
                                              "v-icon",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [_vm._v("mdi-calendar-refresh")]
                                        )
                                      : _vm._e(),
                                  ]
                                },
                              },
                            ],
                            null,
                            true
                          ),
                        },
                        [_vm._v(" "), _c("span", [_vm._v(_vm._s(groupk))])]
                      ),
                    ]
                  },
                  proxy: true,
                },
              ],
              null,
              true
            ),
          }),
          _vm._v(" "),
          _vm._l(group, function (task, taskKey) {
            return _c(
              "v-timeline-item",
              {
                key: taskKey,
                staticClass: "mb-4",
                attrs: {
                  color: "grey",
                  "icon-color": "grey lighten-2",
                  small: "",
                },
              },
              [
                _c(
                  "v-row",
                  { attrs: { justify: "space-between" } },
                  [
                    _c("v-col", { attrs: { cols: "7" } }, [
                      _vm._v(" " + _vm._s(task.title) + " "),
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "text-right", attrs: { cols: "5" } },
                      [_vm._v(" " + _vm._s(task.due_date) + " ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-divider"),
        ],
        2
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);