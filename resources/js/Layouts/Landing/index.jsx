import React from 'react'
import Footer from '@/Components/Dependent/Footer'
import Header from '@/Components/Dependent/Header'
import SideBar from '@/Components/Dependent/SideBar'
import { Box } from '@mui/material'

export const Landing = ({ auth, children }) => {
    return (
        <Box>
            {auth?.id ?
                <>
                <SideBar children={children} auth={auth}>
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
