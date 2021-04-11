import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextView from '@components/TextView';
import { styles } from './styles';
import BoxView from '@components/BoxView';
import ReactModal from 'react-modal';
import './styles.css';

import Rodal from 'rodal';
import ButtonItemView from '@components/ButtonItemView';
import { Cancel, Refresh } from '@material-ui/icons';
import ButtonTagView from '@components/ButtonTagView';
import IconView from '@components/IconView';

const ModalView: React.FC<ModalProps> = (props) => {
  const { visible, title, close, hide, position = 'bottom', backdropClick, width, height, measure, refresh } = props;

  console.log('@Ankit visible: ', visible);

  const RenderModalAction = () => {
    let refreshButton = null;
    if (refresh) {
      refreshButton = (
        <BoxView margin="xmd">
          <ButtonTagView onPress={refresh}>
            <IconView name={Refresh} size="xxxlg" />
          </ButtonTagView>
        </BoxView>
      );
    }

    return (
      <BoxView direction="row">
        {refreshButton}
        <ButtonTagView onPress={close}>
          <IconView name={Cancel} size="xxxlg" />
        </ButtonTagView>
      </BoxView>
    );
  };

  const RenderChildren = () => {
    if (!visible) {
      return null;
    }

    return (
      <BoxView padding="md" background="white">
        <BoxView border="bottom" direction="row" justify="spaceBetween" alignItems="center" padding="ysm">
          <TextView size="xlg" weight="bold" label={title} />
          <ButtonTagView onPress={close}>
            <IconView name={Cancel} size="xxxlg" />
          </ButtonTagView>
        </BoxView>
        <BoxView padding="ylg">{props.children}</BoxView>
      </BoxView>
    );
  };

  return (
    <Rodal
      customStyles={{ padding: 0 }}
      measure={measure}
      width={width}
      height={height}
      animation="slideRight"
      visible={visible}
      onClose={close}
    >
      {RenderChildren()}
    </Rodal>
  );
};

interface ModalProps {
  visible: boolean;
  title: string;
  position?: string;
  close: () => void;
  hide?: () => void;
  refresh?: () => void;
  backdropClick?: boolean;
  width?: number;
  height?: number;
  measure?: string;
}

ModalView.defaultProps = {
  visible: false,
  title: '',
  position: 'bottom',
  close: undefined,
  hide: undefined,
  refresh: undefined,
  backdropClick: true,
  width: 400,
  height: 240,
  measure: undefined,
};

ModalView.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  close: PropTypes.func.isRequired || null,
  hide: PropTypes.func || null,
  refresh: PropTypes.func || null,
  backdropClick: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
};

export default ModalView;
