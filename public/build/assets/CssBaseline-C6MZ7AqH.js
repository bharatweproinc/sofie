import{u as d,_ as a}from"./styled-C93-adk3.js";import{j as i,r as u}from"./app-BcIj6nv6.js";import{G as b}from"./GlobalStyles-BcUXbAdl.js";const g=(o,e)=>a({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!o.vars&&{colorScheme:o.palette.mode}),m=o=>a({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),f=(o,e=!1)=>{var r;const t={};e&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([c,p])=>{var n;t[o.getColorSchemeSelector(c).replace(/\s*&/,"")]={colorScheme:(n=p.palette)==null?void 0:n.mode}});let s=a({html:g(o,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:a({margin:0},m(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},t);const l=(r=o.components)==null||(r=r.MuiCssBaseline)==null?void 0:r.styleOverrides;return l&&(s=[s,l]),s};function v(o){const e=d({props:o,name:"MuiCssBaseline"}),{children:r,enableColorScheme:t=!1}=e;return i.jsxs(u.Fragment,{children:[i.jsx(b,{styles:s=>f(s,t)}),r]})}export{v as C};
