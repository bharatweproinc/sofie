import{W as h,r as f,j as e}from"./app-CLNoeIf4.js";import{L as C}from"./index-Cjz1sXza.js";/* empty css              *//* empty css              */import g from"./Constant-C6Mv7h_L.js";import{Q as j,n as c}from"./Notifier-CibCfFRd.js";/* empty css                      */import{T as o}from"./Typography-Cbf3Jowo.js";import{B as b}from"./Box-pioLHn4W.js";import{G as r}from"./Grid-CAQnG8y0.js";import{T as l}from"./TextField-DDM8uFiQ.js";import{B as y}from"./Button-CK_kYUcJ.js";import"./createSvgIcon-CkUardzR.js";import"./useIsFocusVisible-B8RzluFD.js";import"./Constants-e1feQntW.js";import"./resolveComponentProps-BzExm8fi.js";import"./ButtonBase-CItdG5xs.js";import"./DeleteIcon-BA6o75-o.js";import"./EditIcon-B-flmUMu.js";import"./Paper-DZ6Iq4W_.js";import"./GlobalStyles-peSWDUh-.js";function k({list:m}){const{data:i,setData:a,post:u,processing:p}=h({...g.initCommunityForm,...m.community,...m.user});f.useEffect(()=>{a(i)},[i]);const n=(t,s)=>{a(x=>({...x,[t]:s}))},d=t=>{t.preventDefault(),u(route("admin.saveSectionThree"),{onSuccess:s=>{c.success("Community Data has been updated successfully"),console.log(s,"sucesss")},onError:s=>{c.error("Error in Community Data, Try again"),console.log(s,"error")}})};return e.jsxs(C,{auth:i,children:[e.jsx(j,{style:{marginTop:"65px"}}),e.jsx(o,{sx:{height:"65px"}}),e.jsx(b,{p:4,children:e.jsx("form",{onSubmit:d,children:e.jsxs(r,{container:!0,className:"custom_input",children:[e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Community Title"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,variant:"outlined",value:i.community_title,onChange:t=>n("community_title",t.target.value),type:"text",placeholder:"Please Fill Join Our Community Title"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Community Description"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:i.community_description,onChange:t=>n("community_description",t.target.value),type:"text",placeholder:"Please Fill Join Our Community Description"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Become Mentor Title"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,variant:"outlined",value:i.become_mentor_title,onChange:t=>n("become_mentor_title",t.target.value),type:"text",placeholder:"Please Fill Become Mentor Title"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Become Mentor Description"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:i.become_mentor_description,onChange:t=>n("become_mentor_description",t.target.value),type:"text",placeholder:"Please Fill Become Mentor Description"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Become Partner Title"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,variant:"outlined",value:i.become_partner_title,onChange:t=>n("become_partner_title",t.target.value),type:"text",placeholder:"Please Fill Become Partner Title"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(o,{mb:1,fontWeight:600,fontSize:"16px",color:"#7C7C7C",children:"Become Partner Description"}),e.jsx(l,{size:"small",sx:{mb:1,width:"100%"},fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:i.become_partner_description,onChange:t=>n("become_partner_description",t.target.value),type:"text",placeholder:"Please Fill Become Partner Description"})]}),e.jsx(r,{item:!0,xs:12,mt:3,className:"custom_btn",textAlign:"center",children:e.jsx(y,{disabled:p,type:"submit",variant:"contained",children:"Save"})})]})})})]})}export{k as default};
