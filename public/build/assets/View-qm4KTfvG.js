import{W as E,r as T,j as e}from"./app-Dplc0uf3.js";import{L as _}from"./index-g2spWVAM.js";import f from"./Constants-cHmbCIuI.js";import{J as h}from"./JoiValidator-Cmn5CJNl.js";/* empty css              */import{s as j}from"./styled-DPUcNMJP.js";import{P as N}from"./Paper-BEPZJnKa.js";import{T as n}from"./Typography-rgqgRdni.js";import{L as w}from"./LinearProgress-Bb0LI6Fs.js";import{G as s}from"./Grid-vjwMtywA.js";import{T as m}from"./TextField-BdxlXRtu.js";import{B as P}from"./Button-lhze8pY1.js";import"./Box-RROgCy2L.js";import"./createSvgIcon-DejZ6Cj0.js";import"./useIsFocusVisible-Dgf2pcco.js";import"./Constants-CZ86HO1u.js";import"./resolveComponentProps-DddYsGSb.js";import"./ButtonBase-BEkOmdWC.js";import"./DeleteIcon-BoUjH_Sk.js";import"./EditIcon-B0kl_dQa.js";import"./GlobalStyles-B9uufyTw.js";const g=f.contactSchema,W=j("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),z=j(N)({padding:"40px",borderRadius:"12px"});function $(){var p,u;const{data:b,setData:y,post:C,processing:c}=E(f.initContactForm),[r,d]=T.useState({}),l=(t,i)=>{d({...r,[t]:h.validateToPlainErrors(i,g[t])}),y(o=>({...o,[t]:i}))},v=t=>{var x;t.preventDefault();let i=h.validateToPlainErrors(b,g);d(i);const o=(x=Object.keys(i))==null?void 0:x.map((a,S)=>i[a]==null?0:S);(o==null?void 0:o.length)>0||C(route("landing.contact"),{onSuccess:a=>{console.log(a,"sucesss"),notify.success("Email Sent Successfully")},onError:a=>{console.log(a.email,"::error"),notify.error("Error While Sending Email"),notify.error(a.email,{position:"top-right"})}})};return e.jsxs(_,{children:[e.jsx(n,{sx:{height:"65px"}}),c&&e.jsx(w,{}),e.jsx(W,{sx:{paddingToo:"65px"},children:e.jsx(z,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx("form",{onSubmit:v,className:"contact_page",children:e.jsxs(s,{container:!0,spacing:2,width:"100%",children:[e.jsx(s,{item:!0,xs:12,gap:2,children:e.jsx(n,{fontWeight:700,sx:{fontSize:"28px"},children:"Contact Us"})}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(n,{mb:1,children:"Name"}),e.jsx(m,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"text",variant:"outlined",placeholder:"Name",onChange:t=>l("name",t.target.value),error:!!r.name,helperText:r.name})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsx(n,{mb:1,children:"Email"}),e.jsx(m,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,type:"email",variant:"outlined",placeholder:"Your Email Address",onChange:t=>l("email",t.target.value),error:!!((p=r.email)!=null&&p[0]),helperText:(u=r.email)==null?void 0:u[0]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"contact_input_fields",children:[e.jsxs(n,{mb:1,children:["Company ",e.jsx("span",{style:{color:"#7C7C7C"},children:"(Optional)"})]}),e.jsx(m,{sx:{mb:1,width:"100%"},size:"small",fullWidth:!0,type:"text",variant:"outlined",onChange:t=>l("company",t.target.value)})]}),e.jsxs(s,{item:!0,xs:12,sm:12,md:12,lg:12,className:"contact_message_field",children:[e.jsx(n,{mb:1,children:"Message"}),e.jsx(m,{size:"small",sx:{"& legend":{display:"none"},mt:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",placeholder:"Your Message",onChange:t=>l("message",t.target.value),error:!!r.message,helperText:r.message})]}),e.jsx(s,{item:!0,xs:12,className:"custom_btn",children:e.jsx(P,{variant:"contained",type:"submit",disabled:c,children:"Submit"})})]})})})})]})}export{$ as default};