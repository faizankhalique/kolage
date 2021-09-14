import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {theme} from '@config/index'
import {getFontSize} from '@components/AppText'

export const AppWrapperStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.ui.background,
  },
})
export const AppHeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: wp(2),
  },
  iconStyle: {
    color: theme.custom.white,
    top: wp(2),
    left: wp(2),
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    top: wp(2),
  },
  buttonContainer: {
    position: 'absolute',
    width: wp(30),
    right: wp(2),
  },
  buttonTitle: {
    fontWeight: 'normal',
    fontSize: getFontSize(12),
  },
})
export const AppButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp(8),
    paddingVertical: wp(3),
    paddingHorizontal: wp(1),
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
})
