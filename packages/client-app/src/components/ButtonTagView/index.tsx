/**
 * @format
 */

import React from 'react';
import {TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';

const ButtonTagView: React.FC<ButtonItemProps> = (props) => {
  const {onPress, children} = props;

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

interface ButtonItemProps {
  onPress(): any;
}

ButtonTagView.defaultProps = {
  onPress: undefined,
};

ButtonTagView.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ButtonTagView;
