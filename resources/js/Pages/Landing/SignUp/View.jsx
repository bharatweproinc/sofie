import React from 'react';
import { Box, Button, FormControl, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Constants from '../Constants';
import './style.scss'

const signupSchema = Constants.signupSchema

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
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

  const handleChange = (key, value) => {
      const updatedData = {
        ...data,
        [key]: value,
      };

      const fieldSchema = signupSchema.extract(key);
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
      const { error, value } = signupSchema.validate(data, { abortEarly: false });

      if (error) {
        const validationErrors = {};
        error.details.forEach(detail => {
          validationErrors[detail.path[0]] = detail.message;
        });
        setValidationErrors(validationErrors);
      } else {
        console.log('data', value)
      }
    }; 
  return (

    <Landing>
    <Typography sx={{height:'65px'}}></Typography>
        <BackgroundImageContainer sx={{paddingTop:'65px'}}>
            <CenteredPaper elevation={4} 
              sx={{
              margin:'60px',
              width:'650px !important'
              }}>
                <form onSubmit={handleSubmit}>
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
                            error={!!validationErrors.email}
                            helperText={validationErrors.email}
                          />
                    </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                        <Typography mb={1}>Password</Typography>
                          <TextField
                            sx={{ width: '100%' }}
                            size='small'
                            fullWidth
                            variant='outlined'
                            placeholder='Password'
                            value={data.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            error={!!validationErrors.password}
                            helperText={validationErrors.password}
                          />
                    </Grid>
                    <Grid item lg={6} sm={12} md={6} xs={12} className='signup_input_fields'>
                        <Typography mb={1}>Confirm Password</Typography>
                          <TextField
                            sx={{ width: '100%' }}
                            size='small'
                            fullWidth
                            value={data.confirm_password}
                            variant='outlined'
                            placeholder='Confirm Password'
                            onChange={(e) => handleChange("confirm_password", e.target.value)}
                            error={!!validationErrors.confirm_password}
                            helperText={validationErrors.confirm_password}
                          />
                    </Grid>
                    <Grid  item lg={6} sm={12} md={6} xs={12} textAlign={"start"}>
                      <FormControl sx={{marginLeft : '-10px'}}>  
                          <RadioGroup value={data.enterpreneur_or_mentor} name="radio-buttons-group" sx={{flexDirection:"row", alignItems:"center"}}
                              onChange={(e) => handleChange("enterpreneur_or_mentor", e.target.value)}
                            >
                              <Radio value="entrepreneur" label="Entrepreneur" variant="outlined" />Entrepreneur
                              <Radio value="mentor" label="Mentor" variant="outlined" />Mentor
                          </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} mt={2} className='submit_btn'>
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