import{r as d,j as o}from"./app-D8U5PHYV.js";import{L as m}from"./index-B5HTynfd.js";import{E as l,G as c}from"./Experience-B4lid1eL.js";import{N as f}from"./NoDataFound-BEh0G7Op.js";import"./index-BR11u7Pd.js";import{T as t}from"./Typography-DQvRHjr3.js";import{G as n}from"./Grid-CVrw6gJm.js";import{C as h}from"./Card-iRkNCzbp.js";import{C as g}from"./CardMedia-9bpdkRew.js";import{C as u}from"./CardContent-CpIQJho8.js";import{B as a}from"./Box-q44rX2z1.js";import"./Button-B4v7PQq-.js";import"./ButtonBase-CEF_sSfC.js";import"./useIsFocusVisible-BeLHK-v7.js";import"./createSvgIcon-BYmNDG3k.js";import"./Constants-CNKGz8Bz.js";import"./resolveComponentProps-C0k-7Ml4.js";import"./useTheme-DGMkIOkT.js";import"./CheckIcon-Dboc3Sid.js";import"./DeleteIcon-BgVYpSI2.js";import"./index-jL8jCZdz.js";import"./Paper-BYVsVFUH.js";import"./index-BZ3hNmTI.js";function Y({list:s}){const[e,p]=d.useState(null),x=r=>{p(r===e?null:r)};return o.jsxs(m,{children:[o.jsx(t,{sx:{height:"95px"}}),s.mentor.length>0?o.jsx(n,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:s.mentor.map((r,i)=>o.jsx(n,{item:!0,xs:12,children:o.jsxs(h,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(g,{component:"img",sx:{width:{xs:"100%",md:345},height:{lg:345},objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.profile_photo,alt:"mentor img"}),o.jsxs(u,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.user.name}),o.jsx(t,{pb:1,fontWeight:500,variant:"body1",component:"div",children:r.industry_sector.map(String).join(", ")}),o.jsxs(a,{className:"flex",gap:.5,children:[o.jsx(l,{}),o.jsxs(t,{variant:"caption",color:"text.secondary",children:[r.experience," Years Experience"]})]}),o.jsxs(a,{className:"flex",gap:1,children:[o.jsx(c,{}),o.jsx(t,{variant:"caption",color:"text.secondary",children:r.user.email})]}),o.jsx(t,{pt:2,variant:"body2",color:"text.secondary",children:r.qualifications}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[e===i?r.additional_information:r.additional_information.slice(0,600),r.additional_information.length>600&&o.jsx("span",{onClick:()=>x(i),style:{color:"#232424",cursor:"pointer"},children:e===i?" show less":"... read more"})]})]})]})},i))}):o.jsx(f,{message:"No mentor Available"})]})}export{Y as default};