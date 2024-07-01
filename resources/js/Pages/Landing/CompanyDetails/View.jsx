import React from 'react';
import { useForm } from '@inertiajs/react'
import { Avatar, Button, FormControl, FormHelperText, Grid, MenuItem, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { Landing } from '@/Layouts/Landing';
import './style.scss'
import Constants from '../Constants';
import { useState } from 'react';

const companySchema = Constants.companySchema
  
function CompanyDetail() {
    const { data, setData, post, processing} = useForm(Constants.initCompanyDetailForm);
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (key, value) => {
        const updatedData = {
        ...data,
        [key]: value,
        };

        const fieldSchema = companySchema.extract(key);
        const { error } = fieldSchema.validate(value);

        if (error) {
        setValidationErrors({
            ...validationErrors,
            [key]: error.message,
        });
        } else {
        const { [key]: removedError, ...rest } = validationErrors;
        setValidationErrors(rest);
        }

        setData(updatedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { error, value } = companySchema.validate(data, { abortEarly: false });

        if (error) {
            const validationErrors = {};
            error.details.forEach(detail => {
                validationErrors[detail.path[0]] = detail.message;
        });
        setValidationErrors(validationErrors);
        } else {
            console.log('data', value)
        }
    };
    return (
        <Landing>
            <div className='company_detail'>
                <Typography sx={{ height: '65px' }}></Typography>
                    <Grid container px={8} py={4} sx={{padding : "24px"}}>
                        <Grid item xs={12} gap={2} className='company_detail_title' px={8} py={4}>
                            <Typography fontWeight={700} fontSize={"28px"} color={'#223049'}>Company Detail</Typography>
                            <Typography fontWeight={400} fontSize={"16px"} color={'#7C7C7C'}>Tell us about your company</Typography>
                        </Grid>
                        <Grid item xs={12}>
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
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{p:3}}>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Company Name'
                                        onChange={(e)=> handleChange("company_name", e.target.value)}
                                        error={!!validationErrors.company_name}
                                        helperText={validationErrors.company_name}                
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company UEN</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Company UEN'
                                        onChange={(e)=> handleChange("company_uen", e.target.value)}
                                        error={!!validationErrors.company_uen}
                                        helperText={validationErrors.company_uen}                
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mobile Number</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        type='text'
                                        value={data.mobile_number || ''}
                                        placeholder='Please Fill Your Company Mobile Number'
                                        onChange={(e)=> handleChange("mobile_number", e.target.value.replace(/\D/, '').slice(0, 10))}
                                        error={!!validationErrors.mobile_number}
                                        helperText={validationErrors.mobile_number}                
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1.5} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Position In Company</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.position}>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Please Select Your Company Details'
                                        onChange={(e) => handleChange('position', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.position}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Year Founded</Typography>
                                    <FormControl sx={{width : "100%"}} error={!!validationErrors.founded_year}>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, width: '100%' }}
                                        fullWidth
                                        defaultValue={""}
                                        variant='outlined'
                                        label='Select Your Company Year Founded'
                                        onChange={(e) => handleChange('founded_year', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.founded_year}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Time Size, Number Of Employees</Typography>
                                    <FormControl sx={{width : "100%"}} error={!!validationErrors.time_size}>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select Your Company Time Size'
                                        onChange={(e) => handleChange('time_size', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.time_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Revenue Size</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        defaultValue={""}
                                        variant='outlined'
                                        label='Select Your Company Current Revenue Size'
                                        onChange={(e) => handleChange('current_revenue', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Customers Base Size</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select Your Company Current Customers Base Size'
                                        onChange={(e) => handleChange('current_customers_base_size', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
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
                                        defaultValue={""}
                                        placeholder='Select Industry Sector of Your Company'
                                        onChange={(e) => handleChange('industry_sector', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item xs={12} className='company_message_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Please describe what your company does in less than 100 words</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('description', e.target.value)}
                                    />
                            </Grid>

                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 1)</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_1', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 2)</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        defaultValue={""}
                                        variant='outlined'
                                        label='Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_2', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 3)</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label=' Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_3', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>How did you hear about us?</Typography>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label=' Select your company  Functional Area '
                                        onChange={(e) => handleChange('hear_about_us', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item xs={12} className='company_message_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>What is the current problem (relating to the functional area of help that has been selected) that you need a mentor to help with? (maximum 50 words)</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ '& legend': { display: 'none' }, mt:1, width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('current_problem', e.target.value)}
                                    />
                            </Grid>
                            <Grid item xs={12} className='company_message_field'>
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
                                        onChange={(e) => handleChange('additional_information', e.target.value)}
                                    />
                            </Grid>
                            <Grid item xs={12} mt={3} mb={4} textAlign={"center"} className='submit_btn'>
                                <Button variant="contained" type='submit' disabled={processing}> Update</Button>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        </Landing>
    );
}

export default CompanyDetail;