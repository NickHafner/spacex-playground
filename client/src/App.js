import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Launches from './Layouts/Launches';
import Launch from './Layouts/Launch';
import Login from './Layouts/Login';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const theme = createMuiTheme({

});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Route exact path='/' component={Login}/>
            <Route exact path='/launches' component={Launches}/>
            <Route exact path='/launch/:flight_number' component={Launch} />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
