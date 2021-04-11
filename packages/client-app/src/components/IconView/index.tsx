/**
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colorTextPrimary } from '@assets/styles/index';
import { ICON_CONFIG } from '@assets/styles/config';
import { Platform } from 'react-native';

const getIconSize = (size: string | number | undefined): number => {
  if (!size) {
    return ICON_CONFIG['sm'];
  }

  if (typeof size === 'number') {
    return size;
  }

  return ICON_CONFIG[size];
};

const IconView: React.FC<IconViewProps> = (props) => {
  const { name, color, size, type } = props;
  if (typeof name === 'string') {
    return null;
  }

  const IconElement = name;
  return <IconElement style={{ fontSize: getIconSize(size), color }} />;
};

interface IconViewProps {
  name: any;
  size?: string | number;
  color?: string;
  type?: string;
}

IconView.defaultProps = {
  color: colorTextPrimary,
  size: 'sm',
  type: 'Mi',
};

IconView.propTypes = {
  name: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['Mi', 'Fa5i', 'Fai', 'Mci']),
};

export default IconView;
