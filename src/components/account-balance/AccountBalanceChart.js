import { Box, Skeleton } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {connect} from "react-redux";

function AccountBalanceChart(props) {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: props.wallet.balances.spot.map(item => item.free)
      },
    ],
  }

  return (
    <Box
      width={211}
      height={211}
    >
      { props.isLoading ? (
        <Skeleton
          animation="wave"
          variant="circle"
          height="100%"
          width="100%"
          sx={{ mx: "auto" }}
        />
      ) : (
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      )}
    </Box>
  )
}

function mapStateToProps(state) {
  return {
    wallet: state.binance.account.wallet
  }
}

export default connect(mapStateToProps)(AccountBalanceChart)
