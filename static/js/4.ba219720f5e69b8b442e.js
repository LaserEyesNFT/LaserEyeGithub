webpackJsonp([4],{"5PlU":function(e,t,r){var n=r("RY/4"),a=r("dSzd")("iterator"),i=r("/bQp");e.exports=r("FeBl").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||i.hasOwnProperty(n(t))}},FCdi:function(e,t){},SJg2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("d7EF"),a=r.n(n),i=r("Xxa5"),s=r.n(i),c=r("BO1k"),o=r.n(c),u=r("exGp"),l=r.n(u),d=r("v1w/"),v=r("oAV5"),p=r("ONoB"),m=r("DHPL"),f=(r("YaEn"),Object(d.c)()),b=f.contractAddress,h=(f.contractName,f.marketContractName,f.chatroomContractName,f.likeContractName,f.BNSContractAddress),k=f.BNSContractName,w=(f.ordiTokenName,f.lotteryPrizeContractName2),y=b,_=Object(d.d)(),g={name:"WinnerPage",components:{},data:function(){return{bSignedIn:d.g.isUserSignedIn(),reqState:1,winners:[],sReceiverAddr:"",mReceiverAddr:"",queryVoteIdState:0,queryFailVoteStr:"",mQueryVoteId:"",mQueryResultReceiver:"",voteYesSet:{},mVoteYesVoteId:""}},mounted:function(){var e=this;return l()(s.a.mark(function t(){var r,n,a,i,c,u,l,d,v;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.reqState=1,r={contractAddress:b,contractName:w,functionName:"get_summary",functionArgs:[],network:_,senderAddress:y},t.next=4,Object(p.f)(r);case 4:for(n=t.sent,a=Object(p.i)(n.data.winners),i=!0,c=!1,u=void 0,t.prev=9,l=o()(a);!(i=(d=l.next()).done);i=!0)v=d.value,e.winners.push(v.value);t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),c=!0,u=t.t0;case 17:t.prev=17,t.prev=18,!i&&l.return&&l.return();case 20:if(t.prev=20,!c){t.next=23;break}throw u;case 23:return t.finish(20);case 24:return t.finish(17);case 25:e.reqState=2;case 26:case"end":return t.stop()}},t,e,[[9,13,17,25],[18,,20,24]])}))()},methods:{preCheckClaim:function(e){if(this.winners.length<=0)return Object(v.h)("No winner yet"),!1;if(e)try{e=e.trim(),Object(p.u)(e)}catch(e){return Object(v.h)(this,"Invalid address"),!1}return this.bSignedIn?-1!=this.winners.indexOf(Object(d.a)())||(Object(v.h)(this,"Current account is not winner"),!1):(Object(d.e)(),!1)},resolvePrizeName:function(){var e=this;return l()(s.a.mark(function t(){var r,n,a,i,c,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,n=null,a=Object(p.g)(b,w),i={contractAddress:h,contractName:k,functionName:"resolve-principal",functionArgs:[a],network:_,senderAddress:y},t.next=7,Object(p.f)(i);case 7:return c=t.sent,(o=Object(p.i)(c)).type.includes("none")?Object(v.h)(e,"Prize contract doesn't has name any more!"):(r=Object(v.a)(o.value.namespace),n=Object(v.a)(o.value.name)),t.abrupt("return",[r,n]);case 11:case"end":return t.stop()}},t,e)}))()},onClickClaimSingle:function(){var e=this;return l()(s.a.mark(function t(){var r,n,i,c,o,u,l,v,f,y,g;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.sReceiverAddr.trim(),e.preCheckClaim(r)){t.next=3;break}return t.abrupt("return");case 3:return n=e.createLoading("checking"),t.next=6,e.resolvePrizeName();case 6:if(i=t.sent,c=a()(i,2),o=c[0],u=c[1],n.close(),o&&u){t.next=13;break}return t.abrupt("return");case 13:l=Object(p.w)({namespace:Object(p.e)(o),name:Object(p.e)(u)}),v=Object(p.h)(h,k,"names"),f=Object(p.l)(b,w,p.d.DoesNotOwn,v,l),y=e,g={contractAddress:b,contractName:w,functionName:"claim_name",functionArgs:[Object(p.u)(r)],network:_,appDetails:Object(d.b)(),postConditions:[f],onFinish:function(e){y.doNotify("Claim")}},Object(m.c)(g);case 19:case"end":return t.stop()}},t,e)}))()},onClickCreateVote:function(){var e=this;return l()(s.a.mark(function t(){var r,n,i,c,o,u,l,v;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.mReceiverAddr.trim(),e.preCheckClaim(r)){t.next=3;break}return t.abrupt("return");case 3:return n=e.createLoading("checking"),t.next=6,e.resolvePrizeName();case 6:if(i=t.sent,c=a()(i,2),o=c[0],u=c[1],n.close(),o&&u){t.next=13;break}return t.abrupt("return");case 13:l=e,v={contractAddress:b,contractName:w,functionName:"new_vote",functionArgs:[Object(p.u)(e.mReceiverAddr)],network:_,appDetails:Object(d.b)(),postConditionMode:1,onFinish:function(e){l.doNotify("Create vote")}},Object(m.c)(v);case 16:case"end":return t.stop()}},t,e)}))()},queryVoteDetail:function(e){var t=this;return l()(s.a.mark(function r(){var n,a,i,c,u,l,d,v,m,f,h,k;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n={contractAddress:b,contractName:w,functionName:"get_summary_with_vote",functionArgs:[Object(p.x)(e)],network:_,senderAddress:y},a=t.createLoading("checking"),r.next=4,Object(p.f)(n);case 4:if(i=r.sent,a.close(),9!=i.data.action.type){r.next=8;break}return r.abrupt("return",[!1,""]);case 8:for(c=Object(p.i)(i.data.action).value,u=!0,l=!1,d=void 0,r.prev=12,v=o()(t.winners);!(u=(m=v.next()).done);u=!0)f=m.value,t.voteYesSet[f]=!1;r.next=20;break;case 16:r.prev=16,r.t0=r.catch(12),l=!0,d=r.t0;case 20:r.prev=20,r.prev=21,!u&&v.return&&v.return();case 23:if(r.prev=23,!l){r.next=26;break}throw d;case 26:return r.finish(23);case 27:return r.finish(20);case 28:for(h=Object(p.i)(i.data.value).value,k=0;k<t.winners.length;k++)0!=(h&1<<k)&&(t.voteYesSet[t.winners[k]]=!0);return r.abrupt("return",[!0,c]);case 31:case"end":return r.stop()}},r,t,[[12,16,20,28],[21,,23,27]])}))()},onClickQueryVote:function(){var e=this;return l()(s.a.mark(function t(){var r,n,i,c,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=parseInt(e.mQueryVoteId)){t.next=4;break}return Object(v.h)(e,"invalid vote id"),t.abrupt("return");case 4:return t.next=6,e.queryVoteDetail(r);case 6:if(n=t.sent,i=a()(n,2),c=i[0],o=i[1],c){t.next=14;break}return e.queryVoteIdState=1,e.queryFailVoteStr="Vote ID "+r+" not exist.",t.abrupt("return");case 14:e.queryVoteIdState=2,e.mQueryResultReceiver=o;case 16:case"end":return t.stop()}},t,e)}))()},onClickVoteYes:function(){var e=this;return l()(s.a.mark(function t(){var r,n,i,c,u,l,f,y,g,x,C,O,j,V,S,A,N,I,R,q,Y,F;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preCheckClaim()){t.next=2;break}return t.abrupt("return");case 2:return r=e.createLoading("checking"),t.next=5,e.resolvePrizeName();case 5:if(n=t.sent,i=a()(n,2),c=i[0],u=i[1],r.close(),c&&u){t.next=12;break}return t.abrupt("return");case 12:if(l=parseInt(e.mVoteYesVoteId)){t.next=16;break}return Object(v.h)(e,"Invalid vote ID"),t.abrupt("return");case 16:return t.next=18,e.queryVoteDetail(l);case 18:if(f=t.sent,y=a()(f,2),g=y[0],y[1],g){t.next=25;break}return Object(v.h)(e,"Invalid vote ID"),t.abrupt("return");case 25:if(!e.voteYesSet[Object(d.a)()]){t.next=28;break}return Object(v.h)(e,"You created the vote or has voted yes."),t.abrupt("return");case 28:for(x=0,C=!0,O=!1,j=void 0,t.prev=32,V=o()(e.winners);!(C=(S=V.next()).done);C=!0)A=S.value,e.voteYesSet[A]||x++;t.next=40;break;case 36:t.prev=36,t.t0=t.catch(32),O=!0,j=t.t0;case 40:t.prev=40,t.prev=41,!C&&V.return&&V.return();case 43:if(t.prev=43,!O){t.next=46;break}throw j;case 46:return t.finish(43);case 47:return t.finish(40);case 48:N=[],1==x&&(I=Object(p.w)({namespace:Object(p.e)(c),name:Object(p.e)(u)}),R=Object(p.h)(h,k,"names"),q=Object(p.l)(b,w,p.d.DoesNotOwn,R,I),N.push(q)),Y=e,F={contractAddress:b,contractName:w,functionName:"vote_yes",functionArgs:[Object(p.x)(l)],network:_,appDetails:Object(d.b)(),postConditions:N,onFinish:function(e){Y.doNotify("Vote yes")}},Object(m.c)(F);case 53:case"end":return t.stop()}},t,e,[[32,36,40,48],[41,,43,47]])}))()},createLoading:function(e){return this.$loading({lock:!0,text:e,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.05)"})},doNotify:function(e){this.$notify({title:e,message:"Transaction has been sent, wait a while to be finished.",duration:8e3})}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"loading",rawName:"v-loading",value:1==e.reqState,expression:"reqState==1"}],attrs:{id:"main"}},[2==e.reqState&&0==e.winners.length?r("el-empty",{attrs:{id:"emptyArea","image-size":"128",description:"No winner yet"}}):e._e(),e._v(" "),1==e.winners.length?r("div",[r("span",{staticClass:"title"},[e._v("Winner: ")]),e._v(" "),r("el-link",{style:{color:"black"},attrs:{href:"https://explorer.hiro.so/address/"+e.winners[0]+"?chain=mainnet",target:"_blank"}},[e._v(e._s(e.winners[0]))])],1):e._e(),e._v(" "),e.winners.length>1?r("div",[r("span",{staticClass:"title"},[e._v("Winners: ")]),e._v(" "),e._l(e.winners.length,function(t){return r("div",{key:t,staticClass:"mAddr"},[r("el-link",{style:{color:"black"},attrs:{href:"https://explorer.hiro.so/address/"+e.winners[t-1]+"?chain=mainnet",target:"_blank"}},[e._v(e._s(e.winners[t-1]))])],1)})],2):e._e(),e._v(" "),2==e.reqState?r("el-card",{staticClass:"claimCardSingle"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("Single winner")])]),e._v(" "),r("el-input",{staticClass:"sReceiver",attrs:{disabled:1!=e.winners.length,placeholder:"Receiver address",maxlength:"60",size:"large",clearable:""},model:{value:e.sReceiverAddr,callback:function(t){e.sReceiverAddr=t},expression:"sReceiverAddr"}}),e._v(" "),r("el-button",{attrs:{type:"primary",disabled:e.sReceiverAddr.trim().length<=0,round:""},on:{click:e.onClickClaimSingle}},[e._v("Claim")]),e._v(" "),r("div",{staticClass:"claimTip"},[e._v("* Make sure receiver address not owns name yet.")])],1):e._e(),e._v(" "),2==e.reqState?r("el-card",{staticClass:"claimCardMulti"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("Multi winners")])]),e._v(" "),r("div",[r("el-input",{staticClass:"sReceiver",attrs:{disabled:e.winners.length<=1,placeholder:"Receiver address",maxlength:"60",size:"large",clearable:""},model:{value:e.mReceiverAddr,callback:function(t){e.mReceiverAddr=t},expression:"mReceiverAddr"}}),e._v(" "),r("el-button",{attrs:{type:"primary",disabled:e.mReceiverAddr.trim().length<=0,round:""},on:{click:e.onClickCreateVote}},[e._v("Create vote")]),e._v(" "),r("div",{staticClass:"claimTip"},[e._v("* Make sure receiver address not owns name yet.")]),e._v(" "),r("div",{staticClass:"claimTip"},[e._v('* The transaction will print vote id, other winners need input the vote id and click the "Vote yes" button below.')])],1),e._v(" "),r("div",{staticClass:"mFiledDiv"},[r("el-input",{staticClass:"sReceiver",attrs:{disabled:e.winners.length<=1,placeholder:"Input vote id",maxlength:"60",size:"large"},model:{value:e.mQueryVoteId,callback:function(t){e.mQueryVoteId=t},expression:"mQueryVoteId"}}),e._v(" "),r("el-button",{attrs:{type:"primary",disabled:e.mQueryVoteId.trim().length<=0,round:""},on:{click:e.onClickQueryVote}},[e._v("Query vote")]),e._v(" "),1==e.queryVoteIdState?r("div",{staticClass:"claimTip"},[e._v(e._s(e.queryFailVoteStr))]):e._e(),e._v(" "),2==e.queryVoteIdState?r("div",{attrs:{id:"queryResultFS"}},[r("div",{staticClass:"claimTip"},[e._v("Receiver: "+e._s(e.mQueryResultReceiver))]),e._v(" "),e._l(e.winners.length,function(t){return r("div",{key:t,staticClass:"claimTip"},[e._v("\n            "+e._s(e.winners[t-1]+(e.voteYesSet[e.winners[t-1]]?" vote yes":" not vote yet"))+"\n          ")])})],2):e._e()],1),e._v(" "),r("div",{staticClass:"mFiledDiv"},[r("el-input",{staticClass:"sReceiver",attrs:{disabled:e.winners.length<=1,placeholder:"Input vote id",maxlength:"60",size:"large",clearable:""},model:{value:e.mVoteYesVoteId,callback:function(t){e.mVoteYesVoteId=t},expression:"mVoteYesVoteId"}}),e._v(" "),r("el-button",{attrs:{type:"primary",disabled:e.mVoteYesVoteId.trim().length<=0,round:""},on:{click:e.onClickVoteYes}},[e._v("Vote yes")])],1)]):e._e()],1)])},staticRenderFns:[]};var C=r("VU/8")(g,x,!1,function(e){r("FCdi")},"data-v-20a19a71",null);t.default=C.exports},Xd32:function(e,t,r){r("+tPU"),r("zQR9"),e.exports=r("5PlU")},d7EF:function(e,t,r){"use strict";t.__esModule=!0;var n=i(r("us/S")),a=i(r("BO1k"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return function(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var c,o=(0,a.default)(e);!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},"us/S":function(e,t,r){e.exports={default:r("Xd32"),__esModule:!0}}});