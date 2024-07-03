import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Button, useMediaQuery } from "@mui/material";
import Men from "../../../Assets/Images/men-rounded.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useState } from "react";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [showSearh, setShowSearch] = useState(false);



    return (
        <>
            <Grid
                className="align-middle gap-10 relative"
                justifyContent={"flex-end"}
                display={"flex"}
                item
                xs={12}
                lg={12}

            >
            {!isMobile && (
                <Box sx={{ position: "relative", width: "100%" }}>
                        <>
                            <SearchSharpIcon
                                sx={{
                                    position: "absolute",
                                    zIndex: 1,
                                    color: "#9A9A9A",
                                    top: "36%",
                                    left: "1%",
                                    fontSize: "20px",
                                }}
                            />

                            <TextField
                                size="small"
                                sx={{
                                    "& legend": { display: "none" },
                                    mt: 1,
                                    borderRadius: "5px",
                                    width: "100%",
                                    height: "100%",
                                    borderWidth: "0 !important",
                                }}
                                placeholder="Search everything here"
                            />
                        </>
                </Box>
                )}
                <Box className="flex align-middle justify-end" zIndex={1200} sx={{ width:"90%" }}>
                    {isMobile ? (
                        <>
                        {showSearh && (
                                <Box
                                    sx={{ position: "relative", width: "100%" }}
                                >
                                    <SearchSharpIcon
                                        sx={{
                                            position: "absolute",
                                            zIndex: 1,
                                            color: "#9A9A9A",
                                            top: "36%",
                                            left: "1%",
                                            fontSize: "20px",
                                        }}
                                    />

                                    <TextField
                                        size="small"
                                        sx={{
                                            "& legend": { display: "none" },
                                            mt: 1,
                                            borderRadius: "5px",
                                            width: "100%",
                                            height: "100%",
                                            borderWidth: "0 !important",
                                        }}
                                        placeholder="Search everything here"
                                    />
                                </Box>
                            )}
                            <Button
                                // variant=""
                                sx={{ color: "black" }}
                                onClick={()=>setShowSearch(!showSearh)}
                            >
                                <SearchIcon  />
                            </Button>

                        </>
                    ) : (
                        <Button variant="text" color="primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="#434343"
                                    stroke-width="2"
                                />
                                <circle
                                    cx="12"
                                    cy="18"
                                    r="0.5"
                                    fill="#434343"
                                    stroke="#434343"
                                />
                                <path
                                    d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
                                    stroke="#434343"
                                    stroke-width="2"
                                />
                            </svg>
                        </Button>
                    )}
                    <Button variant="text" color="primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                        >
                            <path
                                d="M6.44784 10.9694C6.76219 8.14032 9.15349 6 12 6V6C14.8465 6 17.2378 8.14032 17.5522 10.9694L17.804 13.2356C17.8072 13.2645 17.8088 13.279 17.8104 13.2933C17.9394 14.4169 18.3051 15.5005 18.8836 16.4725C18.8909 16.4849 18.8984 16.4973 18.9133 16.5222L19.4914 17.4856C20.0159 18.3599 20.2782 18.797 20.2216 19.1559C20.1839 19.3946 20.061 19.6117 19.8757 19.7668C19.5971 20 19.0873 20 18.0678 20H5.93223C4.91268 20 4.40291 20 4.12434 19.7668C3.93897 19.6117 3.81609 19.3946 3.77841 19.1559C3.72179 18.797 3.98407 18.3599 4.50862 17.4856L5.08665 16.5222C5.10161 16.4973 5.10909 16.4849 5.11644 16.4725C5.69488 15.5005 6.06064 14.4169 6.18959 13.2933C6.19123 13.279 6.19283 13.2645 6.19604 13.2356L6.44784 10.9694Z"
                                stroke="#434343"
                                stroke-width="2"
                            />
                            <path
                                d="M8 20C8 20.5253 8.10346 21.0454 8.30448 21.5307C8.5055 22.016 8.80014 22.457 9.17157 22.8284C9.54301 23.1999 9.98396 23.4945 10.4693 23.6955C10.9546 23.8965 11.4747 24 12 24C12.5253 24 13.0454 23.8965 13.5307 23.6955C14.016 23.4945 14.457 23.1999 14.8284 22.8284C15.1999 22.457 15.4945 22.016 15.6955 21.5307C15.8965 21.0454 16 20.5253 16 20"
                                stroke="#434343"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <circle cx="22.5" cy="3.5" r="3.5" fill="#FF0000" />
                        </svg>
                    </Button>
                    <img
                        style={{ maxWidth: "32px !important", padding: "12px" }}
                        src={Men}
                        alt=""
                    />
                </Box>
            </Grid>
        </>
    );
};

export default Navbar;
