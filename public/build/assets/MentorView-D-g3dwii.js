import{W as S,R as T,r as m,j as e,a as k}from"./app-USF6nXqr.js";import{L as P}from"./index-BKAKpgU4.js";import a from"./Constants-BnakkeFv.js";import{J as p}from"./JoiValidator-BM-Dia9U.js";/* empty css              */import{i as R}from"./image7-BH7QmizO.js";import{s as g}from"./styled-BI0iwuS-.js";import{P as W}from"./Paper-Dgg1E1zn.js";import{T as n}from"./Typography-Cw-BRMtc.js";import{G as u}from"./Grid-Cbp24C_M.js";import{B as h}from"./Box-B2w83WfV.js";import{F as D,S as F,b as M,T as z}from"./TextField-CjS4WmHo.js";import{M as x}from"./MenuItem-Cdfu3QcV.js";import{B as f}from"./Button-C02E0oeG.js";import"./createSvgIcon-B3ygJXCX.js";import"./useIsFocusVisible-XTueXBCr.js";import"./Constants-CUAIzbjB.js";import"./resolveComponentProps-iZERw0pS.js";import"./ButtonBase-CSobqprw.js";import"./DeleteIcon-CaNE4j3t.js";import"./EditIcon-CoQkOXqE.js";import"./GlobalStyles-W2DSCMcQ.js";import"./dividerClasses-Wtzb1-9E.js";const B=g(W)({padding:"80px",borderRadius:"16px"}),I=g("div")({backgroundImage:`url(${R})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ie({details:j}){const{data:i,setData:y,post:C,processing:b}=S({...a.initDeclineDropdown,...j}),[t,l]=T.useState({}),[v,w]=m.useState(!1),c=(r,o)=>{l({...t,[r]:p.validateToPlainErrors(o,a.declineDropdownSchema[r])}),y(d=>({...d,[r]:o}))},E=r=>{r.preventDefault();let o=p.validateToPlainErrors(i,a.declineDropdownSchema);l(o),!Object.keys(o).some(s=>o[s]!==null)&&C(route("landing.declineMentorReason"),{onSuccess:s=>{console.log(s,"sucesss"),notify.success("Reason sent successfully")},onError:s=>{console.log(s.message,"error"),notify.error("Error while sending reason"),notify.error(s.message)}})};return m.useEffect(()=>{},[]),e.jsxs(P,{children:[e.jsx(n,{sx:{height:"65px"}}),e.jsx(I,{sx:{paddingToo:"65px"},children:e.jsx(B,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(u,{container:!0,children:e.jsxs(u,{item:!0,xs:12,children:[e.jsx(n,{fontSize:"16px",color:"#7C7C7C",children:"We see that you no want to end the match with your mentor. We understand your requirement and would like you to take out time for the feedback regarding the same."}),e.jsxs(n,{fontSize:"16px",color:"#7C7C7C",py:2,children:["Also We will be sending you better matches in the future. If you have any further queries please feel free to let us know about them by ",e.jsx(k,{href:route("landing.contactus"),children:e.jsx(n,{color:"#448EE2",children:"contacting us"})})]}),e.jsx(n,{fontWeight:600,textAlign:"center",py:2,children:"Select the reason from the dropdown"}),e.jsxs(h,{mt:2,class:"custom_input_field",children:[e.jsxs(D,{sx:{width:"100%"},error:!!t.reason,children:[e.jsxs(F,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,size:"small",error:!!t.reason,helperText:t.reason,children:[e.jsx(x,{value:"Mismatch of specific expertise",children:"Mismatch of specific expertise"}),e.jsx(x,{value:"Personality fit and communication style",children:"Personality fit and communication style"}),e.jsx(f,{class:"btn px-4",onClick:()=>w(!0),children:"Add Other Reason"})]}),e.jsx(M,{children:t.reason})]}),v===!0&&e.jsx(z,{value:i.reason,onChange:r=>c("reason",r.target.value),fullWidth:!0,margin:"normal",size:"small",error:!!t.reason,helperText:t.reason})]}),e.jsx(h,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(f,{variant:"contained",disabled:b,color:"primary",onClick:E,children:"Submit"})})]})})})})]})}export{ie as default};
