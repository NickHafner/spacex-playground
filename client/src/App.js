import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Launches from './Layouts/Launches';
import Launch from './Layouts/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Route exact path='/' component={Launches}/>
          <Route exact path='/launch/:flight_number' component={Launch} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
