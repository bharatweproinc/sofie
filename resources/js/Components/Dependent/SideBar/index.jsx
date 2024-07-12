import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CircleIcon from "@mui/icons-material/Circle";
import { styled, useTheme } from "@mui/material/styles";
import {
    useMediaQuery,
    Collapse,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Box,
} from "@mui/material";
import Sofie from "../../../Assets/Images/Sofie-logo.png";
import Constants from "./Constants";
import { Link, router } from "@inertiajs/react";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import AdminMenuItem from "./AdminMenuItem";
import MentorMenuItem from "./MentorMenuItem";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const SideBar = ({children}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(true);
    const [openItems, setOpenItems] = React.useState({});

    React.useEffect(() => {
        setOpen(!isMobile);
    }, [isMobile]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };




    const logout = () => {
        router.post(route('logout'));
    };

    return (
        <>
        <Box sx={{display : 'flex'}} >
            {isMobile && (
                <AppBar position="fixed" className="mobile_hamburger_header">
                    <Toolbar
                    className="mobile_hamburger_toolbar"
                        pt={50}
                        sx={{
                            paddingTop: "30px",
                            paddingLeft: "32px",
                            width: "17%",
                        }}
                    >
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon sx={{fontSize:'2rem'}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            )}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        overflow:'visible',
                    },
                    zIndex:1300
                }}
                variant={isMobile ? "temporary" : "persistent"}
                anchor="left"
                open={open}
            >
                <DrawerHeader
                    sx={{ display: "flex", justifyContent: "space-between", paddingLeft:"17px"}}
                >
                    <Link href="/">
                   <img src={Sofie} />
                   </Link>
                    {isMobile && (
                        <IconButton
                            sx={{
                                height: "30px",
                                width: "30px",
                                color: "white",
                                backgroundColor: "black",
                                position:'absolute',
                                right:'-15px',
                                top:'40px',
                            }}
                            onClick={handleDrawerClose}
                        >
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    )}
                </DrawerHeader>


                <List>
                {/* <AdminMenuItem Constants={Constants} openItems={openItems} setOpenItems={setOpenItems}/> */}
                <MentorMenuItem Constants={Constants} openItems={openItems}/>
                </List>
                <Button
                    component={Link}

                    sx={{
                        color: "#9A9A9A",
                        mt: "auto",
                        mb: "20px",
                        ml: "20px",
                        justifyContent: "left",
                    }}
                    onClick={logout}
                >
                    <LogoutIcon sx={{ marginRight: "5px" }} />
                    Logout
                </Button>
            </Drawer>
            <Box sx={{ width:"100%" }}>
                {children}
            </Box>
        </Box>
        </>
    );
};

export default SideBar;
