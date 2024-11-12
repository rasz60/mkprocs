/*! For license information please see 678.0ae7b4ba.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[678],{4140:(e,t,n)=>{"use strict";n.d(t,{Am:()=>i,Ay:()=>l});var r=n(5043),o=n(579);const a=["as","disabled"];function i(e){let{tagName:t,disabled:n,href:r,target:o,rel:a,role:i,onClick:s,tabIndex:l=0,type:u}=e;t||(t=null!=r||null!=o||null!=a?"a":"button");const c={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},c];const f=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},c]}const s=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,a);const[l,{tagName:u}]=i(Object.assign({tagName:n,disabled:r},s));return(0,o.jsx)(u,Object.assign({},s,l,{ref:t}))}));s.displayName="Button";const l=s},2740:e=>{"use strict";e.exports=function(e,t,n,r,o,a,i,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,i,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}))};var r,o=n(3534),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,i){var s=o||"<<anonymous>>",l=i||r;if(null==n[r])return t?new Error("Required "+a+" `"+l+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,s,a,l].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1778:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const r=n(5043).createContext(null);r.displayName="CardHeaderContext";const o=r},2678:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var r=n(8139),o=n.n(r),a=(n(9197),n(5043)),i=n(8168),s=n(8587);n(2740);function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,r){var o,c=n,f=c[l(r)],d=c[r],v=(0,s.A)(c,[l(r),r].map(u)),p=t[r],y=function(e,t,n){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),i=o[0],s=o[1],l=void 0!==e,u=r.current;return r.current=l,!l&&u&&i!==t&&s(t),[l?e:i,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(d,f,e[p]),b=y[0],g=y[1];return(0,i.A)({},v,((o={})[r]=b,o[p]=g,o))}),e)}function f(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function d(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function v(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;var p=Function.prototype.bind.call(Function.prototype.call,[].slice);const y=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const b=function(e,t){return(0,a.useMemo)((()=>function(e,t){const n=y(e),r=y(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])},g=a.createContext(null);g.displayName="NavContext";const m=g,x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},h=a.createContext(null),w=a.createContext(null);function C(e){return`data-rr-ui-${e}`}const j=function(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e}),[e]),t};function N(e){const t=j(e);return(0,a.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}var k=n(4140),O=n(579);const A=["as","active","eventKey"];function S(e){let{key:t,onClick:n,active:r,id:o,role:i,disabled:s}=e;const l=(0,a.useContext)(h),u=(0,a.useContext)(m),c=(0,a.useContext)(w);let f=r;const d={role:i};if(u){i||"tablist"!==u.role||(d.role="tab");const e=u.getControllerId(null!=t?t:null),n=u.getControlledId(null!=t?t:null);d[C("event-key")]=t,d.id=e||o,f=null==r&&null!=t?u.activeKey===t:r,!f&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(d["aria-controls"]=n)}return"tab"===d.role&&(d["aria-selected"]=f,f||(d.tabIndex=-1),s&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=N((e=>{s||(null==n||n(e),null!=t&&l&&!e.isPropagationStopped()&&l(t,e))})),[d,{isActive:f}]}const P=a.forwardRef(((e,t)=>{let{as:n=k.Ay,active:r,eventKey:o}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,A);const[i,s]=S(Object.assign({key:x(o,a.href),active:r},a));return i[C("active")]=s.isActive,(0,O.jsx)(n,Object.assign({},a,i,{ref:t}))}));P.displayName="NavItem";const K=P,D=["as","onSelect","activeKey","role","onKeyDown"];const I=()=>{},_=C("event-key"),R=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:i,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,D);const u=function(){const[,e]=(0,a.useReducer)((e=>!e),!1);return e}(),c=(0,a.useRef)(!1),f=(0,a.useContext)(h),d=(0,a.useContext)(w);let v,y;d&&(i=i||"tablist",o=d.activeKey,v=d.getControlledId,y=d.getControllerId);const g=(0,a.useRef)(null),C=e=>{const t=g.current;if(!t)return null;const n=(r=`[${_}]:not([aria-disabled=true])`,p(t.querySelectorAll(r)));var r;const o=t.querySelector("[aria-selected=true]");if(!o||o!==document.activeElement)return null;const a=n.indexOf(o);if(-1===a)return null;let i=a+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},j=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,a.useEffect)((()=>{if(g.current&&c.current){const e=g.current.querySelector(`[${_}][aria-selected=true]`);null==e||e.focus()}c.current=!1}));const N=b(t,g);return(0,O.jsx)(h.Provider,{value:j,children:(0,O.jsx)(m.Provider,{value:{role:i,activeKey:x(o),getControlledId:v||I,getControllerId:y||I},children:(0,O.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!d)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}var n;t&&(e.preventDefault(),j(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),c.current=!0,u())},ref:N,role:i}))})})}));R.displayName="Nav";const $=Object.assign(R,{Item:K});var E=n(7852);const U=a.createContext(null);U.displayName="NavbarContext";const M=U;var q=n(1778);const B=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...i}=e;return r=(0,E.oU)(r,"nav-item"),(0,O.jsx)(a,{ref:t,className:o()(n,r),...i})}));B.displayName="NavItem";const F=B;"undefined"!==typeof n.g&&n.g.navigator&&n.g.navigator.product,new WeakMap;const W=["onKeyDown"];const L=a.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,W);const[o]=(0,k.Am)(Object.assign({tagName:"a"},r)),a=N((e=>{o.onKeyDown(e),null==n||n(e)}));return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,O.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,O.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:a}));var i}));L.displayName="Anchor";const H=L,T=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:a=H,active:i,eventKey:s,disabled:l=!1,...u}=e;n=(0,E.oU)(n,"nav-link");const[c,f]=S({key:x(s,u.href),active:i,disabled:l,...u});return(0,O.jsx)(a,{...u,...c,ref:t,disabled:l,className:o()(r,n,l&&"disabled",f.isActive&&"active")})}));T.displayName="NavLink";const J=T,V=a.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:l=!1,navbar:u,navbarScroll:f,className:d,activeKey:v,...p}=c(e,{activeKey:"onSelect"}),y=(0,E.oU)(r,"nav");let b,g,m=!1;const x=(0,a.useContext)(M),h=(0,a.useContext)(q.A);return x?(b=x.bsPrefix,m=null==u||u):h&&({cardHeaderBsPrefix:g}=h),(0,O.jsx)($,{as:n,ref:t,activeKey:v,className:o()(d,{[y]:!m,[`${b}-nav`]:m,[`${b}-nav-scroll`]:m&&f,[`${g}-${i}`]:!!g,[`${y}-${i}`]:!!i,[`${y}-fill`]:s,[`${y}-justified`]:l}),...p})}));V.displayName="Nav";const z=Object.assign(V,{Item:F,Link:J})},7852:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>f,gy:()=>c,oU:()=>u});var r=n(5043);n(579);const o=["xxl","xl","lg","md","sm","xs"],a="xs",i=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:a}),{Consumer:s,Provider:l}=i;function u(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(i);return e}function f(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=678.0ae7b4ba.chunk.js.map