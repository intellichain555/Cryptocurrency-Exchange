import React from 'react';
import { styled } from '@mui/material/styles'
import { Drawer, Hidden } from '@mui/material'
import ApplicationDrawerInner from "./ApplicationDrawerInner";

export default function ApplicationDrawer(props) {
  const container = window !== undefined ? () => window.document.body : undefined;

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    background: theme.palette.background.default,
    width: 256
  }))

  return (
    <React.Fragment>
      <Hidden mdUp implementation="css">
        <StyledDrawer
          anchor="left"
          variant="temporary"
          container={container}
          open={props.active}
          onClose={props.toggleDrawer(false)}
          ModalProps={{ keepMounted: true }}
        >
          <ApplicationDrawerInner />
        </StyledDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <StyledDrawer
          variant="permanent"
          open
        >
          <ApplicationDrawerInner />
        </StyledDrawer>
      </Hidden>
    </React.Fragment>
  );
}
