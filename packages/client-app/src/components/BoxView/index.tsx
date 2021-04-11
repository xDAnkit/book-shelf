/**
 * @format
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const BoxView: React.FC<BoxProps> = (props) => {
  const {
    scroll,
    keyboardShouldPersistTaps,
    children,
    flex = '',
    background = '',
    padding = '',
    direction = ''
  } = props;

  if (!!scroll) {
    return (
      <ScrollView
        contentContainerStyle={[
          styles.padding.pb60,
          styles[direction],
          styles['flex'][flex],
          styles['background'][background],
          styles['padding'][padding]
        ]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        {children}
      </ScrollView>
    );
  }

  const {
    round = '',
    radius = '',
    position = '',
    elevation = '',
    alignItems = '',
    alignSelf = '',
    border = '',
    justify = '',
    margin = '',
    height = '',
    width = ''
  } = props;
  return (
    <View
      style={[
        styles['flex'][flex],
        styles['round'][round],
        styles['radius'][radius],
        styles['elevation'][elevation],
        styles['position'][position],
        styles[direction],
        styles['background'][background],
        styles['alignItems'][alignItems],
        styles['alignSelf'][alignSelf],
        styles['border'][border],
        styles['justify'][justify],
        styles['margin'][margin],
        styles['padding'][padding],
        styles['height'][height]
      ]}
    >
      {children}
    </View>
  );
};

interface BoxProps {
  flex?: string;
  round?: string;
  radius?: string;
  position?: string;
  elevation?: string;
  background?: string;
  direction?: string;
  align?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  border?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  scroll?: boolean;
  scrollCover?: boolean;
  keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled';
}

BoxView.defaultProps = {
  flex: '',
  round: '',
  radius: '',
  position: '',
  elevation: '',
  background: 'transparent',
  direction: '',
  margin: '',
  padding: '',
  align: '',
  alignContent: '',
  alignItems: '',
  alignSelf: '',
  justify: '',
  border: '',
  width: undefined,
  height: undefined,
  scroll: undefined,
  scrollCover: false,
  keyboardShouldPersistTaps: undefined
};

BoxView.propTypes = {
  flex: PropTypes.string,
  round: PropTypes.string,
  radius: PropTypes.string,
  position: PropTypes.string,
  elevation: PropTypes.string,
  background: PropTypes.string,
  direction: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  alignSelf: PropTypes.string,
  justify: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  scroll: PropTypes.bool,
  scrollCover: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.oneOf(['always', 'never', 'handled'])
};

export default BoxView;
