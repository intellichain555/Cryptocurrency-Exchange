import { createTheme } from "@material-ui/core/styles";
import palette from './palette'
import typography from "./typography";

// Base Theme
let theme = createTheme({
  palette,
  typography,
})

theme.overrides = {
  MuiSelect: {
    root: {
      background: theme.palette.primary.darkCard,
      borderRadius: theme.shape.borderRadius,
    }
  },
  MuiInput: {
    root: {
      background: theme.palette.action.selected,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      border: 'none',
      '&:before': {
        display: 'none'
      }
    }
  },
  MuiChip: {
    label: {
      ...theme.typography.chip.label
    }
  }
}

export default theme
