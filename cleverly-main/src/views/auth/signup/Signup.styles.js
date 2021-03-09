import { StyleSheet } from 'react-native';

import { colors, spacing, typography } from '../../../styles';

export const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  title: {
    ...typography.FONT_BOLD,
    textAlign: 'center',
    fontSize: typography.FONT_SIZE_18,
    paddingVertical: spacing.SCALE_8,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.ADDITIONAL_COLORS.TEXT.HINT,
    paddingVertical: spacing.SCALE_8,
  },
  actionContainer: {
    alignItems: 'flex-start',
  },
  container: {
    paddingVertical: spacing.SCALE_18,
    paddingHorizontal: spacing.SCALE_18,
    flex: 1,
    justifyContent: 'space-between',
  },
});
