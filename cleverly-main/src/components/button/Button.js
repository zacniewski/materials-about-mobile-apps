import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors, constants, spacing, typography } from '../../styles';
import GoForward from '../../assets/svg/icons/Go-forward.svg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.MAIN_COLORS.PRIMARY,
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    padding: spacing.SCALE_12,
  },
  label: {
    ...typography.FONT_BOLD,
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  leftActionContainer: {
    alignItems: 'flex-start',
  },
});

export default function Button({
  onPress,
  label,
  isChevronDisplayed = false,
  activeOpacity = 0.5,
}) {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.actionContainer, styles.leftActionContainer]} />
        <Text style={styles.label}>{label}</Text>
        <View style={styles.actionContainer}>
          {isChevronDisplayed && <GoForward />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  isChevronDisplayed: PropTypes.bool,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
};
