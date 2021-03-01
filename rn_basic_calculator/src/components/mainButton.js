import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Text from 'components/text';
import ThemeContext from 'contexts/themes';

import styles from './mainButton.styles';

function mapStateAndPropsToStyles({style, linearGradientStyle}) {
  const componentStyles = {
    mainButton: [styles.mainButton],
    linearGradient: [styles.linearGradient],
  };
  if (style) {
    if (Array.isArray(style)) {
      componentStyles.mainButton.push(...style);
    } else {
      componentStyles.mainButton.push(style);
    }
  }
  if (linearGradientStyle) {
    if (Array.isArray(linearGradientStyle)) {
      componentStyles.linearGradient.push(...linearGradientStyle);
    } else {
      componentStyles.linearGradient.push(linearGradientStyle);
    }
  }

  return componentStyles;
}

function drillDownStateAndProps({textColor}) {
  return {
    color: textColor,
  };
}

function MainButton(props) {
  const [theme] = useContext(ThemeContext);
  const {mainButton: themeMainButtonProps = {}} = theme;
  const mixedProps = {...themeMainButtonProps, ...props};
  const {
    colors,
    textColor,
    onPress,
    children,
    textProps = {},
    style,
  } = mixedProps;
  const {
    mainButton: mainButtonStyle,
    linearGradient: linearGradientStyle,
  } = mapStateAndPropsToStyles({style});
  return (
    <TouchableOpacity style={mainButtonStyle} onPress={onPress}>
      <LinearGradient colors={colors} style={linearGradientStyle}>
        <Text {...drillDownStateAndProps({textColor})} {...textProps}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

MainButton.propTypes = {
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  textProps: PropTypes.object,
  colors: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  linearGradientStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default MainButton;
