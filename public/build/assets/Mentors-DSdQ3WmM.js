import{r as m,j as o}from"./app-DFh_S5pj.js";import{L as p}from"./index-DuewYFZa.js";import"./Experience--SoxraXw.js";import{N as x}from"./NoDataFound-BvYBUmYT.js";import"./index-Bpr-_mWm.js";import{T as t}from"./Typography-DoIvtada.js";import{G as s}from"./Grid-DXLy6LFi.js";import{C as l}from"./Card-BvnlySVr.js";import{C as c}from"./CardMedia-BcLZoICa.js";import{C as f}from"./CardContent-BVLMja7o.js";import"./Box-CmaVRIZX.js";import"./Button-DC_YsFPt.js";import"./ButtonBase-nUfU2krB.js";import"./useIsFocusVisible-d-pLdxOP.js";import"./createSvgIcon-D9cdEVMm.js";import"./Constants-DWkRREPV.js";import"./resolveComponentProps-CfhH5UVo.js";import"./DeleteIcon-O2oK0E-b.js";import"./EditIcon-BTQ-eZuo.js";import"./Paper-CmXIsYLu.js";import"./index-BZ3hNmTI.js";function W({list:e}){const[n,a]=m.useState(null),d=r=>{a(r===n?null:r)};return o.jsxs(p,{children:[o.jsx(t,{sx:{height:"95px"}}),e.mentor.length>0?o.jsx(s,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:e.mentor.map((r,i)=>o.jsx(s,{item:!0,xs:12,children:o.jsxs(l,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"345px"},marginBottom:"20px",borderRadius:"16px"},children:[o.jsx(c,{component:"img",sx:{width:{xs:"100%",md:345},height:{lg:345},objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:r.profile_photo,alt:"mentor img"}),o.jsxs(f,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[o.jsx(t,{fontWeight:600,gutterBottom:!0,variant:"h5",component:"div",children:r.user.name}),o.jsx(t,{pb:1,fontWeight:500,variant:"body1",component:"div",children:r.industry_sector.map(String).join(", ")}),o.jsx(t,{pt:2,variant:"body2",color:"text.secondary",children:r.qualifications}),o.jsxs(t,{variant:"body2",color:"text.secondary",children:[n===i?r.additional_information:r.additional_information.slice(0,600),r.additional_information.length>600&&o.jsx("span",{onClick:()=>d(i),style:{color:"#232424",cursor:"pointer"},children:n===i?" show less":"... read more"})]})]})]})},i))}):o.jsx(x,{message:"No mentor Available"})]})}export{W as default};