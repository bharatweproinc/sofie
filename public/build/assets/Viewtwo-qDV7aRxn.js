import{r as c,j as r}from"./app-BLIEbsZp.js";import{L as m}from"./index-nsqjkfdF.js";import{p as g}from"./styled-components.browser.esm-KhU-NxgQ.js";import{N as h}from"./NoDataFound-CsgjpUdP.js";import{T as s}from"./Typography-DgHLTZH9.js";import{G as a}from"./Grid-COBVYLmr.js";import{C as f}from"./Card-siK_XnF5.js";import{C as u}from"./CardMedia-Dm4jfIBz.js";import{C as j}from"./CardContent-DPNjTrqG.js";import"./Box-UUyExs0T.js";import"./Button-BwUN2dCA.js";import"./ButtonBase-BuHFaLlA.js";import"./useIsFocusVisible-BaoFgfTD.js";import"./createSvgIcon-BF6pmAwJ.js";import"./Constants-BiwODRIn.js";import"./resolveComponentProps-lg2QQ50I.js";import"./DeleteIcon-CxFe094V.js";import"./EditIcon-FFQdJUpB.js";import"./Paper-GKkDhEFt.js";const b="/build/assets/pressrel-CEe5hGzV.jpg";g("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",height:"896px",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function k({list:i}){const[e,d]=c.useState(null),l=o=>{d(o===e?null:o)},x=window.location.origin;return r.jsxs(m,{children:[r.jsx(s,{sx:{height:"95px"}}),i.length>0?r.jsx(a,{container:!0,spacing:4,px:{lg:8,md:4,xs:2},pb:{md:10,xs:5},children:i.map((o,t)=>{var n,p;return r.jsx(a,{item:!0,xs:12,children:r.jsxs(f,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},width:"100%",minHeight:{md:"305px"},marginBottom:"20px",borderRadius:"16px"},children:[r.jsx(u,{component:"img",sx:{width:{xs:"100%",md:300},height:{lg:300},objectFit:"cover",borderRadius:{xs:"16px 16px 0 0",md:"16px 0 0 16px"}},image:o.profile_photo&&o.profile_photo!==x+"/storage/testimonial"?o.profile_photo:b,alt:"_img"}),r.jsxs(j,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flex:1,padding:"20px",backgroundColor:"#f0f0f0",borderRadius:{xs:"0 0 16px 16px",md:"0 16px 16px 0"}},children:[r.jsx(s,{fontWeight:600,gutterBottom:!0,variant:"h6",component:"div",children:o.title}),r.jsx(s,{pb:1,variant:"body2",component:"div",children:r.jsxs("em",{children:[" Date and Time of Release: ",o.date]})}),r.jsxs(s,{variant:"body1",color:"text.secondary",children:[o!=null&&o.description&&e===t?o==null?void 0:o.description:(n=o==null?void 0:o.description)==null?void 0:n.slice(0,600),((p=o.description)==null?void 0:p.length)>600&&r.jsx("span",{onClick:()=>l(t),style:{color:"#232424",cursor:"pointer"},children:e===t?" show less":"... read more"})]})]})]})},t)})}):r.jsx(h,{message:"No content Available"})]})}export{k as default};