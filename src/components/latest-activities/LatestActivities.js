import {
  Avatar, List, ListItem, ListItemAvatar,
  Typography, ListItemText, Box, Divider
} from "@material-ui/core";

import ImageIcon from "@material-ui/icons/Image"

export default function LatestActivities() {
  return (
    <List>
      <ListItem
        width="100%"
        alignItems="start"
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              alignItems="center"
            >
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Withdrew USDT
              </Typography>

              <Typography
                component="span"
                variant="body2"
                color="textSuccess"
              >
                Nov 22, 2020
              </Typography>
            </Box>
        }
        secondary={
          <>
            <Box mb={1}>
              <Typography
                component="span"
                variant="caption"
                color="textGreen"
              >
                Complete
              </Typography>
            </Box>

            <Box mb={2.5}>
              <Typography
                component="span"
                variant="body2"
                color="textGreen"
              >
                969.06654889 USDT
              </Typography>
            </Box>

            <Divider mb={2.5}/>
          </>
        }
        style={{ marginTop: 0}}
        />
      </ListItem>

    </List>
  )


}
