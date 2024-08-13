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
import DeleteIcon from "@/Components/SVGIcons/Home/DeleteIcon";

const Headers = [
   "Profile Photo", "Company Name", "Company UEN", "Contact Person", "Email" ,"Industry Sector", "Review", "Remove"
]

function MatchedSME ({companies,id}) {
    return(
        <Box>
            <Box p={3}>
                <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Connected SME</Typography>
            </Box>
            <Box>
            {
                companies.length > 0 ?
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
                                                Headers.map((item, index) => {
                                                    return (
                                                        <TableCell>
                                                            <Box className="flex gap-3">
                                                                <Typography
                                                                    key={index}
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
                                            {companies.map((row) => (
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
                                                            alt={'company_photo'}
                                                            src={row.profile_photo}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row">
                                                        {row.company_name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.company_uen}</TableCell>
                                                    <TableCell align="left">{row.user.name}</TableCell>
                                                    <TableCell align="left">{row.user.email}</TableCell>
                                                    <TableCell align="left">{row.industry_sector}</TableCell>
                                                    <TableCell>
                                                        <a href={route('company.detail', row.id)} target="_blank">
                                                            <CheckIcon/>
                                                        </a>
                                                    </TableCell>
                                                    <TableCell>
                                                        <a href={route("company.removeCompany", id)} target="_blank">
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
                </Grid> : <NoDataFound message="No Matched SME yet" />
                }
            </Box>
        </Box>
    )
}
export default MatchedSME;
