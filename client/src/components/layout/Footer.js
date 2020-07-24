import React from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container'
import { ListItem, responsiveFontSizes } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { styled } from '@material-ui/styles';
import { Visibility } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={appBar}>
         <Container fixed>
        <Toolbar>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
         <ListItem> <Link to='/'style={get} >Get Started</Link> </ListItem>
         <ListItem><Link to='/team' style={connect}>Connect with Us</Link>  </ListItem> 


         <ListItem> <Link to='/elements' style={work}>Work with Us</Link>  </ListItem>
         <InstagramIcon></InstagramIcon>
         <TwitterIcon></TwitterIcon>
         <FacebookIcon></FacebookIcon>
         <GitHubIcon></GitHubIcon>
         <ListItem> <Link to='/'style={about} >About Us</Link> </ListItem>
         <ListItem><Link to='/team' style={privacy}>Privacy Policy </Link>  </ListItem> 
         <ListItem><Link to='/team' style={faq}>FAQ </Link>  </ListItem> 
         <ListItem><Link to='/team' style={tandc}>Terms And Conditions </Link>  </ListItem> 

          </div>
        </Toolbar>

        </Container>
 
      </AppBar>
      
    </div>
  );
}

const companyName ={
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "26px",
  letterSpacing:"1px",
  // textTransform: "uppercase" ,
  
}

const get = {
  display: "grid",
  position: "relative",
  top: "8px",
  right: "680px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const connect = {
  position: "absolute",
  top: "15px",
  right: "360px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const work = {
  position: "absolute",
  top: "15px",
  right: "0px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}


const about = {
  position: "absolute",
  top: "50px",
  right: "875px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const privacy = {
  position: "absolute",
  top: "50px",
  right: "180px",
  width: "190px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const faq = {
  position: "absolute",
  top: "80px",
  right: "920px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const tandc = {
  position: "absolute",
  top: "80px",
  right: "260px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}


const appBar =
{
  backgroundColor: "Gray" 
}

export default  PrimarySearchAppBar