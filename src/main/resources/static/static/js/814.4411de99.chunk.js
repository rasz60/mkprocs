(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[814],{1497:(e,s,t)=>{"use strict";var a=t(3218);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,s,t,r,o,l){if(l!==a){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function s(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},5173:(e,s,t)=>{e.exports=t(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8602:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var a=t(8139),r=t.n(a),o=t(5043),l=t(7852),n=t(579);const i=o.forwardRef(((e,s)=>{const[{className:t,...a},{as:o="div",bsPrefix:i,spans:c}]=function(e){let{as:s,bsPrefix:t,className:a,...o}=e;t=(0,l.oU)(t,"col");const n=(0,l.gy)(),i=(0,l.Jm)(),c=[],d=[];return n.forEach((e=>{const s=o[e];let a,r,l;delete o[e],"object"===typeof s&&null!=s?({span:a,offset:r,order:l}=s):a=s;const n=e!==i?`-${e}`:"";a&&c.push(!0===a?`${t}${n}`:`${t}${n}-${a}`),null!=l&&d.push(`order${n}-${l}`),null!=r&&d.push(`offset${n}-${r}`)})),[{...o,className:r()(a,...c,...d)},{as:s,bsPrefix:t,spans:c}]}(e);return(0,n.jsx)(o,{...a,ref:s,className:r()(t,!c.length&&i)})}));i.displayName="Col";const c=i},3814:(e,s,t)=>{"use strict";t.d(s,{A:()=>W});var a=t(8139),r=t.n(a),o=t(5173),l=t.n(o),n=t(5043),i=t(579);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=n.forwardRef(((e,s)=>{let{as:t="div",className:a,type:o="valid",tooltip:l=!1,...n}=e;return(0,i.jsx)(t,{...n,ref:s,className:r()(a,`${o}-${l?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=c;const f=d,m=n.createContext({});var p=t(7852);const u=n.forwardRef(((e,s)=>{let{id:t,bsPrefix:a,className:o,type:l="checkbox",isValid:c=!1,isInvalid:d=!1,as:f="input",...u}=e;const{controlId:b}=(0,n.useContext)(m);return a=(0,p.oU)(a,"form-check-input"),(0,i.jsx)(f,{...u,ref:s,type:l,id:t||b,className:r()(o,a,c&&"is-valid",d&&"is-invalid")})}));u.displayName="FormCheckInput";const b=u,x=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,htmlFor:o,...l}=e;const{controlId:c}=(0,n.useContext)(m);return t=(0,p.oU)(t,"form-check-label"),(0,i.jsx)("label",{...l,ref:s,htmlFor:o||c,className:r()(a,t)})}));x.displayName="FormCheckLabel";const y=x;const h=n.forwardRef(((e,s)=>{let{id:t,bsPrefix:a,bsSwitchPrefix:o,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:u=!1,isInvalid:x=!1,feedbackTooltip:h=!1,feedback:N,feedbackType:v,className:j,style:w,title:g="",type:F="checkbox",label:I,children:k,as:$="input",...C}=e;a=(0,p.oU)(a,"form-check"),o=(0,p.oU)(o,"form-switch");const{controlId:P}=(0,n.useContext)(m),R=(0,n.useMemo)((()=>({controlId:t||P})),[P,t]),T=!k&&null!=I&&!1!==I||function(e,s){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===s))}(k,y),O=(0,i.jsx)(b,{...C,type:"switch"===F?"checkbox":F,ref:s,isValid:u,isInvalid:x,disabled:d,as:$});return(0,i.jsx)(m.Provider,{value:R,children:(0,i.jsx)("div",{style:w,className:r()(j,T&&a,l&&`${a}-inline`,c&&`${a}-reverse`,"switch"===F&&o),children:k||(0,i.jsxs)(i.Fragment,{children:[O,T&&(0,i.jsx)(y,{title:g,children:I}),N&&(0,i.jsx)(f,{type:v,tooltip:h,children:N})]})})})}));h.displayName="FormCheck";const N=Object.assign(h,{Input:b,Label:y});t(6440);const v=n.forwardRef(((e,s)=>{let{bsPrefix:t,type:a,size:o,htmlSize:l,id:c,className:d,isValid:f=!1,isInvalid:u=!1,plaintext:b,readOnly:x,as:y="input",...h}=e;const{controlId:N}=(0,n.useContext)(m);return t=(0,p.oU)(t,"form-control"),(0,i.jsx)(y,{...h,type:a,size:l,ref:s,readOnly:x,id:c||N,className:r()(d,b?`${t}-plaintext`:t,o&&`${t}-${o}`,"color"===a&&`${t}-color`,f&&"is-valid",u&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:f}),w=n.forwardRef(((e,s)=>{let{className:t,bsPrefix:a,as:o="div",...l}=e;return a=(0,p.oU)(a,"form-floating"),(0,i.jsx)(o,{ref:s,className:r()(t,a),...l})}));w.displayName="FormFloating";const g=w,F=n.forwardRef(((e,s)=>{let{controlId:t,as:a="div",...r}=e;const o=(0,n.useMemo)((()=>({controlId:t})),[t]);return(0,i.jsx)(m.Provider,{value:o,children:(0,i.jsx)(a,{...r,ref:s})})}));F.displayName="FormGroup";const I=F;var k=t(8602);const $=n.forwardRef(((e,s)=>{let{as:t="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:c,htmlFor:d,...f}=e;const{controlId:u}=(0,n.useContext)(m);a=(0,p.oU)(a,"form-label");let b="col-form-label";"string"===typeof o&&(b=`${b} ${b}-${o}`);const x=r()(c,a,l&&"visually-hidden",o&&b);return d=d||u,o?(0,i.jsx)(k.A,{ref:s,as:"label",className:x,htmlFor:d,...f}):(0,i.jsx)(t,{ref:s,className:x,htmlFor:d,...f})}));$.displayName="FormLabel";const C=$,P=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,id:o,...l}=e;const{controlId:c}=(0,n.useContext)(m);return t=(0,p.oU)(t,"form-range"),(0,i.jsx)("input",{...l,type:"range",ref:s,className:r()(a,t),id:o||c})}));P.displayName="FormRange";const R=P,T=n.forwardRef(((e,s)=>{let{bsPrefix:t,size:a,htmlSize:o,className:l,isValid:c=!1,isInvalid:d=!1,id:f,...u}=e;const{controlId:b}=(0,n.useContext)(m);return t=(0,p.oU)(t,"form-select"),(0,i.jsx)("select",{...u,size:o,ref:s,className:r()(l,t,a&&`${t}-${a}`,c&&"is-valid",d&&"is-invalid"),id:f||b})}));T.displayName="FormSelect";const O=T,U=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:o="small",muted:l,...n}=e;return t=(0,p.oU)(t,"form-text"),(0,i.jsx)(o,{...n,ref:s,className:r()(a,t,l&&"text-muted")})}));U.displayName="FormText";const S=U,L=n.forwardRef(((e,s)=>(0,i.jsx)(N,{...e,ref:s,type:"switch"})));L.displayName="Switch";const _=Object.assign(L,{Input:N.Input,Label:N.Label}),E=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,children:o,controlId:l,label:n,...c}=e;return t=(0,p.oU)(t,"form-floating"),(0,i.jsxs)(I,{ref:s,className:r()(a,t),controlId:l,...c,children:[o,(0,i.jsx)("label",{htmlFor:l,children:n})]})}));E.displayName="FloatingLabel";const V=E,z={_ref:l().any,validated:l().bool,as:l().elementType},A=n.forwardRef(((e,s)=>{let{className:t,validated:a,as:o="form",...l}=e;return(0,i.jsx)(o,{...l,ref:s,className:r()(t,a&&"was-validated")})}));A.displayName="Form",A.propTypes=z;const W=Object.assign(A,{Group:I,Control:j,Floating:g,Check:N,Switch:_,Label:C,Text:S,Range:R,Select:O,FloatingLabel:V})},6440:e=>{"use strict";var s=function(){};e.exports=s}}]);
//# sourceMappingURL=814.4411de99.chunk.js.map