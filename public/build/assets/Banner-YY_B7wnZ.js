import{j as e,W as h,r as g}from"./app-xnOB8SgL.js";import{L as f}from"./index-gIYwHJXw.js";/* empty css              *//* empty css              */import b from"./Constant-C6Mv7h_L.js";import{Q as j,n as u}from"./Notifier-0t2SW_cI.js";/* empty css                      */import{T as c}from"./Typography-CztQr1d3.js";import{B as y}from"./Box-CRJlRAyU.js";import{G as m}from"./Grid-CO8ZXcNn.js";import{T as x}from"./TextField-BgD-hnV7.js";import{B as C}from"./Button-B3qRJNNd.js";import"./createSvgIcon-mDBLJy9M.js";import"./useIsFocusVisible-BmNZ5cF1.js";import"./Constants-BoyhNZUK.js";import"./ButtonBase-DvLoNZob.js";import"./mergeSlotProps-BWFK5ri3.js";import"./CheckIcon-yqhZpLHy.js";import"./DeleteIcon-w2neWDcR.js";import"./Paper-88ZO41it.js";import"./GlobalStyles-fqPCFFwB.js";const v=({data:s,setData:r})=>{const a=n=>{const t=Array.from(n.target.files);r({...s,banner_images:[...s.banner_images,...t]})},p=n=>{r(t=>{const l=t.banner_images.filter((o,i)=>i!==n);return{...t,banner_images:l}})};return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:a}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:s.banner_images.map((n,t)=>{const l=n.length>0?n:URL.createObjectURL(n);return e.jsxs("div",{style:{margin:"10px",position:"relative"},children:[e.jsx("img",{src:l,alt:`Uploaded preview ${t}`,width:"250px",style:{height:"250px",objectFit:"contain"}}),e.jsx("button",{onClick:()=>{p(t),console.log("index",t)},style:{position:"absolute",top:"5px",right:"5px",background:"rgba(255, 0, 0, 0.5)",border:"none",color:"white",cursor:"pointer",width:"25px"},children:"X"})]},t)})})]})};function X({list:s}){const{data:r,setData:a,post:p,processing:n}=h({...b.initBannerForm,...s.banner,...s.user});g.useEffect(()=>{a(r)},[r]);const t=(o,i)=>{a(d=>({...d,[o]:i}))},l=o=>{o.preventDefault(),console.log("data12121",r),p(route("admin.saveSectionOne"),{onSuccess:i=>{u.success("Banner Data has been updated successfully"),console.log(i,"sucesss")},onError:i=>{u.error("Error in Banner Data, Try again"),console.log(i,"error")}})};return e.jsxs(f,{auth:r,children:[e.jsx(j,{style:{marginTop:"65px"}}),e.jsx(c,{sx:{height:"65px"}}),e.jsx(y,{p:4,children:e.jsx("form",{onSubmit:l,children:e.jsxs(m,{container:!0,className:"custom_input",children:[e.jsxs(m,{item:!0,xs:12,children:[e.jsx(c,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Banner Title"}),e.jsx(x,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,variant:"outlined",value:r.banner_title,onChange:o=>t("banner_title",o.target.value),type:"text",placeholder:"Please Fill Banner Title"})]}),e.jsxs(m,{item:!0,xs:12,children:[e.jsx(c,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Banner Description"}),e.jsx(x,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:r.banner_description,onChange:o=>t("banner_description",o.target.value),type:"text",placeholder:"Please Fill Banner Description"})]}),e.jsxs(m,{item:!0,children:[e.jsx(c,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Upload Photos"}),e.jsx(v,{data:r,setData:a})]}),e.jsx(m,{item:!0,xs:12,mt:3,className:"custom_btn",textAlign:"center",children:e.jsx(C,{disabled:n,type:"submit",variant:"contained",children:"Save"})})]})})})]})}export{X as default};
