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

function MentorView({ details }) {

  const { data, setData, post, processing } = useForm({...Constants.initDeclineDropdown, ...details});
  const [validationErrors, setValidationErrors] = React.useState({});

  const [showField, setShowField] = useState(false);

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

const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = Joi.validateToPlainErrors(data, Constants.declineDropdownSchema);
    setValidationErrors(validationErrors);

    const isError = Object.keys(validationErrors).some(key => validationErrors[key] !== null);

    if (isError) {
        return;
    }
    post(route("landing.removeMentorReason"),{
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
                        We see that you have ended the match with one of your mentor. We understand your concern and would like you to share your feedback regarding this.
                        </Typography>

                        <Typography fontSize={'16px'} color={'#7C7C7C'} py={2}>
                            We will be sending you better matches in the future. If you have any further queries please feel free to let us know about them by <Link href={route('landing.contactus')}><Typography color={'#448EE2'}>contacting us</Typography></Link>
                        </Typography>

                        <Typography fontWeight={600} textAlign={'center'} py={2}>
                            Select the reason from the dropdown
                        </Typography>

                        <Box mt={2} class="custom_input_field">
                            <FormControl sx={{width : "100%"}} error={!!validationErrors.reason}>
                                <Select
                                    value={data.reason}
                                    onChange={(e)=> handleChange("reason", e.target.value)}
                                    fullWidth
                                    size='small'
                                    error={!!validationErrors.reason}
                                    helperText={validationErrors.reason}
                                >
                                    <MenuItem value="Goal/set target has been achieved">Goal/set target has been achieved</MenuItem>
                                    <MenuItem value='Difference in personalities, no chemistry'>Difference in personalities, no chemistry</MenuItem>
                                    <MenuItem value='Lack of commitment/lack of progress'>Lack of commitment/lack of progress</MenuItem>
                                        <Button class="btn px-4" onClick={() => setShowField(true)}>
                                        Add Other Reason
                                        </Button>
                                </Select>
                                <FormHelperText>{validationErrors.reason}</FormHelperText>
                            </FormControl>
                                {showField === true && (
                                    <TextField
                                        value={data.reason}
                                        onChange={(e)=> handleChange('reason', e.target.value)}
                                        fullWidth
                                        multiline
                                        placeholder="Please mention reason"
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

export default MentorView;
