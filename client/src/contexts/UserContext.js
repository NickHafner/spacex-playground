import React, {createContext, useReducer} from 'react';
export const StateContext = createContext();

const initialState = { 
  username: '',
  validated: false,
  favoriteLaunches: []
}

export const UserContext = React.createContext({})

export const UserProvider = ({reducer, children}) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
  );

export const UserConsumer = UserContext.Consumer
