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
import { UserProvider } from './contexts/UserContext';
import { UserReducer } from './contexts/UserReducer';
import FavoriteLaunches from './Layouts/FavoriteLaunches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const theme = createMuiTheme({ });

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <UserProvider reducer={UserReducer}>
            <Router>
              <Header />
              <Route exact path='/' component={Login}/>
              <Route exact path='/launches' component={Launches}/>
              <Route exact path='/:user/favorites' component={FavoriteLaunches}/>
              <Route exact path='/launch/:flight_number' component={Launch} />
            </Router>
          </UserProvider>
        </ApolloProvider>
      </ThemeProvider>
    );
}

export default App;
