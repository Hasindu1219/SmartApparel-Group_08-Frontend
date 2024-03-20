import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Groups2Icon from '@mui/icons-material/Groups2';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../appStore';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
 // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  // const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30} />
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        
          <Divider />
          <List>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Overview" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/accounting")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Accounting" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/sales")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <LocalAtmIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sales" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/customers")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <Groups2Icon />
                  </ListItemIcon>
                  <ListItemText primary="Customers" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/orders")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <ShoppingCartCheckoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Orders" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/employees")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <EngineeringIcon />
                  </ListItemIcon>
                  <ListItemText primary="Employees" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              
              <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/suppliers")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <LocalShippingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Supplier" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/inventory")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inventory" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/login")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
        

      </Drawer>
    </Box>
  );
}