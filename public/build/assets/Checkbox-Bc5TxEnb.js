import{a as P,g as y,s as B,t as g,c as l,_ as s,f as M,u as S,b as _,d as R,e as H}from"./Typography-DQ-Dh4RN.js";import{j as t,r as u}from"./app-Xukm92kl.js";import{S as E}from"./SwitchBase-DnGQZLs4.js";import{c as x}from"./createSvgIcon-CDAGOBZC.js";const O=x(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=x(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=x(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return y("MuiCheckbox",o)}const m=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:a,size:r}=o,n={root:["root",c&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=H(n,L,e);return s({},e,d)},D=B(E,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:M(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),W=t.jsx(U,{}),q=t.jsx(O,{}),w=t.jsx(V,{}),Q=u.forwardRef(function(e,c){var a,r;const n=S({props:e,name:"MuiCheckbox"}),{checkedIcon:d=W,color:b="primary",icon:z=q,indeterminate:i=!1,indeterminateIcon:h=w,inputProps:I,size:p="medium",className:$}=n,j=_(n,N),C=i?h:z,k=i?h:d,f=s({},n,{color:b,indeterminate:i,size:p}),v=F(f);return t.jsx(D,s({type:"checkbox",inputProps:s({"data-indeterminate":i},I),icon:u.cloneElement(C,{fontSize:(a=C.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:f,ref:c,className:R(v.root,$)},j,{classes:v}))});export{Q as C};
