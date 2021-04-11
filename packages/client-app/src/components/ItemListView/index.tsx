/**
 * @format
 */

import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import BoxView from '@components/BoxView';
import PaginationView from '@components/PaginationView';
import ListEmptyView from './views/EmptyView';

const ItemListView: React.FC<ItemListViewProps> = (props) => {
  const {
    limit,
    page,
    records,
    component,
    click_1,
    click_2,
    click_3,
    click_4,
    click_5,
    cols = 1,
    loading,
    onRefresh,
    onLoadMore,
    onPageChange
  } = props;
  const { itemList } = records;
  const ContentComponent = component;

  const OnPageChangeEvent = (page: number) => {
    if (!onPageChange) {
      return;
    }
    onPageChange(page);
  };

  const RenderPagination = () => {
    if (!limit || !page) {
      return;
    }
    return <PaginationView limit={limit} page={page} totalRecords={records.totalRecords} click={OnPageChangeEvent} />;
  };

  console.log('@AJ props', props);

  return (
    <BoxView>
      <FlatList
        ListEmptyComponent={<ListEmptyView records={records} loading={!!loading} />}
        numColumns={cols}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={itemList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ContentComponent
              click_1={click_1}
              click_2={click_2}
              click_3={click_3}
              click_4={click_4}
              click_5={click_5}
              item={item}
              index={index}
            />
          );
        }}
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
      />
      {RenderPagination()}
    </BoxView>
  );
};

interface IRecords {
  totalRecords: number | null | undefined;
  itemList: any | null;
  hasRecords: boolean | null;
}

interface ItemListViewProps {
  limit?: number;
  page?: number;
  records: IRecords;
  loading: boolean;
  component: any;
  cols?: number;
  header?: boolean;
  padding?: number;
  retryClick?: () => void;
  onRefresh?(): any;
  onLoadMore?(): any;
  onPageChange?(page: number): any;
  click_1?: (params: any) => void;
  click_2?: (params: any) => void;
  click_3?: (params: any) => void;
  click_4?: (params: any) => void;
  click_5?: (params: any) => void;
}

ItemListView.defaultProps = {
  records: {
    totalRecords: null,
    itemList: null,
    hasRecords: null
  },
  loading: false,
  cols: 1,
  header: false,
  padding: 100,
  retryClick: undefined,
  onRefresh: undefined,
  onLoadMore: undefined,
  onPageChange: undefined,
  click_1: undefined,
  click_2: undefined,
  click_3: undefined,
  click_4: undefined,
  click_5: undefined
};

ItemListView.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  records: PropTypes.any,
  loading: PropTypes.bool.isRequired,
  header: PropTypes.bool,
  retryClick: PropTypes.func || null,
  onLoadMore: PropTypes.func || null,
  onRefresh: PropTypes.func || null,
  onPageChange: PropTypes.func || null,
  cols: PropTypes.number,
  padding: PropTypes.number,
  click_1: PropTypes.func || undefined,
  click_2: PropTypes.func || null,
  click_3: PropTypes.func || null,
  click_4: PropTypes.func || null,
  click_5: PropTypes.func || null
};

export default ItemListView;
