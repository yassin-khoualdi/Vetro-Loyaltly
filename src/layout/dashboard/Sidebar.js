import React from 'react';
import useStyle from './GeneralJSXstyling';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './GeneralJSXstyling';
import Button from '@material-ui/core/Button';


const Sidebar = (props) => {
	  const { container } = props;
	  const classes = useStyles();
	  const theme = useTheme();
	  const [mobileOpen, setMobileOpen] = React.useState(false);

	  const logOut = () => {
		  localStorage.removeItem('user');
		  props.props.history.push('/');
	  }

	  const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	  };
	  
	  const loadPage = (ev,text) => {
		  console.log(ev)
		  switch(text) {
			  case 'Register/Create Store':
				props.props.history.push('/dashboard/create-store');
				break;
				
			  case 'View Registered Stores':
				props.props.history.push('/dashboard/view-registered-stores');
        break;
        
        case 'Register/Create Loyalty Member':
				props.props.history.push('/dashboard/create-loyalty-member');
				break;
				
			  case 'View Registered Loyalty Members':
				props.props.history.push('/dashboard/view-registered-loyalty-members');
        break;
        
        case 'Assign Points Loyalty Member':
				props.props.history.push('/dashboard/assign-points-loyalty-member');
				break;
				
			  case 'View Loyalty Member Points History':
				props.props.history.push('/dashboard/view-loyalty-member-points-history');
        break;
        
        case 'View Loyalty Member Points Balance':
				props.props.history.push('/dashboard/view-loyalty-member-points-balance');
				break;
				
			  default:
				break;
		  }
		  //console.log('You clicked me');
	  }

	  const drawer = (
		<div>
		  <div className={classes.toolbar} />
		  <Divider />
		  <List>
			{['Register/Create Store','View Registered Stores','Register/Create Loyalty Member','View Registered Loyalty Members','Assign Points Loyalty Member','View Loyalty Member Points History','View Loyalty Member Points Balance'].map((text, index) => (
			  <ListItem button key={text} onClick={(ev) => loadPage(ev,text)}>
				<ListItemText primary={text} />
			  </ListItem>
			))}
		  </List>
		  <Divider />
		  
		</div>
	  );
    return (
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Vetro Loyalty platform
          </Typography>
		  
		  <Button color="inherit" onClick={logOut}>Logout</Button>
		  
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
	  </div>
    );
}
export default Sidebar;