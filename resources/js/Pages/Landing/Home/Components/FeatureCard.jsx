import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function FeatureCard({ item }) {
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
                    image={item.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {item.tittle}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                            fontWeight: 'bold !important'
                        }} >
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.text}
                    </Typography>
                    <Box className="flex gap-2 items-center mt-3">
                        <img src={item.user.img}/>
                        <Box className="block">
                            <Typography sx={{ fontWeight: 'bold !important'}}>
                                {item.user.name}
                            </Typography>
                            <Typography color="text.secondary">
                                {item.user.date}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
