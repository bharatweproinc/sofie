import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Select, MenuItem, TextField, Typography, FormControl, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import { Link } from '@inertiajs/react';
import { useForm } from "@inertiajs/react";
import { useEffect } from 'react';
import Constants from './Constants';
import Joi from '@/utility/JoiValidator';
import "../style.scss"
import image from "../../../../../public/images/image7.png"

const CenteredPaper = styled(Paper)({
  padding: '80px',
  borderRadius: '16px',
});

const BackgroundImageContainer = styled('div')({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important',
});

function CompanyView({ details }) {

  const { data, setData, post, processing } = useForm({...Constants.initDeclineDropdown, ...details});
  const [validationErrors, setValidationErrors] = React.useState({});

  const [showField, setShowField] = useState(false);
  const [showSelect, setShowSelect] = useState(true);

    const handleChange = (key, value) => {
        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value, Constants.declineDropdownSchema[key])
        });
        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    };
    
    const handleBehavior = () => {
        setShowField(true);
        setShowSelect(false);
      };

    console.log("data::", data);
    const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = Joi.validateToPlainErrors(data, Constants.declineDropdownSchema);
    setValidationErrors(validationErrors);

    const isError = Object.keys(validationErrors).some(key => validationErrors[key] !== null);

    if (isError) {
        return;
    }
    post(route("landing.removeSmeReason"),{
        onSuccess:(success) => {
            console.log(success, "sucesss");
            notify.success('Reason sent successfully');
        },
        onError:(error) => {
            console.log(error.message,"error");
            notify.error("Error while sending reason")
            notify.error(error.message);
        },
      });
}

  useEffect(() => {
    // console.log(window.location.href.split('/'),"Window")
  },[])

  return (
    <Landing>
      <Typography sx={{ height: '65px' }}></Typography>
        <BackgroundImageContainer sx={{ paddingToo: '65px' }}>
            <CenteredPaper sx={{ width: '650px !important', margin: '60px' }} elevation={4}>
                <Grid container>
                <Grid item xs={12}>
                        <Typography fontSize={'16px'} color={'#7C7C7C'}>
                        Thank you for your response! 
                        </Typography>

                        <Typography fontSize={'16px'} color={'#7C7C7C'} py={2}>
                        We are so sorry to hear that you have removed this match. We would like to request that you fill in this feedback dropdown indicating the reason why you have removed this SME.                         </Typography>

                        <Typography fontSize={'16px'} color={'#7C7C7C'}>
                        If you have any questions, please feel free to contact us at hello@upcie.net
                        </Typography>
                        
                        <Typography fontWeight={600} textAlign={'center'} py={2}>
                        Select a reason from dropdown or add your custom reason below:
                        </Typography>

                        <Box mt={2} class="custom_input_field">
                        {
                            showSelect === true &&
                            <FormControl sx={{width : "100%"}} error={!!validationErrors.reason}>
                                        <Select
                                            value={data.reason}
                                            onChange={(e)=> handleChange("reason", e.target.value)}
                                            fullWidth
                                            multiline
                                            placeholder="Please mention reason"
                                            size='small'
                                            error={!!validationErrors.reason}
                                            helperText={validationErrors.reason}
                                        >
                                        <MenuItem value="Goal/set target has been achieved" onClick={() => setShowField(false)}>Goal/set target has been achieved</MenuItem>
                                        <MenuItem value='Difference in personalities, no chemistry' onClick={() => setShowField(false)}>Difference in personalities, no chemistry</MenuItem>
                                        <MenuItem value='Lack of commitment/lack of progress' onClick={() => setShowField(false)}>Lack of commitment/lack of progress</MenuItem>
                                        <MenuItem value='Add Other Reason' onClick={() => handleBehavior()}>Add Other Reason</MenuItem>
                                                {/* <Button class="btn px-4" onClick={() => handleBehavior()}> */}
                                                {/* Add Other Reason */}
                                                {/* </Button> */}
                                        </Select>
                                        <FormHelperText>{validationErrors.reason}</FormHelperText>
                                </FormControl>
                        }
                                {showField === true && (
                                    <TextField
                                        value={data.reason}
                                        onChange={(e)=> handleChange('reason', e.target.value)}
                                        fullWidth
                                        margin='normal'
                                        size='small'
                                        error={!!validationErrors.reason}
                                        helperText={validationErrors.reason}
                                    />
                                    )}
                        </Box>
                        <Box mt={2} display='flex' justifyContent='center' class="custom_btn text-center p-4">
                            <Button variant='contained' disabled={processing} color='primary' onClick={handleSubmit}>
                                 Submit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CenteredPaper>
        </BackgroundImageContainer>
    </Landing>
  );
}

export default CompanyView;
