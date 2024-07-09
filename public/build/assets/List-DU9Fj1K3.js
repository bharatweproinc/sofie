import{r as p,j as e,a as m}from"./app-BrpFlROM.js";import{S as L}from"./index-B_ztOYNU.js";import N from"./Constants-ttby-g83.js";/* empty css              */import{N as b}from"./NoDataFound-DJa6iwJ_.js";import{G as g}from"./Grid-ZzrG6Bko.js";import{P as y}from"./Paper-C0czFXi5.js";import{T as B,a as M,b as S,c as f,d as n,e as P,P as T}from"./TableRow-B40ltFMF.js";import{B as t}from"./Box-2v6E1F4P.js";import{T as o}from"./Typography-lHaPfwtB.js";import"./styled-DlxeY87j.js";import"./createSvgIcon-2J45DIvz.js";import"./useIsFocusVisible-ClApUROQ.js";import"./Sofie-logo-JyWgQps7.js";import"./ButtonBase-C3tVN2QK.js";import"./Button-BJfAuLnI.js";import"./useTheme-4IyPaln1.js";import"./PeopleAltOutlined-88qQqSGu.js";import"./DeleteIcon-Bd1YrHaN.js";import"./useMediaQuery-CvUksV2-.js";import"./listItemIconClasses-ISg4v0fV.js";function $({list:c=[]}){const[l,j]=p.useState({key:null,direction:"asc"}),h=10,[d,w]=p.useState(1),C=[...c].sort((i,s)=>{if(l.key!==null){const r=l.key;if(i[r]<s[r])return l.direction==="asc"?-1:1;if(i[r]>s[r])return l.direction==="asc"?1:-1}return 0}),x=d*h,u=x-h,v=C.slice(u,x),E=(i,s)=>{w(s)},a=i=>{let s="asc";l.key===i&&l.direction==="asc"&&(s="desc"),j({key:i,direction:s})};return e.jsx(L,{children:c.length>0?e.jsx(g,{container:!0,className:"mentor_list",children:e.jsx(g,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},children:e.jsxs(y,{children:[e.jsx(B,{sx:{width:"100%"},children:e.jsxs(M,{sx:{minWidth:650,maxWidth:"100%"},"aria-label":"simple table",children:[e.jsx(S,{children:e.jsxs(f,{children:[e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Name"}),e.jsxs("div",{className:"grid",onClick:()=>a("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Mobile Number"}),e.jsxs("div",{className:"grid",onClick:()=>a("mobile_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>a("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Functional"}),e.jsxs("div",{className:"grid",onClick:()=>a("functional"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsx(t,{className:"flex gap-3",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Action"})})})]})}),e.jsx(P,{children:v.map(i=>e.jsxs(f,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(n,{align:"left",component:"th",scope:"row",children:i.mentored_company}),e.jsx(n,{align:"left",children:i.user.phone}),e.jsx(n,{align:"left",children:i.user.email}),e.jsx(n,{align:"left",children:i.functional_area}),e.jsx(n,{align:"left",children:e.jsx(t,{sx:{gap:"10px"},className:"flex",children:N.icons.map((s,r)=>e.jsx("span",{children:s.id===1?e.jsx(m,{href:route("mentor.saveDetail",{id:i.id}),children:s.icon}):s.id===2?e.jsx(m,{href:route("mentor.detail",{id:i.id}),children:s.icon}):s.icon},r))})})]},i.id))})]})}),e.jsx(t,{p:2,display:"flex",justifyContent:"center",children:e.jsx(T,{count:Math.ceil(c.length/h),page:d,className:"table_pagination",onChange:E,sx:{mt:3}})})]})})}):e.jsx(b,{message:"No Mentor available"})})}export{$ as default};
