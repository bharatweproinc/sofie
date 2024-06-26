import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
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

function Test() { 
  return (
	<Landing>
	<Typography sx={{height:'65px'}}></Typography>
    <BackgroundImageContainer sx={{paddingToo:'65px'}}>
    <CenteredPaper elevation={4} 
    sx={{
      margin:'60px',
      width:'650px !important'
    }}>
	  <Grid container spacing={2} width="100%">
        <Grid item xs={12}  gap={2}>
          <Typography fontWeight={700} sx={{fontSize:"28px"}}>Contact Us</Typography>
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
          <Typography mb={1}>Name</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' },mb:1, width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Name'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
        <Typography mb={1}>Email</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' }, mb:1, width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Your Email Address'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12} xs={12}>
          <Typography mb={1}>Phone Number</Typography>
          <TextField
            size='small'
            sx={{ '& legend': { display: 'none' }, mb:1,  width: '100%' }}
            fullWidth
            variant='outlined'
            placeholder='Your Phone Number'
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12}>
        <Typography mb={1}>
			Company <spam style={{color:"#7C7C7C"}}>(Optional)</spam>
			</Typography>
          <TextField
            sx={{ '& legend': { display: 'none' }, mb:1, width: '100%' }}
            size='small'
            fullWidth
            variant='outlined'
            placeholder='Password'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography mb={1}>Message</Typography>
              <TextField
                size='small'
                sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                fullWidth
                multiline
                rows={4}
                variant='outlined'
                placeholder='Your Message'
              />
            </Grid>
        
        <Grid item xs={12}>
        <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </CenteredPaper>
  </BackgroundImageContainer>
  </Landing>
  );
}

export default Test;