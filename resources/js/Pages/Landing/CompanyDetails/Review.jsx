import { Landing } from "@/Layouts/Landing";
import {
    Avatar,
    Box,
    Button,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, router, useForm } from "@inertiajs/react";
import "./style.scss";
import "../style.scss";
import DeleteAlert from "@/Components/Dependent/DeleteAlert/index";
import ConfirmBox from "@/Components/Dependent/ConfirmBox/index";
import Constants from "../Constants";
import Joi from '@/utility/JoiValidator';
import MatchedMentors from "./MatchedMentors";
import { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviewdata = ({detail}) => {
    const { data, setData, post, processing} = useForm({...Constants.initResetPasswordField, ...detail.user})

    let initialDate = moment(detail?.updated_at ? detail.updated_at : detail.created_at);
    let enableDate = initialDate.clone().add(7, 'days');
    let currentDate = moment();

    const [open, setOpen] = useState(false);
    const [openReject, setOpenReject] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [show, setShow] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setpasswordError] = useState(false);
    const [userStatus, setUserStatus] = useState(data.status);
    const [accepted, setAccepted] = useState(data.is_accepted);

    useEffect(()=> {
        setAccepted(detail.user.is_accepted);
        setUserStatus(detail.user.status);
    }, [detail.user.status, detail.user.is_accepted])

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
            post(route('company.resetPassword', detail.id),{
            onSuccess:(success) => {
                console.log(success, "sucesss");
                notify.success("Password has been updated successfully");
            },
            onError:(error) => {
                console.log(error.email,"::error");
                notify.error("Error while updating password");
            },
        })
    }}

    const handleDelete = () => {
        post(route('landing.deleteCompanyUser', detail.id),{
            onSuccess:(success) => {
                notify.success('Company Data successfully sent for deletion')
                console.log(success, "successs");
                setOpen(false);
            },
            onError:(error) => {
                notify.error("Error in Company Delete");
                console.log(error,"error");
                setOpen(false);
            },
        })
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        post(route("admin.acceptedCompanyProfile", detail.id), {
            onSuccess:(success) => {
                console.log(success, "sucesss");
                notify.success("User has been Live successfully");
                setOpenConfirm(false)
            },
            onError:(error) => {
                console.log(error.email,"::error");
                notify.error("Error while user Live");
                setOpenConfirm(false)
            },
        })
        setOpenConfirm(false);
    }

    const handleReject = (e) => {
        e.preventDefault();
        post(route("admin.rejectedCompanyProfile", detail.id), {
            onSuccess:(success) => {
                console.log(success, "sucesss");
                notify.success("User has been rejected successfully");
            },
            onError:(error) => {
                console.log(error.email,"::error");
                notify.error("Error while rejecting user");
            },
        })
        setOpenReject(false);
    }

    const handleChangeStatus = (e) => {
        const status = e.target.checked ? 1 : 0;
        setUserStatus(status);
    };

    const handleUpdateStatus = (e) => {
        e.preventDefault();
        router.post(route("admin.updateCompanyStatus", detail.id), {
            'userStatus': userStatus,
            onSuccess: (success) => {
                notify.success("Status has been updated successfully");
                console.log(success, "success")
            },
            onError: (error) => {
                notify.error("Error while updating Status");
                console.log(error, "error")
            },
        })
    }
    const handleAddToFeatured =() =>{
        router.post(route("admin.addFeaturedSme", detail.id), {
            onSuccess: (success) => {
                notify.success("Added to featured section successfully");
                console.log(success, "success")
            },
            onError: (error) => {
                notify.error("Error while adding");
                console.log(error, "error")
            },
        })
    }

    return (
        <Landing auth={detail.logged_user}>
            <ToastContainer style={{ marginTop:"53px" }}/>
            <Box className="company_detail_review">
                <Typography sx={{ height: "65px" }}></Typography>
                <Grid item xs={12} px={5} pt={4} pb={0} sx={{display : 'flex', flexDirection : { xs : 'column' , md : 'row' }, justifyContent : {md : 'space-between'}}}>
                    <Typography
                        pl={4}
                        fontWeight={700}
                        fontSize={"28px"}
                        color={"#223049"}
                    >
                        Company Details
                    </Typography>
                    <Box sx={{display : 'flex',alignItems : 'center', flexDirection :{ xs : 'column' , md : 'row' }}}>
                        <Box className='custom_btn custom_delete_btn flex  flex-col sm:flex-row items-center' >
                            {  detail && detail.logged_user.user_role === "admin" && accepted === null &&
                                <>
                                <Button onClick={()=>setOpenReject(true)} sx={{mr : 1, mb : {md : 0, xs : 1}}} className="delete_account" variant="contained">
                                    Reject
                                </Button>
                                <Button onClick={()=>setOpenConfirm(true)} sx={{mr : 1, mb : {md : 0, xs : 1}}} variant="contained">
                                    Accept
                                </Button>
                                </>
                            }
                            {detail && detail.logged_user &&  detail.logged_user.user_role === "admin" &&
                                <Button onClick={()=>handleAddToFeatured()} sx={{mr : 1, mb : {md : 0, xs : 1}}} variant="contained">
                                   {
                                    detail &&  detail.featured_sme == "yes" ? "Remove from featured" :
                                    "Add to featured"
                                   }
                                    </Button>
                                }

                            <Tooltip
                                placement="top"
                                title="Edit will be enabled after 7 days"
                                disableHoverListener={ detail.logged_user.user_role === "admin" || currentDate.isAfter(enableDate)}
                            >
                                <span>
                                    <Button
                                        disabled={detail.logged_user.user_role === "admin" || currentDate.isAfter(enableDate) ? false : true }
                                        component={Link}
                                        href={route('landing.companydetail', detail.user.id)}
                                        type="submit"
                                        variant="contained"
                                        sx={{mr : 1, mb : {md : 0, xs : 1}}}
                                        >
                                        Edit
                                    </Button>
                                </span>
                            </Tooltip>
                        </Box>
                        <Box className="custom_delete_btn">
                            <Button className="delete_account" onClick={()=>setOpen(true)} variant="contained">
                                Delete Account
                            </Button>
                        </Box>
                    </Box>

                </Grid>
                <Box
                    sx={{ py: 3, pl: 2 }}
                    className="company_detail_review_title"
                >
                    <Grid container sx={{ pl: 3 }}>
                        <Grid item xs={12} md={3} mt={2}>
                            <Typography
                                variant="h6"
                                pb={2}
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Profile Photo
                            </Typography>
                            <Avatar
                                alt="company_img"
                                src={detail.profile_photo}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} mt={2}>
                            <Typography
                                variant="h6"
                                pb={2}
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Founder Photo
                            </Typography>
                            <Avatar
                                alt="founder_img"
                                src={detail.founder_photo}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ padding: "24px 24px 0 24px" }}>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Email
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                User Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company UEN
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_uen}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Contact Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.contact_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Position In Company
                            </Typography>
                                {detail.position.map((item) => ( <Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Year Founded
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.founded_year}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Team Size, Number Of Employees
                            </Typography>
                                {/* {detail.team_size.map((item) => (<Typography key={item} fontSize={"14px"}>{item}</Typography>))} */}
                                <Typography fontSize={"14px"}>
                                {detail.team_size}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Revenue Size
                            </Typography>
                                {/* {detail.current_revenue.map((item) => (<Typography key={item} fontSize={"14px"}>{item}
                                </Typography>))} */}
                                <Typography fontSize={"14px"}>
                                {detail.current_revenue}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Customers Base Size
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.current_customers_base_size}
                            </Typography>
                                {/* {detail.current_customers_base_size.map((item) => (<Typography key={item} fontSize={"14px"}>{item}</Typography>))} */}
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Industry sector
                            </Typography>
                                {/* {detail.industry_sector.map((item)=> (<Typography key={item} fontSize={"14px"}>{item}</Typography>))} */}
                                <Typography fontSize={"14px"}>
                            {detail.industry_sector}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 1
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 2
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_2}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 3
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_3}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Current problem
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.current_problem}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} my={2} pr={15}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Additional Information
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.additional_information}
                            </Typography>
                        </Grid>
                    </Grid>
                    {
                      detail.logged_user.user_role === "admin" &&
                      <Box className="status_box" sx={{padding : '0 0 24px 24px'}}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Status</Typography>
                            <FormControlLabel control={ <Switch
                                 checked={userStatus === 1} />}
                                label={userStatus === 1 ? "Active" : "Inactive"}
                                onChange={handleChangeStatus}
                            />
                            <Box className="custom_btn inline">
                                <Button onClick={handleUpdateStatus}  variant="contained">Save</Button>
                            </Box>
                      </Box>
                    }
                    {
                        detail.logged_user.user_role === "entrepreneur" &&
                    <Box className="reset_password_container" sx={{padding : '0 0 24px 24px'}}>
                    <Box className="custom_btn">
                        <Button onClick={() => handleShow()} variant="contained" sx={{padding : "4px 20px !important", my : 2}}>Reset Password</Button>
                    </Box>
                        { show === true &&
                        <form method={"post"} onSubmit={handleSubmit}>
                        <Grid container spacing={4} className="input_fields">
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
                <MatchedMentors mentors={detail.mentors}/>
            </Box>
            <DeleteAlert open={open} setOpen={setOpen} handleDelete={handleDelete}/>
            <ConfirmBox open={openReject} setOpen={setOpenReject} handleSubmit={handleReject} message={`Do you really want to reject ${detail.company_name}`} />
            <ConfirmBox open={openConfirm} setOpen={setOpenConfirm} handleSubmit={handleConfirm} message={`Do you really want to Live ${detail.company_name}`} />
        </Landing>
    );
};

export default Reviewdata;
