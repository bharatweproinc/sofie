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

function NotAcceptedMentor() {
  return (
    <Landing >
	    <Typography sx={{height:'65px'}}></Typography>
         <BackgroundImageContainer sx={{paddingToo:'65px'}}>
            <CenteredPaper sx={{width:'650px !important', margin:'60px',}} elevation={4}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography fontWeight={600} textAlign={"center"} py={2}>Mentor Already Assigned</Typography>
                  <Typography fontSize={"16px"} color={"#7C7C7C"}>The mentor you selected cannot be assigned because the maximum allowable mentors for this selection have been reached.</Typography>
                  <Box mt={2}>
                    <Typography fontSize={"16px"} color={"#7C7C7C"}>Please select a different mentor or contact support if you need further assistance.</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CenteredPaper>
         </BackgroundImageContainer>
    </Landing>
  );
}

export default NotAcceptedMentor;
