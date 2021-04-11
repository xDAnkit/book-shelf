/**
 * @format
 */

import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { colorTransparent, colorAccentDark, colorPlaceholer } from '@assets/styles';
import BoxView from '@components/BoxView';
import TextView from '@components/TextView';
import IconView from '@components/IconView';

/**
 * @description {This InputTextView can be used for taking input from a user. It provides following things mentioned below}
 * Normal Input Text
 * Disabled Input Text
 * Input Text with Left icon
 * Input Text with Right Icon
 * Input Text with Left Text
 */

const _renderTextInput = (props: IInputTextViewProps) => {
  const {
    value,
    align = '',
    size = '',
    placeholder,
    maxLength,
    suggestions,
    editable,
    focus,
    inputType,
    multiline,
    lines,
    onChange,
    onKeyPress
  } = props;

  return (
    <TextInput
      selection={focus === 'left' ? { start: 0, end: 0 } : undefined}
      editable={editable}
      multiline={multiline}
      numberOfLines={lines}
      maxLength={maxLength}
      style={[styles.inputText, styles['align'][align], styles['size'][size]]}
      keyboardType={inputType}
      returnKeyType="done"
      value={value}
      placeholderTextColor={colorPlaceholer}
      autoCorrect={suggestions}
      underlineColorAndroid={colorTransparent}
      placeholder={placeholder}
      onChangeText={(text) => onChange(text)}
      onKeyPress={onKeyPress}
    />
  );
};

const InputTextView: React.FC<IInputTextViewProps> = (props) => {
  const {
    size,
    leftIcon = '',
    leftText = '',
    rightIcon = '',
    rightText = '',
    background = '',
    elevation = '',
    round = '',
    border = '',
    iconType = 'Mi'
  } = props;

  // Case 1   - Having Right or left text
  if (leftText !== '' || rightText !== '') {
    const leftTextView =
      leftText !== '' ? (
        <BoxView padding="xsm" alignItems="center">
          <TextView label={leftText} weight="bold" size={size} />
        </BoxView>
      ) : null;
    const rightTextView =
      rightText !== '' ? (
        <BoxView padding="xsm" alignItems="center">
          <TextView label={rightText} size={size} />
        </BoxView>
      ) : null;
    return (
      <BoxView
        alignItems="center"
        border={border}
        radius={round}
        padding="xsm"
        direction="row"
        background={background}
        elevation={elevation}
      >
        {leftTextView}
        {_renderTextInput(props)}
        {rightTextView}
      </BoxView>
    );
  }

  // Case 2   - Having Righr or left icon
  if (leftIcon !== '' || rightIcon !== '') {
    const leftIconView =
      leftIcon !== '' ? (
        <BoxView padding="xxs" alignItems="center">
          <IconView type={iconType} name={leftIcon} size={24} color={colorAccentDark} />
        </BoxView>
      ) : null;
    const rightIconView =
      rightIcon !== '' ? (
        <BoxView padding="xxs" alignItems="center">
          <IconView type={iconType} name={rightIcon} size={24} color={colorAccentDark} />
        </BoxView>
      ) : null;

    return (
      <BoxView
        border={border}
        radius={round}
        padding="xsm"
        direction="row"
        alignItems="center"
        background={background}
        elevation={elevation}
      >
        {leftIconView}
        {_renderTextInput(props)}
        {rightIconView}
      </BoxView>
    );
  }

  // Case 3   - Regular Input Text
  return (
    <BoxView
      border={border}
      radius={round}
      padding="xsm"
      direction="row"
      alignItems="center"
      background={background}
      elevation={elevation}
    >
      {_renderTextInput(props)}
    </BoxView>
  );
};

interface IInputTextViewProps {
  value: string;
  iconType?: string;
  maxLength?: number;
  align?: string;
  size?: string;
  border?: string;
  placeholder?: string;
  suggestions?: boolean;
  multiline?: boolean;
  lines?: number;
  editable?: boolean;
  inputType?: any;
  background?: string;
  leftIcon?: string;
  leftText?: string;
  rightIcon?: string;
  rightText?: string;
  round?: string;
  elevation?: string;
  focus?: string;
  onChange: (text: any) => void;
  onKeyPress?: (e: any) => void;
}

InputTextView.defaultProps = {
  value: '',
  iconType: 'Mi',
  maxLength: 2096,
  align: '',
  size: '',
  border: '',
  placeholder: '',
  suggestions: true,
  multiline: false,
  lines: 1,
  background: 'transparent',
  editable: true,
  inputType: 'default',
  leftIcon: undefined,
  leftText: undefined,
  rightIcon: undefined,
  rightText: undefined,
  round: '',
  elevation: '',
  focus: '',
  onChange: undefined
};

InputTextView.propTypes = {
  value: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.string,
  border: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  suggestions: PropTypes.bool,
  multiline: PropTypes.bool,
  lines: PropTypes.number,
  background: PropTypes.string,
  editable: PropTypes.bool,
  inputType: PropTypes.string,
  leftIcon: PropTypes.string,
  leftText: PropTypes.string,
  rightIcon: PropTypes.string,
  rightText: PropTypes.string,
  round: PropTypes.string,
  elevation: PropTypes.string,
  focus: PropTypes.string,
  onChange: PropTypes.func.isRequired || null,
  onKeyPress: PropTypes.func
};

export default InputTextView;
