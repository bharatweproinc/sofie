import{j as o}from"./app-BLIEbsZp.js";import{E as i}from"./Experience-CDNGt9jV.js";import{N as s}from"./default-profile-bz7kglXx.js";import{C as a}from"./Card-siK_XnF5.js";import{C as n}from"./CardMedia-Dm4jfIBz.js";import{C as p}from"./CardContent-DPNjTrqG.js";import{T as t}from"./Typography-DgHLTZH9.js";import{B as m}from"./Box-UUyExs0T.js";import"./Paper-GKkDhEFt.js";function C({item:r,type:d=""}){const e=window.location.origin;return o.jsxs(a,{sx:{height:"100%",borderRadius:{xs:"15px",sm:0},border:{xs:"2px solid grey",sm:0},padding:{xs:"10px",sm:0},maxWidth:"100%","&.MuiPaper-root":{boxShadow:"none"}},children:[o.jsx(n,{component:"img",sx:{borderRadius:"8px",height:"345px"},image:r.profile_photo&&r.profile_photo!==e+"/storage/mentor_profile"?r.profile_photo:s,alt:"featured_mentor"}),o.jsxs(p,{sx:{pl:0},children:[o.jsx(t,{gutterBottom:!0,variant:"subtitle1",component:"div",color:"#000",children:r.user.name}),o.jsx(t,{gutterBottom:!0,variant:"subtitle2",component:"div",color:"#000",children:r.site}),o.jsxs(m,{className:"flex",gap:.5,children:[o.jsx(i,{}),o.jsx(t,{pb:1,fontWeight:500,variant:"body1",component:"div",children:r.functional_area.map(String).slice(0,2).join(", ")})]})]})]})}export{C as default};