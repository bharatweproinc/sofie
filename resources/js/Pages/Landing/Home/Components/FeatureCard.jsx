import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import moment from "moment";
import NoProfile from '../../../../Assets/Images/default-sme1630.jpg'
import NoFounder from '../../../../Assets/Images/default-profile.jpg'


export default function FeatureCard({ item, src }) {
const currentUrl = window.location.origin;

    return (
        <Card sx={{
            // bgcolor:'red',
            // my:{sm:0, xs:10},
            height:'100%',
            borderRadius:"12px",
            boxShadow:'0px 3px 11px 0px #8e8a8a5c'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    style={{
                        height : 345,
                        objectFit : 'contain'
                    }}
                    image={
                        item.profile_photo && item.profile_photo !== currentUrl + "/storage/company_profile"
                          ? item.profile_photo
                          : NoProfile
                      }
                    alt="featured_sme"

                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {/* {item.industry_sector.map(String).join(' , ')} */}
                        {item.industry_sector}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                            fontWeight: 'bold !important'
                        }} >
                        {item.company_name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary"
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                        }}
                    >
                        {item.additional_information}
                    </Typography>

                    <Box className="flex gap-2 items-center mt-3">
                        <img alt="founder" 
                        src={
                            item.founder_photo && item.founder_photo !== currentUrl + "/storage/company_founder"
                            ? item.founder_photo
                            : NoFounder
                        }style={{borderRadius : '50%', height : "45px", width : '45px', objectFit : 'cover'}}/>
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
            </CardActionArea>
        </Card>
    );
}
