import{r as u,j as s}from"./app-tufIzRWB.js";import{t as v}from"./index-BZ3hNmTI.js";import{_ as m,j,R as E,b as p,A as a,J as _}from"./Typography-Cu73DgEg.js";import{R as g,B as y}from"./Button-Bb-yLFhy.js";const d=u.createContext(null);function f(){return u.useContext(d)}const P=typeof Symbol=="function"&&Symbol.for,b=P?Symbol.for("mui.nested"):"__THEME_NESTED__";function M(e,t){return typeof t=="function"?t(e):m({},e,t)}function S(e){const{children:t,theme:n}=e,o=f(),i=u.useMemo(()=>{const r=o===null?n:M(o,n);return r!=null&&(r[b]=o!==null),r},[n,o]);return s.jsx(d.Provider,{value:i,children:t})}const l={};function h(e,t,n,o=!1){return u.useMemo(()=>{const i=e&&t[e]||t;if(typeof n=="function"){const r=n(i),c=e?m({},t,{[e]:r}):r;return o?()=>c:c}return e?m({},t,{[e]:n}):m({},t,n)},[e,t,n,o])}function $(e){const{children:t,theme:n,themeId:o}=e,i=j(l),r=f()||l,c=h(o,i,n),x=h(o,r,n,!0),T=c.direction==="rtl";return s.jsx(S,{theme:x,children:s.jsx(E.Provider,{value:c,children:s.jsx(g,{value:T,children:t})})})}const B=["theme"];function R(e){let{theme:t}=e,n=p(e,B);const o=t[a];return s.jsx($,m({},n,{themeId:o?a:void 0,theme:o||t}))}const z={large:{height:"56px"},medium:{height:"40.1px"}},C=_({palette:{primary:{main:v.color.templete2.primary},textBlack:{main:"#000"}}});function k(e){return s.jsx(R,{theme:C,children:s.jsx(y,{...e,className:e.className,sx:{...z[e.size?e.size:"default"],...e.sx,borderRadius:"0px !important",textTransform:"capitalize !important"},children:e.children})})}export{k as B};