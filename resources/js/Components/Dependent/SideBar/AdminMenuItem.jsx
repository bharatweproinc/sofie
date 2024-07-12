import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import List from "@mui/material/List";
import CircleIcon from "@mui/icons-material/Circle";
import {
    Collapse,
} from "@mui/material";
import { Link, router } from "@inertiajs/react";

const AdminMenuItem = ({Constants,openItems,setOpenItems})=>{
    const handleClick = (id) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [id]: !prevOpenItems[id],
        }));
    };

    React.useEffect(() => {
        const newOpenItems = {};
        Constants.AdminmenuItem.forEach(item => {
            if (item.subItems) {
                item.subItems.forEach(subItem => {
                    if (subItem.link === window.location.pathname) {
                        newOpenItems[item.id] = true;
                    }
                });
            }
        });
        setOpenItems(newOpenItems);
    }, [location.pathname]);
    return (
        <>
          {Constants.AdminmenuItem.map((item, index) => (
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
                                    className={
                                                item?.link ===  window.location.pathname
                                                    ? "drawer_link_active"
                                                    : ""
                                                }
                                >
                                    <ListItemIcon className={
                                                        item?.link ===  window.location.pathname
                                                        ? "drawer_links"
                                                        : ""
                                                }>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        className={
                                            item?.link ===  window.location.pathname
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
                                    mountOnEnter
                                >
                                    <List component="div" disablePadding>
                                        {item.subItems.map((subItem) => (
                                            <ListItemButton
                                                component={Link}
                                                href={`${subItem.link}`}
                                                key={subItem.id}
                                                sx={{ pl: 4 }}
                                            >
                                                <ListItemIcon  className={
                                               subItem?.link ===  window.location.pathname
                                                ? "drawer_links"
                                                : ""
                                                 }>
                                                    <CircleIcon
                                                        sx={{ fontSize: 8 }}

                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                   className={
                                                    subItem?.link ===  window.location.pathname
                                                ? "drawer_links"
                                                : ""
                                              }
                                                    primary={subItem.label}
                                                />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
        </>
    )
}

export default  AdminMenuItem;
