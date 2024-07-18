import{o as d,j as e,a}from"./app-BIipo8El.js";import{L as f,T as u}from"./index-CY1YLmOQ.js";import{h as l}from"./moment-C5S46NFB.js";/* empty css              */import{D as j}from"./index-DFyufcip.js";import{B as t}from"./Box-DZozpeJv.js";import{T as n}from"./Typography-CZPS58Mj.js";import{G as s}from"./Grid-x2sYhoEK.js";import{B as p}from"./Button-B5Yi8pk4.js";import{A as C}from"./DialogTitle-CAev1J2g.js";import"./DefaultPropsProvider-DCh9ZCp3.js";import"./createSvgIcon-DNK7iMay.js";import"./useIsFocusVisible-LvsNc5Z6.js";import"./index-BoFs-JIU.js";import"./index-BZ3hNmTI.js";import"./PeopleAltOutlined-DcX4jRq4.js";import"./DeleteIcon-BF3hNtE-.js";import"./ButtonBase-D9ujge8j.js";import"./useTheme-CcYtXVp5.js";import"./Paper-FjaSN4g-.js";const G=({detail:r})=>{var c;const[h,m]=d.useState(!1);let i=l(r!=null&&r.updated_at?r.updated_at:r.created_at).clone().add(7,"days"),x=l();return e.jsxs(f,{auth:r==null?void 0:r.logged_user,children:[e.jsxs(t,{className:"company_detail_review",children:[e.jsx(n,{sx:{height:"65px"}}),e.jsxs(s,{item:!0,xs:12,px:5,pt:4,pb:0,sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(n,{pl:4,fontWeight:700,fontSize:"28px",color:"#223049",children:"Company Details"}),e.jsxs(t,{display:"flex",alignItems:"center",children:[e.jsx(t,{pr:3,className:"edit_btn",children:e.jsx(u,{placement:"top",title:"Edit will be enable after 7 days",disableInteractive:!0,disableHoverListener:!!((r==null?void 0:r.logged_user.user_role)=="admin"||x.isAfter(i)),children:e.jsx("div",{children:e.jsx(p,{disabled:!((r==null?void 0:r.logged_user.user_role)=="admin"||x.isAfter(i)),component:a,href:route("landing.companydetail",r.user.id),type:"submit",variant:"contained",children:(r==null?void 0:r.logged_user.user_role)=="admin"||x.isAfter(i)?"Edit":"Disabled"})})})}),((c=r==null?void 0:r.logged_user)==null?void 0:c.user_role)==="admin"&&e.jsx(t,{children:e.jsx(p,{onClick:()=>m(!0),variant:"contained",color:"error",sx:{textTransform:"capitalize",padding:"8px 20px"},children:"Delete Account"})})]})]}),e.jsxs(t,{sx:{py:3,pl:2},className:"company_detail_review_title",children:[e.jsx(s,{container:!0,sx:{pl:3},children:e.jsxs(s,{item:!0,xs:12,mt:2,children:[e.jsx(n,{variant:"h6",pb:2,fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Profile Photo"}),e.jsx(C,{alt:"Remy Sharp",src:r.link,sx:{width:"100px",height:"100px"}})]})}),e.jsxs(s,{container:!0,sx:{padding:"24px"},children:[e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company Name"}),e.jsx(n,{fontSize:"14px",children:r.company_name})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Email"}),e.jsx(n,{fontSize:"14px",children:r.user.email})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"User Name"}),e.jsx(n,{fontSize:"14px",children:r.user.name})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Company UEN"}),e.jsx(n,{fontSize:"14px",children:r.company_uen})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Contact Name"}),e.jsx(n,{fontSize:"14px",children:r.contact_name})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Mobile Number"}),e.jsx(n,{fontSize:"14px",children:r.user.phone})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Position In Company"}),r.position.map(o=>e.jsx(n,{fontSize:"14px",children:o},o))]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Year Founded"}),e.jsx(n,{fontSize:"14px",children:r.founded_year})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Team Size, Number Of Employees"}),r.team_size.map(o=>e.jsx(n,{fontSize:"14px",children:o},o))]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Revenue Size"}),r.current_revenue.map(o=>e.jsx(n,{fontSize:"14px",children:o},o))]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Current Customers Base Size"}),r.current_customers_base_size.map(o=>e.jsx(n,{fontSize:"14px",children:o},o))]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Industry sector"}),r.industry_sector.map(o=>e.jsx(n,{fontSize:"14px",children:o},o))]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 1"}),e.jsx(n,{fontSize:"14px",children:r.functional_area_1})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 2"}),e.jsx(n,{fontSize:"14px",children:r.functional_area_2})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{fontSize:"18px",fontWeight:600,color:"#7C7C7C",children:"Functional Area 3"}),e.jsx(n,{fontSize:"14px",children:r.functional_area_3})]}),e.jsxs(s,{item:!0,xs:12,md:4,lg:3,sm:6,my:2,children:[e.jsx(n,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Current problem"}),e.jsx(n,{fontSize:"14px",children:r.current_problem})]}),e.jsxs(s,{item:!0,xs:12,my:2,pr:15,children:[e.jsx(n,{color:"#7C7C7C",fontSize:"18px",fontWeight:600,children:"Additional Information"}),e.jsx(n,{fontSize:"14px",children:r.additional_information})]})]})]})]}),e.jsx(j,{open:h,setOpen:m})]})};export{G as default};
