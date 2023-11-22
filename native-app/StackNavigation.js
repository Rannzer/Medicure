import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import Scan from './screens/Scan';

const StackNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />    
            <Stack.Screen name="Scan" component={Scan} options={{headerShown:false}} />   
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})