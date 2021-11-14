import React from "react";
//////////////////// MUI
import {
  Grid,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Hidden,
  FormControl,
  Input,
  InputAdornment
} from '@mui/material'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from "@mui/icons-material/Search";

import { styled } from '@mui/styles'

// Application Components
import logoIcon from '@assets/logo-icon.svg';
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

  const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    marginBottom: theme.spacing(3)
  }))

  return (
    <Root>
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
    </Root>
  )
}
