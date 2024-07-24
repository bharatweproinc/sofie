import{M as Y,b as $,F as Z,_ as c,E as H,H as ee,N as oe,p as U,o as V,O as re,v as te,P as se,m as ne,d as E,Q as G,e as I,g as z,s as q,u as Q,a as le,c as J,T as W}from"./Typography-DQ-Dh4RN.js";import{r as O,j as L}from"./app-Xukm92kl.js";import{u as ae,c as ie}from"./TextField-DNfCJVbT.js";import{g as ce}from"./index-CCTTXL3d.js";import{a as ue}from"./Box-DsURuLT5.js";const pe=["ownerState"],de=["variants"],me=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function fe(e){return Object.keys(e).length===0}function he(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ye=H(),be=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function A({defaultTheme:e,theme:o,themeId:r}){return fe(o)?e:o[r]||o}function ve(e){return e?(o,r)=>r[e]:null}function M(e,o){let{ownerState:r}=o,l=$(o,pe);const s=typeof e=="function"?e(c({ownerState:r},l)):e;if(Array.isArray(s))return s.flatMap(n=>M(n,c({ownerState:r},l)));if(s&&typeof s=="object"&&Array.isArray(s.variants)){const{variants:n=[]}=s;let p=$(s,de);return n.forEach(t=>{let a=!0;typeof t.props=="function"?a=t.props(c({ownerState:r},l,r)):Object.keys(t.props).forEach(d=>{(r==null?void 0:r[d])!==t.props[d]&&l[d]!==t.props[d]&&(a=!1)}),a&&(Array.isArray(p)||(p=[p]),p.push(typeof t.style=="function"?t.style(c({ownerState:r},l,r)):t.style))}),p}return s}function ge(e={}){const{themeId:o,defaultTheme:r=ye,rootShouldForwardProp:l=D,slotShouldForwardProp:s=D}=e,n=u=>ee(c({},u,{theme:A(c({},u,{defaultTheme:r,themeId:o}))}));return n.__mui_systemSx=!0,(u,p={})=>{Y(u,i=>i.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:t,slot:a,skipVariantsResolver:d,skipSx:C,overridesResolver:g=ve(be(a))}=p,R=$(p,me),_=d!==void 0?d:a&&a!=="Root"&&a!=="root"||!1,F=C||!1;let P,y=D;a==="Root"||a==="root"?y=l:a?y=s:he(u)&&(y=void 0);const b=Z(u,c({shouldForwardProp:y,label:P},R)),S=i=>typeof i=="function"&&i.__emotion_real!==i||oe(i)?m=>M(i,c({},m,{theme:A({theme:m.theme,defaultTheme:r,themeId:o})})):i,T=(i,...m)=>{let x=S(i);const f=m?m.map(S):[];t&&g&&f.push(v=>{const h=A(c({},v,{defaultTheme:r,themeId:o}));if(!h.components||!h.components[t]||!h.components[t].styleOverrides)return null;const j=h.components[t].styleOverrides,w={};return Object.entries(j).forEach(([K,X])=>{w[K]=M(X,c({},v,{theme:h}))}),g(v,w)}),t&&!_&&f.push(v=>{var h;const j=A(c({},v,{defaultTheme:r,themeId:o})),w=j==null||(h=j.components)==null||(h=h[t])==null?void 0:h.variants;return M({variants:w},c({},v,{theme:j}))}),F||f.push(n);const k=f.length-m.length;if(Array.isArray(i)&&k>0){const v=new Array(k).fill("");x=[...i,...v],x.raw=[...i.raw,...v]}const B=b(x,...f);return u.muiName&&(B.muiName=u.muiName),B};return b.withConfig&&(T.withConfig=b.withConfig),T}}const Pe=ge();function Ce({props:e,name:o,defaultTheme:r,themeId:l}){let s=ue(r);return l&&(s=s[l]||s),ce({theme:s,name:o,props:e})}const Se=["component","direction","spacing","divider","children","className","useFlexGap"],xe=H(),ke=Pe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Re(e){return Ce({props:e,name:"MuiStack",defaultTheme:xe})}function Fe(e,o){const r=O.Children.toArray(e).filter(Boolean);return r.reduce((l,s,n)=>(l.push(s),n<r.length-1&&l.push(O.cloneElement(o,{key:`separator-${n}`})),l),[])}const Te=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],_e=({ownerState:e,theme:o})=>{let r=c({display:"flex",flexDirection:"column"},U({theme:o},V({values:e.direction,breakpoints:o.breakpoints.values}),l=>({flexDirection:l})));if(e.spacing){const l=re(o),s=Object.keys(o.breakpoints.values).reduce((t,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(t[a]=!0),t),{}),n=V({values:e.direction,base:s}),u=V({values:e.spacing,base:s});typeof n=="object"&&Object.keys(n).forEach((t,a,d)=>{if(!n[t]){const g=a>0?n[d[a-1]]:"column";n[t]=g}}),r=te(r,U({theme:o},u,(t,a)=>e.useFlexGap?{gap:G(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Te(a?n[a]:e.direction)}`]:G(l,t)}}))}return r=se(o.breakpoints,r),r};function je(e={}){const{createStyledComponent:o=ke,useThemeProps:r=Re,componentName:l="MuiStack"}=e,s=()=>I({root:["root"]},t=>z(l,t),{}),n=o(_e);return O.forwardRef(function(t,a){const d=r(t),C=ne(d),{component:g="div",direction:R="column",spacing:_=0,divider:F,children:P,className:y,useFlexGap:b=!1}=C,S=$(C,Se),T={direction:R,spacing:_,useFlexGap:b},i=s();return L.jsx(n,c({as:g,ownerState:T,ref:a,className:E(i.root,y)},S,{children:F?Fe(P,F):P}))})}const Le=je({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>Q({props:e,name:"MuiStack"})});function Ne(e){return z("MuiFormControlLabel",e)}const N=le("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),$e=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Oe=e=>{const{classes:o,disabled:r,labelPlacement:l,error:s,required:n}=e,u={root:["root",r&&"disabled",`labelPlacement${J(l)}`,s&&"error",n&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",s&&"error"]};return I(u,Ne,o)},we=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${N.label}`]:o.label},o.root,o[`labelPlacement${J(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${N.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${N.label}`]:{[`&.${N.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ae=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}})),Be=O.forwardRef(function(o,r){var l,s;const n=Q({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:p={},control:t,disabled:a,disableTypography:d,label:C,labelPlacement:g="end",required:R,slotProps:_={}}=n,F=$(n,$e),P=ae(),y=(l=a??t.props.disabled)!=null?l:P==null?void 0:P.disabled,b=R??t.props.required,S={disabled:y,required:b};["checked","name","onChange","value","inputRef"].forEach(k=>{typeof t.props[k]>"u"&&typeof n[k]<"u"&&(S[k]=n[k])});const T=ie({props:n,muiFormControl:P,states:["error"]}),i=c({},n,{disabled:y,labelPlacement:g,required:b,error:T.error}),m=Oe(i),x=(s=_.typography)!=null?s:p.typography;let f=C;return f!=null&&f.type!==W&&!d&&(f=L.jsx(W,c({component:"span"},x,{className:E(m.label,x==null?void 0:x.className),children:f}))),L.jsxs(we,c({className:E(m.root,u),ownerState:i,ref:r},F,{children:[O.cloneElement(t,S),b?L.jsxs(Le,{display:"block",children:[f,L.jsxs(Ae,{ownerState:i,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}):f]}))});export{Be as F};
