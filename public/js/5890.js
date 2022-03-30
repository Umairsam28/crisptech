"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5890],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,o){try{var i=t[s](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,u,"next",t)}function u(t){s(o,n,a,i,u,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,n,s,c;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(s=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return s.apply(this,arguments)})}],r&&i(e.prototype,r),n&&i(e,n),t}()},5890:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(7757),a=r.n(n),s=r(1369);function o(t,e,r,n,a,s,o){try{var i=t[s](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function i(t){o(s,n,a,i,u,"next",t)}function u(t){o(s,n,a,i,u,"throw",t)}i(void 0)}))}}var u=new s.Z("states"),c=new s.Z("countries");var d;const l={name:"auth.states.add",mounted:function(){var t=this;return i(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.get("").then((function(e){t.countries=e})),!t.$route.params.id){e.next=9;break}return e.next=4,u.get(t.form.id);case 4:r=e.sent,t.form={name:r.name,country_id:r.country_id,tax_percent:r.tax_percent,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.states.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=10;break;case 9:t.bread.push({text:"Add",to:{name:"auth.states.add"},disabled:!1,exact:!0});case 10:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],country_id:[],tax_percent:[]}},addpermission:(d=i(a().mark((function t(){var e,r,n,s=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]&&s[0],this.resetError(),!this.$refs.form.validate()){t.next=19;break}if(this.btnloading=!0,(r=new FormData).append("name",this.form.name),r.append("country_id",this.form.country_id),r.append("tax_percent",this.form.tax_percent),this.btnloading=!1,!(this.form.id>0)){t.next=15;break}return t.next=12,u.update(r,this.form.id);case 12:n=t.sent,t.next=18;break;case 15:return t.next=17,u.create(r);case 17:n=t.sent;case 18:n.status?0==e?this.$router.push({name:"auth.states.listing"}):(this.$store.commit("setNotification","State Saved, You can now add more"),this.form={country_id:0,name:"",tax_percent:0,id:0}):(n.data.name&&(this.errors.name=n.data.name),n.data.country_id&&(this.errors.country_id=n.data.country_id),n.data.tax_percent&&(this.errors.tax_percent=n.data.tax_percent));case 19:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{form:{id:this.$route.params.id?this.$route.params.id:0,name:"",country_id:0,tax_percent:!1},countries:[],errors:{name:[],country_id:[],tax_percent:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"State",to:{name:"auth.states.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const f=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.tax_percent,label:"Tax %",type:"number",min:"0",max:"100"},model:{value:t.form.tax_percent,callback:function(e){t.$set(t.form,"tax_percent",t._n(e))},expression:"form.tax_percent"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:t.countries,"item-text":"name","item-value":"id",label:"Country*",required:"","error-messages":t.errors.country_id},model:{value:t.form.country_id,callback:function(e){t.$set(t.form,"country_id",e)},expression:"form.country_id"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(!1)}}},[t._v(t._s(t.form.id>0?"Update":"Add"))]),t._v(" "),0==t.form.id?r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(!0)}}},[t._v("Add and Stay")]):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);