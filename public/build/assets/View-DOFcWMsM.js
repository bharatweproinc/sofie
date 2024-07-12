import{W as y,r as N,j as e}from"./app-k6o5FfB4.js";import{L as T}from"./index-CkQs-ZG8.js";import{C as g,J as h}from"./Constants-BkQppPIp.js";import{s as j}from"./styled-skvlnTe4.js";import{P as w}from"./Paper-BaIVRNiM.js";import{T as a}from"./Typography-DCD5i9Q3.js";import{G as s}from"./Grid-Qz2XL_E3.js";import{T as l}from"./TextField-C5sNTwdj.js";import{B as P}from"./Button-DsqRWsQp.js";import"./Box-DQ3ZgL5U.js";import"./styled-D2R11-vQ.js";import"./useTheme-BtIqDRep.js";import"./createSvgIcon-BmxnK3CM.js";import"./useIsFocusVisible-DZHH6nj9.js";import"./index-G8SO0pmT.js";import"./PeopleAltOutlined-xT2K8u-S.js";import"./DeleteIcon-BM5-dZfY.js";import"./ButtonBase-CZn9dlVZ.js";import"./Grow-BPGk-PJ6.js";import"./index-azL-rvhK.js";import"./createStyled-Byq4Xn83.js";import"./GlobalStyles-hagZXm3_.js";const x=g.contactSchema,S=j("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),z=j(w)({padding:"40px",borderRadius:"12px"});function $(){var c,p;const{data:m,setData:f,post:E,processing:b}=y(g.initContactForm),[r,d]=N.useState({}),n=(t,i)=>{d({...r,[t]:h.validateToPlainErrors(i,x[t])}),f(o=>({...o,[t]:i}))},v=t=>{var u;t.preventDefault();let i=h.validateToPlainErrors(m,x);d(i);const o=(u=Object.keys(i))==null?void 0:u.map((C,_)=>i[C]==null?0:_);(o==null?void 0:o.length)>0||console.log("data",m)};return e.jsxs(T,{children:[e.jsx(a,{sx:{height:"65px"}}),e.jsx(S,{sx:{paddingToo:"65px"},children:e.jsx(z,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx("form",{onSubmit:v,className:"contact_page",children:e.jsxs(s,{container:!0,spacing:2,width:"100%",children:[e.jsx(s,{item:!0,xs:12,gap:2,children:e.jsx(a,{fontWeight:700,sx:{fontSize:"28px"},children:"Contact Us"})}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Name"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",placeholder:"Name",onChange:t=>n("name",t.target.value),error:!!r.name,helperText:r.name})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Email"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"email",variant:"outlined",placeholder:"Your Email Address",onChange:t=>n("email",t.target.value),error:!!((c=r.email)!=null&&c[0]),helperText:(p=r.email)==null?void 0:p[0]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:12,xs:12,className:"contact_input_fields",children:[e.jsx(a,{mb:1,children:"Phone Number"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",value:m.phone_number||"",placeholder:"Your Phone Number",onChange:t=>n("phone_number",t.target.value.replace(/\D/,"").slice(0,10)),error:!!r.phone_number,helperText:r.phone_number})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsxs(a,{mb:1,children:["Company ",e.jsx("span",{style:{color:"#7C7C7C"},children:"(Optional)"})]}),e.jsx(l,{sx:{mb:1,width:"100%"},size:"small",fullWidth:!0,type:"text",variant:"outlined",onChange:t=>n("company",t.target.value)})]}),e.jsxs(s,{item:!0,xs:12,sm:12,md:12,lg:12,className:"contact_message_field",children:[e.jsx(a,{mb:1,children:"Message"}),e.jsx(l,{size:"small",sx:{"& legend":{display:"none"},mt:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",placeholder:"Your Message",onChange:t=>n("message",t.target.value),error:!!r.message,helperText:r.message})]}),e.jsx(s,{item:!0,xs:12,className:"submit_btn",children:e.jsx(P,{variant:"contained",type:"submit",disabled:b,children:"Submit"})})]})})})})]})}export{$ as default};
