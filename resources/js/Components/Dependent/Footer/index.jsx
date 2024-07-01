import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import facebook from '../../../Assets/Images/icon-facebook@2x.png'
import twitter from '../../../Assets/Images/icon-twitter@2x.png'
import linkedin from '../../../Assets/Images/icon-linkedin@2x.png'
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
                <Grid mb={5} item xs={12} sm={3}>
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
                        <Link style={linkStyle} href={route("landing.terminology")}>Funding Terminology</Link>
                        <br />
                        FAQs
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
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
                        How Shophie’s Works
                        <br />
                        <Link style={linkStyle} href={route('landing.privacy')}>Privacy</Link>
                        <br />
                        <Link style={linkStyle} href={route('landing.contactus')}>Contact Us</Link>
                        <br />
                        Press
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
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
                        <Link style={linkStyle} href={route('landing.login')}>Sign up</Link>
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography
                        textAlign={{xs:'center', sm:'left'}}
                        sx={{ fontWeight: "bold !important" }}
                        color="black"
                        variant="h6"
                    >
                        Connect
                    </Typography>
                    <Box className="flex gap-2 justify-center sm:justify-start" mt={1}>
                        <img src={facebook}></img>
                        <img src={twitter}></img>
                        <img src={linkedin}></img>
                    </Box>
                </Grid>
            </Grid>
            {/* <hr sx={{}}></hr> */}
        </Box>
    );
};

export default Footer;
