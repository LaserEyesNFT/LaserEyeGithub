webpackJsonp([11],{"8K5C":function(e,t){},T6vi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),s=n.n(a),u=n("exGp"),r=n.n(u),o=(n("YaEn"),{name:"XPage",components:{},data:function(){return{subMenu:""}},mounted:function(){var e=this;return r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.subMenu=e.$route.path;case 1:case"end":return t.stop()}},t,e)}))()},watch:{$route:"onChangeRoute"},methods:{handleTabChange:function(e){e&&0!=e&&this.$router.push({path:e})},onChangeRoute:function(){this.subMenu=this.$route.path}}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"main"}},[n("el-tabs",{attrs:{"before-leave":e.handleTabChange},model:{value:e.subMenu,callback:function(t){e.subMenu=t},expression:"subMenu"}},[n("el-tab-pane",{attrs:{name:"/x/tokens"}},[n("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[e._v("Tokens")])]),e._v(" "),n("el-tab-pane",{attrs:{name:"/x/bns"}},[n("div",{staticClass:"tabDiv",attrs:{slot:"label"},slot:"label"},[e._v("BNS")])])],1),e._v(" "),n("router-view")],1)])},staticRenderFns:[]};var l=n("VU/8")(o,i,!1,function(e){n("8K5C")},"data-v-b728ec22",null);t.default=l.exports}});