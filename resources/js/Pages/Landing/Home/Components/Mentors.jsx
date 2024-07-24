import * as React from 'react';
import { Landing } from "@/Layouts/Landing";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Group from '@/Components/SVGIcons/Home/Group';
import Experience from '@/Components/SVGIcons/Home/Experience';
import { Box, Grid, Typography } from '@mui/material';
import NoDataFound from '@/Components/NoDataFound';
import Button from '@/Components/Singleton/Button';

function FindMentors ({list}) {

    const [isReadMore, setIsReadMore] = React.useState(null);
    const toggleReadMore = (key) => {
        setIsReadMore(key === isReadMore ? null : key)
    };

    return (
      <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
            {list.mentor.length > 0 ?
                <Grid container spacing={4} px={{ lg: 8, md: 4, xs: 2 }} pb={{ md: 10, xs: 5 }}>
                    {list.mentor.map((item, key) => (
                        <Grid item xs={12} key={key}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row'},
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
                                        height : {lg : 345},
                                        objectFit: 'cover',
                                        borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                                    }}
                                    image={item.profile_photo}
                                    alt="mentor img"
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
                                        {item.user.name}
                                    </Typography>

                                    <Typography pb={1} fontWeight={500} variant='body1' component="div">
                                    {item.industry_sector.map(String).join(', ')}
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

                                    <Typography pt={2} variant="body2" color="text.secondary">
                                        {item.qualifications}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {isReadMore === key ? item.additional_information : item.additional_information.slice(0, 600)}
                                        {
                                            item.additional_information.length > 600 &&
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
                : <NoDataFound message='No mentor Available' />
            }
      </Landing>
    )
}

export default FindMentors;
