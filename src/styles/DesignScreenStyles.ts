import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {theme} from '@config/index'
import {getFontSize} from '@components/AppText'
export const DesignScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
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
  headerTitle: {
    fontSize: getFontSize(12),
    top: wp(3),
    color: theme.custom.light_grey,
    textTransform: 'uppercase',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: wp(2),
  },
  toolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderColor: theme.custom.white,
    borderTopWidth: wp(1),
    paddingVertical: wp(2),
  },
})
export const DesignBoxStyles = StyleSheet.create({
  box: {
    width: wp(60),
    height: hp(20),
    backgroundColor: theme.custom.white,
    marginHorizontal: 1,
  },
})
export const DesignModeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: wp(1),
  },

  landscapeBox: {
    borderColor: theme.custom.light_grey,
    borderWidth: 1,
    height: wp(7),
    width: wp(14),
  },
  squareBox: {
    borderColor: theme.custom.light_grey,
    borderWidth: 1,
    height: wp(8),
    width: wp(8),
  },
  potraitBox: {
    borderColor: theme.custom.light_grey,
    borderWidth: 1,
    height: wp(10),
    width: wp(7),
  },
  storiesBox: {
    borderColor: theme.custom.light_grey,
    borderWidth: 1,
    height: wp(12),
    width: wp(5),
  },
})
export const DesignToolItemStyles = StyleSheet.create({
  icon: {
    color: theme.custom.white,
    fontSize: getFontSize(28),
  },
})
