/**
 * @format
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import BoxView from '@components/BoxView';
import TextView from '@components/TextView';
import IconView from '@components/IconView';
import { WhatsApp, ArrowForward } from '@material-ui/icons';

const getButtonView = (
  label: string,
  iconType: string,
  background: string,
  color: string,
  icon: any,
  size: string,
  iconColor: string
) => {
  const IconElement = icon;
  if (icon !== '') {
    return (
      <BoxView
        padding="md"
        justify="spaceBetween"
        direction="row"
        alignItems="center"
        background={background}
        radius="sm"
      >
        <TextView size={size} weight="bold" color={color} label={label} />
        <IconElement style={{ color: iconColor }} />
      </BoxView>
    );
  }

  return (
    <BoxView padding="md" background={background} radius="sm">
      <TextView size="lg" weight="bold" color={color} align="center" label={label} />
    </BoxView>
  );
};

const ButtonItemView: React.FC<ButtonItemProps> = (props) => {
  const {
    onPress,
    label,
    background = 'darkAccent',
    color = 'white',
    icon = '',
    size = 'md',
    iconType = 'Mi',
    iconColor = 'white',
  } = props;
  const buttonView = getButtonView(label, iconType, background, color, icon, size, iconColor);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {buttonView}
    </TouchableOpacity>
  );
};

interface ButtonItemProps {
  onPress(): any;
  label: string;
  background?: string;
  color?: string;
  icon?: any;
  size?: string;
  iconType?: string;
  iconColor?: string;
}

ButtonItemView.defaultProps = {
  onPress: undefined,
  label: '',
  background: 'darkAccent',
  color: 'white',
  size: 'md',
  iconType: 'Mi',
  iconColor: 'white',
};

ButtonItemView.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.any,
  iconType: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg']).isRequired,
  iconColor: PropTypes.string,
};

export default ButtonItemView;
