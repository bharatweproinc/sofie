import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import facebook from "../../../Assets/Images/icon-facebook@2x.png"
import twitter from "../../../Assets/Images/icon-twitter@2x.png"
import linkedin from "../../../Assets/Images/icon-linkedin@2x.png"

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
                        Funding Resources
                        <br />
                        <Tooltip title="Funding Terminology" placement="right-start">
                            <Link style={linkStyle} href={route("landing.terminology")}>Funding Terminology</Link>
                        </Tooltip>
                        <br />
                        FAQs
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
                        Browse Companies
                        <br />
                        Find a Mentor
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
                        <img style={{height: '30px', width:'30px'}} src={facebook}></img>
                        <img style={{height: '30px', width:'30px'}} src={twitter}></img>
                        <img style={{height: '30px', width:'30px'}} src={linkedin}></img>
                    </Box>
                    </box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
