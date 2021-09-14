import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import {NewBlankBoxStyles as styles} from '@styles/HomeScreenStyles'
import {Icon} from 'native-base'
import {Label17} from '@components/AppText'

interface Props {
  onPress: any
}

const NewBlankBox = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Icon name={'plus'} type={'Entypo'} style={styles.iconStyles} />
      <Label17 style={styles.title}>New Blank</Label17>
    </TouchableOpacity>
  )
}

export default NewBlankBox
