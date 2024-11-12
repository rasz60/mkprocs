"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[351],{351:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var r=a(5043),s=a(7353),o=a(7561),n=a(7784),i=a(9190),l=a(8387),d=a(8610),c=a(1546),u=a(1475),p=a(4535),m=a(6262),v=a(6431),h=a(1347),g=a(6318),y=a(5013),b=a(5849),f=a(5658),x=a(1424),A=a(8052),C=a(2532),N=a(2372);function j(e){return(0,N.Ay)("MuiMenuItem",e)}const $=(0,C.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var S=a(579);const w=(0,p.Ay)(g.A,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((0,m.A)((e=>{let{theme:t}=e;return{...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${$.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${f.A.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${f.A.inset}`]:{marginLeft:52},[`& .${A.A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.A.inset}`]:{paddingLeft:36},[`& .${x.A.root}`]:{minWidth:36},variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return!t.dense},style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:e=>{let{ownerState:t}=e;return t.dense},style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${x.A.root} svg`]:{fontSize:"1.25rem"}}}]}}))),O=r.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:o="li",dense:n=!1,divider:i=!1,disableGutters:c=!1,focusVisibleClassName:u,role:p="menuitem",tabIndex:m,className:g,...f}=a,x=r.useContext(h.A),A=r.useMemo((()=>({dense:n||x.dense||!1,disableGutters:c})),[x.dense,n,c]),C=r.useRef(null);(0,y.A)((()=>{s&&C.current&&C.current.focus()}),[s]);const N={...a,dense:A.dense,divider:i,disableGutters:c},$=(e=>{const{disabled:t,dense:a,divider:r,disableGutters:s,selected:o,classes:n}=e,i={root:["root",a&&"dense",t&&"disabled",!s&&"gutters",r&&"divider",o&&"selected"]},l=(0,d.A)(i,j,n);return{...n,...l}})(a),O=(0,b.A)(C,t);let k;return a.disabled||(k=void 0!==m?m:-1),(0,S.jsx)(h.A.Provider,{value:A,children:(0,S.jsx)(w,{ref:O,role:p,tabIndex:k,component:o,focusVisibleClassName:(0,l.A)($.focusVisible,u),className:(0,l.A)($.root,g),...f,ownerState:N,classes:$})})}));var k=a(1673),F=a(9336),P=a(1906),V=a(1402),q=a(3216);const M=()=>{const[e,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)([]),[d,c]=(0,r.useState)({pdName:"",pdFcNum:"",pdCategory:"",pdColorNum:"",pdPrice:""});(0,r.useEffect)((()=>{u()}),[]);const u=async()=>{let e=await fetch("/rest/fc/list"),t=(await e.json()).result.fcList;null!=t&&l(t)},p=(0,q.Zp)(),m=e=>{const{name:t,value:a}=e.target;c({...d,[t]:a})};return(0,S.jsxs)("form",{noValidate:!0,validated:e,onSubmit:e=>{e.preventDefault();const a=e.target.checkValidity();console.log(a),a?(t(!0),(async()=>{let e=await fetch("/rest/pd/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pdName:document.querySelector("#pdName").value,pdCategory:document.querySelector("#pdCategory").value,pdPrice:document.querySelector("#pdPrice").value,pdFcNum:document.querySelector("#pdFcNum").value,pdColorNum:document.querySelector("#pdColorNum").vaule})}),t=await e.json();200===t.resultCode&&(alert(t.resultMessage),p("/admin/product/list"))})()):(t(!1),e.stopPropagation())},children:[(0,S.jsxs)(s.A,{className:"box-form",children:[(0,S.jsx)(o.A,{fullWidth:!0,children:(0,S.jsx)(n.A,{name:"pdName",label:"Product Name",variant:"standard",helperText:"\ub4f1\ub85d\ud560 \uc0c1\ud488 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",className:"mt-4",value:d.pdName,onChange:m,required:!0})}),(0,S.jsxs)(o.A,{fullWidth:!0,required:!0,className:"mt-4 fc-select",children:[(0,S.jsx)(i.A,{htmlFor:"pdFcNum",children:"Factory"}),(0,S.jsxs)(V.A,{name:"pdFcNum",variant:"standard",className:"mt-4",defaultValue:"",value:d.pdFcNum,onChange:m,children:[(0,S.jsx)(O,{value:"",children:"\uc120\ud0dd"}),a.map((e=>(0,S.jsx)(O,{value:e.fcNum,children:e.fcName})))]}),(0,S.jsx)(k.A,{children:"\uc81c\uc870\uc0ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,S.jsxs)(o.A,{fullWidth:!0,required:!0,className:"mt-4 fc-select",children:[(0,S.jsx)(i.A,{htmlFor:"pdCategory",children:"Category"}),(0,S.jsx)(V.A,{name:"pdCategory",variant:"standard",className:"mt-4",defaultValue:"",value:d.pdCategory,onChange:m,children:(0,S.jsx)(O,{value:"",children:"\uc120\ud0dd"})}),(0,S.jsx)(k.A,{children:"\uc0c1\ud488 \uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,S.jsxs)(o.A,{fullWidth:!0,required:!0,className:"mt-4 fc-select",children:[(0,S.jsx)(i.A,{htmlFor:"pdColorNum",children:"Colors"}),(0,S.jsx)(V.A,{name:"pdColorNum",variant:"standard",className:"mt-4",defaultValue:"",value:d.pdColorNum,onChange:m,children:(0,S.jsx)(O,{value:"",children:"\uc120\ud0dd"})}),(0,S.jsx)(k.A,{children:"\uc0c1\ud488 \uc0c9\uc0c1\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,S.jsx)(o.A,{fullWidth:!0,children:(0,S.jsx)(n.A,{name:"pdPrice",label:"Price",variant:"standard",helperText:"\uc0c1\ud488 \uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",className:"mt-4",value:d.pdPrice,onChange:m,required:!0})})]}),(0,S.jsx)(F.A,{}),(0,S.jsx)(s.A,{className:"box-button-bottom",children:(0,S.jsx)(P.A,{type:"submit",variant:"contained",children:"Regist"})})]})}}}]);
//# sourceMappingURL=351.1f44e745.chunk.js.map