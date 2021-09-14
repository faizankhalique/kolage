import React from 'react'
import {TouchableOpacity} from 'react-native'

import {Label13} from './AppText'
import {AppButtonStyles as styles} from '@styles/ComponentsStyles'

interface Props {
  title: string
  onPress: any
  containerStyles?: any
  titleStyles?: any
}
const AppButton = ({title, onPress, containerStyles, titleStyles}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      <Label13 style={[styles.title, titleStyles]}>{title}</Label13>
    </TouchableOpacity>
  )
}

export default AppButton
