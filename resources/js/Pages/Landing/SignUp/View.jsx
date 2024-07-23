import React, { useEffect } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Constants from '../Constants';
import './style.scss';
import  { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Joi from '@/utility/JoiValidator';
import "../style.scss";

const signupSchema = Constants.signupSchema

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition:'right top !important'
});

const CenteredPaper = styled(Paper)({
  padding: '40px',
  borderRadius: "12px",
});

function Signup() {

  const { data, setData, post, processing } = useForm(Constants.initSignUpForm);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordError, setpasswordError] = useState(false);

  let params = new URLSearchParams(window.location.search)

  let role = params.get("role");

  useEffect(() => {
    if (role !== null) {
      setData(prevData => ({
        ...prevData,
        enterpreneur_or_mentor: role
      }));
    }
  }, [role]);

  const handleChange = (key, value) => {

    setValidationErrors({
        ...validationErrors,
        [key]: Joi.validateToPlainErrors(value, signupSchema[key])
    });

    if (key === 'confirm_password' || key === 'password' ) {
      if (data.password !== value && data.confirm_password !== value) {
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
    let err = Joi.validateToPlainErrors(data, signupSchema)
    setValidationErrors(err);

      const isError = Object.keys(err)?.map((val,i)=>{
          if(err[val]== null){
              return 0
            }
            else{
              return i
            }
          })

      if (isError?.length > 0 || data.confirm_password !== data.password) {
            validationErrors.confirm_password = data.confirm_password !== data.password  ? 'Passwords does not match' : '';
          return;
      } else {
        console.log("data2112121", data)
      //   post(route('register'),{
      //     onSuccess:(success) => {
      //        console.log(success, "sucesss");
      //     },
      //     onError:(error) => {
      //       console.log(error.email,"::error");
      //       notify.error(error.email, { position: 'top-right' });
      //     },
      // })
    }}

  return (
    <Landing>
    <Typography sx={{height:'65px'}}></Typography>
    <ToastContainer style={{marginTop:"65px"}}/>
        <BackgroundImageContainer>
            <CenteredPaper elevation={4}
              sx={{
              margin:'60px',
              width:'650px !important'
              }}>
                <form method={"post"} onSubmit={handleSubmit}>
                  <Grid container spacing={2} className='signup_page'>
                      <Grid item xs={12} gap={2}>
                          <Typography fontWeight={700} sx={{fontSize:"28px"}}>Get Started</Typography>
                          <Box mt={2}>
                              <Typography fontSize={"14px"} color={"#7C7C7C"}>If you have any questions, need further information, or require assistance with </Typography>
                              <Typography fontSize={"14px"} color={"#7C7C7C"}> our services, we're here to help!</Typography>
                          </Box>
                      </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                          <Typography mb={1}>Full Name</Typography>
                          <TextField
                            size='small'
                            sx={{ width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Full Name'
                            onChange={(e) => handleChange("full_name", e.target.value)}
                            error={!!validationErrors.full_name}
                            helperText={validationErrors.full_name}
                          />
                    </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                        <Typography mb={1}>Phone</Typography>
                          <TextField
                            size='small'
                            sx={{ width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Phone'
                            type='text'
                            value={data.phone || ''}
                            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/, '').slice(0, 10))}
                            error={!!validationErrors.phone}
                            helperText={validationErrors.phone}
                          />
                    </Grid>
                    <Grid item lg={12} sm={12} md={12} xs={12} className='signup_input_fields'>
                          <Typography mb={1}>Email</Typography>
                          <TextField
                            size='small'
                            sx={{ width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Email'
                            onChange={(e) => handleChange("email", e.target.value)}
                            error={!!validationErrors.email?.[0]}
                            helperText={validationErrors.email?.[0]}
                          />
                    </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                        <Typography mb={1}>Password</Typography>
                          <TextField
                            sx={{ width: '100%' }}
                            size='small'
                            fullWidth
                            type='password'
                            variant='outlined'
                            placeholder='Password'
                            onChange={(e) => handleChange("password", e.target.value)}
                            error={!!validationErrors.password?.[0]}
                            helperText={validationErrors.password?.[0]}
                          />
                    </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                        <Typography mb={1}>Confirm Password</Typography>
                          <TextField
                            sx={{ width: '100%' }}
                            size='small'
                            fullWidth
                            type='password'
                            variant='outlined'
                            placeholder='Confirm Password'
                            onChange={(e) => handleChange("confirm_password", e.target.value)}
                            error={!!validationErrors.confirm_password?.[0] || passwordError}
                            helperText={validationErrors.confirm_password?.[0] || (passwordError ? 'Passwords does not match' : '')}
                          />
                    </Grid>
                    <Grid  item lg={6} sm={12} md={6} xs={12} textAlign={"start"}>
                      <FormControl sx={{marginLeft : '-10px'}}>
                          <RadioGroup value={data.enterpreneur_or_mentor} name="radio-buttons-group" sx={{flexDirection:{ sm : "row"}, alignItems:{sm : "center", xs : 'flex-start' }}}
                              onChange={(e) => handleChange("enterpreneur_or_mentor", e.target.value)}
                            >
                              <Radio value="entrepreneur" label="Entrepreneur" variant="outlined" />Entrepreneur
                              <Radio value="mentor" label="Mentor" variant="outlined" />Mentor
                          </RadioGroup>
                      </FormControl>
                    </Grid>
                    { 
                      role !== null ? (
                       role === "mentor" ?
                          <Grid item xs={12} className='custom_checkbox_label'>
                            <FormControlLabel required control={<Checkbox />}
                                label="I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentor, that upon being matched with a SME through upcie, and upon my acceptance of the match, I will provide the matched SME with up to a total of 10 hours of consultation and guidance completely FREE OF CHARGE within the time period of 1 year" />
                          </Grid>
                          :
                          <Grid item xs={12} className='custom_checkbox_label'>
                            <FormControlLabel required control={<Checkbox />}
                                label="I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentee/SME, that upon being matched with a mentor through upcie, and upon my acceptance of the match, I will recieve consultation and guidance from the matched mentor completely FREE OF CHARGE for the duration of up to 1 year.
                                    I acknowledge that if I contact mentors that appear on upcie website that I, as a mentee/SME on the upcie platform, have not been matched with, there is no obligation for the mentor to provide consultation and guidance completely FREE OF CHARGE." />
                          </Grid>
                      ) : data.enterpreneur_or_mentor === "mentor" ? 
                          <Grid item xs={12} className='custom_checkbox_label'>
                            <FormControlLabel required control={<Checkbox />}
                                label="I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentor, that upon being matched with a SME through upcie, and upon my acceptance of the match, I will provide the matched SME with up to a total of 10 hours of consultation and guidance completely FREE OF CHARGE within the time period of 1 year" />
                          </Grid>
                          :
                          <Grid item xs={12} className='custom_checkbox_label'>
                            <FormControlLabel required control={<Checkbox />}
                                label="I acknowledge that by creating an account on upcie and participating in upcie's matching program as a mentee/SME, that upon being matched with a mentor through upcie, and upon my acceptance of the match, I will recieve consultation and guidance from the matched mentor completely FREE OF CHARGE for the duration of up to 1 year.
                                    I acknowledge that if I contact mentors that appear on upcie website that I, as a mentee/SME on the upcie platform, have not been matched with, there is no obligation for the mentor to provide consultation and guidance completely FREE OF CHARGE." />
                          </Grid>
                    }
                    <Grid item xs={12} mt={2} className='custom_btn'>
                        <Button type='submit' disabled={processing} variant="contained">Sign Up</Button>
                    </Grid>
                  </Grid>
                </form>
            </CenteredPaper>
        </BackgroundImageContainer>
    </Landing>
  );
}

export default Signup;
