import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react'
import { Autocomplete, Button, Checkbox, FormControl, FormHelperText, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { Landing } from '@/Layouts/Landing';
import './style.scss'
import Constants from '../Constants';
import { useState } from 'react';
import ProfilePhotoUpload from '@/Components/FileUpload';
import profileImage from '../../../Assets/Images/profileImage.png'
import { scrollToInput } from '@/utility/ScrollToInput';
import { useRef } from 'react';
import Popup from '@/Components/Popup/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Joi from '@/utility/JoiValidator';
import { notify } from '@/Components/Notifier';
import "../style.scss";

const addButton = Constants.addButton;
const multiSelectData = {
    current_revnue:Constants.currentRevenueSizeOptions ,
    position_in_company : Constants.positionInCompanyOptions,
    current_customers_base_size:Constants.currentCustomersBaseSize,
    hear_about_us: Constants.hearAboutUsOptions,
    functional_area_1:Constants.functionalAreaOptions,
    functional_area_2:Constants.functionalAreaOptions,
    functional_area_3:Constants.functionalAreaOptions,
    industry_sector:Constants.industrySMESectorOptions,
    team_size: Constants.teamSizeOptions
}

function CompanyDetail({detail}) {
    console.log('detail787887', detail)
    const inputRefs = useRef(Constants.companyInputRefs());
    const { data, setData, post, processing} = useForm({...Constants.initCompanyDetailForm, ...detail.user, ...detail.company});
    const [validationErrors, setValidationErrors] = useState({});
    const [open, setOpen] = React.useState(false);
    const [addMoreId, setAddMoreId] = useState("");
    const [selectData, setSelectData] = useState(multiSelectData);
    const years = Array.from({ length: 2024 - 1990 + 1 }, (_, index) => 1990 + index);
    const [selectPopup, setSelectPopup] = useState({
        title:"",
        desc:""
    });

    const handleClickOpen = (id,title) => {
        setOpen(true);
        setAddMoreId(id);
        setSelectPopup(()=>({
            title:title
        }))
    };

    const handleChange = (key, value,type) => {

        if(type && type ==="select"){
        if(value?.includes(undefined)){
            return;
        }
        }
        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value,Constants.companySchema[key])
        });

        setData((prev)=>({
        ...prev,
        [key]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let err = Joi.validateToPlainErrors(data, Constants.companySchema)
        setValidationErrors(err);

        if (data.confirm_password !== data.password) {
          validationErrors.confirm_password = 'Passwords does not match';

        }
        const isError = Object.keys(err)?.map((val,i)=>{
            if(err[val]== null){
                 return 0
               }
              else{
               return i
              }
             })

        if (isError?.length > 0) {
            for (const field in inputRefs.current) {
                if (inputRefs.current[field] && inputRefs.current[field].current && err[field]) {
                    scrollToInput(inputRefs.current[field]);
                    break;
                }
            }
          setValidationErrors(err);
          return;
        } else {
            console.log('data121212',data)

        post(route('company.saveData', detail?.user.id),{
            onSuccess:(success) => {
                notify.success('Company Data successfully sent for deletion')
                console.log(success, "sucesss");
            },
            onError:(error) => {
                notify.error("Error in Company Data");
                console.log(error,"error");
            },
        })
    }
    }

    return (
        <Landing auth={detail.logged_user !== null ? detail.logged_user : detail.user}>
            <Popup
                title={selectPopup.title}
                dsec={selectPopup.desc}
                setOpen={setOpen}
                open={open}
                addMoreId={addMoreId}
                setSelectData={setSelectData}
                selectData={selectData}
            />
            <ToastContainer style={{ marginTop:"53px" }}/>

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
                                            setData={setData}
                                            data={data}
                                            photoKey={"profile_photo"}
                                        />
                                <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Logo Photo</Typography>
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
                        <Grid item xs={12}>
                            <Grid container  gap={5} alignItems={"center"} className='upload_image_section' sx={{border:'2px solid #7C7C7C !important'}}>
                                      <ProfilePhotoUpload
                                            setData={setData}
                                            data={data}
                                            photoKey={"founder_photo"}
                                        />
                                <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Founder Photo</Typography>
                                    <Typography fontWeight={400} color={'#7C7C7C'} fontSize="16px" py={1} pt={2}>Please upload your company's founder photo that meets the following criteria:</Typography>
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
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>User Name</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        variant='outlined'
                                        value={data.name}
                                        placeholder='Please Fill Your User Name'
                                        onChange={(e)=> handleChange("name", e.target.value)}
                                        error={!!validationErrors.name}
                                        helperText={validationErrors.name}
                                        inputRef={inputRefs.current.name}
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
                                        value={data.phone}
                                        placeholder='Please Fill Your Company Mobile Number'
                                        onChange={(e)=> handleChange("phone", e.target.value.replace(/\D/, '').slice(0, 10))}
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Email</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        value={data.email}
                                        type='email'
                                        variant='outlined'
                                        placeholder='Please Fill Your Email'
                                        onChange={(e)=> handleChange("email", e.target.value)}
                                        error={!!validationErrors.email}
                                        helperText={validationErrors.email}
                                        inputRef={inputRefs.current.email}
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field'>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company Name</Typography>
                                    <TextField
                                        inputRef={inputRefs.current.company_name}
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        value={data.company_name}
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
                                        value={data.contact_name}
                                        variant='outlined'
                                        placeholder='Please Fill Your Contact Name'
                                        onChange={(e)=> handleChange("contact_name", e.target.value)}
                                        error={!!validationErrors.contact_name}
                                        helperText={validationErrors.contact_name}
                                        inputRef={inputRefs.current.contact_name}
                                    />
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} className='company_input_field ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Company UEN</Typography>
                                    <TextField
                                        size='small'
                                        sx={{ mb: 1, width: '100%' }}
                                        fullWidth
                                        value={data.company_uen}
                                        variant='outlined'
                                        placeholder='Please Fill Your Company UEN'
                                        onChange={(e)=> handleChange("company_uen", e.target.value)}
                                        error={!!validationErrors.company_uen}
                                        helperText={validationErrors.company_uen}
                                        inputRef={inputRefs.current.company_uen}
                                    />
                            </Grid>
                            <Grid item lg={6} xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>
                                     Position In Company
                                </Typography>
                                <FormControl sx={{ width : '100%'}} error={!!validationErrors.position}>
                                        <Select
                                            labelId="position-label"
                                            multiple
                                            fullWidth
                                            variant="outlined"
                                            value={data.position}
                                            onChange={(e) => handleChange('position', e.target.value, 'select')}
                                            input={<OutlinedInput  />}
                                            error={!!validationErrors.position}
                                            inputRef={inputRefs.current.position}
                                            renderValue={(selected) => selected.join(', ')}
                                        >
                                            {selectData.position_in_company.map((val) => (
                                                <MenuItem key={val} value={val}>
                                                    <Checkbox checked={data.position.includes(val)} />
                                                    <ListItemText primary={val} />
                                                </MenuItem>
                                            ))}
                                            <Button onClick={()=>handleClickOpen("position_in_company", "Position in company")}>
                                                {addButton()}
                                            </Button>
                                        </Select>
                                    <FormHelperText>{validationErrors.position}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12} className='founded_year' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Year Founded</Typography>
                                    <Autocomplete
                                        options={years}
                                        value={data.founded_year || ''}
                                        getOptionLabel={(option) => option.toString()}
                                        onChange={(event, value) => handleChange('founded_year', value)}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                inputRef={inputRefs.current.founded_year}
                                                error={!!validationErrors.founded_year}
                                                helperText={validationErrors.founded_year}
                                            />}
                                        />
                               </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Team Size, Number Of Employees</Typography>
                                    {/* <FormControl sx={{ width : '100%' }} error={!!validationErrors.team_size}>
                                            <Select
                                                labelId="teamSize-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.team_size}
                                                onChange={(e) => handleChange('team_size', e.target.value, 'select')}
                                                input={<OutlinedInput />}
                                                error={!!validationErrors.team_size}
                                                inputRef={inputRefs.current.team_size}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.team_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.team_size.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("team_size", "Team Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.team_size}</FormHelperText>
                                    </FormControl> */}
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.team_size}>
                                            <Select
                                                labelId="teamSize-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.team_size  }
                                                onChange={(e) => handleChange('team_size', e.target.value)}
                                                error={!!validationErrors.team_size}
                                                inputRef={inputRefs.current.team_size}
                                            >
                                                {selectData.team_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.team_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Revenue Size</Typography>
                                    {/* <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_revenue}>
                                            <Select
                                                labelId="revenue-label"
                                                // multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_revenue}
                                                onChange={(e) => handleChange('current_revenue', e.target.value, 'select')}
                                                input={<OutlinedInput  />}
                                                error={!!validationErrors.current_revenue}
                                                inputRef={inputRefs.current.current_revenue}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.current_revnue.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.current_revenue.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("current_revnue", "Revenue Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.current_revenue}</FormHelperText>
                                    </FormControl> */}
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_revenue}>
                                            <Select
                                                labelId="revenue-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_revenue  }
                                                onChange={(e) => handleChange('current_revenue', e.target.value)}
                                                error={!!validationErrors.current_revenue}
                                                inputRef={inputRefs.current.current_revenue}
                                            >
                                                {selectData.current_revnue.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.current_revenue}</FormHelperText>
                                    </FormControl>

                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Current Customers Base Size</Typography>
                                    {/* <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_customers_base_size}>
                                            <Select
                                                labelId="customerBase-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_customers_base_size}
                                                onChange={(e) => handleChange('current_customers_base_size', e.target.value,'select')}
                                                input={<OutlinedInput  />}
                                                error={!!validationErrors.current_customers_base_size}
                                                inputRef={inputRefs.current.current_customers_base_size}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.current_customers_base_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.current_customers_base_size.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("current_customers_base_size", "Customers Base Size")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.current_customers_base_size}</FormHelperText>
                                    </FormControl> */}
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.current_customers_base_size}>
                                            <Select
                                                labelId="customerBase-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.current_customers_base_size  }
                                                onChange={(e) => handleChange('current_customers_base_size', e.target.value)}
                                                error={!!validationErrors.current_customers_base_size}
                                                inputRef={inputRefs.current.current_customers_base_size}
                                            >
                                                {selectData.current_customers_base_size.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.current_customers_base_size}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={12}  xs={12} >
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Industry sector your company is in Please choose the most suitable one</Typography>
                                    {/* <FormControl sx={{ width : '100%' }} error={!!validationErrors.industry_sector}>
                                            <Select
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.industry_sector }
                                                onChange={(e) => handleChange('industry_sector', e.target.value,'select')}
                                                input={<OutlinedInput  />}
                                                error={!!validationErrors.industry_sector}
                                                inputRef={inputRefs.current.industry_sector}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.industry_sector.map((val) => (
                                                    <MenuItem key={val.value} value={val.value}>
                                                        <Checkbox checked={data.industry_sector.includes(val.value)} />
                                                        <ListItemText primary={val.description} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("industry_sector", "Industry Sector")}>
                                                    {addButton()}
                                                </Button>
                                            </Select>
                                        <FormHelperText>{validationErrors.industry_sector}</FormHelperText>
                                    </FormControl> */}

                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.industry_sector}>
                                            <Select
                                                // labelId="industrySector-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.industry_sector  }
                                                onChange={(e) => handleChange('industry_sector', e.target.value)}
                                                error={!!validationErrors.industry_sector}
                                                inputRef={inputRefs.current.industry_sector}
                                            >
                                                {selectData.industry_sector.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
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
                                        value={data.company_description}
                                        variant='outlined'
                                        placeholder='Please describe your company'
                                        onChange={(e) => handleChange('company_description', e.target.value)}
                                        error={!!validationErrors.company_description}
                                        helperText={validationErrors.company_description}
                                        inputRef={inputRefs.current.company_description}
                                    />
                            </Grid>

                            <Grid item lg={6}  xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 1)</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_1}>
                                            <Select
                                                labelId="functionalArea1-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_1  }
                                                onChange={(e) => handleChange('functional_area_1', e.target.value)}
                                                error={!!validationErrors.functional_area_1}
                                                inputRef={inputRefs.current.functional_area_1}
                                            >
                                                {selectData.functional_area_1.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_1}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6} xs={12} className='company_select_box  ' sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 2)</Typography>
                                 <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_2}>
                                            <Select
                                                labelId="functionalArea1-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_2}
                                                onChange={(e) => handleChange('functional_area_2', e.target.value)}
                                                error={!!validationErrors.functional_area_2}
                                                inputRef={inputRefs.current.functional_area_2}
                                            >
                                                {selectData.functional_area_2.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_2}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Functional Area of Help Needed (Area 3)</Typography>
                                    <FormControl sx={{ width : '100%' }} error={!!validationErrors.functional_area_3}>
                                            <Select
                                                labelId="functionalArea3-label"
                                                fullWidth
                                                variant="outlined"
                                                value={data.functional_area_3}
                                                onChange={(e) => handleChange('functional_area_3', e.target.value)}
                                                error={!!validationErrors.functional_area_3}
                                                inputRef={inputRefs.current.functional_area_3}
                                            >
                                                {selectData.functional_area_3.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        {val}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        <FormHelperText>{validationErrors.functional_area_3}</FormHelperText>
                                    </FormControl>
                            </Grid>
                            <Grid item lg={6}  xs={12}  sx={{mb:1}}>
                                <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>How did you hear about us?</Typography>
                                  <FormControl sx={{width : "100%"}} error={!!validationErrors.hear_about_us}>
                                            <Select
                                                labelId="hearAbout-label"
                                                multiple
                                                fullWidth
                                                variant="outlined"
                                                value={data.hear_about_us  }
                                                onChange={(e) => handleChange('hear_about_us', e.target.value,'select')}
                                                input={<OutlinedInput  />}
                                                error={!!validationErrors.hear_about_us}
                                                inputRef={inputRefs.current.hear_about_us}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {selectData.hear_about_us.map((val) => (
                                                    <MenuItem key={val} value={val}>
                                                        <Checkbox checked={data.hear_about_us.includes(val)} />
                                                        <ListItemText primary={val} />
                                                    </MenuItem>
                                                ))}
                                                <Button onClick={()=>handleClickOpen("hear_about_us", "Hear About Us")}>
                                                    {addButton()}
                                                </Button>
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
                                        value={data.current_problem}
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
                                        value={data.additional_information}
                                        sx={{ mt:0, width: '100%' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                        placeholder='Please fill your company additional information'
                                        onChange={(e) => handleChange('additional_information', e.target.value)}
                                    />
                            </Grid>
                            <Grid item xs={12} mt={3} mb={4} textAlign={"center"} className='custom_btn'>
                                <Button variant="contained" disabled={processing} type='submit'> {data.functional_id === null ? "Submit" : "Update"}</Button>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        </Landing>
    );
}

export default CompanyDetail;
