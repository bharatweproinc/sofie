import{W as v,r as C,j as e}from"./app-TQkCsXfF.js";import{L as _}from"./index-DH7DkYDc.js";import u from"./Constants-CwJypgF-.js";import{s as x}from"./styled-CPnESEd9.js";import{P as y}from"./Paper-CRHg6hZS.js";import{T as a}from"./Typography-CtEPGeuF.js";import{G as s}from"./Grid-DebWUkMh.js";import{T as l}from"./TextField-Car57C6X.js";import{B as N}from"./Button-CAhj9DkT.js";import"./Box-Ci8uPhC9.js";import"./styled-BoSLNyrn.js";import"./useTheme-CUDMdppF.js";import"./createSvgIcon-D5OsMnkY.js";import"./useIsFocusVisible-CQFiR6GA.js";import"./Sofie-logo-DwkGdYjm.js";import"./ButtonBase-BCj4Cnms.js";import"./Grow-J80WXli2.js";import"./index-azL-rvhK.js";import"./DeleteIcon-6lOAXlKx.js";import"./createStyled-BqYKW_8r.js";import"./GlobalStyles-PngTUX46.js";const h=u.contactSchema,E=x("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),S=x(y)({padding:"40px",borderRadius:"12px"});function Q(){const{data:d,setData:g,post:T,processing:f}=v(u.initContactForm),[r,c]=C.useState({}),i=(t,n)=>{const p={...d,[t]:n},m=h.extract(t),{error:o}=m.validate(n);if(o)c({...r,[t]:o.message});else{const{[t]:w,...b}=r;c(b)}g(p)},j=t=>{t.preventDefault();const{error:n,value:p}=h.validate(d,{abortEarly:!1});if(n){const m={};n.details.forEach(o=>{m[o.path[0]]=o.message}),c(m)}else console.log("data",p)};return e.jsxs(_,{children:[e.jsx(a,{sx:{height:"65px"}}),e.jsx(E,{sx:{paddingToo:"65px"},children:e.jsx(S,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx("form",{onSubmit:j,className:"contact_page",children:e.jsxs(s,{container:!0,spacing:2,width:"100%",children:[e.jsx(s,{item:!0,xs:12,gap:2,children:e.jsx(a,{fontWeight:700,sx:{fontSize:"28px"},children:"Contact Us"})}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Name"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",placeholder:"Name",onChange:t=>i("name",t.target.value),error:!!r.name,helperText:r.name})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Email"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"email",variant:"outlined",placeholder:"Your Email Address",onChange:t=>i("email",t.target.value),error:!!r.email,helperText:r.email})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:12,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Phone Number"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",value:d.phone_number||"",placeholder:"Your Phone Number",onChange:t=>i("phone_number",t.target.value.replace(/\D/,"").slice(0,10)),error:!!r.phone_number,helperText:r.phone_number})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsxs(a,{mb:1,children:["Company ",e.jsx("span",{style:{color:"#7C7C7C"},children:"(Optional)"})]}),e.jsx(l,{sx:{mb:1,width:"100%"},size:"small",fullWidth:!0,type:"text",variant:"outlined",onChange:t=>i("company",t.target.value)})]}),e.jsxs(s,{item:!0,xs:12,sm:12,md:12,lg:12,className:"contact_message_field",children:[e.jsx(a,{mb:1,children:"Message"}),e.jsx(l,{size:"small",sx:{"& legend":{display:"none"},mt:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",placeholder:"Your Message",onChange:t=>i("message",t.target.value),error:!!r.message,helperText:r.message})]}),e.jsx(s,{item:!0,xs:12,className:"submit_btn",children:e.jsx(N,{variant:"contained",type:"submit",disabled:f,children:"Submit"})})]})})})})]})}export{Q as default};