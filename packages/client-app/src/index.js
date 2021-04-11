/**
 * @format
 */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import 'react-native-get-random-values';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import RootNavigation from '@navigation/index';
import AppStore from '@redux/store';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#325795' }}>
    <Provider store={AppStore}>
      <RootNavigation />
    </Provider>
  </View>
);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  // Mount the react-native app in the "root" div of index.html
  rootTag: document.getElementById('root')
});
