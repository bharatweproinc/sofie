import{r as d,j as o}from"./app-BcIj6nv6.js";import{L as x}from"./index-tKQkxV-H.js";import"./Experience-BkaGYbh9.js";import{h as c}from"./moment-C5S46NFB.js";import{U as l}from"./Karen-Lee-C15Ps6CI.js";import{N as h}from"./NoDataFound-BtWI3ck_.js";import{T as t}from"./Typography-B7kk_6T2.js";import{G as n}from"./Grid-BGQAZFJ1.js";import{C as f}from"./Card-C6L19u28.js";import{C as g}from"./CardMedia-MJvM_D0K.js";import{C as u}from"./CardContent-BXSzehEC.js";import{B as a}from"./Box-D08HUDgF.js";import"./styled-C93-adk3.js";import"./Button-DA9xqadz.js";import"./ButtonBase-CYh4xILf.js";import"./useIsFocusVisible-Dt7goHOy.js";import"./useTheme-DaYFWDuW.js";import"./createSvgIcon-CJWYzcn6.js";import"./index-CKJ4_v2l.js";import"./index-azL-rvhK.js";import"./PeopleAltOutlined-D3-A6lxp.js";import"./DeleteIcon-W2VaZY0j.js";import"./Paper-CJKiqfzV.js";function I({list:i}){const[e,m]=d.useState(null),p=r=>{m(r===e?null:r)};return o.jsxs(x,{children:[o.jsx(t,{sx:{height:"95px"}}),i.company.length>0?o.jsx(n,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:i&&i.company.map((r,s)=>o.jsx(n,{item:!0,xs:12,children:o.jsxs(f,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(g,{component:"img",sx:{width:{xs:"100%",md:345},height:345,objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.link,alt:"mentor img"}),o.jsxs(u,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{pb:.5,variant:"body1",component:"div",children:r.industry_sector.map(String).join(" , ")}),o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.company_name}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[e===s?r.company_description:r.company_description.slice(0,600),r.additional_information.length>600&&o.jsx("span",{onClick:()=>p(s),style:{color:"#232424",cursor:"pointer"},children:e===s?" show less":"... read more"})]}),o.jsxs(a,{mt:4,className:"flex gap-2 items-center",children:[o.jsx("img",{src:l}),o.jsxs(a,{className:"block",children:[o.jsx(t,{sx:{fontWeight:"bold !important"},children:r.user.name}),o.jsx(t,{color:"text.secondary",children:c(r.user.created_at).format("LL")})]})]})]})]})},s))}):o.jsx(h,{message:"No Company Available"})]})}export{I as default};
