import Joi from '@/utility/JoiValidator';

const initDeclineDropdown = {
    "reason" : '',
}

const declineDropdownSchema = [{
    reason : Joi.string().label("Reason").required(),
}]

const Constants = { initDeclineDropdown, declineDropdownSchema}

export default Constants;
