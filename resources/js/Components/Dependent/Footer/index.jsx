import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import facebook from "../../../Assets/Images/icon-facebook@2x.png"
import instagram from "../../../Assets/Images/instagram.png"

import { Link } from "@inertiajs/react";

const linkStyle = {
    color: "#4E596D",
    fontSize: "14px",
    lineHeight: "2",
};

export const Footer = () => {
    return (
        <Box sx={{backgroundColor:'#E8EAEC'}} p={5}>
            <Grid container spacing={2}
            sx={{
                borderBottom:' 1px solid #BEBEC0',
                paddingBottom: { sm:'20px', xs:'20px'}
                }}>
                <Grid className="flex justify-center" mb={5} item xs={12} sm={3}>
                    <box className="w-fit">
                    <Typography
                        textAlign={{xs:'center', sm:'left'}} sx={{
                        fontWeight: "bold !important",
                        fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Resources
                    </Typography>
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        mt={1}
                        sx={linkStyle}
                    >
                        Terms & Conditions
                        <br />
                        <Tooltip title="Funding Terminology" placement="right-start">
                            <Link style={linkStyle} href={route("landing.terminology")}>Funding Terminology</Link>
                        </Tooltip>
                        <br />
                        <Link style={linkStyle} href={route('landing.faq')}>FAQs</Link>
                        <br />
                    </Typography>
                    </box>
                </Grid>
                <Grid className="flex justify-center" item xs={12} sm={3}>
                    <box className="w-fit">
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        sx={{
                            fontWeight: "bold !important",
                            fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Learn More
                    </Typography>
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        mt={1}
                        sx={linkStyle}
                    >
                        <Tooltip title="Privacy" placement="right-start">
                            <Link style={linkStyle} href={route('landing.privacy')}>Privacy</Link>
                        </Tooltip>
                        <br />
                        <Tooltip title="Contact Us" placement="right-start">
                            <Link style={linkStyle} href={route('landing.contactus')}>Contact Us</Link>
                        </Tooltip>
                        <br />
                        Press
                        <br />
                    </Typography>
                    </box>
                </Grid>
                <Grid className="flex justify-center" item xs={12} sm={3}>
                    <box className="w-fit">
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        sx={{
                            fontWeight: "bold !important",
                            fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Company
                    </Typography>
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        mt={1}
                        sx={linkStyle}
                        color="black"
                    >
                    <Tooltip title="Browse Companies" placement="right-start">
                        <Link style={linkStyle} href={route('landing.findcompanies')}>Browse Companies</Link>
                        </Tooltip>

                        <br />
                        <Tooltip title="Find a Mentor" placement="right-start">
                        <Link style={linkStyle} href={route('landing.findmentors')}>Find a Mentor</Link>
                        </Tooltip>
                        <br />
                        <Tooltip title="Sign up" placement="right-start">
                        <Link style={linkStyle} href={route('landing.signup')}>Sign up</Link>
                        </Tooltip>
                        <br />
                    </Typography>
                    </box>
                </Grid>
                <Grid className="flex justify-center" item xs={12} sm={3}>
                    <box className="w-fit">
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        sx={{ fontWeight: "bold !important" }}
                        color="black"
                        variant="h6"
                    >
                        Connect
                    </Typography>
                    <Box className="flex gap-2 justify-center sm:justify-start align-baseline" mt={1}>
                        <a target="_blank" href="https://www.facebook.com/people/upcie-Singapore/61562568227695/">
                            <img style={{height: '30px', width:'30px'}} src={facebook}></img>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/upcie_sg/">
                            <img style={{height: '30px', width:'30px'}} src={instagram}></img>
                        </a>
                    </Box>
                    </box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
