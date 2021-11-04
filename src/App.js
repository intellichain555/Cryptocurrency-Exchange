import React, { Component } from "react";
import {CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles'
import { withStyles } from "@material-ui/core";
import appTheme from '@theme'
import ApplicationHeader from '@components/application-header/ApplicationHeader.js'
import Home from '@views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

const styles = theme => ({
  app: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 256
    }
  }
})


class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <div className={ classes.app }>
            <ApplicationHeader />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
