import { useState } from "react";
import {Box, MenuItem, Select} from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'


export default function AssetsCatalogueFilters() {
  const [sort, setSort] = useState('')
  const handleChange = (event) => setSort(event.target.value)

  const theme = useTheme()

  const useStyles = makeStyles({
    dropdown: {
      // background: theme.palette.primary.darkCard,
      borderRadius: theme.shape.borderRadius,
      '&:not(:last-of-type)': {
        marginRight: theme.spacing(2),
      }
    }
  })

  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="stretch"
      alignItems="center"
    >
      <Select
        value={sort}
        onChange={handleChange}
        displayEmpty
        className={ clsx(classes.dropdown) }
        style={{ flexGrow: '1' }}
      >
        <MenuItem value="">
          <em>Core Assets</em>
        </MenuItem>
        <MenuItem>
          <em>Top Gainers</em>
        </MenuItem>
        <MenuItem>
          <em>Top Losers</em>
        </MenuItem>
        <MenuItem>
          <em>New</em>
        </MenuItem>
      </Select>
      <Select
        value={sort}
        onChange={handleChange}
        displayEmpty
        className={ clsx(classes.dropdown) }
        style={{ flexGrow: '1' }}
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
  )
}
