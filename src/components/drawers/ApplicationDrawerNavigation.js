import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function ApplicationDrawerNavigation(props) {
  const theme = useTheme()
  const anchor = 'top'
  const useStyles = makeStyles({
    fullList: {
      width: 'auto',
      maxWidth: '100%',
    },
    list: {
      width: 250,
    },
    listItemRoot: {
      padding: "16px 20px",
      borderRadius: theme.shape.borderRadius,
      '&:hover, &:focus': {
        cursor: 'pointer'
      }
    },
    listItemColors: {
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
    },
    listItemText: {
      fontWeight: 600
    },
    listItemIcon: {
      height: 20,
      width: 20,
      minWidth: 0,
      marginRight: theme.spacing(2)
    }
  });

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
        {['Home', 'Exchange', 'Prices', 'Wallets', 'Promotions', 'Activities', 'Notifications', 'Settings'].map((text, index) => (
          <ListItem
            key={text}
            classes={{
              root: classes.listItemRoot,
              button: classes.listItemButton
            }}
            className={ classes.listItemColors }
            button
          >
            <ListItemIcon className={ clsx(classes.listItemIcon) }>
              { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
            <ListItemText
              primary={text}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
