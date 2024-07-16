import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import feature1 from '../../../../Assets/Images/Organic-food.png'
import moment from "moment";
import User3 from '../../../../Assets/Images/Karen-Lee.png'

export default function FeatureCard({ item }) {
    console.log("item", item)
    return (
        <Card sx={{
            // bgcolor:'red',
            // my:{sm:0, xs:10},
            height:'100%',
            borderRadius:"12px",
            boxShadow:'0px 3px 11px 0px #8e8a8a5c'
        }}>
            <CardActionArea>
                <CardMedia component="img" height="140"
                    image={item.img || feature1}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {item.user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                            fontWeight: 'bold !important'
                        }} >
                        {item.company_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.additional_information}
                    </Typography>
                    <Box className="flex gap-2 items-center mt-3">
                        <img src={User3}/>
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
