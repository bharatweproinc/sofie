import{u as j,b as S,_ as n,g as I,a as T,s as R,d as N,e as _}from"./Typography-CztQr1d3.js";import{j as w,r as C}from"./app-xnOB8SgL.js";import{c as D}from"./createSvgIcon-mDBLJy9M.js";import{r as M,m as O,a as z}from"./mergeSlotProps-BWFK5ri3.js";import{a as E}from"./useIsFocusVisible-BmNZ5cF1.js";function U(e){return j}const L=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],q=["component","slots","slotProps"],$=["component"];function B(e,o){const{className:t,elementType:r,ownerState:l,externalForwardedProps:a,getSlotOwnerState:i,internalForwardedProps:s}=o,b=S(o,L),{component:F,slots:m={[e]:void 0},slotProps:h={[e]:void 0}}=a;S(a,q);const d=m[e]||r,c=M(h[e],l),v=O(n({className:t},b,{externalForwardedProps:void 0,externalSlotProps:c})),{props:{component:k},internalRef:p}=v,P=S(v.props,$),x=E(p,c==null?void 0:c.ref,o.ref),g=i?i(P):{},u=n({},l,g),f=k,y=z(d,n({},e==="root",!m[e]&&s,P,f&&{as:f},{ref:x}),u);return Object.keys(g).forEach(A=>{delete y[A]}),[d,y]}const H=D(w.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function W(e){return I("MuiAvatar",e)}T("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const G=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],J=U(),K=e=>{const{classes:o,variant:t,colorDefault:r}=e;return _({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},W,o)},Q=R("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:n({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),V=R("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),X=R(H,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function Y({crossOrigin:e,referrerPolicy:o,src:t,srcSet:r}){const[l,a]=C.useState(!1);return C.useEffect(()=>{if(!t&&!r)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=e,s.referrerPolicy=o,s.src=t,r&&(s.srcset=r),()=>{i=!1}},[e,o,t,r]),l}const se=C.forwardRef(function(o,t){const r=J({props:o,name:"MuiAvatar"}),{alt:l,children:a,className:i,component:s="div",slots:b={},slotProps:F={},imgProps:m,sizes:h,src:d,srcSet:c,variant:v="circular"}=r,k=S(r,G);let p=null;const P=Y(n({},m,{src:d,srcSet:c})),x=d||c,g=x&&P!=="error",u=n({},r,{colorDefault:!g,component:s,variant:v}),f=K(u),[y,A]=B("img",{className:f.img,elementType:V,externalForwardedProps:{slots:b,slotProps:{img:n({},m,F.img)}},additionalProps:{alt:l,src:d,srcSet:c,sizes:h},ownerState:u});return g?p=w.jsx(y,n({},A)):a||a===0?p=a:x&&l?p=l[0]:p=w.jsx(X,{ownerState:u,className:f.fallback}),w.jsx(Q,n({as:s,ownerState:u,className:N(f.root,i),ref:t},k,{children:p}))});export{se as A,U as c};
