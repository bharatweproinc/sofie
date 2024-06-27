import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Landing } from '@/Layouts/Landing';
import { Avatar, Select, TextField, Typography } from '@mui/material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import Button from '@/Components/Singleton/Button';
import "./style.scss"
const Item = styled('div')(() => ({
  border: '2px solid #7C7C7C',
  padding : "20px",
  borderRadius: '8px',
}));

function Profile() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.name);
  };
  return (
    <Landing>
        <Box py={2}>
            <Typography sx={{ height: '65px' }}></Typography>
            <Grid container  className="w-full">
                <Grid item xs={12} px={8} py={4}>
                    <Item>
                        <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Mentor Detail</Typography>
                        <Typography fontWeight={400} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Tell us about Mentor you need</Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} px={8} py={4}>   
                    <Item>
                        <Grid container gap={5} alignItems={"center"}>
                            <Avatar 
                            xs={3}
                            alt="Remy Sharp"
                            src="../Assets/Images/header-right.png"
                            sx={{ width: {lg:'160px',md:"152px", xs:"152px", sm:"152px"},height: {lg:'160px',md:"152px", xs:"152px", sm:"152px"}  }}
                            />
                            <Grid item xs={9} textAlign={"left"}>
                                <Typography fontWeight={600} fontSize="18px">Upload Profile Photo</Typography>
                                <Typography fontWeight={400} fontSize="16px" color={'#7C7C7C'} py={1} pt={2}>Please upload your company's logo photo that meets the following criteria:</Typography>
                                <Typography py={1} color={'#7C7C7C'}>
                                     1. Clear/White Background: Ensure the background of the logo is clean and white or unobtrusive.
                                </Typography>
                                <Typography py={1} color={'#7C7C7C'}>
                                     2. Image Format: Use common image formats such as JPEG, PNG, or SVG.
                                </Typography>
                                <Typography py={1} color={'#7C7C7C'}>
                                    3. High Resolution: Ensure the image is high resolution so that the logo appears clear and professional.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
                <Grid container spacing={4} px={8}>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Contact Name</Typography>
                        <TextField
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Please Fill your contact Name'
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Mobile Number</Typography>
                        <TextField
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Please fill your company mobile number'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Have you mentored companies before?</Typography>
                        <FormGroup row sx={{ marginLeft: "10px" }}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={selectedOption === 'checkedA'}
                                    onChange={handleChange}
                                    name="checkedA"
                                    color="primary"
                                />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={selectedOption === 'checkedB'}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="No"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Qualifications</Typography>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Eg. previous mentoring experiences, completed courses on how to be a mentor, conducted workshops for XXX company, etc </Typography>
                        <TextField
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            placeholder='Please Fill your Qualifications'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Please choose which industry sectors you would like to mentor in</Typography>
                        <TextField
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            placeholder='Please Fill your Qualifications'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>What Functional</Typography>
                        <Select
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Please Fill your contact Name'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>How did your hear about us?</Typography>
                        <Select
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            placeholder='Please Fill your contact Name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Additional Information about You?Your skills</Typography>
                        <TextField
                            size='small'
                            sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            placeholder='Please Fill your Additional Information '
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} mb={4} className="profile_update_btn" textAlign={"center"}>
                    <Button variant="contained" sx={{ padding: "10px 32px"}}> Update</Button>
                </Grid>
            </Grid>
        </Box>
    </Landing>
  );
}

export default Profile;
