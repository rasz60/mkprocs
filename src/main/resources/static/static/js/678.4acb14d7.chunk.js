"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[678],{4140:(e,t,n)=>{n.d(t,{Am:()=>i,Ay:()=>s});var r=n(5043),a=n(579);const o=["as","disabled"];function i(e){let{tagName:t,disabled:n,href:r,target:a,rel:o,role:i,onClick:l,tabIndex:s=0,type:u}=e;t||(t=null!=r||null!=a||null!=o?"a":"button");const c={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},c];const f=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==l||l(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},c]}const l=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,o);const[s,{tagName:u}]=i(Object.assign({tagName:n,disabled:r},l));return(0,a.jsx)(u,Object.assign({},l,s,{ref:t}))}));l.displayName="Button";const s=l},2740:e=>{e.exports=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},9197:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n(3534),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var l=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,l,o,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2678:(e,t,n)=>{n.d(t,{A:()=>G});var r=n(8139),a=n.n(r),o=(n(9197),n(5043)),i=n(8168),l=n(8587);n(2740);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,r){var a,c=n,f=c[s(r)],d=c[r],v=(0,l.A)(c,[s(r),r].map(u)),p=t[r],y=function(e,t,n){var r=(0,o.useRef)(void 0!==e),a=(0,o.useState)(t),i=a[0],l=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&i!==t&&l(t),[s?e:i,(0,o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),l(e)}),[n])]}(d,f,e[p]),b=y[0],g=y[1];return(0,i.A)({},v,((a={})[r]=b,a[p]=g,a))}),e)}function f(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function d(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function v(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;var p=Function.prototype.bind.call(Function.prototype.call,[].slice);const y=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const b=function(e,t){return(0,o.useMemo)((()=>function(e,t){const n=y(e),r=y(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])},g=o.createContext(null);g.displayName="NavContext";const h=g,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},x=o.createContext(null),w=o.createContext(null);function C(e){return`data-rr-ui-${e}`}const N=function(e){const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t};function j(e){const t=N(e);return(0,o.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}var k=n(4140),O=n(579);const A=["as","active","eventKey"];function K(e){let{key:t,onClick:n,active:r,id:a,role:i,disabled:l}=e;const s=(0,o.useContext)(x),u=(0,o.useContext)(h),c=(0,o.useContext)(w);let f=r;const d={role:i};if(u){i||"tablist"!==u.role||(d.role="tab");const e=u.getControllerId(null!=t?t:null),n=u.getControlledId(null!=t?t:null);d[C("event-key")]=t,d.id=e||a,f=null==r&&null!=t?u.activeKey===t:r,!f&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(d["aria-controls"]=n)}return"tab"===d.role&&(d["aria-selected"]=f,f||(d.tabIndex=-1),l&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=j((e=>{l||(null==n||n(e),null!=t&&s&&!e.isPropagationStopped()&&s(t,e))})),[d,{isActive:f}]}const P=o.forwardRef(((e,t)=>{let{as:n=k.Ay,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,A);const[i,l]=K(Object.assign({key:m(a,o.href),active:r},o));return i[C("active")]=l.isActive,(0,O.jsx)(n,Object.assign({},o,i,{ref:t}))}));P.displayName="NavItem";const S=P,D=["as","onSelect","activeKey","role","onKeyDown"];const I=()=>{},_=C("event-key"),R=o.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:a,role:i,onKeyDown:l}=e,s=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,D);const u=function(){const[,e]=(0,o.useReducer)((e=>!e),!1);return e}(),c=(0,o.useRef)(!1),f=(0,o.useContext)(x),d=(0,o.useContext)(w);let v,y;d&&(i=i||"tablist",a=d.activeKey,v=d.getControlledId,y=d.getControllerId);const g=(0,o.useRef)(null),C=e=>{const t=g.current;if(!t)return null;const n=(r=`[${_}]:not([aria-disabled=true])`,p(t.querySelectorAll(r)));var r;const a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const o=n.indexOf(a);if(-1===o)return null;let i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},N=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,o.useEffect)((()=>{if(g.current&&c.current){const e=g.current.querySelector(`[${_}][aria-selected=true]`);null==e||e.focus()}c.current=!1}));const j=b(t,g);return(0,O.jsx)(x.Provider,{value:N,children:(0,O.jsx)(h.Provider,{value:{role:i,activeKey:m(a),getControlledId:v||I,getControllerId:y||I},children:(0,O.jsx)(n,Object.assign({},s,{onKeyDown:e=>{if(null==l||l(e),!d)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}var n;t&&(e.preventDefault(),N(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),c.current=!0,u())},ref:j,role:i}))})})}));R.displayName="Nav";const $=Object.assign(R,{Item:S});var E=n(7852);const U=o.createContext(null);U.displayName="NavbarContext";const M=U;var q=n(1778);const F=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=(0,E.oU)(r,"nav-item"),(0,O.jsx)(o,{ref:t,className:a()(n,r),...i})}));F.displayName="NavItem";const W=F;"undefined"!==typeof n.g&&n.g.navigator&&n.g.navigator.product,new WeakMap;const B=["onKeyDown"];const L=o.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,B);const[a]=(0,k.Am)(Object.assign({tagName:"a"},r)),o=j((e=>{a.onKeyDown(e),null==n||n(e)}));return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,O.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,O.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:o}));var i}));L.displayName="Anchor";const T=L,H=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o=T,active:i,eventKey:l,disabled:s=!1,...u}=e;n=(0,E.oU)(n,"nav-link");const[c,f]=K({key:m(l,u.href),active:i,disabled:s,...u});return(0,O.jsx)(o,{...u,...c,ref:t,disabled:s,className:a()(r,n,s&&"disabled",f.isActive&&"active")})}));H.displayName="NavLink";const V=H,z=o.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:i,fill:l=!1,justify:s=!1,navbar:u,navbarScroll:f,className:d,activeKey:v,...p}=c(e,{activeKey:"onSelect"}),y=(0,E.oU)(r,"nav");let b,g,h=!1;const m=(0,o.useContext)(M),x=(0,o.useContext)(q.A);return m?(b=m.bsPrefix,h=null==u||u):x&&({cardHeaderBsPrefix:g}=x),(0,O.jsx)($,{as:n,ref:t,activeKey:v,className:a()(d,{[y]:!h,[`${b}-nav`]:h,[`${b}-nav-scroll`]:h&&f,[`${g}-${i}`]:!!g,[`${y}-${i}`]:!!i,[`${y}-fill`]:l,[`${y}-justified`]:s}),...p})}));z.displayName="Nav";const G=Object.assign(z,{Item:W,Link:V})}}]);
//# sourceMappingURL=678.4acb14d7.chunk.js.map