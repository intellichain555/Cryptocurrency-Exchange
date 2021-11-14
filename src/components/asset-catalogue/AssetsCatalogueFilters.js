import { useState } from "react";
import {
  Box,
  MenuItem,
  Select
} from "@mui/material"
import { styled } from "@mui/styles"

export default function AssetsCatalogueFilters() {
  const [sort, setSort] = useState('')
  const handleChange = (event) => setSort(event.target.value)

  const StyledSelect = styled(Select)(({ theme} ) => ({
    dropdown: {
      // background: theme.palette.primary.darkCard,
      borderRadius: theme.shape.borderRadius,
      '&:not(:last-of-type)': {
        marginRight: theme.spacing(2),
      }
    }
  }))

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="stretch"
      alignItems="center"
    >
      <StyledSelect
        value={sort}
        onChange={handleChange}
        displayEmpty
        style={{ flexGrow: '1' }}
      >
        <MenuItem value="">
          <em>Core Assets</em>
        </MenuItem>
        <MenuItem value="top-gainers">
          <em>Top Gainers</em>
        </MenuItem>
        <MenuItem value="top-losers">
          <em>Top Losers</em>
        </MenuItem>
        <MenuItem value="new">
          <em>New</em>
        </MenuItem>
      </StyledSelect>
      <StyledSelect
        value={sort}
        onChange={handleChange}
        displayEmpty
        style={{ flexGrow: '1' }}
      >
        <MenuItem value="">
          <em>Sort Assets</em>
        </MenuItem>
        <MenuItem value="a-z">
          <em>A - Z</em>
        </MenuItem>
        <MenuItem value="trading-volume">
          <em>Volumes</em>
        </MenuItem>
        <MenuItem value="last-24h">
          <em>Last 24h</em>
        </MenuItem>
        <MenuItem value="price">
          <em>Price</em>
        </MenuItem>
      </StyledSelect>
    </Box>
  )
}
