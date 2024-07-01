import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@/Components/Singleton/Button';
import sofieLogo from '../../../Assets/Images/Sofie-logo.png';
import { Link } from '@inertiajs/react';

const navItems = [
     {name :'Browse Companies', link:'home'},
     {name : 'Find A Mentor', link : 'home'},
     {name : "Login", link : 'login'},
     {name : 'Get Started Now', link : 'home'}
    ];

const Header = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const drawer = (
        <>  
             <Toolbar 
                sx={{
                    display: 'flex',
                    flexDirection : "column",
                    padding : "10px",
                }}>
                <List>
                    {navItems.map((item, key) => (
                        <ListItem key={key} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={
                                    <Link href={route(`landing.${item.link}`)}>{Object.values(item.name)}</Link>
                                    }/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </>
    );

    return (
        <Box sx={{ textAlign: 'center' }}>
            <AppBar component="nav" sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 17.5px 0px #00000026",
                zIndex:'99999'
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <img src={sofieLogo} alt="description" />
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className="flex gap-4" gap={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, key) => (
                            <Button
                                key={key}
                                variant={key === 3 ? 'contained' : 'text'}
                                color={key !== 3 ? 'textBlack' : 'primary'}
                            >
                              <Link href={route(`landing.${item.link}`)}>{Object.values(item.name)}</Link>
                            </Button> //signup
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', marginTop : "45px" },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Header;

