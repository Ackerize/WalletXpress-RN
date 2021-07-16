import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppNavigation}
        options={{ headerTransparent: true, title: '' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
