import * as React from 'react';
import PropTypes from 'prop-types';
import BoxView from '@components/BoxView';
import ButtonTagView from '@components/ButtonTagView';
import TextView from '@components/TextView';
//import './styles.css';

// active={}

const PaginationView: React.FC<PaginationViewProps> = (props) => {
  const { totalRecords, limit, click, page } = props;

  if (totalRecords === null || totalRecords === undefined) {
    return null;
  }

  if (limit > totalRecords) {
    return null;
  }

  const pagination = totalRecords / limit;
  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(pagination); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number: number) => {
    const isActive: boolean = pageNumbers[page - 1] === number;
    return (
      <ButtonTagView onPress={() => click(number)} key={number}>
        <BoxView padding="md" margin="md" round="lg" background={isActive ? 'accent' : 'white'}>
          <TextView color={isActive ? 'white' : 'primary'} weight="bold" size="lg" label={`${number}`} />
        </BoxView>
      </ButtonTagView>
    );
  });
  return (
    <BoxView alignItems="center" flex="one" justify="center" direction="row">
      {renderPageNumbers}
    </BoxView>
  );
};

interface PaginationViewProps {
  totalRecords: number | null | undefined;
  limit: number;
  click: (page: number) => void;
  page: number;
}

PaginationView.defaultProps = {
  totalRecords: 0,
  limit: 10,
  click: undefined,
  page: 1,
};

PaginationView.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired || null,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default PaginationView;
