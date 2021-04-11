import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { setNavigator } from './navigator';
import WelcomeScreen from '@features/Welcome';
import BoxView from '@components/BoxView';
import { ToastContainer } from 'react-toastify';

import BooksScreen from '@features/Books';
import BooksDetailsScreen from '@features/Books/Details/component';

const Stack = createStackNavigator();

function RootNavigation() {
  const ref = React.useRef(null);
  setNavigator(ref);
  return (
    <BoxView flex="one">
      <NavigationContainer ref={ref}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: 'Book Shelf',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="BooksScreen"
            component={BooksScreen}
            options={{
              title: 'Books',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BoxView>
  );
}

export default RootNavigation;
