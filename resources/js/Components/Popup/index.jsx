import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss"
import { notify } from '../Notifier';

const Popup = ({ selectData, open, title, addMoreId, desc, setOpen, setSelectData }) => {

    const addNewData = () => {
        const newPosition = document.getElementById(addMoreId)?.value;
        if (newPosition === "") {
            notify.error("Add Other Option Field is Required");
            return;
        }
        if (newPosition && !selectData[addMoreId].includes(newPosition)) {
            setSelectData((prev) => ({
                ...prev,
                [addMoreId]: [...prev[addMoreId], newPosition]
            }));
            document.getElementById(addMoreId).value = '';
        }
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ToastContainer style={{ marginTop: "65px" }} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    className='common_popup'
                >
                    <DialogTitle sx={{ fontSize: '17px', fontWeight: 600 }}>{title}</DialogTitle>
                    <DialogContent >
                        <DialogContentText>
                            {desc}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            id={addMoreId}
                            fullWidth
                            variant="standard"
                            className='add_more_input'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button className='popup_btn bg2' onClick={handleClose}>Close</Button>
                        <Button className='popup_btn bg1' onClick={addNewData}>Add</Button>

                    </DialogActions>
                </Dialog>
        </>

    );
};

export default Popup;
