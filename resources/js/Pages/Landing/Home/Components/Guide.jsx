import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import theme from '@/Themes/Color';

export default function Guide({ item }) {
    return (
        <Card sx={{
            bgcolor: theme.color[import.meta.env.VITE_SELECTED_THEME].primary,
            '&.MuiPaper-root': {
                boxShadow: 'none',
            }
        }}>
            <CardContent sx={{ pl: 0 }} textAlign={'center'} py={10}>
                <Typography className='counter-icon relative' textAlign={'center'} fontWeight={'bold'} gutterBottom variant="h2" component="div" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}
                    sx={{
                        width: 'fit-content',
                        display: 'flex',
                        margin: 'auto',
                        fontSize:'80px',
                        background:"#1d6fa4",
                        px:3,
                        zIndex:15
                    }}
                >
                    <Typography sx={{
                        height: 'fit-content',
                        backgroundColor: '#117b9e',
                        padding: '9px',
                        borderRadius: '100%',
                        position: 'absolute',
                        right:'80px',
                        top:'10px'
                    }}>
                        {item.icon}
                    </Typography>
                    {item.counter}
                </Typography>
                <Typography textAlign={'center'} gutterBottom variant="subtitle2" component="div" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
                    {item.title}
                </Typography>
                <Typography textAlign={'center'} variant="body2" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
                    {item.caption}
                </Typography>
            </CardContent>
        </Card>
    );
}
