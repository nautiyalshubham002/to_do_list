import React from 'react';

import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
