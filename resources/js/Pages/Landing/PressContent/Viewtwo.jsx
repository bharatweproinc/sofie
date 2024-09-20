import * as React from "react";
import { Landing } from '@/Layouts/Landing';
import { Box, Grid, Pagination, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from 'styled-components';
import NoDataFound from "@/Components/NoDataFound";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NoProfile from '../../../Assets/Images/pressrel.jpg'

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important'
});
const Headers = [
    "Title", "Date Posted"
]
function Press({list})  {

    const [isReadMore, setIsReadMore] = React.useState(null);
    const toggleReadMore = (key) => {
        setIsReadMore(key === isReadMore ? null : key)
    };
    const currentUrl = window.location.origin;
    return (
      <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
            {list.length > 0 ?
                <Grid container spacing={4} px={{ lg: 8, md: 4, xs: 2 }} pb={{ md: 10, xs: 5 }}>
                    {list.map((item, key) => (
                        <Grid item xs={12} key={key}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row'},
                                    width: '100%',
                                    minHeight : { md : '305px'},
                                    marginBottom: '20px',
                                    borderRadius: '16px',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: { xs: '100%', md: 300 },
                                        height : {lg : 300},
                                        objectFit: 'cover',
                                        borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                                    }}
                                    image={ item.profile_photo 
                                    && item.profile_photo !== currentUrl + "/storage/testimonial"
                                        ? item.profile_photo
                                        : NoProfile}
                                    alt="_img"
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
                                <Typography fontWeight={600} gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography pb={1} variant='body2' component="div">
                                   <em> Date and Time of Release: {item.date}</em>
                                    </Typography>

            <Typography variant="body1" color="text.secondary">
            {item?.description && isReadMore === key ? item?.description : item?.description?.slice(0, 600)}
                {
                    item.description?.length > 600 &&
                    <span
                        onClick={() => toggleReadMore(key)}
                        style={{ color: "#232424", cursor : 'pointer'}}
                    >
                        {isReadMore === key ? " show less" : "... read more"}
                    </span>
                }
            </Typography>
            </CardContent>
        </Card>
    </Grid>
            ))}
        </Grid>
        : <NoDataFound message='No content Available' />
    }
      </Landing>
    )
}

export default Press;
