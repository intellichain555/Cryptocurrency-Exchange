import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function AccountBalanceTotalUSD(props) {
  return (
    <Box mb={1}>
      { props.isLoading ? (
        <Skeleton
          variant="text"
          height={21}
          width={110}
        />
      ) : (
        <Box
          color="success.main"
          mb={2}
          fontSize={18}
          fontWeight={500}
        >
          3,700.96 USD
        </Box>
      ) }
    </Box>
  )
}
