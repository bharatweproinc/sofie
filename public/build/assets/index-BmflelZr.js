import{a as P,g as V,s as D,t as A,_ as b,f as y,u as M,b as W,d as _,e as G}from"./Typography-DQvRHjr3.js";import{r as u,j as s}from"./app-D8U5PHYV.js";import{e as F,f as N,h as O}from"./index-jL8jCZdz.js";import{B as H}from"./ButtonBase-CEF_sSfC.js";import{d as T}from"./dividerClasses-ChltJaqK.js";import{b as L,a as S}from"./useIsFocusVisible-BeLHK-v7.js";import{Q as E,n as B}from"./Notifier-CgjPiPe-.js";/* empty css                      */import{D as U,a as z,b as q,c as Y}from"./DialogContentText-Du7fXOsP.js";import{D as Q}from"./DialogTitle-6G51ulxV.js";import{T as h}from"./TextField-C2VhdRL3.js";import{B as k}from"./Button-B4v7PQq-.js";function J(e){return V("MuiMenuItem",e)}const g=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),K=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],X=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Z=e=>{const{disabled:t,dense:n,divider:a,disableGutters:r,selected:p,classes:l}=e,d=G({root:["root",n&&"dense",t&&"disabled",!r&&"gutters",a&&"divider",p&&"selected"]},J,l);return b({},l,d)},ee=D(H,{shouldForwardProp:e=>A(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:X})(({theme:e,ownerState:t})=>b({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:y(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:y(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${g.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:y(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:y(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${g.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${T.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${T.inset}`]:{marginLeft:52},[`& .${F.root}`]:{marginTop:0,marginBottom:0},[`& .${F.inset}`]:{paddingLeft:36},[`& .${N.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&b({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${N.root} svg`]:{fontSize:"1.25rem"}}))),me=u.forwardRef(function(t,n){const a=M({props:t,name:"MuiMenuItem"}),{autoFocus:r=!1,component:p="li",dense:l=!1,divider:c=!1,disableGutters:d=!1,focusVisibleClassName:i,role:C="menuitem",tabIndex:m,className:$}=a,v=W(a,K),o=u.useContext(O),x=u.useMemo(()=>({dense:l||o.dense||!1,disableGutters:d}),[o.dense,l,d]),f=u.useRef(null);L(()=>{r&&f.current&&f.current.focus()},[r]);const I=b({},a,{dense:x.dense,divider:c,disableGutters:d}),j=Z(a),w=S(f,n);let R;return a.disabled||(R=m!==void 0?m:-1),s.jsx(O.Provider,{value:x,children:s.jsx(ee,b({ref:w,role:C,tabIndex:R,component:p,focusVisibleClassName:_(j.focusVisible,i),className:_(j.root,$)},v,{ownerState:I,classes:j}))})}),fe=e=>{if(e&&e.current){const t=e.current,r=(typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect().top+window.scrollY:t.node.getBoundingClientRect().top+window.scrollY)-220;window.scrollTo({top:r,behavior:"smooth"})}},ge=({selectData:e,open:t,title:n,addMoreId:a,desc:r,setOpen:p,setSelectData:l})=>{const[c,d]=u.useState(""),[i,C]=u.useState({name:"",description:"",value:""}),m=(o,x)=>{C(f=>({...f,[o]:x}))},$=()=>{if(Array.isArray(e[a])){if(typeof e[a][0]=="string"){if(c===""){B.error("Add Other Option Field is Required");return}c&&!e[a].includes(c)&&(l(o=>({...o,[a]:[...o[a],c]})),d(""))}else if(typeof e[a][0]=="object"){if(i.description===""||i.name===""){B.error("All Fields are Required");return}l(o=>({...o,[a]:[...o[a],{description:i.description,name:i.name,value:i.name}]}))}}p(!1)},v=()=>{p(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(E,{style:{marginTop:"65px"}}),s.jsxs(U,{open:t,onClose:v,className:"common_popup",children:[s.jsx(Q,{sx:{fontSize:"17px",fontWeight:600},children:n}),s.jsxs(z,{children:[s.jsx(q,{children:r}),a==="industry_sector"?s.jsxs(s.Fragment,{children:[s.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"Name",value:i.name,onChange:o=>m("name",o.target.value)}),s.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"description",value:i.description,onChange:o=>m("description",o.target.value)})]}):s.jsx(s.Fragment,{children:s.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",value:c,onChange:o=>d(o.target.value)})})]}),s.jsxs(Y,{children:[s.jsx(k,{className:"popup_btn bg2",onClick:v,children:"Close"}),s.jsx(k,{className:"popup_btn bg1",onClick:$,children:"Add"})]})]})]})};export{me as M,ge as P,fe as s};