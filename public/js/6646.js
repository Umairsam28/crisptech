"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6646],{1369:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,c,"next",e)}function c(e){s(i,a,n,o,c,"throw",e)}o(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=r(9669);const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseuri=t}var t,r,a,s,u;return t=e,r=[{key:"getlist",value:function(e){return c.get("/api/".concat(this.baseuri).concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(u=i(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("/api/"+this.baseuri,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return c.delete("/api/".concat(this.baseuri,"/").concat(t))}},{key:"get",value:function(e){return c.get("/api/".concat(this.baseuri,"/").concat(e)).then((function(e){return e.data.data}))}},{key:"update",value:(s=i(n().mark((function e(t,r){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,c.post("/api/"+this.baseuri+"/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})}],r&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},6646:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,c,"next",e)}function c(e){s(i,a,n,o,c,"throw",e)}o(void 0)}))}}var o=new(r(1369).Z)("banners");var c;const u={name:"auth.banners.add",mounted:function(){var e=this;return i(n().mark((function t(){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.params.id){t.next=8;break}return t.next=3,o.get(e.form.id);case 3:r=t.sent,e.form={redirect_to:r.redirect_to,page:r.page,id:e.$route.params.id,image_url:r.image_url},e.bread.push({text:"Edit",to:{name:"auth.banners.edit",params:{id:e.$route.params.id}},disabled:!1,exact:!0}),t.next=9;break;case 8:e.bread.push({text:"Add",to:{name:"auth.banners.add"},disabled:!1,exact:!0});case 9:case"end":return t.stop()}}),t)})))()},methods:{resetError:function(){this.errors={redirect_to:[],page:[],image:[]}},addpermission:(c=i(n().mark((function e(){var t,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=18;break}if(this.btnloading=!0,(t=new FormData).append("redirect_to",this.form.redirect_to),t.append("page",this.form.page),this.form.image&&t.append("image",this.form.image),this.btnloading=!1,!(this.form.id>0)){e.next=14;break}return e.next=11,o.update(t,this.form.id);case 11:r=e.sent,e.next=17;break;case 14:return e.next=16,o.create(t);case 16:r=e.sent;case 17:r.status?this.$router.push({name:"auth.banners.listing"}):(r.data.redirect_to&&(this.errors.redirect_to=r.data.redirect_to),r.data.page&&(this.errors.page=r.data.page),r.data.image&&(this.errors.image=r.data.image));case 18:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{MIX_FRONT_WEBSITE_URL:"http://localhost:3000",form:{id:this.$route.params.id?this.$route.params.id:0,redirect_to:"",page:"",image:void 0},errors:{redirect_to:[],page:[],image:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Banner",to:{name:"auth.banners.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const d=(0,r(1900).Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.redirect_to,hint:e.MIX_FRONT_WEBSITE_URL+"/"+e.form.redirect_to,label:"Redirect To","persistent-hint":""},model:{value:e.form.redirect_to,callback:function(t){e.$set(e.form,"redirect_to",t)},expression:"form.redirect_to"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:["Home"],label:"Page",rules:[e.rules.required],"error-messages":e.errors.page},model:{value:e.form.page,callback:function(t){e.$set(e.form,"page",t)},expression:"form.page"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":e.errors.image,label:"Image"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),e._v(" "),e.form.id>0&&e.form.image_url?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-img",{attrs:{"lazy-src":e.form.image_url,"max-height":"150","max-width":"250",src:e.form.image_url}})],1):e._e(),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addpermission}},[e._v(e._s(e.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);