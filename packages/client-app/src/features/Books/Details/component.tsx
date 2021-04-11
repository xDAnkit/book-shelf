import React, { Component } from 'react';
import BoxView from '@components/BoxView';
import TextView from '@components/TextView';
import ButtonTagView from '@components/ButtonTagView';
import ButtonItemView from '@components/ButtonItemView';
import IconView from '@components/IconView';
import { Star, LocalOffer, EventAvailable, ShoppingCart, FlashOn } from '@material-ui/icons';
import { colorSuccess } from '@assets/styles';
import { Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

export default class BookDetailsView extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      screenWidth: Math.round(width)
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: Math.round(window.innerWidth) });
  };

  render() {
    const { data } = this.props;
    console.log('Data:: ', data);
    const { screenWidth } = this.state;
    const showDirectionOnSmallDevice = screenWidth < 945 ? 'column' : 'row';
    const showDirectionOnExtraSmallDevice = screenWidth < 756 ? 'ysm' : 'lg';
    return (
      <BoxView background="white" flex="one" padding="pb60">
        <BoxView margin={showDirectionOnExtraSmallDevice} direction={showDirectionOnSmallDevice}>
          <BoxView flex="four">
            <BoxView justify="center" alignItems="center">
              <BoxView round="xxxxlg">
                <img width="260" height="260" src="https://images-na.ssl-images-amazon.com/images/I/81nFI-hPu5L.jpg" />
              </BoxView>
            </BoxView>
            <BoxView margin="ymd" flex="one" border="top" padding="sm">
              <BoxView direction="row">
                <BoxView flex="five">
                  <ButtonItemView background="warning" icon={ShoppingCart} label="ADD TO CART" onPress={() => {}} />
                </BoxView>
                <BoxView flex="five" margin="xl6">
                  <ButtonItemView background="danger" icon={FlashOn} label="BUY NOW" onPress={() => {}} />
                </BoxView>
              </BoxView>
            </BoxView>
          </BoxView>

          <BoxView margin="xmd" padding="md" flex="seven" border="sm">
            <BoxView>
              <TextView color="secondary" size="xs" label={`Home > Books > Other Books > ${data?.title}`} />
            </BoxView>
            <BoxView>
              <TextView size="xlg" label={`${data?.title}`} />
            </BoxView>

            <BoxView direction="row" alignItems="center">
              <ButtonTagView onPress={() => {}}>
                <BoxView
                  background="success"
                  padding="xmd"
                  radius="sm"
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <TextView color="white" label="4.3" />
                  <IconView name={Star} color="white" />
                </BoxView>
              </ButtonTagView>
              <BoxView margin="xl6">
                <TextView color="secondary" weight="bold" label="79 Ratings &amp; 13 Reviews" />
              </BoxView>
            </BoxView>

            <BoxView>
              <BoxView>
                <TextView weight="bold" size="xlg" label="₹ 150" />
              </BoxView>
              <BoxView>
                <TextView color="danger" size="md" label="Only 4 left in stock" />
              </BoxView>
            </BoxView>
            <BoxView>
              <BoxView>
                <TextView weight="bold" size="lg" label="Available offers" />
              </BoxView>
              <BoxView>
                <BoxView direction="row" alignItems="center">
                  <IconView name={LocalOffer} color={colorSuccess} />
                  <BoxView margin="xsm">
                    <TextView size="md" weight="bold" label="Bank Offer" />
                  </BoxView>
                  <TextView size="md" label="5% Unlimited Cashback on AMEX Bank Credit Card" />
                  <BoxView margin="xsm">
                    <a className="link bold" href="">
                      T&amp;C
                    </a>
                  </BoxView>
                </BoxView>

                <BoxView direction="row" alignItems="center">
                  <IconView name={EventAvailable} color={colorSuccess} />
                  <BoxView margin="xsm">
                    <TextView size="md" label="No Cost EMI on AXEX Bank Credit Card" />
                  </BoxView>
                  <BoxView margin="xsm">
                    <a className="link bold" href="">
                      T&amp;C
                    </a>
                  </BoxView>
                </BoxView>
              </BoxView>
            </BoxView>

            <BoxView border="top" margin="smTop" padding="ysm">
              <BoxView direction="row">
                <TextView weight="bold" label="Author : " />
                <BoxView margin="xsm">
                  <TextView label={`${data?.author}`} />
                </BoxView>
              </BoxView>
              <BoxView direction="row">
                <TextView weight="bold" label="Year : " />
                <BoxView margin="xsm">
                  <TextView label={`${data?.year}`} />
                </BoxView>
              </BoxView>
            </BoxView>

            <BoxView padding="ymd" border="top">
              <BoxView>
                <TextView lines={10} label={`${data?.description}`} />
              </BoxView>
            </BoxView>
          </BoxView>
        </BoxView>
      </BoxView>
    );
  }
}
