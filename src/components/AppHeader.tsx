import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Icon} from 'native-base'

import AppButton from './AppButton'
import NavigationService from '@navigation/NavigationService'
import {AppHeaderStyles as styles} from '@styles/ComponentsStyles'
import {Label14, Label16} from './AppText'

interface Props {
  title: string
  titleStyles?: any
  showButton?: boolean
  onButtonPress?: any
  isGoBack?: boolean
  isLeftTextButtonTitle?: boolean
  leftTextButtonTitle?: string
  onLeftTextButtonPress?: any
}
function AppHeader({
  showButton,
  onButtonPress,
  title,
  titleStyles,
  isGoBack,
  isLeftTextButtonTitle,
  leftTextButtonTitle,
  onLeftTextButtonPress,
}: Props) {
  return (
    <View style={styles.container}>
      {isGoBack ? (
        <Icon
          name={'arrowleft'}
          type={'AntDesign'}
          style={styles.iconStyle}
          onPress={() => {
            NavigationService.goBack()
          }}
        />
      ) : (
        <Icon
          name={'align-left'}
          type={'FontAwesome'}
          style={styles.iconStyle}
        />
      )}

      <Label14 style={[styles.title, titleStyles]}>{title}</Label14>
      <View style={styles.buttonContainer}>
        {showButton && (
          <AppButton
            title={'TRY PREMIUM'}
            onPress={onButtonPress}
            titleStyles={styles.buttonTitle}
          />
        )}
        {isLeftTextButtonTitle && leftTextButtonTitle && onLeftTextButtonPress && (
          <TouchableOpacity onPress={onLeftTextButtonPress}>
            <Label16 style={styles.title}>{leftTextButtonTitle}</Label16>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default AppHeader
