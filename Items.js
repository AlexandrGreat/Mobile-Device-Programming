import React from "react";
import { addItem,removeItem,removeAll } from "./actions";
import { connect } from "react-redux";
import { View,Text,StyleSheet, ScrollView, TextInput, TouchableOpacity,Button } from "react-native";

const initialState={name:'',count:''} 

class Items extends React.Component{    
    productList=[{name:'Bitcoin',count:'0.000001'},
    {name:'Ethereum',count:'0.0002'},
    {name:'XRP',count:'0.000004'},
    {name:'Bitcoin Cash',count:'0.00001'},
    {name:'Litecoin',count:'0.0005'},
    {name:'Stellar',count:'0.00007'},
    {name:'Cardano',count:'0.0007'},
    {name:'IOTA',count:'0.00008'},
    {name:'NEO',count:'0.0009'},
    {name:'Monero',count:'0.00002'}];

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
                    <Text>{data.name} : {data.count}</Text>
                    <Button title='To cart!' onPress={()=>{
                    this.updateInput(data.name,data.count); if(this.state.name!=='') this.handleSubmit();}}/>
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
