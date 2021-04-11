/**
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import BoxView from '@components/BoxView';
import TextView from '@components/TextView';
import ButtonTagView from '@components/ButtonTagView';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

const BookItem: React.FC<ITransactionItem> = (props) => {
  const { item, click_1 } = props;
  const { title, sysId, description, year } = item;
  return (
    <BoxView flex="two" border="md" margin="sm">
      <ButtonTagView onPress={() => click_1(item)}>
        <BoxView width={`${width * 5}`} padding="md" direction="row" background="white">
          <BoxView round="xxlg">
            <img width="90" height="90" src="https://images-na.ssl-images-amazon.com/images/I/81nFI-hPu5L.jpg" />
          </BoxView>
          <BoxView margin="xmd" flex="one">
            <BoxView>
              <TextView weight="bold" size="lg" label={`${title}`} />
            </BoxView>
            <BoxView>
              <TextView lines={2} label={`${description}`} />
            </BoxView>
            <BoxView>
              <TextView label={`${year}`} />
            </BoxView>
          </BoxView>
        </BoxView>
      </ButtonTagView>
    </BoxView>
  );
};

interface IItem {
  sysId: string;
  title: string;
  description: string;
  year: number;
}

interface ITransactionItem {
  item: IItem;
  click_1(data: any): any;
}

BookItem.defaultProps = {
  item: {
    sysId: '',
    title: '',
    description: '',
    year: 0
  },
  click_1: undefined
};

BookItem.propTypes = {
  item: PropTypes.shape({
    sysId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  click_1: PropTypes.func.isRequired
};

export default BookItem;
