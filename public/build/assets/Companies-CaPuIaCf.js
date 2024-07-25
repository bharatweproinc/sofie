import{r as d,j as o}from"./app-D8U5PHYV.js";import{L as x}from"./index-B5HTynfd.js";import"./Experience-B4lid1eL.js";import{h as c}from"./moment-C5S46NFB.js";import{N as l}from"./NoDataFound-BEh0G7Op.js";import{T as t}from"./Typography-DQvRHjr3.js";import{G as n}from"./Grid-CVrw6gJm.js";import{C as h}from"./Card-iRkNCzbp.js";import{C as f}from"./CardMedia-9bpdkRew.js";import{C as g}from"./CardContent-CpIQJho8.js";import{B as a}from"./Box-q44rX2z1.js";import"./Button-B4v7PQq-.js";import"./ButtonBase-CEF_sSfC.js";import"./useIsFocusVisible-BeLHK-v7.js";import"./createSvgIcon-BYmNDG3k.js";import"./Constants-CNKGz8Bz.js";import"./resolveComponentProps-C0k-7Ml4.js";import"./useTheme-DGMkIOkT.js";import"./CheckIcon-Dboc3Sid.js";import"./DeleteIcon-BgVYpSI2.js";import"./index-jL8jCZdz.js";import"./Paper-BYVsVFUH.js";function I({list:s}){const[i,p]=d.useState(null),m=r=>{p(r===i?null:r)};return console.log("list.company",s.company),o.jsxs(x,{children:[o.jsx(t,{sx:{height:"95px"}}),s.company.length>0?o.jsx(n,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:s&&s.company.map((r,e)=>o.jsx(n,{item:!0,xs:12,children:o.jsxs(h,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(f,{component:"img",sx:{width:{xs:"100%",md:345},height:345,objectFit:"contain",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.profile_photo,alt:"mentor img"}),o.jsxs(g,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{pb:.5,variant:"body1",component:"div",children:r.industry_sector.map(String).join(" , ")}),o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.company_name}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[i===e?r.company_description:r.company_description.slice(0,600),r.company_description.length>600&&o.jsx("span",{onClick:()=>m(e),style:{color:"#232424",cursor:"pointer"},children:i===e?" show less":"... read more"})]}),o.jsxs(a,{mt:4,className:"flex gap-2 items-center",children:[o.jsx("img",{src:r.founder_photo,style:{borderRadius:"50%",height:"50px",width:"50px",objectFit:"cover"}}),o.jsxs(a,{className:"block",children:[o.jsx(t,{sx:{fontWeight:"bold !important"},children:r.user.name}),o.jsx(t,{color:"text.secondary",children:c(r.user.created_at).format("LL")})]})]})]})]})},e))}):o.jsx(l,{message:"No Company Available"})]})}export{I as default};
