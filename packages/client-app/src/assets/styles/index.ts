import {FONT_BOLD, FONT_LIGHT, FONT_MEDIUM, FONT_REGULAR, FONT_SEMIBOLD} from './fonts';
import {
  COLOR_ACCENT_DARK,
  COLOR_INFO,
  COLOR_HEADER,
  COLOR_BLACK,
  COLOR_ACCENT,
  COLOR_DIVIDER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  COLOR_DANGER,
  COLOR_SUCCESS,
  COLOR_LIGHT_GREY,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_BACKGROUND,
  COLOR_DISABLED,
  COLOR_LIGHT_BACKGROUND,
  COLOR_WARNING,
  COLOR_WHATSAPP,
  COLOR_WHITE_LIGHT,
  COLOR_PLACEHOLDER,
  COLOR_VOILET_LIGHT,
} from './colors';
import {TEXT_CONFIG} from './config';

export const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

// InOffice Color Scheme for Mobile APP
export const colorPrimary = COLOR_PRIMARY;
export const colorPrimaryDark = COLOR_PRIMARY_DARK;
export const colorAccent = COLOR_ACCENT;
export const colorAccentDark = COLOR_ACCENT_DARK;
export const colorTextPrimary = COLOR_TEXT_PRIMARY;
export const colorTextSecondary = COLOR_TEXT_SECONDARY;
export const colorPlaceholer = COLOR_PLACEHOLDER;
export const colorWhite = COLOR_WHITE;
export const colorBlack = COLOR_BLACK;
export const colorHeader = COLOR_HEADER;
export const colorDisabled = COLOR_DISABLED;
export const colorLightGrey = COLOR_LIGHT_GREY;
export const colorDanger = COLOR_DANGER;
export const colorSuccess = COLOR_SUCCESS;
export const colorWarning = COLOR_WARNING;
export const colorInfo = COLOR_INFO;
export const colorWhatsApp = COLOR_WHATSAPP;
export const colorTransparent = COLOR_TRANSPARENT;
export const colorBackground = COLOR_BACKGROUND;
export const colorLightBackground = COLOR_LIGHT_BACKGROUND;
export const colorWhiteLight = COLOR_WHITE_LIGHT;
export const colorVoiletLight = COLOR_VOILET_LIGHT;

// InOffice Font Styles=
export const fontLight = FONT_LIGHT;
export const fontRegular = FONT_REGULAR;
export const fontMedium = FONT_MEDIUM;
export const fontSemiBold = FONT_SEMIBOLD;
export const fontBold = FONT_BOLD;

export const background = {
  accent: {
    backgroundColor: COLOR_ACCENT,
  },
  white: {
    backgroundColor: COLOR_WHITE,
  },
  accentDark: {
    backgroundColor: COLOR_ACCENT_DARK,
  },
  header: {
    backgroundColor: COLOR_HEADER,
  },
  disabled: {
    backgroundColor: COLOR_HEADER,
  },
  grey: {
    backgroundColor: COLOR_HEADER,
  },
  transparent: {
    backgroundColor: COLOR_TRANSPARENT,
  },
};

export const elevation = {
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.7,
  shadowRadius: 1,
  elevation: 1,
};

export const border = {
  normal: {
    borderWidth: 0.5,
    borderColor: COLOR_DIVIDER,
  },
  none: {
    borderWidth: 0,
    borderColor: COLOR_TRANSPARENT,
  },
  top: {
    borderTopWidth: 0.5,
    borderTopColor: COLOR_DIVIDER,
  },
  right: {
    borderRightWidth: 0.5,
    borderRightColor: COLOR_DIVIDER,
  },
  bottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR_DIVIDER,
  },
  bodyLight: {
    borderWidth: 0.4,
    borderColor: COLOR_DIVIDER,
  },
  bodyDark: {
    borderWidth: 1,
    borderColor: COLOR_DIVIDER,
  },
  bodyColored: {
    borderWidth: 1,
    borderColor: COLOR_ACCENT,
  },
};

export const divider = {
  light: {
    borderBottomWidth: 0.4,
    borderBottomColor: COLOR_DIVIDER,
  },
  dark: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_DIVIDER,
  },
};
export const height = {
  xs: {
    height: 0.5,
  },
  small: {
    height: 1,
  },
};

export const text = {
  size: {
    xs: {
      fontSize: TEXT_CONFIG['xs'],
    },
    small: {
      fontSize: TEXT_CONFIG['sm'],
    },
    medium: {
      fontSize: TEXT_CONFIG['md'],
    },
    large: {
      fontSize: TEXT_CONFIG['lg'],
    },
    xLarge: {
      fontSize: TEXT_CONFIG['xlg'],
    },
    xxLarge: {
      fontSize: TEXT_CONFIG['xxlg'],
    },
    xxxLarge: {
      fontSize: TEXT_CONFIG['xxxlg'],
    },
  },
  weight: {
    light: {
      fontFamily: FONT_LIGHT,
    },
    regular: {
      fontFamily: FONT_REGULAR,
    },
    medium: {
      fontFamily: FONT_MEDIUM,
    },
    semiBold: {
      fontFamily: FONT_SEMIBOLD,
    },
    bold: {
      fontFamily: FONT_BOLD,
    },
  },
  style: {
    center: {
      textAlign: 'center',
    },
    primary: {
      color: COLOR_TEXT_PRIMARY,
    },
    secondary: {
      color: COLOR_TEXT_SECONDARY,
    },
    accent: {
      color: COLOR_ACCENT,
    },
    white: {
      color: COLOR_WHITE,
    },
    hollow: {
      color: COLOR_WHITE,
    },
    placeholder: {
      color: COLOR_HEADER,
    },
    dark: {
      color: COLOR_TEXT_PRIMARY,
    },
    align: {
      right: {
        textAlign: 'right',
      },
    },
  },
};

