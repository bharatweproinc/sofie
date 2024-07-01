import Joi from "joi";

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
    'company_uen' : '',
    'mobile_number' : 0,
    'position' : '',
    'founded_year' : '',
    'time_size' : '',
    'current_revenue' : 0,
    'current_customers_base_size': 0,
    'industry_sector': '',
    'description': '',
    'function_area_1' : '',
    'function_area_2' : '',
    'function_area_3' : '',
    'hear_about_us' : '',
    'current_problem' : '',
    'additional_information' : ''
}

const initProfileForm = {
    'name' : '',
    'mobile_number' : 0,
    'email_contact' : '',
    'user_name' : '',
    'password' : '',
    'confirm_password' : '',
    'mentored_compnay' : 'no',
    'qualifications' : '',
    'industry_sector' : '',
    'functional' : '',
    'hear_about_us' : '',
    'number_of_companies' : '',
    'additional_information' : ''
}

const signupSchema = Joi.object({
    full_name: Joi.string().label("Full Name").required(),
    phone: Joi.number().min(10).label("Phone Number").required(),
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    password: Joi.string().min(6).label("Password").required(),
    confirm_password: Joi.string().min(6).label("Confirm Password").required(),
    // confirm_password : Joi.any().valid(Joi.ref('password')).required(),
    enterpreneur_or_mentor : Joi.required()
})

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    password: Joi.string().min(6).label("Password").required(),
});

const profileSchema = Joi.object({
    name : Joi.string().label("Contact Name").required(),
    mobile_number : Joi.number().min(10).label("Mobile Number").required(),
    email_contact : Joi.string().email({ tlds: { allow: false } }).label("Email Contact").required(),
    user_name : Joi.string().label("User Name").required(),
    password : Joi.string().min(6).label("Password").required(),
    confirm_password : Joi.string().min(6).label("Confirm Password").required(),
    mentored_compnay : Joi.required(),
    qualifications : Joi.optional(),
    industry_sector : Joi.optional(),
    functional : Joi.optional(),
    hear_about_us : Joi.optional(),
    number_of_companies : Joi.string().label("Number of Companies").required(),
    additional_information : Joi.optional()
 });

 const companySchema = Joi.object({
    company_name : Joi.string().label("Company Name").required(),
    company_uen : Joi.string().label("Company UEN").required(),
    mobile_number : Joi.number().min(10).label("Mobile Number").required(),
    position : Joi.string().label('Position in Company').required(),
    founded_year : Joi.string().label("Year Founded").required(),
    time_size : Joi.string().label("Time size, Number Of Employees").required(),
    current_revenue : Joi.optional(),
    current_customers_base_size : Joi.optional(),
    industry_sector: Joi.optional(),
    description: Joi.optional(),
    function_area_1: Joi.optional(),
    function_area_2: Joi.optional(),
    function_area_3: Joi.optional(),
    hear_about_us: Joi.optional(),
    current_problem: Joi.optional(),
    additional_information :Joi.optional()
  });

const contactSchema = Joi.object({
    name : Joi.string().label("Name").required(),
    email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
    phone_number: Joi.number().min(10).label("Phone Number").required(),
    company : Joi.optional(),
    message : Joi.string().label("Message").required()
});
  
const Constants = {
    initLoginForm, initContactForm, initCompanyDetailForm, initProfileForm, initSignUpForm,
    signupSchema, loginSchema, profileSchema, companySchema, contactSchema
}

export default Constants;