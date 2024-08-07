import React from 'react';
import { Box, Button, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { Link } from '@inertiajs/react';
import image from "../../../../../public/images/image7.png"

const CenteredPaper = styled(Paper)({
  padding: '80px',
  borderRadius: "16px",
});

const BackgroundImageContainer = styled('div')({
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition:'right top !important'
  });

function EmailNotification({user}) {
  return (
    <Landing >
	    <Typography sx={{height:'65px'}}></Typography>
         <BackgroundImageContainer sx={{paddingToo:'65px'}}>
            <CenteredPaper sx={{width:'650px !important', margin:'60px',}} elevation={4}>
                <Grid container >
                <Grid item xs={12}>
                    <Typography fontSize={"16px"} color={"#7C7C7C"}>We sent an email with a link to verify your account to:</Typography>
                    <Typography fontWeight={600} textAlign={"center"} py={2}>{user.email}</Typography>
                    <Box mt={2}>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} >If the email has not arrived within 15 minutes, check your spam folder </Typography>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} py={2}> If you are still unable to receive a verification email, please <Link href={route('landing.contactus')}> <Typography color={'#448EE2'}>contact us</Typography></Link> so that we can resolve your issue</Typography>
                    </Box>
                </Grid>
                </Grid>
            </CenteredPaper>
         </BackgroundImageContainer>
    </Landing>
  );
}

export default EmailNotification;
