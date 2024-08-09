import{W as se,r as a,j as e,a as re,y as W}from"./app-DFh_S5pj.js";import{L as te,T as oe}from"./index-DuewYFZa.js";/* empty css              */import{h as M}from"./moment-C5S46NFB.js";import{D as ne}from"./index-CF0CcDUQ.js";import{S as ie,C as T}from"./index-DZptEEx9.js";import w from"./Constants-CYzArIOr.js";import{J as R}from"./JoiValidator-CeiZpskf.js";import{Q as le,n as i}from"./Notifier-BFuqS3OZ.js";/* empty css                      *//* empty css              */import ce from"./MatchedSME-CQSaaoeP.js";import{T as t}from"./Typography-DoIvtada.js";import{B as c}from"./Box-CmaVRIZX.js";import{B as d}from"./Button-DC_YsFPt.js";import{G as n}from"./Grid-DXLy6LFi.js";import{A as ae}from"./Avatar-BaCQACDt.js";import{F as de}from"./FormControlLabel-CDroNwSF.js";import{T as F}from"./TextField-z6e4S99s.js";import"./createSvgIcon-D9cdEVMm.js";import"./useIsFocusVisible-d-pLdxOP.js";import"./Constants-DWkRREPV.js";import"./resolveComponentProps-CfhH5UVo.js";import"./ButtonBase-nUfU2krB.js";import"./DeleteIcon-O2oK0E-b.js";import"./EditIcon-BTQ-eZuo.js";import"./Paper-CmXIsYLu.js";import"./DialogContentText-C1dSRvc7.js";import"./DialogTitle-B957esd2.js";import"./SwitchBase-DSXbDIn2.js";import"./NoDataFound-BvYBUmYT.js";import"./TableRow-BKiewtsc.js";import"./useSlot-B45i7bdc.js";import"./GlobalStyles-BF2_V7eF.js";function $e({detail:s}){var z,E,D,P;const{data:l,setData:k,post:u,processing:L}=se({...w.initResetPasswordField,...s.user});let _=M(s!=null&&s.updated_at?s.updated_at:s.created_at).clone().add(7,"days"),C=M();const[O,f]=a.useState(!1),[U,h]=a.useState(!1),[B,g]=a.useState(!1),[j,S]=a.useState(l.status),[I,G]=a.useState(l.is_accepted),[J,Q]=a.useState(!1),[m,b]=a.useState({}),[v,y]=a.useState(!1);a.useEffect(()=>{S(s.user.status),G(s.user.is_accepted)},[s.user.status,s.user.is_accepted]);const $=()=>{Q(!0)},A=(r,o)=>{b({...m,[r]:R.validateToPlainErrors(o,w.resetPasswordSchema[r])}),(r==="confirm_new_password"||r==="new_password")&&(l.new_password!==o&&l.confirm_new_password!==o?y(!0):y(!1)),k(p=>({...p,[r]:o}))},q=r=>{var N;r.preventDefault();let o=R.validateToPlainErrors(l,w.resetPasswordSchema);b(o);const p=(N=Object.keys(o))==null?void 0:N.map((x,ee)=>o[x]==null?0:ee);if((p==null?void 0:p.length)>0||l.confirm_new_password!==l.new_password){m.confirm_new_password=l.confirm_new_password!==l.new_password?"Passwords does not match":"";return}else u(route("mentor.resetPassword",s.id),{onSuccess:x=>{console.log(x,"sucesss"),i.success("Password has been updated successfully")},onError:x=>{console.log(x.email,"::error"),i.error("Error while updating password")}})},H=()=>{u(route("landing.deleteMentorUser",s.id),{onSuccess:r=>{i.success("Mentor Data successfully sent for deletion"),console.log(r,"successs"),f(!1)},onError:r=>{i.error("Error in Mentor Delete"),console.log(r,"error"),f(!1)}})},V=r=>{r.preventDefault(),u(route("admin.acceptedMentorProfile",s.id),{onSuccess:o=>{i.success("User has been Live successfully"),console.log(o,"success"),g(!1)},onError:o=>{i.error("Error while user Live"),console.log(o,"error"),g(!1)}})},K=r=>{r.preventDefault(),u(route("admin.rejectedMentorProfile",s.id),{onSuccess:o=>{h(!1),i.success("User has been rejected successfully"),console.log(o,"success")},onError:o=>{h(!1),i.error("Error while rejecting user"),console.log(o,"error")}})},X=r=>{const o=r.target.checked?1:0;S(o)},Y=r=>{r.preventDefault(),W.post(route("admin.updateMentorStatus",s.id),{userStatus:j,onSuccess:o=>{i.success("Status has been updated successfully"),console.log(o,"success")},onError:o=>{i.error("Error while updating Status"),console.log(o,"error")}})},Z=()=>{W.post(route("admin.addFeaturedMentor",s.id),{onSuccess:r=>{i.success("Added to featured section successfully"),console.log(r,"success")},onError:r=>{i.error("Error while adding"),console.log(r,"error")}})};return console.log("datetewt",s),e.jsxs(te,{auth:s!=null&&s.logged_user?s.logged_user:s.user,children:[e.jsx(t,{sx:{height:"65px"}}),e.jsx(le,{style:{marginTop:"65px"}}),e.jsxs(c,{p:4,className:"review_mentor",children:[e.jsxs(c,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:{md:"space-between"}},px:4,my:2,children:[e.jsx(t,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Mentor Details"}),e.jsxs(c,{display:"flex",sx:{flexDirection:{xs:"column",md:"row"},alignItems:"center"},children:[e.jsxs(c,{className:"custom_btn custom_delete_btn flex flex-col md:flex-row items-center",children:[s&&s.logged_user&&s.logged_user.user_role==="admin"&&I===null&&e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>h(!0),sx:{mr:1,mb:{md:0,xs:1}},className:"delete_account",variant:"contained",children:"Reject"}),e.jsx(d,{onClick:()=>g(!0),sx:{mr:1,mb:{md:0,xs:1}},variant:"contained",children:"Accept"})]}),s&&s.logged_user&&s.logged_user.user_role==="admin"&&e.jsx(d,{onClick:()=>Z(),sx:{mr:1,mb:{md:0,xs:1}},variant:"contained",children:s&&s.featured_mentor=="yes"?"Remove from featured":"Add to featured"}),e.jsx(oe,{placement:"top",title:"Edit will be enable after 7 days",disableHoverListener:s.logged_user.user_role==="admin"||C.isAfter(_),children:e.jsx("span",{children:e.jsx(d,{disabled:!(s.logged_user.user_role==="admin"||C.isAfter(_)),component:re,href:route("landing.mentordetail",s.user.id),variant:"contained",sx:{mr:1,mb:{md:0,xs:1}},children:"Edit"})})})]}),e.jsx(c,{className:"custom_delete_btn",children:e.jsx(d,{className:"delete_account",onClick:()=>f(!0),variant:"contained",children:"Delete Account"})})]})]}),e.jsxs(c,{p:4,pr:0,sx:{border:"1px solid black",borderRadius:"10px"},children:[e.jsxs(n,{container:!0,spacing:4,children:[e.jsxs(n,{item:!0,xs:12,children:[e.jsx(t,{mb:2,fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Profile Photo"}),e.jsx(ae,{alt:"Remy Sharp",src:s.profile_photo,sx:{width:"100px",height:"100px"}})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Contact Name"}),e.jsx(t,{fontSize:"14px",children:s.user.name})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Mobile Number"}),e.jsx(t,{fontSize:"14px",children:s.user.phone})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Email"}),e.jsx(t,{fontSize:"14px",children:s.user.email})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Mentored Company"}),e.jsx(t,{fontSize:"14px",children:s.mentored_company})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Qualifications"}),e.jsx(t,{fontSize:"14px",children:s.qualifications})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Industry sectors"}),s.industry_sector.map(r=>e.jsx(t,{fontSize:"14px",children:r},r))]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Functional"}),e.jsx(t,{fontSize:"14px",children:s.functional_area})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Companies willing to mentor"}),e.jsx(t,{fontSize:"14px",children:s.number_of_companies})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:12,lg:12,sm:12,children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Additional Information"}),e.jsx(t,{fontSize:"14px",children:s.additional_information})]})]}),s.logged_user.user_role==="admin"&&e.jsxs(c,{className:"status_box mt-3",children:[e.jsx(t,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Status"}),e.jsx(de,{control:e.jsx(ie,{checked:j===1}),label:j===1?"Active":"Inactive",onChange:X}),e.jsx(c,{className:"custom_btn inline",children:e.jsx(d,{onClick:Y,variant:"contained",children:"Save"})})]}),s.logged_user.user_role==="mentor"&&e.jsxs(c,{className:"reset_password_container",children:[e.jsx(c,{className:"custom_btn",children:e.jsx(d,{onClick:()=>$(),variant:"contained",sx:{padding:"4px 20px !important",my:2},children:"Reset Password"})}),J===!0&&e.jsx("form",{method:"post",onSubmit:q,children:e.jsxs(n,{container:!0,spacing:4,className:"input_fields",children:[e.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[e.jsx(t,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"New Password"}),e.jsx(F,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:l.new_password,variant:"outlined",type:"password",placeholder:"New Password ",onChange:r=>A("new_password",r.target.value),error:!!((z=m.new_password)!=null&&z[0]),helperText:(E=m.new_password)==null?void 0:E[0]})]}),e.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[e.jsx(t,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Confirm New Password"}),e.jsx(F,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:l.confirm_new_password,variant:"outlined",type:"password",placeholder:"Confirm New Password",onChange:r=>A("confirm_new_password",r.target.value),error:!!((D=m.confirm_new_password)!=null&&D[0])||v,helperText:((P=m.confirm_new_password)==null?void 0:P[0])||(v?"Passwords does not match":"")})]}),e.jsx(n,{item:!0,px:2,xs:12,md:3,className:"custom_btn",children:e.jsx(d,{sx:{mt:{lg:"32px"},padding:"15px 25px !important"},type:"submit",disabled:L,variant:"contained",children:"Save"})})]})})]})]}),e.jsx(ce,{companies:s.companies,id:s.id})]}),e.jsx(ne,{open:O,setOpen:f,handleDelete:H}),e.jsx(T,{open:U,setOpen:h,handleSubmit:K,message:`Do you really want to reject ${s.user.name}`}),e.jsx(T,{open:B,setOpen:g,handleSubmit:V,message:`Do you really want to Live ${s.user.name}`})]})}export{$e as default};
