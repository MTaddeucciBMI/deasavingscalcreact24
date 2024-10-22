!function(){"use strict";var e={534:function(e,t,n){var r=n(2791),o=n(1250),i=n(885),a=n(1413),l=(n(5987),n(3161)),s=n(890),u=n(2930),c=n(948),f=n(835),d=n(184);var h=function(){var e={sx:[{width:"32VW",input:{textAlign:"center",fontSize:"18pt",fontWeight:"600",fontFamily:"Source Sans Pro"}}],variant:"outlined"},t=(0,r.useState)(0),n=(0,i.Z)(t,2),o=n[0],h=n[1],m=(0,r.useState)(0),g=(0,i.Z)(m,2),x=g[0],v=g[1];function p(e,t){var n=e*(t/100),r=new Intl.NumberFormat("en-US",{minimumFractionDigits:0}).format(n);if(null!==n)return h(r),r}function j(e,t){var n=e*t;if(null!==new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n))return v(n),n}var y=(0,r.useState)(1e3),b=(0,i.Z)(y,2),Z=b[0],S=b[1];function F(e){console.log("V-COUNT:",e),null!==e.target.value&&S(e.target.value)}var w=(0,r.useState)(7e3),V=(0,i.Z)(w,2),N=V[0],O=V[1];function I(e){console.log("V-COST:",e),null!==e.target.value&&O(e.target.value)}var C=(0,r.useState)(9.2),R=(0,i.Z)(C,2),W=R[0],P=R[1];function E(e){console.log("V-RATE:",e),null!==e.target.value&&P(e.target.value)}var k=(0,r.useState)(!1),z=(0,i.Z)(k,2),T=z[0],A=z[1];function _(e){A(e)}return(0,r.useEffect)((function(){_(!0),console.log("Calc Call, DEP COUNT:",Z,"DEP COST:",N,"INELIGIBLE RATE:",W),j(p(Z,W),N),console.log("Calc Result, INELIGIBLE DEPS:",o,"AVG SAVINGS:",x),_(!1)}),[F,I,E,S,O,P]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.Z,{sx:{display:{xs:"none",md:"block",lg:"block",xl:"block"}},children:[(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"How many dependents do you have?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{value:Z,onValueChange:function(e){F({target:{value:e.value}})},valueIsNumericString:!0,thousandSeparator:!0}))]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your average annual cost per dependent?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{onValueChange:function(e){I({target:{value:e.value}})},value:N,thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"}))]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your estimated ineligible rate?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{value:W,onValueChange:function(e){E({target:{value:e.value}})},valueIsNumericString:!0,suffix:"%"}))})]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsxs)(l.Z,{sx:{width:"47VW"},children:[1==T?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Z,{fontSize:"45pt",align:"center",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:Math.floor(o)})}),(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"ineligible dependents"})]}),(0,d.jsxs)(l.Z,{sx:{width:"47VW"},children:[1==T?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Z,{fontSize:"45pt",align:"center",format:"Currency",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:(0,d.jsx)(f.ZP,{end:parseInt(x),duration:2,prefix:"$"})})}),(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"first year annual savings"})]})]})]}),(0,d.jsxs)(l.Z,{sx:{display:{xs:"block",md:"none",lg:"none",xl:"none"}},children:[(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"How many dependents do you have?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{value:Z,onValueChange:function(e){F({target:{value:e.value}})},valueIsNumericString:!0,thousandSeparator:!0}))]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your average annual cost per dependent?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{onValueChange:function(e){I({target:{value:e.value}})},value:N,thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"}))]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsx)(l.Z,{sx:{width:"53VW"},children:(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"right",sx:{fontFamily:"Roboto",mt:2},children:"What is your estimated ineligible rate?"})}),(0,d.jsx)(l.Z,{sx:{width:"2VW"}}),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.h3,(0,a.Z)((0,a.Z)({customInput:u.Z},e),{},{value:W,onValueChange:function(e){E({target:{value:e.value}})},valueIsNumericString:!0,suffix:"%"}))})]}),(0,d.jsxs)("div",{className:"row-no-left-margin",children:[(0,d.jsxs)(l.Z,{sx:{width:"47VW"},children:[1==T?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Z,{fontSize:"45pt",align:"center",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:Math.floor(o)})}),(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"ineligible dependents"})]}),(0,d.jsxs)(l.Z,{sx:{width:"47VW"},children:[1==T?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Z,{fontSize:"45pt",align:"center",format:"Currency",sx:{fontFamily:"Source Sans Pro",color:"#0059a8"},children:(0,d.jsx)(f.ZP,{end:parseInt(x),duration:2,prefix:"$"})})}),(0,d.jsx)(s.Z,{fontFamily:"Roboto",fontSize:"14pt",align:"center",sx:{fontFamily:"Roboto"},children:"first year annual savings"})]})]})]})]})};n(6176),n(6875);var m=function(){return(0,d.jsx)("div",{className:"App",children:(0,d.jsx)(h,{})})},g=function(e){e&&e instanceof Function&&n.e(787).then(n.bind(n,787)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};o.createRoot(document.getElementById("root")).render((0,d.jsx)(r.StrictMode,{children:(0,d.jsx)(m,{})})),g()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},n.d(i,a),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/js/"+e+".ee19d0a6.chunk.js"},n.miniCssF=function(e){},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="react-intro:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/deasavingscalcreact24/",function(){var e={179:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error;n.l(a,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],l=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkreact_intro=self.webpackChunkreact_intro||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[606],(function(){return n(534)}));r=n.O(r)}();
//# sourceMappingURL=main.e4e183eb.js.map