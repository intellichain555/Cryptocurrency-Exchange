import Skeleton from "@material-ui/lab/Skeleton";
import {Typography} from "@material-ui/core";

export default function AccountBalanceHeader(props) {
  return props.isLoading ? (
    <Skeleton animation="wave" variant="text" width={100} height={45} />
  ) : (
    <Typography variant="h6" component="h4">
      Total Balance
    </Typography>
  )
}
