import { Landing } from "@/Layouts/Landing";
import { Avatar, Box, Button, FormControlLabel, Grid, Switch, TextField, Tooltip, Typography } from "@mui/material";
import "./style.scss"
import { Link, useForm } from "@inertiajs/react";
import moment from "moment";
import DeleteAlert from "@/Components/Dependent/DeleteAlert/index";
import ConfirmBox from "@/Components/Dependent/ConfirmBox/index";
import { useState } from "react";
import Constants from "../Constants";
import Joi from '@/utility/JoiValidator';
import  { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style.scss";

function ReviewProfilePage ({detail}){

    const [open, setOpen] = useState(false);
    const [openReject, setOpenReject] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [userStatus, setUserStatus] = useState(1);

    let initialDate = moment(detail?.updated_at ? detail.updated_at : detail.created_at);
    let enableDate = initialDate.clone().add(7, 'days');
    let currentDate = moment();

    const { data, setData, post, processing} = useForm(Constants.initResetPasswordField)
    const [show, setShow] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setpasswordError] = useState(false);

    const handleShow = () => {
        setShow(true)
    }

    const handleChange = (key, value) => {

        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value, Constants.resetPasswordSchema[key])
        });

        if (key === 'confirm_new_password' || key === 'new_password' ) {
          if (data.new_password !== value && data.confirm_new_password !== value) {
            setpasswordError(true);
          } else {
            setpasswordError(false);
          }
        }

        setData((prev)=>({
          ...prev,
          [key]:value
        }));

        };


    const handleSubmit = (e) => {

        e.preventDefault();
        let err = Joi.validateToPlainErrors(data, Constants.resetPasswordSchema)
        setValidationErrors(err);

        const isError = Object.keys(err)?.map((val,i)=>{
            if(err[val]== null){
                return 0
                }
                else{
                return i
                }
            })

        if (isError?.length > 0 || data.confirm_new_password !== data.new_password) {
                validationErrors.confirm_new_password = data.confirm_new_password !== data.new_password  ? 'Passwords does not match' : '';
            return;
        } else {
            console.log('dtaa', data)
        //     post(route(''),{
        //     onSuccess:(success) => {
        //         console.log(success, "sucesss");
        //         notify.error("Password has been updated successfully");
        //     },
        //     onError:(error) => {
        //         console.log(error.email,"::error");
        //         notify.error("Error while updating password");
        //     },
        // })
    }}

    const handleDelete = () => {
        console.log("userId", detail.id)
    }
    
    const handleReject = () => {
        console.log("rejected");
    }

    const handleConfirm = () => {
        console.log('confirm')
    }

    const handleChangeStatus = () => {
        setUserStatus(userStatus === 1 ? 0 : 1)
    }

    const handleUpdateStatus = () => {
        console.log('userStatus', userStatus)
    }
    return (
        <Landing auth={detail?.logged_user}>
            <Typography sx={{ height: '65px' }}></Typography>
            <ToastContainer style={{marginTop:"65px"}}/>
            <Box p={4} className="review_mentor">
                <Box sx={{display : 'flex', justifyContent : 'space-between'}} px={4} my={2}>
                    <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Mentor Details</Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box className='custom_btn custom_delete_btn'>
                                {   detail.logged_user.user_role === "admin" &&
                                    <>
                                    <Button onClick={()=>setOpenReject(true)} sx={{mr : 1}} className="delete_account" variant="contained">
                                        Reject
                                    </Button>
                                    <Button onClick={()=>setOpenConfirm(true)} sx={{mr : 1}} variant="contained">
                                        Accept
                                    </Button>
                                    </>
                                }
                                <Tooltip placement="top" title="Edit will be enable after 7 days" disableInteractive disableHoverListener={detail?.logged_user.user_role == "admin" || currentDate.isAfter(enableDate) ? true : false} >
                                    <Button disabled={detail?.logged_user.user_role == "admin" || currentDate.isAfter(enableDate) ? false : true } component={Link} href={route('landing.mentordetail', detail.user.id)} variant="contained">
                                        Edit
                                    </Button>
                                </Tooltip>
                            </Box>
                            <Box className="custom_delete_btn ml-2">
                                <Button className="delete_account" onClick={()=>setOpen(true)} variant="contained">
                                    Delete Account
                                </Button>
                            </Box>
                        </Box>
                </Box>
                <Box p={4} pr={0} sx={{border : '1px solid black', borderRadius : '10px'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography mb={2} fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Profile Photo</Typography>
                            <Avatar
                                alt="Remy Sharp"
                                src={detail.link}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Contact Name</Typography>
                            <Typography fontSize="14px">{detail.user.name}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Mobile Number</Typography>
                            <Typography fontSize="14px">{detail.user.phone}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Email</Typography>
                            <Typography fontSize="14px">{detail.user.email}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Mentored Company</Typography>
                            <Typography fontSize="14px">{detail.mentored_company}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Qualifications</Typography>
                            <Typography fontSize="14px">{detail.qualifications}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Industry sectors</Typography>
                            {detail.industry_sector.map(item => (<Typography key={item} fontSize="14px">{item}</Typography>))}
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Functional</Typography>
                            <Typography fontSize="14px">{detail.functional_area}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Companies willing to mentor</Typography>
                            <Typography fontSize="14px">{detail.number_of_companies}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={12} lg={12} sm={12}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Additional Information</Typography>
                            <Typography fontSize="14px">{detail.additional_information}</Typography>
                        </Grid>
                    </Grid>
                    {
                      detail.logged_user.user_role === "admin" && 
                      <Box className="status_box  mt-3"> 
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Status</Typography>
                            <FormControlLabel control={ <Switch  
                                checked={userStatus === 1 ? true : false} />} 
                                label={userStatus === 1 ? "Active" : "Inactive"} 
                                onChange={(e) => handleChangeStatus("status", e.target.checked)}    
                            />
                            <Box className="custom_btn inline">
                                <Button onClick={() => handleUpdateStatus()} variant="contained">Save</Button>
                            </Box>
                      </Box>  
                    }
                    { detail.logged_user.user_role === "mentor" && 
                        <Box className="reset_password_container">
                            <Box className="custom_btn">
                                <Button onClick={() => handleShow()} variant="contained" sx={{padding : "4px 20px !important", my : 2}}>Reset Password</Button>
                            </Box>
                                { show === true &&
                                <form method={"post"} onSubmit={handleSubmit}>
                                <Grid container spacing={4} className="input_fields">
                                    <Grid item px={2} xs={12} md={3}>
                                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Previous Password</Typography>
                                        <TextField
                                            size='small'
                                            sx={{ mt: 1, width: '100%' }}
                                            fullWidth
                                            variant='outlined'
                                            type='password'
                                            value={data.previous_password}
                                            placeholder='Previous Password'
                                            onChange={(e) => handleChange("previous_password", e.target.value)}
                                            error={!!validationErrors.previous_password?.[0]}
                                            helperText={validationErrors.previous_password?.[0]}
                                        />
                                    </Grid>
                                    <Grid item px={2} xs={12} md={3}>
                                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>New Password</Typography>
                                        <TextField
                                            size='small'
                                            sx={{ mt: 1, width: '100%' }}
                                            fullWidth
                                            value={data.new_password}
                                            variant='outlined'
                                            type='password'
                                            placeholder='New Password '
                                            onChange={(e) => handleChange("new_password", e.target.value)}
                                            error={!!validationErrors.new_password?.[0]}
                                            helperText={validationErrors.new_password?.[0]}
                                        />
                                    </Grid>
                                    <Grid item px={2} xs={12} md={3}>
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
                                            helperText={validationErrors.confirm_new_password?.[0] || (passwordError ? 'Passwords does not match' : '')}
                                        />
                                    </Grid>
                                    <Grid item px={2} xs={12} md={3} className="custom_btn">
                                        <Button sx={{ mt : {lg : '32px'}, padding : '15px 25px !important'}} type='submit' disabled={processing} variant="contained">
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                                </form>
                                }
                        </Box>
                    }
                </Box>
            </Box>
            <DeleteAlert open={open} setOpen={setOpen} handleDelete={handleDelete}/>
            <ConfirmBox open={openReject} setOpen={setOpenReject} handleSubmit={handleReject} message={`Do you really want to reject ${detail.user.name}`} />
            <ConfirmBox open={openConfirm} setOpen={setOpenConfirm} handleSubmit={handleConfirm} message={`Do you really want to Live ${detail.user.name}`} />
        </Landing>
    )
}

export default ReviewProfilePage;

