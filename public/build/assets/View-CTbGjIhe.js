import{W as E,r as S,j as e,a as _}from"./app-Cs_eN147.js";import{L as I}from"./index-B0roWpL-.js";import{C as j,J as u}from"./Constants-A8-LtWFY.js";import{b as L}from"./image7-BzE-J0jj.js";import{n as W}from"./Notifier-D7qezLa4.js";import{Q as k}from"./react-toastify.esm-ClnOOq3B.js";/* empty css                      */import{s as v}from"./styled-DRFR0lvA.js";import{P as z}from"./Paper-DkOxz2hy.js";import{T as a}from"./Typography-CrtmTfc4.js";import{G as s}from"./Grid-BWJaPzDY.js";import{T as g}from"./TextField-D9ZzYGKF.js";import{B as N}from"./createSvgIcon-Crw0qiL3.js";import"./Box-CpE8z8Ia.js";import"./useTheme-E7YrQWTk.js";import"./Constants-C9FacJb4.js";import"./ButtonBase-Citz1J_0.js";import"./DeleteIcon-C0S4UW9w.js";import"./index-CIFLHD9d.js";import"./index-BZ3hNmTI.js";import"./GlobalStyles-D2PqT9Gm.js";const f=j.loginSchema,A=v(z)({padding:"40px",borderRadius:"12px"}),B=v("div")({backgroundImage:`url(${L})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function se(){var m,p,c,x;const{data:b,setData:y,post:w,processing:T}=E(j.initLoginForm),[o,l]=S.useState({}),d=(r,t)=>{l({...o,[r]:u.validateToPlainErrors(t,f[r])}),y(n=>({...n,[r]:t}))},C=r=>{var h;r.preventDefault();let t=u.validateToPlainErrors(b,f);l(t);const n=(h=Object.keys(t))==null?void 0:h.map((i,P)=>t[i]==null?0:P);(n==null?void 0:n.length)>0||w(route("login"),{onSuccess:i=>{console.log(i,"sucesss")},onError:i=>{console.log(i.email,"::error"),W.error(i.email,{position:"top-right"})}})};return e.jsxs(I,{children:[e.jsx(a,{sx:{height:"65px"}}),e.jsx(k,{style:{marginTop:"65px"}}),e.jsx(B,{sx:{paddingToo:"65px"},children:e.jsx("div",{style:{position:"relative",width:"100%"},className:"admin_login_page",children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(A,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{onSubmit:C,children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(a,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Admin Log In"})}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(a,{children:"Email"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:r=>d("email",r.target.value),error:!!((m=o.email)!=null&&m[0]),helperText:(p=o.email)==null?void 0:p[0]})]}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(a,{children:"Password"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:r=>d("password",r.target.value),error:!!((c=o.password)!=null&&c[0]),helperText:(x=o.password)==null?void 0:x[0]})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(_,{href:"",children:e.jsx(a,{children:"Forgot Password"})})}),e.jsx(s,{item:!0,xs:12,className:"submit_btn",children:e.jsx(N,{variant:"contained",fullWidth:!0,type:"submit",disabled:T,children:"Log In"})})]})})})})})})]})}export{se as default};