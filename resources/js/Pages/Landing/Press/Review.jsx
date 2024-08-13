import { Landing } from "@/Layouts/Landing";
import { Avatar, Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import './style.scss'
import "../style.scss";
import { Link } from "@inertiajs/react";

function ReviewPress ({detail}) {
    console.log('dee',detail);
    return(
       <Landing auth={detail.logged_user}>
            <Typography sx={{ height: '65px' }}></Typography>
            <Box p={4} className='review_page'>
                <Box py={4} sx={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Updated content review</Typography>
                    <Box className="custom_btn">
                    <Button component={Link} variant="contained" href={route('admin.press.detail', detail.id)}>
                        Edit
                    </Button>
                    </Box>
                </Box>
                <Box p={4} pr={0} sx={{border : '1px solid black', borderRadius : '10px'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Press Content Title</Typography>
                            <Typography fontSize="14px"> {detail.title}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Date of the post</Typography>
                            <Typography fontSize="14px"> {detail.date}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
       </Landing>
    )
}
export default ReviewPress;
