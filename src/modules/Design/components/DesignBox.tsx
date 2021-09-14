import React, {useEffect, useRef, useState} from 'react'
import {FlatList, View} from 'react-native'

import {DesignBoxStyles as styels} from '@styles/DesignScreenStyles'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

interface Props {
  type?: string
  items: any
  isExpanded: boolean
}
const DesignBox = ({type, items, isExpanded}: Props) => {
  const [height, setHeight] = useState(20)
  const [width, setWidth] = useState(60)
  const ref = useRef()
  useEffect(() => {
    if (!isExpanded) {
      setHeight(15)
      setWidth(40)
      ref.current.scrollToEnd()
    } else {
      setWidth(60)
      if (type === 'landscape') {
        setHeight(20)
      }
      if (type === 'square') {
        setHeight(30)
      }
      if (type === 'potrait') {
        setHeight(40)
      }
      if (type === 'stories') {
        setHeight(50)
      }
    }
  }, [type, isExpanded])
  useEffect(() => {
    ref.current.scrollToEnd()
  }, [items])
  return (
    <FlatList
      ref={ref}
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      keyExtractor={() => Math.random().toString()}
      data={items}
      renderItem={({item}) => (
        <View style={[styels.box, {height: hp(height), width: wp(width)}]} />
      )}
      horizontal={true}
    />
  )
}

export default DesignBox
