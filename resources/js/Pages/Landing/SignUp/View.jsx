import React from 'react';
import { Box, Button, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // width: '100%',
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
  return (
	<Landing>
	<Typography sx={{height:'65px'}}></Typography>
    <BackgroundImageContainer sx={{paddingToo:'65px'}}>
    <CenteredPaper elevation={4} 
    sx={{
      margin:'60px',
      width:'650px !important'
    }}>
	  <Grid container spacing={2}>
        <Grid item xs={12} gap={2}>
          <Typography fontWeight={700} sx={{fontSize:"28px"}}>Get Started</Typography>
          <Box mt={2}>
            <Typography fontSize={"14px"} color={"#7C7C7C"}>If you have any questions, need further information, or require assistance with </Typography>
            <Typography fontSize={"14px"} color={"#7C7C7C"}> our services, we're here to help!</Typography>
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
          <Typography mb={1}>Full Name</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' }, width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Full Name'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
        <Typography mb={1}>Phone</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' },  width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Phone'
          />
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Typography mb={1}>Email</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' },   width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Email'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
        <Typography mb={1}>Password</Typography>
          <TextField
            sx={{ '& legend': { display: 'none' },  width: '100%' }}
            size='small'
            fullWidth
            variant='outlined'
            placeholder='Password'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
        <Typography mb={1}>Confirm Password</Typography>
          <TextField
            sx={{ '& legend': { display: 'none' },  width: '100%' }}
            size='small'
            fullWidth
            variant='outlined'
            placeholder='Confirm Password'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12} textAlign={"center"}>
        <RadioGroup defaultValue="Entrepreneur" name="radio-buttons-group" sx={{flexDirection:"row", alignItems:"center"}}>
          <Radio value="Entrepreneur" label="Entrepreneur" variant="outlined" />Entrepreneur
          <Radio value="Mentor" label="Mentor" variant="outlined" />Mentor
        </RadioGroup>
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained">Sign Up</Button>
        </Grid>
      </Grid>
    </CenteredPaper>
  </BackgroundImageContainer>
  </Landing>
  );
}

export default Signup;