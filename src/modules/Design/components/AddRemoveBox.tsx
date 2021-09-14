import React from 'react'
import {View} from 'react-native'

import {AddRemoveBoxStyles as styels} from '@styles/HomeScreenStyles'
import {Icon} from 'native-base'

interface Props {
  onPress: any
}
const AddRemoveBox = ({onPress}: Props) => {
  return (
    <View style={styels.container}>
      <View style={styels.left}>
        <Icon name="minus" type="AntDesign" onPress={() => onPress('remove')} />
      </View>
      <View style={styels.right}>
        <Icon name="plus" type="AntDesign" onPress={() => onPress('add')} />
      </View>
    </View>
  )
}

export default AddRemoveBox
