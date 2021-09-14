import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {theme} from '@config/index'
import {getFontSize} from '@components/AppText'
export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    marginTop: wp(5),
  },
  headerText: {
    fontWeight: 'bold',
    marginVertical: wp(5),
  },
  containerList: {
    flex: 1,
    backgroundColor: theme.ui.background,
  },
})

export const NewBlankBoxStyles = StyleSheet.create({
  box: {
    height: wp(60),
    width: wp(45),
    borderRadius: wp(4),
    backgroundColor: theme.custom.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyles: {
    fontSize: getFontSize(30),
    color: '#48484a',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
})
export const AddRemoveBoxStyles = StyleSheet.create({
  container: {
    width: wp(35),
    height: wp(12),
    backgroundColor: theme.custom.white,
    borderRadius: wp(2),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: wp(4),
  },
  left: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.custom.light_grey,
    borderLeftWidth: 1,
  },
})
