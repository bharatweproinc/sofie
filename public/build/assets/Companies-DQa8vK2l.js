import{r as d,j as o}from"./app-BIipo8El.js";import{L as x}from"./index-CY1YLmOQ.js";import"./Experience-CPrT-IpN.js";import{h as c}from"./moment-C5S46NFB.js";import{N as l}from"./NoDataFound-vC18mefK.js";import{t as h,a as f,b as g}from"./alex-CQW3FWVO.js";import{T as t}from"./Typography-CZPS58Mj.js";import{G as a}from"./Grid-x2sYhoEK.js";import{C as u}from"./Card-D3l4iK5_.js";import{C as j}from"./CardMedia-k17ci4zd.js";import{C as b}from"./CardContent-D5uh6JwB.js";import{B as n}from"./Box-DZozpeJv.js";import"./DefaultPropsProvider-DCh9ZCp3.js";import"./Button-B5Yi8pk4.js";import"./ButtonBase-D9ujge8j.js";import"./useIsFocusVisible-LvsNc5Z6.js";import"./createSvgIcon-DNK7iMay.js";import"./index-BoFs-JIU.js";import"./index-BZ3hNmTI.js";import"./PeopleAltOutlined-DcX4jRq4.js";import"./DeleteIcon-BF3hNtE-.js";import"./useTheme-CcYtXVp5.js";import"./Paper-FjaSN4g-.js";const y=[h,f,g];function K({list:i}){const[e,m]=d.useState(null),p=r=>{m(r===e?null:r)};return o.jsxs(x,{children:[o.jsx(t,{sx:{height:"95px"}}),i.company.length>0?o.jsx(a,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:i&&i.company.map((r,s)=>o.jsx(a,{item:!0,xs:12,children:o.jsxs(u,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(j,{component:"img",sx:{width:{xs:"100%",md:345},height:345,objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.link,alt:"mentor img"}),o.jsxs(b,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{pb:.5,variant:"body1",component:"div",children:r.industry_sector.map(String).join(" , ")}),o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.company_name}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[e===s?r.company_description:r.company_description.slice(0,600),r.additional_information.length>600&&o.jsx("span",{onClick:()=>p(s),style:{color:"#232424",cursor:"pointer"},children:e===s?" show less":"... read more"})]}),o.jsxs(n,{mt:4,className:"flex gap-2 items-center",children:[o.jsx("img",{src:y[s],style:{borderRadius:"50%",height:"50px",width:"50px"}}),o.jsxs(n,{className:"block",children:[o.jsx(t,{sx:{fontWeight:"bold !important"},children:r.user.name}),o.jsx(t,{color:"text.secondary",children:c(r.user.created_at).format("LL")})]})]})]})]})},s))}):o.jsx(l,{message:"No Company Available"})]})}export{K as default};
