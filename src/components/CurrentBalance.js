import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Typography, Grid, Container, Box, Chip, Button } from "@material-ui/core";
import { Doughnut } from 'react-chartjs-2'

export default function CurrentBalance() {
  const theme = useTheme()
  const useStyles = makeStyles({
    wrapper: {
      background: theme.palette.primary.darkCard,
      width: '100%'
    },
    chip: {
      backgroundColor: theme.palette.warning.main,
      marginLeft: theme.spacing(1)
    },
    // list: {
    //   width: 250,
    // },
    // listItem: {
    //   margin: theme.spacing(1),
    //   borderRadius: theme.shape.borderRadius,
    //   button: {
    //     '&:hover': {
    //       color: 'red'
    //     }
    //   }
    // },
    // fullList: {
    //   width: 'auto',
    // },
  });

  const spotAssets = [
    {
      "asset":"BTC",
      "free":"0.09905021",
      "locked":"0.00000000"
    },
    {
      "asset":"USDT",
      "free":"1.89109409",
      "locked":"0.00000000"
    }
  ]

  const data = {
    labels: spotAssets.map(item => item.asset),
    datasets: [
      {
        label: '# of Votes',
        data: spotAssets.map(item => item.free),
        backgroundColor: [
          theme.palette.accents.one,
          theme.palette.accents.two,
          theme.palette.accents.three
        ],
        borderColor: [
          theme.palette.accents.one,
          theme.palette.accents.two,
          theme.palette.accents.three
        ],
        borderWidth: 1,
      },
    ],
  }

  const styles = useStyles()

  return (
    <Container>
      <Box
        p={6}
        borderRadius={24}
        classes={{ root: styles.wrapper }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          maxWidth="sm"
          spacing={6}
        >
          <Grid item md={4}>
            <Doughnut data={data} />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6" component="h3">
              Total Balance
            </Typography>
            <Typography variant="h5" component="span">
              0.16231428
              <Chip label="BTC" classes={{ root: styles.chip }} size="small" />
            </Typography>

            <Typography variant="body1">
              <Box
                color="success.main"
                mb={2}
              >
                3,700.96 USD
              </Box>
            </Typography>

            <Button
              color="primary"
              variant="contained"
            >
              Withdraw
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
