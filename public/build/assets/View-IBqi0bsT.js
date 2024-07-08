import{W as b,r as w,j as e,a as E}from"./app-CDNeLb_W.js";import{L as y}from"./index-CaPIgWFs.js";import h from"./Constants-DySCjMl7.js";import{s as g}from"./styled-Clr_JlSj.js";import{P as S}from"./Paper-D0qc-hj1.js";import{T as i}from"./Typography-Cm2FpKxb.js";import{G as s}from"./Grid-D9qxNBM4.js";import{T as c}from"./TextField-g4XzA0ay.js";import{B as C}from"./Button-CwWt_B40.js";import"./Box-Buj_iJaJ.js";import"./styled-Dav1juSj.js";import"./createSvgIcon-PGsMbdJl.js";import"./useIsFocusVisible-DYSQ1h4Z.js";import"./Sofie-logo-BmD0NDr5.js";import"./ButtonBase-CLI8luso.js";import"./Grow-DUXuLKjK.js";import"./index-azL-rvhK.js";import"./DeleteIcon-BAOYX_uX.js";import"./createStyled-hx1tNmna.js";import"./GlobalStyles-BVwjwI3x.js";const x=h.loginSchema,T=g(S)({padding:"40px",borderRadius:"12px"}),P=g("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",height:"896px",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function X(){const{data:m,setData:u,post:I,processing:f}=b(h.initLoginForm),[r,l]=w.useState({}),p=(t,a)=>{const d={...m,[t]:a},n=x.extract(t),{error:o}=n.validate(a);if(o)l({...r,[t]:o.message});else{const{[t]:L,...v}=r;l(v)}u(d)},j=t=>{t.preventDefault();const{error:a,value:d}=x.validate(m,{abortEarly:!1});if(a){const n={};a.details.forEach(o=>{n[o.path[0]]=o.message}),l(n)}else console.log("data",d)};return e.jsxs(y,{children:[e.jsx(i,{sx:{height:"65px"}}),e.jsx(P,{sx:{paddingToo:"65px"},children:e.jsx("div",{style:{position:"relative"},className:"login_page",children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 200px)",paddingTop:"100px",paddingBottom:"100px"},children:e.jsx(T,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{onSubmit:j,children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Log In"})}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Email"}),e.jsx(c,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:t=>p("email",t.target.value),error:!!r.email,helperText:r.email})]}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Password"}),e.jsx(c,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:t=>p("password",t.target.value),error:!!r.password,helperText:r.password})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(i,{children:"Forgot Password"})}),e.jsxs(s,{item:!0,xs:12,className:"submit_btn",children:[e.jsx(C,{variant:"contained",fullWidth:!0,type:"submit",disabled:f,children:"Log In"}),e.jsxs(i,{textAlign:"center",mt:4,children:["Need an account? ",e.jsx(E,{href:route("landing.signup"),children:"Sign up here."})," "]})]})]})})})})})})]})}export{X as default};
