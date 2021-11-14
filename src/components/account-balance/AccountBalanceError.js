import Box  from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import Fade from "@mui/material/Fade"
import { useTheme } from "@mui/material/styles";

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
