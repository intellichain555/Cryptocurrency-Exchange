import { createTheme } from "@material-ui/core/styles";
import palette from './palette'
import typography from "./typography";

// Base Theme
let theme = createTheme({
  palette,
  typography,
})

theme.overrides = {
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
}

export default theme
