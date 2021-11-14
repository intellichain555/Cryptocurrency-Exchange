import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";

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
