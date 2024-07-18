import{W as b,r as j,j as e,a as x}from"./app-BIipo8El.js";import"./index-BoFs-JIU.js";import{C as B}from"./Constants-DBTemf9D.js";/* empty css              */import{N as M}from"./NoDataFound-vC18mefK.js";import{L as P}from"./index-CY1YLmOQ.js";import{Q as T}from"./ReactToastify-CmK5ZitM.js";import{G as k}from"./Grid-x2sYhoEK.js";import{P as S}from"./Paper-FjaSN4g-.js";import{T as W,a as Z,b as _,c as C,d as n,e as R,P as z}from"./TableRow-NcqzUWuN.js";import{B as r}from"./Box-DZozpeJv.js";import{T as o}from"./Typography-CZPS58Mj.js";import"./index-BZ3hNmTI.js";import"./DefaultPropsProvider-DCh9ZCp3.js";import"./Button-B5Yi8pk4.js";import"./ButtonBase-D9ujge8j.js";import"./useIsFocusVisible-LvsNc5Z6.js";import"./createSvgIcon-DNK7iMay.js";import"./PeopleAltOutlined-DcX4jRq4.js";import"./DeleteIcon-BF3hNtE-.js";import"./useTheme-CcYtXVp5.js";function t0({list:p=[]}){b();let d=p.company;const[a,u]=j.useState({key:null,direction:"asc"}),h=8,[m,v]=j.useState(1),w=[...d].sort((i,s)=>{if(a.key!==null){const t=a.key;if(i[t]<s[t])return a.direction==="asc"?-1:1;if(i[t]>s[t])return a.direction==="asc"?1:-1}return 0}),g=m*h,E=g-h,L=w.slice(E,g),y=(i,s)=>{v(s)},c=i=>{let s="asc";a.key===i&&a.direction==="asc"&&(s="desc"),u({key:i,direction:s})};return e.jsxs(P,{auth:p.user,children:[e.jsx(T,{style:{marginTop:"65px"}}),d.length>0?e.jsx(k,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},className:"companies_main",children:e.jsxs(S,{children:[e.jsx(W,{sx:{width:"100%"},children:e.jsxs(Z,{sx:{minWidth:650,maxWidth:"100%"},"aria-label":"simple table",children:[e.jsx(_,{children:e.jsxs(C,{children:[e.jsx(n,{children:e.jsxs(r,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Name"}),e.jsxs("div",{className:"grid",onClick:()=>c("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(r,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Mobile Number"}),e.jsxs("div",{className:"grid",onClick:()=>c("mobile_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"left",children:e.jsxs(r,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Person"}),e.jsxs("div",{className:"grid",onClick:()=>c("name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(r,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>c("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsx(r,{className:"flex gap-3 pl-10",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Action"})})})]})}),e.jsx(R,{children:L.map(i=>{var s,t,f;return e.jsxs(C,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(n,{align:"left",component:"th",scope:"row",children:i==null?void 0:i.company_name}),e.jsx(n,{align:"left",children:(s=i==null?void 0:i.user)==null?void 0:s.phone}),e.jsx(n,{align:"left",children:(t=i==null?void 0:i.user)==null?void 0:t.name}),e.jsx(n,{align:"left",children:(f=i==null?void 0:i.user)==null?void 0:f.email}),e.jsx(n,{align:"left",children:e.jsx(r,{sx:{gap:"10px"},className:"flex",children:B.icons.map((l,N)=>l.id===4&&i.user.is_live!==0?null:e.jsx("span",{children:l.id===1?e.jsx(x,{href:route("admin.company.companydetail",i.user.id),children:l.icon}):l.id===2?e.jsx(x,{href:route("admin.company.get",i.id),children:l.icon}):l.id===4&&i.user.is_live===0?e.jsx(x,{onClick:()=>handleLive(i.user.id),children:l.icon}):l.icon},N))})})]},i.id)})})]})}),e.jsx(r,{p:2,display:"flex",justifyContent:"center",children:e.jsx(z,{count:Math.ceil(d.length/h),page:m,className:"table_pagination",onChange:y,sx:{mt:3}})})]})}):e.jsx(M,{message:"No Company Available"})]})}export{t0 as default};
