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


const Edit = ({detail}) => {
    console.log('detail12121212121', detail)
    const { data, setData, post, processing} = useForm({...Constants.initTestimonial, ...detail.testimonial})
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (key, value) => {

        setValidationErrors({
            ...validationErrors,
            [key]: Joi.validateToPlainErrors(value,Constants.testmionialSchema[key])
        });

        setData((prev)=>({
        ...prev,
        [key]:value
        }));
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        let err = Joi.validateToPlainErrors(data, Constants.testmionialSchema)
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
                post(route('admin.testimonial.updateData', data.id),{
                onSuccess:(success) => {
                    console.log(success, "sucesss")
                    notify.success("Testimonial has been updated")
                },
                onError:(error) => {
                    console.log(error,"error")
                    notify.error("Error while updating testimonial");
                },
            })
            }
        }

    return (
        <Landing auth={detail.logged_user}>
             <Typography sx={{ height: '65px' }}></Typography>
                    <ToastContainer style={{ marginTop: "65px" }} />
                    <form onSubmit={handleSubmit}>
                    <Grid container px={8} py={4} sx={{padding : "24px"}} className="testimonial_page">
                        <Grid item p={3} xs={12}>
                            <Grid container p={4}  gap={5} alignItems={"center"} sx={{border:'2px solid #7C7C7C !important'}}>
                                      <ProfilePhotoUpload
                                            setData={setData}
                                            data={data}
                                        />
                                <Grid item xs={9} textAlign={"left"}>
                                    <Typography fontWeight={600} fontSize="18px">Upload Testimonial Photo</Typography>
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
                        <Grid px={3} xs={12} className='testimonial_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Testimonial Name</Typography>
                            <TextField
                                size='small'
                                sx={{  mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                placeholder='Please Fill your Name'
                                value={data?.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                error={!!validationErrors.name}
                                helperText={validationErrors.name}
                            />
                        </Grid>
                        <Grid px={3} pt={4} xs={12} className='testimonial_input_fields'>
                            <Typography fontWeight={600} fontSize="16px" textAlign="left" color={'#7C7C7C'}>Testimonial Description</Typography>
                            <TextField
                                size='small'
                                sx={{  mt: 1, width: '100%' }}
                                fullWidth
                                variant='outlined'
                                placeholder='Please Fill Description'
                                multiline
                                value={data?.description}
                                onChange={(e) => handleChange("description", e.target.value)}
                                error={!!validationErrors.description}
                                helperText={validationErrors.description}
                            />
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
