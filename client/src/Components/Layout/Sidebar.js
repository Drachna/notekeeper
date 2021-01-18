import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { MdAlarm, MdNote, MdArchive, MdLabelOutline, MdDelete, MdList } from "react-icons/md";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Note from '../Note/note'
import DisplayNotes from '../DisplayNotes/DisplayNotes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    // flex:'30%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: theme.spacing(3),
    flexGrow: 1,
    padding: theme.spacing(3),
    //  ...theme.mixins.toolbar,

  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MdList />
          </IconButton>
          <Typography variant="h6" noWrap>
            Keeps
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MdList /> : <MdList />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
          >
            <ListItemIcon onClick={handleDrawerOpen}>{<MdNote className="icon" />}</ListItemIcon>
            <ListItemText primary="Notes" primaryTypographyProps={{ variant: "subtitle2", classes: { subtitle2: classes.listText } }} />
          </ListItem>
          <ListItem
          >
            <ListItemIcon>{<MdAlarm className="icon" />}</ListItemIcon>
            <ListItemText primary="Reminders" primaryTypographyProps={{ variant: "subtitle2" }} />
          </ListItem>
          <ListItem
          >
            <ListItemIcon>{<MdLabelOutline className="icon" />}</ListItemIcon>
            <ListItemText primary="Edit labels" primaryTypographyProps={{ variant: "subtitle2" }} />
          </ListItem>
          <ListItem

            to='/#archive'

          >
            <ListItemIcon>{<MdArchive className="icon" />}</ListItemIcon>
            <ListItemText primary="Archive" primaryTypographyProps={{ variant: "subtitle2" }} />
          </ListItem>
          <ListItem
          >
            <ListItemIcon>{<MdDelete className="icon" />}</ListItemIcon>
            <ListItemText primary="Trash" primaryTypographyProps={{ variant: "subtitle2" }} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column"
          justify="center"
          alignItems="center" >
          <Grid item xs={12} >
            <Note />

          </Grid>
          <Grid item xs={12} >
            <DisplayNotes />

          </Grid>
        </Grid>

      </main>
    </div>
  );
}