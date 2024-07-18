import{b as k,_ as i,a as _,g as O,s as z,z as F,c as r,f as u,B as U,u as G,d as R,e as D}from"./DefaultPropsProvider-DCh9ZCp3.js";import{j as x,r as e}from"./app-BIipo8El.js";import{B as H}from"./ButtonBase-D9ujge8j.js";const A=["value"],h=e.createContext();function io(o){let{value:a}=o,n=k(o,A);return x.jsx(h.Provider,i({value:a??!0},n))}const ro=()=>{const o=e.useContext(h);return o??!1};function q(o){return O("MuiButton",o)}const v=_("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),J=e.createContext({}),K=e.createContext(void 0),Q=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],X=o=>{const{color:a,disableElevation:n,fullWidth:s,size:t,variant:l,classes:c}=o,g={root:["root",l,`${l}${r(a)}`,`size${r(t)}`,`${l}Size${r(t)}`,`color${r(a)}`,n&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${r(t)}`],endIcon:["icon","endIcon",`iconSize${r(t)}`]},b=D(g,q,c);return i({},c,b)},E=o=>i({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Y=z(H,{shouldForwardProp:o=>F(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[n.variant],a[`${n.variant}${r(n.color)}`],a[`size${r(n.size)}`],a[`${n.variant}Size${r(n.size)}`],n.color==="inherit"&&a.colorInherit,n.disableElevation&&a.disableElevation,n.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var n,s;const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],l=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return i({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":i({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":i({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${v.focusVisible}`]:i({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${v.disabled}`]:i({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${u(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(n=(s=o.palette).getContrastText)==null?void 0:n.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:t,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}),Z=z("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.startIcon,a[`iconSize${r(n.size)}`]]}})(({ownerState:o})=>i({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},E(o))),w=z("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.endIcon,a[`iconSize${r(n.size)}`]]}})(({ownerState:o})=>i({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},E(o))),to=e.forwardRef(function(a,n){const s=e.useContext(J),t=e.useContext(K),l=U(s,a),c=G({props:l,name:"MuiButton"}),{children:g,color:b="primary",component:C="button",className:P,disabled:f=!1,disableElevation:W=!1,disableFocusRipple:y=!1,endIcon:$,focusVisibleClassName:m,fullWidth:M=!1,size:N="medium",startIcon:I,type:B,variant:L="text"}=c,S=k(c,Q),p=i({},c,{color:b,component:C,disabled:f,disableElevation:W,disableFocusRipple:y,fullWidth:M,size:N,type:B,variant:L}),d=X(p),T=I&&x.jsx(Z,{className:d.startIcon,ownerState:p,children:I}),j=$&&x.jsx(w,{className:d.endIcon,ownerState:p,children:$}),V=t||"";return x.jsxs(Y,i({ownerState:p,className:R(s.className,d.root,P,V),component:C,disabled:f,focusRipple:!y,focusVisibleClassName:R(d.focusVisible,m),ref:n,type:B},S,{classes:d,children:[T,g,j]}))});export{to as B,io as R,ro as u};
