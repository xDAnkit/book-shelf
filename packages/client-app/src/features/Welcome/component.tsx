import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BoxView from '@components/BoxView';
import { NavigateToBooksView } from '@navigation/routes';
import { StatusBar, Animated } from 'react-native';
import { colorAccent, colorWhite } from '@assets/styles';
import { IProps } from './types';
import { initLanguage } from '@i18n';
import IconView from '@components/IconView';
import TextView from '@components/TextView';
import { Book } from '@material-ui/icons';

export default class Welcome extends PureComponent<any, any> {
  state = {
    startValue: new Animated.Value(1),
    endValue: 1.2
  };

  static propTypes = {
    onGetAccountDetails: PropTypes.func.isRequired
  };

  componentDidMount() {
    Animated.loop(
      Animated.spring(this.state.startValue, {
        toValue: this.state.endValue,
        friction: 0,
        useNativeDriver: true
      })
    ).start();
    this._handleValidateSession();
  }

  _handleValidateSession = async () => {
    await initLanguage();
    setTimeout(() => NavigateToBooksView(), 1500);
  };

  render() {
    return (
      <BoxView background="danger" flex="one" padding="md" alignItems="center" justify="center">
        <StatusBar backgroundColor={colorAccent} barStyle="light-content" />
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: this.state.startValue
                }
              ]
            }
          ]}
        >
          <Book style={{ color: colorWhite, fontSize: 100 }} />
        </Animated.View>
        <BoxView margin="ymd" alignItems="center">
          <TextView label="Book Shelf" color="white" size="xxxlg" />
          <TextView label="Manage your book shelf!" color="white" size="lg" />
        </BoxView>
        <TextView label="#A React &amp; NodeJS Monorepo" color="white" size="xs" />
      </BoxView>
    );
  }
}
