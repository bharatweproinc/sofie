import { Landing } from "@/Layouts/Landing";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Joi from '@/utility/JoiValidator';
import { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from "@/Pages/Landing/Constants";

const user = {
    id: 12,
    user_role: 'admin'
};

function accountSettings() {
    const { data, setData, post, processing } = useForm(Constants.initResetPasswordField); 
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (key, value) => {
        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value, Constants.resetPasswordSchema[key])
        });

        if (key === 'confirm_new_password' || key === 'new_password') {
            if (data.new_password !== value && data.confirm_new_password !== value) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
            }
        }

        setData((prev) => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = Joi.validateToPlainErrors(data, Constants.resetPasswordSchema);
        setValidationErrors(err);

        const isError = Object.keys(err).some((val) => err[val] != null);

        if (isError || data.confirm_new_password !== data.new_password) {
            validationErrors.confirm_new_password = data.confirm_new_password !== data.new_password ? 'Passwords do not match' : '';
            return;
        } else {
            post(route('admin.resetAdminPassword'), {
                onSuccess: () => {
                    notify.success("Password has been updated successfully");
                },
                onError: () => {
                    notify.error("Error while updating password");
                },
            });
        }
    };

    return (
        <Landing auth={user}>
            <ToastContainer style={{ marginTop: "65px" }} />
            <Box p={2}>
                <Typography fontWeight={700} fontSize="28px">Reset Password</Typography>
                <Box className="reset_password_container" mt={4}>
                    <form method={"post"} onSubmit={handleSubmit}>
                        <Grid container spacing={4} className="input_fields" mt={2}>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>New Password</Typography>
                                <TextField
                                    size='small'
                                    sx={{ mt: 1, width: '100%' }}
                                    fullWidth
                                    value={data.new_password}
                                    variant='outlined'
                                    type='password'
                                    placeholder='New Password'
                                    onChange={(e) => handleChange("new_password", e.target.value)}
                                    error={!!validationErrors.new_password?.[0]}
                                    helperText={validationErrors.new_password?.[0]}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Confirm New Password</Typography>
                                <TextField
                                    size='small'
                                    sx={{ mt: 1, width: '100%' }}
                                    fullWidth
                                    value={data.confirm_new_password}
                                    variant='outlined'
                                    type='password'
                                    placeholder='Confirm New Password'
                                    onChange={(e) => handleChange("confirm_new_password", e.target.value)}
                                    error={!!validationErrors.confirm_new_password?.[0] || passwordError}
                                    helperText={validationErrors.confirm_new_password?.[0] || (passwordError ? 'Passwords do not match' : '')}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} className="custom_btn">
                                <Button sx={{ mt: '32px', padding: '15px 25px !important' }} type='submit' disabled={processing} variant="contained">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Landing>
    );
}

export default accountSettings;
