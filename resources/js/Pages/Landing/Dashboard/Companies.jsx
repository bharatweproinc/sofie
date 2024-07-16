import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Constants from './Constant';
import { Grid, Button, Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.scss"
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from '@inertiajs/react';
import NoDataFound from '@/Components/NoDataFound';


const Companies = ({ handleViewAll, section, setViewSection, list = []}) => {
    let companyList = list.companies.list.company
    // console.log('companyList1212', companyList)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const rowsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const isView = section === "companies" ? true : false;

    const handleBack = () => {
        setViewSection("");
    };

    const sortedRows = [...companyList].sort((a, b) => {
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
        sortedRows.slice(0, 7) :
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
        <Grid item xs={12} md={12} sx={{ width: '100%' }} className='companies_main'>
            <Paper>
                {
                    isView &&
                    <Button onClick={handleBack} sx={{ color: 'black', fontSize: '14px', textTransform: 'capitalize' }}>
                        <ArrowBackIcon sx={{ marginRight: '5px', fontSize: '18px' }} />
                        Back
                    </Button>
                }
                <Box p={2} className="flex justify-between">
                    <Typography alignSelf={'center'} variant="h5" fontSize='18px' fontWeight='700' color="#090D28">Companies</Typography>
                    {
                        !isView &&
                        <Button onClick={() => handleViewAll('companies')} sx={{ textTransform: 'capitalize' }}>
                            View all
                        </Button>
                    }
                </Box>
                {companyList.length > 0 ?
                <Box>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#F8F9FB' }}>
                                    <TableCell>
                                        <Box className="flex gap-3">
                                            <Typography fontSize='14px' color='#212121' fontWeight='600'>Company Name</Typography>
                                            <div className='grid' onClick={() => handleSort('company_name')} style={{ cursor:"pointer" }}>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                                                </svg>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography fontSize='14px' color='#212121' fontWeight='600'>UEN Number</Typography>
                                            <div className='grid' onClick={() => handleSort('uen_number')} style={{ cursor:"pointer" }}>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                                                </svg>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography fontSize='14px' color='#212121' fontWeight='600'>Contact Person</Typography>
                                            <div className='grid' onClick={() => handleSort('name')} style={{ cursor:"pointer" }}>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                                                </svg>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box className="flex gap-3">
                                            <Typography fontSize='14px' color='#212121' fontWeight='600'>Email</Typography>
                                            <div className='grid' onClick={() => handleSort('email')} style={{ cursor:"pointer" }}>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                                                </svg>
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                                                </svg>
                                            </div>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box className="flex gap-3 pl-10">
                                            <Typography fontSize='14px' color='#212121' fontWeight='600'>Actions</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentRows?.length && currentRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {row.company_name}
                                        </TableCell>
                                        <TableCell align="left">{row.company_uen}</TableCell>
                                        <TableCell align="left">{row?.user?.name}</TableCell>
                                        <TableCell align="left">{row?.user?.email}</TableCell>
                                        <TableCell align="left">
                                            <Box sx={{ gap: '10px' }} className="flex">
                                                {Constants.icons.map((item, index) => (
                                                    <span key={index}>
                                                        {item.id === 1 ? <Link href={item.link}>{item.icon}</Link> : item.icon}
                                                    </span>
                                                ))}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                        isView &&
                        <Box p={2} display="flex" justifyContent="center">
                            <Pagination
                                count={Math.ceil(companyList.length / rowsPerPage)}
                                page={currentPage}
                                className='table_pagination'
                                onChange={handlePageChange}
                                sx={{ mt: 3}}
                            />
                        </Box>
                    }
                </Box> : <NoDataFound message="No company available"/>
                }
            </Paper>
        </Grid>
    );
};

export default Companies;
