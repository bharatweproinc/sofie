import{W as T,r as h,j as r,a as L}from"./app-D8U5PHYV.js";import{L as k}from"./index-B5HTynfd.js";import{C as a,J as f}from"./Constants-zcpToc-_.js";import{b as I,F as _}from"./index-Bbf3khKV.js";import{Q as F,n as N}from"./Notifier-CgjPiPe-.js";/* empty css                      *//* empty css              */import{s as w}from"./styled-CRnCZcAN.js";import{P as W}from"./Paper-BYVsVFUH.js";import{T as s}from"./Typography-DQvRHjr3.js";import{G as o}from"./Grid-CVrw6gJm.js";import{T as j}from"./TextField-C2VhdRL3.js";import{B as v}from"./Button-B4v7PQq-.js";import"./Box-q44rX2z1.js";import"./createSvgIcon-BYmNDG3k.js";import"./useIsFocusVisible-BeLHK-v7.js";import"./Constants-CNKGz8Bz.js";import"./resolveComponentProps-C0k-7Ml4.js";import"./useTheme-DGMkIOkT.js";import"./ButtonBase-CEF_sSfC.js";import"./CheckIcon-Dboc3Sid.js";import"./DeleteIcon-BgVYpSI2.js";import"./index-jL8jCZdz.js";import"./DialogContentText-Du7fXOsP.js";import"./GlobalStyles-Cw7zm0XK.js";const z=w(W)({padding:"40px",borderRadius:"12px"}),A=w("div")({backgroundImage:`url(${I})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function lr(){var p,c,x,g;const{data:b,setData:y,post:E,processing:P}=T(a.initLoginForm),[n,l]=h.useState({}),[C,d]=h.useState(!1),m=(t,e)=>{l({...n,[t]:f.validateToPlainErrors(e,a.loginSchema[t])}),y(u=>({...u,[t]:e}))},S=t=>{t.preventDefault();let e=f.validateToPlainErrors(b,a.loginSchema);l(e),!Object.keys(e).some(i=>e[i]!==null)&&E(route("landing.userslogin"),{onSuccess:i=>{console.log(i,"sucesss")},onError:i=>{console.log(i,"error"),N.error(i.email,{position:"top-right"})}})};return r.jsxs(k,{children:[r.jsx(s,{sx:{height:"65px"}}),r.jsx(F,{style:{marginTop:"65px"}}),r.jsx(A,{sx:{paddingToo:"65px"},children:r.jsx("div",{style:{position:"relative",width:"100%"},className:"login_page",children:r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(z,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:r.jsx("form",{onSubmit:S,children:r.jsxs(o,{container:!0,spacing:4,children:[r.jsx(o,{item:!0,xs:12,children:r.jsx(s,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Log In"})}),r.jsxs(o,{item:!0,xs:12,className:"login_input_fields",children:[r.jsx(s,{children:"Email"}),r.jsx(j,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:t=>m("email",t.target.value),error:!!((p=n.email)!=null&&p[0]),helperText:(c=n.email)==null?void 0:c[0]})]}),r.jsxs(o,{item:!0,xs:12,className:"login_input_fields",children:[r.jsx(s,{children:"Password"}),r.jsx(j,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:t=>m("password",t.target.value),error:!!((x=n.password)!=null&&x[0]),helperText:(g=n.password)==null?void 0:g[0]})]}),r.jsx(o,{item:!0,xs:12,children:r.jsx(v,{sx:{p:0},variant:s,onClick:()=>d(!0),children:"Forgot Password"})}),r.jsxs(o,{item:!0,xs:12,className:"custom_btn",children:[r.jsx(v,{variant:"contained",fullWidth:!0,type:"submit",disabled:P,children:"Log In"}),r.jsxs(s,{textAlign:"center",mt:4,children:["Need an account? ",r.jsx(L,{href:route("landing.signup"),children:"Sign up here."})," "]})]})]})})})})})}),r.jsx(_,{open:C,setOpen:d,routeLink:"landing.forgetPassword"})]})}export{lr as default};
