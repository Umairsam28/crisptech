"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Order_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");


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

var productservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('products');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    index: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      autocomplete: {
        isLoading: false,
        model: '',
        search: '',
        entries: [],
        item: {}
      }
    };
  },
  watch: {
    'autocomplete.search': function () {
      var _autocompleteSearch = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.autocomplete.isLoading) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.autocomplete.search) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                this.autocomplete.isLoading = true;
                _context.next = 7;
                return productservice.getlist('?search=' + this.autocomplete.search + '&perpage=20&restrict=true').then(function (e) {
                  _this.autocomplete.entries = e.data;
                });

              case 7:
                this.autocomplete.isLoading = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function autocompleteSearch() {
        return _autocompleteSearch.apply(this, arguments);
      }

      return autocompleteSearch;
    }(),
    'autocomplete.item': function autocompleteItem() {
      this.$emit('product_select', this.index, this.autocomplete.item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");
/* harmony import */ var _components_orders_productautocomplete_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/orders/productautocomplete.vue */ "./resources/js/components/orders/productautocomplete.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var service = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('orders');
var countryservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('countries');
var stateservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('states');
var citieservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('cities');
var exemptionservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('user-exemptions');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    productautocomplete: _components_orders_productautocomplete_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "auth.orders.add",
  watch: {
    'form': {
      handler: function handler() {
        this.checkfortax();
      },
      deep: true
    },
    'form.shipping_country': function formShipping_country() {
      var _this = this;

      if (!this.initializing) {
        stateservice.getlist('?country_id=' + this.form.shipping_country).then(function (e) {
          _this.cities = [];
          _this.form.shipping_state = 0;
          _this.form.shipping_city = 0;
          _this.states = e.data;
        });
      }
    },
    'form.shipping_state': function formShipping_state() {
      var _this2 = this;

      if (!this.initializing) {
        citieservice.getlist('?state_id=' + this.form.shipping_state).then(function (e) {
          _this2.form.shipping_city = 0;
          _this2.cities = e.data;
        });
      }
    },
    'form.billing_country': function formBilling_country() {
      var _this3 = this;

      if (!this.initializing) {
        stateservice.getlist('?country_id=' + this.form.billing_country).then(function (e) {
          _this3.cities = [];

          if (_this3.same_as_shipping == true) {
            _this3.form.billing_state = _this3.form.shipping_state;
            _this3.form.billing_city = _this3.form.shipping_city;
          } else {
            _this3.form.billing_state = 0;
            _this3.form.billing_city = 0;
          }

          _this3.billing_states = e.data;
        });
      }
    },
    'form.billing_state': function formBilling_state() {
      var _this4 = this;

      if (!this.initializing) {
        citieservice.getlist('?state_id=' + this.form.billing_state).then(function (e) {
          _this4.form.billing_city = 0;
          _this4.billing_cities = e.data;
        });
      }
    },
    'same_as_shipping': function same_as_shipping() {
      if (this.same_as_shipping == true) {
        this.form.billing_first_name = this.form.shipping_first_name;
        this.form.billing_last_name = this.form.shipping_last_name;
        this.form.billing_email = this.form.shipping_email;
        this.form.billing_address = this.form.shipping_address;
        this.form.billing_phone = this.form.shipping_phone;
        this.form.billing_zipcode = this.form.shipping_zip;
        this.form.billing_company = this.form.shipping_company;
        this.form.billing_country = this.form.shipping_country;
        this.form.billing_city = this.form.shipping_city;
        this.form.billing_state = this.form.shipping_state;
      } else {
        this.form.billing_first_name = '';
        this.form.billing_last_name = '';
        this.form.billing_email = '';
        this.form.billing_address = '';
        this.form.billing_phone = '';
        this.form.billing_zipcode = '';
        this.form.billing_company = '';
        this.form.billing_country = '';
        this.form.billing_city = '';
        this.form.billing_state = '';
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this5.same_as_shipping = false;
              setInterval(function () {
                if (_this5.same_as_shipping == true) {
                  _this5.form.billing_first_name = _this5.form.shipping_first_name;
                  _this5.form.billing_last_name = _this5.form.shipping_last_name;
                  _this5.form.billing_email = _this5.form.shipping_email;
                  _this5.form.billing_address = _this5.form.shipping_address;
                  _this5.form.billing_phone = _this5.form.shipping_phone;
                  _this5.form.billing_zipcode = _this5.form.shipping_zip;
                  _this5.form.billing_company = _this5.form.shipping_company;
                  _this5.form.billing_country = _this5.form.shipping_country;
                  _this5.form.billing_city = _this5.form.shipping_city;
                  _this5.form.billing_state = _this5.form.shipping_state;
                }
              }, 300);
              _context.next = 4;
              return service.get(_this5.form.id);

            case 4:
              res = _context.sent;
              _context.next = 7;
              return countryservice.getlist('').then(function (e) {
                _this5.countries = e.data;
              });

            case 7:
              _context.next = 9;
              return stateservice.getlist('?country_id=' + _this5.form.shipping_country).then(function (e) {
                _this5.states = e.data;
              });

            case 9:
              _context.next = 11;
              return citieservice.getlist('?state_id=' + _this5.form.shipping_state).then(function (e) {
                _this5.cities = e.data;
              });

            case 11:
              _context.next = 13;
              return stateservice.getlist('?country_id=' + _this5.form.billing_country).then(function (e) {
                _this5.billing_states = e.data;
              });

            case 13:
              _context.next = 15;
              return citieservice.getlist('?state_id=' + _this5.form.billing_state).then(function (e) {
                _this5.billing_cities = e.data;
              });

            case 15:
              _this5.form = {
                shipping_email: res.shipping_email,
                shipping_first_name: res.shipping_first_name,
                shipping_last_name: res.shipping_last_name,
                shipping_city: res.shipping_city,
                shipping_country: res.shipping_country,
                shipping_state: res.shipping_state,
                shipping_zip: res.shipping_zip,
                shipping_company: res.shipping_company,
                shipping_phone: res.shipping_phone,
                shipping_notes: res.shipping_notes,
                shipping_address: res.shipping_address,
                billing_email: res.billing_email,
                billing_first_name: res.billing_first_name,
                billing_last_name: res.billing_last_name,
                billing_city: res.billing_city,
                billing_country: res.billing_country,
                billing_state: res.billing_state,
                billing_zipcode: res.billing_zipcode,
                billing_company: res.billing_company,
                billing_phone: res.billing_phone,
                billing_address: res.billing_address,
                id: _this5.$route.params.id
              };
              _this5.order_discount = res.discount_amount;
              _this5.tax_percent = res.tax_percent;
              _this5.tax_amount = res.tax_amount;

              _this5.bread.push({
                text: "Edit",
                to: {
                  name: "auth.orders.edit",
                  params: {
                    id: _this5.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _this5.initializing = false;

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    checkfortax: function checkfortax() {
      var _this6 = this;

      this.tax_percent = 0;
      this.tax_amount = 0;

      if (parseInt(this.form.billing_state) > 0) {
        clearInterval(this.taxcalls);
        this.taxcalls = setInterval(function () {
          clearInterval(_this6.taxcalls);

          if (_this6.form.billing_state) {
            exemptionservice.getlist('?user_email=' + _this6.form.billing_email + '&state_id=' + _this6.form.billing_state).then(function (e) {
              if (e.data.length == 0) {
                stateservice.get(_this6.form.billing_state).then(function (e) {
                  _this6.tax_percent = e.tax_percent;
                });
              }
            });
          }
        }, 500);
      }
    },
    additem: function additem() {
      this.items.push({
        item_id: 0,
        qty: 1,
        item: {}
      });
    },
    selectProductAutoComplete: function selectProductAutoComplete(index, obj) {
      this.items[index].item = obj;
      this.items[index].item_id = obj.id;
    },
    resetError: function resetError() {
      this.errors = {
        shipping_email: [],
        shipping_notes: [],
        shipping_first_name: [],
        shipping_last_name: [],
        shipping_address: [],
        shipping_city: [],
        shipping_country: [],
        shipping_company: [],
        shipping_state: [],
        shipping_zip: [],
        shipping_phone: [],
        billing_email: [],
        billing_first_name: [],
        billing_last_name: [],
        billing_city: [],
        billing_country: [],
        billing_state: [],
        billing_zipcode: [],
        billing_company: [],
        billing_phone: [],
        billing_address: []
      };
    },
    addpermission: function () {
      var _addpermission = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formdata, i, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.resetError();

                if (!this.$refs.form.validate()) {
                  _context2.next = 39;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("shipping_email", this.form.shipping_email);
                formdata.append("shipping_notes", this.form.shipping_notes);
                formdata.append("shipping_first_name", this.form.shipping_first_name);
                formdata.append("shipping_last_name", this.form.shipping_last_name);
                formdata.append("shipping_address", this.form.shipping_address);
                formdata.append("shipping_city", this.form.shipping_city);
                formdata.append("shipping_country", this.form.shipping_country);
                formdata.append("shipping_company", this.form.shipping_company);
                formdata.append("shipping_state", this.form.shipping_state);
                formdata.append("shipping_zip", this.form.shipping_zip);
                formdata.append("shipping_phone", this.form.shipping_phone);
                formdata.append("billing_email", this.form.billing_email);
                formdata.append("billing_first_name", this.form.billing_first_name);
                formdata.append("billing_last_name", this.form.billing_last_name);
                formdata.append("billing_city", this.form.billing_city);
                formdata.append("billing_country", this.form.billing_country);
                formdata.append("billing_state", this.form.billing_state);
                formdata.append("billing_zipcode", this.form.billing_zipcode);
                formdata.append("billing_company", this.form.billing_company);
                formdata.append("billing_phone", this.form.billing_phone);
                formdata.append("billing_address", this.form.billing_address);
                formdata.append("discount_amount", this.order_discount);
                formdata.append("tax_percent", this.tax_percent);

                for (i = 0; i < this.items.length; i++) {
                  formdata.append("items[" + i + "][quantity]", this.items[i].qty);
                  formdata.append("items[" + i + "][id]", this.items[i].item_id);
                }

                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 35;
                  break;
                }

                _context2.next = 32;
                return service.update(formdata, this.form.id);

              case 32:
                res = _context2.sent;
                _context2.next = 38;
                break;

              case 35:
                _context2.next = 37;
                return service.create(formdata);

              case 37:
                res = _context2.sent;

              case 38:
                if (!res.status) {
                  if (res.data.shipping_email) {
                    this.errors.shipping_email = res.data.shipping_email;
                  }

                  if (res.data.shipping_notes) {
                    this.errors.shipping_notes = res.data.shipping_notes;
                  }

                  if (res.data.shipping_first_name) {
                    this.errors.shipping_first_name = res.data.shipping_first_name;
                  }

                  if (res.data.shipping_last_name) {
                    this.errors.shipping_last_name = res.data.shipping_last_name;
                  }

                  if (res.data.shipping_address) {
                    this.errors.shipping_address = res.data.shipping_address;
                  }

                  if (res.data.shipping_city) {
                    this.errors.shipping_city = res.data.shipping_city;
                  }

                  if (res.data.shipping_country) {
                    this.errors.shipping_country = res.data.shipping_country;
                  }

                  if (res.data.shipping_company) {
                    this.errors.shipping_company = res.data.shipping_company;
                  }

                  if (res.data.shipping_state) {
                    this.errors.shipping_state = res.data.shipping_state;
                  }

                  if (res.data.shipping_zip) {
                    this.errors.shipping_zip = res.data.shipping_zip;
                  }

                  if (res.data.shipping_phone) {
                    this.errors.shipping_phone = res.data.shipping_phone;
                  }

                  if (res.data.billing_email) {
                    this.errors.billing_email = res.data.billing_email;
                  }

                  if (res.data.billing_first_name) {
                    this.errors.billing_first_name = res.data.billing_first_name;
                  }

                  if (res.data.billing_last_name) {
                    this.errors.billing_last_name = res.data.billing_last_name;
                  }

                  if (res.data.billing_city) {
                    this.errors.billing_city = res.data.billing_city;
                  }

                  if (res.data.billing_country) {
                    this.errors.billing_country = res.data.billing_country;
                  }

                  if (res.data.billing_state) {
                    this.errors.billing_state = res.data.billing_state;
                  }

                  if (res.data.billing_zipcode) {
                    this.errors.billing_zipcode = res.data.billing_zipcode;
                  }

                  if (res.data.billing_company) {
                    this.errors.billing_company = res.data.billing_company;
                  }

                  if (res.data.billing_phone) {
                    this.errors.billing_phone = res.data.billing_phone;
                  }

                  if (res.data.billing_address) {
                    this.errors.billing_address = res.data.billing_address;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.orders.listing"
                  });
                }

              case 39:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addpermission() {
        return _addpermission.apply(this, arguments);
      }

      return addpermission;
    }()
  },
  data: function data() {
    return {
      initializing: true,
      countries: [],
      states: [],
      cities: [],
      billing_states: [],
      billing_cities: [],
      same_as_shipping: true,
      order_discount: 0,
      tax_percent: 0,
      tax_amount: 0,
      taxcalls: undefined,
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        shipping_email: '',
        shipping_notes: '',
        shipping_first_name: '',
        shipping_last_name: '',
        shipping_address: '',
        shipping_city: '',
        shipping_country: '',
        shipping_company: '',
        shipping_state: '',
        shipping_zip: '',
        shipping_phone: '',
        billing_email: '',
        billing_first_name: '',
        billing_last_name: '',
        billing_city: '',
        billing_country: '',
        billing_state: '',
        billing_zipcode: '',
        billing_company: '',
        billing_phone: '',
        billing_address: ''
      },
      errors: {
        shipping_email: [],
        shipping_notes: [],
        shipping_first_name: [],
        shipping_last_name: [],
        shipping_address: [],
        shipping_city: [],
        shipping_country: [],
        shipping_company: [],
        shipping_state: [],
        shipping_zip: [],
        shipping_phone: [],
        billing_email: [],
        billing_first_name: [],
        billing_last_name: [],
        billing_city: [],
        billing_country: [],
        billing_state: [],
        billing_zipcode: [],
        billing_company: [],
        billing_phone: [],
        billing_address: []
      },
      items: [],
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Order",
        to: {
          name: "auth.orders.listing"
        },
        disabled: false,
        exact: true
      }],
      loading: false,
      btnloading: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        }
      }
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    },
    order_subtotal: function order_subtotal() {
      var sub_total = 0;

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].item_id > 0) {
          sub_total += this.items[i].item.actual_price * this.items[i].qty;
        }
      }

      return sub_total;
    },
    order_total: function order_total() {
      var total = 0;

      if (this.items.length > 0) {
        total = this.order_subtotal - this.order_discount;
      }

      return total;
    },
    order_total_after_tax: function order_total_after_tax() {
      return this.order_total + this.tax_amount;
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ "./resources/js/components/orders/productautocomplete.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/orders/productautocomplete.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productautocomplete.vue?vue&type=template&id=70243790& */ "./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790&");
/* harmony import */ var _productautocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productautocomplete.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productautocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__.render,
  _productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/productautocomplete.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Order/Edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6fc8ad2a& */ "./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productautocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productautocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productautocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Order/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productautocomplete_vue_vue_type_template_id_70243790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productautocomplete.vue?vue&type=template&id=70243790& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790&");


