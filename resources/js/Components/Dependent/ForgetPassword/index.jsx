import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import "./style.scss";
import '../../../Pages/Landing/style.scss'
import { Box, IconButton, TextField } from '@mui/material';
import Joi from '@/utility/JoiValidator';
import  { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from './constant';
import { useForm } from '@inertiajs/react';

function ForgetPassword({open, setOpen, routeLink}) {

    const { data, setData, post, processing } = useForm(Constants.initEmail);
    const [validationErrors, setValidationErrors] = React.useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (key, value) => {
        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value, Constants.emailSchema[key])
        });
        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = Joi.validateToPlainErrors(data, Constants.emailSchema);
        setValidationErrors(validationErrors);

        const isError = Object.keys(validationErrors).some(key => validationErrors[key] !== null);

        if (isError) {
            return;
        }
        console.log("data", data);
        post(route({routeLink}),{
            onSuccess:(success) => {
                console.log(success, "sucesss");
            },
            onError:(error) => {
              console.log(error,"error");
              notify.error(error.email, { position: 'top-right' });
            },
          });
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='forget_password_popup'
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: '#7C7C7C', fontSize: '19px' }}>
                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </DialogContentText>
                       <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                        >
                        <CloseIcon />
                        </IconButton>
                </DialogContent>
                <DialogActions>
                    <form onSubmit={handleSubmit} className='custom_btn input_fields'>
                    <TextField
                            size='small'
                            sx={{ mt: 1, width: '100%' }}
                            fullWidth
                            value={data.email}
                            variant='outlined'
                            placeholder='Email Address'
                            onChange={(e) => handleChange('email', e.target.value)}
                            error={!!validationErrors.email?.[0]}
                            helperText={validationErrors.email?.[0]}
                          />
                        <Box sx={{display : 'flex', justifyContent : 'center'}} mt={3}>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    disabled={processing}
                                    >
                                        Email Password Reset Link
                                </Button>
                        </Box>
                    </form>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ForgetPassword;
