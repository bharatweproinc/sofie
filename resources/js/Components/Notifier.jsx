import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Notifier = ({ open, setOpen, message, severity }) => {
    // const handleClose = (event, reason) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setOpen(false);
    // };
    // setTimeout(() => {
    //     setNotification({
    //         open: true,
    //         message: 'Form submitted successfully',
    //         severity: 'success'
    //     })
    // },1000);
    // return (
    //     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //         <Alert
    //             onClose={handleClose}
    //             severity={severity}
    //             variant="filled"
    //             sx={{ width: "100%" }}
    //         >
    //             {message}
    //         </Alert>
    //     </Snackbar>
    // );
    return (
        <>

        </>
    )
};

export default Notifier;
