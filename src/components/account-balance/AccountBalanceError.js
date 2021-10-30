import {Box, Button, Grid, Typography} from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"
import Fade from "@material-ui/core/Fade"
import { useTheme } from "@material-ui/core/styles";

export default function AccountBalanceError(props) {
  const theme = useTheme()

  return (
    <Fade in={true} timeout={1000}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box textAlign="center" >
            <Box mb={1}>
              <ErrorOutlineIcon
                fontSize="large"
                style={{ color: theme.palette.error.main }}
              />
            </Box>
            <Box mb={2}>
              <Typography
                variant="subtitle2"
                component="p"
                align="center"
                gutterBottom
              >
                Error loading account balance.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => { props.retry() }}
            >
              Retry
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fade>
  )
}
