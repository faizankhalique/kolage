import React from 'react'
import {Icon} from 'native-base'
import {View} from 'react-native'

import {DesignToolItemStyles as styles} from '@styles/DesignScreenStyles'

interface Props {
  iconName: string
  iconType: string
  iconStyles?: any
  onPress?: any
}
function DesignToolItem({iconName, iconType, iconStyles, onPress}: Props) {
  return (
    <Icon
      name={iconName}
      type={iconType}
      style={[styles.icon, iconStyles]}
      onPress={onPress}
    />
  )
}

export default DesignToolItem
