import React from 'react';
import {StyleSheet, Text,View, Button,TextInput, FlatList} from 'react-native';

class App extends React.Component
{
  state={
    width1:100,
    width2:100,
    width3:100,
    color1:100,
    color2:100,
    color3:100,
  }

  handleColor1Change=(text)=>{
    if (text!='')
    {
    if(parseInt(text)>=0 || parseInt(text<=255))
    this.setState({color1:parseInt(text)})
    if(parseInt(text)>255)
    this.setState({color1:255})
    if(parseInt(text)<0)
    this.setState({color1:0})
    }
    else this.setState({color1:0})
  }

  handleWidth1Change=(text)=>{
    if (text!='')
    {
      if(parseInt(text)>=0 || parseInt(text<=300))
      this.setState({width1:parseInt(text)})
      if(parseInt(text)>300)
      this.setState({width1:300})
      if(parseInt(text)<0)
      this.setState({width1:0})
    }
    else this.setState({width1:0})
  }

  handleColor2Change=(text)=>{
    if (text!='')
    {
    if(parseInt(text)>=0 || parseInt(text<=255))
    this.setState({color2:parseInt(text)})
    if(parseInt(text)>255)
    this.setState({color2:255})
    if(parseInt(text)<0)
    this.setState({color2:0})
    }
    else this.setState({color2:0})
  }

  handleWidth2Change=(text)=>{
    if (text!='')
    {
      if(parseInt(text)>=0 || parseInt(text<=300))
      this.setState({width2:parseInt(text)})
      if(parseInt(text)>300)
      this.setState({width2:300})
      if(parseInt(text)<0)
      this.setState({width2:0})
    }
    else this.setState({width2:0})
  }

  handleColor3Change=(text)=>{
    if (text!='')
    {
    if(parseInt(text)>=0 || parseInt(text<=255))
    this.setState({color3:parseInt(text)})
    if(parseInt(text)>255)
    this.setState({color3:255})
    if(parseInt(text)<0)
    this.setState({color3:0})
    }
    else this.setState({color3:0})
  }

  handleWidth3Change=(text)=>{
    if (text!='')
    {
      if(parseInt(text)>=0 || parseInt(text<=300))
      this.setState({width3:parseInt(text)})
      if(parseInt(text)>300)
      this.setState({width3:300})
      if(parseInt(text)<0)
      this.setState({width3:0})
    }
    else this.setState({width3:0})
  }

  render(){
    return(
      <View style={styles.main}>

      <View style={styles.container}>     
      {/* <View style={styles.flextable}> */}
        <View style={[styles.box, {backgroundColor:`rgba(${this.state.color1},0,0,1)`,width:this.state.width1}]}></View>
        <View style={[styles.box, {backgroundColor:`rgba(0,${this.state.color2},0,1)`,width:this.state.width2}]}></View>
        <View style={[styles.box, {backgroundColor:`rgba(0,0,${this.state.color3},1)`,width:this.state.width3}]}></View>
      {/* </View> */}
      </View>
      <View style={styles.settingsBlock}>
        <Text style={styles.redtext}>Block 1</Text>
        <Text>color:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleColor1Change}/>
        <Text>width:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleWidth1Change}/>
        <Text style={styles.redtext}>Block 2</Text>
        <Text>color:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleColor2Change}/>
        <Text>width:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleWidth2Change}/>
        <Text style={styles.redtext}>Block 3</Text>
        <Text>color:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleColor3Change}/>
        <Text>width:</Text>
        <TextInput style={styles.textinput} keyboardType='number-pad' onChangeText={this.handleWidth3Change}/>
      </View>
      </View>
      
    )}
}

const styles = StyleSheet.create({
  main:{
    width:'100%',
    height:'100%'
  },
  container: {
    width:300,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    position:'relative',
    top:'20%',
    left:'5%',
  },
  box:{
    display:'flex',
    height:100,
  },
  redtext:{
    color:'red',
    fontWeight:'bold',
    fontSize:17
  },
  settingsBlock:{
    position:'relative',
    alignItems:'center',
    top:'20%',
  },
  textinput:{
    borderWidth:1,
    borderColor:'purple',
    width:'40%'
  }
});

export default App;
