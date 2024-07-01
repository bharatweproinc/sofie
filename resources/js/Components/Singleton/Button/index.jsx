
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import themeC from '@/Themes/Color'
import SimpleButton from '@mui/material/Button'

const size = {
    large:{
        height: '56px',
    },
    medium: {    
        height: '40.1px',
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: themeC.color[import.meta.env.VITE_SELECTED_THEME].primary,
        },
        textBlack:{
            main: '#000',
        }
    },
});

export default function Button(props) {
    return (
        <ThemeProvider theme={theme}>
            <SimpleButton {...props}
                className={props.className}
                sx={{
                    ...size[props.size ? props.size : "default"],
                    ...props.sx,
                    borderRadius: '0px !important',
                    textTransform: 'capitalize !important'
                }}>
                {props.children}
            </SimpleButton>
        </ThemeProvider>
    )
}
