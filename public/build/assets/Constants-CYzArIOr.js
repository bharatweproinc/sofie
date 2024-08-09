import{r as n,j as r}from"./app-DFh_S5pj.js";import{C as i,D as a}from"./DeleteIcon-O2oK0E-b.js";import{E as o}from"./EditIcon-BTQ-eZuo.js";import{J as e}from"./JoiValidator-CeiZpskf.js";import{T as t}from"./Typography-DoIvtada.js";const s={full_name:"",last_name:"",email:"",password:"",confirm_password:"",enterpreneur_or_mentor:"entrepreneur"},l={email:"",password:""},u={name:"",email:"",phone_number:0,company:"",message:""},c={company_name:"",contact_name:"",email:"",company_uen:"",name:"",phone:0,position:[],founded_year:0,team_size:"",current_revenue:"",current_customers_base_size:"",industry_sector:"",company_description:"",functional_area_1:"",functional_area_2:"",functional_area_3:"",hear_about_us:[],current_problem:"",additional_information:"",profile_photo:"",founder_photo:""},m=()=>({company_name:n.useRef(null),contact_name:n.useRef(null),email:n.useRef(null),name:n.useRef(null),company_uen:n.useRef(null),phone:n.useRef(null),position:n.useRef(null),founded_year:n.useRef(null),team_size:n.useRef(null),current_revenue:n.useRef(null),current_customers_base_size:n.useRef(null),industry_sector:n.useRef(null),company_description:n.useRef(null),functional_area_1:n.useRef(null),functional_area_2:n.useRef(null),functional_area_3:n.useRef(null),hear_about_us:n.useRef(null),current_problem:n.useRef(null)}),d=()=>({name:n.useRef(null),email:n.useRef(null),qualifications:n.useRef(null),industry_sector:n.useRef(null),functional_area:n.useRef(null),hear_about_us:n.useRef(null),number_of_companies:n.useRef(null),experience:n.useRef(null)}),p={name:"",phone:0,email:"",mentored_company:"no",qualifications:"",industry_sector:[],functional_area:"",hear_about_us:[],number_of_companies:0,additional_information:"",profile_photo:"",experience:""},f=[{full_name:e.string().label("Full Name").required(),last_name:e.string().label("Last Name").required(),email:e.string().email({tlds:{allow:!1}}).label("Email").required(),password:e.string().min(8).regex(/[A-Z]/,"upper-case").regex(/[a-z]/,"lower-case").regex(/[^\w]/,"special character"),confirm_password:e.string().min(8).label("Confirm Password").required(),enterpreneur_or_mentor:e.required()}],_=[{email:e.string().email({tlds:{allow:!1}}).label("Email").required(),password:e.string().min(8).label("Password").required()}],g=[{name:e.string().label("Contact Name").required(),phone:e.optional(),email:e.string().email({tlds:{allow:!1}}).label("Email Contact").required(),mentored_company:e.optional(),qualifications:e.string().label("Qulaifications").required(),industry_sector:e.array().items(e.string()).min(1).label("Industry Sector").required(),functional_area:e.string().label("Functional Area").required(),hear_about_us:e.array().items(e.string()).min(1).label("Hear About Us").required(),number_of_companies:e.number().label("Number of Companies").required(),experience:e.number().label("Experience").required(),additional_information:e.optional(),profile_photo:e.optional()}],b=[{company_name:e.string().label("Company Name").required(),contact_name:e.string().label("Contact Name").required(),name:e.string().label("User Name").required(),email:e.string().email({tlds:{allow:!1}}).label("Email Contact").required(),company_uen:e.string().label("Company UEN").required(),phone:e.optional(),position:e.array().items(e.string()).min(1).label("Position in Company").required(),founded_year:e.number().label("Year Founded").required(),team_size:e.string().label("Time size, Number Of Employees").required(),current_revenue:e.string().label("Current Revenue").required(),current_customers_base_size:e.string().label("Current Customer Base Size").required(),industry_sector:e.string().label("Industry Sector").required(),company_description:e.string().label("Description").required(),functional_area_1:e.string().label("Functional Area 1").required(),functional_area_2:e.string().label("Functional Area 2").required(),functional_area_3:e.string().label("Functional Area 3").required(),hear_about_us:e.array().items(e.string()).min(1).label("Hear About Us").required(),current_problem:e.string().label("Current Problem ").required(),additional_information:e.optional(),profile_photo:e.optional()}],y=[{name:e.string().label("Name").required(),email:e.string().email({tlds:{allow:!1}}).label("Email").required(),company:e.optional(),message:e.string().label("Message").required()}],h={new_password:"",confirm_new_password:""},q={name:"",description:"",profile_photo:""},C=[{name:e.string().label("Testimonial Name").required(),description:e.string().label("Testimonial Description").required()}],R=[{new_password:e.string().min(8).regex(/[A-Z]/,"upper-case").regex(/[a-z]/,"lower-case").regex(/[^\w]/,"special character"),confirm_new_password:e.string().min(8).regex(/[A-Z]/,"upper-case").regex(/[a-z]/,"lower-case").regex(/[^\w]/,"special character")}],S=[{id:1,icon:r.jsx(o,{})},{id:2,icon:r.jsx(i,{})},{id:3,icon:r.jsx(a,{})}],v=["Founder","Owner/Co-owner","Chief Executive Officer(CEO)","Chief Financial Officer(COO)","Chief Marketing Officer(COO)","Chief Technology Officer(COO)"],w=["$0 - $50,000","$50,001 - $100,000","$100,001 - $500,000","$500,001 - $1,000,000","$1,000,001 - $5,000,000","$5,000,001 - $10,000,000","$10,000,001 - $50,000,000","$50,000,001 - $100,000,000"],E=["0 - 100","101 - 500","501 - 1,000","1,001 - 5,000","5,001 - 10,000","10,000+"],O=["1 - 25","26 - 50","51 - 100","101 - 200"],x=[{name:"Open to Any Industry",value:"Open to Any Industry",description:"Open to Any Industry"},{name:"Manufacturing",value:"Manufacturing",description:"Manufacturing (includes Energy and Chemicals, Precision Engineering, Marine and Offshore, AeroSpace, Electronics)"},{name:"Build Environment",value:"Build Environment",description:"Build Environment (includes Construction, Architecture, Engineering, Real Estate, Cleaning, Security)"},{name:"Trade and Connectivity",value:"Trade and Connectivity",description:"Trade and Connectivity (includes Logistics, Air Transport, Sea Transport, Land Transport, Public Transport, Wholesale Trade)"},{name:"Essential Domestic Services",value:"Essential Domestic Services",description:"Essential Domestic Services (includes Healthcare, Early Childhood Education, Private Education)"},{name:"Professional Services",value:"Professional Services",description:"Professional Services (includes Professional Services, ICT and Media, Financial Services)"},{name:"Lifestyle",value:"Lifestyle",description:"Lifestyle (includes Food Services, F & B, Retail, Hotels, Food Manufacturing)"}],F=["Manufacturing","Build Environment","Trade and Connectivity","Essential Domestic Services","Professional Services","Lifestyle"],A=["Human Resources","Technology","Marketing and Branding","Sales and Business Development","Operations","Production","Strategy","Finance and Accounting"],T=["Family or Friend","Colleague or Professional contact","Internet Search","Social Media","Print Media"],P=["Yes","No"];function $(){return r.jsx(r.Fragment,{children:r.jsx(t,{sx:{color:"black",textTransform:"capitalize",pl:"16px",fontWeight:"600"},children:"Add Option"})})}const D={initLoginForm:l,initContactForm:u,initCompanyDetailForm:c,initMentorForm:p,initSignUpForm:s,signupSchema:f,loginSchema:_,mentorSchema:g,companySchema:b,contactSchema:y,companyInputRefs:m,mentorInputRefs:d,icons:S,positionInCompanyOptions:v,currentRevenueSizeOptions:w,currentCustomersBaseSize:E,teamSizeOptions:O,industrySectorOptions:x,functionalAreaOptions:A,hearAboutUsOptions:T,mentoredCompanyOptions:P,addButton:$,initResetPasswordField:h,resetPasswordSchema:R,initTestimonial:q,testmionialSchema:C,industrySMESectorOptions:F};export{D as default};
