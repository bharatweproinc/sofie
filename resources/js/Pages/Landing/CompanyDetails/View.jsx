import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react'
import { Avatar, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { Landing } from '@/Layouts/Landing';
import './style.scss'
import Constants from '../Constants';
import { useState } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ProfilePhotoUpload from '@/Components/FileUpload';
import profileImage from '../../../Assets/Images/profileImage.png'
import { scrollToInput } from '@/utility/ScrollToInput';
import { useRef } from 'react';
import Popup from '@/Components/Popup/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const companySchema = Constants.companySchema;
const addButton = Constants.addButton;
const multiSelectData = {
    current_revnue:Constants.currentRevenueSizeOptions ,
    position_in_company : Constants.positionInCompanyOptions,
    current_customers_base_size:Constants.currentCustomersBaseSize,
    hear_about_us: Constants.hearAboutUsOptions,
    functional_area_1:Constants.functionalAreaOptions,
    functional_area_2:Constants.functionalAreaOptions,
    functional_area_3:Constants.functionalAreaOptions,
    industry_sector:Constants.industrySectorOptions,
    team_size: Constants.teamSizeOptions
}

function CompanyDetail({detail}) {
    const inputRefs = useRef(Constants.companyInputRefs());
    const { data, setData, post, processing} = useForm(Constants.initCompanyDetailForm);
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setpasswordError] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [addMoreId, setAddMoreId] = useState("");
    const [selectData, setSelectData] = useState(multiSelectData);
    const [selectPopup, setSelectPopup] = useState({
        title:"",
        desc:""
    });
    const [user, setUser] = useState(null);
    console.log(data,"::data")



    useEffect(() => {
        setUser(detail)
    }, [detail])

    const handleClickOpen = (id,title) => {
        setOpen(true);
        setAddMoreId(id);
        setSelectPopup(()=>({
            title:title
        }))
    };

    const handleChange = (key, value,type) => {
        if(type && type == "select"){
            if(value.includes(undefined)){
                return;
            }
        }
        const updatedData = {
            ...data,
            [key]: value,
        };
        if (key === 'confirm_password' || key === 'password') {
            if (data.password !== value && data.confirm_password !== value) {
              setpasswordError(true);
            } else {
              setpasswordError(false);
            }
        }
        const fieldSchema = companySchema.extract(key);
        const { error } = fieldSchema.validate(value);

        if (error) {
            setValidationErrors({
                ...validationErrors,
                [key]: error.message,
            });
        } else {
            const { [key]: removedError, ...rest } = validationErrors;
            setValidationErrors(rest);
        }
        setData(updatedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        Object.keys(data).forEach(key => {
          const fieldSchema = companySchema.extract(key);
          const { error } = fieldSchema.validate(data[key]);
          if (error) {
            validationErrors[key] = error.message;
          }
        });
        if (data.confirm_password !== data.password) {
          validationErrors.confirm_password = 'Passwords does not match';
        }
        if (Object.keys(validationErrors).length > 0) {
            for (const field in inputRefs.current) {
                if (inputRefs.current[field] && inputRefs.current[field].current && validationErrors[field]) {
                    scrollToInput(inputRefs.current[field]);
                    break;
                }
            }
          setValidationErrors(validationErrors);
        } else
        {
            console.log("data", data);
            post(route('company.saveData',user.id),{
                onSuccess:(success) => {
                   console.log(success, "sucesss");
                   notify.success('Success', { position: 'top-right' });

                },
                onError:(error) => {
                  console.log(error,"error");
                  notify.error('Failure', { position: 'top-right' });

                },
            })

            // get(route('mentor.getList',data),{
            //     onSuccess:(success) => {
            //        console.log(success, "sucesss");
            //        notify.success('Success', { position: 'top-right' });

            //     },
            //     onError:(error) => {
            //       console.log(error,"error");
            //       notify.error('Failure', { position: 'top-right' });
            //     },
            // })
        }
    }


    return (
        <Landing auth={user}>
            <Popup
                title={selectPopup.title}
                dsec={selectPopup.desc}
                setOpen={setOpen}
                open={open}
                addMoreId={addMoreId}
                setSelectData={setSelectData}
                selectData={selectData}
            />
              <ToastContainer style={{ marginTop:"53px" }}/>



        <div className='company_detail'>
                <Typography sx={{ height: '65px' }}></Typography>
                    <Grid container px={8} py={4} sx={{padding : "24px"}}>
                        <Grid item xs={12} gap={2} className='company_detail_title' px={8} py={4}>
                            <Typography fontWeight={700} fontSize={"28px"} color={'#223049'}>Company Detail</Typography>
                            <Typography fontWeight={400} fontSize={"16px"} color={'#7C7C7C'}>Tell us about your company</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container  gap={5} alignItems={"center"} className='upload_image_section' sx={{border:'2px solid #7C7C7C !important'}}>
                                      <ProfilePhotoUpload
                                        name={'profile_photo'}
                                        setData={setData}
                                        data={data}
                                        defaultImg={profileImage}
                                        />
                                <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Profile Photo</Typography>
                                    <Typography fontWeight={400} color={'#7C7C7C'} fontSize="16px" py={1} pt={2}>Please upload your company's logo photo that meets the following criteria:</Typography>
                                    <Typography py={1} color={'#7C7C7C'}>
                                        1. Clear/White Background: Ensure the background of the logo is clean and white or unobtrusive.
                                    </Typography>
                                    <Typography py={1} color={'#7C7C7C'}>
                                        2. Image Format: Use common image formats such as JPEG, PNG, or SVG.
                                    </Typography>
                                    <Typography py={1} color={'#7C7C7C'}>
                                        3. High Resolution: Ensure the image is high resolution so that the logo appears clear and professional.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{p:3}}>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company Name</Typography>
                                    <TextField
                                        inputRef={inputRefs.current.company_name}
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Company Name'
                                        onChange={(e)=> handleChange("company_name", e.target.value)}
                                        error={!!validationErrors.company_name}
                                        helperText={validationErrors.company_name}
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Contact Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Contact Name'
                                        onChange={(e)=> handleChange("contact_name", e.target.value)}
                                        error={!!validationErrors.contact_name}
                                        helperText={validationErrors.contact_name}
                                        inputRef={inputRefs.current.contact_name}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Email</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        type='email'
                                        variant='outlined'
                                        placeholder='Please Fill Your Email'
                                        onChange={(e)=> handleChange("email", e.target.value)}
                                        error={!!validationErrors.email}
                                        helperText={validationErrors.email}
                                        inputRef={inputRefs.current.email}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>User Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your User Name'
                                        onChange={(e)=> handleChange("user_name", e.target.value)}
                                        error={!!validationErrors.user_name}
                                        helperText={validationErrors.user_name}
                                        inputRef={inputRefs.current.user_name}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Password</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Password'
                                        onChange={(e)=> handleChange("password", e.target.value)}
                                        error={!!validationErrors.password}
                                        helperText={validationErrors.password}
                                        inputRef={inputRefs.current.password}
                                        type='password'

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Confirm Password</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Email'
                                        onChange={(e)=> handleChange("confirm_password", e.target.value)}
                                        error={!!validationErrors.confirm_password || passwordError}
                                        helperText={validationErrors.confirm_password || (passwordError ? 'Passwords does not match' : '')}
                                        inputRef={inputRefs.current.confirm_password}
                                        type='password'

                                    />
                            </Grid>

                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company UEN</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Company UEN'
                                        onChange={(e)=> handleChange("company_uen", e.target.value)}
                                        error={!!validationErrors.company_uen}
                                        helperText={validationErrors.company_uen}
                                        inputRef={inputRefs.current.company_uen}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_input_field  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mobile Number
                                <span style={{color:"#7C7C7C", fontWeight : "400", marginLeft:"4px"}}>(Optional)</span>
                                </Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        type='text'
                                        value={data.phone || ''}
                                        placeholder='Please Fill Your Company Mobile Number'
                                        onChange={(e)=> handleChange("phone", e.target.value.replace(/\D/, '').slice(0, 10))}
                                    />
                            </Grid>
                            <Grid item lg={6} xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>
                                     Position In Company
                                </Typography>
                                <FormControl sx={{ width : '100%'}} error={!!validationErrors.position}>
                                    <InputLabel id="position-label">Position in company</InputLabel>
                                        <Select
                                            labelId="position-label"
                                            multiple
                                            fullWidth
                                            variant="outlined"
                                            value={data.position}
                                            onChange={(e) => handleChange('position', e.target.value, 'select')}
                                            input={<OutlinedInput label="Position in Company" />}
                                            error={!!validationErrors.position}
                                            inputRef={inputRefs.current.position}
                                            renderValue={(selected) => selected.join(', ')}
                                        >
                                            {selectData.position_in_company.map((val) => (
                                                <MenuItem key={val} value={val}>
                                                    <Checkbox checked={data.position.includes(val)} />
                                                    <ListItemText primary={val} />
                                                </MenuItem>
                                            ))}
                                            <Button onClick={()=>handleClickOpen("position_in_company", "Position in company")}>
                                                {addButton()}
                                            </Button>
                                        </Select>
                                    <FormHelperText>{validationErrors.position}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12} className='date_picker ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Year Founded</Typography>
                                    <FormControl sx={{ width:"100%"}} error={!!validationErrors.founded_year}>
                                        <LocalizationProvider   dateAdapter={AdapterDayjs} >
                                            <DatePicker
                                                inputRef={inputRefs.current.founded_year}
                                                sx={{ width:"100%"}}
                                                views={['year']}
                                                label={''}
                                                openTo="year"
                                                slotProps={{
                                                    textField:
                                                    {
                                                        size: "small",
                                                        error: !!validationErrors.founded_year,
                                                        placeholder:"Year Founded"
                                                    },
                                            }}
                                            onChange={(value) => handleChange('founded_year', value.$y)}/>
                                        <FormHelperText>{validationErrors.founded_year}</FormHelperText>
                                    </LocalizationProvider>
                                    </FormControl>
                               </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Team Size, Number Of Employees</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.team_size}>
                                        <InputLabel id="teamSize-label" sx={{mb : '10px'}}>Team Size</InputLabel>
                                            <Select
                                                labelId="teamSize-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.team_size}
                                                onChange={(e) => handleChange('team_size', e.target.value, 'select')}
                                                input={<OutlinedInput label="Team Size" />}
                                                error={!!validationErrors.team_size}
                                                inputRef={inputRefs.current.team_size}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.team_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.team_size.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("team_size", "Team Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.team_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Revenue Size</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_revenue}>
                                        <InputLabel id="revenue-label">Revenue Size</InputLabel>
                                            <Select
                                                labelId="revenue-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_revenue}
                                                onChange={(e) => handleChange('current_revenue', e.target.value, 'select')}
                                                input={<OutlinedInput label="Revenue Size" />}
                                                error={!!validationErrors.current_revenue}
                                                inputRef={inputRefs.current.current_revenue}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.current_revnue.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.current_revenue.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("current_revnue", "Revenue Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.current_revenue}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Customers Base Size</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_customers_base_size}>
                                        <InputLabel id="customerBase-label">Customers Base Size</InputLabel>
                                            <Select
                                                labelId="customerBase-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_customers_base_size}
                                                onChange={(e) => handleChange('current_customers_base_size', e.target.value,'select')}
                                                input={<OutlinedInput label="Customers Base Size" />}
                                                error={!!validationErrors.current_customers_base_size}
                                                inputRef={inputRefs.current.current_customers_base_size}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.current_customers_base_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.current_customers_base_size.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("current_customers_base_size", "Customers Base Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.current_customers_base_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={12}  xs={12} >
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Industry sector your company is in Please choose the most suitable one</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.industry_sector}>
                                        <InputLabel id="industrySector-label">Industry Sector</InputLabel>
                                            <Select
                                                labelId="industrySector-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.industry_sector }
                                                onChange={(e) => handleChange('industry_sector', e.target.value,'select')}
                                                input={<OutlinedInput label="Industry Sector" />}
                                                error={!!validationErrors.industry_sector}
                                                inputRef={inputRefs.current.industry_sector}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.industry_sector.map((val) => (
                                                    <MenuItem key={val.value} value={val.value}>
                                                        <Checkbox checked={data.industry_sector.includes(val.value)} />
                                                        <ListItemText primary={val.description} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("industry_sector", "Industry Sector")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.industry_sector}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12} className='company_message_field' sx={{ mb:1 }}>
                                <Typography sx={{ mb:1 }} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Please describe what your company does in less than 100 words</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('description', e.target.value)}
                                        error={!!validationErrors.description}
                                        helperText={validationErrors.description}
                                        inputRef={inputRefs.current.description}
                                    />
                            </Grid>

                            <Grid item lg={6}  xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 1)</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_1}>
                                        <InputLabel id="functionalArea1-label">Functional Area 1</InputLabel>
                                            <Select
                                                labelId="functionalArea1-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_1  }
                                                onChange={(e) => handleChange('functional_area_1', e.target.value,'select')}
                                                input={<OutlinedInput label="Functional Area 1" />}
                                                error={!!validationErrors.functional_area_1}
                                                inputRef={inputRefs.current.functional_area_1}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.functional_area_1.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.functional_area_1.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("functional_area_1", "Functional Area 1")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_1}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6} xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 2)</Typography>
                                 <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_2}>
                                        <InputLabel id="functionalArea1-label">Functional Area 2</InputLabel>
                                            <Select
                                                labelId="functionalArea1-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_2  }
                                                onChange={(e) => handleChange('functional_area_2', e.target.value,'select')}
                                                input={<OutlinedInput label="Functional Area 2" />}
                                                error={!!validationErrors.functional_area_2}
                                                inputRef={inputRefs.current.functional_area_2}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.functional_area_2.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.functional_area_2.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("functional_area_2", "Functional Area 2")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_2}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 3)</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_3}>
                                        <InputLabel id="functionalArea3-label">Functional Area 3</InputLabel>
                                            <Select
                                                labelId="functionalArea3-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_3}
                                                onChange={(e) => handleChange('functional_area_3', e.target.value,'select')}
                                                input={<OutlinedInput label="Functional Area 3" />}
                                                error={!!validationErrors.functional_area_3}
                                                inputRef={inputRefs.current.functional_area_3}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.functional_area_3.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.functional_area_3.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("functional_area_3", "Functional Area 3")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_3}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>How did you hear about us?</Typography>
                                  <FormControl sx={{width : "100%"}} error={!!validationErrors.hear_about_us}>
                                        <InputLabel id="hearAbout-label">Hear About Us</InputLabel>
                                            <Select
                                                labelId="hearAbout-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.hear_about_us  }
                                                onChange={(e) => handleChange('hear_about_us', e.target.value,'select')}
                                                input={<OutlinedInput label="Hear About Us" />}
                                                error={!!validationErrors.hear_about_us}
                                                inputRef={inputRefs.current.hear_about_us}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.hear_about_us.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.hear_about_us.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("hear_about_us", "Hear About Us")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.hear_about_us}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12} className='company_message_field  ' sx={{mb:1}}>
                                <Typography sx={{ mb:1 }} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>What is the current problem (relating to the functional area of help that has been selected) that you need a mentor to help with? (maximum 50 words)</Typography>
                                    <TextField
                                        size='small'
                                        sx={{   width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('current_problem', e.target.value)}
                                        error={!!validationErrors.current_problem}
                                        helperText={validationErrors.current_problem}
                                        inputRef={inputRefs.current.current_problem}
                                    />
                            </Grid>
                            <Grid item xs={12} className='company_message_field'  sx={{mb:1}}>
                                <Typography fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Additional Information/Brand Websites</Typography>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>eg. Website,Instagram,Facebook, etc
                                    <span style={{color:"#7C7C7C", fontWeight : "400", marginLeft:"4px"}}>(Optional)</span>
                                </Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mt:0, width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('additional_information', e.target.value)}
                                    />
                            </Grid>
                            <Grid item xs={12} mt={3} mb={4} textAlign={"center"} className='submit_btn'>
                                <Button variant="contained" type='submit' disabled={processing} > Update</Button>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        </Landing>
    );
}

export default CompanyDetail;
