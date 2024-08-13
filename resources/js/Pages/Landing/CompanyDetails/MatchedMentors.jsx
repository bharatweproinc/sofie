import * as React from "react";
import { Avatar, Box, Grid, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NoDataFound from "@/Components/NoDataFound";
import CheckIcon from "@/Components/SVGIcons/Home/CheckIcon";
import DeleteIcon from "@/Components/SVGIcons/Home/DeleteIcon";

const Headers = [
    "Profile Photo", "Contact Name", "Experience in years", "Contact Email" ,"Functional Area", "Review", "Remove"
]

function MatchedMentors ({mentors}) {
    console.log('mentors', mentors);
    return(
        <Box px={4} pb={6}>
            <Box p={3}>
                <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Connected Mentors</Typography>
            </Box>
            <Box>
            {
                mentors.length > 0 ?
                <Grid container>
                        <Grid
                            item
                            xs={12}
                            p={0}
                            md={12}
                            sx={{ width: "100%" }}
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
                                            {mentors.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{
                                                        "&:last-child td, &:last-child th":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                >
                                                    <TableCell>
                                                        <Avatar
                                                            alt={''}
                                                            src={row.profile_photo}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row">
                                                        {row.user.name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.experience}</TableCell>
                                                    <TableCell align="left">{row.user.email}</TableCell>
                                                    <TableCell align="left">{row.functional_area.map(String).join(', ')}</TableCell>
                                                    <TableCell align="left">
                                                        <a href={route("mentor.detail", row.id)} target="_blank">
                                                            <CheckIcon/>
                                                        </a>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <a href={route("mentor.removeMentor", row.id)} target="_blank">
                                                            <DeleteIcon/>
                                                        </a>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                </Grid> : <NoDataFound message="No Matched Mentor yet" />
                }
            </Box>
        </Box>
    )
}
export default MatchedMentors;
