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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const rows = [
  createData('Company 1', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Nita Kamil", "nitakamil@email.comm",),
  createData('Company 2', 'Anam', 'Donny', 'Lina Rahman', .0, "123456789B", "Adam Ang", "angadam@email.comm",),
  createData('Company 4', 'Anam', 'Donny', 'Lina Rahman', .0, "782665982C", "Niken", "nikenn@email.comm",),
  createData('Company 5', 'Anam', 'Donny', 'Lina Rahman', .0, "729832968D", "Donny", "donnys@email.comm",),
  createData('Company 6', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
  createData('Company 7', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
  createData('Company 8', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
  createData('Company 9', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
  createData('Company 10', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),

];

function createData(company_name, calories, fat, carbs, protein, uen_number, name, email) {
  return { company_name, calories, fat, carbs, protein, uen_number, name, email };
}

function dashboard() {
  const theme = useTheme();

    // const [isViewAll , setIsViewAll] = useState(false);
    const [viewSection , setViewSection] = useState('')
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleViewAll = (section)=>{
    setViewSection(section)
  }

  return (
    <SideBar>
      <Box sx={{ display: 'flex', backgroundColor: '#FAFAFA' }}>
        <CssBaseline />
        {/* <SideBar/> */}
        {/* Content Box   */}

        <Main open={open} sx={{display : 'flex', flexDirection : 'column'}}>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline/>
                <Grid className='serach-every' container spacing={4} px={2}>
                <Navbar/>
                {viewSection !== "matching_status" && viewSection !== "companies" &&
                <Cards/>
                  }

                {viewSection !== 'companies' && <MatchingStatus setViewSection={setViewSection} section={viewSection} handleViewAll={handleViewAll}/>}

                {viewSection !== "matching_status" && <Companies setViewSection={setViewSection} section={viewSection} handleViewAll={handleViewAll}/>}
                </Grid>
            </Box>
        </Main>
      </Box>
    </SideBar>
  );
}

export default dashboard;

