import{r as g,j as t}from"./app-D8U5PHYV.js";import{h as x}from"./moment-C5S46NFB.js";import{C}from"./Card-iRkNCzbp.js";import{a as b,g as y,s as p,u as A,b as j,_ as v,d as l,e as R,T as r}from"./Typography-DQvRHjr3.js";import{B as _}from"./ButtonBase-CEF_sSfC.js";import{C as w}from"./CardMedia-9bpdkRew.js";import{C as H}from"./CardContent-CpIQJho8.js";import{B as d}from"./Box-q44rX2z1.js";import"./Paper-BYVsVFUH.js";import"./useIsFocusVisible-BeLHK-v7.js";function N(o){return y("MuiCardActionArea",o)}const n=b("MuiCardActionArea",["root","focusVisible","focusHighlight"]),B=["children","className","focusVisibleClassName"],k=o=>{const{classes:s}=o;return R({root:["root"],focusHighlight:["focusHighlight"]},N,s)},M=p(_,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${n.focusVisible} .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),V=p("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,s)=>s.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),F=g.forwardRef(function(s,c){const e=A({props:s,name:"MuiCardActionArea"}),{children:h,className:u,focusVisibleClassName:m}=e,f=j(e,B),i=e,a=k(i);return t.jsxs(M,v({className:l(a.root,u),focusVisibleClassName:l(m,a.focusVisible),ref:c,ownerState:i},f,{children:[h,t.jsx(V,{className:a.focusHighlight,ownerState:i})]}))});function q({item:o,src:s}){return t.jsx(C,{sx:{height:"100%",borderRadius:"12px",boxShadow:"0px 3px 11px 0px #8e8a8a5c"},children:t.jsxs(F,{children:[t.jsx(w,{component:"img",style:{height:345,objectFit:"contain"},image:o.profile_photo,alt:"green iguana"}),t.jsxs(H,{children:[t.jsx(r,{gutterBottom:!0,component:"div",children:o.industry_sector.map(String).join(" , ")}),t.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontWeight:"bold !important"},children:o.company_name}),t.jsx(r,{variant:"body2",color:"text.secondary",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:o.additional_information}),t.jsxs(d,{className:"flex gap-2 items-center mt-3",children:[t.jsx("img",{src:o.founder_photo,style:{borderRadius:"50%",height:"45px",width:"45px",objectFit:"cover"}}),t.jsxs(d,{className:"block",children:[t.jsx(r,{sx:{fontWeight:"bold !important"},children:o.user.name}),t.jsx(r,{color:"text.secondary",children:x(o.user.created_at).format("LL")})]})]})]})]})})}export{q as default};
