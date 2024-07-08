import { Landing } from '@/Layouts/Landing';
import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition:'right top !important'
});

function Privacy() {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <BackgroundImageContainer sx={{paddingTop:'65px'}}>
          <Typography variant="body1" color="initial"
            className="absolute w-full flex justify-center"
            sx={{
              fontSize: '40px',
              fontWeight:'bold'
            }}>
            Privacy Policy</Typography>
            </BackgroundImageContainer>
        <div className="row p-8 justify-normal" >
          <div className="col-md-12 mt-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>

      </Box>
    </Landing>
  );
}

export default Privacy;