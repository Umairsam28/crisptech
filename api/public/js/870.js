"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[870],{7929:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){s(o,a,n,i,u,"next",e)}function u(e){s(o,a,n,i,u,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=r(9669);const c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a,s,c;return t=e,r=[{key:"getlist",value:function(e){return u.get("/api/roles".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(c=o(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/roles",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return u.delete("/api/roles/".concat(t))}},{key:"get",value:function(e){return u.get("/api/roles/".concat(e)).then((function(e){return e.data.data}))}},{key:"update",value:(s=o(n().mark((function e(t,r){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,u.post("/api/roles/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)})}],r&&i(t.prototype,r),a&&i(t,a),e}())},2205:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){s(o,a,n,i,u,"next",e)}function u(e){s(o,a,n,i,u,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=r(9669);const c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a,s,c;return t=e,r=[{key:"getlist",value:function(e){return u.get("/api/user".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(c=o(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/user",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return u.delete("/api/user/".concat(t))}},{key:"get",value:function(e){return u.get("/api/user/".concat(e)).then((function(e){return e.data.data}))}},{key:"update",value:(s=o(n().mark((function e(t,r){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,u.post("/api/user/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)})}],r&&i(t.prototype,r),a&&i(t,a),e}())},1870:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(7757),n=r.n(a),s=r(2205),o=r(7929);function i(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function o(e){i(s,a,n,o,u,"next",e)}function u(e){i(s,a,n,o,u,"throw",e)}o(void 0)}))}}var c;const l={name:"auth.users.add",mounted:function(){var e=this;return u(n().mark((function t(){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.id=e.$route.params.id,t.next=3,s.Z.get(e.id);case 3:r=t.sent,e.name=r.name,e.email=r.email,e.password=r.password,e.role_id=r.role_id,e.image_url=r.image_url,o.Z.get("").then((function(t){e.roles=t}));case 10:case"end":return t.stop()}}),t)})))()},methods:{resetError:function(){this.errors={name:[],email:[],password:[],role_id:[],image:[]}},addbrand:(c=u(n().mark((function e(){var t,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=14;break}return this.btnloading=!0,(t=new FormData).append("name",this.name),t.append("email",this.email),""!=this.password&&t.append("password",this.password),t.append("role_id",this.role_id),this.image&&t.append("image",this.image),this.btnloading=!1,e.next=12,s.Z.update(t,this.id);case 12:(r=e.sent).status?this.$router.push({name:"auth.users.listing"}):(r.data.name&&(this.errors.name=r.data.name),r.data.email&&(this.errors.email=r.data.email),r.data.password&&(this.errors.password=r.data.password),r.data.role_id&&(this.errors.role_id=r.data.role_id),r.data.image&&(this.errors.image=r.data.image));case 14:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{name:"",email:"",password:"",role_id:"",roles:[],image:null,image_url:"",id:0,errors:{name:[],email:[],password:[],role_id:[],image:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"User",to:{name:"auth.users.listing"},disabled:!1,exact:!0},{text:"Add",to:{name:"auth.users.edit",params:{id:this.$route.params.id}},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const d=(0,r(1900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.name,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.email,label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:e.roles,"item-text":"name","item-value":"id",label:"Role*",required:"","error-messages":e.errors.role_id},model:{value:e.role_id,callback:function(t){e.role_id=t},expression:"role_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{"error-messages":e.errors.password,label:"Password",type:"password",autocomplete:"new-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v("\n"+e._s(e.image)+"\n"),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":e.errors.image,label:"Image"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1),e._v(" "),e.image_url?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-img",{attrs:{"lazy-src":e.image_url,"max-height":"150","max-width":"250",src:e.image_url}})],1):e._e(),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addbrand}},[e._v("Update")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);