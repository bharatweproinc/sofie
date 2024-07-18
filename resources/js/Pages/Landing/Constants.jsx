import { useRef } from "react";
import CheckIcon from '@/Components/SVGIcons/Home/CheckIcon';
import EditIcon from '@/Components/SVGIcons/Home/EditIcon';
import DeleteIcon from '@/Components/SVGIcons/Home/DeleteIcon';
import { Typography } from "@mui/material";
import Joi from '@/utility/JoiValidator';


const initSignUpForm = {
    'full_name' : '',
    'phone' : 0,
    'email' : '',
    'password' : '',
    'confirm_password' : '',
    'enterpreneur_or_mentor' : 'entrepreneur'
}

const initLoginForm = {
    'email' : '',
    'password' :  '',
}

const initContactForm = {
    'name' : '',
    'email' : '',
    'phone_number' : 0,
    'company' : '',
    'message' : '',
}

const initCompanyDetailForm = {
    'company_name' : '',
    'contact_name':'',
    'email':'',
    'company_uen' : '',
    'name':'',
    'phone' : 0,
    'position' : [],
    'founded_year' : 0,
    'team_size' : [],
    'current_revenue' : [],
    'current_customers_base_size': [],
    'industry_sector': [],
    'company_description': '',
    'functional_area_1' : '',
    'functional_area_2' : '',
    'functional_area_3' : '',
    'hear_about_us' : [],
    'current_problem' : '',
    'additional_information' : '',
    'profile_photo' : ''
}


 const companyInputRefs = () => ({
    company_name: useRef(null),
    contact_name: useRef(null),
    email: useRef(null),
    name: useRef(null),
    company_uen: useRef(null),
    phone: useRef(null),
    position: useRef(null),
    founded_year: useRef(null),
    team_size: useRef(null),
    current_revenue: useRef(null),
    current_customers_base_size: useRef(null),
    industry_sector: useRef(null),
    company_description: useRef(null),
    functional_area_1: useRef(null),
    functional_area_2: useRef(null),
    functional_area_3: useRef(null),
    hear_about_us: useRef(null),
    current_problem: useRef(null),
});

const mentorInputRefs = () => ({
    name : useRef(null),
    email : useRef(null),
    qualifications : useRef(null),
    industry_sector : useRef(null),
    functional_area : useRef(null),
    hear_about_us : useRef(null),
    number_of_companies : useRef(null),
    experience:useRef(null)
});

const initMentorForm = {
    'name' : '',
    'phone' : 0,
    'email' : '',
    'mentored_company' : 'no',
    'qualifications' : '',
    'industry_sector' : [],
    'functional_area' : '',
    'hear_about_us' : [],
    'number_of_companies' : 0,
    'additional_information' : '',
    'profile_photo':'',
    'experience':'',
}

const signupSchema = [{
    full_name: Joi.string().label("Full Name").required(),
    phone: Joi.number().min(10).label("Phone Number").required(),
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    password: Joi.string().min(8).label("Password").required(),
    confirm_password: Joi.string().min(8).label("Confirm Password").required(),
    enterpreneur_or_mentor : Joi.required()
}];

const loginSchema = [{
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    password: Joi.string().min(8).label("Password").required(),
}];

const mentorSchema = [{
    name : Joi.string().label("Contact Name").required(),
    phone : Joi.optional(),
    email : Joi.string().email({ tlds: { allow: false } }).label("Email Contact").required(),
    mentored_company : Joi.optional(),
    qualifications : Joi.string().label("Qulaifications").required(),
    industry_sector : Joi.array().items(Joi.string()).min(1).label("Industry Sector").required(),
    functional_area : Joi.string().label("Functional Area").required(),
    hear_about_us : Joi.array().items(Joi.string()).min(1).label("Hear About Us").required(),
    number_of_companies : Joi.number().label("Number of Companies").required(),
    experience : Joi.number().label("Experience").required(),
    additional_information : Joi.optional(),
    profile_photo:Joi.optional(),
 }];

const companySchema = [{
    company_name : Joi.string().label("Company Name").required(),
    contact_name : Joi.string().label("Contact Name").required(),
    name : Joi.string().label("User Name").required(),
    email : Joi.string().email({ tlds: { allow: false } }).label("Email Contact").required(),
    company_uen : Joi.string().label("Company UEN").required(),
    phone : Joi.optional(),
    position: Joi.array().items(Joi.string()).min(1).label('Position in Company').required(),
    founded_year : Joi.number().label("Year Founded").required(),
    team_size : Joi.array().items(Joi.string()).min(1).label("Time size, Number Of Employees").required(),
    current_revenue: Joi.array().items(Joi.string()).min(1).label("Current Revenue").required(),
    current_customers_base_size : Joi.array().items(Joi.string()).min(1).label('Current Customer Base Size').required(),
    industry_sector:  Joi.array().items(Joi.string()).min(1).label("Industry Sector").required(),
    company_description:  Joi.string().label("Description").required(),
    functional_area_1: Joi.string().label("Functional Area 1").required(),
    functional_area_2: Joi.string().label("Functional Area 2").required(),
    functional_area_3: Joi.string().label("Functional Area 3").required(),
    hear_about_us:  Joi.array().items(Joi.string()).min(1).label("Hear About Us").required(),
    current_problem:  Joi.string().label("Current Problem ").required(),
    additional_information : Joi.optional(),
    profile_photo:Joi.optional()
  }];

