import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { useForm } from '@inertiajs/react'
import { Landing } from '@/Layouts/Landing';
import { Avatar, FormControl, MenuItem,Button, Radio, RadioGroup, Select, TextField, Typography, FormControlLabel, FormHelperText } from '@mui/material';
import "./style.scss"
import Constants from '../Constants';
import { useState } from 'react';
import profileImage from '../../../Assets/Images/profileImage.png'
import ProfilePhotoUpload from '@/Components/FileUpload';
import { useRef } from 'react';
import { scrollToInput } from '@/utility/ScrollToInput';

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

const mentorSchema = Constants.mentorSchema

function Mentor() {
    const { data, setData, post, processing} = useForm(Constants.initMentorForm);
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setpasswordError] = useState(false);
    const inputRefs = useRef(Constants.mentorInputRefs());



    const handleChange = (key, value) => {
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
        const fieldSchema = mentorSchema.extract(key);
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
          const fieldSchema = mentorSchema.extract(key);
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
        } else {
            console.log(data)
            // post(route('mentor.user.store',data),{
            //     onSuccess:(success) => {
            //        console.log(success, "sucesss")
            //     },
            //     onError:(error) => {
            //       console.log(error,"error")
            //     },
            // })}
            // post(route('mentor.user.update',data),{
            //     onSuccess:(success) => {
            //        console.log(success, "sucesss")
            //     },
            //     onError:(error) => {
            //       console.log(error,"error")
            //     },
            // })}
      };
    }

  return (
    <Landing>
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
                                name={'profile_photo'}
                                setData={setData}
                                data={data}
                                defaultImg ={profileImage}
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
                                value={data.phone || ''}
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
                        <Grid item="true" md={6} xs={12} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>User Name</Typography>
                            <TextField
                                inputRef={inputRefs.current.username}
                                size='small'
                                sx={{ mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                type='text'
                                placeholder='Please Fill User Name'
                                value={data.username}
                                onChange={(e) => handleChange("username", e.target.value)}
                                error={!!validationErrors.username}
                                helperText={validationErrors.username}
                            />
                        </Grid>
                        <Grid item="true" md={6} xs={12} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Password</Typography>
                            <TextField
                                inputRef={inputRefs.current.password}
                                size='small'
                                sx={{ mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                type='password'
                                placeholder='Password'
                                onChange={(e) => handleChange("password", e.target.value)}
                                error={!!validationErrors.password}
                                helperText={validationErrors.password}
                            />
                        </Grid>
                        <Grid item="true" md={6} xs={12} className='profile_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Confirm Password</Typography>
                            <TextField
                                inputRef={inputRefs.current.confirm_password}
                                size='small'
                                sx={{ mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                type='password'
                                placeholder='Confirm Password'
                                onChange={(e) => handleChange("confirm_password", e.target.value)}
                                error={!!validationErrors.confirm_password || passwordError}
                                helperText={validationErrors.confirm_password || (passwordError ? 'Passwords does not match' : '')}
                            />
                        </Grid>
                        <Grid item="true" xs={12}>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Have you mentored companies before?</Typography>
                            <FormControl sx={{marginLeft : '10px'}}>
                                <RadioGroup
                                    row
                                    value={data.mentored_compnay}
                                    onChange={(e) => handleChange("mentored_compnay", e.target.value)}
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
                        <Grid item="true" xs={12} className="profile_message_field">
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Please choose which industry sectors you would like to mentor in</Typography>
                            <TextField
                                inputRef={inputRefs.current.industry_sector}
                                size='small'
                                sx={{  mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                variant='outlined'
                                placeholder='Please Fill your Qualifications'
                                value={data.industry_sector}
                                onChange={(e) => handleChange("industry_sector", e.target.value)}
                                error={!!validationErrors.industry_sector}
                                helperText={validationErrors.industry_sector}
                            />
                        </Grid>
                        <Grid item="true" xs={12} md={6} className='profile_select_box'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>What Functional</Typography>
                            <FormControl sx={{width : '100%'}} error={!!validationErrors.functional}>
                                <Select
                                    inputRef={inputRefs.current.functional}
                                    size='small'
                                    sx={{ '& legend': { display: 'none'}, mt: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    defaultValue={""}
                                    value={data.functional}
                                    placeholder='Please select your company  Functional Area '
                                    onChange={(e) => handleChange("functional", e.target.value)}
                                >
                                    <MenuItem value="marketing">Marketing</MenuItem>
                                    <MenuItem value="finance">Finance</MenuItem>
                                </Select>
                                <FormHelperText>{validationErrors.functional}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item="true" xs={12} md={6} className='profile_select_box'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>How did your hear about us?</Typography>
                            <FormControl sx={{width : '100%'}} error={!!validationErrors.hear_about_us}>
                                <Select
                                    inputRef={inputRefs.current.hear_about_us}
                                    size='small'
                                    sx={{ '& legend': { display: 'none'}, mt: 1, width: '100%' }}
                                    fullWidth
                                    defaultValue={""}
                                    variant='outlined'
                                    value={data.hear_about_us}
                                    placeholder='Please select your company  Functional Area '
                                    onChange={(e) => handleChange("hear_about_us", e.target.value)}
                                >
                                    <MenuItem value="twitter">Twitter</MenuItem>
                                    <MenuItem value="instagram">Instagram</MenuItem>
                                    <MenuItem value="facebook">Facebook</MenuItem>
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
                                variant='outlined'
                                placeholder='No. of Companies'
                                value={data.number_of_companies}
                                onChange={(e) => handleChange("number_of_companies", e.target.value)}
                                error={!!validationErrors.number_of_companies}
                                helperText={validationErrors.number_of_companies}
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
                    <Grid item="true" xs={12} mb={4} textAlign={"center"} className='submit_btn'>
                        <Button type='submit' variant="contained" disabled={processing}> Update</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Landing>
  );
}

export default Mentor;