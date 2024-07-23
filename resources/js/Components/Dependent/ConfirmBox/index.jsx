import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./style.scss";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';

function ConfirmAlert({ open, setOpen, handleSubmit, message }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='confirm_popup'
            >
                <Box>
                    <HighlightOffIcon sx={{ fontSize: "7rem" }} />
                </Box>
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: '32px', fontWeight: 600, paddingTop: "0px", paddingBottom: "0px" }}>
                    Are You sure ?
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: '#7C7C7C', fontSize: '19px' }}>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                    className='cancel_btn'
                    variant='contained'
                     sx={{
                        padding: '8px 20px',
                        backgroundColor: '#117B9E',
                        textTransform: 'capitalize',
                        color:'#fff'
                    }} onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} autoFocus variant="contained" color="error" sx={{ textTransform: "capitalize", padding: '8px 20px' }}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ConfirmAlert;
