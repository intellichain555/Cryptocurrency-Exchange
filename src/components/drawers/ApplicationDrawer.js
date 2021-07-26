import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import {FormControl, Input} from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import {InputAdornment} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import logoIcon from "@assets/logo-icon.svg";
import Box from '@material-ui/core/Box'
import palette from "../../lib/theme/palette";

function search() {
  return;
}

export default function ApplicationDrawer(props) {
  const theme = useTheme()

  const useStyles = makeStyles({
    container: {
      height: '100%',
    },
    paper: {
      background: theme.palette.background.default,
    },
    list: {
      width: 250,
    },
    listItem: {
      margin: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      button: {
        '&:hover': {
          color: 'red'
        }
      }
    },
    fullList: {
      width: 'auto',
    },
  });

  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        {['Home', 'Exchange', 'Prices', 'Wallets', 'Promotions', 'Activities', 'Notifications', 'Settings'].map((text, index) => (
          <ListItem button key={text} classes={{ root: classes.listItem }}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={props.active}
        onClose={props.toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <Box
          p={2}
          height="100%"
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
            classes={{ root: classes.container }}
          >
            <Grid
              item
            >
              <Grid
                item
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <img src={logoIcon} className="App-logo" alt="logo" width={40} />
                </Grid>
                <Grid item>
                  <IconButton
                    color="delete"
                    aria-label="View Notifications"
                  >
                    <NotificationsNoneIcon />
                  </IconButton>
                  <IconButton
                    color="white"
                    aria-label="View Notifications"
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
              >
                <Box mt={3}>
                  {list('left')}
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <FormControl>
                <Input
                  placeholder="Search"
                  variant="filled"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={search}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{
                    disableUnderline: true
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
