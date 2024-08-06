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

function DeleteAlert({ open, setOpen, handleDelete }) {

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
                className='delete_popup'
            >
                <Box>
                    <HighlightOffIcon sx={{ fontSize: "7rem" }} />
                </Box>
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: '32px', fontWeight: 600, paddingTop: "0px", paddingBottom: "0px" }}>
                    Are You sure to delete ?
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: '#7C7C7C', fontSize: '15px' }}>
                        We would take 72 hours to permanently delete your account after you confirm this action.
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
                    <Button onClick={handleDelete} autoFocus variant="contained" color="error" sx={{ textTransform: "capitalize", padding: '8px 20px' }}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default DeleteAlert;
