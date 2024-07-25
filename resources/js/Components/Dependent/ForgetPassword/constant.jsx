import Joi from '@/utility/JoiValidator';

const initEmail = {
    "email" : ''
}

const emailSchema = [{
    email : Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
}]

const Constants = { initEmail, emailSchema}

export default Constants;