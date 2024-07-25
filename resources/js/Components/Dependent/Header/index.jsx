import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@/Components/Singleton/Button';
import logo from '../../../../../public/favicon.png'
import { Link } from '@inertiajs/react';

const navItems = [
     {name :'Browse Companies', link:'findcompanies'},
     {name : 'Find A Mentor', link : 'findmentors'},
     {name : "Login", link : 'userlogin'},
     {name : 'Get Started Now', link : 'signup'}
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
                            <ListItemButton sx={{ textAlign: 'center' }} component={Link} href={route(`landing.${item.link}`)}>
                                <ListItemText primary={item.name}/>
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
                backgroundColor: "#1d6fa4",
                boxShadow: "0px 4px 17.5px 0px #00000026",
                zIndex:'99999'
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Link href={route('landing.home')}>
                        <img style={{height:'50px'}} src={logo} alt="" />
                        </Link>
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
                                component={Link}
                                href={route(`landing.${item.link}`)}
                                variant={key === 3 ? 'contained' : 'text'}
                                sx={{ 
                                    backgroundColor : key === 3 ? '#FAF6D2' : '', 
                                    color : key === 3 ? 'black' : 'white', 
                                    textTransform : 'capitalize',
                                    borderRadius : 0,
                                    '&:hover': { bgcolor : key === 3 ? '#FAF6D2' : '' }
                                }}
                            > 
                                {item.name}
                            </Button>
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', marginTop : "56px" },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Header;

