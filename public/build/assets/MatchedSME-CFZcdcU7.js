import{j as e}from"./app-CbVxOp-5.js";import{N as h}from"./NoDataFound-CKtVXNzJ.js";import{C as c,D as m}from"./DeleteIcon-TA7ONO67.js";import{B as t}from"./Box-B9DN_TfT.js";import{T as i}from"./Typography-BVSEdrlA.js";import{G as n}from"./Grid-D00HPMl1.js";import{P as x}from"./Paper-ym_8SLSW.js";import{T as p,a as j,b as f,c as l,d as s,e as g}from"./TableRow-CIa8rRGa.js";import{A as u}from"./Avatar-DK1SeHWk.js";import"./createSvgIcon-C-Tlpzv0.js";import"./useIsFocusVisible-4B47jJ-d.js";import"./useSlot-CNwprLqc.js";import"./resolveComponentProps-Dmmv_Exf.js";const b=["Profile Photo","Company Name","Company UEN","User Name","User Email","User Phone","Review","Remove"];function k({companies:a,id:o}){return e.jsxs(t,{children:[e.jsx(t,{p:3,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Connected SME"})}),e.jsx(t,{children:a.length>0?e.jsx(n,{container:!0,children:e.jsx(n,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsx(x,{children:e.jsx(p,{sx:{width:"100%"},children:e.jsxs(j,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(f,{children:e.jsx(l,{children:b.map((r,d)=>e.jsx(s,{children:e.jsx(t,{className:"flex gap-3",children:e.jsx(i,{fontSize:"14px",color:"#212121",fontWeight:"600",children:r},d)})}))})}),e.jsx(g,{children:a.map(r=>e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{children:e.jsx(u,{alt:"company_photo",src:r.profile_photo})}),e.jsx(s,{align:"left",component:"th",scope:"row",children:r.company_name}),e.jsx(s,{align:"left",children:r.company_uen}),e.jsx(s,{align:"left",children:r.user.name}),e.jsx(s,{align:"left",children:r.user.email}),e.jsx(s,{align:"left",children:r.user.phone}),e.jsx(s,{children:e.jsx("a",{href:route("company.detail",r.id),target:"_blank",children:e.jsx(c,{})})}),e.jsx(s,{children:e.jsx("a",{href:route("mentor.removeMentor",o),target:"_blank",children:e.jsx(m,{})})})]},r.id))})]})})})})}):e.jsx(h,{message:"No Matched SME yet"})})]})}export{k as default};
