"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[461],{9031:(t,e,a)=>{a.d(e,{Z:()=>c});var r=a(7757),n=a.n(r);function o(t,e,a,r,n,o,s){try{var u=t[o](s),i=u.value}catch(t){return void a(t)}u.done?e(i):Promise.resolve(i).then(r,n)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function u(t){o(s,r,n,u,i,"next",t)}function i(t){o(s,r,n,u,i,"throw",t)}u(void 0)}))}}function u(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=a(9669);const c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a,r,o,c;return e=t,a=[{key:"getlist",value:function(t){return i.get("/api/coupons".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=s(n().mark((function t(e){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("/api/coupons",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return i.delete("/api/coupons/".concat(e))}},{key:"get",value:function(t){return i.get("/api/coupons/".concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(o=s(n().mark((function t(e,a){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,i.post("/api/coupons/"+a,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return o.apply(this,arguments)})}],a&&u(e.prototype,a),r&&u(e,r),t}())},5461:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var r=a(7757),n=a.n(r),o=a(9031);function s(t,e,a,r,n,o,s){try{var u=t[o](s),i=u.value}catch(t){return void a(t)}u.done?e(i):Promise.resolve(i).then(r,n)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function u(t){s(o,r,n,u,i,"next",t)}function i(t){s(o,r,n,u,i,"throw",t)}u(void 0)}))}}var i;const c={name:"auth.coupons.add",mounted:function(){var t=this;return u(n().mark((function e(){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.params.id){e.next=8;break}return e.next=3,o.Z.get(t.form.id);case 3:a=e.sent,t.form={code:a.code,discount:a.discount,discount_type:a.discount_type,minimum_cart_value:a.minimum_cart_value,maximum_cart_value:a.maximum_cart_value,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.coupons.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=9;break;case 8:t.bread.push({text:"Add",to:{name:"auth.coupons.add"},disabled:!1,exact:!0});case 9:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={code:[],discount:[],discount_type:[],minimum_cart_value:[],maximum_cart_value:[]}},addpermission:(i=u(n().mark((function t(){var e,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=20;break}if(this.btnloading=!0,(e=new FormData).append("code",this.form.code),e.append("discount",this.form.discount),e.append("discount_type",this.form.discount_type),e.append("minimum_cart_value",this.form.minimum_cart_value),e.append("maximum_cart_value",this.form.maximum_cart_value),this.btnloading=!1,!(this.form.id>0)){t.next=16;break}return t.next=13,o.Z.update(e,this.form.id);case 13:a=t.sent,t.next=19;break;case 16:return t.next=18,o.Z.create(e);case 18:a=t.sent;case 19:a.status?this.$router.push({name:"auth.coupons.listing"}):(a.data.code&&(this.errors.code=a.data.code),a.data.discount_type&&(this.errors.discount_type=a.data.discount_type),a.data.discount&&(this.errors.discount=a.data.discount),a.data.minimum_cart_value&&(this.errors.minimum_cart_value=a.data.minimum_cart_value),a.data.maximum_cart_value&&(this.errors.maximum_cart_value=a.data.maximum_cart_value));case 20:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},watch:{},data:function(){return{form:{id:this.$route.params.id?this.$route.params.id:0,code:"",discount_type:0,discount:0,minimum_cart_value:0,maximum_cart_value:0},errors:{code:[],discount_type:[],discount:[],minimum_cart_value:[],maximum_cart_value:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Coupons",to:{name:"auth.coupons.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const d=(0,a(1900).Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),a("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.code,label:"Code"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:[{id:0,name:"Percentage"},{id:1,name:"Amount"}],label:"Discount Type","item-text":"name","item-value":"id"},model:{value:t.form.discount_type,callback:function(e){t.$set(t.form,"discount_type",e)},expression:"form.discount_type"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{type:"number",rules:[t.rules.required],"error-messages":t.errors.discount,label:"Discount"},model:{value:t.form.discount,callback:function(e){t.$set(t.form,"discount",e)},expression:"form.discount"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{type:"number","error-messages":t.errors.minimum_cart_value,label:"Minimum Cart Value"},model:{value:t.form.minimum_cart_value,callback:function(e){t.$set(t.form,"minimum_cart_value",e)},expression:"form.minimum_cart_value"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{type:"number","error-messages":t.errors.maximum_cart_value,label:"Maximum Cart Value"},model:{value:t.form.maximum_cart_value,callback:function(e){t.$set(t.form,"maximum_cart_value",e)},expression:"form.maximum_cart_value"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);