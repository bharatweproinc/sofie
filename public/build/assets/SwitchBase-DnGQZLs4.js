import{g as $,a as A,s as F,_ as i,t as D,b as G,d as H,c as J,e as K}from"./Typography-DQ-Dh4RN.js";import{r as M,j as x}from"./app-Xukm92kl.js";import{u as Q}from"./TextField-DNfCJVbT.js";import{B as T}from"./ButtonBase-DI9rgr2e.js";import{a as V}from"./createSvgIcon-CDAGOBZC.js";function X(e){return $("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:t,checked:d,disabled:r,edge:a}=e,l={root:["root",d&&"checked",r&&"disabled",a&&`edge${J(a)}`],input:["input"]};return K(l,X,t)},ee=F(T)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=M.forwardRef(function(t,d){const{autoFocus:r,checked:a,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:P,id:S,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:m,onFocus:g,readOnly:z,required:E=!1,tabIndex:N,type:c,value:b}=t,U=G(t,Y),[k,_]=V({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),o=Q(),L=s=>{g&&g(s),o&&o.onFocus&&o.onFocus(s)},q=s=>{f&&f(s),o&&o.onBlur&&o.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),m&&m(s,C)};let n=y;o&&typeof n>"u"&&(n=o.disabled);const W=c==="checkbox"||c==="radio",u=i({},t,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,i({component:"span",className:H(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:q,ownerState:u,ref:d},U,{children:[x.jsx(se,i({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:W?S:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:P]}))});export{ie as S};
