import { Landing } from "@/Layouts/Landing";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import '../style.scss'
import "../../style.scss"
import { useForm } from "@inertiajs/react";
import Constants from "../Constant";

function Community ({community}){
    const { data, setData, post, processing } = useForm({...Constants.initCommunityForm, ...community});

    const handleChange = (key, value) => {
        setData((prev)=>({
            ...prev,
            [key]:value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data', data);
        post(route('admin.saveSectionThree'),{
            onSuccess:(success) => {
                notify.success('Community Data has been updated successfully')
                console.log(success, "sucesss");
            },
            onError:(error) => {
                notify.error("Error in Community Data, Try again");
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
                        <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Community Title</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            value={data.community_title}
                            onChange={(e) => handleChange("community_title", e.target.value)}
                            type='text'
                            placeholder='Please Fill Join Our Community Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Community Description</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            value={data.community_description}
                            onChange={(e) => handleChange("community_description", e.target.value)}
                            type='text'
                            placeholder='Please Fill Join Our Community Description'
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Become Mentor Title</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            value={data.become_mentor_title}
                            onChange={(e) => handleChange("become_mentor_title", e.target.value)}
                            type='text'
                            placeholder='Please Fill Become Mentor Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Become Mentor Description</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            value={data.become_mentor_description}
                            onChange={(e) => handleChange("become_mentor_description", e.target.value)}
                            type='text'
                            placeholder='Please Fill Become Mentor Description'
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Become Partner Title</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            variant='outlined'
                            value={data.become_partner_title}
                            onChange={(e) => handleChange("become_partner_title", e.target.value)}
                            type='text'
                            placeholder='Please Fill Become Partner Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography mb={1} fontWeight={600} fontSize={'16px'} color={'#7C7C7C'}>Become Partner Description</Typography>
                        <TextField
                            size='small'
                            sx={{ mb: 1, width: '100%' }}
                            fullWidth
                            multiline
                            rows={4}
                            variant='outlined'
                            value={data.become_partner_description}
                            onChange={(e) => handleChange("become_partner_description", e.target.value)}
                            type='text'
                            placeholder='Please Fill Become Partner Description'
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

export default Community;
