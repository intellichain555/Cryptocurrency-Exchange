import { useState } from "react";
import {Box, Chip, MenuItem, Select} from "@material-ui/core";

export default function AssetsCatalogueFilters() {
  const [sort, setSort] = useState('')
  const handleChange = (event) => setSort(event.target.value)

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Chip
          label="Core Assets"
          clickable
          color="primary"
        />
        <Chip
          label="Top Gainers"
          clickable
        />
        <Chip
          label="Top Losers"
          clickable
        />
      </Box>
      <Box>
        <Select
          value={sort}
          onChange={handleChange}
          displayEmpty
          >
          <MenuItem value="">
            <em>Sort Assets</em>
          </MenuItem>
          <MenuItem>
            <em>A - Z</em>
          </MenuItem>
          <MenuItem>
            <em>Volumes</em>
          </MenuItem>
          <MenuItem>
            <em>Last 24h</em>
          </MenuItem>
          <MenuItem>
            <em>Price</em>
          </MenuItem>
        </Select>

      </Box>
    </Box>
  )
}
