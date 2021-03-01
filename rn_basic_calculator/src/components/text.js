import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextPropTypes} from 'react-native';
import {COLOR} from 'utils/styles';

import styles from './text.styles';

function mapStateAndPropsToStyle({size, color}) {
  const componentStyles = [styles.text];
  if (size && styles[size]) {
    componentStyles.push(styles[size]);
  }
  if (color) {
    componentStyles.push({color});
  }

  return componentStyles;
}

export default function CalcText({size, color, children, ...rest}) {
  return (
    <Text {...rest} style={mapStateAndPropsToStyle({size, color})}>
      {children}
    </Text>
  );
}

CalcText.propTypes = {
  ...TextPropTypes,
  size: PropTypes.string,
};

CalcText.defaultProps = {
  size: 'md',
  color: COLOR.BLACK,
};
