import{g as R,b as P,s as g,C as Y,d as x,a as c,e as no,u as W,_ as $,h as f,i as T,j as ro}from"./styled-D2R11-vQ.js";import{j as a,r as m}from"./app-k6o5FfB4.js";import{S as io}from"./SwitchBase-D7NeLUoB.js";import{c as z,a as lo,r as co}from"./createSvgIcon-BmxnK3CM.js";import{A as po}from"./Avatar-tSW3oJfe.js";import{B as uo,M as mo,F as xo,I as go}from"./index-G8SO0pmT.js";import{Q as ho,n as E}from"./ReactToastify-D04vZh4A.js";import{u as fo}from"./useTheme-BtIqDRep.js";import{P as q}from"./Paper-BaIVRNiM.js";import{T as X}from"./Typography-DCD5i9Q3.js";import{T as _}from"./TextField-C5sNTwdj.js";import{B as O}from"./Button-DsqRWsQp.js";const Co=z(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),vo=z(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),bo=z(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ko(o){return P("MuiCheckbox",o)}const F=R("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),yo=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Do=o=>{const{classes:e,indeterminate:t,color:s,size:r}=o,n={root:["root",t&&"indeterminate",`color${x(s)}`,`size${x(r)}`]},i=T(n,ko,e);return c({},e,i)},jo=g(io,{shouldForwardProp:o=>Y(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.indeterminate&&e.indeterminate,e[`size${x(t.size)}`],t.color!=="default"&&e[`color${x(t.color)}`]]}})(({theme:o,ownerState:e})=>c({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:no(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${F.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),Ro=a.jsx(vo,{}),Po=a.jsx(Co,{}),Wo=a.jsx(bo,{}),fe=m.forwardRef(function(e,t){var s,r;const n=W({props:e,name:"MuiCheckbox"}),{checkedIcon:i=Ro,color:l="primary",icon:u=Po,indeterminate:p=!1,indeterminateIcon:v=Wo,inputProps:b,size:h="medium",className:k}=n,d=$(n,yo),y=p?v:u,C=p?v:i,S=c({},n,{color:l,indeterminate:p,size:h}),D=Do(S);return a.jsx(jo,c({type:"checkbox",inputProps:c({"data-indeterminate":p},b),icon:m.cloneElement(y,{fontSize:(s=y.props.fontSize)!=null?s:h}),checkedIcon:m.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:h}),ownerState:S,ref:t,className:f(D.root,k)},d,{classes:D}))});function $o(o){return P("MuiDialog",o)}const I=R("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),K=m.createContext({}),To=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],So=g(uo,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Bo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:r,fullScreen:n}=o,i={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(s))}`,r&&"paperFullWidth",n&&"paperFullScreen"]};return T(i,$o,e)},Mo=g(mo,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),wo=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>c({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),No=g(q,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>c({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${I.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${I.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${I.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),_o=m.forwardRef(function(e,t){const s=W({props:e,name:"MuiDialog"}),r=fo(),n={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":l,BackdropComponent:u,BackdropProps:p,children:v,className:b,disableEscapeKeyDown:h=!1,fullScreen:k=!1,fullWidth:d=!1,maxWidth:y="sm",onBackdropClick:C,onClick:S,onClose:D,open:U,PaperComponent:G=q,PaperProps:H={},scroll:J="paper",TransitionComponent:Z=xo,transitionDuration:L=n,TransitionProps:oo}=s,eo=$(s,To),B=c({},s,{disableEscapeKeyDown:h,fullScreen:k,fullWidth:d,maxWidth:y,scroll:J}),M=Bo(B),w=m.useRef(),to=j=>{w.current=j.target===j.currentTarget},so=j=>{S&&S(j),w.current&&(w.current=null,C&&C(j),D&&D(j,"backdropClick"))},N=lo(l),ao=m.useMemo(()=>({titleId:N}),[N]);return a.jsx(Mo,c({className:f(M.root,b),closeAfterTransition:!0,components:{Backdrop:So},componentsProps:{backdrop:c({transitionDuration:L,as:u},p)},disableEscapeKeyDown:h,onClose:D,open:U,ref:t,onClick:so,ownerState:B},eo,{children:a.jsx(Z,c({appear:!0,in:U,timeout:L,role:"presentation"},oo,{children:a.jsx(wo,{className:f(M.container),onMouseDown:to,ownerState:B,children:a.jsx(No,c({as:G,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":N},H,{className:f(M.paper,H.className),ownerState:B,children:a.jsx(K.Provider,{value:ao,children:v})}))})}))}))});function Fo(o){return P("MuiDialogActions",o)}R("MuiDialogActions",["root","spacing"]);const Io=["className","disableSpacing"],zo=o=>{const{classes:e,disableSpacing:t}=o;return T({root:["root",!t&&"spacing"]},Fo,e)},Ao=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>c({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Uo=m.forwardRef(function(e,t){const s=W({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:n=!1}=s,i=$(s,Io),l=c({},s,{disableSpacing:n}),u=zo(l);return a.jsx(Ao,c({className:f(u.root,r),ownerState:l,ref:t},i))});function Ho(o){return P("MuiDialogContent",o)}R("MuiDialogContent",["root","dividers"]);function Lo(o){return P("MuiDialogTitle",o)}const Eo=R("MuiDialogTitle",["root"]),Oo=["className","dividers"],Vo=o=>{const{classes:e,dividers:t}=o;return T({root:["root",t&&"dividers"]},Ho,e)},Yo=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>c({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Eo.root} + &`]:{paddingTop:0}})),qo=m.forwardRef(function(e,t){const s=W({props:e,name:"MuiDialogContent"}),{className:r,dividers:n=!1}=s,i=$(s,Oo),l=c({},s,{dividers:n}),u=Vo(l);return a.jsx(Yo,c({className:f(u.root,r),ownerState:l,ref:t},i))});function Xo(o){return P("MuiDialogContentText",o)}R("MuiDialogContentText",["root"]);const Ko=["children","className"],Qo=o=>{const{classes:e}=o,s=T({root:["root"]},Xo,e);return c({},e,s)},Go=g(X,{shouldForwardProp:o=>Y(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),Jo=m.forwardRef(function(e,t){const s=W({props:e,name:"MuiDialogContentText"}),{className:r}=s,n=$(s,Ko),i=Qo(n);return a.jsx(Go,c({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:n,className:f(i.root,r)},s,{classes:i}))}),Zo=["className","id"],oe=o=>{const{classes:e}=o;return T({root:["root"]},Lo,e)},ee=g(X,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),te=m.forwardRef(function(e,t){const s=W({props:e,name:"MuiDialogTitle"}),{className:r,id:n}=s,i=$(s,Zo),l=s,u=oe(l),{titleId:p=n}=m.useContext(K);return a.jsx(ee,c({component:"h2",className:f(u.root,r),ownerState:l,ref:t,variant:"h6",id:n??p},i))});var A={},se=ro;Object.defineProperty(A,"__esModule",{value:!0});var Q=A.default=void 0,ae=se(co()),V=a;Q=A.default=(0,ae.default)([(0,V.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,V.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera");const Ce=({setData:o,data:e,name:t,defaultImg:s})=>{const r=n=>{const i=n.target.files[0];if(i){const l=new FileReader;l.onload=()=>{const u={...e,[t]:l.result};o(u)},l.readAsDataURL(i)}};return a.jsx(a.Fragment,{children:a.jsxs("div",{style:{position:"relative"},children:[a.jsx("label",{htmlFor:"avatar-upload",children:a.jsx(po,{alt:"Avatar",src:(e==null?void 0:e.profile_photo)||s,sx:{width:162,height:162,cursor:"pointer"}})}),a.jsx("input",{accept:"image/*",id:"avatar-upload",type:"file",style:{display:"none"},onChange:r}),a.jsx("label",{htmlFor:"avatar-upload",style:{position:"absolute",top:"73%",left:" 72%"},children:a.jsx(go,{color:"primary","aria-label":"upload picture",component:"span",children:a.jsx(Q,{sx:{background:"white",borderRadius:"50%",padding:"2px"}})})})]})})},ve="/build/assets/profileImage-L75C1N6j.png",be=o=>{if(o&&o.current){const e=o.current,r=(typeof e.getBoundingClientRect=="function"?e.getBoundingClientRect().top+window.scrollY:e.node.getBoundingClientRect().top+window.scrollY)-220;window.scrollTo({top:r,behavior:"smooth"})}},ke=({selectData:o,open:e,title:t,addMoreId:s,desc:r,setOpen:n,setSelectData:i})=>{const[l,u]=m.useState(""),[p,v]=m.useState({name:"",description:"",value:""}),b=(d,y)=>{v(C=>({...C,[d]:y}))},h=()=>{if(Array.isArray(o[s])){if(typeof o[s][0]=="string"){if(l===""){E.error("Add Other Option Field is Required");return}l&&!o[s].includes(l)&&(i(d=>({...d,[s]:[...d[s],l]})),u(""))}else if(typeof o[s][0]=="object"){if(p.description===""||p.name===""){E.error("All Fields are Required");return}i(d=>({...d,[s]:[...d[s],{description:p.description,name:p.name,value:p.name}]}))}}n(!1)},k=()=>{n(!1)};return a.jsxs(a.Fragment,{children:[a.jsx(ho,{style:{marginTop:"65px"}}),a.jsxs(_o,{open:e,onClose:k,className:"common_popup",children:[a.jsx(te,{sx:{fontSize:"17px",fontWeight:600},children:t}),a.jsxs(qo,{children:[a.jsx(Jo,{children:r}),s==="industry_sector"?a.jsxs(a.Fragment,{children:[a.jsx(_,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"Name",value:p.name,onChange:d=>b("name",d.target.value)}),a.jsx(_,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"description",value:p.description,onChange:d=>b("description",d.target.value)})]}):a.jsx(a.Fragment,{children:a.jsx(_,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",value:l,onChange:d=>u(d.target.value)})})]}),a.jsxs(Uo,{children:[a.jsx(O,{className:"popup_btn bg2",onClick:k,children:"Close"}),a.jsx(O,{className:"popup_btn bg1",onClick:h,children:"Add"})]})]})]})};export{fe as C,Uo as D,ke as P,_o as a,qo as b,Ce as c,I as d,ve as p,be as s};
