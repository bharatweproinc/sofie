import{l as G,_ as d,q,p as M,M as O,w as I,N as W,o as z,b as _,d as N,O as H,P as D,e as B,g as E,s as S,u as U,a as J,c as A,T as V}from"./Typography-CrtmTfc4.js";import{r as P,j as y}from"./app-Cs_eN147.js";import{u as K,c as Q}from"./TextField-D9ZzYGKF.js";import{s as X}from"./styled-DRFR0lvA.js";const Y=["component","direction","spacing","divider","children","className","useFlexGap"],Z=G(),w=X("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function ee(e){return H({props:e,name:"MuiStack",defaultTheme:Z})}function oe(e,o){const s=P.Children.toArray(e).filter(Boolean);return s.reduce((l,n,r)=>(l.push(n),r<s.length-1&&l.push(P.cloneElement(o,{key:`separator-${r}`})),l),[])}const re=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],se=({ownerState:e,theme:o})=>{let s=d({display:"flex",flexDirection:"column"},q({theme:o},M({values:e.direction,breakpoints:o.breakpoints.values}),l=>({flexDirection:l})));if(e.spacing){const l=O(o),n=Object.keys(o.breakpoints.values).reduce((t,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(t[a]=!0),t),{}),r=M({values:e.direction,base:n}),i=M({values:e.spacing,base:n});typeof r=="object"&&Object.keys(r).forEach((t,a,u)=>{if(!r[t]){const b=a>0?r[u[a-1]]:"column";r[t]=b}}),s=I(s,q({theme:o},i,(t,a)=>e.useFlexGap?{gap:D(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${re(a?r[a]:e.direction)}`]:D(l,t)}}))}return s=W(o.breakpoints,s),s};function te(e={}){const{createStyledComponent:o=w,useThemeProps:s=ee,componentName:l="MuiStack"}=e,n=()=>B({root:["root"]},t=>E(l,t),{}),r=o(se);return P.forwardRef(function(t,a){const u=s(t),m=z(u),{component:b="div",direction:C="column",spacing:L=0,divider:k,children:c,className:x,useFlexGap:f=!1}=m,F=_(m,Y),j={direction:C,spacing:L,useFlexGap:f},g=n();return y.jsx(r,d({as:b,ownerState:j,ref:a,className:N(g.root,x)},F,{children:k?oe(c,k):c}))})}const le=te({createStyledComponent:S("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})});function ae(e){return E("MuiFormControlLabel",e)}const h=J("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ne=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ie=e=>{const{classes:o,disabled:s,labelPlacement:l,error:n,required:r}=e,i={root:["root",s&&"disabled",`labelPlacement${A(l)}`,n&&"error",r&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",n&&"error"]};return B(i,ae,o)},ce=S("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${h.label}`]:o.label},o.root,o[`labelPlacement${A(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),pe=S("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${h.error}`]:{color:(e.vars||e).palette.error.main}})),fe=P.forwardRef(function(o,s){var l,n;const r=U({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:v={},control:t,disabled:a,disableTypography:u,label:m,labelPlacement:b="end",required:C,slotProps:L={}}=r,k=_(r,ne),c=K(),x=(l=a??t.props.disabled)!=null?l:c==null?void 0:c.disabled,f=C??t.props.required,F={disabled:x,required:f};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof t.props[R]>"u"&&typeof r[R]<"u"&&(F[R]=r[R])});const j=Q({props:r,muiFormControl:c,states:["error"]}),g=d({},r,{disabled:x,labelPlacement:b,required:f,error:j.error}),T=ie(g),$=(n=L.typography)!=null?n:v.typography;let p=m;return p!=null&&p.type!==V&&!u&&(p=y.jsx(V,d({component:"span"},$,{className:N(T.label,$==null?void 0:$.className),children:p}))),y.jsxs(ce,d({className:N(T.root,i),ownerState:g,ref:s},k,{children:[P.cloneElement(t,F),f?y.jsxs(le,{display:"block",children:[p,y.jsxs(pe,{ownerState:g,"aria-hidden":!0,className:T.asterisk,children:[" ","*"]})]}):p]}))});export{fe as F};