import{r as x,j as t}from"./app-CmR6fL3e.js";import{h as f}from"./moment-C5S46NFB.js";import{C}from"./Card-DjjaNRZQ.js";import{a as b,g as y,s as p,u as A,b as j,_ as v,d as l,e as R}from"./styled-BWHJBEGv.js";import{B as w}from"./ButtonBase-CmtdNuZP.js";import{C as H}from"./CardMedia-DNh0WLHT.js";import{C as N}from"./CardContent-BhX88dqM.js";import{T as e}from"./Typography-BfF8vS_5.js";import{B as d}from"./Box-DEbHx_he.js";import"./Paper-Cfkr0OwE.js";import"./useIsFocusVisible-C6juXUpB.js";function k(o){return y("MuiCardActionArea",o)}const n=b("MuiCardActionArea",["root","focusVisible","focusHighlight"]),B=["children","className","focusVisibleClassName"],_=o=>{const{classes:s}=o;return R({root:["root"],focusHighlight:["focusHighlight"]},k,s)},M=p(w,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${n.focusVisible} .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),V=p("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,s)=>s.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),F=x.forwardRef(function(s,c){const i=A({props:s,name:"MuiCardActionArea"}),{children:h,className:u,focusVisibleClassName:m}=i,g=j(i,B),r=i,a=_(r);return t.jsxs(M,v({className:l(a.root,u),focusVisibleClassName:l(m,a.focusVisible),ref:c,ownerState:r},g,{children:[h,t.jsx(V,{className:a.focusHighlight,ownerState:r})]}))});function D({item:o,src:s}){return t.jsx(C,{sx:{height:"100%",borderRadius:"12px",boxShadow:"0px 3px 11px 0px #8e8a8a5c"},children:t.jsxs(F,{children:[t.jsx(H,{component:"img",style:{height:345,objectFit:"contain"},image:o.link,alt:"green iguana"}),t.jsxs(N,{children:[t.jsx(e,{gutterBottom:!0,component:"div",children:o.industry_sector.map(String).join(" , ")}),t.jsx(e,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontWeight:"bold !important"},children:o.company_name}),t.jsx(e,{variant:"body2",color:"text.secondary",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:o.additional_information}),t.jsxs(d,{className:"flex gap-2 items-center mt-3",children:[t.jsx("img",{src:s,style:{borderRadius:"50%",height:"45px",width:"45px",objectFit:"cover"}}),t.jsxs(d,{className:"block",children:[t.jsx(e,{sx:{fontWeight:"bold !important"},children:o.user.name}),t.jsx(e,{color:"text.secondary",children:f(o.user.created_at).format("LL")})]})]})]})]})})}export{D as default};
