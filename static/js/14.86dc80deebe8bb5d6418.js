webpackJsonp([14],{T6vi:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Xxa5"),s=e.n(n),l=e("exGp"),r=e.n(l),u=(e("YaEn"),{name:"XPage",components:{},data:function(){return{subMenu:""}},mounted:function(){var t=this;return r()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.subMenu=t.$route.path;case 1:case"end":return a.stop()}},a,t)}))()},watch:{$route:"onChangeRoute"},methods:{handleTabChange:function(t){t&&0!=t&&this.$router.push({path:t})},onChangeRoute:function(){this.subMenu=this.$route.path}}}),o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"main"}},[e("el-tabs",{attrs:{"before-leave":t.handleTabChange},model:{value:t.subMenu,callback:function(a){t.subMenu=a},expression:"subMenu"}},[e("el-tab-pane",{attrs:{name:"/x/tokens"}},[e("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[t._v("Tokens")])]),t._v(" "),e("el-tab-pane",{attrs:{name:"/x/bulkpay"}},[e("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[t._v("Bulk pay")])]),t._v(" "),e("el-tab-pane",{attrs:{name:"/x/contractguru"}},[e("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[t._v("Contract guru")])]),t._v(" "),e("el-tab-pane",{attrs:{name:"/x/bns-token"}},[e("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[t._v("BNS")])])],1),t._v(" "),e("router-view")],1)])},staticRenderFns:[]};var i=e("VU/8")(u,o,!1,function(t){e("gQgT")},"data-v-736d9a35",null);a.default=i.exports},gQgT:function(t,a){}});