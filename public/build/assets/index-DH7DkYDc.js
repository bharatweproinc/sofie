import{r as R,j as c,a as he,o as Fr}from"./app-TQkCsXfF.js";import{B as Ie}from"./Box-Ci8uPhC9.js";import{G as Le}from"./Grid-DebWUkMh.js";import{T as me}from"./Typography-CtEPGeuF.js";import{a as O,t as _r,T as Ir,_ as Ue,v as It,w as Hr,i as ar,x as Vr,s as ct,u as sr,g as Ur,b as zr,d as lr,e as pr,h as tt,y as qr}from"./styled-BoSLNyrn.js";import{R as Xr,u as Yr,B as Gr}from"./Button-CAhj9DkT.js";import{u as Jr}from"./useTheme-CUDMdppF.js";import{o as Ht,a as Kr,u as Qr}from"./createSvgIcon-D5OsMnkY.js";import{P as Zr,u as eo,c as rt,d as Vt,L as to,b as ro,e as oo,g as no,A as io,S as ao,I as so,h as lo,D as po}from"./Sofie-logo-DwkGdYjm.js";import{u as xt,b as Ut,c as ot,a as zt,d as co,T as uo}from"./useIsFocusVisible-CQFiR6GA.js";import{G as qt}from"./Grow-J80WXli2.js";import{t as fo}from"./index-azL-rvhK.js";const cr=R.createContext(null);function ur(){return R.useContext(cr)}const mo=typeof Symbol=="function"&&Symbol.for,vo=mo?Symbol.for("mui.nested"):"__THEME_NESTED__";function ho(e,t){return typeof t=="function"?t(e):O({},e,t)}function go(e){const{children:t,theme:r}=e,o=ur(),n=R.useMemo(()=>{const i=o===null?r:ho(o,r);return i!=null&&(i[vo]=o!==null),i},[r,o]);return c.jsx(cr.Provider,{value:n,children:t})}const Xt={};function Yt(e,t,r,o=!1){return R.useMemo(()=>{const n=e&&t[e]||t;if(typeof r=="function"){const i=r(n),l=e?O({},t,{[e]:i}):i;return o?()=>l:l}return e?O({},t,{[e]:r}):O({},t,r)},[e,t,r,o])}function xo(e){const{children:t,theme:r,themeId:o}=e,n=_r(Xt),i=ur()||Xt,l=Yt(o,n,r),s=Yt(o,i,r,!0),a=l.direction==="rtl";return c.jsx(go,{theme:s,children:c.jsx(Ir.Provider,{value:l,children:c.jsx(Xr,{value:a,children:t})})})}const yo=["theme"];function bo(e){let{theme:t}=e,r=Ue(e,yo);const o=t[It];return c.jsx(xo,O({},r,{themeId:o?It:void 0,theme:o||t}))}const wo={disableDefaultClasses:!1},Po=R.createContext(wo);function Oo(e){const{disableDefaultClasses:t}=R.useContext(Po);return r=>t?"":e(r)}const fr="base";function To(e){return`${fr}--${e}`}function jo(e,t){return`${fr}-${e}-${t}`}function dr(e,t){const r=Hr[t];return r?To(r):jo(e,t)}function Eo(e,t){const r={};return t.forEach(o=>{r[o]=dr(e,o)}),r}var W="top",H="bottom",V="right",N="left",Pt="auto",ze=[W,H,V,N],Ee="start",He="end",Ro="clippingParents",mr="viewport",We="popper",Co="reference",Gt=ze.reduce(function(e,t){return e.concat([t+"-"+Ee,t+"-"+He])},[]),vr=[].concat(ze,[Pt]).reduce(function(e,t){return e.concat([t,t+"-"+Ee,t+"-"+He])},[]),Ao="beforeRead",$o="read",Mo="afterRead",So="beforeMain",ko="main",Do="afterMain",Bo="beforeWrite",Lo="write",Wo="afterWrite",No=[Ao,$o,Mo,So,ko,Do,Bo,Lo,Wo];function te(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function xe(e){var t=_(e).Element;return e instanceof t||e instanceof Element}function I(e){var t=_(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ot(e){if(typeof ShadowRoot>"u")return!1;var t=_(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Fo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!I(i)||!te(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function _o(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(a,u){return a[u]="",a},{});!I(n)||!te(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Io={name:"applyStyles",enabled:!0,phase:"write",fn:Fo,effect:_o,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var ge=Math.max,pt=Math.min,Re=Math.round;function yt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function hr(){return!/^((?!chrome|android).)*safari/i.test(yt())}function Ce(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&I(e)&&(n=e.offsetWidth>0&&Re(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Re(o.height)/e.offsetHeight||1);var l=xe(e)?_(e):window,s=l.visualViewport,a=!hr()&&r,u=(o.left+(a&&s?s.offsetLeft:0))/n,p=(o.top+(a&&s?s.offsetTop:0))/i,v=o.width/n,y=o.height/i;return{width:v,height:y,top:p,right:u+v,bottom:p+y,left:u,x:u,y:p}}function Tt(e){var t=Ce(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function gr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ot(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return _(e).getComputedStyle(e)}function Ho(e){return["table","td","th"].indexOf(te(e))>=0}function le(e){return((xe(e)?e.ownerDocument:e.document)||window.document).documentElement}function ut(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(Ot(e)?e.host:null)||le(e)}function Jt(e){return!I(e)||ne(e).position==="fixed"?null:e.offsetParent}function Vo(e){var t=/firefox/i.test(yt()),r=/Trident/i.test(yt());if(r&&I(e)){var o=ne(e);if(o.position==="fixed")return null}var n=ut(e);for(Ot(n)&&(n=n.host);I(n)&&["html","body"].indexOf(te(n))<0;){var i=ne(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function qe(e){for(var t=_(e),r=Jt(e);r&&Ho(r)&&ne(r).position==="static";)r=Jt(r);return r&&(te(r)==="html"||te(r)==="body"&&ne(r).position==="static")?t:r||Vo(e)||t}function jt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Fe(e,t,r){return ge(e,pt(t,r))}function Uo(e,t,r){var o=Fe(e,t,r);return o>r?r:o}function xr(){return{top:0,right:0,bottom:0,left:0}}function yr(e){return Object.assign({},xr(),e)}function br(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var zo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yr(typeof t!="number"?t:br(t,ze))};function qo(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,s=ee(r.placement),a=jt(s),u=[N,V].indexOf(s)>=0,p=u?"height":"width";if(!(!i||!l)){var v=zo(n.padding,r),y=Tt(i),d=a==="y"?W:N,T=a==="y"?H:V,m=r.rects.reference[p]+r.rects.reference[a]-l[a]-r.rects.popper[p],h=l[a]-r.rects.reference[a],P=qe(i),C=P?a==="y"?P.clientHeight||0:P.clientWidth||0:0,b=m/2-h/2,f=v[d],x=C-y[p]-v[T],g=C/2-y[p]/2+b,j=Fe(f,g,x),$=a;r.modifiersData[o]=(t={},t[$]=j,t.centerOffset=j-g,t)}}function Xo(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||gr(t.elements.popper,n)&&(t.elements.arrow=n))}const Yo={name:"arrow",enabled:!0,phase:"main",fn:qo,effect:Xo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ae(e){return e.split("-")[1]}var Go={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Jo(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Re(r*n)/n||0,y:Re(o*n)/n||0}}function Kt(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=l.x,d=y===void 0?0:y,T=l.y,m=T===void 0?0:T,h=typeof p=="function"?p({x:d,y:m}):{x:d,y:m};d=h.x,m=h.y;var P=l.hasOwnProperty("x"),C=l.hasOwnProperty("y"),b=N,f=W,x=window;if(u){var g=qe(r),j="clientHeight",$="clientWidth";if(g===_(r)&&(g=le(r),ne(g).position!=="static"&&s==="absolute"&&(j="scrollHeight",$="scrollWidth")),g=g,n===W||(n===N||n===V)&&i===He){f=H;var A=v&&g===x&&x.visualViewport?x.visualViewport.height:g[j];m-=A-o.height,m*=a?1:-1}if(n===N||(n===W||n===H)&&i===He){b=V;var E=v&&g===x&&x.visualViewport?x.visualViewport.width:g[$];d-=E-o.width,d*=a?1:-1}}var S=Object.assign({position:s},u&&Go),B=p===!0?Jo({x:d,y:m},_(r)):{x:d,y:m};if(d=B.x,m=B.y,a){var k;return Object.assign({},S,(k={},k[f]=C?"0":"",k[b]=P?"0":"",k.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",k))}return Object.assign({},S,(t={},t[f]=C?m+"px":"",t[b]=P?d+"px":"",t.transform="",t))}function Ko(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,u={placement:ee(t.placement),variation:Ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Kt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Kt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Qo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ko,data:{}};var nt={passive:!0};function Zo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,a=_(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(p){p.addEventListener("scroll",r.update,nt)}),s&&a.addEventListener("resize",r.update,nt),function(){i&&u.forEach(function(p){p.removeEventListener("scroll",r.update,nt)}),s&&a.removeEventListener("resize",r.update,nt)}}const en={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zo,data:{}};var tn={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(e){return e.replace(/left|right|bottom|top/g,function(t){return tn[t]})}var rn={start:"end",end:"start"};function Qt(e){return e.replace(/start|end/g,function(t){return rn[t]})}function Et(e){var t=_(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Rt(e){return Ce(le(e)).left+Et(e).scrollLeft}function on(e,t){var r=_(e),o=le(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var u=hr();(u||!u&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+Rt(e),y:a}}function nn(e){var t,r=le(e),o=Et(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=ge(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ge(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Rt(e),a=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=ge(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function Ct(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function wr(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:I(e)&&Ct(e)?e:wr(ut(e))}function _e(e,t){var r;t===void 0&&(t=[]);var o=wr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=_(o),l=n?[i].concat(i.visualViewport||[],Ct(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(_e(ut(l)))}function bt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function an(e,t){var r=Ce(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Zt(e,t,r){return t===mr?bt(on(e,r)):xe(t)?an(t,r):bt(nn(le(e)))}function sn(e){var t=_e(ut(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&I(e)?qe(e):e;return xe(o)?t.filter(function(n){return xe(n)&&gr(n,o)&&te(n)!=="body"}):[]}function ln(e,t,r,o){var n=t==="clippingParents"?sn(e):[].concat(t),i=[].concat(n,[r]),l=i[0],s=i.reduce(function(a,u){var p=Zt(e,u,o);return a.top=ge(p.top,a.top),a.right=pt(p.right,a.right),a.bottom=pt(p.bottom,a.bottom),a.left=ge(p.left,a.left),a},Zt(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Pr(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,i=o?Ae(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case W:a={x:l,y:t.y-r.height};break;case H:a={x:l,y:t.y+t.height};break;case V:a={x:t.x+t.width,y:s};break;case N:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var u=n?jt(n):null;if(u!=null){var p=u==="y"?"height":"width";switch(i){case Ee:a[u]=a[u]-(t[p]/2-r[p]/2);break;case He:a[u]=a[u]+(t[p]/2-r[p]/2);break}}return a}function Ve(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?Ro:s,u=r.rootBoundary,p=u===void 0?mr:u,v=r.elementContext,y=v===void 0?We:v,d=r.altBoundary,T=d===void 0?!1:d,m=r.padding,h=m===void 0?0:m,P=yr(typeof h!="number"?h:br(h,ze)),C=y===We?Co:We,b=e.rects.popper,f=e.elements[T?C:y],x=ln(xe(f)?f:f.contextElement||le(e.elements.popper),a,p,l),g=Ce(e.elements.reference),j=Pr({reference:g,element:b,strategy:"absolute",placement:n}),$=bt(Object.assign({},b,j)),A=y===We?$:g,E={top:x.top-A.top+P.top,bottom:A.bottom-x.bottom+P.bottom,left:x.left-A.left+P.left,right:A.right-x.right+P.right},S=e.modifiersData.offset;if(y===We&&S){var B=S[n];Object.keys(E).forEach(function(k){var U=[V,H].indexOf(k)>=0?1:-1,z=[W,H].indexOf(k)>=0?"y":"x";E[k]+=B[z]*U})}return E}function pn(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,u=a===void 0?vr:a,p=Ae(o),v=p?s?Gt:Gt.filter(function(T){return Ae(T)===p}):ze,y=v.filter(function(T){return u.indexOf(T)>=0});y.length===0&&(y=v);var d=y.reduce(function(T,m){return T[m]=Ve(e,{placement:m,boundary:n,rootBoundary:i,padding:l})[ee(m)],T},{});return Object.keys(d).sort(function(T,m){return d[T]-d[m]})}function cn(e){if(ee(e)===Pt)return[];var t=lt(e);return[Qt(e),t,Qt(t)]}function un(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,a=r.fallbackPlacements,u=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,d=r.flipVariations,T=d===void 0?!0:d,m=r.allowedAutoPlacements,h=t.options.placement,P=ee(h),C=P===h,b=a||(C||!T?[lt(h)]:cn(h)),f=[h].concat(b).reduce(function(re,K){return re.concat(ee(K)===Pt?pn(t,{placement:K,boundary:p,rootBoundary:v,padding:u,flipVariations:T,allowedAutoPlacements:m}):K)},[]),x=t.rects.reference,g=t.rects.popper,j=new Map,$=!0,A=f[0],E=0;E<f.length;E++){var S=f[E],B=ee(S),k=Ae(S)===Ee,U=[W,H].indexOf(B)>=0,z=U?"width":"height",M=Ve(t,{placement:S,boundary:p,rootBoundary:v,altBoundary:y,padding:u}),D=U?k?V:N:k?H:W;x[z]>g[z]&&(D=lt(D));var J=lt(D),q=[];if(i&&q.push(M[B]<=0),s&&q.push(M[D]<=0,M[J]<=0),q.every(function(re){return re})){A=S,$=!1;break}j.set(S,q)}if($)for(var ye=T?3:1,be=function(K){var ie=f.find(function(ae){var L=j.get(ae);if(L)return L.slice(0,K).every(function(X){return X})});if(ie)return A=ie,"break"},pe=ye;pe>0;pe--){var ce=be(pe);if(ce==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const fn={name:"flip",enabled:!0,phase:"main",fn:un,requiresIfExists:["offset"],data:{_skip:!1}};function er(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tr(e){return[W,V,H,N].some(function(t){return e[t]>=0})}function dn(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ve(t,{elementContext:"reference"}),s=Ve(t,{altBoundary:!0}),a=er(l,o),u=er(s,n,i),p=tr(a),v=tr(u);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const mn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:dn};function vn(e,t,r){var o=ee(e),n=[N,W].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[N,V].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function hn(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=vr.reduce(function(p,v){return p[v]=vn(v,t.rects,i),p},{}),s=l[t.placement],a=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}const gn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:hn};function xn(e){var t=e.state,r=e.name;t.modifiersData[r]=Pr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yn={name:"popperOffsets",enabled:!0,phase:"read",fn:xn,data:{}};function bn(e){return e==="x"?"y":"x"}function wn(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,a=r.boundary,u=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,d=y===void 0?!0:y,T=r.tetherOffset,m=T===void 0?0:T,h=Ve(t,{boundary:a,rootBoundary:u,padding:v,altBoundary:p}),P=ee(t.placement),C=Ae(t.placement),b=!C,f=jt(P),x=bn(f),g=t.modifiersData.popperOffsets,j=t.rects.reference,$=t.rects.popper,A=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,E=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(g){if(i){var k,U=f==="y"?W:N,z=f==="y"?H:V,M=f==="y"?"height":"width",D=g[f],J=D+h[U],q=D-h[z],ye=d?-$[M]/2:0,be=C===Ee?j[M]:$[M],pe=C===Ee?-$[M]:-j[M],ce=t.elements.arrow,re=d&&ce?Tt(ce):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:xr(),ie=K[U],ae=K[z],L=Fe(0,j[M],re[M]),X=b?j[M]/2-ye-L-ie-E.mainAxis:be-L-ie-E.mainAxis,we=b?-j[M]/2+ye+L+ae+E.mainAxis:pe+L+ae+E.mainAxis,Q=t.elements.arrow&&qe(t.elements.arrow),ft=Q?f==="y"?Q.clientTop||0:Q.clientLeft||0:0,Xe=(k=S==null?void 0:S[f])!=null?k:0,Ye=D+X-Xe-ft,Z=D+we-Xe,$e=Fe(d?pt(J,Ye):J,D,d?ge(q,Z):q);g[f]=$e,B[f]=$e-D}if(s){var Ge,ue=f==="x"?W:N,Je=f==="x"?H:V,Y=g[x],Pe=x==="y"?"height":"width",fe=Y+h[ue],Oe=Y-h[Je],Te=[W,N].indexOf(P)!==-1,je=(Ge=S==null?void 0:S[x])!=null?Ge:0,de=Te?fe:Y-j[Pe]-$[Pe]-je+E.altAxis,Me=Te?Y+j[Pe]+$[Pe]-je-E.altAxis:Oe,Ke=d&&Te?Uo(de,Y,Me):Fe(d?de:fe,Y,d?Me:Oe);g[x]=Ke,B[x]=Ke-Y}t.modifiersData[o]=B}}const Pn={name:"preventOverflow",enabled:!0,phase:"main",fn:wn,requiresIfExists:["offset"]};function On(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Tn(e){return e===_(e)||!I(e)?Et(e):On(e)}function jn(e){var t=e.getBoundingClientRect(),r=Re(t.width)/e.offsetWidth||1,o=Re(t.height)/e.offsetHeight||1;return r!==1||o!==1}function En(e,t,r){r===void 0&&(r=!1);var o=I(t),n=I(t)&&jn(t),i=le(t),l=Ce(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((te(t)!=="body"||Ct(i))&&(s=Tn(t)),I(t)?(a=Ce(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Rt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Rn(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Cn(e){var t=Rn(e);return No.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function An(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function $n(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var rr={placement:"bottom",modifiers:[],strategy:"absolute"};function or(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Mn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?rr:n;return function(s,a,u){u===void 0&&(u=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},rr,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},v=[],y=!1,d={state:p,setOptions:function(P){var C=typeof P=="function"?P(p.options):P;m(),p.options=Object.assign({},i,p.options,C),p.scrollParents={reference:xe(s)?_e(s):s.contextElement?_e(s.contextElement):[],popper:_e(a)};var b=Cn($n([].concat(o,p.options.modifiers)));return p.orderedModifiers=b.filter(function(f){return f.enabled}),T(),d.update()},forceUpdate:function(){if(!y){var P=p.elements,C=P.reference,b=P.popper;if(or(C,b)){p.rects={reference:En(C,qe(b),p.options.strategy==="fixed"),popper:Tt(b)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var x=p.orderedModifiers[f],g=x.fn,j=x.options,$=j===void 0?{}:j,A=x.name;typeof g=="function"&&(p=g({state:p,options:$,name:A,instance:d})||p)}}}},update:An(function(){return new Promise(function(h){d.forceUpdate(),h(p)})}),destroy:function(){m(),y=!0}};if(!or(s,a))return d;d.setOptions(u).then(function(h){!y&&u.onFirstUpdate&&u.onFirstUpdate(h)});function T(){p.orderedModifiers.forEach(function(h){var P=h.name,C=h.options,b=C===void 0?{}:C,f=h.effect;if(typeof f=="function"){var x=f({state:p,name:P,instance:d,options:b}),g=function(){};v.push(x||g)}})}function m(){v.forEach(function(h){return h()}),v=[]}return d}}var Sn=[en,yn,Qo,Io,gn,fn,Pn,Yo,mn],kn=Mn({defaultModifiers:Sn});const Or="Popper";function Dn(e){return dr(Or,e)}Eo(Or,["root"]);const Bn=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Ln=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Wn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function wt(e){return typeof e=="function"?e():e}function Nn(e){return e.nodeType!==void 0}const Fn=()=>ar({root:["root"]},Oo(Dn)),_n={},In=R.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:l,disablePortal:s,modifiers:a,open:u,placement:p,popperOptions:v,popperRef:y,slotProps:d={},slots:T={},TransitionProps:m}=t,h=Ue(t,Bn),P=R.useRef(null),C=xt(P,r),b=R.useRef(null),f=xt(b,y),x=R.useRef(f);Ut(()=>{x.current=f},[f]),R.useImperativeHandle(y,()=>b.current,[]);const g=Wn(p,l),[j,$]=R.useState(g),[A,E]=R.useState(wt(n));R.useEffect(()=>{b.current&&b.current.forceUpdate()}),R.useEffect(()=>{n&&E(wt(n))},[n]),Ut(()=>{if(!A||!u)return;const z=J=>{$(J.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{z(J)}}];a!=null&&(M=M.concat(a)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const D=kn(A,P.current,O({placement:g},v,{modifiers:M}));return x.current(D),()=>{D.destroy(),x.current(null)}},[A,s,a,u,v,g]);const S={placement:j};m!==null&&(S.TransitionProps=m);const B=Fn(),k=(o=T.root)!=null?o:"div",U=eo({elementType:k,externalSlotProps:d.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:C},ownerState:t,className:B.root});return c.jsx(k,O({},U,{children:typeof i=="function"?i(S):i}))}),Hn=R.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:u,open:p,placement:v="bottom",popperOptions:y=_n,popperRef:d,style:T,transition:m=!1,slotProps:h={},slots:P={}}=t,C=Ue(t,Ln),[b,f]=R.useState(!0),x=()=>{f(!1)},g=()=>{f(!0)};if(!a&&!p&&(!m||b))return null;let j;if(i)j=i;else if(o){const E=wt(o);j=E&&Nn(E)?Ht(E).body:Ht(null).body}const $=!p&&a&&(!m||b)?"none":void 0,A=m?{in:p,onEnter:x,onExited:g}:void 0;return c.jsx(Zr,{disablePortal:s,container:j,children:c.jsx(In,O({anchorEl:o,direction:l,disablePortal:s,modifiers:u,ref:r,open:m?!b:p,placement:v,popperOptions:y,popperRef:d,slotProps:h,slots:P},C,{style:O({position:"fixed",top:0,left:0,display:$},T),TransitionProps:A,children:n}))})});var At={};Object.defineProperty(At,"__esModule",{value:!0});var Tr=At.default=void 0,Vn=zn(R),Un=Vr;function jr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(jr=function(o){return o?r:t})(e)}function zn(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=jr(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function qn(e){return Object.keys(e).length===0}function Xn(e=null){const t=Vn.useContext(Un.ThemeContext);return!t||qn(t)?e:t}Tr=At.default=Xn;const Yn=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Gn=ct(Hn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Er=R.forwardRef(function(t,r){var o;const n=Tr(),i=sr({props:t,name:"MuiPopper"}),{anchorEl:l,component:s,components:a,componentsProps:u,container:p,disablePortal:v,keepMounted:y,modifiers:d,open:T,placement:m,popperOptions:h,popperRef:P,transition:C,slots:b,slotProps:f}=i,x=Ue(i,Yn),g=(o=b==null?void 0:b.root)!=null?o:a==null?void 0:a.Root,j=O({anchorEl:l,container:p,disablePortal:v,keepMounted:y,modifiers:d,open:T,placement:m,popperOptions:h,popperRef:P,transition:C},x);return c.jsx(Gn,O({as:s,direction:n==null?void 0:n.direction,slots:{root:g},slotProps:f??u},j,{ref:r}))});function Jn(e){return zr("MuiTooltip",e)}const se=Ur("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Kn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Qn(e){return Math.round(e*1e5)/1e5}const Zn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${lr(i.split("-")[0])}`],arrow:["arrow"]};return ar(l,Jn,t)},ei=ct(Er,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>O({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${se.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${se.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${se.arrow}`]:O({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${se.arrow}`]:O({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),ti=ct("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${lr(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>O({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:pr(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Qn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${se.popper}[data-popper-placement*="left"] &`]:O({transformOrigin:"right center"},t.isRtl?O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):O({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${se.popper}[data-popper-placement*="right"] &`]:O({transformOrigin:"left center"},t.isRtl?O({marginRight:"14px"},t.touch&&{marginRight:"24px"}):O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${se.popper}[data-popper-placement*="top"] &`]:O({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${se.popper}[data-popper-placement*="bottom"] &`]:O({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),ri=ct("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:pr(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let it=!1;const nr=new uo;let Ne={x:0,y:0};function at(e,t){return(r,...o)=>{t&&t(r,...o),e(r,...o)}}const st=R.forwardRef(function(t,r){var o,n,i,l,s,a,u,p,v,y,d,T,m,h,P,C,b,f,x;const g=sr({props:t,name:"MuiTooltip"}),{arrow:j=!1,children:$,components:A={},componentsProps:E={},describeChild:S=!1,disableFocusListener:B=!1,disableHoverListener:k=!1,disableInteractive:U=!1,disableTouchListener:z=!1,enterDelay:M=100,enterNextDelay:D=0,enterTouchDelay:J=700,followCursor:q=!1,id:ye,leaveDelay:be=0,leaveTouchDelay:pe=1500,onClose:ce,onOpen:re,open:K,placement:ie="bottom",PopperComponent:ae,PopperProps:L={},slotProps:X={},slots:we={},title:Q,TransitionComponent:ft=qt,TransitionProps:Xe}=g,Ye=Ue(g,Kn),Z=R.isValidElement($)?$:c.jsx("span",{children:$}),$e=Jr(),Ge=Yr(),[ue,Je]=R.useState(),[Y,Pe]=R.useState(null),fe=R.useRef(!1),Oe=U||q,Te=ot(),je=ot(),de=ot(),Me=ot(),[Ke,$t]=Kr({controlled:K,default:!1,name:"Tooltip",state:"open"});let oe=Ke;const dt=Qr(ye),Se=R.useRef(),Qe=zt(()=>{Se.current!==void 0&&(document.body.style.WebkitUserSelect=Se.current,Se.current=void 0),Me.clear()});R.useEffect(()=>Qe,[Qe]);const Mt=w=>{nr.clear(),it=!0,$t(!0),re&&!oe&&re(w)},Ze=zt(w=>{nr.start(800+be,()=>{it=!1}),$t(!1),ce&&oe&&ce(w),Te.start($e.transitions.duration.shortest,()=>{fe.current=!1})}),et=w=>{fe.current&&w.type!=="touchstart"||(ue&&ue.removeAttribute("title"),je.clear(),de.clear(),M||it&&D?je.start(it?D:M,()=>{Mt(w)}):Mt(w))},mt=w=>{je.clear(),de.start(be,()=>{Ze(w)})},{isFocusVisibleRef:St,onBlur:Rr,onFocus:Cr,ref:Ar}=co(),[,kt]=R.useState(!1),Dt=w=>{Rr(w),St.current===!1&&(kt(!1),mt(w))},Bt=w=>{ue||Je(w.currentTarget),Cr(w),St.current===!0&&(kt(!0),et(w))},Lt=w=>{fe.current=!0;const F=Z.props;F.onTouchStart&&F.onTouchStart(w)},$r=w=>{Lt(w),de.clear(),Te.clear(),Qe(),Se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Me.start(J,()=>{document.body.style.WebkitUserSelect=Se.current,et(w)})},Mr=w=>{Z.props.onTouchEnd&&Z.props.onTouchEnd(w),Qe(),de.start(pe,()=>{Ze(w)})};R.useEffect(()=>{if(!oe)return;function w(F){(F.key==="Escape"||F.key==="Esc")&&Ze(F)}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[Ze,oe]);const Sr=xt(Z.ref,Ar,Je,r);!Q&&Q!==0&&(oe=!1);const vt=R.useRef(),kr=w=>{const F=Z.props;F.onMouseMove&&F.onMouseMove(w),Ne={x:w.clientX,y:w.clientY},vt.current&&vt.current.update()},ke={},ht=typeof Q=="string";S?(ke.title=!oe&&ht&&!k?Q:null,ke["aria-describedby"]=oe?dt:null):(ke["aria-label"]=ht?Q:null,ke["aria-labelledby"]=oe&&!ht?dt:null);const G=O({},ke,Ye,Z.props,{className:tt(Ye.className,Z.props.className),onTouchStart:Lt,ref:Sr},q?{onMouseMove:kr}:{}),De={};z||(G.onTouchStart=$r,G.onTouchEnd=Mr),k||(G.onMouseOver=at(et,G.onMouseOver),G.onMouseLeave=at(mt,G.onMouseLeave),Oe||(De.onMouseOver=et,De.onMouseLeave=mt)),B||(G.onFocus=at(Bt,G.onFocus),G.onBlur=at(Dt,G.onBlur),Oe||(De.onFocus=Bt,De.onBlur=Dt));const Dr=R.useMemo(()=>{var w;let F=[{name:"arrow",enabled:!!Y,options:{element:Y,padding:4}}];return(w=L.popperOptions)!=null&&w.modifiers&&(F=F.concat(L.popperOptions.modifiers)),O({},L.popperOptions,{modifiers:F})},[Y,L]),Be=O({},g,{isRtl:Ge,arrow:j,disableInteractive:Oe,placement:ie,PopperComponentProp:ae,touch:fe.current}),gt=Zn(Be),Wt=(o=(n=we.popper)!=null?n:A.Popper)!=null?o:ei,Nt=(i=(l=(s=we.transition)!=null?s:A.Transition)!=null?l:ft)!=null?i:qt,Ft=(a=(u=we.tooltip)!=null?u:A.Tooltip)!=null?a:ti,_t=(p=(v=we.arrow)!=null?v:A.Arrow)!=null?p:ri,Br=rt(Wt,O({},L,(y=X.popper)!=null?y:E.popper,{className:tt(gt.popper,L==null?void 0:L.className,(d=(T=X.popper)!=null?T:E.popper)==null?void 0:d.className)}),Be),Lr=rt(Nt,O({},Xe,(m=X.transition)!=null?m:E.transition),Be),Wr=rt(Ft,O({},(h=X.tooltip)!=null?h:E.tooltip,{className:tt(gt.tooltip,(P=(C=X.tooltip)!=null?C:E.tooltip)==null?void 0:P.className)}),Be),Nr=rt(_t,O({},(b=X.arrow)!=null?b:E.arrow,{className:tt(gt.arrow,(f=(x=X.arrow)!=null?x:E.arrow)==null?void 0:f.className)}),Be);return c.jsxs(R.Fragment,{children:[R.cloneElement(Z,G),c.jsx(Wt,O({as:ae??Er,placement:ie,anchorEl:q?{getBoundingClientRect:()=>({top:Ne.y,left:Ne.x,right:Ne.x,bottom:Ne.y,width:0,height:0})}:ue,popperRef:vt,open:ue?oe:!1,id:dt,transition:!0},De,Br,{popperOptions:Dr,children:({TransitionProps:w})=>c.jsx(Nt,O({timeout:$e.transitions.duration.shorter},w,Lr,{children:c.jsxs(Ft,O({},Wr,{children:[Q,j?c.jsx(_t,O({},Nr,{ref:Pe})):null]}))}))}))]})}),oi="/build/assets/icon-facebook@2x-DO_SSRRz.png",ni="/build/assets/icon-twitter@2x-BsJIRdU-.png",ii="/build/assets/icon-linkedin@2x-yAVox5D2.png",ve={color:"#4E596D",fontSize:"14px",lineHeight:"2"},ai=()=>c.jsx(Ie,{sx:{backgroundColor:"#E8EAEC"},p:5,children:c.jsxs(Le,{container:!0,spacing:2,sx:{borderBottom:" 1px solid #BEBEC0",paddingBottom:{sm:"20px",xs:"20px"}},children:[c.jsxs(Le,{className:"grid justify-center",mb:5,item:!0,xs:12,sm:3,children:[c.jsx(me,{textAlign:{xs:"center",sm:"left"},sx:{fontWeight:"bold !important",fontSize:"18px !important"},color:"black",variant:"h6",children:"Resources"}),c.jsxs(me,{textAlign:{xs:"center",sm:"left"},mt:1,sx:ve,children:["Funding Resources",c.jsx("br",{}),c.jsx(st,{title:"Funding Terminology",placement:"right-start",children:c.jsx(he,{style:ve,href:route("landing.terminology"),children:"Funding Terminology"})}),c.jsx("br",{}),"FAQs",c.jsx("br",{})]})]}),c.jsxs(Le,{className:"grid justify-center",item:!0,xs:12,sm:3,children:[c.jsx(me,{textAlign:{xs:"center",sm:"left"},sx:{fontWeight:"bold !important",fontSize:"18px !important"},color:"black",variant:"h6",children:"Learn More"}),c.jsxs(me,{textAlign:{xs:"center",sm:"left"},mt:1,sx:ve,children:["How Shophie’s Works",c.jsx("br",{}),c.jsx(st,{title:"Privacy",placement:"right-start",children:c.jsx(he,{style:ve,href:route("landing.privacy"),children:"Privacy"})}),c.jsx("br",{}),c.jsx(st,{title:"Contact Us",placement:"right-start",children:c.jsx(he,{style:ve,href:route("landing.contactus"),children:"Contact Us"})}),c.jsx("br",{}),"Press",c.jsx("br",{})]})]}),c.jsxs(Le,{className:"grid justify-center",item:!0,xs:12,sm:3,children:[c.jsx(me,{textAlign:{xs:"center",sm:"left"},sx:{fontWeight:"bold !important",fontSize:"18px !important"},color:"black",variant:"h6",children:"Company"}),c.jsxs(me,{textAlign:{xs:"center",sm:"left"},mt:1,sx:ve,color:"black",children:["Browse Companies",c.jsx("br",{}),"Find a Mentor",c.jsx("br",{}),c.jsx(st,{title:"Sign up",placement:"right-start",children:c.jsx(he,{style:ve,href:route("landing.signup"),children:"Sign up"})}),c.jsx("br",{})]})]}),c.jsxs(Le,{className:"grid justify-center",item:!0,xs:12,sm:3,children:[c.jsx(me,{textAlign:{xs:"center",sm:"left"},sx:{fontWeight:"bold !important"},color:"black",variant:"h6",children:"Connect"}),c.jsxs(Ie,{className:"flex gap-2 justify-center sm:justify-start align-baseline",mt:1,children:[c.jsx("img",{style:{height:"30px",width:"30px"},src:oi}),c.jsx("img",{style:{height:"30px",width:"30px"},src:ni}),c.jsx("img",{style:{height:"30px",width:"30px"},src:ii})]})]})]})}),si={large:{height:"56px"},medium:{height:"40.1px"}},li=qr({palette:{primary:{main:fo.color.templete1.primary},textBlack:{main:"#000"}}});function pi(e){return c.jsx(bo,{theme:li,children:c.jsx(Gr,{...e,className:e.className,sx:{...si[e.size?e.size:"default"],...e.sx,borderRadius:"0px !important",textTransform:"capitalize !important"},children:e.children})})}const ir=[{name:"Browse Companies",link:"home"},{name:"Find A Mentor",link:"home"},{name:"Login",link:"login"},{name:"Get Started Now",link:"signup"}],ci=()=>{const[e,t]=Fr.useState(!1),r=()=>{t(n=>!n)},o=c.jsx(c.Fragment,{children:c.jsx(Vt,{sx:{display:"flex",flexDirection:"column",padding:"10px"},children:c.jsx(to,{children:ir.map((n,i)=>c.jsx(ro,{disablePadding:!0,children:c.jsx(oo,{sx:{textAlign:"center"},component:he,href:route(`landing.${n.link}`),children:c.jsx(no,{primary:n.name})})},i))})})});return c.jsxs(Ie,{sx:{textAlign:"center"},children:[c.jsx(io,{component:"nav",sx:{backgroundColor:"#FFFFFF",boxShadow:"0px 4px 17.5px 0px #00000026",zIndex:"99999"},children:c.jsxs(Vt,{sx:{display:"flex",justifyContent:"space-between"},children:[c.jsx(he,{href:route("landing.home"),children:c.jsx("img",{src:ao,alt:"description"})}),c.jsx(so,{"aria-label":"open drawer",edge:"start",onClick:r,sx:{display:{sm:"none"}},children:c.jsx(lo,{})}),c.jsx(Ie,{className:"flex gap-4",gap:2,sx:{display:{xs:"none",sm:"block"}},children:ir.map((n,i)=>c.jsx(pi,{variant:i===3?"contained":"text",color:i!==3?"textBlack":"primary",component:he,href:route(`landing.${n.link}`),children:n.name},i))})]})}),c.jsx(po,{anchor:"top",open:e,onClose:r,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:"100%",marginTop:"45px"}},children:o})]})},Oi=({auth:e,children:t})=>c.jsxs(Ie,{children:[c.jsx(ci,{}),t,c.jsx(ai,{})]});export{pi as B,Oi as L,Er as P};