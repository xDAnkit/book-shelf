import {
  colorTextPrimary,
  colorTextSecondary,
  colorAccent,
  colorTransparent,
  colorBlack,
  colorWhite,
  colorInfo,
  colorDanger,
  colorSuccess,
  colorAccentDark,
  colorDisabled,
} from '@assets/styles';

export const styles: any = {
  // Content Direction
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },

  // Text Color
  primary: {
    color: colorTextPrimary,
  },
  secondary: {
    color: colorTextSecondary,
  },

  // Text sizes
  xs: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
  },
  sm: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  md: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
  },
  lg: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  xlg: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  xxlg: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },

  // Button Style
  filled: {
    backgroundColor: colorAccentDark,
    borderColor: colorAccentDark,
    borderWidth: 1.3,
  },
  disabled: {
    backgroundColor: colorDisabled,
    borderColor: colorDisabled,
    borderWidth: 1.3,
  },
  hollow: {
    backgroundColor: colorTransparent,
    borderColor: colorAccent,
    borderWidth: 1.3,
  },
  dark: {
    backgroundColor: colorBlack,
    borderColor: colorBlack,
    borderWidth: 1.3,
  },
  white: {
    backgroundColor: colorWhite,
    borderColor: colorWhite,
    borderWidth: 1.3,
  },
  info: {
    backgroundColor: colorInfo,
    borderColor: colorInfo,
    borderWidth: 1.3,
  },
  danger: {
    backgroundColor: colorDanger,
    borderColor: colorDanger,
    borderWidth: 1.3,
  },
  success: {
    backgroundColor: colorSuccess,
    borderColor: colorSuccess,
    borderWidth: 1.3,
  },
  link: {
    backgroundColor: colorTransparent,
  },
  rounded: {
    borderRadius: 5,
  },
  none: {
    borderRadius: 0,
  },
};
