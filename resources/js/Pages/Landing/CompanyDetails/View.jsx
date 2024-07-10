import React from 'react';
import { useForm } from '@inertiajs/react'
import { Avatar, Button, FormControl, FormHelperText, Grid, MenuItem, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { Landing } from '@/Layouts/Landing';
import './style.scss'
import Constants from '../Constants';
import { useState } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ProfilePhotoUpload from '@/Components/FileUpload';
import profileImage from '../../../Assets/Images/profileImage.png'
import { scrollToInput } from '@/utility/ScrollToInput';
import { useRef } from 'react';
import { useEffect } from 'react';



const companySchema = Constants.companySchema;
function CompanyDetail({detail}) {
    const inputRefs = useRef(Constants.companyInputRefs());

    const { data, setData, post, processing} = useForm(Constants.initCompanyDetailForm);
    const [validationErrors, setValidationErrors] = useState({});
    const [passwordError, setpasswordError] = useState(false);

    useEffect(()=>{
        setData(detail);
    },[])

    const handleChange = (key, value) => {
        const updatedData = {
        ...data,
        [key]: value,
        };

        if (key === 'confirm_password' || key === 'password') {
            if (data.password !== value && data.confirm_password !== value) {
              setpasswordError(true);
            } else {
              setpasswordError(false);
            }
        }


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
        console.log("helooo")

        const validationErrors = {};

        Object.keys(data).forEach(key => {
          const fieldSchema = companySchema.extract(key)
    ;
          const { error } = fieldSchema.validate(data[key]);
          if (error) {
            validationErrors[key] = error.message;
          }
        });


        if (data.confirm_password !== data.password) {
          validationErrors.confirm_password = 'Passwords does not match';

        }

        if (Object.keys(validationErrors).length > 0) {
            for (const field in inputRefs.current) {
                if (inputRefs.current[field] && inputRefs.current[field].current && validationErrors[field]) {
                    scrollToInput(inputRefs.current[field]);
                    break;
                }
            }
          setValidationErrors(validationErrors);
          console.log(validationErrors,"::validation")
          return;
        } else {
          console.log('Data', data);
          post(route('company.saveData',data),{
                onSuccess:(success) => {
                   console.log(success, "sucesss")
                },
                onError:(error) => {
                  console.log(error,"error")
                },
            })}
            // post(route('company.details.update',data),{
            //     onSuccess:(success) => {
            //        console.log(success, "sucesss")
            //     },
            //     onError:(error) => {
            //       console.log(error,"error")
            //     },
            // })}
        // }
    //   };
        }


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
                                      <ProfilePhotoUpload
                                        name={'profile_photo'}
                                        setData={setData}
                                        data={data}
                                        defaultImg={profileImage}
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
                                        inputRef={inputRefs.current.company_name}
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
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Contact Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Contact Name'
                                        onChange={(e)=> handleChange("contact_name", e.target.value)}
                                        error={!!validationErrors.contact_name}
                                        helperText={validationErrors.contact_name}
                                        inputRef={inputRefs.current.contact_name}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Email</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        type='email'
                                        variant='outlined'
                                        placeholder='Please Fill Your Email'
                                        onChange={(e)=> handleChange("email", e.target.value)}
                                        error={!!validationErrors.email}
                                        helperText={validationErrors.email}
                                        inputRef={inputRefs.current.email}
                                        value={data.email || ''}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>User Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your User Name'
                                        onChange={(e)=> handleChange("user_name", e.target.value)}
                                        error={!!validationErrors.user_name}
                                        helperText={validationErrors.user_name}
                                        inputRef={inputRefs.current.user_name}
                                        value={data.name || ''}
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Password</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Password'
                                        onChange={(e)=> handleChange("password", e.target.value)}
                                        error={!!validationErrors.password}
                                        helperText={validationErrors.password}
                                        inputRef={inputRefs.current.password}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Confirm Password</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        placeholder='Please Fill Your Email'
                                        onChange={(e)=> handleChange("confirm_password", e.target.value)}
                                        error={!!validationErrors.confirm_password || passwordError}
                                        helperText={validationErrors.confirm_password || (passwordError ? 'Passwords does not match' : '')}
                                        inputRef={inputRefs.current.confirm_password}

                                    />
                            </Grid>

                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field ' sx={{mb:1}}>
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
                                        inputRef={inputRefs.current.company_uen}

                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} className='company_input_field  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mobile Number
                                <span style={{color:"#7C7C7C", fontWeight : "400", marginLeft:"4px"}}>(Optional)</span>
                                </Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        type='text'
                                        value={data.phone || ''}
                                        placeholder='Please Fill Your Company Mobile Number'
                                        onChange={(e)=> handleChange("phone", e.target.value.replace(/\D/, '').slice(0, 10))}


                                    />
                            </Grid>
                            <Grid item lg={6} xs={12} className='company_select_box  ' sx={{mb:1}}>
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
                                        inputRef={inputRefs.current.position}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.position}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box date_picker ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Year Founded</Typography>
                                    <FormControl sx={{ width:"100%",}} error={!!validationErrors.founded_year}>
                                    <LocalizationProvider   dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        inputRef={inputRefs.current.founded_year}
                                      sx={{ width:"100%",    }}
                                      views={['year']}
                                      label={''}
                                      openTo="year"
                                      slotProps={{
                                        textField: {
                                        size: "small",
                                        error: !!validationErrors.founded_year,
                                        placeholder:"Year Founded"
                                        },
                                    }}
                                      onChange={(value) => handleChange('founded_year', value.$y)}/>
                                    <FormHelperText>{validationErrors.founded_year}</FormHelperText>
                                   </LocalizationProvider>
                                    </FormControl>
                               </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Team Size, Number Of Employees</Typography>
                                    <FormControl sx={{width : "100%"}} error={!!validationErrors.team_size}>
                                    <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select Your Company Time Size'
                                        inputRef={inputRefs.current.team_size}
                                        onChange={(e) => handleChange('team_size', e.target.value)}
                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.team_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Revenue Size</Typography>
                                <FormControl  sx={{width : "100%"}} error={!!validationErrors.current_revenue}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        defaultValue={""}
                                        variant='outlined'
                                        label='Select Your Company Current Revenue Size'
                                        onChange={(e) => handleChange('current_revenue', e.target.value)}
                                        inputRef={inputRefs.current.current_revenue}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.current_revenue}</FormHelperText>
                                  </FormControl>


                            </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Customers Base Size</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.current_customers_base_size}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select Your Company Current Customers Base Size'
                                        onChange={(e) => handleChange('current_customers_base_size', e.target.value)}
                                        inputRef={inputRefs.current.current_customers_base_size}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.current_customers_base_size}</FormHelperText>
                                </FormControl>

                            </Grid>
                            <Grid item lg={12}  xs={12} className='company_select_box'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Industry sector your company is in Please choose the most suitable one</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.industry_sector}>
                                <Select
                                        size='small'
                                        className='industry_sector_select'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px', padding:'16px 32px 16px 32px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        placeholder='Select Industry Sector of Your Company'
                                        onChange={(e) => handleChange('industry_sector', e.target.value)}
                                        inputRef={inputRefs.current.industry_sector}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.industry_sector}</FormHelperText>
                                 </FormControl>


                            </Grid>
                            <Grid item xs={12} className='company_message_field' sx={{ mb:1 }}>
                                <Typography sx={{ mb:1 }} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Please describe what your company does in less than 100 words</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('description', e.target.value)}
                                        error={!!validationErrors.description}
                                        helperText={validationErrors.description}
                                        inputRef={inputRefs.current.description}

                                    />
                            </Grid>

                            <Grid item lg={6}  xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 1)</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.function_area_1}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label='Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_1', e.target.value)}
                                        inputRef={inputRefs.current.function_area_1}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.function_area_1}</FormHelperText>
                                  </FormControl>

                            </Grid>
                            <Grid item lg={6} xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 2)</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.function_area_2}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        defaultValue={""}
                                        variant='outlined'
                                        label='Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_2', e.target.value)}
                                        inputRef={inputRefs.current.function_area_2}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.function_area_2}</FormHelperText>
                                 </FormControl>

                            </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 3)</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.function_area_3}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label=' Select your company  Functional Area'
                                        onChange={(e) => handleChange('function_area_3', e.target.value)}
                                        inputRef={inputRefs.current.function_area_3}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.function_area_3}</FormHelperText>
                                 </FormControl>

                            </Grid>
                            <Grid item lg={6}  xs={12} className='company_select_box' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>How did you hear about us?</Typography>
                                <FormControl sx={{width : "100%"}} error={!!validationErrors.hear_about_us}>
                                <Select
                                        size='small'
                                        sx={{ '& legend': { display: 'none', border:'1px solid #7C7C7C', borderRadius:'6px' }, mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        defaultValue={""}
                                        label=' Select your company  Functional Area '
                                        onChange={(e) => handleChange('hear_about_us', e.target.value)}
                                        inputRef={inputRefs.current.hear_about_us}

                                    >
                                        <MenuItem value="ten">Ten</MenuItem>
                                        <MenuItem value="twenty">Twenty</MenuItem>
                                        <MenuItem value="thirty">Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>{validationErrors.hear_about_us}</FormHelperText>
                                 </FormControl>

                            </Grid>
                            <Grid item xs={12} className='company_message_field  ' sx={{mb:1}}>
                                <Typography sx={{ mb:1 }} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>What is the current problem (relating to the functional area of help that has been selected) that you need a mentor to help with? (maximum 50 words)</Typography>
                                    <TextField
                                        size='small'
                                        sx={{   width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('current_problem', e.target.value)}
                                        error={!!validationErrors.current_problem}
                                        helperText={validationErrors.current_problem}
                                        inputRef={inputRefs.current.current_problem}

                                    />
                            </Grid>
                            <Grid item xs={12} className='company_message_field'  sx={{mb:1}}>
                                <Typography fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Additional Information/Brand Websites</Typography>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>eg. Website,Instagram,Facebook, etc
                                <span style={{color:"#7C7C7C", fontWeight : "400", marginLeft:"4px"}}>(Optional)</span>
                                </Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mt:0, width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company current problems'
                                        onChange={(e) => handleChange('additional_information', e.target.value)}

                                    />
                            </Grid>
                            <Grid item xs={12} mt={3} mb={4} textAlign={"center"} className='submit_btn'>
                                <Button variant="contained" type='submit' disabled={processing} > Update</Button>
                            </Grid>
                        </Grid>
                    </form>
            </div>


        </Landing>
    );
}

export default CompanyDetail;
