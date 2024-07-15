import Footer from '@/Components/Dependent/Footer'
import Header from '@/Components/Dependent/Header'
import SideBar from '@/Components/Dependent/SideBar'
import { Box } from '@mui/material'
import React from 'react'

export const Landing = ({ auth, children }) => {
    return (
        <Box>
            {auth ?
                <>
                <SideBar children={children}>
                {children}
                </SideBar>
                </>
                :
                <>
                    <Header />
                    {children}
                    <Footer />
                </>

            }

        </Box>
    )
}
