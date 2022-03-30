"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[760],{1369:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(7757),r=n.n(i);function a(t,e,n,i,r,a,s){try{var o=t[a](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var s=t.apply(e,n);function o(t){a(s,i,r,o,c,"next",t)}function c(t){a(s,i,r,o,c,"throw",t)}o(void 0)}))}}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=n(9669);const l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,n,i,a,l;return e=t,n=[{key:"getlist",value:function(t){return c.get("/api/".concat(this.baseuri).concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=s(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return c.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(a=s(r().mark((function t(e,n){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/"+this.baseuri+"/"+n,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return i=t.sent,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})}],n&&o(e.prototype,n),i&&o(e,i),t}()},2301:(t,e,n)=>{n.d(e,{Z:()=>r});const i={props:{order_status:{type:Number,default:1}},data:function(){return{statuses:{1:{color:"primary",name:"Pending"},2:{color:"orange",name:"Processing"},3:{color:"blue",name:"Holded"},4:{color:"red",name:"Canceled"},5:{color:"green",name:"Completed/Delivered"}}}}};const r=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline"},[n("v-chip",{attrs:{"text-color":"white",color:t.statuses[t.order_status].color}},[t._v(" "+t._s(t.statuses[t.order_status].name)+" ")])],1)}),[],!1,null,null,null).exports},8760:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var i=n(7757),r=n.n(i),a=n(1369),s=n(2301);function o(t,e,n,i,r,a,s){try{var o=t[a](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,r)}var c=new a.Z("orders");const l={mounted:function(){var t,e=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get(e.$route.params.id).then((function(t){return e.loading=!1,t}));case 2:e.invoice=t.sent;case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){o(a,i,r,s,c,"next",t)}function c(t){o(a,i,r,s,c,"throw",t)}s(void 0)}))})()},data:function(){return{invoice:{},loading:!0,tracking_id:""}},components:{OrderStatus:s.Z},methods:{sendTrackingCode:function(){alert("her")}}};const v=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{outlined:"",elevation:"2",loading:t.loading}},[n("v-card-title",[t._v("Invoice #"),n("b",[t._v(t._s(t.invoice.id))])]),t._v(" "),n("v-card-text",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("\n              Order Status:\n              "),n("OrderStatus",{attrs:{order_status:t.invoice.order_status}})],1)],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[n("v-list-item-title",{staticClass:"text-h6"},[t._v("\n                Date:\n                "),n("b",i?[t._v(t._s(t.invoice.created_date_formatted_us))]:[t._v(t._s(t.invoice.created_date_formatted))])])]}}])})],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[n("v-text-field",{attrs:{"append-icon":"mdi-truck-cargo-container","append-outer-icon":t.tracking_id?"mdi-send":"",filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Tracking ID",type:"text"},on:{"click:append-outer":t.sendTrackingCode},model:{value:t.tracking_id,callback:function(e){t.tracking_id=e},expression:"tracking_id"}})],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-list",{attrs:{"two-line":""}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-account ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.invoice.shipping_first_name)+"\n                "+t._s(t.invoice.shipping_last_name))]),t._v(" "),n("v-list-item-subtitle",[t._v("Full Name")])],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-phone ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.invoice.shipping_phone))]),t._v(" "),n("v-list-item-subtitle",[t._v("Mobile/Lan line")])],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-email ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.invoice.shipping_email))]),t._v(" "),n("v-list-item-subtitle",[t._v("Order Email")])],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-map-marker ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.invoice.shipping_address))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.invoice.shipping_city)+", "+t._s(t.invoice.shipping_state)+"\n                "+t._s(t.invoice.shipping_zip)),n("br"),t._v("\n                "+t._s(t.invoice.shipping_country))])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[t._l(5,(function(e){return n("v-sheet",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:e,attrs:{color:"grey lighten-4"}},[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item"}})],1)})),t._v(" "),n("v-simple-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Product")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Qty")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Total")])])]),t._v(" "),n("tbody",t._l(t.invoice.products,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.product?e.product.sku:"N/A"))]),t._v(" "),n("td",[t._v(t._s(e.quantity))]),t._v(" "),n("td",[t._v("$ "+t._s(e.rowtotal))])])})),0)]},proxy:!0}])})],2)],1)],1)],1)}),[],!1,null,null,null).exports}}]);