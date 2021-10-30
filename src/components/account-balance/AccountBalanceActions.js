import Skeleton from "@material-ui/lab/Skeleton";
import {Button} from "@material-ui/core";

export default function AccountBalanceActions(props) {
  return  props.isLoading ? (
    <Skeleton
      variant="rect"
      height={21}
      width={110}
    />
  ) : (
    <Button
      color="primary"
      variant="contained"
      size="large"
    >
      Withdraw
    </Button>
  )
}
