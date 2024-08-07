import{W as P,r as o,j as e}from"./app-CLNoeIf4.js";import{L as W}from"./index-Cjz1sXza.js";import _ from"./Constants-CScWI72c.js";/* empty css              */import{N as Z}from"./NoDataFound-DGSkiumP.js";import{D as z}from"./index-l5t4qRXa.js";import{Q as D,n as g}from"./Notifier-CibCfFRd.js";/* empty css                      */import{G as j}from"./Grid-CAQnG8y0.js";import{P as R}from"./Paper-DZ6Iq4W_.js";import{T as H,a as A,b as F,c as u,d as i,e as I}from"./TableRow-Dis2vuuv.js";import{B as n}from"./Box-pioLHn4W.js";import{T as a}from"./Typography-Cbf3Jowo.js";import{C as w}from"./Chip-C4FrTMIE.js";import{P as O}from"./Pagination-B_CB-nrP.js";import"./Button-CK_kYUcJ.js";import"./ButtonBase-CItdG5xs.js";import"./useIsFocusVisible-B8RzluFD.js";import"./createSvgIcon-CkUardzR.js";import"./Constants-e1feQntW.js";import"./resolveComponentProps-BzExm8fi.js";import"./DeleteIcon-BA6o75-o.js";import"./EditIcon-B-flmUMu.js";import"./JoiValidator-e4cEmSLX.js";import"./DialogContentText-WW5pfDG2.js";import"./DialogTitle-BUUnwd0I.js";function ge({list:c=[]}){const{post:C}=P(),[v,d]=o.useState(!1),[E,L]=o.useState(null),[h,b]=o.useState(c.mentor);console.log("mentorList",h);const[r,y]=o.useState({key:null,direction:"asc"}),m=10,[p,N]=o.useState(1),M=[...h].sort((s,t)=>{if(r.key!==null){const l=r.key;if(s[l]<t[l])return r.direction==="asc"?-1:1;if(s[l]>t[l])return r.direction==="asc"?1:-1}return 0}),f=p*m,S=f-m,k=M.slice(S,f),B=(s,t)=>{N(t)},x=s=>{let t="asc";r.key===s&&r.direction==="asc"&&(t="desc"),y({key:s,direction:t})};o.useEffect(()=>{b(c.mentor)},[c.mentor]);const T=()=>{C(route("admin.deleteMentorUser",E),{onSuccess:s=>{g.success("Mentor Data successfully sent for deletion"),console.log(s,"successs"),d(!1)},onError:s=>{g.error("Error in Mentor Delete"),console.log(s,"error"),d(!1)}})};return e.jsxs(W,{auth:c.user,children:[e.jsx(D,{style:{marginTop:"65px"}}),h.length>0?e.jsx(j,{container:!0,className:"mentor_list",children:e.jsx(j,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},children:e.jsxs(R,{children:[e.jsx(H,{sx:{width:"100%"},children:e.jsxs(A,{sx:{minWidth:650,maxWidth:"100%"},"aria-label":"simple table",children:[e.jsx(F,{children:e.jsxs(u,{children:[e.jsx(i,{children:e.jsxs(n,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Contact Name"}),e.jsxs("div",{className:"grid",onClick:()=>x("company_name"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{children:e.jsxs(n,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Mobile Number"}),e.jsxs("div",{className:"grid",onClick:()=>x("mobile_number"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{children:e.jsxs(n,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Email"}),e.jsxs("div",{className:"grid",onClick:()=>x("email"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{children:e.jsxs(n,{className:"flex gap-3",children:[e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Functional"}),e.jsxs("div",{className:"grid",onClick:()=>x("functional_area"),style:{cursor:"pointer"},children:[e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z",fill:"#E4E5E7"})}),e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z",fill:"#E4E5E7"})})]})]})}),e.jsx(i,{children:e.jsx(n,{className:"flex gap-3",children:e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Status"})})}),e.jsx(i,{children:e.jsx(n,{className:"flex gap-3 pl-10",children:e.jsx(a,{fontSize:"14px",color:"#212121",fontWeight:"600",children:"Action"})})})]})}),e.jsx(I,{children:k.map(s=>e.jsxs(u,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(i,{align:"left",component:"th",scope:"row",children:[s.user.name,s.user.is_accepted===null&&e.jsx(w,{label:"new",color:"primary",variant:"outlined",sx:{ml:2,p:0}})]}),e.jsx(i,{align:"left",children:s.user.phone}),e.jsxs(i,{align:"left",children:[s.user.email," "]}),e.jsx(i,{align:"left",children:s.functional_area}),e.jsx(i,{align:"left",children:e.jsx(w,{label:s.user.status===1?"Active":"Inactive",color:s.user.status===1?"success":"error"})}),e.jsx(i,{align:"left",children:e.jsx(n,{sx:{gap:"10px"},className:"flex",children:_.icons.map((t,l)=>e.jsx("span",{children:t.id===1?e.jsx("a",{href:route("admin.mentor.mentordetail",s.user.id),target:"_blank",children:t.icon}):t.id===2?e.jsx("a",{href:route("admin.mentor.detail",s.id),target:"_blank",children:t.icon}):e.jsx("span",{style:{cursor:"pointer"},onClick:()=>{d(!0),L(s.id)},children:t.icon})},l))})})]},s.id))})]})}),e.jsx(n,{p:2,display:"flex",justifyContent:"center",children:e.jsx(O,{count:Math.ceil(h.length/m),page:p,className:"table_pagination",onChange:B,sx:{mt:3}})})]})})}):e.jsx(Z,{message:"No Mentor available"}),e.jsx(z,{open:v,setOpen:d,handleDelete:T})]})}export{ge as default};
