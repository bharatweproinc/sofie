import{j as t,r as I,W as G}from"./app-CLNoeIf4.js";import{I as L,L as Z}from"./index-Cjz1sXza.js";/* empty css              *//* empty css              */import Q from"./Constant-C6Mv7h_L.js";import{a as Y,g as J,s as b,c as S,h as _,l as z,_ as g,u as K,b as X,d as ee,e as te,i as re,T as C}from"./Typography-Cbf3Jowo.js";import{c as y,r as oe}from"./createSvgIcon-CkUardzR.js";import{G as m}from"./Grid-CAQnG8y0.js";import{u as B}from"./useSlot-BgiJaKNl.js";import{C as ne}from"./Close-Di3mx3XR.js";import{P as se}from"./Paper-DZ6Iq4W_.js";import{B as E}from"./Box-pioLHn4W.js";import{Q as ae,n as D}from"./Notifier-CibCfFRd.js";/* empty css                      */import{T as P}from"./TextField-DDM8uFiQ.js";import{B as le}from"./Button-CK_kYUcJ.js";import"./Constants-e1feQntW.js";import"./useIsFocusVisible-B8RzluFD.js";import"./resolveComponentProps-BzExm8fi.js";import"./ButtonBase-CItdG5xs.js";import"./DeleteIcon-BA6o75-o.js";import"./EditIcon-B-flmUMu.js";import"./GlobalStyles-peSWDUh-.js";function ie(e){return J("MuiAlert",e)}const $=Y("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),ce=y(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),pe=y(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),de=y(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ue=y(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ge=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],me=e=>{const{variant:o,color:n,severity:r,classes:i}=e,d={root:["root",`color${S(n||r)}`,`${o}${S(n||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return te(d,ie,i)},xe=b(se,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${S(n.color||n.severity)}`]]}})(({theme:e})=>{const o=e.palette.mode==="light"?_:z,n=e.palette.mode==="light"?z:_;return g({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:n(e.palette[r].light,.9),[`& .${$.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${$.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(([,r])=>r.main&&r.dark).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:g({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)})}))]})}),fe=b("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ve=b("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),O=b("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:t.jsx(ce,{fontSize:"inherit"}),warning:t.jsx(pe,{fontSize:"inherit"}),error:t.jsx(de,{fontSize:"inherit"}),info:t.jsx(ue,{fontSize:"inherit"})},he=I.forwardRef(function(o,n){const r=K({props:o,name:"MuiAlert"}),{action:i,children:d,className:x,closeText:l="Close",color:p,components:s={},componentsProps:a={},icon:c,iconMapping:f=R,onClose:h,role:W="alert",severity:j="success",slotProps:w={},slots:N={},variant:k="standard"}=r,F=X(r,ge),u=g({},r,{color:p,severity:j,variant:k,colorSeverity:p||j}),v=me(u),M={slots:g({closeButton:s.CloseButton,closeIcon:s.CloseIcon},N),slotProps:g({},a,w)},[H,U]=B("closeButton",{elementType:L,externalForwardedProps:M,ownerState:u}),[V,q]=B("closeIcon",{elementType:ne,externalForwardedProps:M,ownerState:u});return t.jsxs(xe,g({role:W,elevation:0,ownerState:u,className:ee(v.root,x),ref:n},F,{children:[c!==!1?t.jsx(fe,{ownerState:u,className:v.icon,children:c||f[j]||R[j]}):null,t.jsx(ve,{ownerState:u,className:v.message,children:d}),i!=null?t.jsx(O,{ownerState:u,className:v.action,children:i}):null,i==null&&h?t.jsx(O,{ownerState:u,className:v.action,children:t.jsx(H,g({size:"small","aria-label":l,title:l,color:"inherit",onClick:h},U,{children:t.jsx(V,g({fontSize:"small"},q))}))}):null]}))});var A={},je=re;Object.defineProperty(A,"__esModule",{value:!0});var T=A.default=void 0,Ce=je(oe()),be=t;T=A.default=(0,Ce.default)((0,be.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");function ye({data:e,setData:o}){const[n,r]=I.useState(null),i=(s,a)=>{r(a),s.dataTransfer.setData("text/plain","")},d=()=>{r(null)},x=s=>{s.preventDefault()},l=(s,a)=>{if(!n)return;const c=e.indexOf(n),f=e.indexOf(a);c!==-1&&f!==-1&&(e.splice(c,1),e.splice(f,0,n),o(items))},p=s=>{o(a=>{const c=a.banner_images.filter((f,h)=>h!==s);return{...a,banner_images:c}})};return t.jsxs(m,{container:!0,className:"sortable-list border mt-2",children:[t.jsx(m,{xs:12,padding:3,children:t.jsx(he,{variant:"outlined",severity:"info",children:"You can drag image to reposition the order on slide."})}),e.map((s,a)=>t.jsx(m,{xs:3,padding:3,children:t.jsxs(E,{className:`item ${s===n?"dragging":""}`,draggable:"true",onDragStart:c=>i(c,s),onDragEnd:d,onDragOver:x,onDrop:c=>l(c,s),item:!0,position:"relative",borderRadius:2,border:1,children:[t.jsx("img",{className:"mx-auto",src:s,alt:`Uploaded preview ${a}`,width:"250px",style:{height:"250px",objectFit:"contain"}}),t.jsx(L,{color:"error",onClick:()=>{p(a),console.log("index",a)},style:{position:"absolute",top:"5px",right:"5px"},children:t.jsx(T,{})})]})},a))]})}const Se=({data:e,setData:o})=>{const n=r=>{const i=Array.from(r.target.files);o({...e,banner_images:[...e.banner_images,...i]})};return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:n}),t.jsx(ye,{data:e.banner_images,setData:o})]})};function Ge({list:e}){const{data:o,setData:n,post:r,processing:i}=G({...Q.initBannerForm,...e.banner,...e.user});I.useEffect(()=>{n(o)},[o]);const d=(l,p)=>{n(s=>({...s,[l]:p}))},x=l=>{l.preventDefault(),console.log("data12121",o),r(route("admin.saveSectionOne"),{onSuccess:p=>{D.success("Banner Data has been updated successfully"),console.log(p,"sucesss")},onError:p=>{D.error("Error in Banner Data, Try again"),console.log(p,"error")}})};return t.jsxs(Z,{auth:o,children:[t.jsx(ae,{style:{marginTop:"65px"}}),t.jsx(C,{sx:{height:"65px"}}),t.jsx(E,{p:4,children:t.jsx("form",{onSubmit:x,children:t.jsxs(m,{container:!0,className:"custom_input",children:[t.jsxs(m,{item:!0,xs:12,children:[t.jsx(C,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Banner Title"}),t.jsx(P,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,variant:"outlined",value:o.banner_title,onChange:l=>d("banner_title",l.target.value),type:"text",placeholder:"Please Fill Banner Title"})]}),t.jsxs(m,{item:!0,xs:12,children:[t.jsx(C,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Banner Description"}),t.jsx(P,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:o.banner_description,onChange:l=>d("banner_description",l.target.value),type:"text",placeholder:"Please Fill Banner Description"})]}),t.jsxs(m,{item:!0,children:[t.jsx(C,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Upload Photos"}),t.jsx(Se,{data:o,setData:n})]}),t.jsx(m,{item:!0,xs:12,mt:3,className:"custom_btn",textAlign:"center",children:t.jsx(le,{disabled:i,type:"submit",variant:"contained",children:"Save"})})]})})})]})}export{Ge as default};
