import{W as k,r as _,j as e}from"./app-CmR6fL3e.js";import{L as G}from"./index-xkc01NH5.js";import{C as F,J as v}from"./Constants-umcizgPx.js";import{n as W}from"./Notifier-BvJFJnlE.js";import{Q as M}from"./ReactToastify-D5W30qjD.js";import{s as P}from"./styled-B9JY362h.js";import{P as B}from"./Paper-Cfkr0OwE.js";import{T as a}from"./Typography-BfF8vS_5.js";import{G as o}from"./Grid-BvrZz3IP.js";import{B as q}from"./Box-DEbHx_he.js";import{T as p,F as A}from"./TextField-Dd9JnuDn.js";import{R as D,a as C,F as E}from"./RadioGroup-BVed8Y-w.js";import{C as y}from"./Checkbox-BycspcQv.js";import{B as L}from"./Button-MfZbRaay.js";import"./styled-BWHJBEGv.js";import"./useTheme-BcVuZ8J4.js";import"./createSvgIcon-DK4ciudq.js";import"./useIsFocusVisible-C6juXUpB.js";import"./index-CytHeiEa.js";import"./index-BZ3hNmTI.js";import"./PeopleAltOutlined-D7ANh5LF.js";import"./DeleteIcon-By_Z5zCE.js";import"./ButtonBase-CmtdNuZP.js";import"./GlobalStyles-cwKaDKyJ.js";const S=F.signupSchema,O=P("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),H=P(B)({padding:"40px",borderRadius:"12px"});function xe(){var h,x,g,f,w,j;const{data:s,setData:I,post:T,processing:N}=k(F.initSignUpForm),[r,c]=_.useState({}),[d,u]=_.useState(!1),i=(t,n)=>{c({...r,[t]:v.validateToPlainErrors(n,S[t])}),(t==="confirm_password"||t==="password")&&(s.password!==n&&s.confirm_password!==n?u(!0):u(!1)),I(m=>({...m,[t]:n}))},R=t=>{var b;t.preventDefault();let n=v.validateToPlainErrors(s,S);c(n);const m=(b=Object.keys(n))==null?void 0:b.map((l,z)=>n[l]==null?0:z);if((m==null?void 0:m.length)>0||s.confirm_password!==s.password){r.confirm_password=s.confirm_password!==s.password?"Passwords does not match":"";return}else T(route("register"),{onSuccess:l=>{console.log(l,"sucesss")},onError:l=>{console.log(l.email,"::error"),W.error(l.email,{position:"top-right"})}})};return e.jsxs(G,{children:[e.jsx(a,{sx:{height:"65px"}}),e.jsx(M,{style:{marginTop:"65px"}}),e.jsx(O,{children:e.jsx(H,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{method:"post",onSubmit:R,children:e.jsxs(o,{container:!0,spacing:2,className:"signup_page",children:[e.jsxs(o,{item:!0,xs:12,gap:2,children:[e.jsx(a,{fontWeight:700,sx:{fontSize:"28px"},children:"Get Started"}),e.jsxs(q,{mt:2,children:[e.jsx(a,{fontSize:"14px",color:"#7C7C7C",children:"If you have any questions, need further information, or require assistance with "}),e.jsx(a,{fontSize:"14px",color:"#7C7C7C",children:" our services, we're here to help!"})]})]}),e.jsxs(o,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(a,{mb:1,children:"Full Name"}),e.jsx(p,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Full Name",onChange:t=>i("full_name",t.target.value),error:!!r.full_name,helperText:r.full_name})]}),e.jsxs(o,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(a,{mb:1,children:"Phone"}),e.jsx(p,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Phone",type:"text",value:s.phone||"",onChange:t=>i("phone",t.target.value.replace(/\D/,"").slice(0,10)),error:!!r.phone,helperText:r.phone})]}),e.jsxs(o,{item:!0,lg:12,sm:12,md:12,xs:12,className:"signup_input_fields",children:[e.jsx(a,{mb:1,children:"Email"}),e.jsx(p,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email",onChange:t=>i("email",t.target.value),error:!!((h=r.email)!=null&&h[0]),helperText:(x=r.email)==null?void 0:x[0]})]}),e.jsxs(o,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(a,{mb:1,children:"Password"}),e.jsx(p,{sx:{width:"100%"},size:"small",fullWidth:!0,type:"password",variant:"outlined",placeholder:"Password",onChange:t=>i("password",t.target.value),error:!!((g=r.password)!=null&&g[0]),helperText:(f=r.password)==null?void 0:f[0]})]}),e.jsxs(o,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(a,{mb:1,children:"Confirm Password"}),e.jsx(p,{sx:{width:"100%"},size:"small",fullWidth:!0,type:"password",variant:"outlined",placeholder:"Confirm Password",onChange:t=>i("confirm_password",t.target.value),error:!!((w=r.confirm_password)!=null&&w[0])||d,helperText:((j=r.confirm_password)==null?void 0:j[0])||(d?"Passwords does not match":"")})]}),e.jsx(o,{item:!0,lg:6,sm:12,md:6,xs:12,textAlign:"start",children:e.jsx(A,{sx:{marginLeft:"-10px"},children:e.jsxs(D,{value:s.enterpreneur_or_mentor,name:"radio-buttons-group",sx:{flexDirection:{sm:"row"},alignItems:{sm:"center",xs:"flex-start"}},onChange:t=>i("enterpreneur_or_mentor",t.target.value),children:[e.jsx(C,{value:"entrepreneur",label:"Entrepreneur",variant:"outlined"}),"Entrepreneur",e.jsx(C,{value:"mentor",label:"Mentor",variant:"outlined"}),"Mentor"]})})}),s.enterpreneur_or_mentor==="mentor"?e.jsx(o,{item:!0,xs:12,className:"custom_checkbox_label",children:e.jsx(E,{required:!0,control:e.jsx(y,{}),label:"I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentor, that upon being matched with a SME through upcie, and upon my acceptance of the match, I will provide the matched SME with up to a total of 10 hours of consultation and guidance completely FREE OF CHARGE within the time period of 1 year"})}):e.jsx(o,{item:!0,xs:12,className:"custom_checkbox_label",children:e.jsx(E,{required:!0,control:e.jsx(y,{}),label:`I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentee/SME, that upon being matched with a mentor through upcie, and upon my acceptance of the match, I will recieve consultation and guidance from the matched mentor completely FREE OF CHARGE for the duration of up to 1 year.
                                  I acknowledge that if I contact mentors that appear on upcie website that I, as a mentee/SME on the upcie platform, have not been matched with, there is no obligation for the mentor to provide consultation and guidance completely FREE OF CHARGE.`})}),e.jsx(o,{item:!0,xs:12,mt:2,className:"submit_btn",children:e.jsx(L,{type:"submit",disabled:N,variant:"contained",children:"Sign Up"})})]})})})})]})}export{xe as default};
