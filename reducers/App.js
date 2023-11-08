import React from "react";

import Items from './Items'
import rootReducer from "./reducers/index";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store=createStore(rootReducer);

export default class App extends React.Component{
  render(){
    return(
        <Provider store={store}>
          <Items/>
        </Provider>
    );
  }
}