import { put, takeLatest } from 'redux-saga/effects';
import { GET } from '@network/index';
import { IHTTPResponse } from '@network/types';
import { BOOK_LIST_API, SERVER_ERROR } from '@network/config';
import { GET_BOOKS, getBooksFailedAction, getBooksSuccessAction } from './action';
import Toast from '@components/ToastView';
import { IGetBookRequestAction } from './types';
import { IsObjEmpty } from '@utils';

function* getBookList(actions: IGetBookRequestAction) {
  console.log('Inside getBookList');
  try {
    const { page, limit, search } = actions['params'];
    const URL: string = `${BOOK_LIST_API}?search=${search}&page=${page}&limit=${limit}`;

    const response: IHTTPResponse = yield GET(URL, false);
    const { data, meta } = response;
    if (IsObjEmpty(data)) {
      console.log('Inside getBookList Failed');
      yield put(getBooksFailedAction());
      Toast(meta['message']);
      return;
    }
    console.log('Inside getBookList Success');
    yield put(getBooksSuccessAction(data['results']));
    return;
  } catch (error) {
    console.log('Inside getBookList Catch', error);
    yield put(getBooksFailedAction());
    if (!error['response']) {
      Toast('There is an issue while registering business.');
      return;
    }
    if (error.response.status === SERVER_ERROR) {
      Toast('There is an issue with your request.');
      return;
    }
  }
}

export function* watchGetBookListRequest() {
  yield takeLatest(GET_BOOKS, getBookList);
}
