import React from 'react';
import { Avatar, Button, Grid, MenuItem, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';
import './style.scss'

const CenteredPaper = styled(Paper)({
    padding: '40px',
});

function CompanyDetail() {
    return (
        <Landing>
            <div className='company_detail'>
                <Typography sx={{ height: '65px' }}></Typography>
                    <Grid container px={8} py={4} >
                        <Grid item xs={12} gap={2} className='company_detail_title' px={8} py={4}>
                            <Typography fontWeight={700} fontSize={"28px"} color={'#223049'}>Company Detail</Typography>
                            <Typography fontWeight={400} fontSize={"16px"} color={'#7C7C7C'}>Tell us about your company</Typography>
                        </Grid>
                        <Grid item xs={12}  py={4}>
                            <Grid container  gap={5} alignItems={"center"} className='upload_image_section' sx={{border:'2px solid #7C7C7C !important'}}>
                                <Avatar xs={3}
                                alt="Remy Sharp"
                                src="https://s3-alpha-sig.figma.com/img/7d26/f12d/c9ef78ed454aee26b7314c1775c9aee2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDuz3IKfyKIHO73haUiB3hVIxn-cpwgeF7CSbHhnFciYE8i2LRI2b2l4UFjC6W~GtnMNBQ~gXqJ8XwnEOskQxXLxdeqXYd77vuhNJo1ZwjeP1dMJ5HWF7aZB4iGs59BLUKNfbs3dtKLAH2v6mHgL2xAfeOfmOTlVM-l-5FQXpTRUYmbWDEDUK1jgHfMgWNpql-X727CwEvvxR~LT0L90OoTOq3mJglPxIubQPlVoLfOR5k-SScEpNbrxh3rl1IZux6zrlrLF~UcZ~-zJqx~hL9dRY7gTg8QYQA-FxerOyCFeJDyVNtaKnC2cn2aD6Ee1EMU8vWJL8tKZHGpZHKoLnw__"
                                sx={{ width: {lg:'160px',md:"152px", xs:"152px", sm:"152px"},height: {lg:'160px',md:"152px", xs:"152px", sm:"152px"}, borderRadius : "50%", border : "2px solid black" }}
                                />
                                <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Profile Photo</Typography>
                                    <Typography fontWeight={400} color={'#7C7C7C'} fontSize="16px" py={1} pt={2}>Please upload your company's logo photo that meets the following criteria:</Typography>
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
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} px={8} py={4}>
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
                        <Grid item xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Please describe what your company does in lees than 100 words</Typography>
                            <TextField
                                size='small'
                                sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                variant='outlined'
                                placeholder='Please fill your company current problems'
                            />
                        </Grid>

                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 1)</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select your company  Functional Area'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 2)</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label='Select your company  Functional Area'
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 3)</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label=' Select your company  Functional Area '
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>How did you hear about us?</Typography>
                                <Select
                                    size='small'
                                    sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                    fullWidth
                                    variant='outlined'
                                    label=' Select your company  Functional Area '
                                >
                                    <MenuItem >Ten</MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>What is the current problem (relating to the functional area of help that has been selected) that you need a mentor to help with? (maximum 50 words)</Typography>
                            <TextField
                                size='small'
                                sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                variant='outlined'
                                placeholder='Please fill your company current problems'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Additional Information/Brand Websites</Typography>
                            <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>eg. Website,Instagram,Facebook, etc</Typography>
                            <TextField
                                size='small'
                                sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                variant='outlined'
                                placeholder='Please fill your company current problems'
                            />
                        </Grid>
                        <Grid item xs={12} mt={3} mb={4} textAlign={"center"}>
                            <Button variant="contained" sx={{ padding: "10px 32px"}}> Update</Button>
                        </Grid>
                    </Grid>
            </div>
        </Landing>
    );
}

export default CompanyDetail;