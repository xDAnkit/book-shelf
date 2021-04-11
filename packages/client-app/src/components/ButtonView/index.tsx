/**
 * @format
 */

import React from 'react';
import {TouchableOpacity, Platform, TouchableNativeFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import TextView from '@components/TextView';
import {styles} from './styles';

const ButtonView: React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    label,
    color,
    size = '',
    textSize,
    style = '',
    direction = '',
    outline = '',
    onClick,
  } = props;
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      onPress={onClick}
      style={[styles[direction], styles[size], styles[style]]}
      disabled={!!disabled}>
      <View style={[styles[style], styles[size], styles[outline]]}>
        <TextView label={label} align={'center'} color={color} size={textSize} weight="bold" />
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity activeOpacity={0.8} onPress={onClick} disabled={!!disabled}>
      <View style={[styles[style], styles[size], styles[outline]]}>
        <TextView label={label} align={'center'} color={color} size={textSize} weight="bold" />
      </View>
    </TouchableOpacity>
  );
};

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: string;
  color?: string;
  size?: string;
  textSize?: string;
  direction?: string;
  style?: string;
  onClick?: () => void;
}

ButtonView.defaultProps = {
  label: '',
  disabled: false,
  outline: 'rounded',
  color: 'white',
  size: 'lg',
  textSize: 'lg',
  direction: 'row',
  style: 'filled',
  onClick: undefined,
};

ButtonView.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  outline: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  textSize: PropTypes.string,
  direction: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func || null,
};

export default ButtonView;
