import React from "react";
import { addItem,removeItem,removeAll } from "./actions";
import { connect } from "react-redux";
import { View,Text,StyleSheet, ScrollView,Button } from "react-native";
import * as SQLite from 'expo-sqlite';

class Items extends React.Component{  
    productList=[];

    db=SQLite.openDatabase('ItemsDatabase.db');

    componentDidMount(){

//CREATE
    this.db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_item'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length != 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_item', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_item(item_id INTEGER PRIMARY KEY AUTOINCREMENT, item_name VARCHAR(20), item_count VARCHAR(10))',
                []
              );
            }
          }
        );
      });

//INSERT
      this.db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO table_item (item_name, item_count) VALUES (?,?),(?,?),(?,?),(?,?),(?,?),(?,?),(?,?),(?,?),(?,?),(?,?)',
          ['Bitcoin','0.000001',
          'Ethereum','0.0002',
          'XRP','0.000004',
          'Bitcoin Cash','0.00001',
          'Litecoin','0.0005',
          'Stellar','0.00007',
          'Cardano','0.0007',
          'IOTA','0.00008',
          'NEO','0.0009',
          'Monero','0.00002'],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              console.log('SUCCESS')
            } else console.log('FAIL');
          }
        );
      });
  
//SELECT
      this.db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM table_item',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            this.productList=temp;
            console.log(this.productList);
          }
        );
      });

      this.forceUpdate();
    }
  
    state={name:'',count:''}
    updateInput=(name,count)=>{
        this.setState({count:count,name:name})
    }

    handleSubmit=()=>{
        this.addItem()
    }

    handleBuy=()=>{
        this.props.dispatchRemoveAll()
        alert('Thanks for buying!')
    }

    addItem=()=>{
        this.props.dispatchAddItem(this.state)
    }

    handleRemove=()=>{
        this.props.dispatchRemoveAll()
    }

    removeItem=(item)=>{
        this.props.dispatchRemoveItem(item)
    }

    render(){
        const {items}=this.props
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Shopping cart</Text>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.itemsContainer}>
                    {items.map((item,index)=>(
                        <View style={styles.item} key={index}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.count}>{item.count}</Text>
                            <Text onPress={()=>this.removeItem(item)}>Remove</Text>
                        </View>
                    ))}
                    <Button title="remove all" onPress={this.handleRemove}/>
                    <Button title="BUY!" onPress={this.handleBuy}/>
                </ScrollView>


                <View style={styles.inputContainer}>
                <ScrollView>
                    {this.productList.map((data)=>{return(<View style={{marginBottom:10, backgroundColor:'#ededed',borderRadius:10}}>
                    <Text>{data.item_name} : {data.item_count}</Text>
                    <Button title='To cart!' onPress={()=>{
                    this.updateInput(data.item_name,data.item_count); if(this.state.name!=='') this.handleSubmit();}}/>
                    </View>)})}
                </ScrollView>
                </View> 
            </View>
        )
    }
}

const styles=StyleSheet.create({
inputContainer:{
    padding:10,
    backgroundColor:'#ffffff',
    borderTopColor:'#ededed',
    borderTopWidth:1,
    flexDirection:'row',
    height:200
},
inputWrapper:{
    flex:1,
},
input:{
    height:44,
    padding:7,
    backgroundColor:'#ededed',
    borderColor:'#ddd',
    borderWidth:1,
    borderRadius:10,
    flex:1,
    marginBottom:5,
},
addButton:{
    fontSize:28,
    lineHeight:28,
},
addButtonContainer:{
    width:80,
    height:80,
    backgroundColor:'#ededed',
    merginLeft:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
},
container:{
    flex:1,
},
itemsContainer:{
    borderTopWidth:1,
    borderTopColor:'#ddd',
    flex:1,
},
title:{
    paddingTop:30,
    paddingBottom:20,
    fontSize:20,
    textAlign:'center',
},
item:{
    padding:20,
},
name:{
    fontSize:18
},
count:{
    fontSize:14,
    color:'#999',
}
})

const mapStateToProps=(state)=>({
    items:state.cartReducer.items
})

const mapDispatchToProps={
    dispatchAddItem:(item)=>addItem(item),
    dispatchRemoveItem:(item)=>removeItem(item),
    dispatchRemoveAll:()=>removeAll()
}

export default connect(mapStateToProps,mapDispatchToProps)(Items)