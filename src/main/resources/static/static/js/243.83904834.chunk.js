"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[243],{9243:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});var s=t(3814),a=t(6213),o=t(1072),l=t(8602),d=t(3216),c=t(579);const n=()=>{const e=(0,d.Zp)();return(0,c.jsx)(s.A,{noValidate:!0,children:(0,c.jsx)(o.A,{children:(0,c.jsx)(l.A,{md:!0,children:(0,c.jsxs)(s.A.Group,{className:"form-box",children:[(0,c.jsx)(s.A.Label,{htmlFor:"orderData",children:"Files"}),(0,c.jsx)(s.A.Control,{type:"file",id:"orderData",accept:".xlsx, .xls, .csv","aria-describedby":"pdFcNumDesc",onChange:r=>(async r=>{let t="/rest/od/create",s=new FormData;s.append("orderData",r[0]);let o=await a.A.post(t,s).then((e=>console.log(e))).catch((e=>console.log(e)));console.log(o);let l=await fetch(t,{method:"POST",body:s}),d=await l.json();200===d.resultCode&&(alert(d.resultMessage),e("/admin/order/form"))})(r.target.files),required:!0}),(0,c.jsx)(s.A.Text,{id:"pdFcNumDesc",muted:!0,children:"\ub4f1\ub85d\ud560 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\ub97c \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694."})]})})})})}}}]);
//# sourceMappingURL=243.83904834.chunk.js.map