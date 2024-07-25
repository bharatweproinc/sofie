import{W as Z,r,j as e}from"./app-Cs_eN147.js";import"./index-CIFLHD9d.js";import{C as _}from"./Constants-A8-LtWFY.js";/* empty css              */import{N as z}from"./NoDataFound-CQLVKQjY.js";import{L as D}from"./index-B0roWpL-.js";import{n as u}from"./Notifier-D7qezLa4.js";import{Q as R}from"./react-toastify.esm-ClnOOq3B.js";/* empty css                      */import{D as H}from"./index-DfjmzCCj.js";import{G as A}from"./Grid-BWJaPzDY.js";import{P as I}from"./Paper-DkOxz2hy.js";import{T as O,a as F,b as G,c as C,d as n,e as U}from"./TableRow-BT7jEUET.js";import{B as t}from"./Box-CpE8z8Ia.js";import{T as a}from"./Typography-CrtmTfc4.js";import{C as v}from"./Chip-D6SL7i91.js";import{P as Q}from"./Pagination-DYVhC2dX.js";import"./index-BZ3hNmTI.js";import"./createSvgIcon-Crw0qiL3.js";import"./ButtonBase-Citz1J_0.js";import"./Constants-C9FacJb4.js";import"./useTheme-E7YrQWTk.js";import"./DeleteIcon-C0S4UW9w.js";import"./DialogTitle-CBtU27_M.js";function je({list:d=[]}){const{post:w}=Z(),[y,h]=r.useState(!1),[E,L]=r.useState(null),[p,b]=r.useState(d.company),[o,N]=r.useState({key:null,direction:"asc"}),m=8,[g,S]=r.useState(1),k=[...p].sort((s,i)=>{if(o.key!==null){const l=o.key;if(s[l]<i[l])return o.direction==="asc"?-1:1;if(s[l]>i[l])return o.direction==="asc"?1:-1}return 0}),f=g*m,B=f-m,M=k.slice(B,f),P=(s,i)=>{S(i)},x=s=>{let i="asc";o.key===s&&o.direction==="asc"&&(i="desc"),N({key:s,direction:i})};r.useEffect(()=>{b(d.company)},[d.company]);const T=()=>{w(route("admin.deleteCompanyUser",E),{onSuccess:s=>{u.success("Company Data has been deleted successfully"),console.log(s,"successs"),h(!1)},onError:s=>{u.error("Error in Company Delete"),console.log(s,"error"),h(!1)}})};return e.jsxs(D,{auth:d.user,children:[e.jsx(R,{style:{marginTop:"65px"}}),p.length>0?e.jsx(A,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},className:"companies_main",children:e.jsxs(I,{children:[e.jsx(O,{sx:{width:"100%"},children:e.jsxs(F,{sx:{minWidth:650,maxWidth:"100%"},"aria-label":"simple table",children:[e.jsx(G,{children:e.jsxs(C,{children:[e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Name"}),e.jsxs("div",{className:"grid",onClick:()=>x("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Mobile Number"}),e.jsxs("div",{className:"grid",onClick:()=>x("mobile_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"left",children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Person"}),e.jsxs("div",{className:"grid",onClick:()=>x("name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsxs(t,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>x("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{children:e.jsx(t,{className:"flex gap-3",children:e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Status"})})}),e.jsx(n,{children:e.jsx(t,{className:"flex gap-3 pl-10",children:e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Action"})})})]})}),e.jsx(U,{children:M.map(s=>{var i,l,j;return e.jsxs(C,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(n,{align:"left",component:"th",scope:"row",children:[s==null?void 0:s.company_name,e.jsx(v,{label:"new",color:"primary",variant:"outlined",sx:{ml:2,p:0}})]}),e.jsx(n,{align:"left",children:(i=s==null?void 0:s.user)==null?void 0:i.phone}),e.jsx(n,{align:"left",children:(l=s==null?void 0:s.user)==null?void 0:l.name}),e.jsx(n,{align:"left",children:(j=s==null?void 0:s.user)==null?void 0:j.email}),e.jsxs(n,{align:"left",children:[console.log("row",s),e.jsx(v,{label:s.user.status===1?"Active":"Inactive",color:s.user.status===1?"success":"error"})]}),e.jsx(n,{align:"left",children:e.jsx(t,{sx:{gap:"10px"},className:"flex",children:_.icons.map((c,W)=>e.jsx("span",{children:c.id===1?e.jsx("a",{target:"_blank",href:route("admin.company.companydetail",s.user.id),children:c.icon}):c.id===2?e.jsx("a",{target:"_blank",href:route("admin.company.get",s.id),children:c.icon}):e.jsx("span",{style:{cursor:"pointer"},onClick:()=>{h(!0),L(s.id)},children:c.icon})},W))})})]},s.id)})})]})}),e.jsx(t,{p:2,display:"flex",justifyContent:"center",children:e.jsx(Q,{count:Math.ceil(p.length/m),page:g,className:"table_pagination",onChange:P,sx:{mt:3}})})]})}):e.jsx(z,{message:"No Company Available"}),e.jsx(H,{open:y,setOpen:h,handleDelete:T})]})}export{je as default};