import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from '../reduxSlice/themeSlice';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const drawerWidth = 240;
const navItems = [
    {
        name:'Home', 
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Contact',
        path:'/contact'
    }
];

function Header(props) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log("theme in header", theme)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{textDecoration:"none"}}>Redux Examples</Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to={item.path} key={item.name} style={{textDecoration:"none"}}>
                    <ListItemText  primary={item.name} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign:"justify" }}
          >
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
            Redux
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'  } }}>
            <Button onClick={() => dispatch(toggleTheme(theme.theme === 'light' ? 'dark' : 'light'))}>
              {theme.theme === 'light' ? <LightModeIcon sx={{verticalAlign:"middle", color:'white'}} /> : <DarkModeIcon sx={{verticalAlign:"middle", color:'black'}}/>}
            </Button>
            {navItems.map((item) => (
               <Link to={item.path} key={item.name} style={{textDecoration:"none", color:"white"}}>
                    <Button  key={item.name} sx={{ color: '#fff' }}>
                        {item.name}
                    </Button>
               </Link> 
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
