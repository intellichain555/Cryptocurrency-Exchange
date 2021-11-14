import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Skeleton from "@mui/material/Skeleton";
import { connect } from "react-redux";
import { styled } from '@mui/material/styles'

function AccountBalanceTotalBTC(props) {
  // const theme = useTheme()
  // const useStyles = makeStyles({
  //   wrapper: {
  //     background: theme.palette.primary.darkCard,
  //     width: '100%',
  //     textAlign: 'center',
  //     [theme.breakpoints.up('md')]: {
  //       textAlign: 'left'
  //     }
  //   },
  // });

  const StyledChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.warning.main,
    fontSize: theme.typography.h6.fontSize,
  }))

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
          <StyledChip label="BTC" small="true" />
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
