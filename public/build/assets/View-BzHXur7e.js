import{r as g,j as e}from"./app-CLNoeIf4.js";import{L as j}from"./index-Cjz1sXza.js";import{N as f}from"./NoDataFound-DGSkiumP.js";import{C as u}from"./DeleteIcon-BA6o75-o.js";/* empty css              */import{T as i}from"./Typography-Cbf3Jowo.js";import{B as a}from"./Box-pioLHn4W.js";import{G as c}from"./Grid-CAQnG8y0.js";import{P}from"./Paper-DZ6Iq4W_.js";import{T as _,a as y,b,c as d,d as s,e as C}from"./TableRow-Dis2vuuv.js";import{A as M}from"./Avatar-B_jAzhOF.js";import{P as T}from"./Pagination-B_CB-nrP.js";import"./Button-CK_kYUcJ.js";import"./ButtonBase-CItdG5xs.js";import"./useIsFocusVisible-B8RzluFD.js";import"./createSvgIcon-CkUardzR.js";import"./Constants-e1feQntW.js";import"./resolveComponentProps-BzExm8fi.js";import"./EditIcon-B-flmUMu.js";import"./useSlot-BgiJaKNl.js";const N=["Company Profile Photo","Company Name","Company UEN","Mentor 1","Mentor 2","Mentor 3","Action"];function Q({list:t=[]}){const[o,m]=g.useState(1),l=o*8,h=l-8,x=t.company.slice(h,l),p=(n,r)=>{m(r)};return e.jsxs(j,{auth:t.user,children:[e.jsx(i,{sx:{height:{xs:"65px",sm:"0px"}}}),e.jsxs(a,{p:3,children:[e.jsx(a,{p:3,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Partially Matched SMEs and Mentors"})}),e.jsx(a,{children:t.company.length>0?e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,p:0,md:12,sx:{width:"100%"},children:e.jsxs(P,{children:[e.jsx(_,{sx:{width:"100%"},children:e.jsxs(y,{sx:{minWidth:650,maxWidth:"100%"},children:[e.jsx(b,{children:e.jsx(d,{children:N.map((n,r)=>e.jsx(s,{children:e.jsx(a,{className:"flex gap-3",children:e.jsx(i,{fontSize:"14px",color:"#212121",fontWeight:"600",children:n})})},r))})}),e.jsx(C,{children:x.map(n=>e.jsxs(d,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{children:e.jsx(M,{alt:"company_photo",src:n.profile_photo})}),e.jsx(s,{align:"left",component:"th",scope:"row",children:n.company_name}),e.jsx(s,{align:"left",children:n.company_uen}),e.jsx(s,{align:"left",children:n.assigned_mentor_1==null?e.jsx("em",{children:"Unassigned"}):n.assigned_mentor_1}),e.jsx(s,{align:"left",children:n.assigned_mentor_2==null?e.jsx("em",{children:"Unassigned"}):n.assigned_mentor_2}),e.jsx(s,{align:"left",children:n.assigned_mentor_3==null?e.jsx("em",{children:"Unassigned"}):n.assigned_mentor_3}),e.jsx(s,{children:e.jsx("a",{href:route("admin.company.get",n.id),target:"_blank",children:e.jsx(u,{})})})]},n.id))})]})}),e.jsx(a,{p:2,display:"flex",justifyContent:"center",children:e.jsx(T,{count:Math.ceil(t.length/8),page:o,className:"custom_table_pagination",onChange:p,sx:{mt:3}})})]})})}):e.jsx(f,{message:"No Partially Matched SMEs and Mentors available"})})]})]})}export{Q as default};
