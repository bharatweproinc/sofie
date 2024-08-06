import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { useForm } from '@inertiajs/react'
import { Landing } from '@/Layouts/Landing';
import { FormControl, MenuItem,Button, Select, TextField, Typography, FormHelperText, OutlinedInput, Checkbox, ListItemText, InputLabel, FormControlLabel, RadioGroup, FormGroup, Radio,  } from '@mui/material';
import "./style.scss"
import Constants from '../Constants';
import { useState } from 'react';
import ProfilePhotoUpload from '@/Components/FileUpload';
import { useRef } from 'react';
import { scrollToInput } from '@/utility/ScrollToInput';
import Popup from '@/Components/Popup/index';
import Joi from '@/utility/JoiValidator';
import '../style.scss';
import { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const multiSelectData = {
    mentored_in_company : Constants.mentoredCompanyOptions,
    hear_about_us: Constants.hearAboutUsOptions,
    functional_area:Constants.functionalAreaOptions,
    industry_sector:Constants.industrySectorOptions,
}

const HeadingBox = styled('div')(() => ({
  border: '1px solid black',
  padding : "20px",
  borderRadius: '8px',
}));

const DetailBox = styled('div')(() => ({
    border: '1px solid #7C7C7C',
    padding : "20px",
    borderRadius: '4px',
}));


function Mentor({detail}) {
    console.log('detail', detail )
    const { data, setData, post, processing} = useForm({...Constants.initMentorForm, ...detail.mentor, ...detail.user});
    const [validationErrors, setValidationErrors] = useState({});
    const inputRefs = useRef(Constants.mentorInputRefs());
    const [open, setOpen] = React.useState(false);
    const [addMoreId, setAddMoreId] = useState("");
    const [selectData, setSelectData] = useState(multiSelectData);
    const addButton = Constants.addButton;
    const [selectPopup, setSelectPopup] = useState({
        title:"",
        desc:""
    });

    const handleClickOpen = (id,title) => {
        setOpen(true);
        setAddMoreId(id);
        setSelectPopup(()=>({
            title:title
        }))
    };


    const handleChange = (key, value, type) => {

        if(type && type === "select"){
            if(value?.includes(undefined)){
                return;
            }
        }
        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value,Constants.mentorSchema[key])
        });

        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        let err = Joi.validateToPlainErrors(data, Constants.mentorSchema)
        setValidationErrors(err);

        const isError = Object.keys(err)?.map((val,i)=>{
            if(err[val]== null){
                 return false
               }
              else{
               return i
              }
             })
        if (isError?.length > 0) {
            for (const field in inputRefs.current) {
                if (inputRefs.current[field] && inputRefs.current[field].current && err[field]) {
                    scrollToInput(inputRefs.current[field]);
                    break;
                }
            }
          setValidationErrors(err);
          return;
        } else {
            console.log('data87787', data)
            post(route('mentor.saveDetail', detail.user.id),{
            onSuccess:(success) => {
                console.log(success, "sucesss")
                notify.success("Mentor data successfully sent for deletion")
            },
            onError:(error) => {
                console.log(error,"error")
                notify.error("Error while updating Mentor")
            },
        })}
        }

  return (
    <Landing auth={detail.logged_user !== null ? detail.logged_user : detail.user}>
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

        <Box py={2} className="profile_page">
            <Typography sx={{ height: '65px' }}></Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item="true" xs={12} px={8}>
                        <HeadingBox>
                            <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Mentor Detail</Typography>
                            <Typography fontWeight={400} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Tell us about Mentor you need</Typography>
                        </HeadingBox>
                    </Grid>
                    <Grid item="true" xs={12} px={8}>
                        <DetailBox>
                            <Grid container gap={5} alignItems={"center"}>
                                <ProfilePhotoUpload
                                    setData={setData}
                                    data={data}
                                    photoKey={'profile_photo'}
                                />
                                <Grid item="true" xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Profile Photo</Typography>
                                    <Typography fontWeight={400} fontSize="16px" color={'#7C7C7C'} py={1} pt={2}>Please upload your company's logo photo that meets the following criteria:</Typography>
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
                        </DetailBox>
                    </Grid>
                    <Grid container spacing={4} px={8} >
                        <Grid item="true" xs={12} md={6} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Contact Name</Typography>
                            <TextField
                                inputRef={inputRefs.current.name}
                                size='small'
                                sx={{  mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                placeholder='Please Fill your contact Name'
                                value={data.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                error={!!validationErrors.name}
                                helperText={validationErrors.name}
                            />
                        </Grid>
                        <Grid item="true" md={6} xs={12} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>
                                Mobile Number <span style={{color:"#7C7C7C", fontWeight : "400"}}>(Optional)</span>
                            </Typography>
                            <TextField
                                size='small'
                                sx={{ mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                type='text'
                                value={data.phone}
                                placeholder='Please fill your company mobile number'
                                onChange={(e) => handleChange("phone", e.target.value.replace(/\D/, '').slice(0, 10))}
                            />
                        </Grid>
                        <Grid item="true" md={6} xs={12} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Email</Typography>
                            <TextField
                                inputRef={inputRefs.current.email}
                                size='small'
                                sx={{ mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                type='email'
                                placeholder='Please Fill your Email'
                                value={data.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                error={!!validationErrors.email}
                                helperText={validationErrors.email}
                            />
                        </Grid>
                        <Grid item="true" xs={12} sx={{mb : 1}}>
                            <Typography mb={1} fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Have you mentored companies before?</Typography>
                                <FormControl sx={{marginLeft : '10px'}}>
                                    <RadioGroup
                                        value={data.mentored_company}
                                        onChange={(e) => handleChange("mentored_company", e.target.value)}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item="true" xs={12} className="profile_message_field">
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Qualifications</Typography>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Eg. previous mentoring experiences, completed courses on how to be a mentor, conducted workshops for XXX company, etc </Typography>
                                <TextField
                                    inputRef={inputRefs.current.qualifications}
                                    size='small'
                                    sx={{  mt:1, width: '100%' }}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                    placeholder='Please Fill your Qualifications'
                                    value={data.qualifications}
                                    onChange={(e) => handleChange("qualifications", e.target.value)}
                                    error={!!validationErrors.qualifications}
                                    helperText={validationErrors.qualifications}
                                />
                        </Grid>
                        <Grid item="true" xs={12} className="profile_message_field" sx={{mb : 1}}>
                            <Typography mb={1} fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Please choose which industry sectors you would like to mentor in</Typography>
                                <FormControl sx={{ width : '100%' }} error={!!validationErrors.industry_sector}>
                                        <Select
                                            labelId="industrySector-label"
                                            multiple
                                            fullWidth
                                            variant="outlined"
                                            value={data.industry_sector }
                                            onChange={(e) => handleChange('industry_sector', e.target.value, 'select')}
                                            input={<OutlinedInput  />}
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

                        <Grid item="true" xs={12} md={6} sx={{mb:1}}>
                            <Typography mb={1} fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>What Functional</Typography>
                            <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area}>
                                <Select
                                    labelId="functionalArea-label"
                                    fullWidth
                                    variant="outlined"
                                    value={data.functional_area}
                                    onChange={(e) => handleChange('functional_area', e.target.value)}
                                    error={!!validationErrors.functional_area}
                                    inputRef={inputRefs.current.functional_area}
                                >
                                    {selectData.functional_area.map((val) => (
                                        <MenuItem key={val} value={val}>
                                            {val}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{validationErrors.functional_area}</FormHelperText>
                            </FormControl>

                        </Grid>
                        <Grid item="true" xs={12} md={6} sx={{mb:1}}>
                            <Typography mb={1} fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>How did your hear about us?</Typography>
                             <FormControl sx={{width : "100%"}} error={!!validationErrors.hear_about_us}>
                                <Select
                                    labelId="hearAboutUs-label"
                                    multiple
                                    fullWidth
                                    variant="outlined"
                                    value={data.hear_about_us}
                                    onChange={(e) => handleChange('hear_about_us', e.target.value,'select')}
                                    input={<OutlinedInput  />}
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
                        <Grid item="true" xs={12} className="profile_input_fields">
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>How Many Companies are the mentors willing to mentor ?</Typography>
                            <TextField
                                inputRef={inputRefs.current.number_of_companies}
                                size='small'
                                sx={{  mt:1, width: '100%' }}
                                fullWidth
                                type='number'
                                variant='outlined'
                                placeholder='No. of Companies'
                                value={data.number_of_companies}
                                onChange={(e) => handleChange("number_of_companies", e.target.value)}
                                error={!!validationErrors.number_of_companies}
                                helperText={validationErrors.number_of_companies}
                            />
                        </Grid>
                        <Grid item="true" xs={12} className="profile_input_fields">
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Experience</Typography>
                            <TextField
                                inputRef={inputRefs.current.experience}
                                size='small'
                                sx={{ mt:1, width: '100%'}}
                                fullWidth
                                type='number'
                                variant='outlined'
                                placeholder='Experience'
                                value={data.experience}
                                onChange={(e) => handleChange("experience", e.target.value)}
                                error={!!validationErrors.experience}
                                helperText={validationErrors.experience}
                            />
                        </Grid>
                        <Grid item="true" xs={12} className="profile_message_field">
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>
                                Additional Information about You? Your skills <span style={{color:"#7C7C7C", fontWeight : '400'}}>(Optional)</span>
                            </Typography>
                            <TextField
                                size='small'
                                sx={{  mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                value={data.additional_information}
                                variant='outlined'
                                placeholder='Please Fill your Additional Information'
                                onChange={(e) => handleChange("additional_information", e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item="true" xs={12} mb={4} textAlign={"center"} className='custom_btn'>
                        <Button type='submit' variant="contained" disabled={processing} onClick={(e)=>handleSubmit(e)}>{ data.functional_id === null ? 'Create' : 'Update'}</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Landing>
  );
}

export default Mentor;
