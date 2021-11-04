import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { Doughnut } from "react-chartjs-2";
import {connect} from "react-redux";

function AccountBalanceChart(props) {
  const useStyles = makeStyles({
    chartSkeleton: {
      margin: "0 auto"
    }
  });

  const styles = useStyles()
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
          classes={{ root: styles.chartSkeleton }}
          height="100%"
          width="100%"
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
