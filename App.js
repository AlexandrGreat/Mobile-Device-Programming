import React from 'react';


import { createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen';
import RegisterProduct from './pages/RegisterProduct';
import UpdateProduct from './pages/UpdateProduct';
import ViewProduct from './pages/ViewProduct';
import ViewAllProduct from './pages/ViewAllProduct';
import DeleteProduct from './pages/DeleteProduct';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Register' component={RegisterProduct}/>
        <Stack.Screen name='Update' component={UpdateProduct}/>
        <Stack.Screen name='View' component={ViewProduct}/>
        <Stack.Screen name='ViewAll' component={ViewAllProduct}/>
        <Stack.Screen name='Delete' component={DeleteProduct}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;