export const borderRadius = {
  xs: {
    borderRadius: 2,
  },
  small: {
    borderRadius: 4,
  },
  normal: {
    borderRadius: 6,
  },
  medium: {
    borderRadius: 8,
  },
  large: {
    borderRadius: 10,
  },
  xLarge: {
    borderRadius: 20,
  },
};

export const button = {
  filled: {
    xs: {
      flexDirection: 'row',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: COLOR_ACCENT,
      borderColor: COLOR_ACCENT,
    },
    small: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: COLOR_ACCENT,
      borderColor: COLOR_ACCENT,
    },
    normal: {
      padding: 6,
      backgroundColor: COLOR_ACCENT,
      borderColor: COLOR_ACCENT,
    },
    medium: {
      padding: 8,
      backgroundColor: COLOR_ACCENT,
      borderColor: COLOR_ACCENT,
    },
    large: {
      padding: 10,
      backgroundColor: COLOR_ACCENT,
      borderColor: COLOR_ACCENT,
    },
  },
  hollow: {
    xs: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 2,
      backgroundColor: COLOR_TRANSPARENT,
      borderWidth: 1,
      borderColor: COLOR_ACCENT,
    },
    small: {
      flexDirection: 'row',
      padding: 4,
      backgroundColor: COLOR_TRANSPARENT,
      borderWidth: 1,
      borderColor: COLOR_ACCENT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    normal: {
      flexDirection: 'row',
      padding: 6,
      borderWidth: 1,
      borderColor: COLOR_ACCENT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    medium: {
      padding: 8,
      backgroundColor: COLOR_TRANSPARENT,
      borderWidth: 1,
      borderColor: COLOR_ACCENT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    large: {
      padding: 10,
      backgroundColor: COLOR_TRANSPARENT,
      borderWidth: 1,
      borderColor: COLOR_ACCENT,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  circular: {
    xs: {
      alignItems: 'center',
      padding: 2,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
    small: {
      alignItems: 'center',
      padding: 8,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
    normal: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
    medium: {
      alignItems: 'center',
      padding: 12,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
    large: {
      alignItems: 'center',
      padding: 14,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
    xLarge: {
      alignItems: 'center',
      padding: 16,
      borderRadius: 100,
      backgroundColor: COLOR_ACCENT_DARK,
    },
  },
  style: {
    white: {
      backgroundColor: COLOR_WHITE,
    },
  },
};

export const bottomItem = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
};

export const row = {
  rowNormal: {
    flexDirection: 'row',
  },
  rowInverse: {
    flexDirection: 'row-inverse',
  },
};

export const column = {
  colNormal: {
    flexDirection: 'column',
  },
  colInverse: {
    flexDirection: 'column-reverse',
  },
};

export const flex = {
  one: {
    flex: 1,
  },
  two: {
    flex: 2,
  },
  three: {
    flex: 3,
  },
  four: {
    flex: 4,
  },
  five: {
    flex: 5,
  },
  six: {
    flex: 6,
  },
  seven: {
    flex: 7,
  },
  eight: {
    flex: 8,
  },
  nine: {
    flex: 9,
  },
};

export const justifyContent = {
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexStretch: {
    justifyContent: 'stretch',
  },
  center: {
    justifyContent: 'center',
  },
};

export const alignItems = {
  center: {
    alignItems: 'center',
  },
  start: {
    alignItems: 'flex-start',
  },
  stretch: {
    alignItems: 'stretch',
  },
};

export const alignSelf = {
  stretch: {
    alignSelf: 'stretch',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
};

export const margin = {
  m4: {
    margin: 4,
  },
  m6: {
    margin: 6,
  },
  mTop6: {
    marginTop: 6,
  },
  mBottom6: {
    marginBottom: 6,
  },
  mLeft6: {
    marginLeft: 6,
  },
  mRight6: {
    marginRight: 6,
  },
  m12: {
    margin: 12,
  },
  mTop12: {
    marginTop: 12,
  },
  mBottom12: {
    marginBottom: 12,
  },
  mLeft12: {
    marginLeft: 12,
  },
  mRight12: {
    marginRight: 12,
  },
  m16: {
    margin: 16,
  },
  mTop16: {
    marginTop: 16,
  },
  mBottom16: {
    marginBottom: 16,
  },
  mLeft16: {
    marginLeft: 16,
  },
  mRight16: {
    marginRight: 16,
  },
};

export const padding = {
  p4: {
    padding: 4,
  },
  p6: {
    padding: 6,
  },
  pTop6: {
    paddingTop: 6,
  },
  pBottom6: {
    paddingBottom: 6,
  },
  pLeft6: {
    paddingLeft: 6,
  },
  pRight6: {
    paddingRight: 6,
  },
  p12: {
    padding: 12,
  },
  pTop12: {
    paddingTop: 12,
  },
  pBottom12: {
    paddingBottom: 12,
  },
  pLeft12: {
    paddingLeft: 12,
  },
  pRight12: {
    paddingRight: 12,
  },
  p16: {
    padding: 16,
  },
  pTop16: {
    paddingTop: 16,
  },
  pBottom16: {
    paddingBottom: 16,
  },
  pLeft16: {
    paddingLeft: 16,
  },
  pRight16: {
    paddingRight: 16,
  },
  pBottom80: {
    paddingBottom: 80,
  },
};

export const accent = COLOR_ACCENT;
