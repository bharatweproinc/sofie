import React, {useState} from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import Constants from '../Constants';
import './style.scss';
import  backgroundimage from '../../../../../public/images/image7.png';
import Joi from '@/utility/JoiValidator';
const loginSchema = Constants.loginSchema

const CenteredPaper = styled(Paper)({
  padding: '40px',
  borderRadius: "12px",
});

const BackgroundImageContainer = styled('div')({
  backgroundImage: `url(${backgroundimage})`,
  backgroundSize: 'cover',
  // height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important'
});

function Login() {
  const { data, setData, post, processing } = useForm(Constants.initLoginForm);
  const [validationErrors, setValidationErrors] = useState({});
  
  const handleChange = (key, value) => {
    setValidationErrors({
        ...validationErrors,
        [key]: Joi.validateToPlainErrors(value, loginSchema[key])
    });
    setData((prev)=>({
    ...prev,
    [key]:value
    }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = Joi.validateToPlainErrors(data, loginSchema)
    setValidationErrors(err);
      const isError = Object.keys(err)?.map((val,i)=>{
          if(err[val]== null){
              return 0
            }
            else{
              return i
            }
          })
      if (isError?.length > 0) {
          return;
      } else {
        post(route('landing.userslogin'));
    }}

  return (
    <Landing>
        <Typography sx={{ height: '65px' }}></Typography>
        <BackgroundImageContainer sx={{ paddingToo: '65px' }}>
         <div style={{ position: 'relative', width : '100%'}} className='login_page'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <CenteredPaper elevation={4} sx={{ margin: '60px', width: '650px !important'}}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                      <Grid item xs={12}>
                          <Typography fontWeight={700} fontSize="28px" textAlign="center">Log In</Typography>
                      </Grid>
                      <Grid item xs={12} className='login_input_fields'>
                          <Typography>Email</Typography>
                          <TextField
                            size='small'
                            sx={{ mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Email Address'
                            onChange={(e) => handleChange("email", e.target.value)}
                            error={!!validationErrors.email?.[0]}
                            helperText={validationErrors.email?.[0]}
                          />
                      </Grid>
                      <Grid item xs={12} className='login_input_fields'>
                          <Typography>Password</Typography>
                          <TextField
                            size='small'
                            sx={{ mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            type='password'
                            placeholder='Password'
                            onChange={(e) => handleChange("password", e.target.value)}
                            error={!!validationErrors.password?.[0]}
                            helperText={validationErrors.password?.[0]}
                          />
                      </Grid>
                      <Grid item xs={12}>
                        <Link href=''>
                          <Typography>Forgot Password</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={12} className='submit_btn'>
                          <Button variant="contained" fullWidth type="submit" disabled={processing}>Log In</Button>
                          <Typography textAlign="center" mt={4}>Need an account? <Link href={route('landing.signup')}>Sign up here.</Link> </Typography>
                      </Grid>
                    </Grid>
                </form>
            </CenteredPaper>
          </div>
          </div>
        </BackgroundImageContainer>
    </Landing>
  );
}

export default Login;
