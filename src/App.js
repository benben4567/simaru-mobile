import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#298EEC'}/>
      <NavigationContainer>
        <Provider store={store}>
          <Router />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
