webpackJsonp([17],{DV7Y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("YaEn"),i={name:"XPage",components:{},data:function(){return{activeTabName:"BNS",tokens:[{uri:"https://ipfs.io/ipfs/QmUe33WHtgZhL1ge6NgAgj5SfpZ5GBWcvwu1BLMWaq17Y7",width:324,name:"$ORDI",desc:"Total 21,000,000.\n First 200 members claim 50,000 each.\nFirst 52,000 BNS users claim 200 each.",callback:function(){s.a.push({name:"OrdiPage",replace:!0,params:{bFromXPage:!0}})}},{uri:"https://ipfs.io/ipfs/QmUe33WHtgZhL1ge6NgAgj5SfpZ5GBWcvwu1BLMWaq17Y7",width:324,name:"$ORD",desc:"Total 21,000,000.\n First 200 members claim 50,000 each.\nFirst 51,250 BNS users claim 200 each.",callback:function(){s.a.push({name:"OrdPage",replace:!0,params:{bFromXPage:!0}})}},{uri:"https://ipfs.io/ipfs/QmUmKE2cMx4TPY6vugbdtzKcB1aFpto5cHemgqHc71rFxn",width:360,name:"$MEME",desc:"Total 2,100,000,000,000,000.\n First 200 members claim 4,000,000,000,000 each.\nFirst 61,400 BNS users claim 20,000,000,000 each.",callback:function(){s.a.push({name:"MemePage",replace:!0,params:{bFromXPage:!0}})}}]}},methods:{onClickAction:function(e){e.callback()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"main"}},e._l(e.tokens.length,function(t){return a("el-card",{key:t,staticClass:"card",style:{width:e.tokens[t-1].width},attrs:{shadow:"hover"}},[a("div",{staticClass:"titleArea",attrs:{slot:"header"},slot:"header"},[a("img",{attrs:{id:"img",src:e.tokens[t-1].uri}}),e._v(" "),a("span",[e._v(e._s(e.tokens[t-1].name))]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"8px"},attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){return e.onClickAction(e.tokens[t-1])}}},[e._v("Jump")])],1),e._v(" "),a("div",{staticClass:"text",staticStyle:{"white-space":"pre-line","text-align":"left","line-height":"21px"}},[e._v(e._s(e.tokens[t-1].desc))])])}),1)])},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(e){a("QxgA")},"data-v-7fec8410",null);t.default=c.exports},QxgA:function(e,t){}});