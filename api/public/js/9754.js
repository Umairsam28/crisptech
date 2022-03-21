"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9754],{1369:(t,e,a)=>{a.d(e,{Z:()=>c});var r=a(7757),n=a.n(r);function s(t,e,a,r,n,s,i){try{var o=t[s](i),u=o.value}catch(t){return void a(t)}o.done?e(u):Promise.resolve(u).then(r,n)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function o(t){s(i,r,n,o,u,"next",t)}function u(t){s(i,r,n,o,u,"throw",t)}o(void 0)}))}}function o(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=a(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,a,r,s,c;return e=t,a=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(c=i(n().mark((function t(e){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(s=i(n().mark((function t(e,a){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+a,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return s.apply(this,arguments)})}],a&&o(e.prototype,a),r&&o(e,r),t}()},9754:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var r=a(7757),n=a.n(r),s=a(1369);function i(t,e,a,r,n,s,i){try{var o=t[s](i),u=o.value}catch(t){return void a(t)}o.done?e(u):Promise.resolve(u).then(r,n)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){i(s,r,n,o,u,"next",t)}function u(t){i(s,r,n,o,u,"throw",t)}o(void 0)}))}}var u=new s.Z("cities"),c=new s.Z("states");var d;const l={name:"auth.cities.add",mounted:function(){var t=this;return o(n().mark((function e(){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.get("").then((function(e){t.states=e})),!t.$route.params.id){e.next=9;break}return e.next=4,u.get(t.form.id);case 4:a=e.sent,t.form={name:a.name,state_id:a.state_id,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.cities.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=10;break;case 9:t.bread.push({text:"Add",to:{name:"auth.cities.add"},disabled:!1,exact:!0});case 10:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],state_id:[]}},addpermission:(d=o(n().mark((function t(){var e,a,r,s=arguments;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]&&s[0],this.resetError(),!this.$refs.form.validate()){t.next=18;break}if(this.btnloading=!0,(a=new FormData).append("name",this.form.name),a.append("state_id",this.form.state_id),this.btnloading=!1,!(this.form.id>0)){t.next=14;break}return t.next=11,u.update(a,this.form.id);case 11:r=t.sent,t.next=17;break;case 14:return t.next=16,u.create(a);case 16:r=t.sent;case 17:r.status?0==e?this.$router.push({name:"auth.cities.listing"}):(this.$store.commit("setNotification","City Saved, You can now add more"),this.form={state_id:0,name:"",id:0}):(r.data.name&&(this.errors.name=r.data.name),r.data.state_id&&(this.errors.state_id=r.data.state_id));case 18:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{form:{id:this.$route.params.id?this.$route.params.id:0,name:"",state_id:0},states:[],errors:{name:[],state_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"City",to:{name:"auth.cities.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const f=(0,a(1900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),a("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-select",{attrs:{items:t.states,"item-text":"name","item-value":"id",label:"State*",required:"","error-messages":t.errors.state_id},model:{value:t.form.state_id,callback:function(e){t.$set(t.form,"state_id",e)},expression:"form.state_id"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(!1)}}},[t._v(t._s(t.form.id>0?"Update":"Add"))]),t._v(" "),0==t.form.id?a("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(!0)}}},[t._v("Add and Stay")]):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);