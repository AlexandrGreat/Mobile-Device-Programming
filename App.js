import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import StartScreen from "./Components/StartScreen";

const Stack=createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={StartScreen}/>
        <Stack.Screen name="News" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles=StyleSheet.create({})