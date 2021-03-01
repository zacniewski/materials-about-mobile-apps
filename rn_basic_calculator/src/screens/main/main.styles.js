import {StyleSheet} from 'react-native';
import {COLOR, HELPER} from 'utils/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const baseStyles = {
  mainScreen: {
    flex: 1,
    position: 'relative',
  },
  upperContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    padding: HELPER.SPACE,
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  darkish: {
    backgroundColor: COLOR.BLACK,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  mainButton: {
    flex: 2,
  },
  historyContainer: {
    position: 'absolute',
    top: HELPER.SPACE * 3,
    right: HELPER.SPACE,
  },
  themesContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 20,
    top: 40,
    zIndex: 999,
  },
  theme: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(2.5),
    marginRight: HELPER.SPACE,
  },
};

const styles = StyleSheet.create(baseStyles);

export default styles;
