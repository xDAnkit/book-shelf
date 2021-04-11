/**
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const TextView: React.FC<TextViewProps> = (props) => {
  const { label = '', weight = '', color = '', size = '', align = '', lines = 1 } = props;
  return (
    <Text numberOfLines={lines} style={[styles[color], styles[weight], styles[size], styles[align]]}>
      {label}
    </Text>
  );
};

interface TextViewProps {
  label: string;
  weight?: string;
  color?: string;
  size?: string;
  align?: string;
  lines?: number;
}

TextView.defaultProps = {
  label: '',
  color: 'primary',
  weight: 'medium',
  size: 'sm',
  align: 'left',
  lines: 1,
};

TextView.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'placeholder', 'secondary', 'white', 'accent', 'danger', 'warning']),
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'medium',
    'semiBold',
    'bold',
    'none',
    'noneBold',
    'noneBoldXXLarge',
    'noneCancelled',
  ]),
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xlg', 'xxlg', 'xxxlg']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  lines: PropTypes.number,
};

export default TextView;
