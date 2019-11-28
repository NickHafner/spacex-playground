import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Header from './Components/Header';
import Launches from './Layouts/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Launches/>
      </ApolloProvider>
    );
  }
}

export default App;
