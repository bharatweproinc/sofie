import{W as E,R as k,r as p,j as e,a as T}from"./app-DftAc4KJ.js";import{L as D}from"./index-r2udDuBB.js";import a from"./Constants-DUNVNAot.js";import{J as u}from"./JoiValidator-B4r2zdhv.js";/* empty css              */import{i as P}from"./image7-BH7QmizO.js";import{s as g}from"./styled-BNbNEOMS.js";import{P as R}from"./Paper-e65SrH1Q.js";import{T as n}from"./Typography-C9Os7QLZ.js";import{G as h}from"./Grid-CQ65HRrG.js";import{B as f}from"./Box-BgNDr-2W.js";import{F as W,S as F,b as z,T as B}from"./TextField-cKQ2GjTP.js";import{M as l}from"./MenuItem-D0YBfEQa.js";import{B as x}from"./Button-DqPACiyQ.js";import"./createSvgIcon-CQzKmNwq.js";import"./useIsFocusVisible-BEnDJxRE.js";import"./Constants-DTShq1jx.js";import"./resolveComponentProps-D3EZTNl9.js";import"./ButtonBase-DGjmGQNk.js";import"./DeleteIcon-PiMdJkC9.js";import"./EditIcon-CknnsFkV.js";import"./createStyled-DgBuJVX9.js";import"./GlobalStyles-DN7We6TK.js";import"./dividerClasses-CPR25HH2.js";const I=g(R)({padding:"80px",borderRadius:"16px"}),G=g("div")({backgroundImage:`url(${P})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ae({details:j}){const{data:i,setData:y,post:v,processing:b}=E({...a.initDeclineDropdown,...j}),[o,c]=k.useState({}),[C,S]=p.useState(!1),m=(r,t)=>{c({...o,[r]:u.validateToPlainErrors(t,a.declineDropdownSchema[r])}),y(d=>({...d,[r]:t}))},w=r=>{r.preventDefault();let t=u.validateToPlainErrors(i,a.declineDropdownSchema);c(t),!Object.keys(t).some(s=>t[s]!==null)&&v(route("landing.removeSmeReason"),{onSuccess:s=>{console.log(s,"sucesss"),notify.success("Reason sent successfully")},onError:s=>{console.log(s.message,"error"),notify.error("Error while sending reason"),notify.error(s.message)}})};return p.useEffect(()=>{},[]),e.jsxs(D,{children:[e.jsx(n,{sx:{height:"65px"}}),e.jsx(G,{sx:{paddingToo:"65px"},children:e.jsx(I,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(h,{container:!0,children:e.jsxs(h,{item:!0,xs:12,children:[e.jsx(n,{fontSize:"16px",color:"#7C7C7C",children:"We see that you have ended the match with one of your mentee. We understand your concern and would like you to share your feedback regarding this."}),e.jsxs(n,{fontSize:"16px",color:"#7C7C7C",py:2,children:["We will be sending you better matches in the future. If you have any further queries please feel free to let us know about them by ",e.jsx(T,{href:route("landing.contactus"),children:e.jsx(n,{color:"#448EE2",children:"contacting us"})})]}),e.jsx(n,{fontWeight:600,textAlign:"center",py:2,children:"Select the reason from the dropdown"}),e.jsxs(f,{mt:2,class:"custom_input_field",children:[e.jsxs(W,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(F,{value:i.reason,onChange:r=>m("reason",r.target.value),fullWidth:!0,multiline:!0,placeholder:"Please mention reason",size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(l,{value:"Goal/set target has been achieved",children:"Goal/set target has been achieved"}),e.jsx(l,{value:"Difference in personalities, no chemistry",children:"Difference in personalities, no chemistry"}),e.jsx(l,{value:"Lack of commitment/lack of progress",children:"Lack of commitment/lack of progress"}),e.jsx(x,{class:"btn px-4",onClick:()=>S(!0),children:"Add Other Reason"})]}),e.jsx(z,{children:o.reason})]}),C===!0&&e.jsx(B,{value:i.reason,onChange:r=>m("reason",r.target.value),fullWidth:!0,margin:"normal",size:"small",error:!!o.reason,helperText:o.reason})]}),e.jsx(f,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(x,{variant:"contained",disabled:b,color:"primary",onClick:w,children:"Submit"})})]})})})})]})}export{ae as default};
