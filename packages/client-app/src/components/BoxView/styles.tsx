import { Platform } from 'react-native';
import {
  colorDisabled,
  colorWhite,
  colorDanger,
  colorSuccess,
  colorTransparent,
  colorLightGrey,
  colorInfo,
  colorAccent,
  colorBackground,
  colorAccentDark,
  colorLightBackground,
  colorWarning,
  colorWhatsApp,
  colorBlack,
  colorTextPrimary,
  colorVoiletLight
} from '@assets/styles';

export const styles: any = {
  // Flex

  flex: {
    one: {
      flex: 1
    },
    two: {
      flex: 2
    },
    three: {
      flex: 3
    },
    four: {
      flex: 4
    },
    five: {
      flex: 5
    },
    six: {
      flex: 6
    },
    seven: {
      flex: 7
    },
    eight: {
      flex: 8
    },
    nine: {
      flex: 9
    }
  },

  // Content Direction
  row: {
    flexDirection: 'row',
    flexFlow: 'wrap'
  },
  column: {
    flexDirection: 'column'
  },

  // margin
  m6: {
    margin: 6
  },
  m12: {
    margin: 12
  },

  padding: {
    xs: {
      padding: 2
    },
    yxs: {
      paddingTop: 4,
      paddingBottom: 4
    },
    xSMyXS: {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 12,
      paddingBottom: 12
    },
    sm: {
      padding: 6
    },
    xsm: {
      paddingLeft: 6,
      paddingRight: 6
    },
    xxs: {
      paddingLeft: 4,
      paddingRight: 4
    },
    md: {
      padding: 12
    },
    lg: {
      padding: 32
    },
    xmd: {
      paddingLeft: 12,
      paddingRight: 12
    },
    xlg: {
      paddingLeft: 16,
      paddingRight: 16
    },
    ysm: {
      paddingTop: 6,
      paddingBottom: 6
    },
    ymd: {
      paddingTop: 12,
      paddingBottom: 12
    },
    ylg: {
      paddingTop: 16,
      paddingBottom: 16
    },
    pb60: {
      paddingBottom: 60
    }
  },
  margin: {
    xl6: {
      marginLeft: 6
    },
    lrbsm: {
      marginLeft: 6,
      marginRight: 6,
      marginBottom: 6
    },
    yxs: {
      marginTop: 4,
      marginBottom: 4
    },
    xs: {
      margin: 2
    },
    xss: {
      margin: 2
    },
    xsTop: {
      marginTop: 2
    },
    sm: {
      margin: 6
    },
    xsm: {
      marginLeft: 6,
      marginRight: 6
    },
    xxs: {
      marginLeft: 4,
      marginRight: 4
    },
    smTop: {
      marginTop: 6
    },
    mdTop: {
      marginTop: 12
    },
    ysm: {
      marginTop: 2,
      marginBottom: 2
    },
    ymd: {
      marginTop: 12,
      marginBottom: 12
    },
    xmd: {
      marginLeft: 12,
      marginRight: 12
    },
    xlg: {
      marginLeft: 62,
      marginRight: 62
    },
    lg: {
      margin: 16
    },
    md: {
      margin: 12
    },
    ylg: {
      marginTop: 16,
      marginBottom: 16
    },
    mbsm: {
      marginBottom: 4
    },
    mbmd: {
      marginBottom: 12
    }
  },

  // Align items

  alignContent: {
    center: {
      alignContent: 'center'
    },
    flexEnd: {
      alignContent: 'flex-end'
    },
    flexStart: {
      alignContent: 'flex-start'
    },
    spaceAround: {
      alignContent: 'space-around'
    },
    spaceBetween: {
      alignContent: 'space-between'
    },
    stretch: {
      alignContent: 'stretch'
    }
  },

  alignItems: {
    center: {
      alignItems: 'center'
    },
    flexEnd: {
      alignItems: 'flex-end'
    },
    flexStart: {
      alignItems: 'flex-start'
    },
    spaceAround: {
      alignItems: 'space-around'
    },
    spaceBetween: {
      alignItems: 'space-between'
    },
    stretch: {
      alignItems: 'stretch'
    }
  },

  justify: {
    center: {
      justifyContent: 'center'
    },
    flexEnd: {
      justifyContent: 'flex-end'
    },
    flexStart: {
      justifyContent: 'flex-start'
    },
    spaceAround: {
      justifyContent: 'space-around'
    },
    spaceBetween: {
      justifyContent: 'space-between'
    },
    spaceEvenly: {
      justifyContent: 'space-evenly'
    }
  },

  // Align self

  alignSelf: {
    center: {
      alignSelf: 'center'
    },
    flexEnd: {
      alignSelf: 'flex-end'
    },
    flexStart: {
      alignSelf: 'flex-start'
    },
    auto: {
      alignSelf: 'auto'
    },
    baseline: {
      alignSelf: 'baseline'
    },
    stretch: {
      alignSelf: 'stretch'
    }
  },

  border: {
    xs: {
      borderWidth: 0.6,
      borderColor: colorDisabled
    },
    xxs: {
      borderRightWidth: 0.6,
      borderRightColor: colorDisabled
    },
    sm: {
      borderWidth: 1,
      borderColor: colorDisabled
    },
    md: {
      borderWidth: 1.3,
      borderColor: colorDisabled
    },
    topXs: {
      borderTopWidth: 1,
      borderTopColor: colorDisabled
    },
    bottomXs: {
      borderBottomWidth: 0.6,
      borderBottomColor: colorDisabled
    },
    bottom: {
      borderBottomWidth: 0.5,
      borderBottomColor: colorDisabled
    },
    top: {
      borderTopWidth: 1,
      borderTopColor: colorDisabled
    },
    right: {
      borderRightWidth: 1,
      borderRightColor: colorDisabled
    },
    bsm: {
      borderWidth: 1,
      borderColor: colorBlack
    },
    smInput: {
      borderWidth: 0.7,
      borderColor: colorTextPrimary
    }
  },

  // Background
  background: {
    accent: {
      backgroundColor: colorAccent
    },
    darkAccent: {
      backgroundColor: colorAccentDark
    },
    primary: {
      backgroundColor: colorBackground
    },
    white: {
      backgroundColor: colorWhite
    },
    transparent: {
      backgroundColor: colorTransparent
    },
    grey: {
      backgroundColor: colorDisabled
    },
    lightGrey: {
      backgroundColor: colorLightGrey
    },
    danger: {
      backgroundColor: colorDanger
    },
    success: {
      backgroundColor: colorSuccess
    },
    warning: {
      backgroundColor: colorWarning
    },
    info: {
      backgroundColor: colorInfo
    },
    lightBlue: {
      backgroundColor: colorLightBackground
    },
    darkGreen: {
      backgroundColor: colorWhatsApp
    },
    lightVoilet: {
      backgroundColor: colorVoiletLight
    }
  },

  // Position
  position: {
    bottom: {
      flex: 1,
      padding: 0,
      margin: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      bottom: 0
    },
    top: {
      flex: 1,
      padding: 0,
      margin: 0,
      left: 0,
      right: 0,
      top: 0,
      position: 'absolute'
    },
    bottonRight: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      right: 16,
      bottom: 12,
      zIndex: 1
    }
  },
  elevation: {
    xs: {
      shadowOffset: {
        width: 0,
        height: 0
      },

      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 1
    },
    sm: {
      shadowOffset: {
        width: 0,
        height: 0
      },

      shadowOpacity: Platform.OS === 'android' ? 0.5 : 0.2,
      shadowRadius: Platform.OS === 'android' ? 2 : 1,
      elevation: Platform.OS === 'android' ? 2 : 1
    },
    md: {
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 20
    },
    roundLg: {
      elevation: 8
    }
  },
  round: {
    xs: {
      borderRadius: 6
    },
    sm: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 38,
      height: 38
    },
    md: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 42,
      height: 42
    },
    lg: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 52,
      height: 52
    },
    xlg: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 62,
      height: 62
    },
    xxlg: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 82,
      height: 82
    },
    xxxlg: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 112,
      height: 112
    },
    xxxxlg: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 200,
      width: 360,
      height: 360
    }
  },
  curve: {
    sm: {
      borderRadius: 12
    }
  },
  height: {
    '400': {
      height: 300
    }
  },
  radius: {
    xs: {
      borderRadius: 40
    },
    sm: {
      borderRadius: 6
    },
    md: {
      borderRadius: 12
    },
    lg: {
      borderRadius: 20
    },
    xlg: {
      borderRadius: 100
    }
  }
};
