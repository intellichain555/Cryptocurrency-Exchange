import React from "react";
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import logoIcon from '@assets/logo-icon.svg';
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SlideLeftIcon from '@icons/SlideLeft'
import ApplicationDrawer from '@components/drawers/ApplicationDrawer'
import {makeStyles, Hidden, FormControl, Input, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function ApplicationHeader() {
  const [state, setState] = React.useState({
    active: false
  })

  const toggleDrawer = (active) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, active });
  };

  const drawerWidth = 256

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginBottom: theme.spacing(3)
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      width: `calc(100% - ${drawerWidth}px`,
      marginLeft: drawerWidth
    }
  }))

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        className="application-header"
        m={3}
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box
                display={{ xs: 'block', md: 'none' }}
              >
                <img src={logoIcon} className="App-logo" alt="logo" width={40} />
              </Box>
              <Box
                display={{ xs: 'none', sm: 'block' }}
              >
                <FormControl>
                  <Input
                    placeholder="Search"
                    variant="filled"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <IconButton aria-label="View Notifications">
                <NotificationsNoneIcon />
              </IconButton>
              <Hidden mdUp>
                <IconButton
                  onClick={toggleDrawer(true)}
                >
                  <SlideLeftIcon color="white" />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <ApplicationDrawer active={ state.active } toggleDrawer={toggleDrawer} />
    </div>
  )
}
