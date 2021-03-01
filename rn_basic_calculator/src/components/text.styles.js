import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const baseStyles = {
  text: {
    fontFamily: 'Audiowide-Regular',
  },
  xs: {
    fontSize: wp(2),
  },
  sm: {
    fontSize: wp(4),
  },
  md: {
    fontSize: wp(6),
  },
  lg: {
    fontSize: wp(8),
  },
};

const styles = StyleSheet.create(baseStyles);

export default styles;
