import{W as D,R as P,r as a,j as e}from"./app-CTEIVAUj.js";import{L as R}from"./index-BLTq-tUC.js";import l from"./Constants-0ZWriDAQ.js";import{J as h}from"./JoiValidator-CLEXX908.js";/* empty css              */import{i as z}from"./image7-BH7QmizO.js";import{s as g}from"./styled-MpcYgwIY.js";import{P as B}from"./Paper-Ci3fQQCu.js";import{T as n}from"./Typography-8C00Iwvt.js";import{G as u}from"./Grid-DmeqGSJ5.js";import{B as f}from"./Box-CQu9e-mY.js";import{F,S as W,b as I,T as G}from"./TextField-N88hfhGk.js";import{M as c}from"./MenuItem-DlxBizmy.js";import{B as x}from"./Button--ZhgW4K3.js";import"./createSvgIcon-Be81n78Q.js";import"./useIsFocusVisible-DegGo7m3.js";import"./Constants-Byrcnu-o.js";import"./resolveComponentProps-DeL8zTD9.js";import"./ButtonBase-Bmiv4-14.js";import"./DeleteIcon-C8cpiJgO.js";import"./EditIcon-BgCKaEUK.js";import"./createStyled-T5YtkJrE.js";import"./GlobalStyles-BzAJJt-Z.js";import"./dividerClasses-Bv0xS3r0.js";const L=g(B)({padding:"80px",borderRadius:"16px"}),M=g("div")({backgroundImage:`url(${z})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ce({details:j}){const{data:i,setData:y,post:v,processing:C}=D({...l.initDeclineDropdown,...j}),[o,m]=P.useState({}),[S,b]=a.useState(!1),[w,k]=a.useState(!0),d=(r,t)=>{m({...o,[r]:h.validateToPlainErrors(t,l.declineDropdownSchema[r])}),y(p=>({...p,[r]:t}))},E=()=>{b(!0),k(!1)},T=r=>{r.preventDefault();let t=h.validateToPlainErrors(i,l.declineDropdownSchema);m(t),!Object.keys(t).some(s=>t[s]!==null)&&v(route("landing.removeMentorReason"),{onSuccess:s=>{console.log(s,"sucesss"),notify.success("Reason sent successfully")},onError:s=>{console.log(s.message,"error"),notify.error("Error while sending reason"),notify.error(s.message)}})};return a.useEffect(()=>{},[]),e.jsxs(R,{children:[e.jsx(n,{sx:{height:"65px"}}),e.jsx(M,{sx:{paddingToo:"65px"},children:e.jsx(L,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(u,{container:!0,children:e.jsxs(u,{item:!0,xs:12,children:[e.jsx(n,{fontSize:"16px",color:"#7C7C7C",children:"Thank you for your response!"}),e.jsx(n,{fontSize:"16px",color:"#7C7C7C",py:2,children:"We are so sorry to hear that you have removed this match. We would like to request that you fill in this feedback indicating the reason why you have removed this mentor."}),e.jsx(n,{fontSize:"16px",color:"#7C7C7C",children:"If you have any questions, please feel free to contact us at hello@upcie.net"}),e.jsx(n,{fontWeight:600,textAlign:"center",py:2,children:"Select a reason from dropdown or add your custom reason below:"}),e.jsxs(f,{mt:2,class:"custom_input_field",children:[w===!0&&e.jsxs(F,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(W,{value:i.reason,onChange:r=>d("reason",r.target.value),fullWidth:!0,size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(c,{value:"Goal/set target has been achieved",children:"Goal/set target has been achieved"}),e.jsx(c,{value:"Difference in personalities, no chemistry",children:"Difference in personalities, no chemistry"}),e.jsx(c,{value:"Lack of commitment/lack of progress",children:"Lack of commitment/lack of progress"}),e.jsx(x,{class:"btn px-4",onClick:()=>E(),children:"Add Other Reason"})]}),e.jsx(I,{children:o.reason})]}),S===!0&&e.jsx(G,{value:i.reason,onChange:r=>d("reason",r.target.value),fullWidth:!0,multiline:!0,placeholder:"Please mention reason",margin:"normal",size:"small",error:!!o.reason,helperText:o.reason})]}),e.jsx(f,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(x,{variant:"contained",disabled:C,color:"primary",onClick:T,children:"Submit"})})]})})})})]})}export{ce as default};
