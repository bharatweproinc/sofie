import{j as e}from"./app-n5Cak6Mz.js";import{N as d}from"./NoDataFound-jW_ahMqq.js";import{C as h,D as m}from"./DeleteIcon-Crmgbm0g.js";import{B as a}from"./Box-C1Pw5GI2.js";import{T as s}from"./Typography-CIZjMxSA.js";import{G as i}from"./Grid-CG2Lbxd4.js";import{P as x}from"./Paper-CNSkFKNF.js";import{T as p,a as j,b as f,c as o,d as t,e as u}from"./TableRow-Nf1-mWSA.js";import{A as g}from"./Avatar-Cz9R5OxY.js";import"./createSvgIcon-Df9VJmT4.js";import"./useIsFocusVisible-ClfwHLfI.js";import"./useSlot-D87rZ9Dz.js";import"./resolveComponentProps-e5vO-KJw.js";const y=["Profile Photo","Company Name","Company UEN","Contact Person","Email","Industry Sector","Review","Remove"];function A({companies:n,id:l}){return e.jsxs(a,{children:[e.jsx(a,{p:3,children:e.jsx(s,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Connected SME"})}),e.jsx(a,{children:n.length>0?e.jsx(i,{container:!0,children:e.jsx(i,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsx(x,{children:e.jsx(p,{sx:{width:"100%"},children:e.jsxs(j,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(f,{children:e.jsx(o,{children:y.map((r,c)=>e.jsx(t,{children:e.jsx(a,{className:"flex gap-3",children:e.jsx(s,{fontSize:"14px",color:"#212121",fontWeight:"600",children:r},c)})}))})}),e.jsx(u,{children:n.map(r=>e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(t,{children:e.jsx(g,{alt:"company_photo",src:r.profile_photo})}),e.jsx(t,{align:"left",component:"th",scope:"row",children:r.company_name}),e.jsx(t,{align:"left",children:r.company_uen}),e.jsx(t,{align:"left",children:r.user.name}),e.jsx(t,{align:"left",children:r.user.email}),e.jsx(t,{align:"left",children:r.industry_sector}),e.jsx(t,{children:e.jsx("a",{href:route("company.detail",r.id),target:"_blank",children:e.jsx(h,{})})}),e.jsx(t,{children:e.jsx("a",{href:route("company.removeCompany",l),target:"_blank",children:e.jsx(m,{})})})]},r.id))})]})})})})}):e.jsx(d,{message:"No Matched SME yet"})})]})}export{A as default};