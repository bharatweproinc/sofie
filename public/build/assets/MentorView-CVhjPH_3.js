import{W as E,R as T,r as m,j as e}from"./app-BYDEl0xl.js";import{L as P}from"./index-Dpl5XgTI.js";import a from"./Constants-ByHqw9h3.js";import{J as p}from"./JoiValidator-CoEjxcfl.js";/* empty css              */import{i as k}from"./image7-BH7QmizO.js";import{s as g}from"./styled-DoBPxgOM.js";import{P as R}from"./Paper-CoK1zzZk.js";import{T as n}from"./Typography-BRYbk_7t.js";import{G as u}from"./Grid-B0dnmqxm.js";import{B as h}from"./Box-xtFAA-t4.js";import{F as D,S as F,b as M,T as W}from"./TextField-B6DukKQi.js";import{M as x}from"./MenuItem-D0fD6f9-.js";import{B as f}from"./Button-BkfktQ5k.js";import"./createSvgIcon-rDSedG_N.js";import"./useIsFocusVisible-B7PH3YzB.js";import"./Constants-M9XmFXoA.js";import"./resolveComponentProps-DSY_aGKu.js";import"./ButtonBase-DHHlWAjf.js";import"./DeleteIcon-CfQcD1Ub.js";import"./EditIcon-DHyjVsAF.js";import"./createStyled-BvGIcjLK.js";import"./GlobalStyles-BFf6RPY4.js";import"./dividerClasses-CSwPkDhq.js";const z=g(R)({padding:"80px",borderRadius:"16px"}),B=g("div")({backgroundImage:`url(${k})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ie({details:y}){const{data:i,setData:j,post:v,processing:C}=E({...a.initDeclineDropdown,...y}),[o,l]=T.useState({}),[S,b]=m.useState(!1),c=(r,t)=>{l({...o,[r]:p.validateToPlainErrors(t,a.declineDropdownSchema[r])}),j(d=>({...d,[r]:t}))},w=r=>{r.preventDefault();let t=p.validateToPlainErrors(i,a.declineDropdownSchema);l(t),!Object.keys(t).some(s=>t[s]!==null)&&v(route("landing.declineMentorReason"),{onSuccess:s=>{console.log(s,"sucesss"),notify.success("Reason sent successfully")},onError:s=>{console.log(s.message,"error"),notify.error("Error while sending reason"),notify.error(s.message)}})};return m.useEffect(()=>{},[]),e.jsxs(P,{children:[e.jsx(n,{sx:{height:"65px"}}),e.jsx(B,{sx:{paddingToo:"65px"},children:e.jsx(z,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(u,{container:!0,children:e.jsxs(u,{item:!0,xs:12,children:[e.jsx(n,{fontSize:"16px",color:"#7C7C7C",children:"Thank you for your response!"}),e.jsx(n,{fontSize:"16px",color:"#7C7C7C",py:2,children:"We are so sorry to hear that you have declined this match. We would like to request that you fill in this feedback dropdown indicating the reason why you have declined."}),e.jsx(n,{fontWeight:600,textAlign:"center",py:2,children:"If you have any questions, please feel free to contact us at hello@upcie.net"}),e.jsxs(h,{mt:2,class:"custom_input_field",children:[e.jsxs(D,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(F,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(x,{value:"Mismatch of specific expertise",children:"Mismatch of specific expertise"}),e.jsx(x,{value:"Personality fit and communication style",children:"Personality fit and communication style"}),e.jsx(f,{class:"btn px-4",onClick:()=>b(!0),children:"Add Other Reason"})]}),e.jsx(M,{children:o.reason})]}),S===!0&&e.jsx(W,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,multiline:!0,placeholder:"Please mention reason of decline.",margin:"normal",size:"small",error:!!o.reason,helperText:o.reason})]}),e.jsx(h,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(f,{variant:"contained",disabled:C,color:"primary",onClick:w,children:"Submit"})})]})})})})]})}export{ie as default};