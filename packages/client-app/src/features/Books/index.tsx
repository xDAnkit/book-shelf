import { connect } from 'react-redux';
import Component from './component';
import { Dispatch } from 'redux';
import { IReducerState } from '@redux/reducers/types';
import { IGetBookListRequest } from './List/types';
import { getBooksAction } from './List/action';

const mapStateToProps = (state: IReducerState) => {
  return {
    bookListResponse: state.bookList.items,
    isFetching: state.bookList.isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onGetBookListRequest: (params: IGetBookListRequest) => {
      dispatch(getBooksAction(params));
    }
  };
};

const BooksScreen = connect(mapStateToProps, mapDispatchToProps)(Component);
export default BooksScreen;
