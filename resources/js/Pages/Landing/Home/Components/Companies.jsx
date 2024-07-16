import * as React from 'react';
import { Landing } from "@/Layouts/Landing";
import Constants from "../Constants";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Group from '@/Components/SVGIcons/Home/Group';
import Experience from '@/Components/SVGIcons/Home/Experience';
import { Box, Grid } from '@mui/material';
import feature1 from '../../../../Assets/Images/Organic-food.png'

function BrowseCompanies ({list}) {
    return (
        <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
                <Grid container spacing={4} px={{ lg: 8, md: 4, xs: 2 }} pb={{ md: 10, xs: 5 }}>
					{list.company.map((item, key) => (
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
                                        height: { xs: 300, md: 'auto' }, 
                                        objectFit: 'cover',
                                        borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                                    }}
                                    image={item.img || feature1}
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
                                    <Typography pb={1} variant='body1' component="div">
                                        {item.company_name}
                                    </Typography>
                                    <Box className="flex" gap={.5}>
                                            <Experience/> 
                                            <Typography variant="caption" color="text.secondary">
                                                    {item.experience}
                                            </Typography>
                                        </Box>
                                        <Box className="flex" gap={1}>
                                            <Group />
                                            <Typography variant="caption" color="text.secondary">
                                                {item.user.email}
                                            </Typography>
                                        </Box>
                                    <Typography pt={2} variant="body2" color="text.secondary">
                                        {item.company_description}
                                    </Typography>
                                </CardContent>
                            </Card>
						</Grid>
					))}
				</Grid>
        </Landing>
    )
}

export default BrowseCompanies;