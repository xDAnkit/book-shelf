/**
 * @format
 */

/* global __DEV__ */

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import 'react-native-get-random-values';
import { name as appName } from './app.json';
//import {Provider} from 'react-redux';
///import RootNavigation from '/Users/AnkitJain/Documents/Ankit/rn/webdemo/src/navigation';
//import AppStore from '@redux/store';
//import '@prod-config';

const App = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  // Mount the react-native app in the "root" div of index.html
  rootTag: document.getElementById('root')
});
