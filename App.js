import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View, Button, ScrollView, TextInput } from 'react-native';

class App extends React.Component
{
  state={
    buttonClickCounter:0,
    someText:'Sample text',
  }

  updateCounter(){
    Count=this.state.buttonClickCounter;
    this.setState({buttonClickCounter:Count+1});
  }

  dropCounter(){
    this.setState({buttonClickCounter:0})
  }

  onButtonClick(msg){
    alert('Current inputed text: '+msg)
  }

  render(){
    return(
      <View  style={styles.container}>     
        <Text style={styles.headText}>Welcome to the most useless clicker!</Text>
          <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Text>You clicked button {this.state.buttonClickCounter} times</Text>
          </View>
            <View style={styles.button1}><Button onPress={()=>this.updateCounter()} title='Click me!'></Button></View>
            <View style={styles.button1}><Button onPress={()=>this.dropCounter()} title='Drop value!'></Button></View>
          </View>


        <ScrollView style={styles.scrollViewStyle}>
          <Text style={{color:'red'}}>Inputed text here:</Text>
          <TextInput style={styles.input} multiline={true} value={this.state.someText} onChangeText={newText=>this.setState({someText:newText})}></TextInput>
          <Text style={{color:'red'}}>Inputed text is:</Text>
          <Text style={styles.input}>{this.state.someText}</Text>
          <Button title='Click me!' onPress={()=>this.onButtonClick(this.state.someText)}></Button>
        </ScrollView>
      </View>
    )
  }
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
    top:'10%',
    left:'20%',
    width:'100%',
  },
  scrollViewStyle:{
    backgroundColor: '#ffffff',
    width:'70%',
    height:'10%',
    borderRadius:10,
    position:'absolute',
    top:'60%'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#88d1f1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
    position:'relative',
    top:'50%'
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
