import { createTheme } from "@mui/material/styles";
import palette from './palette'
import typography from "./typography";

// Base Theme
let theme = createTheme({
  palette,
  typography,
})

theme.components = {
  MuiSelect: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2)
      },
      icon: {
        right: '10px',
      }
    }
  },
  MuiInput: {
    styleOverrides: {
      root: {
        background: theme.palette.primary.darkCard,
        padding: 0,
        // padding: theme.spacing(1),
        borderRadius: '12px',
        border: 'none',
        '&:before': {
          display: 'none'
        }
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      label: {
        ...theme.typography.chip.label
      }
    }
  }
}

export default theme
