import{W as E,o as T,r as m,j as e,a as k}from"./app-CbVxOp-5.js";import{L as P}from"./index-BdIhcGQ9.js";import a from"./Constants-Dya8mPyr.js";import{J as p}from"./JoiValidator-bqxKGb8w.js";/* empty css              */import{b as W}from"./image7-BzE-J0jj.js";import{s as g}from"./styled-DAidm1OM.js";import{P as z}from"./Paper-ym_8SLSW.js";import{T as s}from"./Typography-BVSEdrlA.js";import{G as h}from"./Grid-D00HPMl1.js";import{B as u}from"./Box-B9DN_TfT.js";import{F as D,S as F,b as M,T as B}from"./TextField-xhEOd7G5.js";import{M as x}from"./MenuItem-DLgbuFbx.js";import{B as f}from"./Button-DS8LwTjE.js";import"./createSvgIcon-C-Tlpzv0.js";import"./useIsFocusVisible-4B47jJ-d.js";import"./Constants-B5OC7VfF.js";import"./resolveComponentProps-Dmmv_Exf.js";import"./ButtonBase-gw_Yg41x.js";import"./DeleteIcon-TA7ONO67.js";import"./EditIcon-Bs2MD2eE.js";import"./GlobalStyles-CpP1AVRC.js";import"./dividerClasses-wMPA6kdy.js";const I=g(z)({padding:"80px",borderRadius:"16px"}),R=g("div")({backgroundImage:`url(${W})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ie({details:j}){const{data:i,setData:y,post:C,processing:b}=E({...a.initDeclineDropdown,...j}),[o,l]=T.useState({});console.log("details",i);const[w,v]=m.useState(!1),c=(r,t)=>{l({...o,[r]:p.validateToPlainErrors(t,a.declineDropdownSchema[r])}),y(d=>({...d,[r]:t}))},S=r=>{r.preventDefault();let t=p.validateToPlainErrors(i,a.declineDropdownSchema);l(t),!Object.keys(t).some(n=>t[n]!==null)&&(console.log("data",i),C(route("landing.declineMentorReason"),{onSuccess:n=>{console.log(n,"sucesss"),notify.success("Reason sent successfully")},onError:n=>{console.log(n.message,"error"),notify.error("Error while sending reason"),notify.error(n.message)}}))};return m.useEffect(()=>{},[]),e.jsxs(P,{children:[e.jsx(s,{sx:{height:"65px"}}),e.jsx(R,{sx:{paddingToo:"65px"},children:e.jsx(I,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(h,{container:!0,children:e.jsxs(h,{item:!0,xs:12,children:[e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"We sent an email with a matching mentee to one of the expert areas where you wanted to offer mentorship."}),e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"We can see that you have declined the initiation and hence we need to know your feedback regarding the same."}),e.jsxs(s,{fontSize:"16px",color:"#7C7C7C",py:2,children:["We will be sending you better matches in the future. If you have any further queries please feel free to let us know about them by ",e.jsx(k,{href:route("landing.contactus"),children:e.jsx(s,{color:"#448EE2",children:"contacting us"})})]}),e.jsx(s,{fontWeight:600,textAlign:"center",py:2,children:"Select the reason from the dropdown"}),e.jsxs(u,{mt:2,class:"custom_input_field",children:[e.jsxs(D,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(F,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(x,{value:"Mismatch of specific expertise",children:"Mismatch of specific expertise"}),e.jsx(x,{value:"Personality fit and communication style",children:"Personality fit and communication style"}),e.jsx(f,{class:"btn px-4",onClick:()=>v(!0),children:"Add Other Reason"})]}),e.jsx(M,{children:o.reason})]}),w===!0&&e.jsx(B,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,margin:"normal",size:"small",error:!!o.reason,helperText:o.reason})]}),e.jsx(u,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(f,{variant:"contained",disabled:b,color:"primary",onClick:S,children:"Submit"})})]})})})})]})}export{ie as default};
