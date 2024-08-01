import{W as y,r as N,j as e}from"./app-xnOB8SgL.js";import{L as T}from"./index-gIYwHJXw.js";import{C as j,J as h}from"./Constants-C2pfJu6-.js";/* empty css              */import{s as f}from"./styled-CLi2CR5M.js";import{P}from"./Paper-88ZO41it.js";import{T as a}from"./Typography-CztQr1d3.js";import{L as w}from"./LinearProgress-wlq68OKm.js";import{G as s}from"./Grid-CO8ZXcNn.js";import{T as l}from"./TextField-BgD-hnV7.js";import{B as S}from"./Button-B3qRJNNd.js";import"./Box-CRJlRAyU.js";import"./createSvgIcon-mDBLJy9M.js";import"./useIsFocusVisible-BmNZ5cF1.js";import"./Constants-BoyhNZUK.js";import"./ButtonBase-DvLoNZob.js";import"./mergeSlotProps-BWFK5ri3.js";import"./CheckIcon-yqhZpLHy.js";import"./DeleteIcon-w2neWDcR.js";import"./GlobalStyles-fqPCFFwB.js";const g=j.contactSchema,z=f("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),E=f(P)({padding:"40px",borderRadius:"12px"});function Z(){var p,u;const{data:m,setData:b,post:W,processing:d}=y(j.initContactForm),[r,c]=N.useState({}),n=(t,i)=>{c({...r,[t]:h.validateToPlainErrors(i,g[t])}),b(o=>({...o,[t]:i}))},v=t=>{var x;t.preventDefault();let i=h.validateToPlainErrors(m,g);c(i);const o=(x=Object.keys(i))==null?void 0:x.map((C,_)=>i[C]==null?0:_);(o==null?void 0:o.length)>0||console.log("data",m)};return e.jsxs(T,{children:[e.jsx(a,{sx:{height:"65px"}}),d&&e.jsx(w,{}),e.jsx(z,{sx:{paddingToo:"65px"},children:e.jsx(E,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx("form",{onSubmit:v,className:"contact_page",children:e.jsxs(s,{container:!0,spacing:2,width:"100%",children:[e.jsx(s,{item:!0,xs:12,gap:2,children:e.jsx(a,{fontWeight:700,sx:{fontSize:"28px"},children:"Contact Us"})}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Name"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",placeholder:"Name",onChange:t=>n("name",t.target.value),error:!!r.name,helperText:r.name})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Email"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"email",variant:"outlined",placeholder:"Your Email Address",onChange:t=>n("email",t.target.value),error:!!((p=r.email)!=null&&p[0]),helperText:(u=r.email)==null?void 0:u[0]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:12,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Phone Number"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",value:m.phone_number||"",placeholder:"Your Phone Number",onChange:t=>n("phone_number",t.target.value.replace(/\D/,"").slice(0,10)),error:!!r.phone_number,helperText:r.phone_number})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsxs(a,{mb:1,children:["Company ",e.jsx("span",{style:{color:"#7C7C7C"},children:"(Optional)"})]}),e.jsx(l,{sx:{mb:1,width:"100%"},size:"small",fullWidth:!0,type:"text",variant:"outlined",onChange:t=>n("company",t.target.value)})]}),e.jsxs(s,{item:!0,xs:12,sm:12,md:12,lg:12,className:"contact_message_field",children:[e.jsx(a,{mb:1,children:"Message"}),e.jsx(l,{size:"small",sx:{"& legend":{display:"none"},mt:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",placeholder:"Your Message",onChange:t=>n("message",t.target.value),error:!!r.message,helperText:r.message})]}),e.jsx(s,{item:!0,xs:12,className:"custom_btn",children:e.jsx(S,{variant:"contained",type:"submit",disabled:d,children:"Submit"})})]})})})})]})}export{Z as default};
