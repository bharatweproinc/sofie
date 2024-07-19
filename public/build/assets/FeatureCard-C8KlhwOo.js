import{r as x,j as t}from"./app-BIipo8El.js";import{h as f}from"./moment-C5S46NFB.js";import{C}from"./Card-D3l4iK5_.js";import{a as b,g as y,s as p,u as A,b as j,_ as v,d as l,e as R}from"./DefaultPropsProvider-DCh9ZCp3.js";import{B as w}from"./ButtonBase-D9ujge8j.js";import{C as H}from"./CardMedia-k17ci4zd.js";import{C as N}from"./CardContent-D5uh6JwB.js";import{T as r}from"./Typography-CZPS58Mj.js";import{B as d}from"./Box-DZozpeJv.js";import"./Paper-FjaSN4g-.js";import"./useIsFocusVisible-LvsNc5Z6.js";function k(o){return y("MuiCardActionArea",o)}const n=b("MuiCardActionArea",["root","focusVisible","focusHighlight"]),B=["children","className","focusVisibleClassName"],_=o=>{const{classes:s}=o;return R({root:["root"],focusHighlight:["focusHighlight"]},k,s)},M=p(w,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${n.focusVisible} .${n.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),V=p("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,s)=>s.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),W=x.forwardRef(function(s,c){const e=A({props:s,name:"MuiCardActionArea"}),{children:u,className:h,focusVisibleClassName:m}=e,g=j(e,B),i=e,a=_(i);return t.jsxs(M,v({className:l(a.root,h),focusVisibleClassName:l(m,a.focusVisible),ref:c,ownerState:i},g,{children:[u,t.jsx(V,{className:a.focusHighlight,ownerState:i})]}))});function z({item:o,src:s}){return t.jsx(C,{sx:{height:"100%",borderRadius:"12px",boxShadow:"0px 3px 11px 0px #8e8a8a5c"},children:t.jsxs(W,{children:[t.jsx(H,{component:"img",style:{height:345},image:o.link,alt:"green iguana"}),t.jsxs(N,{children:[t.jsx(r,{gutterBottom:!0,component:"div",children:o.industry_sector.map(String).join(" , ")}),t.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontWeight:"bold !important"},children:o.company_name}),t.jsx(r,{variant:"body2",color:"text.secondary",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:o.additional_information}),t.jsxs(d,{className:"flex gap-2 items-center mt-3",children:[t.jsx("img",{src:s,style:{borderRadius:"50%",height:"45px",width:"45px"}}),t.jsxs(d,{className:"block",children:[t.jsx(r,{sx:{fontWeight:"bold !important"},children:o.user.name}),t.jsx(r,{color:"text.secondary",children:f(o.user.created_at).format("LL")})]})]})]})]})})}export{z as default};