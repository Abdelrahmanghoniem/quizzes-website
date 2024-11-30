import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
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
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  background: 'linear-gradient(135deg, #107ea6, #fcfcfc)', // Gradient background for Drawer
});

const closedMixin = (theme: Theme): CSSObject => ({
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
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedSection, setSelectedSection] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Get current location to highlight the selected page

  React.useEffect(() => {
    // Set the selected section based on the current URL
    const currentRoute = location.pathname.split('/')[1]; // Extract route name from URL
    setSelectedSection(currentRoute || 'Dashboard');
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ marginRight: 5 }, open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Coligo
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            Coligo
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
  {['Dashboard', 'Schedule', 'Courses', 'Gradebook', 'Performance', 'Announcements'].map((text) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={() => handleSectionClick(text)}
        sx={{
          minHeight: 48,
          px: 2.5,
          backgroundColor: selectedSection === text ? 'rgba(255, 245, 245, 0.1)' : 'transparent', // Subtle background
          borderLeft: selectedSection === text ? '4px solid #ffffff' : '4px solid transparent', // Light white indicator on the left
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly darker hover effect
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
            color: selectedSection === text ? '#107ea6' : 'inherit', // Optional: Highlight icon for the selected route
          }}
        >
          {text === 'Dashboard'  ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            color: selectedSection === text ? '#107ea6' : 'inherit', // Optional: Highlight text color
            opacity: open ? 1 : 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>



      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/Dashboard" element={<Typography>Dashboard Page</Typography>} />
          <Route path="/Schedule" element={<Typography>Schedule Page</Typography>} />
          <Route path="/Courses" element={<Typography>Courses Page</Typography>} />
          <Route path="/Gradebook" element={<Typography>Gradebook Page</Typography>} />
          <Route path="/Performance" element={<Typography>Performance Page</Typography>} />
          <Route path="/Announcements" element={<Typography>Announcements Page</Typography>} />
        </Routes>
      </Box>
    </Box>
  );
}
