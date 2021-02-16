import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {withStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme';
import {AUTH_TOKEN} from './constants';

import SocialLogin from './components/signin/SocialLogin';
import CreateAccount from './components/signin/CreateAccount';
import CreateAccountFinal from "./components/signin/CreateAccountFinal";
import Login from './components/signin/Login';
import GoogleSignIn from './components/signin/GoogleSignIn';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.Mui-selected': {
      color: '#464646',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '17px',
    },
    '.MuiAppBar-colorPrimary': {
      backgroundColor: 'transparent',
    },
    media: {
      height: 140,
    },
    '.MuiList-padding': {
      paddingTop: '0px',
      paddingBottom: '0px',
    },
  },
})(() => null);

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    width: '100%',
    paddingTop: '56.25%',
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" Component={() => {
            return <Redirect to={'/signin'} />;
          }}
          /> */}
          <Route exact path="/" component={SocialLogin} />
          <Route exact path="/signin" component={SocialLogin} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/signupfinal" component={CreateAccountFinal} />
          <Route exact path="/googlesign" component={GoogleSignIn} />

          <Route exact path="/login" component={Login} />
        </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;