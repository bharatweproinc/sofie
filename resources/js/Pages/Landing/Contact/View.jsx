import React, {useState} from 'react';
import { Box, Button, Grid, Input, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { useForm } from '@inertiajs/react'
import Constants from '../Constants';
import './style.scss';
import Joi from '@/utility/JoiValidator';
import "../style.scss";
import LinearProgress from '@mui/material/LinearProgress';

const contactSchema = Constants.contactSchema

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

function Contact() {
  const { data, setData, post, processing } = useForm(Constants.initContactForm);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (key, value) => {
    setValidationErrors({
        ...validationErrors,
        [key]: Joi.validateToPlainErrors(value, contactSchema[key])
    });
    setData((prev)=>({
    ...prev,
    [key]:value
    }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = Joi.validateToPlainErrors(data, contactSchema)
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
        post(route('landing.contact'),{
            onSuccess:(success) => {
               console.log(success, "sucesss");
                notify.success("Email Sent Successfully");
            },
            onError:(error) => {
              console.log(error.email,"::error");
              notify.error("Error While Sending Email");
              notify.error(error.email, { position: 'top-right' });
            },
        })
    }}

  return (
	<Landing>
	<Typography sx={{height:'65px'}}></Typography>
      {processing && <LinearProgress />}
      <BackgroundImageContainer sx={{paddingToo:'65px'}}>
        <CenteredPaper sx={{width:'650px !important', margin:'60px',}} elevation={4}>
          <form onSubmit={handleSubmit} className='contact_page'>
            <Grid container spacing={2} width="100%">
                <Grid item xs={12} gap={2}>
                    <Typography fontWeight={700} sx={{fontSize:"28px"}}>Contact Us</Typography>
                </Grid>
                <Grid item lg={6} sm={12} md={6} xs={12} className='contact_input_fields'>
                    <Typography mb={1}>Name</Typography>
                    <TextField
                      size='small'
                      sx={{ mb:1, width: '100%' }}
                      fullWidth
                      type='text'
                      variant='outlined'
                      placeholder='Name'
                      onChange={(e) => handleChange("name", e.target.value)}
                      error={!!validationErrors.name}
                      helperText={validationErrors.name}
                    />
                </Grid>
                <Grid item lg={6} sm={12} md={6} xs={12} className='contact_input_fields'>
                    <Typography mb={1}>Email</Typography>
                    <TextField
                      size='small'
                      sx={{ mb:1, width: '100%' }}
                      fullWidth
                      type='email'
                      variant='outlined'
                      placeholder='Your Email Address'
                      onChange={(e) => handleChange("email", e.target.value)}
                      error={!!validationErrors.email?.[0]}
                      helperText={validationErrors.email?.[0]}
                    />
                </Grid>
                <Grid item lg={6} sm={12} md={6} xs={12} className='contact_input_fields'>
                    <Typography mb={1}>
                        Company <span style={{color:"#7C7C7C"}}>(Optional)</span>
                    </Typography>
                    <TextField
                      sx={{ mb:1, width: '100%' }}
                      size='small'
                      fullWidth
                      type='text'
                      variant='outlined'
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className='contact_message_field'>
                    <Typography mb={1}>Message</Typography>
                    <TextField
                      size='small'
                      sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                      fullWidth
                      multiline
                      rows={4}
                      variant='outlined'
                      placeholder='Your Message'
                      onChange={(e) => handleChange("message", e.target.value)}
                      error={!!validationErrors.message}
                      helperText={validationErrors.message}
                    />
                </Grid>
                <Grid item xs={12} className="custom_btn">
                  <Button variant="contained" type="submit" disabled={processing}>Submit</Button>
                </Grid>
            </Grid>
          </form>
        </CenteredPaper>
      </BackgroundImageContainer>
  </Landing>
  );
}

export default Contact;
