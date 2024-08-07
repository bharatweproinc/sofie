import{W as H,r,j as e}from"./app-CLNoeIf4.js";import{C as R}from"./Constants-e1feQntW.js";/* empty css              */import{d as A}from"./ArrowBack-Cddbr_0d.js";import{N as I}from"./NoDataFound-DGSkiumP.js";import{D as O}from"./index-l5t4qRXa.js";import{Q as G,n as y}from"./Notifier-CibCfFRd.js";/* empty css                      */import{G as U}from"./Grid-CAQnG8y0.js";import{P as V}from"./Paper-DZ6Iq4W_.js";import{B as v}from"./Button-CK_kYUcJ.js";import{B as i}from"./Box-pioLHn4W.js";import{T as o}from"./Typography-Cbf3Jowo.js";import{T as Q,a as q,b as J,c as E,d as n,e as K}from"./TableRow-Dis2vuuv.js";import{C as X}from"./Chip-C4FrTMIE.js";import{P as Y}from"./Pagination-B_CB-nrP.js";import"./createSvgIcon-CkUardzR.js";import"./useIsFocusVisible-B8RzluFD.js";import"./resolveComponentProps-BzExm8fi.js";import"./ButtonBase-CItdG5xs.js";import"./DeleteIcon-BA6o75-o.js";import"./EditIcon-B-flmUMu.js";import"./DialogContentText-WW5pfDG2.js";import"./DialogTitle-BUUnwd0I.js";const Ee=({handleViewAll:L,section:N,setViewSection:S,list:m=[]})=>{const{post:b}=H(),[k,x]=r.useState(!1),[B,T]=r.useState(null),[f,z]=r.useState(m.companies.list.company),[a,P]=r.useState({key:null,direction:"asc"}),g=8,[j,M]=r.useState(1),h=N==="companies",W=()=>{S("")},u=[...f].sort((s,t)=>{if(a.key!==null){const l=a.key;if(s[l]<t[l])return a.direction==="asc"?-1:1;if(s[l]>t[l])return a.direction==="asc"?1:-1}return 0}),C=j*g,_=C-g,d=h?u.slice(_,C):u.slice(0,7),D=(s,t)=>{M(t)},p=s=>{let t="asc";a.key===s&&a.direction==="asc"&&(t="desc"),P({key:s,direction:t})};r.useEffect(()=>{z(m.companies.list.company)},[m.companies.list.company]);const Z=()=>{b(route("admin.deleteDashCompany",B),{onSuccess:s=>{y.success("Company Data successfully sent for deletion"),console.log(s,"successs"),x(!1)},onError:s=>{y.error("Error in Company Delete"),console.log(s,"error"),x(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(G,{style:{marginTop:"65px"}}),e.jsxs(U,{item:!0,xs:12,md:12,sx:{width:"100%"},className:"companies_main",children:[e.jsxs(V,{children:[h&&e.jsxs(v,{onClick:W,sx:{color:"black",fontSize:"14px",textTransform:"capitalize"},children:[e.jsx(A,{sx:{marginRight:"5px",fontSize:"18px"}}),"Back"]}),e.jsxs(i,{p:2,className:"flex justify-between",children:[e.jsx(o,{alignSelf:"center",variant:"h5",fontSize:"18px",fontWeight:"700",color:"#090D28",children:"Companies"}),!h&&e.jsx(v,{onClick:()=>L("companies"),sx:{textTransform:"capitalize"},children:"View all"})]}),f.length>0?e.jsxs(i,{children:[e.jsx(Q,{children:e.jsxs(q,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(J,{children:e.jsxs(E,{sx:{backgroundColor:"#F8F9FB"},children:[e.jsx(n,{children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Company Name"}),e.jsxs("div",{className:"grid",onClick:()=>p("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"left",children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"UEN Number"}),e.jsxs("div",{className:"grid",onClick:()=>p("company_uen"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"left",children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Person"}),e.jsxs("div",{className:"grid",onClick:()=>p("name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"left",children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>p("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(n,{align:"center",children:e.jsx(i,{className:"flex gap-3",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Status"})})}),e.jsx(n,{align:"center",children:e.jsx(i,{className:"flex gap-3 pl-10",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Actions"})})})]})}),e.jsx(K,{children:(d==null?void 0:d.length)&&d.map((s,t)=>{var l,w;return e.jsxs(E,{children:[e.jsx(n,{component:"th",scope:"row",children:s.company_name}),e.jsx(n,{align:"left",children:s.company_uen}),e.jsx(n,{align:"left",children:(l=s==null?void 0:s.user)==null?void 0:l.name}),e.jsx(n,{align:"left",children:(w=s==null?void 0:s.user)==null?void 0:w.email}),e.jsx(n,{align:"left",children:e.jsx(X,{label:s.user.status===1?"Active":"Inactive",color:s.user.status===1?"success":"error"})}),e.jsx(n,{align:"left",children:e.jsx(i,{sx:{gap:"10px"},className:"flex",children:R.icons.map((c,F)=>e.jsx("span",{children:c.id===1?e.jsx("a",{target:"_blank",href:route("admin.company.get",s.id),children:c.icon}):c.id===2?e.jsx("a",{target:"_blank",href:route("admin.company.companydetail",s.user.id),children:c.icon}):e.jsx("span",{style:{cursor:"pointer"},onClick:()=>{x(!0),T(s.id)},children:c.icon})},F))})})]},t)})})]})}),h&&e.jsx(i,{p:2,display:"flex",justifyContent:"center",children:e.jsx(Y,{count:Math.ceil(f.length/g),page:j,className:"table_pagination",onChange:D,sx:{mt:3}})})]}):e.jsx(I,{message:"No company available"})]}),e.jsx(O,{open:k,setOpen:x,handleDelete:Z})]})]})};export{Ee as default};
