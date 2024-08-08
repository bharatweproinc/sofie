import{W,r as d,j as e}from"./app-D9S7E5aA.js";import{L as G}from"./index-BZV0bxDJ.js";import I from"./Constants-B7LcNi88.js";import{Q as M,n as B}from"./Notifier-BaT5XX0K.js";/* empty css                      */import{J as S}from"./JoiValidator-BgwQl75B.js";/* empty css              */import q from"./View-oiQ6Hazz.js";import{s as z}from"./styled-B1oQRDNm.js";import{P as A}from"./Paper-BDZ22_m9.js";import{T as o}from"./Typography-BgbuKzyS.js";import{L as D}from"./LinearProgress-DoTfWokK.js";import{G as s}from"./Grid-Mc1OKQzi.js";import{B as y}from"./Box-eyelMrRj.js";import{T as c,F as O}from"./TextField-unbpr0jh.js";import{R as U,a as P}from"./RadioGroup-DDkvV-CY.js";import{F as N}from"./FormControlLabel-CwURlBpS.js";import{C as T}from"./Checkbox-bLqkLuaP.js";import{B as H}from"./Button-DE0ixN1f.js";import"./createSvgIcon-IClL6FaQ.js";import"./useIsFocusVisible-DIQC0raj.js";import"./Constants-BDnBD5VF.js";import"./resolveComponentProps-Cp-3FMxt.js";import"./ButtonBase-BzWtGvIE.js";import"./DeleteIcon-zt94IkTD.js";import"./EditIcon-CTDVe59q.js";import"./GlobalStyles-C_YgBRHR.js";import"./SwitchBase-CrLFG3hK.js";const F=I.signupSchema,J=z("div")({backgroundImage:"url(./images/image7.png)",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"}),Q=z(A)({padding:"40px",borderRadius:"12px"});function ve(){var w,j,_,b,C,v;const{data:a,setData:u,post:R,processing:h}=W(I.initSignUpForm),[t,x]=d.useState({}),[g,f]=d.useState(!1);let p=new URLSearchParams(window.location.search).get("role");d.useEffect(()=>{p!==null&&u(r=>({...r,enterpreneur_or_mentor:p}))},[p]);const i=(r,n)=>{x({...t,[r]:S.validateToPlainErrors(n,F[r])}),(r==="confirm_password"||r==="password")&&(a.password!==n&&a.confirm_password!==n?f(!0):f(!1)),u(m=>({...m,[r]:n}))},L=r=>{var E;r.preventDefault();let n=S.validateToPlainErrors(a,F);x(n);const m=(E=Object.keys(n))==null?void 0:E.map((l,k)=>n[l]==null?0:k);if((m==null?void 0:m.length)>0||a.confirm_password!==a.password){t.confirm_password=a.confirm_password!==a.password?"Passwords does not match":"";return}else R(route("register"),{onSuccess:l=>{console.log(l,"sucesss")},onError:l=>{console.log(l.email,"::error"),B.error(l.email,{position:"top-right"})}})};return console.log("test",t.password),e.jsxs(G,{children:[e.jsx(q,{}),e.jsx(o,{sx:{height:"65px"}}),e.jsx(M,{style:{marginTop:"65px"}}),h&&e.jsx(D,{}),e.jsx(J,{children:e.jsx(Q,{elevation:4,sx:{margin:"60px",width:"650px !important"},children:e.jsx("form",{method:"post",onSubmit:L,children:e.jsxs(s,{container:!0,spacing:2,className:"signup_page",children:[e.jsxs(s,{item:!0,xs:12,gap:2,children:[e.jsx(o,{fontWeight:700,sx:{fontSize:"28px"},children:"Get Started"}),e.jsxs(y,{mt:2,children:[e.jsx(o,{fontSize:"14px",color:"#7C7C7C",children:"If you have any questions, need further information, or require assistance with "}),e.jsx(o,{fontSize:"14px",color:"#7C7C7C",children:" our services, we're here to help!"})]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(o,{mb:1,children:"First Name"}),e.jsx(c,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"First Name",onChange:r=>i("full_name",r.target.value),error:!!t.full_name,helperText:t.full_name})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(o,{mb:1,children:"Last Name"}),e.jsx(c,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Last Name",onChange:r=>i("last_name",r.target.value),error:!!t.last_name,helperText:t.last_name})]}),e.jsxs(s,{item:!0,lg:12,sm:12,md:12,xs:12,className:"signup_input_fields",children:[e.jsx(o,{mb:1,children:"Email"}),e.jsx(c,{size:"small",sx:{width:"100%"},fullWidth:!0,variant:"outlined",placeholder:"Email",onChange:r=>i("email",r.target.value),error:!!((w=t.email)!=null&&w[0]),helperText:(j=t.email)==null?void 0:j[0]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(o,{mb:1,children:"Password"}),e.jsx(c,{sx:{width:"100%"},size:"small",fullWidth:!0,type:"password",variant:"outlined",placeholder:"Password",onChange:r=>i("password",r.target.value),error:!!((_=t.password)!=null&&_[0]),helperText:(b=t.password)==null?void 0:b[0]})]}),e.jsxs(s,{item:!0,lg:6,sm:12,md:6,xs:12,className:"signup_input_fields",children:[e.jsx(o,{mb:1,children:"Confirm Password"}),e.jsx(c,{sx:{width:"100%"},size:"small",fullWidth:!0,type:"password",variant:"outlined",placeholder:"Confirm Password",onChange:r=>i("confirm_password",r.target.value),error:!!((C=t.confirm_password)!=null&&C[0])||g,helperText:((v=t.confirm_password)==null?void 0:v[0])||(g?"Passwords does not match":"")})]}),e.jsx(s,{item:!0,xs:12,children:e.jsx(y,{children:e.jsx(o,{fontSize:"14px",color:"#7C7C7C",children:" Password Tip : Password must be 8-16 characters long, and contain one uppercase and one lowercase character and one special character."})})}),e.jsx(s,{item:!0,lg:6,sm:12,md:6,xs:12,textAlign:"start",children:e.jsx(O,{sx:{marginLeft:"-10px"},children:e.jsxs(U,{value:a.enterpreneur_or_mentor,name:"radio-buttons-group",sx:{flexDirection:{sm:"row"},alignItems:{sm:"center",xs:"flex-start"}},onChange:r=>i("enterpreneur_or_mentor",r.target.value),children:[e.jsx(P,{value:"entrepreneur",label:"Entrepreneur",variant:"outlined"}),"Entrepreneur",e.jsx(P,{value:"mentor",label:"Mentor",variant:"outlined"}),"Mentor"]})})}),a.enterpreneur_or_mentor==="mentor"?e.jsx(s,{item:!0,xs:12,className:"custom_checkbox_label",children:e.jsx(N,{required:!0,control:e.jsx(T,{}),label:"I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentor, that upon being matched with an SME through upcie, and upon my acceptance of the match, I will provide the matched SME with up to 10 hours of consultation and guidance completely FREE OF CHARGE within the time period of one year."})}):e.jsx(s,{item:!0,xs:12,className:"custom_checkbox_label",children:e.jsx(N,{required:!0,control:e.jsx(T,{}),label:`I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentee/SME, that upon being matched with a mentor through upcie, and upon my acceptance of the match, I will recieve consultation and guidance from the matched mentor completely FREE OF CHARGE for up to 10 hours per year.
                                    I acknowledge that if I contact mentors that appear on upcie website that I, as a mentee/SME on the upcie platform, have not been matched with, there is no obligation for the mentor to provide consultation and guidance to me.`})}),e.jsx(s,{item:!0,xs:12,mt:2,className:"custom_btn",children:e.jsx(H,{type:"submit",disabled:h,variant:"contained",children:"Sign Up"})})]})})})})]})}export{ve as default};
