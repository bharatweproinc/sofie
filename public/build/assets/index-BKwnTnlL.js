import{r as m,j as e,a as b}from"./app-BYDEl0xl.js";import{Q as E,n as w}from"./Notifier-Systp7B4.js";/* empty css                      */import{D as v,a as _,b as S}from"./DialogContent-DHlFVqpk.js";import{D as T}from"./DialogTitle-C5vEQ3j8.js";import{D as N}from"./DialogContentText-vGObBZ9b.js";import{T as h}from"./TextField-B6DukKQi.js";import{B as p}from"./Button-BkfktQ5k.js";import{S as A}from"./index-Dpl5XgTI.js";import{G as c}from"./Grid-B0dnmqxm.js";import{F as d}from"./FormControlLabel-D468T3nL.js";import{C as u}from"./Checkbox-BFJnU2Q9.js";const V=t=>{if(t&&t.current){const r=t.current,a=(typeof r.getBoundingClientRect=="function"?r.getBoundingClientRect().top+window.scrollY:r.node.getBoundingClientRect().top+window.scrollY)-220;window.scrollTo({top:a,behavior:"smooth"})}},$=({selectData:t,open:r,title:i,addMoreId:o,desc:a,setOpen:f,setSelectData:x})=>{const[l,g]=m.useState(""),[s,k]=m.useState({name:"",description:"",value:""}),j=(n,I)=>{k(M=>({...M,[n]:I}))},F=()=>{if(Array.isArray(t[o])){if(typeof t[o][0]=="string"){if(l===""){w.error("Add Other Option Field is Required");return}l&&!t[o].includes(l)&&(x(n=>({...n,[o]:[...n[o],l]})),g(""))}else if(typeof t[o][0]=="object"){if(s.description===""||s.name===""){w.error("All Fields are Required");return}x(n=>({...n,[o]:[...n[o],{description:s.description,name:s.name,value:s.name}]}))}}f(!1)},y=()=>{f(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(E,{style:{marginTop:"65px"}}),e.jsxs(v,{open:r,onClose:y,className:"common_popup",children:[e.jsx(T,{sx:{fontSize:"17px",fontWeight:600},children:i}),e.jsxs(_,{children:[e.jsx(N,{children:a}),o==="industry_sector"?e.jsxs(e.Fragment,{children:[e.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"Name",value:s.name,onChange:n=>j("name",n.target.value)}),e.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",label:"description",value:s.description,onChange:n=>j("description",n.target.value)})]}):e.jsx(e.Fragment,{children:e.jsx(h,{autoFocus:!0,margin:"dense",type:"text",fullWidth:!0,variant:"standard",className:"add_more_input",value:l,onChange:n=>g(n.target.value)})})]}),e.jsxs(S,{children:[e.jsx(p,{className:"popup_btn bg2",onClick:y,children:"Close"}),e.jsx(p,{className:"popup_btn bg1",onClick:F,children:"Add"})]})]})]})},C={color:"#4E596D",fontSize:"14px",lineHeight:"2"},D=m.forwardRef(function(r,i){return e.jsx(A,{direction:"up",ref:i,...r})});function J({type:t,open:r,setOpen:i,handleSubmit:o}){const a=()=>{i(!1)};return e.jsx(m.Fragment,{children:e.jsxs(v,{open:r,TransitionComponent:D,keepMounted:!0,onClose:a,"aria-describedby":"alert-dialog-slide-description",children:[e.jsx(T,{textAlign:"center",fontWeight:600,children:`Guidelines for ${t==="mentor"?"Mentor":"Mentee"} Detail Submission`}),e.jsxs("form",{method:"post",onSubmit:o,children:[e.jsx(_,{children:e.jsxs(N,{id:"alert-dialog-slide-description",children:[e.jsx(c,{item:!0,xs:12,mb:3,className:"custom_privacy",children:e.jsx(d,{required:!0,control:e.jsx(u,{}),label:e.jsxs(e.Fragment,{children:["I acknowledge that I have read and accept upcie's"," ",e.jsx(b,{style:C,href:route("landing.privacy"),children:e.jsx("em",{children:"Privacy and Policy"})})," ","and"," ",e.jsx(b,{style:C,href:route("landing.termsconditions"),children:e.jsx("em",{children:"Terms and Conditions"})}),"."]})})}),e.jsx(c,{item:!0,xs:12,mb:3,className:"custom_privacy",children:e.jsx(d,{required:!0,control:e.jsx(u,{}),label:t==="mentor"?"I agree to provide up to 10 hours of free consultation hours to each of my selected SME/Mentee for one year, starting from the first mutually agreed-upon meeting.":"I acknowledge that should I get paired up with a Mentor, I will be provided with up to 10 hours of free consultation hours from my designated Mentor for one year, starting from the first mutually agreed-upon meeting."})}),e.jsx(c,{item:!0,xs:12,mb:3,className:"custom_privacy",children:e.jsx(d,{required:!0,control:e.jsx(u,{}),label:t==="mentor"?"Should I choose to continue my mentorship with my SME/Mentee after 10 hours of consultation, I can discuss the arrangement directly with my SME/Mentee.  I acknowledge that upcie will not be involved in any deals between my SME/Mentee and I thereafter":"I promise to respect my Mentor's volunteered time and as such, I will put forth my best effort to work with my Mentor."})}),t==="mentor"?e.jsx(c,{}):e.jsx(c,{item:!0,xs:12,mb:3,className:"custom_privacy",children:e.jsx(d,{required:!0,control:e.jsx(u,{}),label:"Should I choose to continue my mentorship with my Mentor after 10 hours of consultation, I can discuss the arrangement directly with my Mentor.  I acknowledge that upcie will not be involved in any deals between my Mentor and I thereafter."})})]})}),e.jsxs(S,{sx:{justifyContent:"center",display:"flex"},children:[e.jsx(p,{className:"cancel_btn_",sx:{padding:"8px 20px",backgroundColor:"#d32f2f",textTransform:"capitalize",color:"#fff"},onClick:a,children:"Cancel"}),e.jsx(p,{className:"submit_btn_",sx:{padding:"8px 20px",backgroundColor:"#117B9E",textTransform:"capitalize",color:"#fff"},type:"submit",children:"Submit"})]})]})]})})}export{$ as P,J as S,V as s};
