import{W as b,r as n,j as e,a as y}from"./app-n5Cak6Mz.js";import{L as D}from"./index-D6crXw8k.js";import{N}from"./NoDataFound-jW_ahMqq.js";import{C}from"./Constants-UiniEdbq.js";/* empty css              */import{D as B}from"./index-BnLDLzWI.js";import{Q as E,n as d}from"./Notifier-CVon7zWI.js";/* empty css                      */import{T as c}from"./Typography-CIZjMxSA.js";import{B as r}from"./Box-C1Pw5GI2.js";import{B as S}from"./Button-Ddkevyz9.js";import{G as p}from"./Grid-CG2Lbxd4.js";import{P as L}from"./Paper-CNSkFKNF.js";import{T as W,a as k,b as A,c as x,d as a,e as I}from"./TableRow-Nf1-mWSA.js";import"./createSvgIcon-Df9VJmT4.js";import"./useIsFocusVisible-ClfwHLfI.js";import"./resolveComponentProps-e5vO-KJw.js";import"./ButtonBase-B4_W3j-j.js";import"./DeleteIcon-Crmgbm0g.js";import"./EditIcon-VqNEmpFp.js";import"./DialogContent-CFCAJpK9.js";import"./DialogTitle-Bqqm_jAD.js";import"./DialogContentText-CA2LCXxF.js";const _=["Testimonial Name","Description","Action"];function ie({list:i}){const{post:h}=b(),[f,o]=n.useState(!1),[l,u]=n.useState(null),[m,j]=n.useState(i.testimonial);n.useEffect(()=>{j(i.testimonial)},[i.testimonial]);const g=()=>{console.log("userId",l),h(route("admin.testimonial.deleteTestimonial",l),{onSuccess:s=>{d.success("Testimonial Data has been deleted successfully"),console.log(s,"successs"),o(!1)},onError:s=>{d.error("Error in Testimonial Delete"),console.log(s,"error"),o(!1)}})};return e.jsxs(D,{auth:i.user,children:[e.jsx(E,{style:{marginTop:"65px"}}),e.jsx(c,{sx:{height:{xs:"95px",sm:"0px"}}}),e.jsx(r,{pr:8,pt:3,sx:{display:"flex",justifyContent:"flex-end"},className:"custom_btn",children:e.jsx(S,{component:y,href:route("admin.testimonials"),variant:"contained",children:"Add"})}),m.length>0?e.jsx(p,{container:!0,children:e.jsx(p,{item:!0,xs:12,md:12,sx:{width:"100%",padding:"32px"},children:e.jsx(L,{children:e.jsx(W,{sx:{width:"100%"},children:e.jsxs(k,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(A,{children:e.jsx(x,{children:_.map(s=>e.jsx(a,{children:e.jsx(r,{className:"flex gap-3",children:e.jsx(c,{fontSize:"14px",color:"#212121",fontWeight:"600",children:s})})}))})}),e.jsx(I,{children:m.map(s=>e.jsxs(x,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{align:"left",component:"th",scope:"row",children:s.name}),e.jsx(a,{align:"left",children:s.description}),e.jsx(a,{align:"left",children:e.jsx(r,{sx:{gap:"10px"},className:"flex",children:C.icons.map((t,T)=>e.jsx("span",{children:t.id===1?e.jsx("a",{target:"_blank",href:route("admin.testimonial.get",s.id),children:t.icon}):t.id===2?e.jsx("a",{target:"_blank",href:route("admin.testimonial.detail",s.id),children:t.icon}):e.jsx("span",{style:{cursor:"pointer"},onClick:()=>{o(!0),u(s.id)},children:t.icon})},T))})})]},s.id))})]})})})})}):e.jsx(N,{message:"No Testimonial available"}),e.jsx(B,{open:f,setOpen:o,handleDelete:g})]})}export{ie as default};