import React from 'react';
import { Box, Typography} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NoDataFound = ({ message = "No Data Found" }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      p={8}
    >
      <ErrorOutlineIcon color="action" style={{ fontSize: 60 }} />
      
      <Typography variant="h6" gutterBottom>
         {message} 
      </Typography>      
    </Box>
  );
};

export default NoDataFound;
