"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[219],{9219:(e,r,s)=>{s.r(r),s.d(r,{default:()=>n});var t=s(3814),o=s(6213),a=s(1072),l=s(8602),d=s(3216),c=s(579);const n=()=>{const e=(0,d.Zp)();return(0,c.jsx)(t.A,{noValidate:!0,children:(0,c.jsx)(a.A,{children:(0,c.jsx)(l.A,{md:!0,children:(0,c.jsxs)(t.A.Group,{className:"form-box",children:[(0,c.jsx)(t.A.Label,{htmlFor:"orderData",children:"Files"}),(0,c.jsx)(t.A.Control,{type:"file",id:"orderData",accept:".xlsx, .xls, .csv","aria-describedby":"pdFcNumDesc",onChange:r=>(async r=>{console.log(r);let s="/rest/od/create",t=new FormData;t.append("orderData",r[0]);let a=await o.A.post(s,t).then((e=>console.log(e))).catch((e=>console.log(e)));console.log(a);let l=await fetch(s,{method:"POST",body:t}),d=await l.json();200===d.resultCode&&(alert(d.resultMessage),e("/admin/order/form"))})(r.target.files),required:!0}),(0,c.jsx)(t.A.Text,{id:"pdFcNumDesc",muted:!0,children:"\uc8fc\ubb38\ud560 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\ub97c \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694."})]})})})})}}}]);
//# sourceMappingURL=219.4af1c05d.chunk.js.map