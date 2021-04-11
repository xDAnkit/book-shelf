import {
  colorTextPrimary,
  colorTextSecondary,
  colorAccentDark,
  fontLight,
  fontRegular,
  fontMedium,
  fontSemiBold,
  fontBold,
  colorWhite,
  colorDanger,
  colorSuccess,
  colorPlaceholer,
  colorWarning,
} from '@assets/styles';

export const styles: any = {
  // Weight Styling
  light: {
    fontFamily: fontLight,
  },
  regular: {
    fontFamily: fontRegular,
  },
  medium: {
    fontFamily: fontMedium,
    fontWeight: 400,
  },
  semiBold: {
    fontFamily: fontSemiBold,
    fontWeight: 500,
  },
  bold: {
    fontFamily: fontBold,
    fontWeight: 600,
  },
  none: {},
  noneCancelled: {
    textDecorationLine: 'line-through',
  },
  noneBold: {
    fontWeight: 'bold',
  },
  // Text Color
  placeholer: {
    color: colorPlaceholer,
  },
  primary: {
    color: colorTextPrimary,
  },
  secondary: {
    color: colorTextSecondary,
  },
  accent: {
    color: colorAccentDark,
  },
  white: {
    color: colorWhite,
  },
  danger: {
    color: colorDanger,
  },
  success: {
    color: colorSuccess,
  },
  warning: {
    color: colorWarning,
  },

  // Text sizes
  xxs: {
    fontSize: 11,
  },
  xs: {
    fontSize: 12,
  },
  sm: {
    fontSize: 13,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 17,
  },
  xlg: {
    fontSize: 25,
  },
  xxlg: {
    fontSize: 30,
  },
  xxxlg: {
    fontSize: 48,
  },

  // Text Alignment
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
};
