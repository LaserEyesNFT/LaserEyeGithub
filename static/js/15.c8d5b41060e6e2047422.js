webpackJsonp([15],{"/3FT":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Xxa5"),r=t.n(i),n=t("exGp"),s=t.n(n),m=t("v1w/"),l=t("oAV5"),c=t("ONoB"),o=t("DHPL"),b=t("Pg0u"),d=t("YaEn"),u=Object(m.c)(),p=u.contractAddress,g=u.contractName,C=u.marketContractName,v=(u.chatroomContractName,u.likeContractName,u.BNSContractAddress),f=u.BNSContractName,N=u.bnsTokenName,k=p,S=Object(m.d)(),y={name:"MemePage",components:{},data:function(){return{memberClaimCfg:{kMaxClaimTimes:200,kMaxClaimTimesStr:"200",kClaimCountEachTime:4e12,kClaimCountEachTimeStr:"4,000,000,000,000 $MEME"},BNSClaimCfg:{kMaxClaimTimes:61400,kMaxClaimTimesStr:"61,400",kClaimCountEachTime:2e10,kClaimCountEachTimeStr:"20,000,000,000 $MEME"},bSignedIn:m.g.isUserSignedIn(),loginAddr:m.g.isUserSignedIn()?Object(m.a)():"",distributionDataList:[{cat:"Airdrop",total:"72,000,000,000,000",detail:"Airdrop to the early 18 members, each get 4,000,000,000,000."},{cat:"Members",total:"800,000,000,000,000",detail:"First 200 members can claim, each get 4,000,000,000,000."},{cat:"BNS account",total:"1,228,000,000,000,000",detail:"First 61,400 members can claim, each get 20,000,000,000.",detail2:"All .btc available, .id/.stx/.app/.stacks need length <= 2."}],curMemberTid:0,curMemberName:"",bMemberClaim:!1,memberClaimTimes:0,bnsNamespace:"",bnsName:"",bBNSClaim:!1,bnsClaimTimes:0,reqFlags:{bReqTokenSummaryOk:!1,bReqPlayerBNSOk:!1,bReqLaserSummary:!1}}},mounted:function(){var e=this;return s()(r.a.mark(function a(){var t,i,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t=b.init(document.getElementById("charts")),i=e,n={title:{text:"Total: 2,100,000,000,000,000",left:"center"},tooltip:{trigger:"item",formatter:function(e){var a=e.marker+e.name+"<span style='margin-right:16px'></span>"+e.value.toLocaleString()+"<span style='margin-right:4px'></span>("+e.percent+"%)";return"Members"==e.data.name?a+='<div style="height:8px">&nbsp;</div><span style="text-align:left;color:#666">(Claim status: '+i.memberClaimTimes+"/"+i.memberClaimCfg.kMaxClaimTimes+" ("+(100*i.memberClaimTimes/i.memberClaimCfg.kMaxClaimTimes).toFixed(1)+"%))</span>":"BNS"==e.data.name&&(a+='<div style="height:8px">&nbsp;</div><span style="text-align:left;color:#666">(Claim status: '+i.bnsClaimTimes+"/"+i.BNSClaimCfg.kMaxClaimTimes+" ("+(100*i.bnsClaimTimes/i.BNSClaimCfg.kMaxClaimTimes).toFixed(1)+"%))</span>"),a}},series:[{top:"20%",type:"pie",radius:"80%",data:[{value:72e12,name:"Air drop"},{value:8e14,name:"Members"},{value:1228e12,name:"BNS"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},t.setOption(n),e.bSignedIn?e.startReq():e.reqTokenSummary();case 5:case"end":return a.stop()}},a,e)}))()},methods:{onClickGoBack:function(){this.$route.params.hasOwnProperty("bFromXPage")?d.a.go(-1):d.a.push({path:"/x/tokens",replace:!0})},viewMember:function(e){var a=this;return s()(r.a.mark(function t(){var i,n,s,m,o,b,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.bDialogVisible=!0,a.bDialogLoading=!0,a.dialogNftPrice=0,a.dialogOwner="",a.dialogBNS="",a.dialogRegisterStr="",a.dialogNftData=e,a.bDialogIsSelf=a.dialogNftData.tid==a.myTid,i="get_token_brief",n=null,a.dialogNftData.tid in a.tid2BriefMap&&(s=a.tid2BriefMap[a.dialogNftData.tid],Date.parse(new Date)-s.ts<=3e5&&(n=s.srvData)),null!=n){t.next=22;break}return m=a.dialogNftData.tid,o=[Object(c.H)(m)],b={contractAddress:p,contractName:C,functionName:i,functionArgs:o,network:S,senderAddress:k},t.next=17,Object(c.i)(b);case 17:if(d=t.sent,n=d.data,a.tid2BriefMap[m]={ts:Date.parse(new Date),srvData:n},m==a.dialogNftData.tid){t.next=22;break}return t.abrupt("return");case 22:a.bDialogLoading=!1,a.dialogNftPrice=9==n.list_info.type?0:Object(c.m)(n.list_info.value.data.price),a.dialogRegisterStr=9==n.time.type?"":Object(l.g)(Object(c.m)(n.time).value),a.dialogOwner=9==n.player.type?"":Object(c.m)(n.player).value,a.dialogOwner.length>0&&(a.dialogOwner in a.addr2bnsMap?a.dialogBNS=a.addr2bnsMap[a.dialogOwner]:a.resolvePlayer(a.dialogNftData.tid,a.dialogOwner));case 27:case"end":return t.stop()}},t,a)}))()},onClickLoginIn:function(){Object(m.e)()},startReq:function(){var e=this;return s()(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.reqTokenSummary(),e.reqPlayerBNS(),e.reqLaserSummary(),t=e,setTimeout(function(){t.bReqTokenSummaryOk=t.bReqPlayerBNSOk=t.bReqLaserSummary=!0},5e3);case 5:case"end":return a.stop()}},a,e)}))()},reqTokenSummary:function(){var e=this;return s()(r.a.mark(function a(){var t,i,n,s,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t="get_player_summary",i=e.bSignedIn?[Object(c.C)(Object(m.a)())]:[Object(c.C)(k)],n={contractAddress:p,contractName:N,functionName:t,functionArgs:i,network:S,senderAddress:k},e.reqFlags.bReqTokenSummaryOk=!1,a.next=6,Object(c.i)(n);case 6:s=a.sent,e.bInReq=!1,l=Object(c.m)(s),e.curMemberTid=l.tid.value,e.memberClaimTimes=l.m.value,e.bMemberClaim=0!=e.curMemberTid&&l.t.value,e.bBNSClaim=l.n.value,e.bnsClaimTimes=l.b.value,e.reqFlags.bReqTokenSummaryOk=!0;case 15:case"end":return a.stop()}},a,e)}))()},reqPlayerBNS:function(){var e=this;return s()(r.a.mark(function a(){var t,i,n,s,o;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.reqFlags.bReqPlayerBNSOk=!1,t="resolve-principal",i=[Object(c.C)(Object(m.a)())],n={contractAddress:v,contractName:f,functionName:t,functionArgs:i,network:S,senderAddress:k},a.next=6,Object(c.i)(n);case 6:s=a.sent,(o=Object(c.m)(s)).type.includes("none")?(e.bnsNamespace="",e.bnsName=""):(e.bnsNamespace=Object(l.b)(o.value.namespace),e.bnsName=Object(l.b)(o.value.name)),e.reqFlags.bReqPlayerBNSOk=!0;case 10:case"end":return a.stop()}},a,e)}))()},reqLaserSummary:function(){var e=this;return s()(r.a.mark(function a(){var t,i,n,s,o,b;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.reqFlags.bReqLaserSummary=!1,t=[Object(c.C)(Object(m.a)())],i={contractAddress:p,contractName:g,functionName:"get_player_summary",functionArgs:t,network:S,senderAddress:k},a.next=5,Object(c.i)(i);case 5:n=a.sent,s=Object(c.m)(n),o=s.meta,b=o&&o.value?o.value.value:null,e.curMemberName=b?Object(l.b)(b.name):"",e.reqFlags.bReqLaserSummary=!0;case 11:case"end":return a.stop()}},a,e)}))()},onClickMemberClaim:function(){this.doClaim("member_claim")},onClickBNSClaim:function(){this.doClaim("bns_claim")},doClaim:function(e){var a=this,t={contractAddress:p,contractName:N,functionName:e,functionArgs:[],network:S,appDetails:Object(m.b)(),postConditions:[],onFinish:function(t){var i="member_claim"==e?"Member claim":"bns_claim"==e?"BNS claim":"";a.$notify({title:i,message:"Transaction has been sent, wait a while to be finished.",duration:8e3})}};Object(o.c)(t)}}},h={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{attrs:{id:"main"}},[t("div",{attrs:{id:"backBtn"}},[t("el-button",{attrs:{type:"info",plain:"",icon:"el-icon-back"},on:{click:e.onClickGoBack}},[e._v("Back")])],1),e._v(" "),t("div",{attrs:{id:"title"}},[t("div",[t("el-avatar",{attrs:{size:80,src:"https://ipfs.io/ipfs/QmUmKE2cMx4TPY6vugbdtzKcB1aFpto5cHemgqHc71rFxn"}})],1),e._v("\n        $MEME\n      ")]),e._v(" "),t("div",{staticStyle:{width:"600px",height:"200px"},attrs:{id:"charts"}}),e._v(" "),t("el-table",{attrs:{data:e.distributionDataList,border:"",size:"medium",id:"distDetail"}},[t("el-table-column",{attrs:{prop:"cat",label:"Category",width:"128"}}),e._v(" "),t("el-table-column",{attrs:{prop:"total",label:"Count",width:"170"}}),e._v(" "),t("el-table-column",{attrs:{label:"Detail"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n            "+e._s(a.row.detail)+"\n            "),a.row.detail2?t("div",[e._v(e._s(a.row.detail2))]):e._e()]}}])})],1),e._v(" "),e.bSignedIn?e._e():t("div",{attrs:{id:"tipSign"}},[t("el-button",{attrs:{type:"primary",round:""},on:{click:e.onClickLoginIn}},[e._v("Sign in to claim")])],1),e._v(" "),e.bSignedIn?t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.reqFlags.bReqTokenSummaryOk||!e.reqFlags.bReqPlayerBNSOk||!e.reqFlags.bReqLaserSummary,expression:"!reqFlags.bReqTokenSummaryOk || !reqFlags.bReqPlayerBNSOk || !reqFlags.bReqLaserSummary"}],attrs:{id:"claimArea"}},[e.reqFlags.bReqTokenSummaryOk&&e.reqFlags.bReqPlayerBNSOk&&e.reqFlags.bReqLaserSummary?t("div",[t("div",{attrs:{id:"acct"}},[e._v("\n            Welcome: "),t("span",[e._v(e._s(e.curMemberName.length>0?e.bnsName.length>0?e.curMemberName+" ("+e.bnsName+"."+e.bnsNamespace+")":e.curMemberName+" ("+e.loginAddr+")":e.bnsName.length>0?e.bnsName+"."+e.bnsNamespace:e.loginAddr))])]),e._v(" "),t("div",{attrs:{id:"claimBtns"}},[t("div",{staticClass:"claimBtn"},[t("div",[t("el-button",{staticClass:"claimBtn",attrs:{disabled:e.curMemberTid<=0||!e.bMemberClaim||e.memberClaimTimes>=e.memberClaimCfg.kMaxClaimTimes,type:"primary",round:""},on:{click:e.onClickMemberClaim}},[e._v("Member claim")])],1),e._v(" "),t("div",{staticClass:"claimTip"},[e._v(e._s(e.memberClaimTimes>=e.memberClaimCfg.kMaxClaimTimes?"No remain":e.curMemberTid>0?e.bMemberClaim?"claim "+e.memberClaimCfg.kClaimCountEachTimeStr:"Claimed":"Not member yet")+"\n              ")])]),e._v(" "),t("div",{staticClass:"claimBtn"},[t("div",[t("el-button",{staticClass:"claimBtn",attrs:{disabled:e.bnsName.length<=0||!e.bBNSClaim||e.bnsClaimTimes>=e.BNSClaimCfg.kMaxClaimTimes||!("btc"==e.bnsNamespace||e.bnsName.length<=2&&("id"==e.bnsNamespace||"stx"==e.bnsNamespace||"app"==e.bnsNamespace||"stacks"==e.bnsNamespace)),type:"primary",round:""},on:{click:e.onClickBNSClaim}},[e._v("BNS claim")])],1),e._v(" "),t("div",{staticClass:"claimTip"},[e._v(e._s(e.bnsClaimTimes>=e.BNSClaimCfg.kMaxClaimTimes?"No remain":0==e.bnsName.length?"Not own name":e.bBNSClaim?"btc"==e.bnsNamespace||e.bnsName.length<=2&&("id"==e.bnsNamespace||"stx"==e.bnsNamespace||"app"==e.bnsNamespace||"stacks"==e.bnsNamespace)?"claim "+e.BNSClaimCfg.kClaimCountEachTimeStr:"Not satisfy":"Claimed"))])])])]):e._e()]):e._e()],1)])},staticRenderFns:[]};var T=t("VU/8")(y,h,!1,function(e){t("BRK3")},"data-v-53b5d546",null);a.default=T.exports},BRK3:function(e,a){}});