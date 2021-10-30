import React from 'react'
import AssetsCatalogue from "../components/asset-catalogue/AssetsCatalogue";
import CurrentBalance from '@components/account-balance/AccountBalance'
import LatestActivities from "../components/latest-activities/LatestActivities";
import { Grid, Box } from "@material-ui/core";
import { checkSystemStatus } from "../store/slices/binance/binanceSlice";
import Binance from '@lib/api/binance'


class Home extends React.Component {
  componentDidMount() {
    const binance = new Binance({
      keys: {
        api: process.env.REACT_APP_BINANCE_API_KEY,
        secret: process.env.REACT_APP_BINANCE_SECRET_KEY
      }
    })

    binance.checkSystemStatus()
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        style={{ height: "100%" }}
      >
        <Grid
          item
          xs={12}
          xl={10}
        >
          <Box padding={3}>
            <AssetsCatalogue />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          xl={2}
          style={{
            borderLeft: "1px solid white"
          }}
        >
          <Box p={5}>
            <Box mb={8}>
              <CurrentBalance />
            </Box>
            <LatestActivities />
          </Box>
        </Grid>
      </Grid>
    )
  }
}

export default Home
