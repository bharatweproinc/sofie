import{r as j,j as e}from"./app-n5Cak6Mz.js";import{L as f}from"./index-D6crXw8k.js";import{N as g}from"./NoDataFound-jW_ahMqq.js";/* empty css              */import{T as o}from"./Typography-CIZjMxSA.js";import{B as s}from"./Box-C1Pw5GI2.js";import{G as c}from"./Grid-CG2Lbxd4.js";import{P as u}from"./Paper-CNSkFKNF.js";import{T as P,a as M,b,c as m,d as r,e as y}from"./TableRow-Nf1-mWSA.js";import{A as T}from"./Avatar-Cz9R5OxY.js";import{P as E}from"./Pagination-C_K89Ewo.js";import"./Button-Ddkevyz9.js";import"./ButtonBase-B4_W3j-j.js";import"./useIsFocusVisible-ClfwHLfI.js";import"./createSvgIcon-Df9VJmT4.js";import"./Constants-UiniEdbq.js";import"./resolveComponentProps-e5vO-KJw.js";import"./DeleteIcon-Crmgbm0g.js";import"./EditIcon-VqNEmpFp.js";import"./useSlot-D87rZ9Dz.js";const N=["SME","SME Name","SME - UEN","Mentor ID","Mentor Name","Matched Area"];function K({list:a=[]}){const[i,d]=j.useState(1),l=i*8,h=l-8,x=a.matched.slice(h,l),p=(t,n)=>{d(n)};return e.jsxs(f,{auth:a.user,children:[e.jsx(o,{sx:{height:{xs:"65px",sm:"0px"}}}),e.jsxs(s,{p:3,children:[e.jsx(s,{p:3,children:e.jsx(o,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Matched SMEs and Mentors"})}),e.jsx(s,{children:a.matched.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsxs(u,{children:[e.jsx(P,{sx:{width:"100%"},children:e.jsxs(M,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(b,{children:e.jsx(m,{children:N.map((t,n)=>e.jsx(r,{children:e.jsx(s,{className:"flex gap-3",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:t})})},n))})}),e.jsx(y,{children:x.map(t=>e.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{children:e.jsx(T,{alt:"company_photo",src:t.sme.profile_photo})}),e.jsx(r,{align:"left",component:"th",scope:"row",children:t.sme.company_name}),e.jsx(r,{align:"left",children:t.sme.company_uen}),e.jsx(r,{align:"left",children:t.mentor_id}),e.jsx(r,{align:"left",children:t.mentor.name}),e.jsx(r,{align:"left",children:t.functional_area})]},t.id))})]})}),e.jsx(s,{p:2,display:"flex",justifyContent:"center",children:e.jsx(E,{count:Math.ceil(a.length/8),page:i,className:"custom_table_pagination",onChange:p,sx:{mt:3}})})]})})}):e.jsx(g,{message:"No Completely Matched SMEs and Mentors available yet"})})]})]})}export{K as default};