/***/ }),

/***/ "./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc8ad2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=6fc8ad2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orders/productautocomplete.vue?vue&type=template&id=70243790& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    attrs: {
      items: _vm.autocomplete.entries,
      loading: _vm.autocomplete.isLoading,
      "search-input": _vm.autocomplete.search,
      color: "white",
      "hide-no-data": "",
      "hide-selected": "",
      "item-text": "sku",
      "item-value": "id",
      label: "Product",
      placeholder: "Start typing to Search",
      "prepend-icon": "mdi-database-search",
      "return-object": "",
    },
    on: {
      "update:searchInput": function ($event) {
        return _vm.$set(_vm.autocomplete, "search", $event)
      },
      "update:search-input": function ($event) {
        return _vm.$set(_vm.autocomplete, "search", $event)
      },
    },
    model: {
      value: _vm.autocomplete.item,
      callback: function ($$v) {
        _vm.$set(_vm.autocomplete, "item", $$v)
      },
      expression: "autocomplete.item",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/Edit.vue?vue&type=template&id=6fc8ad2a& ***!
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
    "div",
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
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticClass: "grey lighten-5 pa-10 rounded elevation-10",
          attrs: { "no-gutters": "" },
        },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12" } },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_first_name,
                              label: "Shipping First Name",
                            },
                            model: {
                              value: _vm.form.shipping_first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_first_name", $$v)
                              },
                              expression: "form.shipping_first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_last_name,
                              label: "Shipping Last Name",
                            },
                            model: {
                              value: _vm.form.shipping_last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_last_name", $$v)
                              },
                              expression: "form.shipping_last_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_email,
                              label: "Shipping Email",
                            },
                            model: {
                              value: _vm.form.shipping_email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_email", $$v)
                              },
                              expression: "form.shipping_email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
                        [
                          _c("v-select", {
                            attrs: {
                              "error-messages": _vm.errors.shipping_country,
                              items: _vm.countries,
                              label: "Country",
                              "item-text": "name",
                              "item-value": "id",
                            },
                            model: {
                              value: _vm.form.shipping_country,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_country", $$v)
                              },
                              expression: "form.shipping_country",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
                        [
                          _c("v-select", {
                            attrs: {
                              "error-messages": _vm.errors.shipping_state,
                              items: _vm.states,
                              label: "State",
                              "item-text": "name",
                              "item-value": "id",
                            },
                            model: {
                              value: _vm.form.shipping_state,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_state", $$v)
                              },
                              expression: "form.shipping_state",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
                        [
                          _c("v-select", {
                            attrs: {
                              "error-messages": _vm.errors.shipping_city,
                              items: _vm.cities,
                              label: "City",
                              "item-text": "name",
                              "item-value": "id",
                            },
                            model: {
                              value: _vm.form.shipping_city,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_city", $$v)
                              },
                              expression: "form.shipping_city",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_zip,
                              label: "Shipping Zip Code",
                            },
                            model: {
                              value: _vm.form.shipping_zip,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_zip", $$v)
                              },
                              expression: "form.shipping_zip",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.errors.shipping_company,
                              label: "Shipping Company",
                            },
                            model: {
                              value: _vm.form.shipping_company,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_company", $$v)
                              },
                              expression: "form.shipping_company",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_phone,
                              label: "Shipping Phone",
                            },
                            model: {
                              value: _vm.form.shipping_phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_phone", $$v)
                              },
                              expression: "form.shipping_phone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.shipping_address,
                              label: "Shipping Address",
                            },
                            model: {
                              value: _vm.form.shipping_address,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_address", $$v)
                              },
                              expression: "form.shipping_address",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-checkbox", {
                            attrs: { label: "Same as Shipping?" },
                            model: {
                              value: _vm.same_as_shipping,
                              callback: function ($$v) {
                                _vm.same_as_shipping = $$v
                              },
                              expression: "same_as_shipping",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.same_as_shipping
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", sm: "12" },
                            },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "4", sm: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_first_name,
                                          label: "Billing First Name",
                                        },
                                        model: {
                                          value: _vm.form.billing_first_name,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_first_name",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_first_name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "4", sm: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_last_name,
                                          label: "Billing Last Name",
                                        },
                                        model: {
                                          value: _vm.form.billing_last_name,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_last_name",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_last_name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "4", sm: "4" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_email,
                                          label: "Billing Email",
                                        },
                                        model: {
                                          value: _vm.form.billing_email,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_email",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_email",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "3", sm: "3" },
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          "error-messages":
                                            _vm.errors.billing_country,
                                          items: _vm.countries,
                                          label: "Country",
                                          "item-text": "name",
                                          "item-value": "id",
                                        },
                                        model: {
                                          value: _vm.form.billing_country,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_country",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_country",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "3", sm: "3" },
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          "error-messages":
                                            _vm.errors.billing_state,
                                          items: _vm.states,
                                          label: "State",
                                          "item-text": "name",
                                          "item-value": "id",
                                        },
                                        model: {
                                          value: _vm.form.billing_state,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_state",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_state",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "3", sm: "3" },
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          "error-messages":
                                            _vm.errors.billing_city,
                                          items: _vm.cities,
                                          label: "City",
                                          "item-text": "name",
                                          "item-value": "id",
                                        },
                                        model: {
                                          value: _vm.form.billing_city,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_city",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_city",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "3", sm: "3" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_zipcode,
                                          label: "Billing Zip Code",
                                        },
                                        model: {
                                          value: _vm.form.billing_zipcode,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_zipcode",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_zipcode",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "6", sm: "6" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          "error-messages":
                                            _vm.errors.billing_company,
                                          label: "Billing Company",
                                        },
                                        model: {
                                          value: _vm.form.billing_company,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_company",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_company",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "6", sm: "6" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_phone,
                                          label: "Billing Phone",
                                        },
                                        model: {
                                          value: _vm.form.billing_phone,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_phone",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_phone",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-0",
                                      attrs: { cols: "12", sm: "12" },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          "error-messages":
                                            _vm.errors.billing_address,
                                          label: "Billing Address",
                                        },
                                        model: {
                                          value: _vm.form.billing_address,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "billing_address",
                                              $$v
                                            )
                                          },
                                          expression: "form.billing_address",
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
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
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
                                          _vm._v(
                                            "\n          Product\n        "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n          Quantity\n        "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th"),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.items, function (v, k) {
                                        return _c("tr", { key: k }, [
                                          _c(
                                            "td",
                                            [
                                              v.item_id > 0
                                                ? _c("div", [
                                                    _vm._v(_vm._s(v.item.sku)),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("productautocomplete", {
                                                attrs: { index: k },
                                                on: {
                                                  product_select:
                                                    _vm.selectProductAutoComplete,
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  type: "number",
                                                  rules: [_vm.rules.required],
                                                },
                                                model: {
                                                  value: v.qty,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      v,
                                                      "qty",
                                                      _vm._n($$v)
                                                    )
                                                  },
                                                  expression: "v.qty",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    color: "red",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.items.splice(
                                                        k,
                                                        1
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-content-cut"),
                                                  ]),
                                                ],
                                                1
                                              ),
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
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "primary mb-2",
                                elevation: "1",
                                large: "",
                                raised: "",
                              },
                              on: { click: _vm.additem },
                            },
                            [_vm._v("Add Item")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                        ],
                        1
                      ),
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
                                {
                                  attrs: {
                                    flat: "",
                                    color: "blue-grey",
                                    dark: "",
                                  },
                                },
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
                                      value: _vm.order_subtotal,
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      filled: "",
                                      label: "Discount",
                                      type: "number",
                                      step: "any",
                                    },
                                    model: {
                                      value: _vm.order_discount,
                                      callback: function ($$v) {
                                        _vm.order_discount = _vm._n($$v)
                                      },
                                      expression: "order_discount",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      filled: "",
                                      label: "Tax%",
                                      type: "number",
                                      step: "any",
                                      readonly: "",
                                      "persistent-hint": "",
                                      hint: this.tax_amount,
                                    },
                                    model: {
                                      value: _vm.tax_percent,
                                      callback: function ($$v) {
                                        _vm.tax_percent = _vm._n($$v)
                                      },
                                      expression: "tax_percent",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      filled: "",
                                      label: "Total",
                                      readonly: "",
                                      value: _vm.order_total_after_tax,
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
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "secondary",
                                elevation: "1",
                                large: "",
                                raised: "",
                                loading: _vm.btnloading,
                                disabled: _vm.btnloading,
                              },
                              on: { click: _vm.addpermission },
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.form.id > 0 ? "Update" : "Create Order"
                                )
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