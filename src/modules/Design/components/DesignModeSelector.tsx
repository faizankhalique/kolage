import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import theme from '@config/theme'
import {DesignModeStyles as styles} from '@styles/DesignScreenStyles'
import {Label15} from '@components/AppText'
import {widthPercentageToDP} from 'react-native-responsive-screen'

interface Props {
  type: string
  title: string
  active: string
  setActive: any
}
const DesignModeSelector = ({type, title, active, setActive}: Props) => {
  if (type === 'landscape') {
    return (
      <TouchableOpacity
        onPress={() => setActive(type)}
        style={[styles.container]}>
        <View
          style={[
            styles.landscapeBox,
            {
              borderColor:
                active === type ? theme.custom.white : theme.custom.light_grey,
              borderWidth: active === type ? 2 : 1,
            },
          ]}></View>
        <Label15 style={styles.title}>{title}</Label15>
      </TouchableOpacity>
    )
  } else if (type === 'square') {
    return (
      <TouchableOpacity
        onPress={() => setActive(type)}
        style={[styles.container]}>
        <View
          style={[
            styles.squareBox,
            {
              borderColor:
                active === type ? theme.custom.white : theme.custom.light_grey,
              borderWidth: active === type ? 2 : 1,
            },
          ]}></View>
        <Label15 style={styles.title}>{title}</Label15>
      </TouchableOpacity>
    )
  } else if (type === 'potrait') {
    return (
      <TouchableOpacity
        onPress={() => setActive(type)}
        style={[styles.container]}>
        <View
          style={[
            styles.potraitBox,
            {
              borderColor:
                active === type ? theme.custom.white : theme.custom.light_grey,
              borderWidth: active === type ? 2 : 1,
            },
          ]}></View>
        <Label15 style={styles.title}>{title}</Label15>
      </TouchableOpacity>
    )
  } else if (type === 'stories') {
    return (
      <TouchableOpacity
        onPress={() => setActive(type)}
        style={[styles.container]}>
        <View
          style={[
            styles.storiesBox,
            {
              borderColor:
                active === type ? theme.custom.white : theme.custom.light_grey,
              borderWidth: active === type ? 2 : 1,
            },
          ]}></View>
        <Label15 style={styles.title}>{title}</Label15>
      </TouchableOpacity>
    )
  }
  return null
}

export default DesignModeSelector
