import React, {useState} from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import Constants from '../Constants';
import './style.scss';
import  backgroundimage from '../../../../../public/images/image7.png';
import Joi from '@/utility/JoiValidator';
import  { notify } from '@/Components/Notifier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style.scss";
import ForgetPassword from '@/Components/Dependent/ForgetPassword';
import LinearProgress from '@mui/material/LinearProgress';
import Cookie from '../Cookies/View';

const CenteredPaper = styled(Paper)({
  padding: '40px',
  borderRadius: "12px",
});

const BackgroundImageContainer = styled('div')({
  backgroundImage: `url(${backgroundimage})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important'
});

function Login() {
  const { data, setData, post, processing } = useForm(Constants.initLoginForm);
  const [validationErrors, setValidationErrors] = useState({});
  const [open, setOpen ] = useState(false);

  const handleChange = (key, value) => {

      setValidationErrors({
          ...validationErrors,
          [key]: Joi.validateToPlainErrors(value, Constants.loginSchema[key])
      });
      setData((prev)=>({
          ...prev,
          [key]:value
        }));

      };

  const handleSubmit = (e) => {
      e.preventDefault();
      let validationErrors = Joi.validateToPlainErrors(data, Constants.loginSchema);
      setValidationErrors(validationErrors);

      const isError = Object.keys(validationErrors).some(key => validationErrors[key] !== null);

      if (isError) {
          return;
      }
      post(route('landing.userslogin'),{
        onSuccess:(success) => {
          console.log(success, "sucesss");
          notify.success("Successfully login");
        },
        onError:(error) => {
          console.log(error,"error");
          notify.error(error.email, { position: 'top-right' });
          notify.error(error.msg, {position: "top-right"});
        },
      });
    }

  return (
    <Landing>
     <Cookie />
        <Typography sx={{ height: '65px' }}></Typography>
        <ToastContainer style={{marginTop:"65px"}}/>
        {processing && <LinearProgress />}
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
                              <Button sx={{p : 0}} variant={Typography} onClick={()=> setOpen(true)}>
                                  Forgot Password
                              </Button>
                            </Grid>
                            <Grid item xs={12} className='custom_btn'>
                                <Button variant="contained" fullWidth type="submit" disabled={processing}>Log In</Button>
                                <Typography textAlign="center" mt={4}>Need an account? <Link href={route('landing.signup')}>Sign up here.</Link> </Typography>
                            </Grid>
                          </Grid>
                      </form>
                  </CenteredPaper>
              </div>
          </div>
        </BackgroundImageContainer>
        <ForgetPassword open={open} setOpen={setOpen} routeLink={('landing.forgetPassword')}/>
    </Landing>
  );
}

export default Login;
