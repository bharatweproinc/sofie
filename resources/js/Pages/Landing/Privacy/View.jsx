import { Landing } from '@/Layouts/Landing';
import { Box, Typography } from '@mui/material';
import React from 'react';
function Privacy() {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <Box className="relative" sx={{height:'896px'}}>
          <img className='h-full' src="images/image7.png" width={'100%'}/>
          <Typography variant="body1" color="initial"
            className="absolute w-full flex justify-center"
            sx={{
              top: '50%',
              fontSize: '40px',
              fontWeight:'bold'
            }}>
            Privacy Policy</Typography>
        </Box>
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