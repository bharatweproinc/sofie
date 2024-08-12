import{p as ee,_ as i,B as z,A as I,J as oe,D as se,K as te,z as re,b as w,d as D,L as O,e as E,g as U,a as W,s as q,m as ae,c as V,u as H,T as G}from"./Typography-Cw-BRMtc.js";import{r as L,j as x}from"./app-USF6nXqr.js";import{u as J,c as ne}from"./TextField-CjS4WmHo.js";import{B as le}from"./ButtonBase-CSobqprw.js";import{a as ie}from"./createSvgIcon-B3ygJXCX.js";import{s as ce}from"./styled-BI0iwuS-.js";import{g as de}from"./index-BKAKpgU4.js";import{a as ue}from"./Box-B2w83WfV.js";function pe({props:e,name:o,defaultTheme:t,themeId:a}){let r=ue(t);return a&&(r=r[a]||r),de({theme:r,name:o,props:e})}const me=["component","direction","spacing","divider","children","className","useFlexGap"],fe=ee(),he=ce("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function be(e){return pe({props:e,name:"MuiStack",defaultTheme:fe})}function ge(e,o){const t=L.Children.toArray(e).filter(Boolean);return t.reduce((a,r,s)=>(a.push(r),s<t.length-1&&a.push(L.cloneElement(o,{key:`separator-${s}`})),a),[])}const ye=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Pe=({ownerState:e,theme:o})=>{let t=i({display:"flex",flexDirection:"column"},z({theme:o},I({values:e.direction,breakpoints:o.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=oe(o),r=Object.keys(o.breakpoints.values).reduce((n,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(n[l]=!0),n),{}),s=I({values:e.direction,base:r}),u=I({values:e.spacing,base:r});typeof s=="object"&&Object.keys(s).forEach((n,l,g)=>{if(!s[n]){const P=l>0?s[g[l-1]]:"column";s[n]=P}}),t=se(t,z({theme:o},u,(n,l)=>e.useFlexGap?{gap:O(a,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ye(l?s[l]:e.direction)}`]:O(a,n)}}))}return t=te(o.breakpoints,t),t};function ke(e={}){const{createStyledComponent:o=he,useThemeProps:t=be,componentName:a="MuiStack"}=e,r=()=>E({root:["root"]},n=>U(a,n),{}),s=o(Pe);return L.forwardRef(function(n,l){const g=t(n),y=re(g),{component:P="div",direction:F="column",spacing:j=0,divider:R,children:c,className:k,useFlexGap:p=!1}=y,B=w(y,me),T={direction:F,spacing:j,useFlexGap:p},C=r();return x.jsx(s,i({as:P,ownerState:T,ref:l,className:D(C.root,k)},B,{children:R?ge(c,R):c}))})}function Ce(e){return U("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ve=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],xe=e=>{const{classes:o,checked:t,disabled:a,edge:r}=e,s={root:["root",t&&"checked",a&&"disabled",r&&`edge${V(r)}`],input:["input"]};return E(s,Ce,o)},Fe=q(le)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Re=q("input",{shouldForwardProp:ae})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ve=L.forwardRef(function(o,t){const{autoFocus:a,checked:r,checkedIcon:s,className:u,defaultChecked:b,disabled:n,disableFocusRipple:l=!1,edge:g=!1,icon:y,id:P,inputProps:F,inputRef:j,name:R,onBlur:c,onChange:k,onFocus:p,readOnly:B,required:T=!1,tabIndex:C,type:m,value:S}=o,f=w(o,ve),[v,K]=ie({controlled:r,default:!!b,name:"SwitchBase",state:"checked"}),h=J(),Q=d=>{p&&p(d),h&&h.onFocus&&h.onFocus(d)},X=d=>{c&&c(d),h&&h.onBlur&&h.onBlur(d)},Y=d=>{if(d.nativeEvent.defaultPrevented)return;const A=d.target.checked;K(A),k&&k(d,A)};let $=n;h&&typeof $>"u"&&($=h.disabled);const Z=m==="checkbox"||m==="radio",M=i({},o,{checked:v,disabled:$,disableFocusRipple:l,edge:g}),_=xe(M);return x.jsxs(Fe,i({component:"span",className:D(_.root,u),centerRipple:!0,focusRipple:!l,disabled:$,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:M,ref:t},f,{children:[x.jsx(Re,i({autoFocus:a,checked:r,defaultChecked:b,className:_.input,disabled:$,id:Z?P:void 0,name:R,onChange:Y,readOnly:B,ref:j,required:T,ownerState:M,tabIndex:C,type:m},m==="checkbox"&&S===void 0?{}:{value:S},F)),v?s:y]}))}),Be=ke({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>H({props:e,name:"MuiStack"})});function Se(e){return U("MuiFormControlLabel",e)}const N=W("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Le=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],je=e=>{const{classes:o,disabled:t,labelPlacement:a,error:r,required:s}=e,u={root:["root",t&&"disabled",`labelPlacement${V(a)}`,r&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",r&&"error"]};return E(u,Se,o)},Te=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${N.label}`]:o.label},o.root,o[`labelPlacement${V(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>i({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${N.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${N.label}`]:{[`&.${N.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),$e=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}})),_e=L.forwardRef(function(o,t){var a,r;const s=H({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:b={},control:n,disabled:l,disableTypography:g,label:y,labelPlacement:P="end",required:F,slotProps:j={}}=s,R=w(s,Le),c=J(),k=(a=l??n.props.disabled)!=null?a:c==null?void 0:c.disabled,p=F??n.props.required,B={disabled:k,required:p};["checked","name","onChange","value","inputRef"].forEach(v=>{typeof n.props[v]>"u"&&typeof s[v]<"u"&&(B[v]=s[v])});const T=ne({props:s,muiFormControl:c,states:["error"]}),C=i({},s,{disabled:k,labelPlacement:P,required:p,error:T.error}),m=je(C),S=(r=j.typography)!=null?r:b.typography;let f=y;return f!=null&&f.type!==G&&!g&&(f=x.jsx(G,i({component:"span"},S,{className:D(m.label,S==null?void 0:S.className),children:f}))),x.jsxs(Te,i({className:D(m.root,u),ownerState:C,ref:t},R,{children:[L.cloneElement(n,B),p?x.jsxs(Be,{display:"block",children:[f,x.jsxs($e,{ownerState:C,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}):f]}))});export{_e as F,Ve as S,pe as u};
