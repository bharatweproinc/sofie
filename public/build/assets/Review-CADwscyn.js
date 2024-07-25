import{W as X,r as c,j as s,a as Z,y as ee}from"./app-D8U5PHYV.js";import{L as se,T as re}from"./index-B5HTynfd.js";import{h as D}from"./moment-C5S46NFB.js";/* empty css              *//* empty css              */import{D as oe}from"./index-EpmcCDlS.js";import{S as te,C as A}from"./index-CpQ6Zgjn.js";import{C as g,J as T}from"./Constants-zcpToc-_.js";import ne from"./MatchedMentors-seh0jctT.js";import{B as l}from"./Box-q44rX2z1.js";import{T as r}from"./Typography-DQvRHjr3.js";import{G as n}from"./Grid-CVrw6gJm.js";import{B as m}from"./Button-B4v7PQq-.js";import{A as F}from"./Avatar-BgF2brGp.js";import{F as ie}from"./FormControlLabel-DNuqLjj4.js";import{T as R}from"./TextField-C2VhdRL3.js";import"./createSvgIcon-BYmNDG3k.js";import"./useIsFocusVisible-BeLHK-v7.js";import"./Constants-CNKGz8Bz.js";import"./resolveComponentProps-C0k-7Ml4.js";import"./useTheme-DGMkIOkT.js";import"./ButtonBase-CEF_sSfC.js";import"./CheckIcon-Dboc3Sid.js";import"./DeleteIcon-BgVYpSI2.js";import"./index-jL8jCZdz.js";import"./Paper-BYVsVFUH.js";import"./DialogContentText-Du7fXOsP.js";import"./DialogTitle-6G51ulxV.js";import"./SwitchBase-DHdegC7H.js";import"./NoDataFound-BEh0G7Op.js";import"./TableRow-BRksEAKz.js";import"./GlobalStyles-Cw7zm0XK.js";const Be=({detail:o})=>{var v,W,E,N;const{data:a,setData:L,post:u,processing:O}=X({...g.initResetPasswordField,...o.user});let _=D(o!=null&&o.updated_at?o.updated_at:o.created_at).clone().add(7,"days"),S=D();const[U,h]=c.useState(!1),[k,f]=c.useState(!1),[B,j]=c.useState(!1),[I,M]=c.useState(!1),[d,w]=c.useState({}),[y,z]=c.useState(!1),[C,G]=c.useState(a.status),J=()=>{M(!0)},b=(t,i)=>{w({...d,[t]:T.validateToPlainErrors(i,g.resetPasswordSchema[t])}),(t==="confirm_new_password"||t==="new_password")&&(a.new_password!==i&&a.confirm_new_password!==i?z(!0):z(!1)),L(p=>({...p,[t]:i}))},$=t=>{var P;t.preventDefault();let i=T.validateToPlainErrors(a,g.resetPasswordSchema);w(i);const p=(P=Object.keys(i))==null?void 0:P.map((x,Q)=>i[x]==null?0:Q);if((p==null?void 0:p.length)>0||a.confirm_new_password!==a.new_password){d.confirm_new_password=a.confirm_new_password!==a.new_password?"Passwords does not match":"";return}else u(route("company.resetPassword",o.id),{onSuccess:x=>{console.log(x,"sucesss"),notify.success("Password has been updated successfully")},onError:x=>{console.log(x.email,"::error"),notify.error("Error while updating password")}})},H=()=>{u(route("admin.deleteCompanyUser",o.id),{onSuccess:t=>{notify.success("Company Data has been deleted successfully"),console.log(t,"successs"),h(!1)},onError:t=>{notify.error("Error in Company Delete"),console.log(t,"error"),h(!1)}})},V=t=>{t.preventDefault(),u(route("admin.acceptedCompanyProfile",o.id),{onSuccess:i=>{console.log(i,"sucesss"),notify.error("User has been Live successfully")},onError:i=>{console.log(i.email,"::error"),notify.error("Error while user Live")}}),j(!1)},Y=()=>{e.preventDefault(),u(route("admin.rejectedCompanyProfile",o.id),{onSuccess:t=>{console.log(t,"sucesss"),notify.error("User has been rejected successfully")},onError:t=>{console.log(t.email,"::error"),notify.error("Error while rejecting user")}}),f(!1)},q=t=>{const i=t.target.checked?1:0;G(i)},K=t=>{t.preventDefault(),ee.post(route("admin.updateCompanyStatus",o.id),{userStatus:C,onSuccess:i=>{notify.success("Status has been updated successfully"),console.log(i,"success")},onError:i=>{notify.error("Error while updating Status"),console.log(i,"error")}})};return s.jsxs(se,{auth:o.logged_user,children:[s.jsxs(l,{className:"company_detail_review",children:[s.jsx(r,{sx:{height:"65px"}}),s.jsxs(n,{item:!0,xs:12,px:5,pt:4,pb:0,sx:{display:"flex",justifyContent:"space-between"},children:[s.jsx(r,{pl:4,fontWeight:700,fontSize:"28px",color:"#223049",children:"Company Details"}),s.jsxs(l,{display:"flex",alignItems:"center",children:[s.jsxs(l,{className:"custom_btn custom_delete_btn",children:[o&&o.logged_user.user_role==="admin"&&a.is_accepted===null&&s.jsxs(s.Fragment,{children:[s.jsx(m,{onClick:()=>f(!0),sx:{mr:1},className:"delete_account",variant:"contained",children:"Reject"}),s.jsx(m,{onClick:()=>j(!0),sx:{mr:1},variant:"contained",children:"Accept"})]}),s.jsx(re,{placement:"top",title:"Edit will be enabled after 7 days",disableHoverListener:o.logged_user.user_role==="admin"||S.isAfter(_),children:s.jsx("span",{children:s.jsx(m,{disabled:!(o.logged_user.user_role==="admin"||S.isAfter(_)),component:Z,href:route("landing.companydetail",o.user.id),type:"submit",variant:"contained",children:"Edit"})})})]}),s.jsx(l,{className:"custom_delete_btn ml-2",children:s.jsx(m,{className:"delete_account",onClick:()=>h(!0),variant:"contained",children:"Delete Account"})})]})]}),s.jsxs(l,{sx:{py:3,pl:2},className:"company_detail_review_title",children:[s.jsxs(n,{container:!0,sx:{pl:3},children:[s.jsxs(n,{item:!0,xs:3,mt:2,children:[s.jsx(r,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Profile Photo"}),s.jsx(F,{alt:"company_img",src:o.profile_photo,sx:{width:"100px",height:"100px"}})]}),s.jsxs(n,{item:!0,xs:3,mt:2,children:[s.jsx(r,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Founder Photo"}),s.jsx(F,{alt:"founder_img",src:o.founder_photo,sx:{width:"100px",height:"100px"}})]})]}),s.jsxs(n,{container:!0,sx:{padding:"24px 24px 0 24px"},children:[s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company Name"}),s.jsx(r,{fontSize:"14px",children:o.company_name})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Email"}),s.jsx(r,{fontSize:"14px",children:o.user.email})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"User Name"}),s.jsx(r,{fontSize:"14px",children:o.user.name})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company UEN"}),s.jsx(r,{fontSize:"14px",children:o.company_uen})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Contact Name"}),s.jsx(r,{fontSize:"14px",children:o.contact_name})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Mobile Number"}),s.jsx(r,{fontSize:"14px",children:o.user.phone})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Position In Company"}),o.position.map(t=>s.jsx(r,{fontSize:"14px",children:t},t))]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Year Founded"}),s.jsx(r,{fontSize:"14px",children:o.founded_year})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Team Size, Number Of Employees"}),o.team_size.map(t=>s.jsx(r,{fontSize:"14px",children:t},t))]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Revenue Size"}),o.current_revenue.map(t=>s.jsx(r,{fontSize:"14px",children:t},t))]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Customers Base Size"}),o.current_customers_base_size.map(t=>s.jsx(r,{fontSize:"14px",children:t},t))]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Industry sector"}),o.industry_sector.map(t=>s.jsx(r,{fontSize:"14px",children:t},t))]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 1"}),s.jsx(r,{fontSize:"14px",children:o.functional_area_1})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 2"}),s.jsx(r,{fontSize:"14px",children:o.functional_area_2})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 3"}),s.jsx(r,{fontSize:"14px",children:o.functional_area_3})]}),s.jsxs(n,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[s.jsx(r,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Current problem"}),s.jsx(r,{fontSize:"14px",children:o.current_problem})]}),s.jsxs(n,{item:!0,xs:12,my:2,pr:15,children:[s.jsx(r,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Additional Information"}),s.jsx(r,{fontSize:"14px",children:o.additional_information})]})]}),o.logged_user.user_role==="admin"&&s.jsxs(l,{className:"status_box",sx:{padding:"0 0 24px 24px"},children:[s.jsx(r,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Status"}),s.jsx(ie,{control:s.jsx(te,{checked:C===1}),label:C===1?"Active":"Inactive",onChange:q}),s.jsx(l,{className:"custom_btn inline",children:s.jsx(m,{onClick:K,variant:"contained",children:"Save"})})]}),o.logged_user.user_role==="entrepreneur"&&s.jsxs(l,{className:"reset_password_container",sx:{padding:"0 0 24px 24px"},children:[s.jsx(l,{className:"custom_btn",children:s.jsx(m,{onClick:()=>J(),variant:"contained",sx:{padding:"4px 20px !important",my:2},children:"Reset Password"})}),I===!0&&s.jsx("form",{method:"post",onSubmit:$,children:s.jsxs(n,{container:!0,spacing:4,className:"input_fields",children:[s.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[s.jsx(r,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"New Password"}),s.jsx(R,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:a.new_password,variant:"outlined",type:"password",placeholder:"New Password ",onChange:t=>b("new_password",t.target.value),error:!!((v=d.new_password)!=null&&v[0]),helperText:(W=d.new_password)==null?void 0:W[0]})]}),s.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[s.jsx(r,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Confirm New Password"}),s.jsx(R,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:a.confirm_new_password,variant:"outlined",type:"password",placeholder:"Confirm New Password",onChange:t=>b("confirm_new_password",t.target.value),error:!!((E=d.confirm_new_password)!=null&&E[0])||y,helperText:((N=d.confirm_new_password)==null?void 0:N[0])||(y?"Passwords does not match":"")})]}),s.jsx(n,{item:!0,px:2,xs:12,md:3,className:"custom_btn",children:s.jsx(m,{sx:{mt:{lg:"32px"},padding:"15px 25px !important"},type:"submit",disabled:O,variant:"contained",children:"Save"})})]})})]})]}),s.jsx(ne,{})]}),s.jsx(oe,{open:U,setOpen:h,handleDelete:H}),s.jsx(A,{open:k,setOpen:f,handleSubmit:Y,message:`Do you really want to reject ${o.company_name}`}),s.jsx(A,{open:B,setOpen:j,handleSubmit:V,message:`Do you really want to Live ${o.company_name}`})]})};export{Be as default};