import React, { useEffect } from 'react';
import { Box, Button, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import image from "../../../../../public/images/image7.png"
import { Link } from '@inertiajs/react';

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

function AcceptedSME() {
  return (
    <Landing >
	    <Typography sx={{height:'65px'}}></Typography>
         <BackgroundImageContainer sx={{paddingToo:'65px'}}>
            <CenteredPaper sx={{width:'650px !important', margin:'60px',}} elevation={4}>
                <Grid container >
                <Grid item xs={12}>
                    <Typography fontWeight={600} textAlign={"center"} py={2}>Thank you for accepting this SME!</Typography>
                    <Typography fontSize={"16px"} color={"#7C7C7C"}>We will be sending your profile to the SME to review.</Typography>
                    <Box mt={2}>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} >If they accept your mentorship, we will send them your email contact details, and they will initiate contact with you. 
                    </Typography>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} py={2}>Thank you!</Typography>
                    </Box>
                    <Box mt={2} display='flex' justifyContent='center' class="custom_btn text-center p-4">
                            <Button component={Link} variant="contained" href={route('landing.home')} color='primary'>
                                Acknowledge
                            </Button>
                        </Box>
                </Grid>
                </Grid>
            </CenteredPaper>
         </BackgroundImageContainer>
    </Landing>
  );
}

export default AcceptedSME;
