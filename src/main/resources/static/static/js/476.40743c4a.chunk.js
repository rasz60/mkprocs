"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[476],{1476:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(5043),s=a(3216),r=a(7353),c=a(6980),d=a(7784),l=a(9190),o=a(1673),i=a(9336),u=a(1906),f=a(579);const m=()=>{const[e,t]=(0,n.useState)(!1),a=(0,s.Zp)(),[m,h]=(0,n.useState)({fcName:"",fcStartDate:"",fcEndDate:""}),x=e=>{const{name:t,value:a}=e.target;h({...m,[t]:a})};return(0,f.jsxs)("form",{noValidate:!0,validated:e,onSubmit:e=>{const n=e.currentTarget;console.log(n.checkValidity()),!1===n.checkValidity()?(e.preventDefault(),e.stopPropagation()):(console.log("?"),e.preventDefault(),(async()=>{let e=await fetch("/rest/fc/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fcName:document.querySelector("#fcName").value,fcStartDate:new Date(document.querySelector("#fcStartDate").value),fcEndDate:new Date(document.querySelector("#fcEndDate").value)})}),t=await e.json();200===t.resultCode&&(alert(t.resultMessage),a("/admin/factory/list"))})()),t(!0)},children:[(0,f.jsxs)(r.A,{className:"box-form",children:[(0,f.jsx)(c.A,{fullWidth:!0,children:(0,f.jsx)(d.A,{name:"fcName",label:"Factory Name",variant:"standard",helperText:"\ub4f1\ub85d\ud560 \uc81c\uc870\uc0ac \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",className:"mt-4",value:m.fcName,onChange:x,required:!0})}),(0,f.jsxs)(c.A,{sx:{width:.5},className:"mt-4 fc-date",children:[(0,f.jsx)(l.A,{htmlFor:"fcStartDate",children:"Start Date"}),(0,f.jsx)(d.A,{sx:{width:"85%"},type:"date",name:"fcStartDate",variant:"standard",className:"dateTF",value:m.fcStartDate,onChange:x,required:!0}),(0,f.jsx)(o.A,{children:"\uacc4\uc57d \uc2dc\uc791\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,f.jsxs)(c.A,{sx:{width:.5},className:"mt-4 fc-date",children:[(0,f.jsx)(l.A,{htmlFor:"fcEndDate",children:"End Date"}),(0,f.jsx)(d.A,{sx:{width:"85%"},type:"date",name:"fcEndDate",variant:"standard",className:"dateTF",slotProps:{input:{placeHolder:""}},value:m.fcEndDate,onChange:x,required:!0}),(0,f.jsx)(o.A,{children:"\uacc4\uc57d \uc885\ub8cc\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]})]}),(0,f.jsx)(i.A,{}),(0,f.jsx)(r.A,{className:"box-button-bottom",children:(0,f.jsx)(u.A,{type:"submit",variant:"contained",children:"Regist"})})]})}}}]);
//# sourceMappingURL=476.40743c4a.chunk.js.map