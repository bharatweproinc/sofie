import * as React from "react";
import { Landing } from '@/Layouts/Landing';
import { Box, Grid, Pagination, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from 'styled-components';
import NoDataFound from "@/Components/NoDataFound";


const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important'
});
const Headers = [
    "Title", "Date Posted"
]
function Press({list}) {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <div className="row p-8 justify-normal">
          <div className="col-md-12 mt-5">
            <Typography component="div">
            <div className='text-center'><strong>PRESS RELEASES</strong></div><hr/>
            {
                  list.length > 0 ?
              <Grid container>
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
                                          {list.map((row) => (
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
                                                      {row.title}
                                                  </TableCell>
                                                  <TableCell align="left">{row.date}</TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                              </TableContainer>
                          </Paper>
                      </Grid>
              </Grid> : <NoDataFound message="No Press Content available" />
              }
            </Typography>
          </div>
        </div>
      </Box>
    </Landing>
  );
}

export default Press;