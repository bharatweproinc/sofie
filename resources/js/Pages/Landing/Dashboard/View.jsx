import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Constants from './Constant';
import TextField from '@mui/material/TextField'
import { Grid, Button, Link, useMediaQuery, Collapse } from '@mui/material';
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
import { blue } from '@mui/material/colors';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const rows = [
  createData('Company 1', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Nita Kamil", "nitakamil@email.comm",),
  createData('Company 2', 'Anam', 'Donny', 'Lina Rahman', .0, "123456789B", "Adam Ang", "angadam@email.comm",),
  createData('Company 4', 'Anam', 'Donny', 'Lina Rahman', .0, "782665982C", "Niken", "nikenn@email.comm",),
  createData('Company 5', 'Anam', 'Donny', 'Lina Rahman', .0, "729832968D", "Donny", "donnys@email.comm",),
  createData('Company 6', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
  createData('Company 7', 'Anam', 'Donny', 'Lina Rahman', .0, "1231212", "Test 1", "nitakamil@email.comm",),
];

function createData(company_name, calories, fat, carbs, protein, uen_number, name, email) {
  return { company_name, calories, fat, carbs, protein, uen_number, name, email };
}

function dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(true);
  const [openItems, setOpenItems] = React.useState({});


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);


  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FAFAFA' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}  >
        <Toolbar>


        </Toolbar>
      </AppBar> */}
      {isMobile && (
        <AppBar position="fixed" className='mobile_hamburger_header'>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{justifyContent:'flex-start'}}>
          <img src={Sofie} />
          {isMobile && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        {/* <List>
          {Constants.menuItem.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <List>
        {Constants.menuItem.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => item.subItems ? handleClick(item.id) : null}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {item.subItems ? (openItems[item.id] ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItemButton key={subItem.id} sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <CircleIcon sx={{ fontSize: 8 }}/>
                        </ListItemIcon>
                      <ListItemText primary={subItem.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      </Drawer>

      <Main open={open}>
        {/* <DrawerHeader /> */}

        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          {/* <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <img src='./images/logo.png' />
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {Constants.menuItem.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer> */}

          <Grid className='serach-every' container spacing={4} px={8}>
            <Grid className='flex justify-between align-middle gap-10 relative' item lg={12}>
              <TextField
                startIcon="<SearchSharpIcon/>"
                size='small'
                sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%', height: '100%', borderWidth: '0 !important' }}
                //  variant='outlined'
                placeholder='Search everything here'
              />
              <Box className="flex align-middle justify-end">
                <Button variant="text" color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#434343" stroke-width="2" />
                    <circle cx="12" cy="18" r="0.5" fill="#434343" stroke="#434343" />
                    <path d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10" stroke="#434343" stroke-width="2" />
                  </svg>
                </Button>
                <Button variant="text" color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                    <path d="M6.44784 10.9694C6.76219 8.14032 9.15349 6 12 6V6C14.8465 6 17.2378 8.14032 17.5522 10.9694L17.804 13.2356C17.8072 13.2645 17.8088 13.279 17.8104 13.2933C17.9394 14.4169 18.3051 15.5005 18.8836 16.4725C18.8909 16.4849 18.8984 16.4973 18.9133 16.5222L19.4914 17.4856C20.0159 18.3599 20.2782 18.797 20.2216 19.1559C20.1839 19.3946 20.061 19.6117 19.8757 19.7668C19.5971 20 19.0873 20 18.0678 20H5.93223C4.91268 20 4.40291 20 4.12434 19.7668C3.93897 19.6117 3.81609 19.3946 3.77841 19.1559C3.72179 18.797 3.98407 18.3599 4.50862 17.4856L5.08665 16.5222C5.10161 16.4973 5.10909 16.4849 5.11644 16.4725C5.69488 15.5005 6.06064 14.4169 6.18959 13.2933C6.19123 13.279 6.19283 13.2645 6.19604 13.2356L6.44784 10.9694Z" stroke="#434343" stroke-width="2" />
                    <path d="M8 20C8 20.5253 8.10346 21.0454 8.30448 21.5307C8.5055 22.016 8.80014 22.457 9.17157 22.8284C9.54301 23.1999 9.98396 23.4945 10.4693 23.6955C10.9546 23.8965 11.4747 24 12 24C12.5253 24 13.0454 23.8965 13.5307 23.6955C14.016 23.4945 14.457 23.1999 14.8284 22.8284C15.1999 22.457 15.4945 22.016 15.6955 21.5307C15.8965 21.0454 16 20.5253 16 20" stroke="#434343" stroke-width="2" stroke-linecap="round" />
                    <circle cx="22.5" cy="3.5" r="3.5" fill="#FF0000" />
                  </svg>
                </Button>
                <img style={{ maxWidth: '32px !important', padding: '12px' }} src={Men} alt="" />
              </Box>
            </Grid>

            <Grid className='flex flex-wrap justify-between' sx={{ rowGap: '10px' }} item lg={5} md={5}>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>10</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.99986 6.00019H2.66485C1.00984 6.00019 0.329837 4.82518 1.15984 3.39017L1.82984 2.23517L2.49985 1.08016C3.32985 -0.354846 4.68486 -0.354846 5.51486 1.08016L6.18487 2.23517L6.85487 3.39017C7.68487 4.82518 7.00487 6.00019 5.34986 6.00019H3.99986Z" fill="#0ECB81" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>+28</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1}>Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#EF5D94' }} className='rounded-icon'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4.00195C18.175 4.01395 19.353 4.11095 20.121 4.87895C21 5.75795 21 7.17195 21 9.99995V16C21 18.829 21 20.243 20.121 21.122C19.243 22 17.828 22 15 22H9C6.172 22 4.757 22 3.879 21.122C3 20.242 3 18.829 3 16V9.99995C3 7.17195 3 5.75795 3.879 4.87895C4.647 4.11095 5.825 4.01395 8 4.00195" stroke="white" stroke-width="1.5" />
                    <path d="M8 14H16M7 10.5H17M9 17.5H15" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8 3.5C8 3.10218 8.15804 2.72064 8.43934 2.43934C8.72064 2.15804 9.10218 2 9.5 2H14.5C14.8978 2 15.2794 2.15804 15.5607 2.43934C15.842 2.72064 16 3.10218 16 3.5V4.5C16 4.89782 15.842 5.27936 15.5607 5.56066C15.2794 5.84196 14.8978 6 14.5 6H9.5C9.10218 6 8.72064 5.84196 8.43934 5.56066C8.15804 5.27936 8 4.89782 8 4.5V3.5Z" stroke="white" stroke-width="1.5" />
                  </svg>
                </div>
              </Grid>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>50</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00014 -0.000186443H5.33515C6.99016 -0.000186443 7.67016 1.17482 6.84016 2.60983L6.17016 3.76483L5.50015 4.91984C4.67015 6.35485 3.31514 6.35485 2.48514 4.91984L1.81513 3.76483L1.14513 2.60983C0.315127 1.17482 0.995131 -0.000186443 2.65014 -0.000186443L4.00014 -0.000186443Z" fill="#DB1E2A" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>+12</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1} >Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#14C6A4' }} className='rounded-icon'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 0H10.7C10.036 0 9.463 3.72529e-08 9.004 0.062C8.513 0.128 8.041 0.277 7.659 0.659C7.277 1.041 7.128 1.513 7.062 2.004C7 2.463 7 3.036 7 3.701V6.128C6.7591 6.04299 6.50546 5.9997 6.25 6H3.25C2.95453 6 2.66194 6.0582 2.38896 6.17127C2.11598 6.28434 1.86794 6.45008 1.65901 6.65901C1.45008 6.86794 1.28434 7.11598 1.17127 7.38896C1.0582 7.66195 1 7.95453 1 8.25V20H0.75C0.551088 20 0.360322 20.079 0.21967 20.2197C0.0790177 20.3603 0 20.5511 0 20.75C0 20.9489 0.0790177 21.1397 0.21967 21.2803C0.360322 21.421 0.551088 21.5 0.75 21.5H20.75C20.9489 21.5 21.1397 21.421 21.2803 21.2803C21.421 21.1397 21.5 20.9489 21.5 20.75C21.5 20.5511 21.421 20.3603 21.2803 20.2197C21.1397 20.079 20.9489 20 20.75 20H20.5V13.25C20.5 12.6533 20.2629 12.081 19.841 11.659C19.419 11.2371 18.8467 11 18.25 11H15.25C14.987 11 14.735 11.045 14.5 11.128V3.701C14.5 3.036 14.5 2.463 14.438 2.004C14.372 1.513 14.223 1.041 13.841 0.659C13.459 0.277 12.988 0.128 12.496 0.062C12.037 3.72529e-08 11.464 0 10.799 0M18.999 20V13.25C18.999 13.0511 18.92 12.8603 18.7793 12.7197C18.6387 12.579 18.4479 12.5 18.249 12.5H15.249C15.0501 12.5 14.8593 12.579 14.7187 12.7197C14.578 12.8603 14.499 13.0511 14.499 13.25V20H18.999ZM12.999 20V3.75C12.999 3.022 12.997 2.55 12.951 2.204C12.907 1.879 12.836 1.777 12.779 1.72C12.722 1.663 12.62 1.592 12.295 1.548C11.948 1.502 11.477 1.5 10.749 1.5C10.021 1.5 9.549 1.502 9.203 1.548C8.878 1.592 8.776 1.663 8.719 1.72C8.662 1.777 8.591 1.879 8.547 2.204C8.501 2.551 8.499 3.022 8.499 3.75V20H12.999ZM6.999 20V8.25C6.999 8.05109 6.91998 7.86032 6.77933 7.71967C6.63868 7.57902 6.44791 7.5 6.249 7.5H3.249C3.05009 7.5 2.85932 7.57902 2.71867 7.71967C2.57802 7.86032 2.499 8.05109 2.499 8.25V20H6.999Z" fill="white" />
                  </svg>
                </div>
              </Grid>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>20</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00014 -0.000186443H5.33515C6.99016 -0.000186443 7.67016 1.17482 6.84016 2.60983L6.17016 3.76483L5.50015 4.91984C4.67015 6.35485 3.31514 6.35485 2.48514 4.91984L1.81513 3.76483L1.14513 2.60983C0.315127 1.17482 0.995131 -0.000186443 2.65014 -0.000186443L4.00014 -0.000186443Z" fill="#DB1E2A" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>-21</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1} >Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#D786E9' }} className='rounded-icon'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1419 22.4569C11.4177 23.7323 12.5826 23.7224 13.8486 22.4569L15.3953 20.9196C15.556 20.7691 15.6966 20.7087 15.9074 20.7087H18.0773C19.8751 20.7087 20.7087 19.885 20.7087 18.0773V15.9074C20.7087 15.6966 20.7691 15.556 20.9196 15.3953L22.4466 13.8481C23.7323 12.5826 23.722 11.4177 22.4466 10.1419L20.9196 8.59472C20.7691 8.44472 20.7087 8.29386 20.7087 8.09286V5.91315C20.7087 4.12515 19.885 3.28172 18.0773 3.28172H15.9074C15.6966 3.28172 15.556 3.23115 15.3953 3.08029L13.8481 1.54386C12.5826 0.268003 11.4177 0.278288 10.1419 1.54386L8.59472 3.08072C8.44472 3.23115 8.29386 3.28129 8.09286 3.28129H5.91315C4.11529 3.28129 3.28172 4.105 3.28172 5.91272V8.09286C3.28172 8.29386 3.23115 8.44429 3.08029 8.59515L1.54386 10.1423C0.268003 11.4177 0.278288 12.5826 1.54386 13.8486L3.08072 15.3953C3.23115 15.556 3.28129 15.6966 3.28129 15.9074V18.0773C3.28129 19.8751 4.11529 20.7087 5.91272 20.7087H8.09286C8.29386 20.7087 8.44429 20.7691 8.59515 20.9196L10.1419 22.4569ZM11.2669 21.3314L9.37857 19.4329C9.15743 19.2023 8.92643 19.1114 8.61529 19.1114H5.91315C5.01915 19.1114 4.87857 18.9713 4.87857 18.0773V15.3751C4.87857 15.0739 4.78815 14.8429 4.567 14.6217L2.66843 12.7334C2.03586 12.0906 2.03586 11.9097 2.66843 11.2669L4.567 9.37857C4.78815 9.15743 4.87857 8.92643 4.87857 8.61529V5.91315C4.87857 5.00886 5.00929 4.87857 5.91315 4.87857H8.61529C8.92643 4.87857 9.15743 4.798 9.37815 4.567L11.2669 2.66843C11.9097 2.03586 12.0906 2.03586 12.7334 2.66843L14.6217 4.567C14.8429 4.79843 15.0739 4.87857 15.3751 4.87857H18.0773C18.9713 4.87857 19.1119 5.01915 19.1119 5.91315V8.61529C19.1119 8.92643 19.2121 9.15743 19.4333 9.37815L21.3319 11.2669C21.9644 11.9097 21.9644 12.0906 21.3319 12.7334L19.4333 14.6217C19.2121 14.8429 19.1119 15.0739 19.1119 15.3751V18.0773C19.1119 18.9713 18.9713 19.1119 18.0773 19.1119H15.3751C15.0739 19.1119 14.8429 19.2019 14.6217 19.4333L12.7334 21.3319C12.0906 21.9644 11.9097 21.964 11.2669 21.3314ZM10.4333 16.8121C10.7247 16.8121 10.9454 16.6913 11.0963 16.5104L16.6711 8.716C16.7813 8.55529 16.8417 8.37443 16.8417 8.20386C16.8417 7.76157 16.5001 7.41015 16.0381 7.41015C15.7069 7.41015 15.526 7.52072 15.325 7.81215L10.4029 14.7421L7.86143 11.9397C7.69086 11.749 7.50015 11.6689 7.249 11.6689C6.757 11.6689 6.40515 12.0001 6.40515 12.4621C6.40515 12.6631 6.47543 12.8539 6.61643 12.9944L9.81057 16.5503C9.961 16.711 10.1521 16.8121 10.4333 16.8121Z" fill="white" />
                  </svg>
                </div>
              </Grid>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>5</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.99986 6.00019H2.66485C1.00984 6.00019 0.329837 4.82518 1.15984 3.39017L1.82984 2.23517L2.49985 1.08016C3.32985 -0.354846 4.68486 -0.354846 5.51486 1.08016L6.18487 2.23517L6.85487 3.39017C7.68487 4.82518 7.00487 6.00019 5.34986 6.00019H3.99986Z" fill="#0ECB81" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>+31</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1} >Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#80BDE3' }} className='rounded-icon'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.828 5.00131C11.9877 4.54886 12.0365 4.06471 11.9704 3.5895C11.9043 3.11428 11.7251 2.66185 11.448 2.27018C11.1709 1.8785 10.8038 1.55901 10.3777 1.33851C9.95159 1.11801 9.4788 1.00293 8.999 1.00293C8.5192 1.00293 8.04641 1.11801 7.62028 1.33851C7.19415 1.55901 6.82713 1.8785 6.55001 2.27018C6.27288 2.66185 6.09375 3.11428 6.02762 3.5895C5.9615 4.06471 6.01033 4.54886 6.17 5.00131C3.885 5.00931 2.666 5.09131 1.878 5.87931C1.09 6.66731 1.008 7.88631 1 10.1703C1.45237 10.0112 1.93629 9.9628 2.41121 10.0292C2.88613 10.0957 3.33819 10.275 3.72952 10.5522C4.12085 10.8294 4.44003 11.1963 4.66031 11.6223C4.88058 12.0482 4.99554 12.5208 4.99554 13.0003C4.99554 13.4799 4.88058 13.9524 4.66031 14.3784C4.44003 14.8043 4.12085 15.1713 3.72952 15.4484C3.33819 15.7256 2.88613 15.9049 2.41121 15.9714C1.93629 16.0378 1.45237 15.9894 1 15.8303C1.008 18.1143 1.09 19.3333 1.878 20.1213C2.666 20.9093 3.885 20.9913 6.169 20.9993C6.00987 20.5469 5.96149 20.063 6.02794 19.5881C6.09438 19.1132 6.2737 18.6611 6.55088 18.2698C6.82805 17.8785 7.19499 17.5593 7.62095 17.339C8.0469 17.1187 8.51946 17.0038 8.999 17.0038C9.47854 17.0038 9.9511 17.1187 10.3771 17.339C10.803 17.5593 11.17 17.8785 11.4471 18.2698C11.7243 18.6611 11.9036 19.1132 11.9701 19.5881C12.0365 20.063 11.9881 20.5469 11.829 20.9993C14.113 20.9913 15.332 20.9093 16.12 20.1213C16.908 19.3333 16.99 18.1143 16.998 15.8293C17.4504 15.989 17.9346 16.0378 18.4098 15.9717C18.885 15.9056 19.3375 15.7264 19.7291 15.4493C20.1208 15.1722 20.4403 14.8052 20.6608 14.379C20.8813 13.9529 20.9964 13.4801 20.9964 13.0003C20.9964 12.5205 20.8813 12.0477 20.6608 11.6216C20.4403 11.1955 20.1208 10.8284 19.7291 10.5513C19.3375 10.2742 18.885 10.0951 18.4098 10.0289C17.9346 9.96281 17.4504 10.0116 16.998 10.1713C16.99 7.88631 16.908 6.66731 16.12 5.87931C15.332 5.09031 14.113 5.00931 11.828 5.00131Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </Grid>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>30</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.99986 6.00019H2.66485C1.00984 6.00019 0.329837 4.82518 1.15984 3.39017L1.82984 2.23517L2.49985 1.08016C3.32985 -0.354846 4.68486 -0.354846 5.51486 1.08016L6.18487 2.23517L6.85487 3.39017C7.68487 4.82518 7.00487 6.00019 5.34986 6.00019H3.99986Z" fill="#0ECB81" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>+12</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1} >Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#FE802C' }} className='rounded-icon'>
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" stroke-width="1.5" />
                    <path d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z" stroke="white" stroke-width="1.5" />
                  </svg>
                </div>
              </Grid>
              <Grid className='flex justify-between rounded-lg border p-4 bg-white' item lg={5} md={5}>
                <div>
                  <p variant="body1" color="initial">To Review</p>
                  <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold' }}>15</Typography>
                  <Box className="flex text-xs items-center pt-2">
                    <svg width="14" height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00014 -0.000186443H5.33515C6.99016 -0.000186443 7.67016 1.17482 6.84016 2.60983L6.17016 3.76483L5.50015 4.91984C4.67015 6.35485 3.31514 6.35485 2.48514 4.91984L1.81513 3.76483L1.14513 2.60983C0.315127 1.17482 0.995131 -0.000186443 2.65014 -0.000186443L4.00014 -0.000186443Z" fill="#DB1E2A" />
                    </svg>
                    <p sx={{ color: '#0ECB81' }}>-15</p>
                    <Typography variant="body1" className='text-gray-400' sx={{ fontSize: '12px !important' }} ml={1} >Since last Weeks</Typography>
                  </Box>
                </div>
                <div style={{ backgroundColor: '#FFB817' }} className='rounded-icon'>
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7635 2.5262C14.6831 2.43323 14.5822 2.3601 14.4689 2.31252C14.3556 2.26493 14.2327 2.24418 14.1101 2.25187C13.9874 2.25957 13.8681 2.29551 13.7616 2.35688C13.6551 2.41826 13.5642 2.50341 13.496 2.6057L13.1495 3.1262L12.341 4.7432C12.077 5.27067 11.6714 5.71429 11.1697 6.02449C10.668 6.33468 10.0899 6.49922 9.5 6.4997H8C7.80109 6.4997 7.61032 6.42068 7.46967 6.28003C7.32902 6.13938 7.25 5.94861 7.25 5.7497C7.25 5.55079 7.32902 5.36002 7.46967 5.21937C7.61032 5.07872 7.80109 4.9997 8 4.9997H9.5C10.1345 4.9997 10.715 4.6427 11 4.0742L11.8295 2.4152L11.8745 2.3357L12.2495 1.7762C12.4457 1.48187 12.7073 1.23682 13.0137 1.06013C13.3202 0.883435 13.6633 0.779878 14.0163 0.757523C14.3693 0.735168 14.7228 0.794618 15.0491 0.931242C15.3754 1.06787 15.6657 1.27797 15.8975 1.5452C16.4225 2.1527 16.688 2.9432 16.6355 3.7442L16.6235 3.9257C16.5684 4.73637 16.4107 5.53677 16.154 6.3077L16.0895 6.4997H18.749C19.2299 6.49933 19.7026 6.62497 20.1198 6.86411C20.5371 7.10325 20.8844 7.44755 21.1272 7.8627C21.37 8.27786 21.4997 8.74938 21.5036 9.23029C21.5074 9.71121 21.3851 10.1847 21.149 10.6037L20.972 10.9187C21.2615 11.9237 20.99 13.0202 20.2355 13.7747L20.093 13.9172C20.462 15.4022 19.718 16.9307 18.3515 17.5682L18.1865 18.0632C17.9982 18.6268 17.6375 19.117 17.1554 19.4645C16.6733 19.812 16.0943 19.9992 15.5 19.9997H14.1185C12.9378 19.9983 11.7734 19.7237 10.7165 19.1972C9.61574 18.6474 8.61125 17.923 7.742 17.0522L7.469 16.7807C7.32817 16.6401 7.24897 16.4493 7.24883 16.2502C7.24869 16.0512 7.32762 15.8603 7.46825 15.7194C7.60888 15.5786 7.7997 15.4994 7.99872 15.4993C8.19774 15.4991 8.38867 15.5781 8.5295 15.7187L8.8025 15.9917C9.55777 16.7482 10.4306 17.3773 11.387 17.8547C12.2352 18.2771 13.1695 18.4979 14.117 18.4997H15.5C15.7793 18.4991 16.0514 18.411 16.278 18.2476C16.5046 18.0843 16.6742 17.854 16.763 17.5892L17.0315 16.7852C17.0705 16.6678 17.1364 16.5611 17.2239 16.4736C17.3113 16.3861 17.4181 16.3202 17.5355 16.2812C18.395 15.9947 18.8735 15.0782 18.617 14.2082L18.539 13.9412C18.4989 13.8027 18.4966 13.6559 18.5322 13.5162C18.5678 13.3764 18.64 13.2487 18.7415 13.1462L19.175 12.7142C19.376 12.5144 19.5114 12.2581 19.5631 11.9794C19.6148 11.7007 19.5804 11.4128 19.4645 11.1542C19.4171 11.0475 19.3952 10.9311 19.4007 10.8145C19.4061 10.6978 19.4388 10.584 19.496 10.4822L19.841 9.8672C19.948 9.67649 20.0032 9.46113 20.0013 9.24247C19.9993 9.02382 19.9402 8.80947 19.8298 8.62071C19.7195 8.43195 19.5616 8.27533 19.372 8.16639C19.1824 8.05746 18.9677 7.99999 18.749 7.9997H15.809C15.6035 7.99984 15.4008 7.9511 15.2179 7.85749C15.0349 7.76389 14.8768 7.6281 14.7566 7.46135C14.6365 7.2946 14.5577 7.10166 14.5268 6.89846C14.4959 6.69526 14.5138 6.48763 14.579 6.2927L14.732 5.8322C14.9478 5.18256 15.0803 4.50818 15.1265 3.8252L15.1385 3.6437C15.1661 3.23628 15.0313 2.83451 14.7635 2.5262ZM5 5.9702C5 5.89064 4.96839 5.81433 4.91213 5.75807C4.85587 5.70181 4.77956 5.6702 4.7 5.6702H2.3C2.22044 5.6702 2.14413 5.70181 2.08787 5.75807C2.03161 5.81433 2 5.89064 2 5.9702V16.0292C2 16.1942 2.135 16.3292 2.3 16.3292H4.7C4.77956 16.3292 4.85587 16.2976 4.91213 16.2413C4.96839 16.1851 5 16.1088 5 16.0292V5.9702ZM2 4.2497C1.172 4.2497 0.5 4.8857 0.5 5.6702V16.3292C0.5 17.1137 1.172 17.7497 2 17.7497H5C5.828 17.7497 6.5 17.1137 6.5 16.3292V5.6702C6.5 4.8857 5.828 4.2497 5 4.2497H2Z" fill="white" />
                  </svg>
                </div>
              </Grid>
            </Grid>

            <Grid className='flex w-full' item lg={7} md={7}>
              <TableContainer component={Paper}>
                <Box p={2} className="flex justify-between">
                  <Typography variant="h5" color="initial">Matching Status</Typography>
                  <Link
                    href="#"
                    color={"blue"}
                    variant="body1"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View all
                  </Link>
                </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F8F9FB' }}>
                      <TableCell>
                        <Box className="flex gap-3">
                          Company Name
                          <div className='grid'>
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
                          Area 1
                          <div className='grid'>
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
                          Area 2
                          <div className='grid'>
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
                          Area 3
                          <div className='grid'>
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
                          Area 4
                          <div className='grid'>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                            </svg>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                            </svg>
                          </div>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                      >
                        <TableCell component="th" scope="row">
                          {row.company_name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.fat}</TableCell>
                        <TableCell align="left">{row.carbs}</TableCell>
                        <TableCell align="left">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* companies-veiw all-------- */}
            <Grid className='flex' item lg={12} md={12}>
              <TableContainer component={Paper}>
                <Box p={2} className="flex justify-between">
                  <Typography variant="h5" color="initial">Companies</Typography>
                  <Link
                    href="#"
                    color={"blue"}
                    variant="body1"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    View all
                  </Link>
                </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F8F9FB' }}>
                      <TableCell>
                        <Box className="flex gap-3">
                          Company Name
                          <div className='grid'>
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
                          UEN Number
                          <div className='grid'>
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
                          Contact Person
                          <div className='grid'>
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
                          Email
                          <div className='grid'>
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
                          Actions
                          <div className='grid'>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#E4E5E7" />
                            </svg>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311171 1.60999C-0.195026 0.952425 0.273738 0 1.10358 0L10.8964 0C11.7263 0 12.195 0.952425 11.6888 1.60999L6.79241 7.97063Z" fill="#E4E5E7" />
                            </svg>
                          </div>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                      >
                        <TableCell component="th" scope="row">
                          {row.company_name}
                        </TableCell>
                        <TableCell align="left">{row.uen_number}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">
                          <Box sx={{ gap: '10px' }} className="flex">
                            {
                              Constants.icons.map((item) => {
                                return (
                                  item.icon
                                )
                              })
                            }
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </TableContainer>
            </Grid>

          </Grid>

        </Box>

      </Main>
    </Box>
  );
}

export default dashboard;

