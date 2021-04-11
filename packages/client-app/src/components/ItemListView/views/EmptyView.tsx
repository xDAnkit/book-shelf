/**
 * @format
 */

import React from 'react';
import GetMessage from '@i18n';
import BoxView from '@components/BoxView';
import TextView from '@components/TextView';
import ButtonTagView from '@components/ButtonTagView';
import IconView from '@components/IconView';
import { colorDisabled, colorWhite } from '@assets/styles';
const ListEmptyView = (data: ItemListViewProps) => {
  const { loading, records, onRefresh } = data;
  const { itemList, hasRecords } = records;

  console.log('@AJ loading :', loading);
  if (loading) {
    return null;
  }

  console.log('@AJ hasRecords, itemList :', loading, itemList);
  if (hasRecords === null || itemList === null) {
    return null;
  }

  console.log('@AJJ hasRecords, itemList00 :', !loading, itemList.length);
  console.log('@AJJ hasRecords, itemList :', !loading && itemList.length === 0);
  if (!loading && itemList.length === 0) {
    return (
      <BoxView padding="md" alignItems="center" justify="center" alignSelf="center">
        <IconView type="Fa5i" name="cloud" size="xxxxxlg" color={colorDisabled} />
        <BoxView alignItems="center" margin="ymd">
          <TextView size="lg" label={GetMessage('IO_NO_RECORDS')} />
        </BoxView>
      </BoxView>
    );
  }

  if (!loading && itemList.length === 0 && !!onRefresh) {
    return (
      <BoxView padding="md" alignItems="center" justify="center" alignSelf="center">
        <IconView type="Fa5i" name="cloud" size="xxxxxlg" color={colorDisabled} />
        <BoxView alignItems="center" margin="ymd">
          <TextView size="lg" label={GetMessage('IO_NO_RECORDS')} />
          <BoxView margin="ysm">
            <ButtonTagView onPress={onRefresh}>
              <BoxView
                direction="row"
                alignItems="center"
                justify="spaceBetween"
                background="accent"
                padding="sm"
                radius="sm"
              >
                <TextView label="Refresh" size="lg" color="white" />
                <BoxView padding="xsm">
                  <IconView name="refresh" color={colorWhite} size="md" />
                </BoxView>
              </BoxView>
            </ButtonTagView>
          </BoxView>
        </BoxView>
      </BoxView>
    );
  }

  return null;
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
  onRefresh?(): any;
  onLoadMore?(): any;
}

export default ListEmptyView;
