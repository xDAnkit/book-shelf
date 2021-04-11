import {Platform} from 'react-native';

export const styles: any = {
  modal: {
    marginTop: Platform.OS === 'ios' ? 48 : 0,
    borderRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 1,
  },
  bottom: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  cover: {
    marginTop: Platform.OS === 'ios' ? 28 : 0,
    margin: 0,
  },
};
