import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Text from 'components/text';
import ThemeContext from 'contexts/themes';

import styles from './calcButton.styles';

function mapStateAndPropsToStyles({color, textColor, style}) {
  const componentStyles = [styles.calcButton];
  if (color) {
    componentStyles.push({backgroundColor: color});
  }
  if (textColor) {
    componentStyles.push({color: textColor});
  }
  if (style) {
    if (Array.isArray(style)) {
      componentStyles.push(...style);
    } else {
      componentStyles.push(style);
    }
  }

  return componentStyles;
}
function drillDownStateAndProps({textColor}) {
  return {
    color: textColor,
  };
}

function CalcButton(props) {
  const [theme] = useContext(ThemeContext);
  const {calcButton: themeCalcButtonProps = {}} = theme;
  const mixedProps = {...themeCalcButtonProps, ...props};
  const {
    color,
    textColor,
    onPress,
    children,
    textProps = {},
    style,
  } = mixedProps;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={mapStateAndPropsToStyles({
        color,
        textColor,
        style,
      })}>
      <Text {...drillDownStateAndProps({textColor})} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

CalcButton.propTypes = {
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  textProps: PropTypes.object,
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default memo(CalcButton);
