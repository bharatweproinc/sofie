import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss"
import { notify } from '../Notifier';
import { useState } from 'react';

const Popup = ({ selectData, open, title, addMoreId, desc, setOpen, setSelectData }) => {
    const [value , setValue] = useState("");

    const [industory, setIndustory] = useState({
        name:"",
        description:"",
        value:""
    })

    const handleChange = (key,value)=>{
      setIndustory((prev)=>({
      ...prev,
      [key]: value
      }))
    };

    const addNewData = () => {
        if (Array.isArray(selectData[addMoreId])) {
            if (typeof selectData[addMoreId][0] === 'string') {
                if (value === "") {
                    notify.error("Add Other Option Field is Required");
                    return;
                }
                if (value && !selectData[addMoreId].includes(value)) {
                    setSelectData((prev) => ({
                        ...prev,
                        [addMoreId]: [...prev[addMoreId], value]
                    }));
                    setValue('')
                }
            }
            else if (typeof selectData[addMoreId][0] === 'object' ) {
                if (industory.description === "" || industory.name === "") {
                    notify.error("All Fields are Required");
                    return;
                }
                setSelectData((prev)=>({
                    ...prev,
                    [addMoreId]: [...prev[addMoreId], { description: industory.description, name: industory.name, value:industory.name }]
                }))
          }
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
                        {addMoreId === "industry_sector" ? (
                            <>
                         <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth
                            variant="standard"
                            className='add_more_input'
                            label="Name"
                            value={industory.name}
                            onChange={(e)=>handleChange("name", e.target.value)}

                        />
                         <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth
                            variant="standard"
                            className='add_more_input'
                            label='description'
                            value={industory.description}
                            onChange={(e)=>handleChange("description", e.target.value)}
                        />
                            </>
                        ): (
                            <>
                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth
                            variant="standard"
                            className='add_more_input'
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                        />
                            </>
                        )}

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
