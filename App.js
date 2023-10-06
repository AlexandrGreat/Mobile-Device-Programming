import React from 'react';
import {StyleSheet, Text,View, Button,TextInput, FlatList } from 'react-native';

class App extends React.Component
{
  state={
    data:[],
    newLine:'',
    foundData:[],
    searchLine:''
  }
  
  handleNewLine=(text)=>{
    this.setState({newLine:text});
  }
  
  addLine=()=>{
    this.setState(prevState=>({data:[...prevState.data,this.state.newLine]}));
  }

  handleFilterTasks=(text)=>{
    this.setState({searchLine:text});
  }

  filterTasks=()=>{
    this.setState({foundData:this.state.data.filter((task)=>task.includes(this.state.searchLine))});
  }

  deleteLines=()=>{
    for (let i=0;i<this.state.foundData.length;i++)
    {
      var array=[...this.state.data];
      var foundArr=[...this.state.foundData];
      var index=array.indexOf(this.state.foundData[i]);
      if(index!==-1){
        array.splice(index,1);
        foundArr.splice(foundArr.length-1,1);
        this.setState({data:array});
        this.setState({foundData:foundArr});
      }
    }
  }

  render(){
    return(
      <View  style={styles.container}>     
      <View style={styles.mainContainer}>
      <TextInput style={styles.input} onChangeText={this.handleFilterTasks}/>
      <Button title='Filter tasks' onPress={this.filterTasks}/>
      <FlatList
          data={this.state.foundData}
          renderItem={({item})=><Text>
            {item}    
          </Text>}
      />
      <Text style={styles.headText}>Task "{this.state.foundData[this.state.foundData.length-1]}" will be deleted</Text>
      <Button title='Delete filtered tasks' onPress={this.deleteLines}/>
      <FlatList
          data={this.state.data}
          renderItem={({item})=><Text>
            {item}    
          </Text>}
      />
      <TextInput style={styles.input} onChangeText={this.handleNewLine}/>
      <Button title='Add task' onPress={this.addLine}/>
      </View>
      </View>
    )}
}

const styles = StyleSheet.create({
  input:{
    borderColor:'#7a42f4',
    borderWidth:2
  },
  headText:{
    color:'red',
    fontWeight:'bold',
    position:'relative',
    left:'33%',
    width:'100%',
  },
  mainContainer: {
    backgroundColor:'white',
    justifyContent:'center',
    position:'relative',
    top:'0%',
    width:'100%',
    height:'70%'
  },
  container: {
    flex: 1,
    backgroundColor: '#88d1f1',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'10%',
    borderRadius:10
  },
  button1:{
    width:'50%'
  }
});

export default App;
