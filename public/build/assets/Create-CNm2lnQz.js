import{W as S,r as T,j as e}from"./app-BYDEl0xl.js";import{P as y}from"./FileUpload-DNoTKxX2.js";import{L as P}from"./index-Dpl5XgTI.js";/* empty css              *//* empty css              */import m from"./Constants-8cphpT_B.js";import{J as x}from"./JoiValidator-CoEjxcfl.js";import{T as o}from"./Typography-BRYbk_7t.js";import{G as i}from"./Grid-B0dnmqxm.js";import{T as u}from"./TextField-B6DukKQi.js";import{B as b}from"./Button-BkfktQ5k.js";import"./createSvgIcon-rDSedG_N.js";import"./useIsFocusVisible-B7PH3YzB.js";import"./Avatar-ZsuG6bdi.js";import"./useSlot-Jt__lPrZ.js";import"./resolveComponentProps-DSY_aGKu.js";import"./Box-xtFAA-t4.js";import"./Constants-M9XmFXoA.js";import"./ButtonBase-DHHlWAjf.js";import"./DeleteIcon-CfQcD1Ub.js";import"./EditIcon-DHyjVsAF.js";import"./Paper-CoK1zzZk.js";import"./GlobalStyles-BFf6RPY4.js";const Q=({user:f})=>{const{data:s,setData:p,post:g,processing:C}=S(m.initTestimonial),[a,c]=T.useState({}),h=(t,r)=>{c({...a,[t]:x.validateToPlainErrors(r,m.testmionialSchema[t])}),p(n=>({...n,[t]:r}))},j=t=>{var d;t.preventDefault();let r=x.validateToPlainErrors(s,m.testmionialSchema);c(r);const n=(d=Object.keys(r))==null?void 0:d.map((l,v)=>r[l]==null?!1:v);(n==null?void 0:n.length)>0||(console.log("data",s),g(route("admin.testimonial.saveData"),{onSuccess:l=>{console.log(l,"sucesss")},onError:l=>{console.log(l,"error")}}))};return e.jsxs(P,{auth:f,children:[e.jsx(o,{sx:{height:"65px"}}),e.jsx("form",{onSubmit:j,children:e.jsxs(i,{container:!0,px:8,py:4,sx:{padding:"24px"},className:"testimonial_page",children:[e.jsx(i,{item:!0,p:3,xs:12,children:e.jsxs(i,{container:!0,p:4,gap:5,alignItems:"center",sx:{border:"2px solid #7C7C7C !important"},children:[e.jsx(y,{setData:p,data:s,photoKey:"profile_photo"}),e.jsxs(i,{item:!0,xs:9,textAlign:"left",children:[e.jsx(o,{fontWeight:600,fontSize:"18px",children:"Upload Testimonial Photo"}),e.jsx(o,{fontWeight:400,color:"#7C7C7C",fontSize:"16px",py:1,pt:2,children:"Please upload your company's logo photo that meets the following criteria:"}),e.jsx(o,{py:1,color:"#7C7C7C",children:"1. Clear/White Background: Ensure the background of the logo is clean and white or unobtrusive."}),e.jsx(o,{py:1,color:"#7C7C7C",children:"2. Image Format: Use common image formats such as JPEG, PNG, or SVG."}),e.jsx(o,{py:1,color:"#7C7C7C",children:"3. High Resolution: Ensure the image is high resolution so that the logo appears clear and professional."})]})]})}),e.jsxs(i,{px:3,xs:12,className:"testimonial_input_fields",children:[e.jsx(o,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Testimonial Name"}),e.jsx(u,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",value:s.user,placeholder:"Please Fill your Name",onChange:t=>h("name",t.target.value),error:!!a.name,helperText:a.name})]}),e.jsxs(i,{px:3,pt:4,xs:12,className:"testimonial_input_fields",children:[e.jsx(o,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Testimonial Description"}),e.jsx(u,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Please Fill Description",multiline:!0,value:s.description,onChange:t=>h("description",t.target.value),error:!!a.description,helperText:a.description})]}),e.jsx(i,{xs:12,m:4,textAlign:"center",className:"custom_btn",children:e.jsx(b,{type:"submit",variant:"contained",disabled:C,children:"Save"})})]})})]})};export{Q as default};