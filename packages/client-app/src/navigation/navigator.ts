import {CommonActions, StackActions} from '@react-navigation/native';

let config: any = {};

export const setNavigator = (nav: any) => {
  if (nav) {
    config.navigator = nav;
  }
};

export const reset = (name: string, params?: any) => {
  config.navigator.current.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  });
};

export const navigate = (name: string, params?: any) => {
  config.navigator.current.dispatch(CommonActions.navigate({name, params}));
};

export const goBack = () => {
  config.navigator.current.dispatch(StackActions.pop());
};

export const getParam = (props: any, key: string) => {
  if (!props.route) {
    return null;
  }
  return props.route.params[key];
};
