import { Landing } from "@/Layouts/Landing";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import "./style.scss"
import { Link } from "@inertiajs/react";
import moment from "moment";

function ReviewProfilePage ({detail}){

    let initialDate = moment(detail.created_at);
    let enableDate = initialDate.clone().add(7, 'days');
    let currentDate = moment();
    
    return (
        <Landing auth={detail}>
            <Typography sx={{ height: '65px' }}></Typography>
            <Box p={4} className="review_mentor">
                <Box sx={{display : 'flex', justifyContent : 'space-between'}} px={4} my={2} className='edit_btn'>
                    <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Mentor Details</Typography>
                    <Button disabled={currentDate.isAfter(enableDate) ? false : true } component={Link} href={route('landing.mentordetail', detail.user.id)} variant="contained">{currentDate.isAfter(enableDate) ? 'Edit' : 'Disabled'} </Button>
                </Box>
                <Box p={4} pr={0} sx={{border : '1px solid black', borderRadius : '10px'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography mb={2} fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Profile Photo</Typography>
                            <Avatar
                                alt="Remy Sharp"
                                src={detail.link}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Contact Name</Typography>
                            <Typography fontSize="14px">{detail.user.name}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Mobile Number</Typography>
                            <Typography fontSize="14px">{detail.user.phone}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Email</Typography>
                            <Typography fontSize="14px">{detail.user.email}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Mentored Company</Typography>
                            <Typography fontSize="14px">{detail.mentored_company}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Qualifications</Typography>
                            <Typography fontSize="14px">{detail.qualifications}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Industry sectors</Typography>
                            {detail.industry_sector.map(item => (<Typography key={item} fontSize="14px">{item}</Typography>))}
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Functional</Typography>
                            {detail.functional_area.map(item => (<Typography key={item} fontSize="14px">{item}</Typography>))}
                        </Grid>
                        <Grid item px={8} xs={12} md={4} lg={3} sm={6}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Companies willing to mentor</Typography>
                            <Typography fontSize="14px">{detail.number_of_companies}</Typography>
                        </Grid>
                        <Grid item px={8} xs={12} md={12} lg={12} sm={12}>
                            <Typography fontWeight={600} fontSize="18px" textAlign="left" color={'#7C7C7C'}>Additional Information</Typography>
                            <Typography fontSize="14px">{detail.additional_information}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Landing>
    )
}

export default ReviewProfilePage;

