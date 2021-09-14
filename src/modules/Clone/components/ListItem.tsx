import React from 'react'
import {ImageBackground, TouchableOpacity, View} from 'react-native'
import {Icon} from 'native-base'

import AppButton from '@components/AppButton'
import {ListItemStyles as styles} from '@styles/CloneScreenStyles'
import {Body15, Label16, Label17} from '@components/AppText'

interface Props {
  title: string
  subtitle: string
  image: any
  price: string
  category: string
  onPress?: any
}

const ListItem = ({
  title,
  subtitle,
  image,
  price,
  category,
  onPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Label17 style={styles.title}>{title}</Label17>
        <Icon name={'lock'} type={'FontAwesome'} style={styles.iconStyles} />
      </View>
      <Body15 style={styles.subtitle}>{subtitle}</Body15>
      <ImageBackground style={styles.backGroundImageContainer} source={image}>
        <AppButton
          title={price}
          onPress={onPress}
          containerStyles={styles.priceButton}
        />
        <Label16 style={styles.categoryTitle}>{category}</Label16>
      </ImageBackground>
    </View>
  )
}

export default ListItem
