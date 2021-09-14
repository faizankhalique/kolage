import React from 'react'
import {SafeAreaView} from 'react-native'

import {AppWrapperStyles as styles} from '@styles/ComponentsStyles'

const AppWrapper = (props) => {
  return <SafeAreaView style={styles.wrapper}>{props.children}</SafeAreaView>
}

export default AppWrapper
