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

const MenuItem = ({Constants, auth})=>{
    return (
        <>
          {Constants.MentorMenuItem.map((item, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    disabled={auth.functional_id === null}
                                    component={item.subItems ? "button" : Link}
                                    href={
                                       auth.user_role === "mentor" ? route('mentor.detail',auth?.functional_id === null ? auth.id : auth.functional_id
                                       ):
                                       route('company.detail', auth?.functional_id === null ? auth.id : auth.functional_id)
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

                                </ListItemButton>
                            </ListItem>

                        </React.Fragment>
                    ))}
        </>
    )
}

export default  MenuItem;
