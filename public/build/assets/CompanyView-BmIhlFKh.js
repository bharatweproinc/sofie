import{W as P,R,r as a,j as e}from"./app-CTEIVAUj.js";import{L as z}from"./index-BLTq-tUC.js";import l from"./Constants-Bgs4SIDe.js";import{J as p}from"./JoiValidator-CLEXX908.js";/* empty css              */import{i as B}from"./image7-BH7QmizO.js";import{s as g}from"./styled-MpcYgwIY.js";import{P as D}from"./Paper-Ci3fQQCu.js";import{T as s}from"./Typography-8C00Iwvt.js";import{G as u}from"./Grid-DmeqGSJ5.js";import{B as h}from"./Box-CQu9e-mY.js";import{F,S as W,b as I,T as L}from"./TextField-N88hfhGk.js";import{M as f}from"./MenuItem-DlxBizmy.js";import{B as x}from"./Button--ZhgW4K3.js";import"./createSvgIcon-Be81n78Q.js";import"./useIsFocusVisible-DegGo7m3.js";import"./Constants-Byrcnu-o.js";import"./resolveComponentProps-DeL8zTD9.js";import"./ButtonBase-Bmiv4-14.js";import"./DeleteIcon-C8cpiJgO.js";import"./EditIcon-BgCKaEUK.js";import"./createStyled-T5YtkJrE.js";import"./GlobalStyles-BzAJJt-Z.js";import"./dividerClasses-Bv0xS3r0.js";const _=g(D)({padding:"80px",borderRadius:"16px"}),q=g("div")({backgroundImage:`url(${B})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backgroundPosition:"right top !important"});function ce({details:j}){const{data:i,setData:y,post:C,processing:S}=P({...l.initDeclineDropdown,...j}),[o,c]=R.useState({}),[v,w]=a.useState(!1),[b,E]=a.useState(!0),d=(r,t)=>{c({...o,[r]:p.validateToPlainErrors(t,l.declineDropdownSchema[r])}),y(m=>({...m,[r]:t}))},T=()=>{w(!0),E(!1)},k=r=>{r.preventDefault();let t=p.validateToPlainErrors(i,l.declineDropdownSchema);c(t),!Object.keys(t).some(n=>t[n]!==null)&&C(route("landing.declineSmeReason"),{onSuccess:n=>{console.log(n,"sucesss"),notify.success("Reason sent successfully")},onError:n=>{console.log(n.message,"error"),notify.error("Error while sending reason"),notify.error(n.message)}})};return a.useEffect(()=>{},[]),e.jsxs(z,{children:[e.jsx(s,{sx:{height:"65px"}}),e.jsx(q,{sx:{paddingToo:"65px"},children:e.jsx(_,{sx:{width:"650px !important",margin:"60px"},elevation:4,children:e.jsx(u,{container:!0,children:e.jsxs(u,{item:!0,xs:12,children:[e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"Thank you for your response!"}),e.jsx(s,{fontSize:"16px",color:"#7C7C7C",py:2,children:"We are so sorry to hear that you have declined this match. We would like to request that you fill in this feedback dropdown indicating the reason why you have declined.                         "}),e.jsx(s,{fontSize:"16px",color:"#7C7C7C",children:"If you have any questions, please feel free to contact us at hello@upcie.net"}),e.jsx(s,{fontWeight:600,textAlign:"center",py:2,children:"Select a reason from dropdown or add your custom reason below:"}),e.jsxs(h,{mt:2,class:"custom_input_field",children:[b===!0&&e.jsxs(F,{sx:{width:"100%"},error:!!o.reason,children:[e.jsxs(W,{value:i.reason,onChange:r=>d("reason",r.target.value),fullWidth:!0,size:"small",error:!!o.reason,helperText:o.reason,children:[e.jsx(f,{value:"Lack of experience in mentoring",children:"Lack of experience in mentoring"}),e.jsx(f,{value:"Conflict of interest",children:"Conflict of interest"}),e.jsx(x,{class:"btn px-4",onClick:()=>T(),children:"Add Other Reason"})]}),e.jsx(I,{children:o.reason})]}),v===!0&&e.jsx(L,{value:i.reason,onChange:r=>d("reason",r.target.value),fullWidth:!0,margin:"normal",size:"small",multiline:!0,placeholder:"Please mention reason of decline.",error:!!o.reason,helperText:o.reason})]}),e.jsx(h,{mt:2,display:"flex",justifyContent:"center",class:"custom_btn text-center p-4",children:e.jsx(x,{variant:"contained",disabled:S,color:"primary",onClick:k,children:"Submit"})})]})})})})]})}export{ce as default};
