!function(){"use strict";var e={534:function(e,t,n){var r=n(2791),o=n(1250),i=n(885),a=n(1413),u=(n(5987),n(3161)),l=n(2220),c=n(890),s=n(528),f=n(948),d=n(835),g=n(184);var m=function(){var e={sx:[{width:"20VW",input:{textAlign:"center",fontSize:"18pt",fontWeight:"600",fontFamily:"Source Sans Pro"}}],variant:"outlined"},t=(0,r.useState)(0),n=(0,i.Z)(t,2),o=n[0],m=n[1],v=(0,r.useState)(0),h=(0,i.Z)(v,2),p=h[0],x=h[1];function j(e,t){var n=e*(t/100),r=new Intl.NumberFormat("en-US",{minimumFractionDigits:0}).format(n);if(null!==n)return m(r),r}function b(e,t){var n=e*t;if(null!==new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n))return x(n),n}var y=(0,r.useState)(1e3),S=(0,i.Z)(y,2),Z=S[0],F=S[1];function O(e){console.log("V-COUNT:",e),null!==e.target.value&&F(e.target.value)}var w=(0,r.useState)(7e3),C=(0,i.Z)(w,2),N=C[0],E=C[1];function I(e){console.log("V-COST:",e),null!==e.target.value&&E(e.target.value)}var P=(0,r.useState)(9.2),V=(0,i.Z)(P,2),k=V[0],R=V[1];function T(e){console.log("V-RATE:",e),null!==e.target.value&&R(e.target.value)}var W=(0,r.useState)(!1),A=(0,i.Z)(W,2),_=A[0],z=A[1];function L(e){z(e)}return(0,r.useEffect)((function(){L(!0),console.log("Calc Call, DEP COUNT:",Z,"DEP COST:",N,"INELIGIBLE RATE:",k),b(j(Z,k),N),console.log("Calc Result, INELIGIBLE DEPS:",o,"AVG SAVINGS:",p),L(!1)}),[O,I,T,F,E,R]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(l.Z,{maxWidth:"lg",children:[(0,g.jsxs)("div",{className:"row-no-left-margin",children:[(0,g.jsx)(u.Z,{sx:{width:"24VW"},children:(0,g.jsx)(c.Z,{fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"How many dependents do you have?"})}),(0,g.jsx)(u.Z,{sx:{width:"2VW"}}),(0,g.jsx)(f.h3,(0,a.Z)((0,a.Z)({customInput:s.Z},e),{},{value:Z,onValueChange:function(e){O({target:{value:e.value}})},valueIsNumericString:!0,thousandSeparator:!0}))]}),(0,g.jsxs)("div",{className:"row-no-left-margin",children:[(0,g.jsx)(u.Z,{sx:{width:"24VW"},children:(0,g.jsx)(c.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your average annual cost per dependent?"})}),(0,g.jsx)(u.Z,{sx:{width:"2VW"}}),(0,g.jsx)(f.h3,(0,a.Z)((0,a.Z)({customInput:s.Z},e),{},{onValueChange:function(e){I({target:{value:e.value}})},value:N,thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"}))]}),(0,g.jsxs)("div",{className:"row-no-left-margin",children:[(0,g.jsx)(u.Z,{sx:{width:"24VW"},children:(0,g.jsx)(c.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your estimated ineligible rate?"})}),(0,g.jsx)(u.Z,{sx:{width:"2VW"}}),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f.h3,(0,a.Z)((0,a.Z)({customInput:s.Z},e),{},{value:k,onValueChange:function(e){T({target:{value:e.value}})},valueIsNumericString:!0,suffix:"%"}))})]}),(0,g.jsxs)("div",{className:"row-no-left-margin",children:[(0,g.jsxs)(u.Z,{sx:{width:"24VW"},children:[1==_?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(c.Z,{fontSize:"45pt",align:"center",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:Math.floor(o)})}),(0,g.jsx)(c.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"ineligible dependents"})]}),(0,g.jsxs)(u.Z,{sx:{width:"24VW"},children:[1==_?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(c.Z,{fontSize:"45pt",align:"center",format:"Currency",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:(0,g.jsx)(d.ZP,{end:parseInt(p),duration:2,prefix:"$"})})}),(0,g.jsx)(c.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"first year annual savings"})]})]})]})})};n(6176),n(6875);var v=function(){return(0,g.jsx)("div",{className:"App",children:(0,g.jsx)(m,{})})},h=function(e){e&&e instanceof Function&&n.e(787).then(n.bind(n,787)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};o.createRoot(document.getElementById("root")).render((0,g.jsx)(r.StrictMode,{children:(0,g.jsx)(v,{})})),h()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},n.d(i,a),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/js/"+e+".ee19d0a6.chunk.js"},n.miniCssF=function(e){},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="react-intro:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/deasavingscalcreact24/",function(){var e={179:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error;n.l(a,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkreact_intro=self.webpackChunkreact_intro||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[639],(function(){return n(534)}));r=n.O(r)}();
//# sourceMappingURL=main.76d4acaa.js.map