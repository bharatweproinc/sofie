import{r as j,j as e}from"./app-xnOB8SgL.js";import{L as f}from"./index-gIYwHJXw.js";import{N as _}from"./NoDataFound-CCbR1y6H.js";import{C as g}from"./CheckIcon-yqhZpLHy.js";/* empty css              */import{T as o}from"./Typography-CztQr1d3.js";import{B as r}from"./Box-CRJlRAyU.js";import{G as c}from"./Grid-CO8ZXcNn.js";import{P as u}from"./Paper-88ZO41it.js";import{T as y,a as P,b as M,c as m,d as a,e as C}from"./TableRow-B2Q_oj5n.js";import{A as b}from"./Avatar-CSvVmzur.js";import{P as T}from"./Pagination-BX5hRGjl.js";import"./Button-B3qRJNNd.js";import"./ButtonBase-DvLoNZob.js";import"./useIsFocusVisible-BmNZ5cF1.js";import"./createSvgIcon-mDBLJy9M.js";import"./Constants-BoyhNZUK.js";import"./mergeSlotProps-BWFK5ri3.js";import"./DeleteIcon-w2neWDcR.js";const N={id:12,user_role:"admin"},A=["Company Profile Photo","Company Name","Company UEN","Mentor 1","Mentor 2","Mentor 3","Action"],s=[{id:1,profile_photo:"none",company_name:"Testing Company 1",company_uen:"45646546A",partial_matched_1:"Mentor 1",partial_matched_2:"Mentor 2",partial_matched_3:"Mentor 3"},{id:2,profile_photo:"none",company_name:"Testing Company 2",company_uen:"45646546A",partial_matched_1:"Mentor 1",partial_matched_2:"Mentor 2",partial_matched_3:"Mentor 3"}];function Q(){const[i,p]=j.useState(1),l=i*8,d=l-8,h=s.slice(d,l),x=(t,n)=>{p(n)};return e.jsxs(f,{auth:N,children:[e.jsx(o,{sx:{height:{xs:"65px",sm:"0px"}}}),e.jsxs(r,{p:3,children:[e.jsx(r,{p:3,children:e.jsx(o,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Partially Matched SMEs and Mentors"})}),e.jsx(r,{children:s.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsxs(u,{children:[e.jsx(y,{sx:{width:"100%"},children:e.jsxs(P,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(M,{children:e.jsx(m,{children:A.map((t,n)=>e.jsx(a,{children:e.jsx(r,{className:"flex gap-3",children:e.jsx(o,{fontSize:"14px",color:"#212121",fontWeight:"600",children:t})})},n))})}),e.jsx(C,{children:h.map(t=>e.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:e.jsx(b,{alt:"company_photo",src:t.profile_photo})}),e.jsx(a,{align:"left",component:"th",scope:"row",children:t.company_name}),e.jsx(a,{align:"left",children:t.company_uen}),e.jsx(a,{align:"left",children:t.partial_matched_1}),e.jsx(a,{align:"left",children:t.partial_matched_2}),e.jsx(a,{align:"left",children:t.partial_matched_3}),e.jsx(a,{children:e.jsx("a",{href:"",target:"_blank",children:e.jsx(g,{})})})]},t.id))})]})}),e.jsx(r,{p:2,display:"flex",justifyContent:"center",children:e.jsx(T,{count:Math.ceil(s.length/8),page:i,className:"custom_table_pagination",onChange:x,sx:{mt:3}})})]})})}):e.jsx(_,{message:"No Partially Matched SMEs and Mentors available"})})]})]})}export{Q as default};
