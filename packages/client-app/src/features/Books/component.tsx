import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import SmsRetriever from 'react-native-sms-retriever';
import BoxView from '@components/BoxView';
import { IProps, IPropsToState, IState } from './types';
import GetMessage from '@i18n';
import ModalView from '@components/ModalView';
import TextView from '@components/TextView';
import ButtonTagView from '@components/ButtonTagView';
import { ActivityIndicator, Dimensions } from 'react-native';
import InputTextView from '@components/InputTextView';
import ItemListView from '@components/ItemListView';
import BookItem from './views/BookItem';
import { GetRandomString } from '@utils';
import { IBookItem, IGetBookListRequest } from './List/types';
import { debounce, isEqual } from 'lodash';
import BookDetailsView from './Details/component';
var width = Dimensions.get('window').width;

export default class BookView extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      screenWidth: Math.round(width / 420),
      search: '',
      page: 1,
      limit: 12,
      books: {
        hasRecords: null,
        totalRecords: null,
        itemList: null
      },
      isFetching: false,
      visibleBookDetailsModal: false,
      selectedBook: null
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this._dispatchGetBookList();
  }

  _dispatchGetBookList = () => {
    const { limit, page, search } = this.state;
    const params: IGetBookListRequest = {
      page,
      limit,
      search
    };
    this.props.onGetBookListRequest(params);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: Math.round(window.innerWidth / 420) });
  };

  _handleSetInput = (search: string) => {
    this.setState(
      {
        search,
        page: 1,
        limit: 12
      },
      () => {
        this.debounceSearchInputChange();
      }
    );
  };

  debounceSearchInputChange = debounce(() => {
    console.log('Called');
    this._dispatchGetBookList();
  }, 400);

  static getDerivedStateFromProps(props: IProps, state: IState) {
    const { isFetching, bookListResponse } = props;
    console.log('Response: ', { isFetching }, { bookListResponse });

    let payload: IPropsToState = {};

    if (isFetching !== state.isFetching) {
      payload['isFetching'] = !!isFetching;
    }

    if (!!bookListResponse && !isEqual(bookListResponse?.response, state.books)) {
      const { totalRecords } = bookListResponse;

      const tasks = {
        totalRecords: totalRecords || 0,
        hasRecords: !!bookListResponse.response || false,
        itemList: bookListResponse.response || []
      };
      payload['books'] = tasks;
    }

    return payload;
  }

  _handlePageChange = (page: number) => {
    this.setState(
      {
        page
      },
      () => {
        this._dispatchGetBookList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );
  };

  _renderModal = () => {
    const { visibleBookDetailsModal, selectedBook } = this.state;
    return (
      <ModalView
        measure="10"
        visible={visibleBookDetailsModal}
        title={GetMessage('Book Details')}
        close={() => this.setState({ visibleBookDetailsModal: false })}
      >
        <BookDetailsView data={selectedBook} />
      </ModalView>
    );
  };

  _handleOpenBookDetails = (selectedBook: IBookItem) => {
    this.setState({
      selectedBook,
      visibleBookDetailsModal: true
    });
  };

  render() {
    const { screenWidth, search, books, page, limit, isFetching } = this.state;
    return (
      <BoxView>
        {this._renderModal()}
        <BoxView background="white" padding="md" elevation="md">
          <TextView label="My Book Store" weight="bold" size="lg" />
        </BoxView>
        <BoxView margin={screenWidth === 1 ? 'sm' : 'xlg'}>
          <BoxView
            flex="one"
            direction="row"
            margin="ymd"
            alignItems="center"
            background="white"
            radius="sm"
            border="sm"
          >
            <BoxView flex="eight">
              <InputTextView
                round="sm"
                editable={true}
                background="transparent"
                border="none"
                placeholder={GetMessage('IO_SEARCH_BOOK')}
                size="lg"
                value={search}
                onChange={(search) => {
                  this._handleSetInput(search);
                }}
              />
            </BoxView>
            <BoxView margin="xl6" padding="xmd">
              <ActivityIndicator size="large" animating={isFetching} />
            </BoxView>
          </BoxView>
          <BoxView flex="one" direction="row" justify="spaceBetween" border="bottom">
            <BoxView direction="row" padding="ymd">
              <BoxView>
                <ButtonTagView onPress={() => {}}>
                  <BoxView direction="row">
                    <BoxView padding="xmd" background={'accent'} radius="md">
                      <TextView color="white" label={`Searching for  ${search}`} />
                    </BoxView>
                    <BoxView margin="xmd"></BoxView>
                  </BoxView>
                </ButtonTagView>
              </BoxView>
            </BoxView>

            <BoxView direction="row" padding="ymd">
              <BoxView padding="xsm">
                <TextView label={`Total Books : ${books?.totalRecords || 0}`} />
              </BoxView>
              <BoxView margin="xmd">
                <ActivityIndicator animating={!!false} />
              </BoxView>
            </BoxView>
          </BoxView>

          <BoxView margin="ymd">
            <ItemListView
              key={screenWidth === 1 ? GetRandomString(5) : GetRandomString(5)}
              click_1={this._handleOpenBookDetails}
              page={page}
              limit={limit}
              cols={screenWidth}
              loading={isFetching}
              component={BookItem}
              records={books}
              onPageChange={this._handlePageChange}
            />
          </BoxView>
        </BoxView>
      </BoxView>
    );
  }
}
