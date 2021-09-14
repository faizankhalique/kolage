import React from 'react'
import {Icon} from 'native-base'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import CloneScreen from '@modules/Clone/CloneScreen'
import HomeNavigator from './HomeNavigator'
import theme from '@config/theme'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: wp(2),
        },
        style: {
          height: hp(10),
          width: wp('100%'),
          paddingVertical: wp(2),
          paddingHorizontal: wp(4),
          backgroundColor: theme.custom.light_black,
          borderTopColor: theme.custom.light_black,
        },
      }}
      initialRouteName={'Clone'}>
      <Tab.Screen
        name={'Clone'}
        options={({navigation, route}) => {
          return {
            tabBarIcon: () => (
              <Icon
                name="clone"
                type={'FontAwesome'}
                style={{color: navigation.isFocused() ? 'white' : '#7f8081'}}
              />
            ),
          }
        }}
        component={CloneScreen}
      />
      <Tab.Screen
        name={'Home'}
        options={({navigation, route}) => {
          return {
            tabBarIcon: () => (
              <Icon
                name="appstore-o"
                type={'AntDesign'}
                style={{color: navigation.isFocused() ? 'white' : '#7f8081'}}
              />
            ),
          }
        }}
        component={HomeNavigator}
      />
    </Tab.Navigator>
  )
}
export default AppNavigator
