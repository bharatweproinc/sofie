import { Landing } from "@/Layouts/Landing";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import '../style.scss'
import "../../style.scss"
import { useForm } from "@inertiajs/react";
import Constants from "../Constant";
import MutiImages from "@/Components/MultiImages";

function Banner ({list}){
    const { data, setData, post, processing } = useForm({...Constants.initBannerForm, ...list.banner, ...list.user});

    useEffect(()=> {
        setData(data)
    }, [data]);
    
    const handleChange = (key, value) => {
        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data12121", data)
        post(route('admin.saveSectionOne'),{
            onSuccess:(success) => {
                notify.success('Banner Data has been updated successfully')
                console.log(success, "sucesss");
            },
            onError:(error) => {
                notify.error("Error in Banner Data, Try again");
                console.log(error,"error");
            },
        })
    }
    return(
        <Landing auth={data}>
            <Typography sx={{height:'65px'}}></Typography>
            <Box p={4}>
                <form onSubmit={handleSubmit}>
                <Grid container className="custom_input">
                    <Grid item xs={12}>
                        <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Banner Title</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            value={data.banner_title}
                            onChange={(e) => handleChange("banner_title", e.target.value)}
                            type='text'
                            placeholder='Please Fill Banner Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Banner Description</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            value={data.banner_description}
                            onChange={(e) => handleChange("banner_description", e.target.value)}
                            type='text'
                            placeholder='Please Fill Banner Description'
                            />
                    </Grid>
                    <Grid item>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Upload Photos</Typography>

                    <MutiImages data={data} setData={setData} />
                    </Grid>
                    <Grid item xs={12} mt={3} className="custom_btn" textAlign={'center'}>
                        <Button disabled={processing} type="submit" variant="contained">
                            Save
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </Box>
        </Landing>
    )
}

export default Banner;
