import * as React from 'react';
import { Landing } from '@/Layouts/Landing';
import { Box, Divider, Grid, Typography } from '@mui/material';
import terminologyHeaders from './Constants';

function Terminology () {
    return (
        <Landing>
            <Typography sx={{ height: '65px' }}></Typography>
            <Typography pl={3} pt={8} fontWeight={400} fontSize={"48px"} color={"#252525"}>Terminology</Typography>
                <Box sx={{display : {md: 'flex', xs : 'none'}, justifyContent : 'center'}}>
                    {
                        Object.keys(terminologyHeaders).map((head, i) => (
                            <Typography className='p-4 my-2' key={i} style={{fontSize : '18px', fontWeight : '600'}}>
                                {head}
                            </Typography>
                        ))
                    }
                </Box>
                <Box sx={{display : {md: 'flex', xs : 'none'}, padding : "25px" }}>
                    <Grid container>
                        {Object.entries(terminologyHeaders).map(([key, value], index) => (
                            <React.Fragment key={key}>
                                <Grid item md={4}>
                                    <Typography pt={4} sx={{fontWeight : '600', fontSize : "32px", color : "#117B9E"}}>{key} </Typography>  
                                    <Box py={4} sx={{display: "flex", flexDirection: "column", color : '#7C7C7C',  fontSize : '16px'}}>
                                        {value.map((val, index) => (
                                            <Typography style={{marginBottom : "20px"}} key={index}>{val}</Typography>
                                        ))}
                                    </Box>
                                </Grid>
                                {(index + 1) % 3 === 0 && index + 1 !== Object.entries(terminologyHeaders).length && (
                                    <Grid item xs={12}>
                                        <Divider color='black' />
                                    </Grid>
                                )}
                            </React.Fragment>
                        ))}
                        <Grid item xs={12}>
                            <Divider color='black' />
                        </Grid>
                    </Grid>
                </Box>
            
            <Box px={3} my={5} sx={{display : {md : 'none', xs : "flex"}}}>
                <Box pt={4} sx={{width : {xs : "200px"}}}>
                    {Object.keys(terminologyHeaders).map((head, i) => (
                        <Typography key={i} style={{marginBottom : "10px", fontSize : '18px', fontWeight : '600'}}> 
                            {head} 
                        </Typography>
                    ))}
                </Box>
                <div style={{width : "100%"}}>
                   {Object.entries(terminologyHeaders).map(([key, value]) => (  
                        <React.Fragment key={key}>
                            <Box sx={{ display : "flex"}}>
                                <Typography pt={4} sx={{fontWeight : '600',fontSize : "32px", color : "#117B9E"}}>{key} </Typography>  
                                <Typography p={4} sx={{display: "flex", flexDirection: "column", color : '#7C7C7C',  fontSize : '16px'}}>
                                    {value.map((val, index) => (
                                        <span style={{padding : '10px'}} key={index}>{val}</span>
                                    ))}
                                </Typography>
                            </Box>
                            <Divider color="black"/>    
                        </React.Fragment>
                        ))}
                </div>
            </Box>
        </Landing>
    )
}

export default Terminology