"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9856],{8176:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,i){try{var o=t[s](i),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){s(i,n,a,o,u,"next",t)}function u(t){s(i,n,a,o,u,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=r(9669);const c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,c;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/permissions".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=i(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/permissions",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/permissions/".concat(e))}},{key:"get",value:function(t){return u.get("/api/permissions/".concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(s=i(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/permissions/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return s.apply(this,arguments)})}],r&&o(e.prototype,r),n&&o(e,n),t}())},7929:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,i){try{var o=t[s](i),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){s(i,n,a,o,u,"next",t)}function u(t){s(i,n,a,o,u,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=r(9669);const c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,c;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/roles".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=i(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/roles",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/roles/".concat(e))}},{key:"get",value:function(t){return u.get("/api/roles/".concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(s=i(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/roles/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return s.apply(this,arguments)})}],r&&o(e.prototype,r),n&&o(e,n),t}())},9856:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var n=r(7757),a=r.n(n),s=r(7929),i=r(8176);function o(t,e,r,n,a,s,i){try{var o=t[s](i),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function i(t){o(s,n,a,i,u,"next",t)}function u(t){o(s,n,a,i,u,"throw",t)}i(void 0)}))}}var c;const l={name:"auth.roles.add",mounted:function(){var t=this;return u(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("");case 2:if(t.permissions=e.sent,!t.$route.params.id){e.next=12;break}return e.next=6,s.Z.get(t.form.id);case 6:r=e.sent,n=r.permissions.map((function(t){return{title:t.permission.title,id:t.permission_id}})),t.form={name:r.name,title:r.title,id:t.$route.params.id,permissions:n},t.bread.push({text:"Edit",to:{name:"auth.roles.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=13;break;case 12:t.bread.push({text:"Add",to:{name:"auth.roles.add"},disabled:!1,exact:!0});case 13:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],title:[],permissions:[]}},addpermission:(c=u(a().mark((function t(){var e,r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=18;break}for(this.btnloading=!0,(e=new FormData).append("name",this.form.name),e.append("title",this.form.title),r=0;r<this.form.permissions.length;r++)e.append("permissions["+r+"]",this.form.permissions[r].id);if(this.btnloading=!1,!(this.form.id>0)){t.next=14;break}return t.next=11,s.Z.update(e,this.form.id);case 11:n=t.sent,t.next=17;break;case 14:return t.next=16,s.Z.create(e);case 16:n=t.sent;case 17:n.status?this.$router.push({name:"auth.roles.listing"}):(n.data.name&&(this.errors.name=n.data.name),n.data.title&&(this.errors.title=n.data.title));case 18:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{form:{id:this.$route.params.id?this.$route.params.id:0,name:"",title:"",permissions:[]},errors:{name:[],title:[],permissions:[]},permissions:[],bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Roles",to:{name:"auth.roles.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const d=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.name,label:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:t.permissions,label:"Permissions","item-text":"title","item-value":"id","return-object":"",multiple:"",chips:"",hint:"Select All permissions you want to sync with this role","persistent-hint":""},model:{value:t.form.permissions,callback:function(e){t.$set(t.form,"permissions",e)},expression:"form.permissions"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);