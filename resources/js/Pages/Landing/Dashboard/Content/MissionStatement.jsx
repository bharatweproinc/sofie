import { Landing } from "@/Layouts/Landing";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import '../style.scss'
import "../../style.scss"
import { useForm } from "@inertiajs/react";
import Constants from "../Constant";

function Banner ({list}){
    const { data, setData, post, processing } = useForm({...Constants.initMissionStatementForm, ...list.mission, ...list.user});
console.log(data)
    const handleChange = (key, value) => {
        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data', data);
        post(route('admin.saveSectionTwo'),{
            onSuccess:(success) => {
                notify.success('Mission Data has been updated successfully')
                console.log(success, "sucesss");
            },
            onError:(error) => {
                notify.error("Error in Mission Data, Try again");
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
                        <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mission Statement Title</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            value={data.mission_title}
                            onChange={(e) => handleChange("mission_title", e.target.value)}
                            type='text'
                            placeholder='Please Fill Mission Statement Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Mission Statement Description</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            value={data.mission_description}
                            onChange={(e) => handleChange("mission_description", e.target.value)}
                            type='text'
                            placeholder='Please Fill Mission Statement Description'
                            />
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
