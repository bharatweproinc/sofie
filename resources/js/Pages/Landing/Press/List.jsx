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
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import NoDataFound from "@/Components/NoDataFound";
import Constants from "@/Components/Dependent/SideBar/Constants";
import "../style.scss"
import DeleteAlert from "@/Components/Dependent/DeleteAlert";
import { notify } from "@/Components/Notifier";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Headers = [
    "Press Content Title", "Post date", "Action"
]
function List({list}){
    const { post } = useForm()
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [pressList, setPressList] = useState(list.press);

    React.useEffect(()=> {
        setPressList(list.press);
    }, [list.press])

    const handleDelete = () => {
        console.log('userId', userId)
        post(route('admin.press.delete', userId),{
            onSuccess:(success) => {
                notify.success('Data has been deleted successfully')
                console.log(success, "successs");
                setOpen(false);
            },
            onError:(error) => {
                notify.error("Error in  Delete");
                console.log(error,"error");
                setOpen(false);
            },
        })
    }
    return (
        <Landing auth={list.user}>
        <ToastContainer style={{marginTop:"65px"}}/>
              <Typography sx={{ height: {xs : '95px', sm : '0px'} }}></Typography>
              <Box pr={8} pt={3} sx={{display : 'flex', justifyContent : 'flex-end'}} className="custom_btn">
                  <Button component={Link} href={route('landing.pressContent')} variant="contained">
                    Add
                  </Button>
              </Box>
              {
                  pressList.length > 0 ?
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
                                          {pressList.map((row) => (
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

                                                  <TableCell align="left">
                                                      <Box
                                                          sx={{ gap: "10px" }}
                                                          className="flex"
                                                      >
                                                          {Constants.icons.map(
                                                              (item, index) => (
                                                                  <span key={index}>
                                                                      {item.id === 1 ? (
                                                                          <a
                                                                              target="_blank"

                                                                              href={route('admin.press.get',row.id)}
                                                                          >
                                                                              {item.icon}
                                                                          </a>
                                                                      ) : item.id === 2 ? (
                                                                          <a
                                                                              target="_blank"
                                                                              href={route('admin.press.detail',row.id)}
                                                                          >
                                                                              {item.icon}
                                                                          </a>
                                                                      ) : (
                                                                          <span style={{cursor : 'pointer'}} onClick={()=>{setOpen(true), setUserId(row.id)}}>
                                                                              {item.icon}
                                                                          </span>
                                                                      )}
                                                                  </span>
                                                              )
                                                          )}
                                                      </Box>
                                                  </TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                              </TableContainer>
                          </Paper>
                      </Grid>
              </Grid> : <NoDataFound message="No Press Content available" />
              }
          <DeleteAlert open={open} setOpen={setOpen} handleDelete={handleDelete}/>
      </Landing>
    )
}

export default List
