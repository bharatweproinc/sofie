import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Constants from "./Constant";
import {
    Grid,
    Button,
    Pagination,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.scss";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MatchingStatus = ({list, handleViewAll, section, setViewSection }) => {
    let matchingStatus = list.companies.list.company;
    console.log('list45454', matchingStatus)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const rowsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const isView = section === "matching_status" ? true : false;

    const handleBack = () => {
        setViewSection("");
    };

    const sortedRows = [...matchingStatus].sort((a, b) => {
       if (sortConfig.key !== null) {
         const key = sortConfig.key;
         if (a[key] < b[key]) {
           return sortConfig.direction === 'asc' ? -1 : 1;
         }
         if (a[key] > b[key]) {
           return sortConfig.direction === 'asc' ? 1 : -1;
         }
       }
       return 0;
     });


    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = !isView ?
        sortedRows.slice(0, 4) :
        sortedRows.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const handleSort = (key) => {
       let direction = 'asc';
       if (sortConfig.key === key && sortConfig.direction === 'asc') {
         direction = 'desc';
       }
       setSortConfig({ key, direction });
     };

    return (
        <>
            <Grid item xs={12} md={isView ? 12 : 9} sx={{ width: "100%", paddingLeft:'0px' }} className="matching_status_main">
                <Paper sx={{ height:'100%' }}>
                    {isView && (
                        <Button
                            onClick={() => handleBack()}
                            sx={{
                                color: "black",
                                fontSize: "14px",
                                textTransform: "capitalize",
                            }}
                        >
                            <ArrowBackIcon
                                sx={{ marginRight: "5px", fontSize: "18px" }}
                            />
                            Back
                        </Button>
                    )}
                    <Box p={2} className="flex justify-between">
                        <Typography
                            variant="h5"
                            fontSize="18px"
                            fontWeight="700"
                            color="#090D28"
                            alignSelf={'center'}
                        >
                            Matching Status
                        </Typography>
                        {!isView && (
                            <Button
                                onClick={() => handleViewAll("matching_status")}
                                sx={{
                                    textTransform: "capitalize",
                                }}
                            >
                                View all
                            </Button>
                        )}
                    </Box>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#F8F9FB" }}>
                                    <TableCell>
                                        <Box className="flex gap-3">
                                            <Typography
                                                fontSize="14px"
                                                color="#212121"
                                                fontWeight="600"
                                            >
                                                Company Name
                                            </Typography>
                                            <div className="grid"  onClick={() => handleSort('company_name')} style={{ cursor:"pointer" }}>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography
                                                fontSize="14px"
                                                color="#212121"
                                                fontWeight="600"
                                            >
                                                Area 1
                                            </Typography>
                                            <div className="grid"  onClick={() => handleSort('Area1')} style={{ cursor:"pointer" }}>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography
                                                fontSize="14px"
                                                color="#212121"
                                                fontWeight="600"
                                            >
                                                Area 2
                                            </Typography>
                                            <div className="grid"  onClick={() => handleSort('Area2')} style={{ cursor:"pointer" }}>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography
                                                fontSize="14px"
                                                color="#212121"
                                                fontWeight="600"
                                            >
                                                Area 3
                                            </Typography>
                                            <div className="grid"  onClick={() => handleSort('Area3')} style={{ cursor:"pointer" }}>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z"
                                                        fill="#E4E5E7"
                                                    />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {row.company_name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.assigned_mentor_1 ? row.assigned_mentor_1 : 'Pending...'}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.assigned_mentor_2 ? row.assigned_mentor_2 : 'Pending...'}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.assigned_mentor_3 ? row.assigned_mentor_3 : 'Pending...'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {isView && (
                        <Box p={2} display="flex" justifyContent="center">
                            <Pagination
                                className="table_pagination"
                                count={Math.ceil(matchingStatus.length / rowsPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                                sx={{ mt: 3, color: "#117B9E" }}
                            />
                        </Box>
                    )}
                </Paper>
            </Grid>
        </>
    );
};

export default MatchingStatus;
