import React, {useEffect} from 'react'
import {View} from 'react-native'
import {useIsFocused} from '@react-navigation/native'

import AppHeader from '@components/AppHeader'
import AppWrapper from '@components/AppWrapper'
import NavigationService from '@navigation/NavigationService'
import NewBlankBox from './components/NewBlankBox'
import {HomeScreenStyles as styles} from '@styles/HomeScreenStyles'
import {Heading3} from '@components/AppText'

const HomeScreen = ({navigation}: any) => {
  const isFocused = useIsFocused()
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent()
    if (isFocused) {
      parent.setOptions({
        tabBarVisible: true,
      })
    }
  }, [isFocused])
  const handlePress = () => {
    NavigationService.navigate('DesignScreen', null)
  }

  return (
    <AppWrapper>
      <AppHeader title={'Kollage'} showButton />
      <View style={styles.container}>
        <Heading3 style={styles.headerText}>Saved</Heading3>
        <NewBlankBox onPress={handlePress} />
      </View>
    </AppWrapper>
  )
}

export default HomeScreen
