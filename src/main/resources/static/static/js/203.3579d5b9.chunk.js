"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[203],{6203:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(6213),o=l(7353),s=l(7784),n=l(3216),r=l(579);const c=()=>{const e=(0,n.Zp)();return(0,r.jsx)("form",{noValidate:!0,children:(0,r.jsx)(o.A,{children:(0,r.jsx)(s.A,{type:"file",id:"platformData",fullWidth:!0,onChange:t=>(async t=>{console.log(t);let l="/rest/pf/createBulk",o=new FormData;o.append("platformData",t[0]);let s=await a.A.post(l,o).then((e=>console.log(e))).catch((e=>console.log(e)));console.log(s);let n=await fetch(l,{method:"POST",body:o}),r=await n.json();200===r.resultCode&&(alert(r.resultMessage),e("/admin/platform/form"))})(t.target.files),required:!0,accept:".xlsx, .xls, .csv",helperText:"\ub4f1\ub85d\ud560 \ud50c\ub7ab\ud3fc \ub9ac\uc2a4\ud2b8\ub97c \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694. (.xlsx, .xls, .csv)"})})})}}}]);
//# sourceMappingURL=203.3579d5b9.chunk.js.map