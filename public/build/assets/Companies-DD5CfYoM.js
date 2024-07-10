import{r as g,j as e,a as k}from"./app-BLj_NEnq.js";import S from"./Constant-DELpJ-4e.js";import{d as T}from"./ArrowBack-B2eArMZe.js";import{N as z}from"./NoDataFound-C1khQGIA.js";import{G as P}from"./Grid-CqCrgGU-.js";import{P as M}from"./Paper-eqXmDh3i.js";import{B as f}from"./Button-TNK2Kyaw.js";import{B as t}from"./Box-dATE4Y09.js";import{T as r}from"./Typography-CB9PKzu_.js";import{T as Z,a as R,b as W,c as j,d as i,e as _,P as F}from"./TableRow-DQIu5WeY.js";import"./PeopleAltOutlined-CBrdguGN.js";import"./styled-2C0y4Fjx.js";import"./createSvgIcon-B3Rfit5C.js";import"./useIsFocusVisible-Bpp8vtV8.js";import"./DeleteIcon-Cl5HXFSz.js";import"./useTheme-Ci1OhliR.js";import"./ButtonBase-BaRMij0W.js";const i0=({handleViewAll:w,section:C,setViewSection:u,company:a=[]})=>{console.log("::company",a);const[o,v]=g.useState({key:null,direction:"asc"}),h=8,[d,E]=g.useState(1),c=C==="companies",L=()=>{u("")},p=[...a].sort((s,n)=>{if(o.key!==null){const l=o.key;if(s[l]<n[l])return o.direction==="asc"?-1:1;if(s[l]>n[l])return o.direction==="asc"?1:-1}return 0}),m=d*h,N=m-h,b=c?p.slice(N,m):p.slice(0,7),y=(s,n)=>{E(n)},x=s=>{let n="asc";o.key===s&&o.direction==="asc"&&(n="desc"),v({key:s,direction:n})};return e.jsx(P,{item:!0,xs:12,md:12,sx:{width:"100%"},className:"companies_main",children:e.jsxs(M,{children:[c&&e.jsxs(f,{onClick:L,sx:{color:"black",fontSize:"14px",textTransform:"capitalize"},children:[e.jsx(T,{sx:{marginRight:"5px",fontSize:"18px"}}),"Back"]}),e.jsxs(t,{p:2,className:"flex justify-between",children:[e.jsx(r,{alignSelf:"center",variant:"h5",fontSize:"18px",fontWeight:"700",color:"#090D28",children:"Companies"}),!c&&e.jsx(f,{onClick:()=>w("companies"),sx:{textTransform:"capitalize"},children:"View all"})]}),a.length>0?e.jsxs(t,{children:[e.jsx(Z,{children:e.jsxs(R,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(W,{children:e.jsxs(j,{sx:{backgroundColor:"#F8F9FB"},children:[e.jsx(i,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Company Name"}),e.jsxs("div",{className:"grid",onClick:()=>x("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"UEN Number"}),e.jsxs("div",{className:"grid",onClick:()=>x("uen_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Person"}),e.jsxs("div",{className:"grid",onClick:()=>x("name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>x("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{align:"left",children:e.jsx(t,{className:"flex gap-3",children:e.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Actions"})})})]})}),e.jsx(_,{children:b.map((s,n)=>e.jsxs(j,{children:[e.jsx(i,{component:"th",scope:"row",children:s.company_name}),e.jsx(i,{align:"left",children:s.uen_number}),e.jsx(i,{align:"left",children:s.name}),e.jsx(i,{align:"left",children:s.email}),e.jsx(i,{align:"left",children:e.jsx(t,{sx:{gap:"10px"},className:"flex",children:S.icons.map((l,B)=>e.jsx("span",{children:l.id===1?e.jsx(k,{href:l.link,children:l.icon}):l.icon},B))})})]},n))})]})}),c&&e.jsx(t,{p:2,display:"flex",justifyContent:"center",children:e.jsx(F,{count:Math.ceil(a.length/h),page:d,className:"table_pagination",onChange:y,sx:{mt:3}})})]}):e.jsx(z,{message:"No company available"})]})})};export{i0 as default};