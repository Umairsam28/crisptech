"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6133],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(7757),n=r.n(a);function o(t,e,r,a,n,o,s){try{var i=t[o](s),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function i(t){o(s,a,n,i,u,"next",t)}function u(t){o(s,a,n,i,u,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,o,c;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=s(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(o=s(n().mark((function t(e,r){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})}],r&&i(e.prototype,r),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6133:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var a=r(7757),n=r.n(a);function o(t,e,r,a,n,o,s){try{var i=t[o](s),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(a,n)}var s=new(r(1369).Z)("track-order");const i={name:"auth.track_order_forms.add",watch:{},methods:{},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{MIX_FRONT_WEBSITE_URL:"http://localhost:3000",form:{id:this.$route.params.id?this.$route.params.id:0,email:"",name:"",phone:"",order_id:0,description:""},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Track Order",to:{name:"auth.track_order_forms.listing"},disabled:!1,exact:!0},{text:"View",to:{name:"auth.track_order_forms.view",params:{id:this.$route.params.id}},disabled:!0,exact:!0}],loading:!1,btnloading:!1}},mounted:function(){var t,e=this;return(t=n().mark((function t(){var r,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.params.id){t.next=13;break}return t.next=3,s.get(e.form.id);case 3:r=t.sent,e.form={name:r.name,email:r.email,phone:r.phone,description:r.description,order_id:r.order_id,id:e.$route.params.id},(a=new FormData).append("is_new",0),a.append("name",e.form.name),a.append("email",e.form.email),a.append("phone",e.form.phone),a.append("description",e.form.description),a.append("order_id",e.form.order_id),s.update(a,e.$route.params.id);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function i(t){o(s,a,n,i,u,"next",t)}function u(t){o(s,a,n,i,u,"throw",t)}i(void 0)}))})()}};const u=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{value:t.form.name,label:"Name",readonly:""}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{value:t.form.email,label:"Email",readonly:""}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{value:t.form.phone,label:"Phone",readonly:""}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{value:t.form.order_id,label:"Order",readonly:""}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-textarea",{attrs:{outlined:"",label:"Message",readonly:"",value:t.form.description}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);