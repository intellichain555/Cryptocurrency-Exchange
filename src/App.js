import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@theme'
import ApplicationHeader from '@components/application-header/ApplicationHeader.js'
import Home from '@views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
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

export default App;
