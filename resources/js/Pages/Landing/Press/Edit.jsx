import ProfilePhotoUpload from "@/Components/FileUpload";
import { Landing } from "@/Layouts/Landing";
import { useForm } from "@inertiajs/react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './style.scss'
import "../style.scss";
import Constants from "../Constants";
import Joi from "@/utility/JoiValidator";
import { notify } from "@/Components/Notifier";
import { ToastContainer } from 'react-toastify';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";


const Edit = ({detail}) => {
    const { data, setData, post, processing} = useForm({...Constants.initPress, ...detail.press})
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (key, value) => {

        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value,Constants.pressSchema[key])
        });

        setData((prev)=>({
        ...prev,
        [key]:value
        }));
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        let err = Joi.validateToPlainErrors(data, Constants.pressSchema)
        setValidationErrors(err);

        const isError = Object.keys(err)?.map((val,i)=>{
            if(err[val]== null){
                 return false
               }
              else{
               return i
              }
             })

        if (isError?.length > 0) {
          return;
        } else {
                post(route('admin.press.updateData', data.id),{
                onSuccess:(success) => {
                    console.log(success, "sucesss")
                    notify.success("Content has been updated")
                },
                onError:(error) => {
                    console.log(error,"error")
                    notify.error("Error while updating");
                },
            })
            }
        }

    return (
        <Landing auth={detail.logged_user}>
             <Typography sx={{ height: '65px' }}></Typography>
                    <ToastContainer style={{ marginTop: "65px" }} />
                    <form onSubmit={handleSubmit}>
                    <Grid container px={8} py={4} sx={{padding : "24px"}} className="press_page">
                    <Grid item p={3} xs={12}>
                    <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Image Upload / Reupload</Typography>

                            <Grid container p={5}  gap={4} alignItems={"center"} sx={{border:'2px solid #7C7C7C !important'}}>
                                      <ProfilePhotoUpload
                                            setData={setData}
                                            data={data}
                                            photoKey={'profile_photo'}
                                        />
                                          <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Press Contents Photo</Typography>
                                    <Typography fontWeight={400} color={'#7C7C7C'} fontSize="16px" py={1} pt={2}>Please upload your image that meets the following criteria:</Typography>
                                    <Typography py={1} color={'#7C7C7C'}>
                                        1. Image Format: Use common image formats such as JPEG, PNG, or SVG.
                                    </Typography>
                                    <Typography py={1} color={'#7C7C7C'}>
                                        2. High Resolution: Ensure the image is high resolution so that the logo appears clear and professional.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid px={3} xs={12} className='press_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Press Content Title</Typography>
                            <TextField
                                size='small'
                                sx={{  mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                placeholder='Please fill the title'
                                value={data?.title}
                                onChange={(e) => handleChange("title", e.target.value)}
                                error={!!validationErrors.title}
                                helperText={validationErrors.title}
                            />
                        </Grid>
                         <Grid mt={2} px={3} xs={12} className='press_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>
                               Press Content Description <span style={{color:"#7C7C7C", fontWeight : '400'}}>(Optional)</span>
                            </Typography>
                            <TextField
                                size='small'
                                sx={{  mt:1, width: '100%' }}
                                fullWidth
                                multiline
                                rows={4}
                                value={data.description}
                                variant='outlined'
                                placeholder='Please fill the description'
                                onChange={(e) => handleChange("description", e.target.value)}
                            />
                        </Grid>
                        <Grid px={3} pt={4} xs={12} className='press_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Date of the post</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ width:"100%" }}   value={data?.date ? dayjs(data.date) : null} label="" onChange={(e)=>handleChange("date", e.$d)}/>
                                </DemoContainer>
                                </LocalizationProvider>
                        </Grid>
                        <Grid xs={12} m={4} textAlign={"center"} className='custom_btn'>
                            <Button type='submit' variant="contained" disabled={processing}>Save</Button>
                         </Grid>
                    </Grid>
                    </form>
        </Landing>
    )
}
export default Edit;
