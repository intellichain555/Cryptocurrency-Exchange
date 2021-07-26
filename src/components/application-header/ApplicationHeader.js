import React from "react";
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import logoIcon from '@assets/logo-icon.svg';
import logoFull from '@assets/logo-full.svg';
import Box from '@material-ui/core/Box'
import SlideLeftIcon from '@icons/SlideLeft'
import ApplicationDrawer from '@components/drawers/ApplicationDrawer'

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

  return (
    <Box
      className="application-header" m={3}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Box
            display={{ xs: 'block', sm: 'none' }}
          >
            <img src={logoIcon} className="App-logo" alt="logo" width={40} />
          </Box>
          <Box
            display={{ xs: 'none', sm: 'block' }}
          >
            <img src={logoFull} alt="logo" width={134} />
          </Box>
        </Grid>
        <Grid item>
          <IconButton
            color="delete"
            aria-label="View Notifications"
          >
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton
            onClick={toggleDrawer(true)}
          >
            <SlideLeftIcon color="white" />
          </IconButton>
        </Grid>
      </Grid>

      <ApplicationDrawer active={ state.active } toggleDrawer={toggleDrawer}/>
    </Box>
  )
}
