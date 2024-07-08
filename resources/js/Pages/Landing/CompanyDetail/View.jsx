import React from 'react';
import { Button, Grid, MenuItem, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import './style.scss'

const BackgroundImageContainer = styled('div')({
    backgroundImage: 'url(./images/image7.png)',
    backgroundSize: 'cover',
    //   width: '100vh',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'right top !important'
});

const CenteredPaper = styled(Paper)({
    padding: '40px',
    borderRadius: "12px",
});

function CompanyDetail() {
    return (
        <Landing>
            <div className='company_detail'>
                <Typography sx={{ height: '65px' }}></Typography>
                <CenteredPaper elevation={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} gap={2} className='company_detail_title'>
                            <Typography fontWeight={700} fontSize={"28px"} color={'#223049'}>Company Detail</Typography>
                            <Typography fontWeight={400} fontSize={"16px"} color={'#7C7C7C'}>Tell us about your company</Typography>
                        </Grid>
                        <Grid item xs={12} gap={2} className='upload_image_section'>
                            <Typography fontWeight={700} ><img src={"/images/cn-monogram.png"} alt="" height='184px' width='168px' />
                            </Typography>
                            <Typography fontWeight={700} >Upload Profile Photo
                            </Typography>
                        </Grid>
                        <Grid item lg={6} sm={12} md={6} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company Name</Typography>
                                <TextField
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Please Fill Your Company Name'
                                />
                        </Grid>
                        <Grid item lg={6} sm={12} md={6} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company UEN</Typography>
                                <TextField
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Please Fill Your Company UEN'
                                />
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mobile Number</Typography>
                                <TextField
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Company Mobile Number'
                                />
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Position In Company</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Please Select Your Company Details'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Year Founded</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select Your Company Year Founded'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Time Size, Number Of Employees</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select Your Company Time Size'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Revenue Size</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select Your Company Current Revenue Size'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Customers Base Size</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select Your Company Current Customers Base Size'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Industry sector your company is in Please choose the most suitable one</Typography>
                                <Select
                                    size='small'
                                    className='industry_sector_select'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px', padding:'16px 32px 16px 32px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Select Industry Sector of Your Company'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Industry sector your company is in Please choose the most suitable one</Typography>
                            <TextareaAutosize aria-label="minimum height" minRows={3} sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px'}, mb: 1, width: '100%' }} fullWidth  placeholder="Please Fill Your Company Current Problems" />
                        </Grid>
                    </Grid>
                </CenteredPaper>
            </div>
        </Landing>
    );
}

export default CompanyDetail;