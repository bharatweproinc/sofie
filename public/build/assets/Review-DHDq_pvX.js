import{W as K,r as l,j as e,a as N}from"./app-TtNZfeus.js";import{L as Q,T as X}from"./index-CZ-ujiRm.js";import{h as A}from"./moment-C5S46NFB.js";/* empty css              *//* empty css              */import{D as Z}from"./index-HGYRF8za.js";import{S as ee,C as P}from"./index-DXO_cDxk.js";import{C as p,J as D}from"./Constants-DEyh12rX.js";import{B as i}from"./Box-BpjTqymi.js";import{T as s}from"./Typography-B9MTfJao.js";import{G as r}from"./Grid-DiI-GVpP.js";import{B as c}from"./createSvgIcon-iSiY3fuE.js";import{A as E}from"./Avatar-DmdsIu3H.js";import{F as se}from"./FormControlLabel-ChhZqZ9u.js";import{T}from"./TextField-G7BlH7Dq.js";import"./useTheme-D744Xnz2.js";import"./Constants-CJEYmYf5.js";import"./ButtonBase-CRJKjNgH.js";import"./DeleteIcon-CiNVDLuq.js";import"./index-CPZpOXAc.js";import"./index-BZ3hNmTI.js";import"./Paper-BvlIHG5c.js";import"./DialogTitle-CEf19nTg.js";import"./SwitchBase-Bs6bRWw0.js";import"./styled-wdbCJ4kC.js";import"./GlobalStyles-BK0UrLZL.js";const Pe=({detail:t})=>{var y,z,b,v;let h=A(t!=null&&t.updated_at?t.updated_at:t.created_at).clone().add(7,"days"),u=A();const{data:o,setData:F,post:ne,processing:R}=K(p.initResetPasswordField),[I,f]=l.useState(!1),[O,j]=l.useState(!1),[B,C]=l.useState(!1),[L,k]=l.useState(!1),[m,g]=l.useState({}),[_,w]=l.useState(!1),[d,U]=l.useState(1),G=()=>{k(!0)},S=(n,a)=>{g({...m,[n]:D.validateToPlainErrors(a,p.resetPasswordSchema[n])}),(n==="confirm_new_password"||n==="new_password")&&(o.new_password!==a&&o.confirm_new_password!==a?w(!0):w(!1)),F(x=>({...x,[n]:a}))},J=n=>{var W;n.preventDefault();let a=D.validateToPlainErrors(o,p.resetPasswordSchema);g(a);const x=(W=Object.keys(a))==null?void 0:W.map((Y,q)=>a[Y]==null?0:q);if((x==null?void 0:x.length)>0||o.confirm_new_password!==o.new_password){m.confirm_new_password=o.confirm_new_password!==o.new_password?"Passwords does not match":"";return}else console.log("dtaa",o)},$=()=>{console.log("userId",t.id)},H=()=>{console.log("rejected")},M=()=>{console.log("confirm")},V=()=>{U(d===1?0:1)};return e.jsxs(Q,{auth:t.logged_user,children:[e.jsxs(i,{className:"company_detail_review",children:[e.jsx(s,{sx:{height:"65px"}}),e.jsxs(r,{item:!0,xs:12,px:5,pt:4,pb:0,sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(s,{pl:4,fontWeight:700,fontSize:"28px",color:"#223049",children:"Company Details"}),e.jsxs(i,{display:"flex",alignItems:"center",children:[e.jsxs(i,{className:"custom_btn custom_delete_btn",children:[t&&t.logged_user.user_role==="admin"&&e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>j(!0),sx:{mr:1},className:"delete_account",variant:"contained",children:"Reject"}),e.jsx(c,{onClick:()=>C(!0),sx:{mr:1},variant:"contained",children:"Accept"})]}),e.jsx(X,{placement:"top",title:"Edit will be enable after 7 days",disableInteractive:!0,disableHoverListener:!!((t==null?void 0:t.logged_user.user_role)=="admin"||u.isAfter(h)),children:e.jsx(c,{disabled:!((t==null?void 0:t.logged_user.user_role)=="admin"||u.isAfter(h)),component:N,href:route("landing.companydetail",t.user.id),type:"submit",variant:"contained",children:"Edit"})})]}),e.jsx(i,{className:"custom_delete_btn ml-2",children:e.jsx(c,{className:"delete_account",onClick:()=>f(!0),variant:"contained",children:"Delete Account"})})]})]}),e.jsxs(i,{sx:{py:3,pl:2},className:"company_detail_review_title",children:[e.jsxs(r,{container:!0,sx:{pl:3},children:[e.jsxs(r,{item:!0,xs:3,mt:2,children:[e.jsx(s,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Profile Photo"}),e.jsx(E,{alt:"company_img",src:t.profile_photo,sx:{width:"100px",height:"100px"}})]}),e.jsxs(r,{item:!0,xs:3,mt:2,children:[e.jsx(s,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Founder Photo"}),e.jsx(E,{alt:"founder_img",src:t.founder_photo,sx:{width:"100px",height:"100px"}})]})]}),e.jsxs(r,{container:!0,sx:{padding:"24px 24px 0 24px"},children:[e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company Name"}),e.jsx(s,{fontSize:"14px",children:t.company_name})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Email"}),e.jsx(s,{fontSize:"14px",children:t.user.email})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"User Name"}),e.jsx(s,{fontSize:"14px",children:t.user.name})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company UEN"}),e.jsx(s,{fontSize:"14px",children:t.company_uen})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Contact Name"}),e.jsx(s,{fontSize:"14px",children:t.contact_name})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Mobile Number"}),e.jsx(s,{fontSize:"14px",children:t.user.phone})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Position In Company"}),t.position.map(n=>e.jsx(s,{fontSize:"14px",children:n},n))]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Year Founded"}),e.jsx(s,{fontSize:"14px",children:t.founded_year})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Team Size, Number Of Employees"}),t.team_size.map(n=>e.jsx(s,{fontSize:"14px",children:n},n))]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Revenue Size"}),t.current_revenue.map(n=>e.jsx(s,{fontSize:"14px",children:n},n))]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Customers Base Size"}),t.current_customers_base_size.map(n=>e.jsx(s,{fontSize:"14px",children:n},n))]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Industry sector"}),t.industry_sector.map(n=>e.jsx(s,{fontSize:"14px",children:n},n))]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 1"}),e.jsx(s,{fontSize:"14px",children:t.functional_area_1})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 2"}),e.jsx(s,{fontSize:"14px",children:t.functional_area_2})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 3"}),e.jsx(s,{fontSize:"14px",children:t.functional_area_3})]}),e.jsxs(r,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(s,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Current problem"}),e.jsx(s,{fontSize:"14px",children:t.current_problem})]}),e.jsxs(r,{item:!0,xs:12,my:2,pr:15,children:[e.jsx(s,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Additional Information"}),e.jsx(s,{fontSize:"14px",children:t.additional_information})]})]}),t.logged_user.user_role==="admin"&&e.jsxs(i,{className:"status_box",sx:{padding:"0 0 24px 24px"},children:[e.jsx(s,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Status"}),e.jsx(se,{control:e.jsx(ee,{checked:d===1}),label:d===1?"Active":"Inactive",onChange:n=>V("status",n.target.checked)}),e.jsx(i,{className:"custom_btn inline",children:e.jsx(c,{component:N,href:route("admin.updateCompanyStatus",t.id),variant:"contained",children:"Save"})})]}),t.logged_user.user_role==="entrepreneur"&&e.jsxs(i,{className:"reset_password_container",sx:{padding:"0 0 24px 24px"},children:[e.jsx(i,{className:"custom_btn",children:e.jsx(c,{onClick:()=>G(),variant:"contained",sx:{padding:"4px 20px !important",my:2},children:"Reset Password"})}),L===!0&&e.jsx("form",{method:"post",onSubmit:J,children:e.jsxs(r,{container:!0,spacing:4,className:"input_fields",children:[e.jsxs(r,{item:!0,px:2,xs:12,md:3,children:[e.jsx(s,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"New Password"}),e.jsx(T,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:o.new_password,variant:"outlined",type:"password",placeholder:"New Password ",onChange:n=>S("new_password",n.target.value),error:!!((y=m.new_password)!=null&&y[0]),helperText:(z=m.new_password)==null?void 0:z[0]})]}),e.jsxs(r,{item:!0,px:2,xs:12,md:3,children:[e.jsx(s,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Confirm New Password"}),e.jsx(T,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:o.confirm_new_password,variant:"outlined",type:"password",placeholder:"Confirm New Password",onChange:n=>S("confirm_new_password",n.target.value),error:!!((b=m.confirm_new_password)!=null&&b[0])||_,helperText:((v=m.confirm_new_password)==null?void 0:v[0])||(_?"Passwords does not match":"")})]}),e.jsx(r,{item:!0,px:2,xs:12,md:3,className:"custom_btn",children:e.jsx(c,{sx:{mt:{lg:"32px"},padding:"15px 25px !important"},type:"submit",disabled:R,variant:"contained",children:"Save"})})]})})]})]})]}),e.jsx(Z,{open:I,setOpen:f,handleDelete:$}),e.jsx(P,{open:O,setOpen:j,handleSubmit:H,message:`Do you really want to reject ${t.company_name}`}),e.jsx(P,{open:B,setOpen:C,handleSubmit:M,message:`Do you really want to Live ${t.company_name}`})]})};export{Pe as default};
