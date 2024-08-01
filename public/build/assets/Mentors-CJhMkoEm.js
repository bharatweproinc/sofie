import{r as d,j as o}from"./app-xnOB8SgL.js";import{L as m}from"./index-gIYwHJXw.js";import{E as l,G as c}from"./Experience-CoMjDkEd.js";import{N as f}from"./NoDataFound-CCbR1y6H.js";import"./index-o7Trqp0T.js";import{T as t}from"./Typography-CztQr1d3.js";import{G as n}from"./Grid-CO8ZXcNn.js";import{C as h}from"./Card-BiNPMde9.js";import{C as g}from"./CardMedia-0qTwJyGg.js";import{C as u}from"./CardContent-BwKtNKvk.js";import{B as a}from"./Box-CRJlRAyU.js";import"./Button-B3qRJNNd.js";import"./ButtonBase-DvLoNZob.js";import"./useIsFocusVisible-BmNZ5cF1.js";import"./createSvgIcon-mDBLJy9M.js";import"./Constants-BoyhNZUK.js";import"./mergeSlotProps-BWFK5ri3.js";import"./CheckIcon-yqhZpLHy.js";import"./DeleteIcon-w2neWDcR.js";import"./Paper-88ZO41it.js";import"./index-BZ3hNmTI.js";function H({list:s}){const[e,p]=d.useState(null),x=r=>{p(r===e?null:r)};return o.jsxs(m,{children:[o.jsx(t,{sx:{height:"95px"}}),s.mentor.length>0?o.jsx(n,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:s.mentor.map((r,i)=>o.jsx(n,{item:!0,xs:12,children:o.jsxs(h,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(g,{component:"img",sx:{width:{xs:"100%",md:345},height:{lg:345},objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.profile_photo,alt:"mentor img"}),o.jsxs(u,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.user.name}),o.jsx(t,{pb:1,fontWeight:500,variant:"body1",component:"div",children:r.industry_sector.map(String).join(", ")}),o.jsxs(a,{className:"flex",gap:.5,children:[o.jsx(l,{}),o.jsxs(t,{variant:"caption",color:"text.secondary",children:[r.experience," Years Experience"]})]}),o.jsxs(a,{className:"flex",gap:1,children:[o.jsx(c,{}),o.jsx(t,{variant:"caption",color:"text.secondary",children:r.user.email})]}),o.jsx(t,{pt:2,variant:"body2",color:"text.secondary",children:r.qualifications}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[e===i?r.additional_information:r.additional_information.slice(0,600),r.additional_information.length>600&&o.jsx("span",{onClick:()=>x(i),style:{color:"#232424",cursor:"pointer"},children:e===i?" show less":"... read more"})]})]})]})},i))}):o.jsx(f,{message:"No mentor Available"})]})}export{H as default};
