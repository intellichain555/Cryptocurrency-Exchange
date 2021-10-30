import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import logoIcon from "@assets/logo-icon.svg";
import logoFull from "@assets/logo-full.svg";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { FormControl, Hidden, Input, InputAdornment } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ApplicationDrawerNavigation from "./ApplicationDrawerNavigation"

function search() {
  return;
}

export default function ApplicationDrawerInner() {
  const theme = useTheme()
  const useStyles = makeStyles({
    container: {
      height: '100%',
    }
  });

  const classes = useStyles();

  return (
    (
      <Box
        p={2}
        height="100%"
        maxWidth="100%"
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          wrap="nowrap"
          height="100%"
          classes={{ root: classes.container }}
        >
          <Grid
            item
            style={{ maxWidth: '100%' }}
          >
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
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
                  aria-label="View Notifications"
                >
                  <NotificationsNoneIcon />
                </IconButton>
                <Hidden mdUp>
                  <IconButton
                    aria-label="View Notifications"
                  >
                    <CloseIcon />
                  </IconButton>
                </Hidden>
              </Grid>
            </Grid>
            <Grid
              item
            >
              <Box mt={3}>
                <ApplicationDrawerNavigation />
              </Box>
            </Grid>
          </Grid>
          <Hidden lgUp implementation="css">
            <Grid item>
              <FormControl>
                <Input
                  placeholder="Search"
                  variant="filled"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={search}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    )
  )
}
