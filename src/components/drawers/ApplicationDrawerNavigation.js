import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material"

import { Inbox, Mail } from "@mui/icons-material"

import React from "react";
import { styled } from "@mui/styles"
// import { makeStyles, useTheme } from "@mui/core/styles";

export default function ApplicationDrawerNavigation(props) {
  // const theme = useTheme()
  const anchor = 'top'
  // const useStyles = makeStyles({
  //   fullList: {
  //     width: 'auto',
  //     maxWidth: '100%',
  //   },
  //   list: {
  //     width: 250,
  //   },
  //   listItemRoot: {
  //     padding: "16px 20px",
  //     borderRadius: theme.shape.borderRadius,
  //     '&:hover, &:focus': {
  //       cursor: 'pointer'
  //     }
  //   },
  //   listItemColors: {
  //     root: {
  //       color: '#808191',
  //       backgroundColor: 'transparent',
  //     },
  //     button: {
  //       color: '#808191',
  //       backgroundColor: 'transparent',
  //     },
  //     selected: {
  //       backgroundColor: theme.palette.action.selected,
  //       color: theme.palette.primary.main,
  //     },
  //     '& > *': {
  //       color: '#808191',
  //       backgroundColor: 'transparent',
  //     },
  //     '&:hover, &:focus': {
  //
  //       '& > *': {
  //         backgroundColor: theme.palette.action.selected,
  //         color: theme.palette.primary.main,
  //       }
  //     },
  //   }
  // });

  const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    height: 20,
    width: 20,
    minWidth: 0,
    marginRight: theme.spacing(2)
  }))

  const StyledListItem = styled(ListItem)(({ theme }) => ({
    root: {
      color: '#808191',
      backgroundColor: 'transparent',
    },
    button: {
      color: '#808191',
      backgroundColor: 'transparent',
    },
    selected: {
      backgroundColor: theme.palette.action.selected,
      color: theme.palette.primary.main,
    },
    '& > *': {
      color: '#808191',
      backgroundColor: 'transparent',
    },
    '&:hover, &:focus': {

      '& > *': {
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.primary.main,
      }
    },
  }))

  const Root = styled('div')(({ theme }) => ({
    width: 250,
    ...(['top', 'bottom'].includes(anchor)) && {
      width: 'auto',
      maxWidth: '100%',
    }
  }))

  // const classes = useStyles();

  return (
    <Root role="presentation">
      <List>
        {['Home', 'Exchange', 'Prices', 'Wallets', 'Promotions', 'Activities', 'Notifications', 'Settings'].map((text, index) => (
          <StyledListItem
            key={text}
            button
          >
            <StyledListItemIcon>{ index % 2 === 0 ? <Inbox /> : <Mail /> }</StyledListItemIcon>
            <ListItemText primary={text} sx={{ fontWeight: 600 }} />
          </StyledListItem>
        ))}
      </List>
    </Root>
  )
}
