import * as React from 'react';
import { Landing } from '@/Layouts/Landing';
import { Box, Divider, Typography } from '@mui/material';
import terminologyHeaders from './Constants';

function Terminology () {

    return (
        <Landing>
            <Typography sx={{ height: '65px' }}></Typography>
            <Typography px={3} fontWeight={400} fontSize={"48px"} color={"#252525"}>Terminology</Typography>
            <Box px={3} sx={{display : 'flex'}}>
                <Box style={{width : "200px"}}>
                    {terminologyHeaders.terminologyHead.map((head) => (
                        <Typography style={{marginBottom : "10px"}}> {head} </Typography>
                    ))}
                </Box>
                <div>
                   {Object.entries(terminologyHeaders.headerDetails).map(([key, value]) => (  
                    <>
                    <Box sx={{ display : "flex"}} >
                        <Typography pt={4} sx={{fontSize : "32px", color : "#117B9E"}}>{key} </Typography>  
                        <Typography p={4} sx={{display: "flex", flexDirection: "column"}}>
                            {value.map((val, index) => (
                                <span key={index}>{val}</span>
                            ))}
                        </Typography>
                    </Box>
                        <Divider color="black"/>    
                    </>
                    ))}
                </div>
                
            </Box>
        </Landing>
    )
}

export default Terminology