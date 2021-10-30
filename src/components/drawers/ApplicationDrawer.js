import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Hidden } from "@material-ui/core";
import ApplicationDrawerInner from "./ApplicationDrawerInner";

export default function ApplicationDrawer(props) {
  const theme = useTheme()
  const useStyles = makeStyles({
    paper: {
      background: theme.palette.background.default,
      width: 256
    },
  });
  const classes = useStyles();

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <React.Fragment>
      <Hidden mdUp implementation="css">
        <Drawer
          anchor="left"
          variant="temporary"
          container={container}
          open={props.active}
          onClose={props.toggleDrawer(false)}
          classes={{ paper: classes.paper }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <ApplicationDrawerInner />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.paper }}
        >
          <ApplicationDrawerInner />
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}
