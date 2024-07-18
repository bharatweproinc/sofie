import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Constants from './Constant';
import TextField from '@mui/material/TextField'
import { Grid, Button, useMediaQuery, Collapse } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Men from '../../../Assets/Images/men-rounded.png'
import Sofie from '../../../Assets/Images/Sofie-logo.png'
import "./style.scss"
import { Link } from '@inertiajs/react';
import SearchIcon from '@mui/icons-material/Search';
import SideBar from '@/Components/Dependent/SideBar/index.jsx';
import Navbar from '@/Components/Dependent/Navbar';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MatchingStatus from './MatchingStatus';
import { useState } from 'react';
import Companies from './Companies';
import Cards from './Cards';
import { Landing } from '@/Layouts/Landing';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


function dashboard({list}) {

  const theme = useTheme();

    const [viewSection , setViewSection] = useState('')
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleViewAll = (section)=>{
    setViewSection(section)
  }

  return (
    <Landing auth={list.user}>
      <Box sx={{ display: 'flex', backgroundColor: '#FAFAFA' }}>
        <CssBaseline />
        <Main open={open} sx={{display : 'flex', flexDirection : 'column'}}>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline/>
                <Grid className='serach-every' container spacing={4} px={2}>
                <Navbar/>
                {viewSection !== "matching_status" && viewSection !== "companies" &&
                <Cards/>
                  }
                {viewSection !== 'companies' && <MatchingStatus setViewSection={setViewSection} section={viewSection} handleViewAll={handleViewAll}/>}
                {viewSection !== "matching_status" && <Companies list={list} setViewSection={setViewSection} section={viewSection} handleViewAll={handleViewAll}/>}
                </Grid>
            </Box>
        </Main>
      </Box>
    </Landing>
  );
}

export default dashboard;

