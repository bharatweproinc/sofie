import React, {useState} from 'react';
import Joi from 'joi';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { useForm } from '@inertiajs/react'
import Constants from '../Constants';
import './style.scss'

const contactSchema = Joi.object({
  name : Joi.string().label("Name").required(),
  email: Joi.string().email({ tlds: { allow: false } }).label("Email").required(),
  phone_number: Joi.number().min(14).label("Phone Number").required(),
  company : Joi.optional(),
  message : Joi.string().label("Message").required()
});

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '100vh',
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
    const updatedData = {
      ...data,
      [key]: value,
    };

    const fieldSchema = contactSchema.extract(key);
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
    const { error, value } = contactSchema.validate(data, { abortEarly: false });
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
      <BackgroundImageContainer sx={{paddingToo:'65px'}}>
        <CenteredPaper elevation={4}>
          <form onSubmit={handleSubmit} className='contact_page'>
            <Grid container spacing={2} width="650px" height="616px">
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
                      helperText={validationErrors.name && <span className="error-message">{validationErrors.name}</span>}
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
                      error={!!validationErrors.email}
                      helperText={validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
                    />
                </Grid>
                <Grid item lg={6} sm={12} md={12} xs={12} className='contact_input_fields'>
                    <Typography mb={1}>Phone Number</Typography>
                    <TextField
                      size='small'
                      sx={{ mb: 1, width: '100%' }}
                      fullWidth
                      type='number'
                      variant='outlined'
                      placeholder='Your Phone Number'
                      onChange={(e) => handleChange('phone_number', e.target.value)}
                      error={!!validationErrors.phone_number}
                      helperText={validationErrors.phone_number && <span className="error-message">{validationErrors.phone_number}</span>}
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
                      helperText={validationErrors.message && <span className="error-message">{validationErrors.message}</span>}
                    />
                </Grid>
              
                <Grid item xs={12}>
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