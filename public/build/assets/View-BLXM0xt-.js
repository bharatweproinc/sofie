import{r as j,j as e}from"./app-BYDEl0xl.js";import{L as g}from"./index-Dpl5XgTI.js";import{N as f}from"./NoDataFound-DwsujSRu.js";import{C as u}from"./DeleteIcon-CfQcD1Ub.js";/* empty css              */import{T as o}from"./Typography-BRYbk_7t.js";import{B as s}from"./Box-xtFAA-t4.js";import{G as c}from"./Grid-B0dnmqxm.js";import{P}from"./Paper-CoK1zzZk.js";import{T as y,a as _,b as C,c as m,d as n,e as b}from"./TableRow-YJKpIxrh.js";import{A as M}from"./Avatar-ZsuG6bdi.js";import{P as T}from"./Pagination-BwZgo8Nj.js";import"./Button-BkfktQ5k.js";import"./ButtonBase-DHHlWAjf.js";import"./useIsFocusVisible-B7PH3YzB.js";import"./createSvgIcon-rDSedG_N.js";import"./Constants-M9XmFXoA.js";import"./resolveComponentProps-DSY_aGKu.js";import"./EditIcon-DHyjVsAF.js";import"./useSlot-Jt__lPrZ.js";const N=["Company Profile Photo","Company Name","Company UEN","Mentor 1","Mentor 2","Mentor 3","Action"];function Q({list:r=[]}){const[i,d]=j.useState(1),l=i*8,p=l-8,h=r.company.slice(p,l),x=(t,a)=>{d(a)};return e.jsxs(g,{auth:r.user,children:[e.jsx(o,{sx:{height:{xs:"65px",sm:"0px"}}}),e.jsxs(s,{p:3,children:[e.jsx(s,{p:3,children:e.jsx(o,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Matched SMEs and Mentors"})}),e.jsx(s,{children:r.company.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsxs(P,{children:[e.jsx(y,{sx:{width:"100%"},children:e.jsxs(_,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(C,{children:e.jsx(m,{children:N.map((t,a)=>e.jsx(n,{children:e.jsx(s,{className:"flex gap-3",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:t})})},a))})}),e.jsx(b,{children:h.map(t=>e.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(n,{children:e.jsx(M,{alt:"company_photo",src:t.profile_photo})}),e.jsx(n,{align:"left",component:"th",scope:"row",children:t.company_name}),e.jsx(n,{align:"left",children:t.company_uen}),e.jsx(n,{align:"left",children:t.assigned_mentor_1}),e.jsx(n,{align:"left",children:t.assigned_mentor_2}),e.jsx(n,{align:"left",children:t.assigned_mentor_3}),e.jsx(n,{children:e.jsx("a",{href:route("admin.company.get",t.id),target:"_blank",children:e.jsx(u,{})})})]},t.id))})]})}),e.jsx(s,{p:2,display:"flex",justifyContent:"center",children:e.jsx(T,{count:Math.ceil(r.length/8),page:i,className:"custom_table_pagination",onChange:x,sx:{mt:3}})})]})})}):e.jsx(f,{message:"No Completely Matched SMEs and Mentors available yet"})})]})]})}export{Q as default};