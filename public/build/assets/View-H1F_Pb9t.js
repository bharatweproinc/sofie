import{W as E,r as S,j as e,a as _}from"./app-k6o5FfB4.js";import{L as I}from"./index-CkQs-ZG8.js";import{C as j,J as u}from"./Constants-BkQppPIp.js";import{b as L}from"./image7-BzE-J0jj.js";import{Q as W,n as k}from"./ReactToastify-D04vZh4A.js";import{s as v}from"./styled-skvlnTe4.js";import{P as z}from"./Paper-BaIVRNiM.js";import{T as a}from"./Typography-DCD5i9Q3.js";import{G as s}from"./Grid-Qz2XL_E3.js";import{T as g}from"./TextField-C5sNTwdj.js";import{B as N}from"./Button-DsqRWsQp.js";import"./Box-DQ3ZgL5U.js";import"./styled-D2R11-vQ.js";import"./useTheme-BtIqDRep.js";import"./createSvgIcon-BmxnK3CM.js";import"./useIsFocusVisible-DZHH6nj9.js";import"./index-G8SO0pmT.js";import"./PeopleAltOutlined-xT2K8u-S.js";import"./DeleteIcon-BM5-dZfY.js";import"./ButtonBase-CZn9dlVZ.js";import"./Grow-BPGk-PJ6.js";import"./index-azL-rvhK.js";import"./createStyled-Byq4Xn83.js";import"./GlobalStyles-hagZXm3_.js";const f=j.loginSchema,A=v(z)({padding:"40px",borderRadius:"12px"}),B=v("div")({backgroundImage:`url(${L})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ae(){var d,p,c,x;const{data:b,setData:y,post:w,processing:T}=E(j.initLoginForm),[o,l]=S.useState({}),m=(t,r)=>{l({...o,[t]:u.validateToPlainErrors(r,f[t])}),y(n=>({...n,[t]:r}))},C=t=>{var h;t.preventDefault();let r=u.validateToPlainErrors(b,f);l(r);const n=(h=Object.keys(r))==null?void 0:h.map((i,P)=>r[i]==null?0:P);(n==null?void 0:n.length)>0||w(route("login"),{onSuccess:i=>{console.log(i,"sucesss")},onError:i=>{console.log(i.email,"::error"),k.error(i.email,{position:"top-right"})}})};return e.jsxs(I,{children:[e.jsx(a,{sx:{height:"65px"}}),e.jsx(W,{style:{marginTop:"65px"}}),e.jsx(B,{sx:{paddingToo:"65px"},children:e.jsx("div",{style:{position:"relative",width:"100%"},className:"admin_login_page",children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(A,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{onSubmit:C,children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(a,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Admin Log In"})}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(a,{children:"Email"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:t=>m("email",t.target.value),error:!!((d=o.email)!=null&&d[0]),helperText:(p=o.email)==null?void 0:p[0]})]}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(a,{children:"Password"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:t=>m("password",t.target.value),error:!!((c=o.password)!=null&&c[0]),helperText:(x=o.password)==null?void 0:x[0]})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(_,{href:"",children:e.jsx(a,{children:"Forgot Password"})})}),e.jsx(s,{item:!0,xs:12,className:"submit_btn",children:e.jsx(N,{variant:"contained",fullWidth:!0,type:"submit",disabled:T,children:"Log In"})})]})})})})})})]})}export{ae as default};