const contactSchema = [{
    name : Joi.string().label("Name").required(),
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    phone_number: Joi.number().min(10).label("Phone Number").required(),
    company : Joi.optional(),
    message : Joi.string().label("Message").required()
}];

const initResetPasswordField = {
    'previous_password' : '',
    "new_password" : '',
    'confirm_new_password' : ''
}

const resetPasswordSchema = [{
    previous_password : Joi.string().min(8).label("Previous Password").required(),
    new_password : Joi.string().min(8).label("New Password").required(),
    confirm_new_password : Joi.string().min(8).label("New Password Cofirm").required(),
}];

const icons = [
    { id: 1, icon: <EditIcon /> },
    { id:2, icon:  <CheckIcon /> },
    { id: 3, icon: <DeleteIcon /> },
  ];

const positionInCompanyOptions = [
    "Founder",
    "Owner/Co-owner",
    "Chief Executive Officer(CEO)",
    "Chief Financial Officer(COO)",
    "Chief Marketing Officer(COO)",
    "Chief Technology Officer(COO)"
]

const currentRevenueSizeOptions = [
    '$0 - $50,000',
    '$50,001 - $100,000',
    '$100,001 - $500,000',
    '$500,001 - $1,000,000',
    '$1,000,001 - $5,000,000',
    '$5,000,001 - $10,000,000',
    '$10,000,001 - $50,000,000',
    '$50,000,001 - $100,000,000'
]

const currentCustomersBaseSize = [
    '0 - 100',
    '101 - 500',
    '501 - 1,000',
    '1,001 - 5,000',
    '5,001 - 10,000',
    '10,000+'
]

const teamSizeOptions = [
    '1 - 25',
    '26 - 50',
    '51 - 100',
    '101 - 200'
]

const industrySectorOptions = [
    {name : 'Manufacturing', value : 'Manufacturing', description : 'Manufacturing (includes Energy and Chemicals, Precision Engineering, Marine and Offshore, AeroSpace, Electronics)'},
    {name : 'Build Environment', value : 'Build Environment', description : 'Build Environment (includes Construction, Architecture, Engineering, Real Estate, Cleaning, Security)'},
    {name : 'Trade and Connectivity', value : 'Trade and Connectivity', description : 'Trade and Connectivity (includes Logistics, Air Transport, Sea Transport, Land Transport, Public Transport, Wholesale Trade)'},
    {name : 'Essential Domestic Services', value : 'Essential Domestic Services', description : 'Essential Domestic Services (includes Healthcare, Early Childhood Education, Private Education)'},
    {name : 'Professional Services', value : 'Professional Services', description : 'Professional Services (includes Professional Services, ICT and Media, Financial Services)'},
    {name : 'Lifestyle', value : 'Lifestyle', description : 'Lifestyle (includes Food Services, F & B, Retail, Hotels, Food Manufacturing)'}
]

const functionalAreaOptions = [
    'Accounting', "Customer Service", 'Finance',  'Human Resources', "IT (Information Technology)", 'Marketing', "Sales",  'Operations', "Production",  "Research & Development", "Strategy/Business Development"
]

const hearAboutUsOptions = [
    "Family or Friend", "Colleague or Professional contact", "Internet Search", "Social Media", "Print Media"
]

const mentoredCompanyOptions = [
    "Yes",
    "No"
]

function addButton () {
    return(
    <>
        <Typography sx={{color : 'black', textTransform : 'capitalize', pl : '16px', fontWeight : '600'}}>Add Option</Typography>
    </>
    )
}

const Constants = {
    initLoginForm, initContactForm, initCompanyDetailForm, initMentorForm, initSignUpForm,
    signupSchema, loginSchema, mentorSchema, companySchema, contactSchema ,
    companyInputRefs, mentorInputRefs, icons, positionInCompanyOptions, currentRevenueSizeOptions,
    currentCustomersBaseSize, teamSizeOptions, industrySectorOptions, functionalAreaOptions,
    hearAboutUsOptions, mentoredCompanyOptions, addButton, initResetPasswordField, resetPasswordSchema
}

export default Constants;
