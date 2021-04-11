import {
  colorTransparent,
  colorWhite,
  colorDisabled,
  fontMedium,
  fontBold,
  colorTextPrimary,
  fontRegular,
} from '@assets/styles';

export const styles: any = {
  inputText: {
    flex: 1,
    color: colorTextPrimary,
    paddingLeft: 4,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },
  inputTextPlaceholder: {},
  default: {
    backgroundColor: colorTransparent,
  },
  white: {
    backgroundColor: colorWhite,
  },
  grey: {
    backgroundColor: colorDisabled,
  },
  align: {
    center: {
      textAlign: 'center',
    },
  },
  size: {
    xs: {
      fontSize: 11,
    },
    sm: {
      fontSize: 12,
    },
    md: {
      fontSize: 14,
    },
    lg: {
      fontSize: 18,
    },
    xlg: {
      fontSize: 24,
    },
    xxlg: {
      fontSize: 28,
    },
    xxxlg: {
      fontSize: 96,
    },
  },
};
