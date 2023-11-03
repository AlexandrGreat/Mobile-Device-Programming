import React from "react";
import { View,Text,StyleSheet, TextInput,ScrollView, Button, TouchableHighlight, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ContactsScreen({route,navigation}){
  const [contacts,setContacts]=React.useState([{name:"Alex",phoneNumber:"123456789"},{name:"Mike",phoneNumber:"987654321"},{name:"Pizza delivery",phoneNumber:"123456789"},{name:"Doctor",phoneNumber:"987654321"},{name:"Friend",phoneNumber:"123456789"},{name:"Work",phoneNumber:"987654321"},{name:"Bank",phoneNumber:"123456789"},{name:"Jane",phoneNumber:"987654321"},{name:"Tom",phoneNumber:"123456789"},{name:"George",phoneNumber:"987654321"},{name:"William",phoneNumber:"123456789"},{name:"Carl",phoneNumber:"987654321"},{name:"Isaac",phoneNumber:"123456789"},{name:"Hordon",phoneNumber:"987654321"}]);
    return(
      <View style={{height:'100%',padding:10}}>
        <ScrollView>
          {contacts.map((data,index)=>{return(<View style={{marginBottom:10, backgroundColor:'#CCC'}}><Text style={styles.text1}>{data.name}: {data.phoneNumber}</Text><Button title='Call' onPress={()=>navigation.navigate('Call',{name:data.name,phoneNumber:data.phoneNumber})} /></View>)})}
        </ScrollView>
        <Button title="Go to profile" style={{position:'absolute',bottom:'0%'}} onPress={()=>navigation.navigate('Profile')}/>
      </View>
    );
}

function ProfileScreen({route,navigation}){
    return(
    <View>
      <View style={styles.niceContainer}></View>
      <View style={styles.profileCard}>
        <View style={styles.round}><Text style={styles.bigText}>A</Text></View>
        <Text style={styles.text1}>Name: LR9 Maker</Text>
        <Text style={styles.text1}>Phone number: 223322223322</Text>
        <Text style={[styles.text1,{position:'relative',top:'20%'}]}>Your info: Just a student that made this app in demonstration purpose</Text>
      </View>  
    </View>
    );
}

function CallScreen({route,navigation}){
  const name=route.params?.name;
  const phoneNumber=route.params?.phoneNumber;
    return(
    <View>
        <View style={styles.profileCard}>
        <View style={styles.round}><Text style={styles.bigText}>{name[0]}</Text></View>
        <Text style={styles.text1}>Calling {name}...</Text>
        <Text style={styles.text1}>{phoneNumber}</Text>
        <View style={styles.rowView}>
          <TouchableHighlight style={{width:'35%',height:'35%'}} onPress={()=>{navigation.navigate('Contacts')}}><View style={styles.round2}><Text style={styles.text2}>Drop</Text></View></TouchableHighlight>
          <View style={styles.round3}><Text style={styles.text2}>Loud</Text></View>
        </View>
      </View>  
    </View>
    );
}

const Stack=createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name="Contacts" component={ContactsScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Call" component={CallScreen} />
          </Stack.Navigator>
        </NavigationContainer> 
    );
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#CCC'
    },
    profileCard:{
      width:'80%',
      height:'90%',
      backgroundColor:'lightblue',
      borderRadius:50,
      position:'relative',
      top:'10%',
      left:'10%',
      alignItems:'center',
      padding:'5%',
    },
    text1:{
      fontWeight:'bold',
      color:'black',
      fontSize:16
    },
    round:{
      width:'60%',
      height:'30%',
      backgroundColor:'white',
      borderRadius:100
    },
    bigText:{
      fontWeight:'bold',
      color:'black',
      fontSize:24,
      position:'relative',
      top:'40%',
      left:'45%'
    },
    niceContainer:{
      width:'95%',
      height:'100%',
      position:'absolute',
      top:'5%',
      left:'3%',
      borderWidth:1,
      borderColor:'black',
      borderRadius:25,
      backgroundColor:'white'
    },
    round2:{
      width:'100%',
      height:'85%',
      backgroundColor:'red',
      borderRadius:100,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    round3:{
      width:'35%',
      height:'30%',
      backgroundColor:'green',
      borderRadius:100,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    text2:{
      fontWeight:'bold',
      color:'white',
      fontSize:16,
    },
    rowView:{
      flex:1,
      flexDirection:'row',
      height:'100%',
      width:'100%',
      justifyContent:'space-between',
      position:'relative',
      top:'40%'
    }
});
