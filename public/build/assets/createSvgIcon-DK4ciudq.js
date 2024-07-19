import{r as l,e as w,j as S,g as R}from"./app-CmR6fL3e.js";import{g as E,a as j,s as T,c as g,u as M,b as P,_ as y,d as V,e as F,M as A}from"./styled-BWHJBEGv.js";import{s as U,b as k,u as B,a as q,d as D}from"./useIsFocusVisible-C6juXUpB.js";function G(...e){return e.reduce((t,o)=>o==null?t:function(...r){t.apply(this,r),o.apply(this,r)},()=>{})}function L(e,t=166){let o;function n(...r){const a=()=>{e.apply(this,r)};clearTimeout(o),o=setTimeout(a,t)}return n.clear=()=>{clearTimeout(o)},n}function O(e,t){return()=>null}function W(e,t){var o,n;return l.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function z(e){return e&&e.ownerDocument||document}function H(e){return z(e).defaultView||window}function J(e,t){return()=>null}let $=0;function K(e){const[t,o]=l.useState(e),n=e||t;return l.useEffect(()=>{t==null&&($+=1,o(`mui-${$}`))},[t]),n}const x=w.useId;function Q(e){if(x!==void 0){const t=x();return e??t}return K(e)}function X(e,t,o,n,r){return null}function Y({controlled:e,default:t,name:o,state:n="value"}){const{current:r}=l.useRef(e!==void 0),[a,p]=l.useState(t),i=r?e:a,m=l.useCallback(u=>{r||p(u)},[]);return[i,m]}function Z(e){return E("MuiSvgIcon",e)}j("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ee=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],te=e=>{const{color:t,fontSize:o,classes:n}=e,r={root:["root",t!=="inherit"&&`color${g(t)}`,`fontSize${g(o)}`]};return F(r,Z,n)},oe=T("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${g(o.color)}`],t[`fontSize${g(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,n,r,a,p,i,m,u,v,c,d,f,s;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(n=o.create)==null?void 0:n.call(o,"fill",{duration:(r=e.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(p=a.pxToRem)==null?void 0:p.call(a,20))||"1.25rem",medium:((i=e.typography)==null||(m=i.pxToRem)==null?void 0:m.call(i,24))||"1.5rem",large:((u=e.typography)==null||(v=u.pxToRem)==null?void 0:v.call(u,35))||"2.1875rem"}[t.fontSize],color:(c=(d=(e.vars||e).palette)==null||(d=d[t.color])==null?void 0:d.main)!=null?c:{action:(f=(e.vars||e).palette)==null||(f=f.action)==null?void 0:f.active,disabled:(s=(e.vars||e).palette)==null||(s=s.action)==null?void 0:s.disabled,inherit:void 0}[t.color]}}),_=l.forwardRef(function(t,o){const n=M({props:t,name:"MuiSvgIcon"}),{children:r,className:a,color:p="inherit",component:i="svg",fontSize:m="medium",htmlColor:u,inheritViewBox:v=!1,titleAccess:c,viewBox:d="0 0 24 24"}=n,f=P(n,ee),s=l.isValidElement(r)&&r.type==="svg",I=y({},n,{color:p,component:i,fontSize:m,instanceFontSize:t.fontSize,inheritViewBox:v,viewBox:d,hasSvgAsChild:s}),b={};v||(b.viewBox=d);const N=te(I);return S.jsxs(oe,y({as:i,className:V(N.root,a),focusable:"false",color:u,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:o},b,f,s&&r.props,{ownerState:I,children:[s?r.props.children:r,c?S.jsx("title",{children:c}):null]}))});_.muiName="SvgIcon";function ne(e,t){function o(n,r){return S.jsx(_,y({"data-testid":`${t}Icon`,ref:r},n,{children:e}))}return o.muiName=_.muiName,l.memo(l.forwardRef(o))}const re={configure:e=>{A.configure(e)}},le=Object.freeze(Object.defineProperty({__proto__:null,capitalize:g,createChainedFunction:G,createSvgIcon:ne,debounce:L,deprecatedPropType:O,isMuiElement:W,ownerDocument:z,ownerWindow:H,requirePropFactory:J,setRef:U,unstable_ClassNameGenerator:re,unstable_useEnhancedEffect:k,unstable_useId:Q,unsupportedProp:X,useControlled:Y,useEventCallback:B,useForkRef:q,useIsFocusVisible:D},Symbol.toStringTag,{value:"Module"}));var h={};const ae=R(le);var C;function ce(){return C||(C=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=ae}(h)),h}export{Y as a,H as b,ne as c,L as d,G as e,W as i,z as o,ce as r,Q as u};
