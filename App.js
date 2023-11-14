import React from "react";

import Items from './Items'
import rootReducer from "./reducers/index";

import { Provider } from "react-redux";
import { createStore } from "redux";
import * as SQLite from 'expo-sqlite';
const store=createStore(rootReducer);

export default class App extends React.Component{
    
  db=SQLite.openDatabase('ItemsDatabase.db');

  componentDidMount(){
    this.db.transaction(function(txn){
      txn.executeSql("SELECT name FROM sqlite-master WHERE type='table' AND name='table_items'",[],
      function(tx,results){console.log(results.rows.length); if(results.rows.length==0){txn.executeSql('DROP TABLE IF EXISTS table_items',[]);
    txn.executeSql('CREATE TABLE IF NOT EXISTS table_items(item_id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(30),count VARCHAR(10))',[]);}});
    });
  }

  render(){
    return(
        <Provider store={store}>
          <Items/>
        </Provider>
    );
  }
}