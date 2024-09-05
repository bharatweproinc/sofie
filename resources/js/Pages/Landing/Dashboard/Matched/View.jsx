import * as React from "react";
import { Landing } from "@/Layouts/Landing";
import { Avatar, Box, Grid, Pagination, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NoDataFound from "@/Components/NoDataFound";
import CheckIcon from "@/Components/SVGIcons/Home/CheckIcon";
import "../../style.scss"

const Headers = [
    "SME", "SME Name", "SME - UEN", "Mentor ID","Mentor Name", "Matched Area"
]

function matched ({list =[]}) {
    const rowsPerPage = 8;
    const [currentPage, setCurrentPage] = React.useState(1);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = list.matched.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    return (
        <Landing auth={list.user}>
            <Typography sx={{ height: {xs : '65px', sm : '0px'} }}></Typography>
            <Box p={3}>
                <Box p={3}>
                    <Typography fontWeight={700} fontSize="28px" textAlign="left" color={'#223049'}>Matched SMEs and Mentors</Typography>
                </Box>
                <Box>
                {
                    list.matched.length > 0 ?
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
                                                            <TableCell key={index}>
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
                                                {currentRows.map((row) => (
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
                                                                src={row.sme.profile_photo}
                                                            />
                                                        </TableCell>
                                                        <TableCell align="left" component="th" scope="row">
                                                            {row.sme.company_name}
                                                        </TableCell>
                                                        <TableCell align="left">{row.sme.company_uen}</TableCell>
                                                        <TableCell align="left">{row.mentor_id}</TableCell>
                                                        <TableCell align="left">{row.mentor.name}</TableCell>
                                                        <TableCell align="left">{row.functional_area}</TableCell>
                                                        {/* <TableCell>
                                                            <a href={route('admin.company.get',row.id)} target="_blank">
                                                                <CheckIcon/>
                                                            </a>
                                                        </TableCell> */}
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Box p={2} display="flex" justifyContent="center">
                                        <Pagination
                                            count={Math.ceil(list.length / rowsPerPage)}
                                            page={currentPage}
                                            className="custom_table_pagination"
                                            onChange={handlePageChange}
                                            sx={{ mt: 3 }}
                                        />
                                    </Box>
                                </Paper>
                            </Grid>
                    </Grid> : <NoDataFound message="No Completely Matched SMEs and Mentors available yet" />
                    }
                </Box>
            </Box>
        </Landing>
    )
}

export default matched;
