import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailNotification from '@/Pages/Landing/EmailNotification/view';
import { Box, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';


const EmailVerficationPopup = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Button onClick={handleClickOpen}>
            open
        </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='email_notification_popup'
            >
                <DialogContent
                sx={{ display:'flex',
                alignItems: 'center',
                 }}>
                    <DialogContentText id="alert-dialog-description">
                        <div >
                                <div class="container">
                                    <div class="row">
                                            <Grid container >
                                                <Grid item xs={12}>
                                                    <Typography fontSize={"16px"} color={"#7C7C7C"}>We sent an email with a link to verify your account to:</Typography>
                                                    <Typography fontWeight={600} textAlign={"center"} mailto:py={2}>ammarhanif@gmail.com</Typography>
                                                    <Box mt={2}>
                                                        <Typography fontSize={"16px"} color={"#7C7C7C"} >If the email has not arrived within 15 minutes, check your spam folder </Typography>
                                                        <Typography fontSize={"16px"} color={"#7C7C7C"} py={2}> If you are still unable to receive a verification email, please contact us so that we can resolve your issue</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                 </div>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default EmailVerficationPopup;
