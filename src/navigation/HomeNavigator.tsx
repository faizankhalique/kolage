import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import DesignScreen from '@modules/Design/DesignScreen'
import HomeScreen from '@modules/Home/HomeScreen'

const Stack = createStackNavigator()

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={'Home'}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={'DesignScreen'}
      component={DesignScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)
export default HomeNavigator
