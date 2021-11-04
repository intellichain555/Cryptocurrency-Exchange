import { withStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import AccountBalanceError from "./AccountBalanceError";
import AccountBalanceChart from "./AccountBalanceChart";
import AccountBalanceHeader from "./AccountBalanceHeader";
import AccountBalanceTotalBTC from "./AccountBalanceTotalBTC";
import AccountBalanceTotalUSD from "./AccountBalanceTotalUSD";
import AccountBalanceActions from "./AccountBalanceActions";
import Zoom from "@material-ui/core/Zoom"
import { loadDailyAccountSnapshotSPOT } from "../../store/slices/binance/binanceSlice";
import { Component } from "react";
import { connect } from "react-redux";

const styles = theme => ({
  wrapper: {
    background: theme.palette.primary.darkCard,
    width: '100%',
    textAlign: 'center',
    minHeight: '529px',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  }
});

class AccountBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: props.error,
      loading: props.isLoading
    }
  }

  componentDidMount() {
    this.props.loadDailyAccountSnapshotSPOT()
  }

  render() {
    return (
      <Zoom in={true} timeout={2000}>
        <Box
          p={6}
          borderRadius={24}
          classes={{ root: this.props.classes.wrapper }}
          boxShadow={4}
        >
          {
            this.state.error ? (
              <AccountBalanceError retry={() => this.props.loadDailyAccountSnapshotSPOT()} />
            ) : (
              <Zoom in={true} timeout={1000}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={6}
                >
                  <Grid
                    item
                    md={4}
                    lg={12}
                  >
                    <AccountBalanceChart isLoading={this.state.loading} />
                  </Grid>
                  <Grid item md={8} lg={12}>
                    <AccountBalanceHeader isLoading={this.state.loading} />
                    <AccountBalanceTotalBTC isLoading={this.state.loading} />
                    <AccountBalanceTotalUSD isLoading={this.state.loading} />
                    <AccountBalanceActions isLoading={this.state.loading} />
                  </Grid>
                </Grid>
              </Zoom>
            )
          }
        </Box>
      </Zoom>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.binance.requestingAccountWalletBalances,
    error: state.binance.errorRequestingAccountWalletBalances,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadDailyAccountSnapshotSPOT: () => dispatch(loadDailyAccountSnapshotSPOT())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(AccountBalance))
