import{W as E,R as k,r as m,j as e,a as T}from"./app-USF6nXqr.js";import{L as R}from"./index-BKAKpgU4.js";import a from"./Constants-BnakkeFv.js";import{J as p}from"./JoiValidator-BM-Dia9U.js";/* empty css              */import{i as W}from"./image7-BH7QmizO.js";import{s as g}from"./styled-BI0iwuS-.js";import{P as z}from"./Paper-Dgg1E1zn.js";import{T as s}from"./Typography-Cw-BRMtc.js";import{G as h}from"./Grid-Cbp24C_M.js";import{B as u}from"./Box-B2w83WfV.js";import{F as D,S as F,b as P,T as B}from"./TextField-CjS4WmHo.js";import{M as x}from"./MenuItem-Cdfu3QcV.js";import{B as f}from"./Button-C02E0oeG.js";import"./createSvgIcon-B3ygJXCX.js";import"./useIsFocusVisible-XTueXBCr.js";import"./Constants-CUAIzbjB.js";import"./resolveComponentProps-iZERw0pS.js";import"./ButtonBase-CSobqprw.js";import"./DeleteIcon-CaNE4j3t.js";import"./EditIcon-CoQkOXqE.js";import"./GlobalStyles-W2DSCMcQ.js";import"./dividerClasses-Wtzb1-9E.js";const I=g(z)({padding:"80px",borderRadius:"16px"}),L=g("div")({backgroundImage:`url(${W})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ie({details:j}){const{data:i,setData:C,post:y,processing:b}=E({...a.initDeclineDropdown,...j}),[o,l]=k.useState({}),[v,w]=m.useState(!1),c=(r,t)=>{l({...o,[r]:p.validateToPlainErrors(t,a.declineDropdownSchema[r])}),C(d=>({...d,[r]:t}))},S=r=>{r.preventDefault();let t=p.validateToPlainErrors(i,a.declineDropdownSchema);l(t),!Object.keys(t).some(n=>t[n]!==null)&&y(route("landing.declineSmeReason"),{onSuccess:n=>{console.log(n,"sucesss"),notify.success("Reason sent successfully")},onError:n=>{console.log(n.message,"error"),notify.error("Error while sending reason"),notify.error(n.message)}})};return m.useEffect(()=>{},[]),e.jsxs(R,{children:[e.jsx(s,{sx:{height:"65px"}}),e.jsx(L,{sx:{paddingToo:"65px"},children:e.jsx(I,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(h,{container:!0,children:e.jsxs(h,{item:!0,xs:12,children:[e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"We sent an email with a matching mentor to one of the functional areas where you needed mentorship."}),e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"We can see that you have declined the initiation and hence we need to know your feedback regarding the same."}),e.jsxs(s,{fontSize:"16px",color:"#7C7C7C",py:2,children:["We will be sending you better matches in the future. If you have any further queries please feel free to let us know about them by ",e.jsx(T,{href:route("landing.contactus"),children:e.jsx(s,{color:"#448EE2",children:"contacting us"})})]}),e.jsx(s,{fontWeight:600,textAlign:"center",py:2,children:"Select the reason from the dropdown"}),e.jsxs(u,{mt:2,class:"custom_input_field",children:[e.jsxs(D,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(F,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(x,{value:"Lack of experience in mentoring",children:"Lack of experience in mentoring"}),e.jsx(x,{value:"Conflict of interest",children:"Conflict of interest"}),e.jsx(f,{class:"btn px-4",onClick:()=>w(!0),children:"Add Other Reason"})]}),e.jsx(P,{children:o.reason})]}),v===!0&&e.jsx(B,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,margin:"normal",size:"small",error:!!o.reason,helperText:o.reason})]}),e.jsx(u,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(f,{variant:"contained",disabled:b,color:"primary",onClick:S,children:"Submit"})})]})})})})]})}export{ie as default};
