import * as React from "react";
import { Landing } from "@/Layouts/Landing";
import { Box, Grid, Pagination, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import NoDataFound from "@/Components/NoDataFound";
import Constants from "../Dashboard/Constant";

const Headers = [
    "Testimonial Name", "Description", "Action"
]

function Testimonials ({list}){
    return (
        <Landing>
            <Typography sx={{height:'65px'}}></Typography>
                <Box pr={8} pt={3} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Button component={Link} href={route('')} p={4} variant="contained">
                        Add
                    </Button>
                </Box>
             <Grid container className="mentor_list">
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{ width: "100%", padding:"32px" }}
                    >
                        <Paper>
                            <TableContainer  sx={{ width: "100%" }}>
                                <Table
                                    sx={{ minWidth: 650, maxWidth: "100%" }}
                                >
                                    <TableHead>
                                        <TableRow>
                                           {
                                             Headers.map((item) => {
                                                return (
                                                    <TableCell>
                                                        <Box className="flex gap-3">
                                                            <Typography
                                                                fontSize="14px"
                                                                color="#212121"
                                                                fontWeight="600"
                                                            >
                                                                {item}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                )
                                             })
                                           }
                                            </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {list.map((row) => ( */}
                                            <TableRow
                                                // key={row.id}
                                                sx={{
                                                    "&:last-child td, &:last-child th":
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                            >
                                                <TableCell align="left" component="th" scope="row">
                                                    Testimonial
                                                </TableCell>
                                                <TableCell align="left">Descrioption</TableCell>
                                               
                                                <TableCell align="left">
                                                    <Box
                                                        sx={{ gap: "10px" }}
                                                        className="flex"
                                                    >
                                                        {Constants.icons.map(
                                                            (item, index) => (
                                                                <span key={index}>
                                                                    {item.id === 1 ? (
                                                                        <Link
                                                                            // href={route('admin.mentor.mentordetail',row.user.id)}
                                                                        >
                                                                            {item.icon}
                                                                        </Link>
                                                                    ) : item.id === 2 ? (
                                                                        <Link
                                                                            // href={route('admin.mentor.detail',row.id)}
                                                                        >
                                                                            {item.icon}
                                                                        </Link>
                                                                    ) : (
                                                                        item.icon
                                                                    )}
                                                                </span>
                                                            )
                                                        )}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        {/* ))} */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper> 
                </Grid>
            </Grid>   
        </Landing>
    )
}

export default Testimonials