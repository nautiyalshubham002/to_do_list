import React from 'react';
import Login from './src/screens/Login';
import {Provider, useSelector} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/AppNavigator';
import AuthNavigator from './src/components/AuthNavigator';

const App = () => {
  const isLoggedIn = store.getState((state) => state.LoginReducer.isLoggedIn);
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
