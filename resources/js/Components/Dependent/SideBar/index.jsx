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
} from "@mui/material";
import Sofie from "../../../Assets/Images/Sofie-logo.png";
import Constants from "./Constants";
import { Link } from "@inertiajs/react";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const SideBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(true);
    const [openItems, setOpenItems] = React.useState({});
    const [activeLink, setActiveLink] = useState(null);

    React.useEffect(() => {
        setOpen(!isMobile);
    }, [isMobile]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick = (id) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [id]: !prevOpenItems[id],
        }));
        const active = Constants.menuItem.find((item) => item.id == id);
        if (active) {
            setActiveLink(activeLink);
        }

        console.log(active, id, "::active");
    };

    return (
        <>
            {isMobile && (
                <AppBar position="fixed" className="mobile_hamburger_header">
                    <Toolbar
                        pt={50}
                        sx={{
                            paddingTop: "30px",
                            paddingLeft: "32px",
                            width: "10%",
                        }}
                    >
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
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
                    },
                }}
                variant={isMobile ? "temporary" : "persistent"}
                anchor="left"
                open={open}
            >
                <DrawerHeader
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <img src={Sofie} />
                    {isMobile && (
                        <IconButton
                            sx={{
                                height: "30px",
                                width: "30px",
                                color: "white",
                                backgroundColor: "black",
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

                <Divider />

                <List>
                    {Constants.menuItem.map((item, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={item.subItems ? "button" : Link}
                                    href={
                                        item.subItems
                                            ? undefined
                                            : `${item.link}`
                                    }
                                    onClick={() =>
                                        item.subItems
                                            ? handleClick(item.id)
                                            : null
                                    }
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        className={
                                            activeLink?.id == item.id
                                                ? "drawer_links"
                                                : ""
                                        }
                                    />
                                    {item.subItems ? (
                                        openItems[item.id] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )
                                    ) : null}
                                </ListItemButton>
                            </ListItem>
                            {item.subItems && (
                                <Collapse
                                    in={openItems[item.id]}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        {item.subItems.map((subItem) => (
                                            <ListItemButton
                                                component={Link}
                                                href={`${subItem.link}`}
                                                key={subItem.id}
                                                sx={{ pl: 4 }}
                                            >
                                                <ListItemIcon>
                                                    <CircleIcon
                                                        sx={{ fontSize: 8 }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={subItem.label}
                                                />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
                <Button
                    sx={{
                        color: "#9A9A9A",
                        mt: "auto",
                        mb: "20px",
                        ml: "20px",
                        justifyContent: "left",
                    }}
                >
                    <LogoutIcon sx={{ marginRight: "5px" }} />
                    Logout
                </Button>
            </Drawer>
        </>
    );
};

export default SideBar;
