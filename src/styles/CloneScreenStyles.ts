import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {theme} from '@config/index'
import {getFontSize} from '@components/AppText'
export const CloneScreenStyles = StyleSheet.create({
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
})
export const ListItemStyles = StyleSheet.create({
  container: {
    marginBottom: wp(4),
  },
  backGroundImageContainer: {
    width: '100%',
    height: hp(22),
    borderRadius: wp(4),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  title: {
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    marginVertical: wp(3),
  },
  iconStyles: {
    color: 'white',
    fontSize: getFontSize(18),
    marginLeft: wp(2),
  },
  priceButton: {
    backgroundColor: 'white',
    width: wp(40),
    paddingVertical: wp(4),
    borderRadius: wp(6),
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  categoryTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: wp(4),
  },
})
