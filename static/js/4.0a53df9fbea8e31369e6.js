webpackJsonp([4],{"5PlU":function(t,e,n){var a=n("RY/4"),i=n("dSzd")("iterator"),r=n("/bQp");t.exports=n("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||r.hasOwnProperty(a(e))}},AjLI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("W3Iv"),i=n.n(a),r=n("d7EF"),o=n.n(r),s=n("BO1k"),l=n.n(s),c=n("Xxa5"),u=n.n(c),d=n("exGp"),b=n.n(d),m=n("v1w/"),p=(n("U/y8"),n("DHPL")),f=(n("YaEn"),n("ONoB")),h=n("oAV5"),k=n("vaUZ"),v=n.n(k),g=n("geuY"),y=n.n(g),S=Object(m.d)(),_={name:"BulkPayPage",components:{},data:function(){return{bSignedIn:m.g.isUserSignedIn(),selfAddr:m.g.isUserSignedIn()?Object(m.a)():"",maxSendListLen:200,tokenId:"STX",tokenList:[{value:"STX",label:"STX"}],tokenMap:{STX:{symbol:"STX",balance:"-",balanceStr:"-",decimal:6}},sendList:[{receiver:"",amount:"",memo:""}],bulkAddInfo:{bVisible:!1,recInfoStr:"",memo:""},compKey1:0,tips:{invalidTokenContract:"Invalid token contract"}}},mounted:function(){var t=this;return b()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.bSignedIn&&t.refreshAllBalance();case 1:case"end":return e.stop()}},e,t)}))()},computed:{totalAmount:function(){var t=0,e=!0,n=!1,a=void 0;try{for(var i,r=l()(this.sendList);!(e=(i=r.next()).done);e=!0){var o=i.value;parseFloat(o.amount)&&(t+=this.getAccurateAmount(o.amount,10))}}catch(t){n=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw a}}return t/Math.pow(10,10)},myBalanceStr:function(){return this.compKey1,this.bSignedIn?this.tokenMap[this.tokenId].balanceStr:"-"},exceedBalance:function(){var t=this.tokenMap[this.tokenId].balanceStr;return"-"!=t&&this.totalAmount>t}},methods:{onClickRefresh:function(){var t=this;return b()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.tokenMap[t.tokenId].balanceStr="-",t.$forceUpdate(),e.next=4,t.refreshAllBalance();case 4:t.$forceUpdate();case 5:case"end":return e.stop()}},e,t)}))()},refreshAllBalance:function(){var t=this;return b()(u.a.mark(function e(){var n,a,r,s,c,d,b,p,f,k,g,y,S;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.mainnet.hiro.so/extended/v1/address/"+Object(m.a)()+"/balances");case 2:if(200!=(n=e.sent).status){e.next=30;break}return e.next=6,n.json();case 6:for(a=e.sent,t.tokenMap.STX.balance=parseInt(a.stx.balance),t.tokenMap.STX.balanceStr=t.tokenMap.STX.balance/Math.pow(10,t.tokenMap.STX.decimal),r=!0,s=!1,c=void 0,e.prev=12,d=l()(i()(a.fungible_tokens));!(r=(b=d.next()).done);r=!0)p=b.value,f=o()(p,2),k=f[0],g=f[1],y=k.split("::"),S=y[0].split("."),t.tokenMap[k]?(t.tokenMap[k].balance=g.balance,t.tokenMap[k].balanceStr=g.balance/Math.pow(10,t.tokenMap[k].decimal)):(t.tokenList.push({value:k,label:y[1]}),t.tokenMap[k]={contractAddress:S[0],contractName:S[1],url:"https://explorer.stacks.co/address/"+S[0]+"."+S[1]+"?chain=mainnet",symbol:y[1],balance:g.balance,balanceStr:"-",decimal:0}),t.compKey1++;e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),s=!0,c=e.t0;case 20:e.prev=20,e.prev=21,!r&&d.return&&d.return();case 23:if(e.prev=23,!s){e.next=26;break}throw c;case 26:return e.finish(23);case 27:return e.finish(20);case 28:e.next=31;break;case 30:Object(h.a)(t,"Request fail, status="+n.status);case 31:case"end":return e.stop()}},e,t,[[12,16,20,28],[21,,23,27]])}))()},onChangeTokenType:function(){var t=this;return b()(u.a.mark(function e(){var n,a,i,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("STX"==t.tokenId){e.next=18;break}if("-"!=(n=t.tokenMap[t.tokenId]).balanceStr){e.next=18;break}return a={contractAddress:n.contractAddress,contractName:n.contractName,functionName:"get-decimals",functionArgs:[],network:S,senderAddress:Object(m.a)()},e.prev=4,e.next=7,Object(f.i)(a);case 7:i=e.sent,r=Object(f.m)(i),n.decimal=r.value,n.balanceStr=n.balance/Math.pow(10,n.decimal),t.$forceUpdate(),t.compKey1++,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),Object(h.a)(t,"Query decimal fail");case 18:case"end":return e.stop()}},e,t,[[4,15]])}))()},onClickDeleteBulkItem:function(t,e){this.sendList.splice(t,1)},onClickSignIn:function(){Object(m.e)()},onClickAdd:function(){this.sendList.push({receiver:"",amount:"",memo:""})},onClickBulkAdd:function(){this.bulkAddInfo.bVisible=!0,this.bulkAddInfo.recInfoStr=""},onClickRemoveAll:function(){var t=this;this.$confirm("Will remove all items, are you sure?","",{confirmButtonText:"Yes",cancelButtonText:"No"}).then(function(){t.sendList.splice(0,t.sendList.length)})},onCloseDrawer:function(){if(0==this.bulkAddInfo.recInfoStr.trim().length)this.bulkAddInfo.bVisible=!1;else{var t=this;this.$confirm("Will close the bulk add dialog, are you sure?","",{confirmButtonText:"Yes",cancelButtonText:"No"}).then(function(){t.bulkAddInfo.bVisible=!1})}},onClickSureBulkAdd:function(){for(var t=this.sendList.length,e=this.bulkAddInfo.recInfoStr.trim().match(/[^\r\n]+/g),n={},a=null,i=0;i<e.length&&!a;i++){var r=e[i],o=r.split(",");if(2!=o.length){a="Line "+(i+1)+", invalid format ("+r+").";break}try{var s=o[0].split(".");1==s.length?Object(f.C)(s[0]):Object(f.j)(s[0],s[1])}catch(t){a="Line "+(i+1)+", invalid address ("+r+").";break}if(o[0]==Object(m.a)()){a="Line "+(i+1)+", address cannot be self ("+r+").";break}if(n[o[0]]){a="Line "+(i+1)+"'s address equals with line "+n[o[0]]+"'s.";break}var l=parseFloat(o[1]);if(!l||l<0){a="Line "+(i+1)+", invalid amount ("+o[1]+").";break}if(!this.getAccurateAmount(l,this.tokenMap[this.tokenId].decimal)){a="Line "+(i+1)+", invalid amount ("+o[1]+"), decimal is "+this.tokenMap[this.tokenId].decimal+".";break}n[o[0]]=i+1,this.sendList.push({receiver:o[0],amount:l,memo:this.bulkAddInfo.memo})}if(a)return this.sendList.splice(t),void Object(h.a)(this,a);1==t&&""==this.sendList[0].receiver&&""==this.sendList[0].amount&&this.sendList.splice(0,1),this.sendList.length>this.maxSendListLen&&this.sendList.splice(this.maxSendListLen),this.bulkAddInfo.bVisible=!1},onClickPay:function(){var t=!1;if("STX"==this.tokenId)for(var e=0;e<this.sendList.length;e++)this.sendList[e].memo.trim().length>0&&(t=!0);else t=!0;var n=null;n="STX"==this.tokenId?t?"bulk-pay-with-memo":"bulk-pay":"bulk-pay-ft";var a=null,i=Object(f.r)();i.list=[];for(var r={},o=0;o<this.sendList.length;o++){var s=this.sendList[o],l=null,c=s.receiver.trim();try{var u=c.split(".");l=1==u.length?Object(f.C)(u[0]):Object(f.j)(u[0],u[1])}catch(t){a="Line "+(o+1)+", invalid address ("+s.receiver+").";break}if(c==Object(m.a)()){a="Line "+(o+1)+", address cannot be self ("+s.receiver+").";break}if(r[c]){a="Line "+(o+1)+"'s address equals with line "+r[c]+"'s.";break}var d=parseFloat(s.amount);if(!d||d<0){a="Line "+(o+1)+", invalid amount ("+s.amount+").";break}r[c]=o+1;var b={addr:l},p=this.getAccurateAmount(d,this.tokenMap[this.tokenId].decimal);if(!p){a="Line "+(o+1)+", invalid amount ("+s.amount+"), decimal is "+this.tokenMap[this.tokenId].decimal+".";break}b.amount=Object(f.H)(p),t&&(b.memo=s.memo.trim().length>0?Object(f.B)(Object(f.h)(s.memo.trim())):Object(f.y)()),i.list.push(Object(f.G)(b))}if(a)Object(h.a)(this,a);else if("STX"==this.tokenId){var k=this.tokenMap[this.tokenId].balanceStr;if(k<this.totalAmount)return void Object(h.a)(this,"Balance unenough.");if(k==this.totalAmount)return void Object(h.a)(this,"No remain for gas fee.");if(k-this.totalAmount<1){var v=this,g=this.getAccurateAmount(k,6)-this.getAccurateAmount(this.totalAmount,6);this.$confirm("Balance: "+k+" STX, Total pay: "+this.totalAmount+" STX, so make sure gas fee no more than "+g/1e6+" STX.","",{confirmButtonText:"Ok",cancelButtonText:"Cancel"}).then(function(){v.startPay(n,i)})}else this.startPay(n,i)}else{if(this.totalAmount>this.tokenMap[this.tokenId].balanceStr)return void Object(h.a)(this,"Balance unenough.");this.startPay(n,i)}},getAccurateAmount:function(t,e){var n=t.toString();if("1"==n.substring(0,1)){var a=n.indexOf("e-");if(-1!=a){var i=parseInt(n.substring(a+2)),r=n.indexOf("."),o="";o=-1!=r?""+n.substring(0,r)+n.substring(r+1,a):""+n.substring(0,a),n="0."+"0".repeat(i-1)+o}}var s=n.indexOf(".");if(-1!=s){var l=n.length-s-1;n=l<=e?""+n.substring(0,s)+n.substring(s+1)+"0".repeat(e-l):""+n.substring(0,s)+n.substring(s+1,s+1+e)}else n=""+n+"0".repeat(e);return"0"==n.substring(0,1)&&(n=n.substring(1)),n.match(/^0*$/g)?0:parseInt(n)},startPay:function(t,e){var n=[],a=[];if("bulk-pay"==t||"bulk-pay-with-memo"==t){n.push(Object(f.F)()),n.push(e);var i=this.getAccurateAmount(this.totalAmount,6);console.log("____stx_amountIntV",i),a.push(Object(f.x)(Object(m.a)(),f.d.LessEqual,new y.a(i)))}else if("bulk-pay-ft"==t){n.push(Object(f.F)());var r=this.tokenMap[this.tokenId];n.push(Object(f.j)(r.contractAddress,r.contractName)),n.push(e);var o=Object(f.k)(r.contractAddress,r.contractName,r.symbol),s=this.getAccurateAmount(this.totalAmount,r.decimal);console.log("____ft_amountIntV",s),a.push(Object(f.v)(Object(m.a)(),f.d.LessEqual,new y.a(s),o))}var l=this,c={contractAddress:"SPMCWHJY8CJX5WP0PKKYS12FWYC1J2VNXDT42B5R",contractName:t,functionName:"bulk-pay",functionArgs:n,network:S,appDetails:Object(m.b)(),postConditions:a,onFinish:function(t){l.$notify({title:"Pay sent",message:"Transaction has been sent, wait a while to be finished."})}};Object(p.c)(c)},createLoading:function(t,e){return this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:e||"rgba(0, 0, 0, 0.05)"})},onClickTest1:function(){},onClickTest2:function(){}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"main"}},[n("div",[n("span",[t._v("Token:")]),t._v(" "),n("el-select",{staticClass:"ib",staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:t.onChangeTokenType},model:{value:t.tokenId,callback:function(e){t.tokenId=e},expression:"tokenId"}},t._l(t.tokenList,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),"STX"!=t.tokenId?n("el-link",{staticClass:"ib",staticStyle:{color:"grey"},attrs:{href:t.tokenMap[t.tokenId].url,target:"_blank"}},[t._v(t._s(t.tokenMap[t.tokenId].contractAddress+"."+t.tokenMap[t.tokenId].contractName))]):t._e()],1),t._v(" "),n("el-table",{attrs:{id:"bulkRegTable","empty-text":"Empty",size:"mini",data:t.sendList}},[n("el-table-column",{attrs:{type:"index",width:"46"}}),t._v(" "),n("el-table-column",{attrs:{label:"Receiver",width:"520"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{clearable:"",disabled:!t.bSignedIn,placeholder:"receiver",maxlength:"150"},model:{value:e.row.receiver,callback:function(n){t.$set(e.row,"receiver",n)},expression:"scope.row.receiver"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Amount",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{clearable:"",disabled:!t.bSignedIn,placeholder:"amount",maxlength:"50"},model:{value:e.row.amount,callback:function(n){t.$set(e.row,"amount",n)},expression:"scope.row.amount"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Memo(optional, max 34 characters)",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{clearable:"",disabled:!t.bSignedIn,placeholder:"memo",maxlength:"34"},model:{value:e.row.memo,callback:function(n){t.$set(e.row,"memo",n)},expression:"scope.row.memo"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{disabled:!t.bSignedIn,type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.onClickDeleteBulkItem(e.$index,e.row)}}})]}}])})],1),t._v(" "),n("div",{staticStyle:{"margin-left":"55px","margin-top":"12px"}},[t.sendList.length==t.maxSendListLen?n("div",{staticStyle:{"font-weight":"bold","margin-bottom":"8px"}},[t._v("Max 200 items.")]):t._e(),t._v(" "),t.bSignedIn?t._e():n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onClickSignIn()}}},[t._v("Sign in")]),t._v(" "),n("el-button",{attrs:{disabled:!t.bSignedIn||t.sendList.length>=t.maxSendListLen,type:"primary",plain:""},on:{click:function(e){return t.onClickAdd()}}},[t._v("   Add   ")]),t._v(" "),n("el-button",{attrs:{disabled:!t.bSignedIn,type:"primary",plain:""},on:{click:function(e){return t.onClickBulkAdd()}}},[t._v("Bulk add")]),t._v(" "),n("el-button",{attrs:{disabled:!t.bSignedIn,type:"info",plain:""},on:{click:function(e){return t.onClickRemoveAll()}}},[t._v("Remove all")]),t._v(" "),t.bSignedIn?n("div",{staticStyle:{"margin-top":"32px"}},[n("div",[n("span",{staticStyle:{"min-width":"75px",display:"inline-block"}},[t._v("Total pay:")]),t._v(" "),n("span",{style:{color:t.exceedBalance?"red":"black"}},[t._v(t._s(t.totalAmount)+" ")]),t._v("\n          "+t._s(t.tokenMap[t.tokenId].symbol)+"\n        ")]),t._v(" "),n("div",{staticStyle:{"margin-top":"16px"}},[n("span",{staticStyle:{"min-width":"75px",display:"inline-block"}},[t._v("Balance:")]),t._v(" "),n("span",{directives:[{name:"loading",rawName:"v-loading",value:"-"==t.tokenMap[t.tokenId].balanceStr,expression:"tokenMap[tokenId].balanceStr == '-'"}]},[t._v("\n            "+t._s(t.tokenMap[t.tokenId].balanceStr)+" "+t._s(t.tokenMap[t.tokenId].symbol)+"\n          ")]),t._v(" "),"-"!=t.tokenMap[t.tokenId].balanceStr?n("el-button",{staticStyle:{"margin-left":"4px"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(e){return t.onClickRefresh()}}},[t._v("Refresh")]):t._e(),t._v(" "),"-"!=t.myBalanceStr?n("span",{staticStyle:{color:"grey","margin-left":"8px"}},[t._v("\n            (Current account: "+t._s(t.selfAddr)+")\n          ")]):t._e()],1),t._v(" "),n("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:t.totalAmount<=0,type:"primary"},on:{click:function(e){return t.onClickPay()}}},[t._v("   Pay   ")])],1):t._e()],1),t._v(" "),n("el-drawer",{attrs:{title:"Bulk add",visible:t.bulkAddInfo.bVisible,"before-close":t.onCloseDrawer,direction:"ltr",size:"750px"},on:{"update:visible":function(e){return t.$set(t.bulkAddInfo,"bVisible",e)}}},[n("div",{staticStyle:{width:"650px","margin-left":"50px"}},[n("div",{staticClass:"bulkTitle",staticStyle:{color:"grey"}},[t._v("Input "),n("span",{staticStyle:{color:"black"}},[t._v("address,amount")]),t._v(" per line:")]),t._v(" "),n("el-input",{attrs:{type:"textarea",placeholder:"address,amount",rows:"20",clearable:""},model:{value:t.bulkAddInfo.recInfoStr,callback:function(e){t.$set(t.bulkAddInfo,"recInfoStr",e)},expression:"bulkAddInfo.recInfoStr"}}),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),n("div",{staticClass:"bulkTitle"},[t._v("Memo(optional, max 34 characters):")]),t._v(" "),n("el-input",{attrs:{clearable:"",placeholder:"memo",maxlength:"34"},model:{value:t.bulkAddInfo.memo,callback:function(e){t.$set(t.bulkAddInfo,"memo",e)},expression:"bulkAddInfo.memo"}}),t._v(" "),n("div",{staticClass:"bulkTitle",staticStyle:{color:"grey","font-size":"14px"}},[t._v("(Left memo empty can save gas)")]),t._v(" "),n("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary",disabled:0==t.bulkAddInfo.recInfoStr.trim().length},on:{click:function(e){return t.onClickSureBulkAdd()}}},[t._v("   Add   ")])],1)])],1)])},staticRenderFns:[]};var x=n("VU/8")(_,I,!1,function(t){n("PlFu")},"data-v-a1ba3f3a",null);e.default=x.exports},PlFu:function(t,e){},W3Iv:function(t,e,n){t.exports={default:n("wEtr"),__esModule:!0}},Xd32:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("5PlU")},d7EF:function(t,e,n){"use strict";e.__esModule=!0;var a=r(n("us/S")),i=r(n("BO1k"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,a.default)(Object(t)))return function(t,e){var n=[],a=!0,r=!1,o=void 0;try{for(var s,l=(0,i.default)(t);!(a=(s=l.next()).done)&&(n.push(s.value),!e||n.length!==e);a=!0);}catch(t){r=!0,o=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},gSvA:function(t,e,n){var a=n("kM2E"),i=n("mbce")(!0);a(a.S,"Object",{entries:function(t){return i(t)}})},mbce:function(t,e,n){var a=n("+E39"),i=n("lktj"),r=n("TcQ7"),o=n("NpIQ").f;t.exports=function(t){return function(e){for(var n,s=r(e),l=i(s),c=l.length,u=0,d=[];c>u;)n=l[u++],a&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}}},"us/S":function(t,e,n){t.exports={default:n("Xd32"),__esModule:!0}},wEtr:function(t,e,n){n("gSvA"),t.exports=n("FeBl").Object.entries}});