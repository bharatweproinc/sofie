import{W as n,j as e,Y as d}from"./app-BcIj6nv6.js";import{G as u,P as c}from"./PrimaryButton-CU9vSCL-.js";import{T as x,I as p}from"./TextInput-GELwjgJQ.js";function g({status:a}){const{data:t,setData:o,post:r,processing:l,errors:m}=n({email:""}),i=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:i,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(p,{message:m.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(c,{className:"ms-4",disabled:l,children:"Email Password Reset Link"})})]})]})}export{g as default};
