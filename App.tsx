import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import AppNavigator from '@navigation/AppNavigator'
import NavigationService from '@navigation/NavigationService'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}

export default App
