import{W as re,r as l,j as e,a as oe,y as T}from"./app-USF6nXqr.js";import{L as te,T as ne}from"./index-BKAKpgU4.js";/* empty css              */import{h as M}from"./moment-C5S46NFB.js";import{D as ie}from"./index-CZswTkYW.js";import{S as ce,C as R}from"./index-ENSmFIrI.js";import w from"./Constants-Dliibcj3.js";import{J as F}from"./JoiValidator-BM-Dia9U.js";import{Q as ae,n as i}from"./Notifier-IDxcesmA.js";/* empty css                      *//* empty css              */import le from"./MatchedSME-CtD_nT3z.js";import{T as o}from"./Typography-Cw-BRMtc.js";import{B as a}from"./Box-B2w83WfV.js";import{B as d}from"./Button-C02E0oeG.js";import{G as n}from"./Grid-Cbp24C_M.js";import{A as de}from"./Avatar-DI3u-R87.js";import{F as me}from"./FormControlLabel--_zY7NJu.js";import{T as k}from"./TextField-CjS4WmHo.js";import"./createSvgIcon-B3ygJXCX.js";import"./useIsFocusVisible-XTueXBCr.js";import"./Constants-CUAIzbjB.js";import"./resolveComponentProps-iZERw0pS.js";import"./ButtonBase-CSobqprw.js";import"./DeleteIcon-CaNE4j3t.js";import"./EditIcon-CoQkOXqE.js";import"./Paper-Dgg1E1zn.js";import"./DialogContentText-C4Lw_TGd.js";import"./DialogTitle-CPvnVMqx.js";import"./NoDataFound-B-uBFXk2.js";import"./TableRow-gTHZgi-a.js";import"./useSlot-Lu7i7vaR.js";import"./styled-BI0iwuS-.js";import"./GlobalStyles-W2DSCMcQ.js";function qe({detail:s}){var z,E,D,P,N;const{data:c,setData:L,post:x,processing:O}=re({...w.initResetPasswordField,...s.user});let _=M(s!=null&&s.updated_at?s.updated_at:s.created_at).clone().add(7,"days"),C=M();const[U,f]=l.useState(!1),[B,h]=l.useState(!1),[I,g]=l.useState(!1),[j,S]=l.useState(c.status),[G,J]=l.useState(c.is_accepted),[Q,$]=l.useState(!1),[m,b]=l.useState({}),[v,y]=l.useState(!1);l.useEffect(()=>{S(s.user.status),J(s.user.is_accepted)},[s.user.status,s.user.is_accepted]);const q=()=>{$(!0)},A=(r,t)=>{b({...m,[r]:F.validateToPlainErrors(t,w.resetPasswordSchema[r])}),(r==="confirm_new_password"||r==="new_password")&&(c.new_password!==t&&c.confirm_new_password!==t?y(!0):y(!1)),L(p=>({...p,[r]:t}))},H=r=>{var W;r.preventDefault();let t=F.validateToPlainErrors(c,w.resetPasswordSchema);b(t);const p=(W=Object.keys(t))==null?void 0:W.map((u,se)=>t[u]==null?0:se);if((p==null?void 0:p.length)>0||c.confirm_new_password!==c.new_password){m.confirm_new_password=c.confirm_new_password!==c.new_password?"Passwords does not match":"";return}else x(route("mentor.resetPassword",s.id),{onSuccess:u=>{console.log(u,"sucesss"),i.success("Password has been updated successfully")},onError:u=>{console.log(u.email,"::error"),i.error("Error while updating password")}})},V=()=>{x(route("landing.deleteMentorUser",s.id),{onSuccess:r=>{i.success("Mentor Data successfully sent for deletion"),console.log(r,"successs"),f(!1)},onError:r=>{i.error("Error in Mentor Delete"),console.log(r,"error"),f(!1)}})},K=r=>{r.preventDefault(),x(route("admin.acceptedMentorProfile",s.id),{onSuccess:t=>{i.success("User has been Live successfully"),console.log(t,"success"),g(!1)},onError:t=>{i.error("Error while user Live"),console.log(t,"error"),g(!1)}})},X=r=>{r.preventDefault(),x(route("admin.rejectedMentorProfile",s.id),{onSuccess:t=>{h(!1),i.success("User has been rejected successfully"),console.log(t,"success")},onError:t=>{h(!1),i.error("Error while rejecting user"),console.log(t,"error")}})},Y=r=>{const t=r.target.checked?1:0;S(t)},Z=r=>{r.preventDefault(),T.post(route("admin.updateMentorStatus",s.id),{userStatus:j,onSuccess:t=>{i.success("Status has been updated successfully"),console.log(t,"success")},onError:t=>{i.error("Error while updating Status"),console.log(t,"error")}})},ee=()=>{T.post(route("admin.addFeaturedMentor",s.id),{onSuccess:r=>{i.success("Added to featured section successfully"),console.log(r,"success")},onError:r=>{i.error("Error while adding"),console.log(r,"error")}})};return console.log("datetewt",s),e.jsxs(te,{auth:s!=null&&s.logged_user?s.logged_user:s.user,children:[e.jsx(o,{sx:{height:"65px"}}),e.jsx(ae,{style:{marginTop:"65px"}}),e.jsxs(a,{p:4,className:"review_mentor",children:[e.jsxs(a,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:{md:"space-between"}},px:4,my:2,children:[e.jsx(o,{fontWeight:700,fontSize:"28px",textAlign:"left",color:"#223049",children:"Mentor Details"}),e.jsxs(a,{display:"flex",sx:{flexDirection:{xs:"column",md:"row"},alignItems:"center"},children:[e.jsxs(a,{className:"custom_btn custom_delete_btn flex flex-col md:flex-row items-center",children:[s&&s.logged_user&&s.logged_user.user_role==="admin"&&G===null&&e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>h(!0),sx:{mr:1,mb:{md:0,xs:1}},className:"delete_account",variant:"contained",children:"Reject"}),e.jsx(d,{onClick:()=>g(!0),sx:{mr:1,mb:{md:0,xs:1}},variant:"contained",children:"Accept"})]}),s&&s.logged_user&&s.logged_user.user_role==="admin"&&e.jsx(d,{onClick:()=>ee(),sx:{mr:1,mb:{md:0,xs:1}},variant:"contained",children:s&&s.featured_mentor=="yes"?"Remove from featured":"Add to featured"}),e.jsx(ne,{placement:"top",title:"Edit will be enable after 7 days",disableHoverListener:s.logged_user.user_role==="admin"||C.isAfter(_),children:e.jsx("span",{children:e.jsx(d,{disabled:!(s.logged_user.user_role==="admin"||C.isAfter(_)),component:oe,href:route("landing.mentordetail",s.user.id),variant:"contained",sx:{mr:1,mb:{md:0,xs:1}},children:"Edit"})})})]}),e.jsx(a,{className:"custom_delete_btn",children:e.jsx(d,{className:"delete_account",onClick:()=>f(!0),variant:"contained",children:"Delete Account"})})]})]}),e.jsxs(a,{p:4,pr:0,sx:{border:"1px solid black",borderRadius:"10px"},children:[e.jsxs(n,{container:!0,spacing:4,children:[e.jsxs(n,{item:!0,xs:12,children:[e.jsx(o,{mb:2,fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Profile Photo"}),e.jsx(de,{alt:"Remy Sharp",src:s.profile_photo,sx:{width:"100px",height:"100px"}})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Contact Name"}),e.jsx(o,{fontSize:"14px",children:s.user.name})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Email"}),e.jsx(o,{fontSize:"14px",children:s.user.email})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Mentored Company"}),e.jsx(o,{fontSize:"14px",children:s.mentored_company})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Qualifications"}),e.jsx(o,{fontSize:"14px",children:s.qualifications})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Industry sectors"}),s.industry_sector.map(r=>e.jsx(o,{fontSize:"14px",children:r},r))]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Functional"}),e.jsx(o,{fontSize:"14px",children:(z=s==null?void 0:s.functional_area)==null?void 0:z.map(r=>e.jsx(o,{fontSize:"14px",children:r},r))})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:4,lg:3,sm:6,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Companies willing to mentor"}),e.jsx(o,{fontSize:"14px",children:s.number_of_companies})]}),e.jsxs(n,{item:!0,px:8,xs:12,md:12,lg:12,sm:12,children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Additional Information"}),e.jsx(o,{fontSize:"14px",children:s.additional_information})]})]}),s.logged_user.user_role==="admin"&&e.jsxs(a,{className:"status_box mt-3",children:[e.jsx(o,{fontWeight:600,fontSize:"18px",textAlign:"left",color:"#7C7C7C",children:"Status"}),e.jsx(me,{control:e.jsx(ce,{checked:j===1}),label:j===1?"Active":"Inactive",onChange:Y}),e.jsx(a,{className:"custom_btn inline",children:e.jsx(d,{onClick:Z,variant:"contained",children:"Save"})})]}),s.logged_user.user_role==="mentor"&&e.jsxs(a,{className:"reset_password_container",children:[e.jsx(a,{className:"custom_btn",children:e.jsx(d,{onClick:()=>q(),variant:"contained",sx:{padding:"4px 20px !important",my:2},children:"Reset Password"})}),Q===!0&&e.jsx("form",{method:"post",onSubmit:H,children:e.jsxs(n,{container:!0,spacing:4,className:"input_fields",children:[e.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[e.jsx(o,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"New Password"}),e.jsx(k,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:c.new_password,variant:"outlined",type:"password",placeholder:"New Password ",onChange:r=>A("new_password",r.target.value),error:!!((E=m.new_password)!=null&&E[0]),helperText:(D=m.new_password)==null?void 0:D[0]})]}),e.jsxs(n,{item:!0,px:2,xs:12,md:3,children:[e.jsx(o,{fontWeight:600,fontSize:"16px",textAlign:"left",color:"#7C7C7C",children:"Confirm New Password"}),e.jsx(k,{size:"small",sx:{mt:1,width:"100%"},fullWidth:!0,value:c.confirm_new_password,variant:"outlined",type:"password",placeholder:"Confirm New Password",onChange:r=>A("confirm_new_password",r.target.value),error:!!((P=m.confirm_new_password)!=null&&P[0])||v,helperText:((N=m.confirm_new_password)==null?void 0:N[0])||(v?"Passwords does not match":"")})]}),e.jsx(n,{item:!0,px:2,xs:12,md:3,className:"custom_btn",children:e.jsx(d,{sx:{mt:{lg:"32px"},padding:"15px 25px !important"},type:"submit",disabled:O,variant:"contained",children:"Save"})})]})})]})]}),e.jsx(le,{companies:s.companies,id:s.id})]}),e.jsx(ie,{open:U,setOpen:f,handleDelete:V}),e.jsx(R,{open:B,setOpen:h,handleSubmit:X,message:`Do you really want to reject ${s.user.name}`}),e.jsx(R,{open:I,setOpen:g,handleSubmit:K,message:`Do you really want to Live ${s.user.name}`})]})}export{qe as default};
