import React, { createContext, useContext, useReducer } from "react";

// using createContext, it prepares/create dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer and allow the child to have or provide information/data, i.e drilling!
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);