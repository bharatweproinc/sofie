import{W as ee,r as c,j as e,a as se,y as re}from"./app-BZeDboP4.js";import{L as oe,T as te}from"./index-BxYUd69H.js";import{h as A}from"./moment-C5S46NFB.js";/* empty css              *//* empty css              */import{D as ne}from"./index-De9Za-gG.js";import{S as ie,C as T}from"./index-Rr4MPHw1.js";import{C as g,J as F}from"./Constants-imZtGrl4.js";import ae from"./MatchedMentors-BLShFp0q.js";import{Q as ce,n as a}from"./Notifier-pAkxLuuL.js";/* empty css                      */import{B as l}from"./Box-BmskcvSG.js";import{T as r}from"./Typography-24DFrT1s.js";import{G as t}from"./Grid-Y1p9RAGe.js";import{B as m}from"./Button-B-mgSkIX.js";import{A as R}from"./Avatar-DddjJFxf.js";import{F as le}from"./FormControlLabel-DLoi-6Qt.js";import{T as L}from"./TextField-BlszdTO8.js";import"./createSvgIcon-B_E4VpGn.js";import"./useIsFocusVisible-1YtGCQ2b.js";import"./Constants-CejYoJPZ.js";import"./ButtonBase-B0v9e1Za.js";import"./mergeSlotProps-DhZxcaJf.js";import"./CheckIcon-zgyFH_so.js";import"./DeleteIcon-CMp1Z9ma.js";import"./Paper-DW9U2bul.js";import"./DialogContentText-BP3V-3RA.js";import"./DialogTitle-coAviOoC.js";import"./SwitchBase-CTttW8zI.js";import"./useSlot-ByIgqG2C.js";import"./NoDataFound-B6b7eVIZ.js";import"./TableRow-CJGa4eUE.js";import"./styled-fBLH4GEj.js";import"./GlobalStyles-B4WDuu9m.js";const $e=({detail:s})=>{var W,E,N,D;const{data:i,setData:O,post:h,processing:U}=ee({...g.initResetPasswordField,...s.user});let _=A(s!=null&&s.updated_at?s.updated_at:s.created_at).clone().add(7,"days"),w=A();const[k,f]=c.useState(!1),[B,j]=c.useState(!1),[I,p]=c.useState(!1),[M,G]=c.useState(!1),[d,S]=c.useState({}),[y,z]=c.useState(!1),[C,b]=c.useState(i.status),[J,$]=c.useState(i.is_accepted);c.useEffect(()=>{$(s.user.is_accepted),b(s.user.status)},[s.user.status,s.user.is_accepted]);const H=()=>{G(!0)},v=(o,n)=>{S({...d,[o]:F.validateToPlainErrors(n,g.resetPasswordSchema[o])}),(o==="confirm_new_password"||o==="new_password")&&(i.new_password!==n&&i.confirm_new_password!==n?z(!0):z(!1)),O(x=>({...x,[o]:n}))},Q=o=>{var P;o.preventDefault();let n=F.validateToPlainErrors(i,g.resetPasswordSchema);S(n);const x=(P=Object.keys(n))==null?void 0:P.map((u,Z)=>n[u]==null?0:Z);if((x==null?void 0:x.length)>0||i.confirm_new_password!==i.new_password){d.confirm_new_password=i.confirm_new_password!==i.new_password?"Passwords does not match":"";return}else h(route("company.resetPassword",s.id),{onSuccess:u=>{console.log(u,"sucesss"),a.success("Password has been updated successfully")},onError:u=>{console.log(u.email,"::error"),a.error("Error while updating password")}})},V=()=>{h(route("landing.deleteCompanyUser",s.id),{onSuccess:o=>{a.success("Company Data successfully sent for deletion"),console.log(o,"successs"),f(!1)},onError:o=>{a.error("Error in Company Delete"),console.log(o,"error"),f(!1)}})},Y=o=>{o.preventDefault(),h(route("admin.acceptedCompanyProfile",s.id),{onSuccess:n=>{console.log(n,"sucesss"),a.success("User has been Live successfully"),p(!1)},onError:n=>{console.log(n.email,"::error"),a.error("Error while user Live"),p(!1)}}),p(!1)},q=o=>{o.preventDefault(),h(route("admin.rejectedCompanyProfile",s.id),{onSuccess:n=>{console.log(n,"sucesss"),a.success("User has been rejected successfully")},onError:n=>{console.log(n.email,"::error"),a.error("Error while rejecting user")}}),j(!1)},K=o=>{const n=o.target.checked?1:0;b(n)},X=o=>{o.preventDefault(),re.post(route("admin.updateCompanyStatus",s.id),{userStatus:C,onSuccess:n=>{a.success("Status has been updated successfully"),console.log(n,"success")},onError:n=>{a.error("Error while updating Status"),console.log(n,"error")}})};return e.jsxs(oe,{auth:s.logged_user,children:[e.jsx(ce,{style:{marginTop:"53px"}}),e.jsxs(l,{className:"company_detail_review",children:[e.jsx(r,{sx:{height:"65px"}}),e.jsxs(t,{item:!0,xs:12,px:5,pt:4,pb:0,sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:{md:"space-between"}},children:[e.jsx(r,{pl:4,fontWeight:700,fontSize:"28px",color:"#223049",children:"Company Details"}),e.jsxs(l,{sx:{display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"}},children:[e.jsxs(l,{className:"custom_btn custom_delete_btn flex  flex-col sm:flex-row items-center",children:[s&&s.logged_user.user_role==="admin"&&J===null&&e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>j(!0),sx:{mr:1,mb:{md:0,xs:1}},className:"delete_account",variant:"contained",children:"Reject"}),e.jsx(m,{onClick:()=>p(!0),sx:{mr:1,mb:{md:0,xs:1}},variant:"contained",children:"Accept"})]}),e.jsx(te,{placement:"top",title:"Edit will be enabled after 7 days",disableHoverListener:s.logged_user.user_role==="admin"||w.isAfter(_),children:e.jsx("span",{children:e.jsx(m,{disabled:!(s.logged_user.user_role==="admin"||w.isAfter(_)),component:se,href:route("landing.companydetail",s.user.id),type:"submit",variant:"contained",sx:{mr:1,mb:{md:0,xs:1}},children:"Edit"})})})]}),e.jsx(l,{className:"custom_delete_btn",children:e.jsx(m,{className:"delete_account",onClick:()=>f(!0),variant:"contained",children:"Delete Account"})})]})]}),e.jsxs(l,{sx:{py:3,pl:2},className:"company_detail_review_title",children:[e.jsxs(t,{container:!0,sx:{pl:3},children:[e.jsxs(t,{item:!0,xs:12,md:3,mt:2,children:[e.jsx(r,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Profile Photo"}),e.jsx(R,{alt:"company_img",src:s.profile_photo,sx:{width:"100px",height:"100px"}})]}),e.jsxs(t,{item:!0,xs:12,md:3,mt:2,children:[e.jsx(r,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Founder Photo"}),e.jsx(R,{alt:"founder_img",src:s.founder_photo,sx:{width:"100px",height:"100px"}})]})]}),e.jsxs(t,{container:!0,sx:{padding:"24px 24px 0 24px"},children:[e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company Name"}),e.jsx(r,{fontSize:"14px",children:s.company_name})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Email"}),e.jsx(r,{fontSize:"14px",children:s.user.email})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"User Name"}),e.jsx(r,{fontSize:"14px",children:s.user.name})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company UEN"}),e.jsx(r,{fontSize:"14px",children:s.company_uen})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Contact Name"}),e.jsx(r,{fontSize:"14px",children:s.contact_name})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Mobile Number"}),e.jsx(r,{fontSize:"14px",children:s.user.phone})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Position In Company"}),s.position.map(o=>e.jsx(r,{fontSize:"14px",children:o},o))]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Year Founded"}),e.jsx(r,{fontSize:"14px",children:s.founded_year})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Team Size, Number Of Employees"}),s.team_size.map(o=>e.jsx(r,{fontSize:"14px",children:o},o))]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Revenue Size"}),s.current_revenue.map(o=>e.jsx(r,{fontSize:"14px",children:o},o))]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Customers Base Size"}),s.current_customers_base_size.map(o=>e.jsx(r,{fontSize:"14px",children:o},o))]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Industry sector"}),s.industry_sector.map(o=>e.jsx(r,{fontSize:"14px",children:o},o))]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 1"}),e.jsx(r,{fontSize:"14px",children:s.functional_area_1})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 2"}),e.jsx(r,{fontSize:"14px",children:s.functional_area_2})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 3"}),e.jsx(r,{fontSize:"14px",children:s.functional_area_3})]}),e.jsxs(t,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(r,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Current problem"}),e.jsx(r,{fontSize:"14px",children:s.current_problem})]}),e.jsxs(t,{item:!0,xs:12,my:2,pr:15,children:[e.jsx(r,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Additional Information"}),e.jsx(r,{fontSize:"14px",children:s.additional_information})]})]}),s.logged_user.user_role==="admin"&&e.jsxs(l,{className:"status_box",sx:{padding:"0 0 24px 24px"},children:[e.jsx(r,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Status"}),e.jsx(le,{control:e.jsx(ie,{checked:C===1}),label:C===1?"Active":"Inactive",onChange:K}),e.jsx(l,{className:"custom_btn inline",children:e.jsx(m,{onClick:X,variant:"contained",children:"Save"})})]}),s.logged_user.user_role==="entrepreneur"&&e.jsxs(l,{className:"reset_password_container",sx:{padding:"0 0 24px 24px"},children:[e.jsx(l,{className:"custom_btn",children:e.jsx(m,{onClick:()=>H(),variant:"contained",sx:{padding:"4px 20px !important",my:2},children:"Reset Password"})}),M===!0&&e.jsx("form",{method:"post",onSubmit:Q,children:e.jsxs(t,{container:!0,spacing:4,className:"input_fields",children:[e.jsxs(t,{item:!0,px:2,xs:12,md:3,children:[e.jsx(r,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"New Password"}),e.jsx(L,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:i.new_password,variant:"outlined",type:"password",placeholder:"New Password ",onChange:o=>v("new_password",o.target.value),error:!!((W=d.new_password)!=null&&W[0]),helperText:(E=d.new_password)==null?void 0:E[0]})]}),e.jsxs(t,{item:!0,px:2,xs:12,md:3,children:[e.jsx(r,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Confirm New Password"}),e.jsx(L,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:i.confirm_new_password,variant:"outlined",type:"password",placeholder:"Confirm New Password",onChange:o=>v("confirm_new_password",o.target.value),error:!!((N=d.confirm_new_password)!=null&&N[0])||y,helperText:((D=d.confirm_new_password)==null?void 0:D[0])||(y?"Passwords does not match":"")})]}),e.jsx(t,{item:!0,px:2,xs:12,md:3,className:"custom_btn",children:e.jsx(m,{sx:{mt:{lg:"32px"},padding:"15px 25px !important"},type:"submit",disabled:U,variant:"contained",children:"Save"})})]})})]})]}),e.jsx(ae,{mentors:s.mentors})]}),e.jsx(ne,{open:k,setOpen:f,handleDelete:V}),e.jsx(T,{open:B,setOpen:j,handleSubmit:q,message:`Do you really want to reject ${s.company_name}`}),e.jsx(T,{open:I,setOpen:p,handleSubmit:Y,message:`Do you really want to Live ${s.company_name}`})]})};export{$e as default};
