(window.saladictEntry=window.saladictEntry||[]).push([[113],{1354:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var r=t(0),s=t.n(r),n=t(184),l=t(123),c=t(1),u=t(9);const o=new Set(["ar","ara","az","fa","he","iw","ku","ug","ur"]),i=s.a.memo(({result:e,source:a})=>s.a.createElement(l.c,{src:"#"===e[a].tts?()=>(console.log({type:"DICT_ENGINE_METHOD",payload:{id:e.id,method:"getTTS",args:[e[a].paragraphs.join(" "),"trans"===a?e.tl:e.sl]}}),c.a.send({type:"DICT_ENGINE_METHOD",payload:{id:e.id,method:"getTTS",args:[e[a].paragraphs.join(" "),"trans"===a?e.tl:e.sl]}})):e[a].tts})),m=s.a.memo(({result:e,source:a,lang:t})=>s.a.createElement("div",{className:"MachineTrans-Lines"},s.a.createElement(i,{result:e,source:a}),e[a].paragraphs.map((e,a)=>s.a.createElement("p",{key:a,className:"MachineTrans-lang-"+t},e)))),p=s.a.memo(({result:e,source:a,lang:t})=>{const[n,l]=Object(r.useState)(!1),c=Object(r.useCallback)(()=>l(!1),[l]),u=Object(r.useRef)(null);return Object(r.useLayoutEffect)(()=>{if(n||!u.current)return;if(u.current.querySelectorAll("p").length>1)return void l(!0);const e=u.current.querySelector("p span");e&&e.getClientRects().length>1&&l(!0)},[]),s.a.createElement("div",{ref:u,className:"MachineTrans-Lines"},s.a.createElement(i,{result:e,source:a}),n?s.a.createElement("div",{className:"MachineTrans-Lines-collapse MachineTrans-lang-"+t},s.a.createElement("button",{onClick:c},e[a].paragraphs.join(" "))):e[a].paragraphs.map((e,a)=>s.a.createElement("p",{key:a,className:"MachineTrans-lang-"+t},s.a.createElement("span",null,e))))}),h=e=>{const{tl:a,sl:t}=e.result,[l,i]=Object(r.useState)(e.result.slInitial);return Object(n.a)(e.catalogSelect$,({key:r,value:s})=>{switch(r){case"showSl":i("full");break;case"sl":case"tl":e.searchText({id:e.result.id,payload:{sl:t,tl:a,[r]:s}});break;case"copySrc":c.a.send({type:"SET_CLIPBOARD",payload:e.result.searchText.paragraphs.join("\n")});break;case"copyTrans":c.a.send({type:"SET_CLIPBOARD",payload:e.result.trans.paragraphs.join("\n")})}}),e.result.requireCredential?function(){const{t:e}=Object(u.e)("content");return s.a.createElement(u.c,{message:e("machineTrans.login")},s.a.createElement("a",{href:browser.runtime.getURL("options.html?menuselected=DictAuths"),target:"_blank",rel:"nofollow noopener noreferrer"},e("machineTrans.dictAccount")))}():s.a.createElement("div",{className:o.has(t)||o.has(a)?"MachineTrans-has-rtl":void 0},s.a.createElement("div",{className:"MachineTrans-Text"},"full"===l?s.a.createElement(m,{result:e.result,source:"searchText",lang:t}):"collapse"===l?s.a.createElement(p,{result:e.result,source:"searchText",lang:t}):null,s.a.createElement(m,{result:e.result,source:"trans",lang:a})))}},683:function(e,a,t){"use strict";t.r(a);var r=t(1354);t.d(a,"default",(function(){return r.a}))}}]);