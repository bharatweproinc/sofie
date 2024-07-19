import{r as w,j as e,a as C}from"./app-CmR6fL3e.js";import P from"./Constant-DUw8FctR.js";import{d as M}from"./ArrowBack-CJPtqBou.js";import{N as Z}from"./NoDataFound-C0IiOBaI.js";import{G as W}from"./Grid-BvrZz3IP.js";import{P as _}from"./Paper-Cfkr0OwE.js";import{B as u}from"./Button-MfZbRaay.js";import{B as l}from"./Box-DEbHx_he.js";import{T as o}from"./Typography-BfF8vS_5.js";import{T as F,a as H,b as R,c as v,d as i,e as D}from"./TableRow-BfjSsNqd.js";import{P as G}from"./Pagination-CuAhb6ug.js";import"./PeopleAltOutlined-D7ANh5LF.js";import"./styled-BWHJBEGv.js";import"./createSvgIcon-DK4ciudq.js";import"./useIsFocusVisible-C6juXUpB.js";import"./DeleteIcon-By_Z5zCE.js";import"./useTheme-BcVuZ8J4.js";import"./ButtonBase-CmtdNuZP.js";const ae=({handleViewAll:E,section:y,setViewSection:L,list:N=[]})=>{let d=N.companies.list.company;const[a,B]=w.useState({key:null,direction:"asc"}),p=8,[m,b]=w.useState(1),c=y==="companies",k=()=>{L("")},g=[...d].sort((s,n)=>{if(a.key!==null){const t=a.key;if(s[t]<n[t])return a.direction==="asc"?-1:1;if(s[t]>n[t])return a.direction==="asc"?1:-1}return 0}),f=m*p,S=f-p,h=c?g.slice(S,f):g.slice(0,7),T=(s,n)=>{b(n)},x=s=>{let n="asc";a.key===s&&a.direction==="asc"&&(n="desc"),B({key:s,direction:n})};return e.jsx(W,{item:!0,xs:12,md:12,sx:{width:"100%"},className:"companies_main",children:e.jsxs(_,{children:[c&&e.jsxs(u,{onClick:k,sx:{color:"black",fontSize:"14px",textTransform:"capitalize"},children:[e.jsx(M,{sx:{marginRight:"5px",fontSize:"18px"}}),"Back"]}),e.jsxs(l,{p:2,className:"flex justify-between",children:[e.jsx(o,{alignSelf:"center",variant:"h5",fontSize:"18px",fontWeight:"700",color:"#090D28",children:"Companies"}),!c&&e.jsx(u,{onClick:()=>E("companies"),sx:{textTransform:"capitalize"},children:"View all"})]}),d.length>0?e.jsxs(l,{children:[e.jsx(F,{children:e.jsxs(H,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(R,{children:e.jsxs(v,{sx:{backgroundColor:"#F8F9FB"},children:[e.jsx(i,{children:e.jsxs(l,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Company Name"}),e.jsxs("div",{className:"grid",onClick:()=>x("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(l,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"UEN Number"}),e.jsxs("div",{className:"grid",onClick:()=>x("uen_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(l,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Person"}),e.jsxs("div",{className:"grid",onClick:()=>x("name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(l,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>x("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"center",children:e.jsx(l,{className:"flex gap-3 pl-10",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Actions"})})})]})}),e.jsx(D,{children:(h==null?void 0:h.length)&&h.map((s,n)=>{var t,j;return e.jsxs(v,{children:[e.jsx(i,{component:"th",scope:"row",children:s.company_name}),e.jsx(i,{align:"left",children:s.company_uen}),e.jsx(i,{align:"left",children:(t=s==null?void 0:s.user)==null?void 0:t.name}),e.jsx(i,{align:"left",children:(j=s==null?void 0:s.user)==null?void 0:j.email}),e.jsx(i,{align:"left",children:e.jsx(l,{sx:{gap:"10px"},className:"flex",children:P.icons.map((r,z)=>e.jsx("span",{children:r.id===1?e.jsx(C,{href:route("admin.company.companydetail",s.user.id),children:r.icon}):r.id===2?e.jsx(C,{href:route("admin.company.get",s.id),children:r.icon}):r.icon},z))})})]},n)})})]})}),c&&e.jsx(l,{p:2,display:"flex",justifyContent:"center",children:e.jsx(G,{count:Math.ceil(d.length/p),page:m,className:"table_pagination",onChange:T,sx:{mt:3}})})]}):e.jsx(Z,{message:"No company available"})]})})};export{ae as default};
