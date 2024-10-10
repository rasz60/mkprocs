"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[796],{7796:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var r=t(5043),l=t(3814),a=t(4282),o=t(1072),c=t(8602),n=t(3216),d=t(579);const i=()=>{const[e,s]=(0,r.useState)(!1),[t,i]=(0,r.useState)(null),[m,u]=(0,r.useState)(null),[p,f]=(0,r.useState)(null);(0,r.useEffect)((()=>{x()}),[]),(0,r.useEffect)((()=>{const e=document.querySelector("#pdFcNum");e.innerHTML="";const s=document.createElement("option");if(s.value="",s.textContent="\uc81c\uc870\uc0ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",e.appendChild(s),null!=t)for(var r=0;r<t.length;r++){const s=document.createElement("option");s.value=t[r].fcNum,s.textContent=t[r].fcName,e.appendChild(s)}}),[t]);const x=async()=>{let e=await fetch("/rest/fc/list"),s=(await e.json()).result.fcList;null!=s&&i(s)},h=(0,n.Zp)();return(0,d.jsxs)(l.A,{noValidate:!0,validated:e,onSubmit:e=>{const t=e.currentTarget;console.log(t.checkValidity()),!1===t.checkValidity()?(e.preventDefault(),e.stopPropagation()):(console.log("?"),e.preventDefault(),(async()=>{let e=await fetch("/rest/pd/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pdName:document.querySelector("#pdName").value,pdCategory:document.querySelector("#pdCategory").value,pdPrice:document.querySelector("#pdPrice").value,pdFcNum:document.querySelector("#pdFcNum").value,pdColorNum:document.querySelector("#pdColorNum").vaule})}),s=await e.json();200===s.resultCode&&(alert(s.resultMessage),h("/"))})()),s(!0)},children:[(0,d.jsx)(o.A,{children:(0,d.jsxs)(l.A.Group,{className:"form-box",children:[(0,d.jsx)(l.A.Label,{htmlFor:"pdName",children:"Product Name"}),(0,d.jsx)(l.A.Control,{type:"text",id:"pdName","aria-describedby":"pdNameDesc",required:!0}),(0,d.jsx)(l.A.Text,{id:"pdNameDesc",muted:!0,children:"\ub4f1\ub85d\ud560 \uc0c1\ud488 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,d.jsx)(l.A.Control.Feedback,{type:"invalid",children:"\uc0c1\ud488 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})}),(0,d.jsx)(o.A,{children:(0,d.jsx)(c.A,{md:!0,children:(0,d.jsxs)(l.A.Group,{className:"form-box",children:[(0,d.jsx)(l.A.Label,{htmlFor:"pdFcNum",children:"Factory"}),(0,d.jsx)(l.A.Select,{id:"pdFcNum","aria-describedby":"pdFcNumDesc",required:!0,children:(0,d.jsx)("option",{value:"",children:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,d.jsx)(l.A.Text,{id:"pdFcNumDesc",muted:!0,children:"\uc81c\uc870\uc0ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})}),(0,d.jsx)(o.A,{children:(0,d.jsx)(c.A,{md:!0,children:(0,d.jsxs)(l.A.Group,{className:"form-box",children:[(0,d.jsx)(l.A.Label,{htmlFor:"pdCategory",children:"Category"}),(0,d.jsx)(l.A.Select,{id:"pdCategory","aria-describedby":"pdCategoryDesc",required:!0}),(0,d.jsx)(l.A.Text,{id:"pdCategoryDesc",muted:!0,children:"\uc0c1\ud488 \uce74\ud14c\uace0\ub9ac\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})}),(0,d.jsx)(o.A,{children:(0,d.jsx)(c.A,{md:!0,children:(0,d.jsxs)(l.A.Group,{className:"form-box",children:[(0,d.jsx)(l.A.Label,{htmlFor:"pdColorNum",children:"Color"}),(0,d.jsx)(l.A.Select,{id:"pdColorNum","aria-describedby":"pdColorNumDesc",required:!0}),(0,d.jsx)(l.A.Text,{id:"pdColorNumDesc",muted:!0,children:"\uc0c9\uc0c1\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})}),(0,d.jsx)(o.A,{children:(0,d.jsx)(c.A,{md:!0,children:(0,d.jsxs)(l.A.Group,{className:"form-box",children:[(0,d.jsx)(l.A.Label,{htmlFor:"pdPrice",children:"Price"}),(0,d.jsx)(l.A.Control,{type:"number",id:"pdPrice","aria-describedby":"pdPriceDesc",min:"1000",required:!0}),(0,d.jsx)(l.A.Text,{id:"pdPriceDesc",muted:!0,children:"\uc0c1\ud488 \uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})}),(0,d.jsx)(o.A,{className:"mt-3",children:(0,d.jsx)(c.A,{md:!0,className:"d-flex justify-content-end",children:(0,d.jsx)(a.A,{className:"btn-primary",type:"submit",children:"\ub4f1\ub85d"})})})]})}},8602:(e,s,t)=>{t.d(s,{A:()=>d});var r=t(8139),l=t.n(r),a=t(5043),o=t(7852),c=t(579);const n=a.forwardRef(((e,s)=>{const[{className:t,...r},{as:a="div",bsPrefix:n,spans:d}]=function(e){let{as:s,bsPrefix:t,className:r,...a}=e;t=(0,o.oU)(t,"col");const c=(0,o.gy)(),n=(0,o.Jm)(),d=[],i=[];return c.forEach((e=>{const s=a[e];let r,l,o;delete a[e],"object"===typeof s&&null!=s?({span:r,offset:l,order:o}=s):r=s;const c=e!==n?`-${e}`:"";r&&d.push(!0===r?`${t}${c}`:`${t}${c}-${r}`),null!=o&&i.push(`order${c}-${o}`),null!=l&&i.push(`offset${c}-${l}`)})),[{...a,className:l()(r,...d,...i)},{as:s,bsPrefix:t,spans:d}]}(e);return(0,c.jsx)(a,{...r,ref:s,className:l()(t,!d.length&&n)})}));n.displayName="Col";const d=n},3814:(e,s,t)=>{t.d(s,{A:()=>G});var r=t(8139),l=t.n(r),a=t(5173),o=t.n(a),c=t(5043),n=t(579);const d={type:o().string,tooltip:o().bool,as:o().elementType},i=c.forwardRef(((e,s)=>{let{as:t="div",className:r,type:a="valid",tooltip:o=!1,...c}=e;return(0,n.jsx)(t,{...c,ref:s,className:l()(r,`${a}-${o?"tooltip":"feedback"}`)})}));i.displayName="Feedback",i.propTypes=d;const m=i,u=c.createContext({});var p=t(7852);const f=c.forwardRef(((e,s)=>{let{id:t,bsPrefix:r,className:a,type:o="checkbox",isValid:d=!1,isInvalid:i=!1,as:m="input",...f}=e;const{controlId:x}=(0,c.useContext)(u);return r=(0,p.oU)(r,"form-check-input"),(0,n.jsx)(m,{...f,ref:s,type:o,id:t||x,className:l()(a,r,d&&"is-valid",i&&"is-invalid")})}));f.displayName="FormCheckInput";const x=f,h=c.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,htmlFor:a,...o}=e;const{controlId:d}=(0,c.useContext)(u);return t=(0,p.oU)(t,"form-check-label"),(0,n.jsx)("label",{...o,ref:s,htmlFor:a||d,className:l()(r,t)})}));h.displayName="FormCheckLabel";const b=h;const y=c.forwardRef(((e,s)=>{let{id:t,bsPrefix:r,bsSwitchPrefix:a,inline:o=!1,reverse:d=!1,disabled:i=!1,isValid:f=!1,isInvalid:h=!1,feedbackTooltip:y=!1,feedback:N,feedbackType:j,className:v,style:C,title:A="",type:F="checkbox",label:g,children:w,as:$="input",...P}=e;r=(0,p.oU)(r,"form-check"),a=(0,p.oU)(a,"form-switch");const{controlId:k}=(0,c.useContext)(u),S=(0,c.useMemo)((()=>({controlId:t||k})),[k,t]),I=!w&&null!=g&&!1!==g||function(e,s){return c.Children.toArray(e).some((e=>c.isValidElement(e)&&e.type===s))}(w,b),R=(0,n.jsx)(x,{...P,type:"switch"===F?"checkbox":F,ref:s,isValid:f,isInvalid:h,disabled:i,as:$});return(0,n.jsx)(u.Provider,{value:S,children:(0,n.jsx)("div",{style:C,className:l()(v,I&&r,o&&`${r}-inline`,d&&`${r}-reverse`,"switch"===F&&a),children:w||(0,n.jsxs)(n.Fragment,{children:[R,I&&(0,n.jsx)(b,{title:A,children:g}),N&&(0,n.jsx)(m,{type:j,tooltip:y,children:N})]})})})}));y.displayName="FormCheck";const N=Object.assign(y,{Input:x,Label:b});t(6440);const j=c.forwardRef(((e,s)=>{let{bsPrefix:t,type:r,size:a,htmlSize:o,id:d,className:i,isValid:m=!1,isInvalid:f=!1,plaintext:x,readOnly:h,as:b="input",...y}=e;const{controlId:N}=(0,c.useContext)(u);return t=(0,p.oU)(t,"form-control"),(0,n.jsx)(b,{...y,type:r,size:o,ref:s,readOnly:h,id:d||N,className:l()(i,x?`${t}-plaintext`:t,a&&`${t}-${a}`,"color"===r&&`${t}-color`,m&&"is-valid",f&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:m}),C=c.forwardRef(((e,s)=>{let{className:t,bsPrefix:r,as:a="div",...o}=e;return r=(0,p.oU)(r,"form-floating"),(0,n.jsx)(a,{ref:s,className:l()(t,r),...o})}));C.displayName="FormFloating";const A=C,F=c.forwardRef(((e,s)=>{let{controlId:t,as:r="div",...l}=e;const a=(0,c.useMemo)((()=>({controlId:t})),[t]);return(0,n.jsx)(u.Provider,{value:a,children:(0,n.jsx)(r,{...l,ref:s})})}));F.displayName="FormGroup";const g=F;var w=t(8602);const $=c.forwardRef(((e,s)=>{let{as:t="label",bsPrefix:r,column:a=!1,visuallyHidden:o=!1,className:d,htmlFor:i,...m}=e;const{controlId:f}=(0,c.useContext)(u);r=(0,p.oU)(r,"form-label");let x="col-form-label";"string"===typeof a&&(x=`${x} ${x}-${a}`);const h=l()(d,r,o&&"visually-hidden",a&&x);return i=i||f,a?(0,n.jsx)(w.A,{ref:s,as:"label",className:h,htmlFor:i,...m}):(0,n.jsx)(t,{ref:s,className:h,htmlFor:i,...m})}));$.displayName="FormLabel";const P=$,k=c.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,id:a,...o}=e;const{controlId:d}=(0,c.useContext)(u);return t=(0,p.oU)(t,"form-range"),(0,n.jsx)("input",{...o,type:"range",ref:s,className:l()(r,t),id:a||d})}));k.displayName="FormRange";const S=k,I=c.forwardRef(((e,s)=>{let{bsPrefix:t,size:r,htmlSize:a,className:o,isValid:d=!1,isInvalid:i=!1,id:m,...f}=e;const{controlId:x}=(0,c.useContext)(u);return t=(0,p.oU)(t,"form-select"),(0,n.jsx)("select",{...f,size:a,ref:s,className:l()(o,t,r&&`${t}-${r}`,d&&"is-valid",i&&"is-invalid"),id:m||x})}));I.displayName="FormSelect";const R=I,T=c.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,as:a="small",muted:o,...c}=e;return t=(0,p.oU)(t,"form-text"),(0,n.jsx)(a,{...c,ref:s,className:l()(r,t,o&&"text-muted")})}));T.displayName="FormText";const L=T,U=c.forwardRef(((e,s)=>(0,n.jsx)(N,{...e,ref:s,type:"switch"})));U.displayName="Switch";const D=Object.assign(U,{Input:N.Input,Label:N.Label}),q=c.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,children:a,controlId:o,label:c,...d}=e;return t=(0,p.oU)(t,"form-floating"),(0,n.jsxs)(g,{ref:s,className:l()(r,t),controlId:o,...d,children:[a,(0,n.jsx)("label",{htmlFor:o,children:c})]})}));q.displayName="FloatingLabel";const V=q,O={_ref:o().any,validated:o().bool,as:o().elementType},E=c.forwardRef(((e,s)=>{let{className:t,validated:r,as:a="form",...o}=e;return(0,n.jsx)(a,{...o,ref:s,className:l()(t,r&&"was-validated")})}));E.displayName="Form",E.propTypes=O;const G=Object.assign(E,{Group:g,Control:v,Floating:A,Check:N,Switch:D,Label:P,Text:L,Range:S,Select:R,FloatingLabel:V})},1072:(e,s,t)=>{t.d(s,{A:()=>d});var r=t(8139),l=t.n(r),a=t(5043),o=t(7852),c=t(579);const n=a.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,as:a="div",...n}=e;const d=(0,o.oU)(t,"row"),i=(0,o.gy)(),m=(0,o.Jm)(),u=`${d}-cols`,p=[];return i.forEach((e=>{const s=n[e];let t;delete n[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const r=e!==m?`-${e}`:"";null!=t&&p.push(`${u}${r}-${t}`)})),(0,c.jsx)(a,{ref:s,...n,className:l()(r,d,...p)})}));n.displayName="Row";const d=n}}]);
//# sourceMappingURL=796.d62e8713.chunk.js.map