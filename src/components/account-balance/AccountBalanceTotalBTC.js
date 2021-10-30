import {Box, Chip, makeStyles, Typography} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import {useTheme} from "@material-ui/core/styles";
import {connect} from "react-redux";

function AccountBalanceTotalBTC(props) {
  const theme = useTheme()
  const useStyles = makeStyles({
    wrapper: {
      background: theme.palette.primary.darkCard,
      width: '100%',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left'
      }
    },
    chipRoot: {
      backgroundColor: theme.palette.warning.main,
    },
    chipLabel: {
      fontSize: theme.typography.h6.fontSize,
    },
  });

  const styles = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      { props.isLoading ? (
        <Skeleton animation="wave" variant="text" width={158.58} height={50} />
      ) : (
        <Typography variant="h4" component="span">
          { props.totalAssetOfBtc ?? '0' }
        </Typography>
      )}

      <Box ml={1.5}>
        { props.isLoading ? (
          <Skeleton animation="wave" variant="text" width={50} height={40} />
        ) : (
          <Chip label="BTC" classes={{ root: styles.chipRoot, label: styles.chipLabel }} small="true" />
        )}
      </Box>
    </Box>
  )
}

const mapStateToProps = function(state) {
  return {
    totalAssetOfBtc: state.binance.account.wallet.balances.totalAssetOfBtc
  }
}

export default connect(mapStateToProps)(AccountBalanceTotalBTC)
