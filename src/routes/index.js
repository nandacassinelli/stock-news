import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Interests from '../pages/Interests'
import StockbrokerSignUp from '../pages/StockbrokerSignUp'

const AppStack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="StockbrokerSignUp" component={StockbrokerSignUp} />
        <AppStack.Screen name="Interests" component={Interests} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
