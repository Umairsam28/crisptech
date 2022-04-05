"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{5333:(t,n,e)=>{e.d(n,{Z:()=>i});var a=e(7757),r=e.n(a);function s(t,n,e,a,r,s,u){try{var o=t[s](u),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var u=t.apply(n,e);function o(t){s(u,a,r,o,c,"next",t)}function c(t){s(u,a,r,o,c,"throw",t)}o(void 0)}))}}function o(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=e(9669);const i=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a,s,i,p,v,d;return n=t,e=[{key:"getlist",value:function(t,n){return c.get("/api/leads/".concat(t,"/payments").concat(n)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"delete",value:function(t){var n=t.lead,e=t.id;return c.delete("/api/leads/".concat(n,"/payments/").concat(e))}},{key:"create",value:(d=u(r().mark((function t(n,e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/leads/".concat(n,"/payments"),e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return d.apply(this,arguments)})},{key:"get",value:(v=u(r().mark((function t(n,e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/leads/".concat(n,"/payments/").concat(e));case 2:return a=t.sent,t.abrupt("return",a.data.data);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return v.apply(this,arguments)})},{key:"update",value:(p=u(r().mark((function t(n,e,a){var s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.append("_method","put"),t.next=3,c.post("/api/leads/".concat(a,"/payments/").concat(e),n).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)}))),function(t,n,e){return p.apply(this,arguments)})},{key:"checkEmail",value:(i=u(r().mark((function t(n,e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/payments/"+n,e).then((function(t){return{status:1,data:t.data}})).catch((function(t){return{status:0,data:t.response.message}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return i.apply(this,arguments)})},{key:"getBrand",value:(s=u(r().mark((function t(n){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/payments-getbrand/"+n).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),function(t){return s.apply(this,arguments)})}],e&&o(n.prototype,e),a&&o(n,a),t}())},8941:(t,n,e)=>{function a(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}e.d(n,{Z:()=>s});var r=e(9669);const s=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,s;return n=t,(e=[{key:"getlist",value:function(t){return r.get("/api/project".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"validateTask",value:function(t){return r.post("/api/task-validate",t).then((function(t){return{status:1,data:"validated"}})).catch((function(t){return{status:0,data:t.response.data.errors}}))}},{key:"createTask",value:function(t,n){return r.post("/api/project/"+t+"/task",n).then((function(t){return{status:1,data:t.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}))}},{key:"create",value:function(t){return r.post("/api/project",t).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}))}},{key:"get",value:function(t){return r.get("/api/project/".concat(t)).then((function(t){return t.data.data})).catch((function(t){return t}))}}])&&a(n.prototype,e),s&&a(n,s),t}())},2553:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var a=e(7757),r=e.n(a),s=e(5333),u=e(8941);function o(t,n,e,a,r,s,u){try{var o=t[s](u),c=o.value}catch(t){return void e(t)}o.done?n(c):Promise.resolve(c).then(a,r)}const c={data:function(){return{project:{},payments:[]}},mounted:function(){var t,n=this;return(t=r().mark((function t(){var e,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.$route.params.id,t.next=3,s.Z.getlist(n.user.lead.id,"?project_id="+e).then((function(t){return t.data}));case 3:return a=t.sent,n.payments=a,t.next=7,u.Z.get(e);case 7:n.project=t.sent;case 8:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,r){var s=t.apply(n,e);function u(t){o(s,a,r,u,c,"next",t)}function c(t){o(s,a,r,u,c,"throw",t)}u(void 0)}))})()},computed:{user:function(){return this.$store.getters.loggedInUser},total_amount:function(){for(var t=0,n=0,e=0,a=0;a<this.payments.length;a++)t+=this.payments[a].amount,1==this.payments[a].status?n+=this.payments[a].amount:e+=this.payments[a].amount;return{total:t,balance:e,paid:n}}}};const i=(0,e(1900).Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{attrs:{elevation:"2"}},[e("v-card-title",[t._v("Invoice #"+t._s(t.project.project_id))]),t._v(" "),e("v-card-subtitle",[t._v("Invoice to "+t._s(t.user.email))]),t._v(" "),e("v-card-text",{staticClass:"pl-10 pr-10"},[e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n              Description\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Amount\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Generated@\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Status\n            ")]),t._v(" "),e("th")])]),t._v(" "),e("tbody",[t._l(t.payments,(function(n){return e("tr",{key:n.id},[e("td",[t._v(t._s(n.description))]),t._v(" "),e("td",[t._v(t._s(n.amount))]),t._v(" "),e("td",[t._v(t._s(n.created_at_formatted))]),t._v(" "),e("td",[t._v(t._s(n.payment_status_text))]),t._v(" "),e("td",[1!=n.status?e("v-btn",{staticClass:"white--text",attrs:{link:"",to:{name:"guest.payment",params:{id:parseInt(n.id)}},small:"",color:"blue"}},[e("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-cash ")]),t._v("\n              Pay Now\n              ")],1):t._e()],1)])})),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v(" ")]),t._v(" "),e("td",[t._v("Balance")]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.total_amount.balance))])]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v(" ")]),t._v(" "),e("td",[t._v("Paid")]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.total_amount.paid))])]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v(" ")]),t._v(" "),e("td",[t._v("Total Amount")]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.total_amount.total))])]),t._v(" "),e("td",[t._v(" ")])])],2)]},proxy:!0}])})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"primary"}},[t._v("\n      Download PDF\n    ")])],1)],1)}),[],!1,null,null,null).exports}}]);