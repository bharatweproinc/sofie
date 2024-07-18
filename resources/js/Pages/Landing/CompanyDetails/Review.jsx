import { Landing } from "@/Layouts/Landing";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import { Link } from "@inertiajs/react";
import "./style.scss";
import Tooltip from '@mui/material/Tooltip';
import DeleteAlert from "@/Components/Dependent/DeleteAlert/index";

const Reviewdata = ({detail}) => {
    const [open, setOpen] = React.useState(false);
    let initialDate = moment(detail?.updated_at ? detail.updated_at : detail.created_at);
    let enableDate = initialDate.clone().add(7, 'days');
    let currentDate = moment();
    return (
        <Landing auth={detail?.logged_user}>
            <Box className="company_detail_review">
                <Typography sx={{ height: "65px" }}></Typography>
                <Grid item xs={12} px={5} pt={4} pb={0} sx={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography
                        pl={4}
                        fontWeight={700}
                        fontSize={"28px"}
                        color={"#223049"}
                    >
                        Company Details
                    </Typography>
                    <Box display={'flex'} alignItems={'center'}>
                    <Box pr={3} className='edit_btn'>
                    <Tooltip placement="top" title="Edit will be enable after 7 days" disableInteractive disableHoverListener={detail?.logged_user.user_role == "admin" || currentDate.isAfter(enableDate) ? true : false} >
                     <div>
                    <Button
                            disabled={detail?.logged_user.user_role == "admin" || currentDate.isAfter(enableDate) ? false : true }
                            component={Link}
                            href={route('landing.companydetail', detail.user.id)}
                            type="submit"
                            variant="contained"
                            >
                            {detail?.logged_user.user_role == "admin" || currentDate.isAfter(enableDate) ? 'Edit' : 'Disabled'}
                        </Button>
                      </div>
                  </Tooltip>

                    </Box>
                    {detail?.logged_user?.user_role === "admin" &&
                    <Box>
                        <Button onClick={()=>setOpen(true)} variant="contained" color="error" sx={{ textTransform:"capitalize", padding:'8px 20px' }}>
                            Delete Account
                        </Button>
                    </Box>}

                    </Box>

                </Grid>
                <Box
                    sx={{ py: 3, pl: 2 }}
                    className="company_detail_review_title"
                >
                    <Grid container sx={{ pl: 3 }}>
                        <Grid item xs={12} mt={2}>
                            <Typography
                                variant="h6"
                                pb={2}
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Profile Photo
                            </Typography>
                            <Avatar
                                alt="Remy Sharp"
                                src={detail.link}
                                sx={{ width: "100px", height: "100px"}}
                            />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ padding: "24px" }}>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Email
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                User Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company UEN
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_uen}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Contact Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.contact_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Mobile Number
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Position In Company
                            </Typography>
                                {detail.position.map((item) => ( <Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Year Founded
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.founded_year}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Team Size, Number Of Employees
                            </Typography>
                                {detail.team_size.map((item) => (<Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Revenue Size
                            </Typography>
                                {detail.current_revenue.map((item) => (<Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Customers Base Size
                            </Typography>
                                {detail.current_customers_base_size.map((item) => (<Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Industry sector
                            </Typography>
                                {detail.industry_sector.map((item)=> (<Typography key={item} fontSize={"14px"}>{item}</Typography>))}
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 1
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 2
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_2}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 3
                            </Typography>
                            <Typography fontSize={"14px"}>
                            {detail.functional_area_3}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Current problem
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.current_problem}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} my={2} pr={15}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Additional Information
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.additional_information}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <DeleteAlert open={open} setOpen={setOpen}/>
        </Landing>
    );
};

export default Reviewdata;
