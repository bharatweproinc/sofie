import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Experience from '@/Components/SVGIcons/Home/Experience';
import Group from '@/Components/SVGIcons/Home/Group';

export default function ImageCard({item}) {
    return (
        <Card sx={{
            height:'100%',
            borderRadius:{xs:'15px', sm:0},
            border: {xs:'2px solid grey', sm:0},
            padding: {xs:'10px', sm:0},
            maxWidth: "100%",
            '&.MuiPaper-root':{
                boxShadow: 'none',
            }
        }}>
            <CardMedia
                component="img"
                sx={{borderRadius : '8px', height : '345px'}}
                image={item.profile_photo}
                alt="mentor_img"
            />
            <CardContent sx={{pl:0}}>
                <Typography gutterBottom variant="subtitle1" component="div" color={'#000'}>
                    {item.user.name}
                </Typography>

                <Typography gutterBottom variant="subtitle2" component="div" color={'#000'}>
                    {item.site}
                </Typography>

                <Box className="flex" gap={.5}>
                    <Experience/>
                    <Typography variant="caption" color="text.secondary">
                            {item.experience} Years Experience
                    </Typography>
                </Box>

                <Box className="flex" gap={1}>
                    <Group />
                    <Typography variant="caption" color="text.secondary">
                        {item.user.email}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
