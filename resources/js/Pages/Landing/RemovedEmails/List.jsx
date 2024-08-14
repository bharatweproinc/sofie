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
import CheckIcon from '@/Components/SVGIcons/Home/CheckIcon';
import DeleteIcon from "@/Components/SVGIcons/Home/DeleteIcon";
import NoDataFound from "@/Components/NoDataFound";
//import { useForm} from '@inertiajs/react';


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
    "Mentor ID", "Mentee ID","Match End Type", "Reason Mentioned", "Send Email", "Delete"
]
function List({list=[]}) {
    console.log('li',list);
  return (
    <Landing auth={list.user}>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <div className="row p-8 justify-normal">
          <div className="col-md-12 mt-5">
            <Typography component="div">
            {
                  list.mails.length > 0 ?
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
                                          {list.mails.map((row) => (
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
                                                      {row.mentor_id}
                                                  </TableCell>
                                                  <TableCell align="left">{row.company_id}</TableCell>
                                                  <TableCell align="left">{row.match_end_type}</TableCell>
                                                  <TableCell align="left">{row.match_end_reason}</TableCell>
                                                  <TableCell>
                                                        <a href={route("admin.sendCustomRemoveMail",row.id)} target="_blank">
                                                            <CheckIcon/>
                                                        </a>
                                                    </TableCell>
                                                    <TableCell>
                                                        <a href={route("admin.deleteCustomRemoveMail",row.id)} target="_blank">
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
              </Grid> : <NoDataFound message="No Email available" />
              }
            </Typography>
          </div>
        </div>
      </Box>
    </Landing>
  );
}

export default List;
