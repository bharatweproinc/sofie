import GoldQuote from '@/Components/SVGIcons/Home/GoldQuote'
import theme from '@/Themes/Color'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Testimonial = ({item}) => {
    return (
            <Card variant="outlined" sx={{
                    p: {lg:5, md:2, xs:1},
                    borderRadius: {lg:'15px', xs: '7px'},
                    height: '100%'
                }}
            >
                <Box className="flex justify-center items-center">
                    <GoldQuote />
                </Box>
                <Typography mt={3} textAlign={'center'}
                    fontWeight= 'bolder'
                    variant="body1"
                    color={theme.color[import.meta.env.VITE_SELECTED_THEME].black}
                >
                    {item.description}
                </Typography>
                <Box className="flex justify-center rounded-s-full mt-4">
                    <img src={item.img} alt="" srcSet="" />
                </Box>
                <Typography mt={2} variant="subtitle2" color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} textAlign={'center'} >
                    {item.user}
                </Typography>
            </Card>
    )
}

export default Testimonial