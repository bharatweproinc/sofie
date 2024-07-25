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
import CheckIcon from '@/Components/SVGIcons/Home/CheckIcon';

const Headers = [
   "Profile Photo", "Company Name", "Company UEN", "User Name", "User Email" ,"User Phone", "Review" 
]

function MatchedSME ({}) {
    // const MatchedSme = list;
    return(
        <Box>
            <Box p={3}>
                <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Connected SME</Typography>
            </Box>
            <Box>
            {
                MatchedSME.length > 0 ?
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
                                            {/* {MatchedSme.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{
                                                        "&:last-child td, &:last-child th":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                >
                                                    <TableCell align="left" component="th" scope="row">
                                                        Company Name
                                                    </TableCell>
                                                    <TableCell align="left">Compnay Uen</TableCell>
                                                    <TableCell align="left">User Name</TableCell>
                                                    <TableCell align="left">User Email</TableCell>
                                                    <TableCell align="left">User Phone</TableCell>
                                                </TableRow>
                                            ))} */}
                                            <TableRow>
                                                    <TableCell>
                                                        <Avatar 
                                                            alt={''}
                                                            src={''}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row">
                                                        Company Name
                                                    </TableCell>
                                                    <TableCell align="left">Compnay Uen</TableCell>
                                                    <TableCell align="left">User Name</TableCell>
                                                    <TableCell align="left">User Email</TableCell>
                                                    <TableCell align="left">User Phone</TableCell>
                                                    <TableCell>
                                                        <a href="" target="_blank">
                                                            <CheckIcon/>
                                                        </a>
                                                    </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                </Grid> : <NoDataFound message="No Matched Sme available" />
                }
            </Box>
        </Box>
    )
}
export default MatchedSME;