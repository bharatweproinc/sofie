import{W as T,r as n,j as e,a as b}from"./app-Xukm92kl.js";import{L as y}from"./index-DgVASW-9.js";import{N as D}from"./NoDataFound-Dvm5yVrJ.js";import{C as N}from"./Constants-Dp3ixx2K.js";/* empty css              */import{D as C}from"./index-DKn0wa5y.js";import{n as d}from"./Notifier-DGwsiAyb.js";import{Q as B}from"./react-toastify.esm-CUJZuabw.js";/* empty css                      */import{B as r}from"./Box-DsURuLT5.js";import{B as E}from"./createSvgIcon-CDAGOBZC.js";import{G as c}from"./Grid-CqtLxnGx.js";import{P as S}from"./Paper-DA72ayhA.js";import{T as L,a as W,b as k,c as p,d as a,e as A}from"./TableRow-CU1yfh1S.js";import{T as I}from"./Typography-DQ-Dh4RN.js";import"./ButtonBase-DI9rgr2e.js";import"./useTheme-BXEL2TJi.js";import"./index-CCTTXL3d.js";import"./index-BZ3hNmTI.js";import"./DeleteIcon-CjVlWUpo.js";import"./DialogTitle-FyXc3Hzx.js";const _=["Testimonial Name","Description","Action"];function se({list:i}){const{post:x}=T(),[h,o]=n.useState(!1),[l,f]=n.useState(null),[m,u]=n.useState(i.testimonial);n.useEffect(()=>{u(i.testimonial)},[i.testimonial]);const j=()=>{console.log("userId",l),x(route("admin.testimonial.deleteTestimonial",l),{onSuccess:s=>{d.success("Testimonial Data has been deleted successfully"),console.log(s,"successs"),o(!1)},onError:s=>{d.error("Error in Testimonial Delete"),console.log(s,"error"),o(!1)}})};return e.jsxs(y,{auth:i.user,children:[e.jsx(B,{style:{marginTop:"65px"}}),e.jsx(r,{pr:8,pt:3,sx:{display:"flex",justifyContent:"flex-end"},className:"custom_btn",children:e.jsx(E,{component:b,href:route("admin.testimonials"),p:4,variant:"contained",children:"Add"})}),m.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},children:e.jsx(S,{children:e.jsx(L,{sx:{width:"100%"},children:e.jsxs(W,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(k,{children:e.jsx(p,{children:_.map(s=>e.jsx(a,{children:e.jsx(r,{className:"flex gap-3",children:e.jsx(I,{fontSize:"14px",color:"#212121",fontWeight:"600",children:s})})}))})}),e.jsx(A,{children:m.map(s=>e.jsxs(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{align:"left",component:"th",scope:"row",children:s.name}),e.jsx(a,{align:"left",children:s.description}),e.jsx(a,{align:"left",children:e.jsx(r,{sx:{gap:"10px"},className:"flex",children:N.icons.map((t,g)=>e.jsx("span",{children:t.id===1?e.jsx("a",{target:"_blank",href:route("admin.testimonial.get",s.id),children:t.icon}):t.id===2?e.jsx("a",{target:"_blank",href:route("admin.testimonial.detail",s.id),children:t.icon}):e.jsx("span",{style:{cursor:"pointer"},onClick:()=>{o(!0),f(s.id)},children:t.icon})},g))})})]},s.id))})]})})})})}):e.jsx(D,{message:"No Testimonial available"}),e.jsx(C,{open:h,setOpen:o,handleDelete:j})]})}export{se as default};
