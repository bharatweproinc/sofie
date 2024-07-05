import { toast } from 'react-toastify';


export const notify = {
  default: (message) => toast(message),
  success: (message, options = {}) => toast.success(message, options),
  error: (message, options = {}) => toast.error(message, options),
  warn: (message, options = {}) => toast.warn(message, options),
  info: (message, options = {}) => toast.info(message, options),
  custom: (message, options = {}) => toast(message, options),
};
