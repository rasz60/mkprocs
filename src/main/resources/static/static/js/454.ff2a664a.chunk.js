/*! For license information please see 454.ff2a664a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[454],{4056:(e,t,o)=>{o.d(t,{A:()=>v});var r=o(5043),l=o(8387),n=o(8610),a=o(6318),s=o(6803),i=o(4535),c=o(6262),d=o(6431),u=o(2532),p=o(2372);function f(e){return(0,p.Ay)("MuiTab",e)}const b=(0,u.A)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]);var h=o(579);const m=(0,i.Ay)(a.A,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,s.A)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped,{[`& .${b.iconWrapper}`]:t.iconWrapper},{[`& .${b.icon}`]:t.icon}]}})((0,c.A)((e=>{let{theme:t}=e;return{...t.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:e=>{let{ownerState:t}=e;return t.label&&("top"===t.iconPosition||"bottom"===t.iconPosition)},style:{flexDirection:"column"}},{props:e=>{let{ownerState:t}=e;return t.label&&"top"!==t.iconPosition&&"bottom"!==t.iconPosition},style:{flexDirection:"row"}},{props:e=>{let{ownerState:t}=e;return t.icon&&t.label},style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:e=>{let{ownerState:t,iconPosition:o}=e;return t.icon&&t.label&&"top"===o},style:{[`& > .${b.icon}`]:{marginBottom:6}}},{props:e=>{let{ownerState:t,iconPosition:o}=e;return t.icon&&t.label&&"bottom"===o},style:{[`& > .${b.icon}`]:{marginTop:6}}},{props:e=>{let{ownerState:t,iconPosition:o}=e;return t.icon&&t.label&&"start"===o},style:{[`& > .${b.icon}`]:{marginRight:t.spacing(1)}}},{props:e=>{let{ownerState:t,iconPosition:o}=e;return t.icon&&t.label&&"end"===o},style:{[`& > .${b.icon}`]:{marginLeft:t.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${b.selected}`]:{opacity:1},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${b.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${b.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${b.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${b.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:e=>{let{ownerState:t}=e;return t.fullWidth},style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:e=>{let{ownerState:t}=e;return t.wrapped},style:{fontSize:t.typography.pxToRem(12)}}]}}))),v=r.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiTab"}),{className:a,disabled:i=!1,disableFocusRipple:c=!1,fullWidth:u,icon:p,iconPosition:b="top",indicator:v,label:S,onChange:y,onClick:w,onFocus:x,selected:A,selectionFollowsFocus:g,textColor:C="inherit",value:B,wrapped:M=!1,...I}=o,R={...o,disabled:i,disableFocusRipple:c,selected:A,icon:!!p,iconPosition:b,label:!!S,fullWidth:u,textColor:C,wrapped:M},T=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:a,label:i,selected:c,disabled:d}=e,u={root:["root",a&&i&&"labelIcon",`textColor${(0,s.A)(o)}`,r&&"fullWidth",l&&"wrapped",c&&"selected",d&&"disabled"],icon:["iconWrapper","icon"]};return(0,n.A)(u,f,t)})(R),E=p&&S&&r.isValidElement(p)?r.cloneElement(p,{className:(0,l.A)(T.icon,p.props.className)}):p;return(0,h.jsxs)(m,{focusRipple:!c,className:(0,l.A)(T.root,a),ref:t,role:"tab","aria-selected":A,disabled:i,onClick:e=>{!A&&y&&y(e,B),w&&w(e)},onFocus:e=>{g&&!A&&y&&y(e,B),x&&x(e)},ownerState:R,tabIndex:A?0:-1,...I,children:["top"===b||"start"===b?(0,h.jsxs)(r.Fragment,{children:[E,S]}):(0,h.jsxs)(r.Fragment,{children:[S,E]}),v]})}))},3625:(e,t,o)=>{o.d(t,{A:()=>X});var r=o(5043),l=(o(2086),o(8387)),n=o(8610),a=o(875),s=o(8092),i=o(4535),c=o(6240),d=o(6262),u=o(6431),p=o(950);function f(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var b=o(5013),h=o(6078),m=o(579);const v={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var S=o(9662);const y=(0,S.A)((0,m.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),w=(0,S.A)((0,m.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var x=o(6318),A=o(2532),g=o(2372);function C(e){return(0,g.Ay)("MuiTabScrollButton",e)}const B=(0,A.A)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),M=(0,i.Ay)(x.A,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${B.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),I=r.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiTabScrollButton"}),{className:r,slots:i={},slotProps:c={},direction:d,orientation:p,disabled:f,...b}=o,h=(0,a.I)(),v={isRtl:h,...o},S=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,n.A)(l,C,t)})(v),x=i.StartScrollButtonIcon??y,A=i.EndScrollButtonIcon??w,g=(0,s.A)({elementType:x,externalSlotProps:c.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),B=(0,s.A)({elementType:A,externalSlotProps:c.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return(0,m.jsx)(M,{component:"div",className:(0,l.A)(S.root,r),ref:t,role:null,ownerState:v,tabIndex:null,...b,style:{...b.style,..."vertical"===p&&{"--TabScrollButton-svgRotate":`rotate(${h?-90:90}deg)`}},children:"left"===d?(0,m.jsx)(x,{...g}):(0,m.jsx)(A,{...B})})}));var R=o(3319);function T(e){return(0,g.Ay)("MuiTabs",e)}const E=(0,A.A)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var P=o(2427);const W=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,k=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,$=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},z=(0,i.Ay)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${E.scrollButtons}`]:t.scrollButtons},{[`& .${E.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((0,d.A)((e=>{let{theme:t}=e;return{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:e=>{let{ownerState:t}=e;return t.vertical},style:{flexDirection:"column"}},{props:e=>{let{ownerState:t}=e;return t.scrollButtonsHideMobile},style:{[`& .${E.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}}]}}))),N=(0,i.Ay)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:e=>{let{ownerState:t}=e;return t.fixed},style:{overflowX:"hidden",width:"100%"}},{props:e=>{let{ownerState:t}=e;return t.hideScrollbar},style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:e=>{let{ownerState:t}=e;return t.scrollableX},style:{overflowX:"auto",overflowY:"hidden"}},{props:e=>{let{ownerState:t}=e;return t.scrollableY},style:{overflowY:"auto",overflowX:"hidden"}}]}),j=(0,i.Ay)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})({display:"flex",variants:[{props:e=>{let{ownerState:t}=e;return t.vertical},style:{flexDirection:"column"}},{props:e=>{let{ownerState:t}=e;return t.centered},style:{justifyContent:"center"}}]}),L=(0,i.Ay)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((0,d.A)((e=>{let{theme:t}=e;return{position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(t.vars||t).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(t.vars||t).palette.secondary.main}},{props:e=>{let{ownerState:t}=e;return t.vertical},style:{height:"100%",width:2,right:0}}]}}))),F=(0,i.Ay)((function(e){const{onChange:t,...o}=e,l=r.useRef(),n=r.useRef(null),a=()=>{l.current=n.current.offsetHeight-n.current.clientHeight};return(0,b.A)((()=>{const e=(0,p.A)((()=>{const e=l.current;a(),e!==l.current&&t(l.current)})),o=(0,h.A)(n.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),r.useEffect((()=>{a(),t(l.current)}),[t]),(0,m.jsx)("div",{style:v,ref:n,...o})}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),H={};const X=r.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiTabs"}),i=(0,c.A)(),d=(0,a.I)(),{"aria-label":b,"aria-labelledby":v,action:S,centered:y=!1,children:w,className:x,component:A="div",allowScrollButtonsMobile:g=!1,indicatorColor:C="primary",onChange:B,orientation:M="horizontal",ScrollButtonComponent:E=I,scrollButtons:X="auto",selectionFollowsFocus:D,slots:Y={},slotProps:O={},TabIndicatorProps:V={},TabScrollButtonProps:_={},textColor:q="primary",value:K,variant:G="standard",visibleScrollbar:U=!1,...J}=o,Q="scrollable"===G,Z="vertical"===M,ee=Z?"scrollTop":"scrollLeft",te=Z?"top":"left",oe=Z?"bottom":"right",re=Z?"clientHeight":"clientWidth",le=Z?"height":"width",ne={...o,component:A,allowScrollButtonsMobile:g,indicatorColor:C,orientation:M,vertical:Z,scrollButtons:X,textColor:q,variant:G,visibleScrollbar:U,fixed:!Q,hideScrollbar:Q&&!U,scrollableX:Q&&!Z,scrollableY:Q&&Z,centered:y&&!Q,scrollButtonsHideMobile:!g},ae=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:a,centered:s,scrollButtonsHideMobile:i,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",s&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",i&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,n.A)(d,T,c)})(ne),se=(0,s.A)({elementType:Y.StartScrollButtonIcon,externalSlotProps:O.startScrollButtonIcon,ownerState:ne}),ie=(0,s.A)({elementType:Y.EndScrollButtonIcon,externalSlotProps:O.endScrollButtonIcon,ownerState:ne});const[ce,de]=r.useState(!1),[ue,pe]=r.useState(H),[fe,be]=r.useState(!1),[he,me]=r.useState(!1),[ve,Se]=r.useState(!1),[ye,we]=r.useState({overflow:"hidden",scrollbarWidth:0}),xe=new Map,Ae=r.useRef(null),ge=r.useRef(null),Ce=()=>{const e=Ae.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==K){const e=ge.current.children;if(e.length>0){const t=e[xe.get(K)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Be=(0,R.A)((()=>{const{tabsMeta:e,tabMeta:t}=Ce();let o,r=0;Z?(o="top",t&&e&&(r=t.top-e.top+e.scrollTop)):(o=d?"right":"left",t&&e&&(r=(d?-1:1)*(t[o]-e[o]+e.scrollLeft)));const l={[o]:r,[le]:t?t[le]:0};if("number"!==typeof ue[o]||"number"!==typeof ue[le])pe(l);else{const e=Math.abs(ue[o]-l[o]),t=Math.abs(ue[le]-l[le]);(e>=1||t>=1)&&pe(l)}})),Me=function(e){let{animation:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?function(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{};const{ease:n=f,duration:a=300}=r;let s=null;const i=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void l(new Error("Animation cancelled"));null===s&&(s=r);const d=Math.min(1,(r-s)/a);t[e]=n(d)*(o-i)+i,d>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(u)};i===o?l(new Error("Element already at target position")):requestAnimationFrame(u)}(ee,Ae.current,e,{duration:i.transitions.duration.standard}):Ae.current[ee]=e},Ie=e=>{let t=Ae.current[ee];t+=Z?e:e*(d?-1:1),Me(t)},Re=()=>{const e=Ae.current[re];let t=0;const o=Array.from(ge.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[re]>e){0===r&&(t=e);break}t+=l[re]}return t},Te=()=>{Ie(-1*Re())},Ee=()=>{Ie(Re())},Pe=r.useCallback((e=>{we({overflow:null,scrollbarWidth:e})}),[]),We=(0,R.A)((e=>{const{tabsMeta:t,tabMeta:o}=Ce();if(o&&t)if(o[te]<t[te]){const r=t[ee]+(o[te]-t[te]);Me(r,{animation:e})}else if(o[oe]>t[oe]){const r=t[ee]+(o[oe]-t[oe]);Me(r,{animation:e})}})),ke=(0,R.A)((()=>{Q&&!1!==X&&Se(!ve)}));r.useEffect((()=>{const e=(0,p.A)((()=>{Ae.current&&Be()}));let t;const o=o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{t?.unobserve(e)})),e.addedNodes.forEach((e=>{t?.observe(e)}))})),e(),ke()},r=(0,h.A)(Ae.current);let l;return r.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(ge.current.children).forEach((e=>{t.observe(e)}))),"undefined"!==typeof MutationObserver&&(l=new MutationObserver(o),l.observe(ge.current,{childList:!0})),()=>{e.clear(),r.removeEventListener("resize",e),l?.disconnect(),t?.disconnect()}}),[Be,ke]),r.useEffect((()=>{const e=Array.from(ge.current.children),t=e.length;if("undefined"!==typeof IntersectionObserver&&t>0&&Q&&!1!==X){const o=e[0],r=e[t-1],l={root:Ae.current,threshold:.99},n=new IntersectionObserver((e=>{be(!e[0].isIntersecting)}),l);n.observe(o);const a=new IntersectionObserver((e=>{me(!e[0].isIntersecting)}),l);return a.observe(r),()=>{n.disconnect(),a.disconnect()}}}),[Q,X,ve,w?.length]),r.useEffect((()=>{de(!0)}),[]),r.useEffect((()=>{Be()})),r.useEffect((()=>{We(H!==ue)}),[We,ue]),r.useImperativeHandle(S,(()=>({updateIndicator:Be,updateScrollButtons:ke})),[Be,ke]);const $e=(0,m.jsx)(L,{...V,className:(0,l.A)(ae.indicator,V.className),ownerState:ne,style:{...ue,...V.style}});let ze=0;const Ne=r.Children.map(w,(e=>{if(!r.isValidElement(e))return null;const t=void 0===e.props.value?ze:e.props.value;xe.set(t,ze);const o=t===K;return ze+=1,r.cloneElement(e,{fullWidth:"fullWidth"===G,indicator:o&&!ce&&$e,selected:o,selectionFollowsFocus:D,onChange:B,textColor:q,value:t,...1!==ze||!1!==K||e.props.tabIndex?{}:{tabIndex:0}})})),je=(()=>{const e={};e.scrollbarSizeListener=Q?(0,m.jsx)(F,{onChange:Pe,className:(0,l.A)(ae.scrollableX,ae.hideScrollbar)}):null;const t=Q&&("auto"===X&&(fe||he)||!0===X);return e.scrollButtonStart=t?(0,m.jsx)(E,{slots:{StartScrollButtonIcon:Y.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:se},orientation:M,direction:d?"right":"left",onClick:Te,disabled:!fe,..._,className:(0,l.A)(ae.scrollButtons,_.className)}):null,e.scrollButtonEnd=t?(0,m.jsx)(E,{slots:{EndScrollButtonIcon:Y.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:ie},orientation:M,direction:d?"left":"right",onClick:Ee,disabled:!he,..._,className:(0,l.A)(ae.scrollButtons,_.className)}):null,e})();return(0,m.jsxs)(z,{className:(0,l.A)(ae.root,x),ownerState:ne,ref:t,as:A,...J,children:[je.scrollButtonStart,je.scrollbarSizeListener,(0,m.jsxs)(N,{className:ae.scroller,ownerState:ne,style:{overflow:ye.overflow,[Z?"margin"+(d?"Left":"Right"):"marginBottom"]:U?void 0:-ye.scrollbarWidth},ref:Ae,children:[(0,m.jsx)(j,{"aria-label":b,"aria-labelledby":v,"aria-orientation":"vertical"===M?"vertical":null,className:ae.flexContainer,ownerState:ne,onKeyDown:e=>{const t=ge.current,o=(0,P.A)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===M?"ArrowLeft":"ArrowUp",l="horizontal"===M?"ArrowRight":"ArrowDown";switch("horizontal"===M&&d&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),$(t,o,k);break;case l:e.preventDefault(),$(t,o,W);break;case"Home":e.preventDefault(),$(t,null,W);break;case"End":e.preventDefault(),$(t,null,k)}},ref:ge,role:"tablist",children:Ne}),ce&&$e]}),je.scrollButtonEnd]})}))},950:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(3468).A},2427:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(1668).A},6078:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(3940).A},875:(e,t,o)=>{o.d(t,{I:()=>n});var r=o(5043);o(579);const l=r.createContext();const n=()=>r.useContext(l)??!1},3468:(e,t,o)=>{function r(e){let t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];clearTimeout(t),t=setTimeout((()=>{e.apply(this,l)}),o)}return r.clear=()=>{clearTimeout(t)},r}o.d(t,{A:()=>r})},1668:(e,t,o)=>{function r(e){return e&&e.ownerDocument||document}o.d(t,{A:()=>r})},3940:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(1668);function l(e){return(0,r.A)(e).defaultView||window}},8092:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(3462),l=o(9388),n=o(9523),a=o(6004);const s=function(e){const{elementType:t,externalSlotProps:o,ownerState:s,skipResolvingSlotProps:i=!1,...c}=e,d=i?{}:(0,a.A)(o,s),{props:u,internalRef:p}=(0,n.A)({...c,externalSlotProps:d}),f=(0,r.A)(p,d?.ref,e.additionalProps?.ref);return(0,l.A)(t,{...u,ref:f},s)}},5082:(e,t)=>{var o,r=Symbol.for("react.element"),l=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case s:case a:case p:case f:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case h:case b:case i:return e;default:return t}}case l:return t}}}o=Symbol.for("react.module.reference")},2086:(e,t,o)=>{o(5082)}}]);
//# sourceMappingURL=454.ff2a664a.chunk.js.map