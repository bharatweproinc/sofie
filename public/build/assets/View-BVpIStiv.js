import{W as E,r as y,j as e,a as p}from"./app-TQkCsXfF.js";import{L as S}from"./index-DH7DkYDc.js";import g from"./Constants-CwJypgF-.js";import{b as C}from"./image7-BzE-J0jj.js";import{s as u}from"./styled-CPnESEd9.js";import{P}from"./Paper-CRHg6hZS.js";import{T as i}from"./Typography-CtEPGeuF.js";import{G as s}from"./Grid-DebWUkMh.js";import{T as x}from"./TextField-Car57C6X.js";import{B as T}from"./Button-CAhj9DkT.js";import"./Box-Ci8uPhC9.js";import"./styled-BoSLNyrn.js";import"./useTheme-CUDMdppF.js";import"./createSvgIcon-D5OsMnkY.js";import"./useIsFocusVisible-CQFiR6GA.js";import"./Sofie-logo-DwkGdYjm.js";import"./ButtonBase-BCj4Cnms.js";import"./Grow-J80WXli2.js";import"./index-azL-rvhK.js";import"./DeleteIcon-6lOAXlKx.js";import"./createStyled-BqYKW_8r.js";import"./GlobalStyles-PngTUX46.js";const h=g.loginSchema,I=u(P)({padding:"40px",borderRadius:"12px"}),L=u("div")({backgroundImage:`url(${C})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function Z(){const{data:m,setData:f,post:j,processing:v}=E(g.initLoginForm),[r,l]=y.useState({}),c=(t,o)=>{const d={...m,[t]:o},n=h.extract(t),{error:a}=n.validate(o);if(a)l({...r,[t]:a.message});else{const{[t]:_,...w}=r;l(w)}f(d)},b=t=>{t.preventDefault();const{error:o,value:d}=h.validate(m,{abortEarly:!1});if(o){const n={};o.details.forEach(a=>{n[a.path[0]]=a.message}),l(n)}else console.log("data",d);j(route("login"))};return e.jsxs(S,{children:[e.jsx(i,{sx:{height:"65px"}}),e.jsx(L,{sx:{paddingToo:"65px"},children:e.jsx("div",{style:{position:"relative",width:"100%"},className:"login_page",children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(I,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{onSubmit:b,children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Log In"})}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Email"}),e.jsx(x,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:t=>c("email",t.target.value),error:!!r.email,helperText:r.email})]}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Password"}),e.jsx(x,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:t=>c("password",t.target.value),error:!!r.password,helperText:r.password})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(p,{href:"",children:e.jsx(i,{children:"Forgot Password"})})}),e.jsxs(s,{item:!0,xs:12,className:"submit_btn",children:[e.jsx(T,{variant:"contained",fullWidth:!0,type:"submit",disabled:v,children:"Log In"}),e.jsxs(i,{textAlign:"center",mt:4,children:["Need an account? ",e.jsx(p,{href:route("landing.signup"),children:"Sign up here."})," "]})]})]})})})})})})]})}export{Z as default};