import * as React from 'react';
import { Landing } from "@/Layouts/Landing";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Group from '@/Components/SVGIcons/Home/Group';
import Experience from '@/Components/SVGIcons/Home/Experience';
import { Box, Grid } from '@mui/material';
import moment from "moment";
import NoProfile from '../../../../Assets/Images/default-sme1630.jpg'
import NoFounder from '../../../../Assets/Images/default-profile.jpg'

import NoDataFound from '@/Components/NoDataFound';

function BrowseCompanies ({list}) {
    const [isReadMore, setIsReadMore] = React.useState(null);
    const toggleReadMore = (key) => {
        setIsReadMore(key === isReadMore ? null : key)
    };
    const currentUrl = window.location.origin;

    return (
        <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
            { list.company.length > 0 ?
                <Grid container spacing={4} px={{ lg: 8, md: 4, xs: 2 }} pb={{ md: 10, xs: 5 }}>
					{list && list.company.map((item, key) => (
						<Grid key={key} item xs={12}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    width: '100%',
                                    minHeight : { md : '345px'},
                                    marginBottom: '20px',
                                    borderRadius: '16px',
                                }}
                                > 
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: { xs: '100%', md: 345 },
                                        height : 345,
                                        objectFit: 'contain',
                                        borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                                    }}
                                   
                                    image={
                                        item.profile_photo && item.profile_photo !== currentUrl + "/storage/company_profile"
                                          ? item.profile_photo
                                          : NoProfile
                                      }
                                    alt="sme_img"
                                />
                               
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        flex: 1,
                                        padding: '20px',
                                        backgroundColor: '#f0f0f0',
                                        borderRadius: { xs: '0 0 16px 16px', md: '0 16px 16px 0' },
                                    }}
                                >

                                    <Typography fontWeight={600} gutterBottom variant="h5" component="div">
                                        {item.company_name}
                                    </Typography>

                                    <Typography pb={1.5} variant='body1' component="div">
                                        {/* {item.industry_sector.map(String).join(' , ')} */}
                                        {item.industry_sector}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {isReadMore === key ? item.company_description : item.company_description.slice(0, 600)}
                                        { item.company_description.length > 600 &&
                                            <span
                                                onClick={() => toggleReadMore(key)}
                                                style={{ color: "#232424", cursor : 'pointer'}}
                                            >
                                                {isReadMore === key  ? " show less" : "... read more"}
                                            </span>
                                        }
                                      
                                    </Typography>
                                    <Box mt={4} className="flex gap-2 items-center">
                                        <img alt="founder" src={
                                            item.founder_photo && item.founder_photo !== currentUrl + "/storage/company_founder"
                                            ? item.founder_photo
                                            : NoFounder
                                        } style={{borderRadius : '50%', height : "50px", width : '50px', objectFit : 'cover'}}/>

                                        <Box className="block">
                                            <Typography sx={{ fontWeight: 'bold !important'}}>
                                                {item.user.name}
                                            </Typography>
                                            <Typography color="text.secondary">
                                                {moment(item.user.created_at).format('LL')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
						</Grid>
					))}
				</Grid>
                : <NoDataFound message='No Company Available'/>
            }
        </Landing>
    )
}

export default BrowseCompanies;
