import{g as T,a as B,s as C,h as y,b as s,u as W,C as M,_ as R,c as P,d as j}from"./styled-Dav1juSj.js";import{r as U,j as _}from"./app-CDNeLb_W.js";function N(t){return T("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const E=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=t,e={root:["root",o,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return j(e,N,p)},$=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>s({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=t=>z[t]||t,O=U.forwardRef(function(a,r){const n=W({props:a,name:"MuiTypography"}),i=A(n.color),o=M(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=u}=o,x=R(o,E),m=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),v=g||(l?"p":c[h]||u[h])||"span",b=L(m);return _.jsx($,s({as:v,ref:r,ownerState:m,className:P(b.root,e)},x))});export{O as T};
