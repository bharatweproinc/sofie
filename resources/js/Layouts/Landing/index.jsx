import Footer from '@/Components/Dependent/Footer'
import Header from '@/Components/Dependent/Header'
import { Box } from '@mui/material'
import React from 'react'

export const Landing = ({auth, children}) => {
    return (
        <Box>
            <Header/>
                {children} 
            <Footer/>
        </Box>
    )
}
