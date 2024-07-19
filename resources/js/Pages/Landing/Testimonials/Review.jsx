import Button from "@/Components/Singleton/Button";
import { Landing } from "@/Layouts/Landing";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import React from "react"; 
import './style.scss'

function reviewTestimonial () {
    return(
       <Landing>
            <Typography sx={{ height: '65px' }}></Typography>
            <Box p={4} className='review_page'>
                <Box py={4} sx={{display : 'flex', justifyContent : 'space-between'}} className="edit_btn">
                    <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}> Testimonial Details</Typography>
                    <Button variant="contained"> Edit</Button>
                </Box>
                <Box p={4} pr={0} sx={{border : '1px solid black', borderRadius : '10px'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography mb={2} fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Testimonial Photo</Typography>
                            <Avatar
                                alt="Remy Sharp"
                                // src={detail.link}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Testimonial Name</Typography>
                            <Typography fontSize="14px"> name</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Testimonial Name</Typography>
                            <Typography fontSize="14px"> description testimonial</Typography>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
       </Landing>
    )
}
export default reviewTestimonial;