"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[924],{1924:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(5043),r=a(3814),d=a(4282),l=a(1072),n=a(8602),c=a(3216),i=a(579);const o=()=>{const[e,t]=(0,s.useState)(!1),a=(0,c.Zp)();return(0,i.jsxs)(r.A,{noValidate:!0,validated:e,onSubmit:e=>{const s=e.currentTarget;console.log(s.checkValidity()),!1===s.checkValidity()?(e.preventDefault(),e.stopPropagation()):(e.preventDefault(),(async()=>{let e=await fetch("/rest/pf/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pfName:document.querySelector("#pfName").value,pfStartDate:new Date(document.querySelector("#pfStartDate").value),pfEndDate:new Date(document.querySelector("#pfEndDate").value)})}),t=await e.json();200===t.resultCode&&(alert(t.resultMessage),a("/admin/platform/list"))})()),t(!0)},children:[(0,i.jsx)(l.A,{children:(0,i.jsxs)(r.A.Group,{className:"form-box",children:[(0,i.jsx)(r.A.Label,{htmlFor:"pfName",children:"Platform Name"}),(0,i.jsx)(r.A.Control,{type:"text",id:"pfName","aria-describedby":"pfNameDesc",required:!0}),(0,i.jsx)(r.A.Text,{id:"pfNameDesc",muted:!0,children:"\ub4f1\ub85d\ud560 \ud50c\ub7ab\ud3fc \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,i.jsx)(r.A.Control.Feedback,{type:"invalid",children:"\ud50c\ub7ab\ud3fc \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})}),(0,i.jsxs)(l.A,{children:[(0,i.jsx)(n.A,{md:!0,children:(0,i.jsxs)(r.A.Group,{className:"form-box",children:[(0,i.jsx)(r.A.Label,{htmlFor:"pfStartDate",children:"Start Date"}),(0,i.jsx)(r.A.Control,{type:"date",id:"pfStartDate","aria-describedby":"pfStartDateDesc",required:!0}),(0,i.jsx)(r.A.Text,{id:"pfStartDateDesc",muted:!0,children:"\uc2dc\uc791\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})}),(0,i.jsx)(n.A,{md:!0,children:(0,i.jsxs)(r.A.Group,{className:"form-box",children:[(0,i.jsx)(r.A.Label,{htmlFor:"pfEndDate",children:"End Date"}),(0,i.jsx)(r.A.Control,{type:"date",id:"pfEndDate","aria-describedby":"pfEndDateDesc",required:!0}),(0,i.jsx)(r.A.Text,{id:"pfEndDateDesc",muted:!0,children:"\uc885\ub8cc\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})]}),(0,i.jsx)(l.A,{className:"mt-3",children:(0,i.jsx)(n.A,{md:!0,className:"d-flex justify-content-end",children:(0,i.jsx)(d.A,{className:"btn-primary",type:"submit",children:"\ub4f1\ub85d"})})})]})}},4282:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(8139),r=a.n(s),d=a(5043),l=a(4140),n=a(7852),c=a(579);const i=d.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:d="primary",size:i,active:o=!1,disabled:m=!1,className:f,...p}=e;const u=(0,n.oU)(s,"btn"),[x,{tagName:h}]=(0,l.Am)({tagName:a,disabled:m,...p}),b=h;return(0,c.jsx)(b,{...x,...p,ref:t,disabled:m,className:r()(f,u,o&&"active",d&&`${u}-${d}`,i&&`${u}-${i}`,p.href&&m&&"disabled")})}));i.displayName="Button";const o=i},1072:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(8139),r=a.n(s),d=a(5043),l=a(7852),n=a(579);const c=d.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:d="div",...c}=e;const i=(0,l.oU)(a,"row"),o=(0,l.gy)(),m=(0,l.Jm)(),f=`${i}-cols`,p=[];return o.forEach((e=>{const t=c[e];let a;delete c[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const s=e!==m?`-${e}`:"";null!=a&&p.push(`${f}${s}-${a}`)})),(0,n.jsx)(d,{ref:t,...c,className:r()(s,i,...p)})}));c.displayName="Row";const i=c}}]);
//# sourceMappingURL=924.ce8cd9c0.chunk.js.map