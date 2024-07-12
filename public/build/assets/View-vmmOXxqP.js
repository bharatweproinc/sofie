import{W as E,r as I,j as e,a as h}from"./app-k6o5FfB4.js";import{L}from"./index-CkQs-ZG8.js";import{C as j,J as u}from"./Constants-BkQppPIp.js";import{b as _}from"./image7-BzE-J0jj.js";import{s as v}from"./styled-skvlnTe4.js";import{P as N}from"./Paper-BaIVRNiM.js";import{T as i}from"./Typography-DCD5i9Q3.js";import{G as s}from"./Grid-Qz2XL_E3.js";import{T as g}from"./TextField-C5sNTwdj.js";import{B as W}from"./Button-DsqRWsQp.js";import"./Box-DQ3ZgL5U.js";import"./styled-D2R11-vQ.js";import"./useTheme-BtIqDRep.js";import"./createSvgIcon-BmxnK3CM.js";import"./useIsFocusVisible-DZHH6nj9.js";import"./index-G8SO0pmT.js";import"./PeopleAltOutlined-xT2K8u-S.js";import"./DeleteIcon-BM5-dZfY.js";import"./ButtonBase-CZn9dlVZ.js";import"./Grow-BPGk-PJ6.js";import"./index-azL-rvhK.js";import"./createStyled-Byq4Xn83.js";import"./GlobalStyles-hagZXm3_.js";const f=j.loginSchema,k=v(N)({padding:"40px",borderRadius:"12px"}),z=v("div")({backgroundImage:`url(${_})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function se(){var d,m,p,c;const{data:b,setData:w,post:y,processing:C}=E(j.initLoginForm),[n,a]=I.useState({}),l=(t,r)=>{a({...n,[t]:u.validateToPlainErrors(r,f[t])}),w(o=>({...o,[t]:r}))},P=t=>{var x;t.preventDefault();let r=u.validateToPlainErrors(b,f);a(r);const o=(x=Object.keys(r))==null?void 0:x.map((T,S)=>r[T]==null?0:S);(o==null?void 0:o.length)>0||y(route("landing.userslogin"))};return e.jsxs(L,{children:[e.jsx(i,{sx:{height:"65px"}}),e.jsx(z,{sx:{paddingToo:"65px"},children:e.jsx("div",{style:{position:"relative",width:"100%"},className:"login_page",children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(k,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{onSubmit:P,children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(i,{fontWeight:700,fontSize:"28px",textAlign:"center",children:"Log In"})}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Email"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email Address",onChange:t=>l("email",t.target.value),error:!!((d=n.email)!=null&&d[0]),helperText:(m=n.email)==null?void 0:m[0]})]}),e.jsxs(s,{item:!0,xs:12,className:"login_input_fields",children:[e.jsx(i,{children:"Password"}),e.jsx(g,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,variant:"outlined",type:"password",placeholder:"Password",onChange:t=>l("password",t.target.value),error:!!((p=n.password)!=null&&p[0]),helperText:(c=n.password)==null?void 0:c[0]})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(h,{href:"",children:e.jsx(i,{children:"Forgot Password"})})}),e.jsxs(s,{item:!0,xs:12,className:"submit_btn",children:[e.jsx(W,{variant:"contained",fullWidth:!0,type:"submit",disabled:C,children:"Log In"}),e.jsxs(i,{textAlign:"center",mt:4,children:["Need an account? ",e.jsx(h,{href:route("landing.signup"),children:"Sign up here."})," "]})]})]})})})})})})]})}export{se as default};
