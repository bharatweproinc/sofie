import{r as f,j as e}from"./app-BLIEbsZp.js";import{L as g}from"./index-nsqjkfdF.js";import{N as u}from"./NoDataFound-CsgjpUdP.js";/* empty css              */import{T as i}from"./Typography-DgHLTZH9.js";import{B as r}from"./Box-UUyExs0T.js";import{G as c}from"./Grid-COBVYLmr.js";import{P}from"./Paper-GKkDhEFt.js";import{T as M,a as b,b as _,c as m,d as a,e as T}from"./TableRow-B-C21Dkp.js";import{A as d}from"./Avatar-eHm-h4gA.js";import{P as y}from"./Pagination-rD8bxOtb.js";import"./Button-BwUN2dCA.js";import"./ButtonBase-BuHFaLlA.js";import"./useIsFocusVisible-BaoFgfTD.js";import"./createSvgIcon-BF6pmAwJ.js";import"./Constants-BiwODRIn.js";import"./resolveComponentProps-lg2QQ50I.js";import"./DeleteIcon-CxFe094V.js";import"./EditIcon-FFQdJUpB.js";import"./useSlot-CIgcLaSe.js";const N=["Mentor","ID","Name","SME","ID","Name","Contact Name","Matched Functional Area"];function Q({list:s=[]}){const[o,h]=f.useState(1),l=o*8,x=l-8,p=s.matched.slice(x,l),j=(t,n)=>{h(n)};return e.jsxs(g,{auth:s.user,children:[e.jsx(i,{sx:{height:{xs:"65px",sm:"0px"}}}),e.jsxs(r,{p:3,children:[e.jsx(r,{p:3,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Partially Matched SMEs and Mentors"})}),e.jsx(r,{children:s.matched.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsxs(P,{children:[e.jsx(M,{sx:{width:"100%"},children:e.jsxs(b,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(_,{children:e.jsx(m,{children:N.map((t,n)=>e.jsx(a,{children:e.jsx(r,{className:"flex gap-3",children:e.jsx(i,{fontSize:"14px",color:"#212121",fontWeight:"600",children:t})})},n))})}),e.jsx(T,{children:p.map(t=>e.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:e.jsx(d,{alt:"_photo",src:t.mentor.profile_photo})}),e.jsx(a,{align:"left",component:"th",scope:"row",children:t.mentor_id}),e.jsx(a,{align:"left",children:t.mentor.name}),e.jsx(a,{children:e.jsx(d,{alt:"_photo",src:t.sme.profile_photo})}),e.jsx(a,{align:"left",children:t.sme.id}),e.jsx(a,{align:"left",children:t.sme.company_name}),e.jsx(a,{align:"left",children:t.sme.contact_name}),e.jsx(a,{align:"left",children:t.functional_area})]},t.id))})]})}),e.jsx(r,{p:2,display:"flex",justifyContent:"center",children:e.jsx(y,{count:Math.ceil(s.length/8),page:o,className:"custom_table_pagination",onChange:j,sx:{mt:3}})})]})})}):e.jsx(u,{message:"No Partially Matched SMEs and Mentors available"})})]})]})}export{Q as default};