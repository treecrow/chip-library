(window.saladictEntry=window.saladictEntry||[]).push([[127],{1353:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),c=a.n(n),r="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;const l=e=>{const{tag:t="div",html:a,...l}=e,s=Object(n.useMemo)(()=>{try{const e=document.createDocumentFragment(),t=(new DOMParser).parseFromString(a,"text/html");return Array.from(t.body.childNodes).forEach(t=>{e.appendChild(t)}),e}catch(e){!1}return null},[a]),[i,m]=Object(n.useState)(null);return r(()=>{if(s&&i){for(;i.childNodes.length>0;)i.childNodes[0].remove();i.appendChild(s)}},[s,i]),c.a.createElement(t,{...l,ref:m})}},673:function(e,t,a){"use strict";a.r(t),a.d(t,"DictShanbay",(function(){return s}));var n=a(0),c=a.n(n),r=a(123),l=a(1353);const s=({result:e})=>c.a.createElement(c.a.Fragment,null,e.title&&c.a.createElement("div",{className:"dictShanbay-HeaderContainer"},c.a.createElement("h1",{className:"dictShanbay-Title"},e.title),c.a.createElement("span",{className:"dictShanbay-Pattern"},e.pattern)),e.prons.length>0&&c.a.createElement("div",{className:"dictShanBay-HeaderContainer"},e.prons.map(({phsym:e,url:t})=>c.a.createElement(c.a.Fragment,{key:t},e," ",c.a.createElement(r.c,{src:t})))),e.basic&&c.a.createElement(l.a,{className:"dictShanbay-Basic",html:e.basic}),e.sentences&&c.a.createElement("div",null,c.a.createElement("h1",{className:"dictShanbay-SecTitle"},"权威例句"),c.a.createElement("ol",{className:"dictShanbay-Sentence"},e.sentences.map(e=>c.a.createElement("li",{key:e.annotation},c.a.createElement(l.a,{tag:"p",html:e.annotation}),c.a.createElement("p",null,e.translation))))));t.default=s}}]);