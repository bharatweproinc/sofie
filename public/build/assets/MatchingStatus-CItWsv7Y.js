import{r as w,j as n}from"./app-CmR6fL3e.js";import{d as D}from"./ArrowBack-CJPtqBou.js";import{G as B}from"./Grid-BvrZz3IP.js";import{P as N}from"./Paper-Cfkr0OwE.js";import{B as j}from"./Button-MfZbRaay.js";import{B as o}from"./Box-DEbHx_he.js";import{T as r}from"./Typography-BfF8vS_5.js";import{T as S,a as T,b,c as y,d as t,e as M}from"./TableRow-BfjSsNqd.js";import{P as z}from"./Pagination-CuAhb6ug.js";import"./styled-BWHJBEGv.js";import"./createSvgIcon-DK4ciudq.js";import"./useIsFocusVisible-C6juXUpB.js";import"./useTheme-BcVuZ8J4.js";import"./ButtonBase-CmtdNuZP.js";const L=[a("Company 1","Anam","Donny","Lina Rahman"),a("Company 2","Anam","Donny","Lina Rahman"),a("Company 4","lana","Rahman","Lina Rahman"),a("Company 5","Nita","nitakamil","Lina Rahman"),a("Company 6","Anam","Donny","Lina Rahman"),a("Company 7","Anam","Donny","Lina Rahman"),a("Company 1","Niken","Ang","Lina Rahman"),a("Company 2","Anam","Donny","Lina Rahman"),a("Company 4","Anam","Donny","Lina Rahman"),a("Company 5","donny","Niken","Lina Rahman"),a("Company 6","Kmail","nitakamil","Lina Rahman"),a("Company 1","Test 1","Test 2","Lina Rahman"),a("Company 2","Anam","Donny","Lina Rahman"),a("Company 4","Anam","Donny","Lina Rahman"),a("Company 5","Anam","Donny","Lina Rahman"),a("Company 6","Anam","Donny","Lina Rahman"),a("Company 7","Anam","Donny","Lina Rahman"),a("Company 1","Anam","Donny","Lina Rahman"),a("Company 2","Anam","Donny","Lina Rahman"),a("Company 4","Anam","Donny","Lina Rahman"),a("Company 5","Anam","Donny","Lina Rahman"),a("Company 6","Anam","Donny","Lina Rahman")];function a(c,x,d,s){return{company_name:c,Area1:x,Area2:d,Area3:s}}const U=({handleViewAll:c,section:x,setViewSection:d})=>{const[s,u]=w.useState({key:null,direction:"asc"}),p=8,[g,v]=w.useState(1),l=x==="matching_status",R=()=>{d("")},f=[...L].sort((i,e)=>{if(s.key!==null){const m=s.key;if(i[m]<e[m])return s.direction==="asc"?-1:1;if(i[m]>e[m])return s.direction==="asc"?1:-1}return 0}),C=g*p,E=C-p,A=l?f.slice(E,C):f.slice(0,7),k=(i,e)=>{v(e)},h=i=>{let e="asc";s.key===i&&s.direction==="asc"&&(e="desc"),u({key:i,direction:e})};return n.jsx(n.Fragment,{children:n.jsx(B,{item:!0,xs:12,md:l?12:7,sx:{width:"100%",paddingLeft:"0px"},className:"matching_status_main",children:n.jsxs(N,{sx:{height:"100%"},children:[l&&n.jsxs(j,{onClick:()=>R(),sx:{color:"black",fontSize:"14px",textTransform:"capitalize"},children:[n.jsx(D,{sx:{marginRight:"5px",fontSize:"18px"}}),"Back"]}),n.jsxs(o,{p:2,className:"flex justify-between",children:[n.jsx(r,{variant:"h5",fontSize:"18px",fontWeight:"700",color:"#090D28",alignSelf:"center",children:"Matching Status"}),!l&&n.jsx(j,{onClick:()=>c("matching_status"),sx:{textTransform:"capitalize"},children:"View all"})]}),n.jsx(S,{children:n.jsxs(T,{sx:{minWidth:650},"aria-label":"simple table",children:[n.jsx(b,{children:n.jsxs(y,{sx:{backgroundColor:"#F8F9FB"},children:[n.jsx(t,{children:n.jsxs(o,{className:"flex gap-3",children:[n.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Company Name"}),n.jsxs("div",{className:"grid",onClick:()=>h("company_name"),style:{cursor:"pointer"},children:[n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),n.jsx(t,{align:"left",children:n.jsxs(o,{className:"flex gap-3",children:[n.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Area 1"}),n.jsxs("div",{className:"grid",onClick:()=>h("Area1"),style:{cursor:"pointer"},children:[n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),n.jsx(t,{align:"left",children:n.jsxs(o,{className:"flex gap-3",children:[n.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Area 2"}),n.jsxs("div",{className:"grid",onClick:()=>h("Area2"),style:{cursor:"pointer"},children:[n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),n.jsx(t,{align:"left",children:n.jsxs(o,{className:"flex gap-3",children:[n.jsx(r,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Area 3"}),n.jsxs("div",{className:"grid",onClick:()=>h("Area3"),style:{cursor:"pointer"},children:[n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),n.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})})]})}),n.jsx(M,{children:A.map((i,e)=>n.jsxs(y,{children:[n.jsx(t,{component:"th",scope:"row",children:i.company_name}),n.jsx(t,{align:"left",children:i.Area1}),n.jsx(t,{align:"left",children:i.Area2}),n.jsx(t,{align:"left",children:i.Area3})]},e))})]})}),l&&n.jsx(o,{p:2,display:"flex",justifyContent:"center",children:n.jsx(z,{className:"table_pagination",count:Math.ceil(L.length/p),page:g,onChange:k,sx:{mt:3,color:"#117B9E"}})})]})})})};export{U as default};
