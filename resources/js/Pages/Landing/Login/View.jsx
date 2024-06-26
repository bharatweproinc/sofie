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
  backgroundPosition: 'right top !important'
});

const CenteredPaper = styled(Paper)({
  padding: '40px',
  borderRadius: "12px",
});

function Test() {
  return (
    <Landing>
      <Typography sx={{ height: '65px' }}></Typography>
      <BackgroundImageContainer sx={{ paddingToo: '65px' }}>
        <CenteredPaper elevation={4}
          sx={{
            margin: '60px',
            width: '650px !important'
          }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography fontWeight={700} fontSize="28px" textAlign="center">Log In</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Email</Typography>
              <TextField
                size='small'
                sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                fullWidth
                variant='outlined'
                placeholder='Email Address'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password</Typography>
              <TextField
                size='small'
                sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                fullWidth
                variant='outlined'
                placeholder='Password'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Forgot Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Log In</Button>
              <Typography textAlign="center" mt={4}>Need an account? Sign up here.</Typography>
            </Grid>
          </Grid>
        </CenteredPaper>
      </BackgroundImageContainer>
    </Landing>
  );
}

export default Test;