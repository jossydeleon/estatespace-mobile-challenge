import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetails from '../screens/UserDetails';
import Users from '../screens/Users';
import { StackScreensParams } from './types';

const Stack = createStackNavigator<StackScreensParams>();

const MainNavigator: React.FC = () => (
  //@ts-ignore: Looks like there is an issue with types error because of types/react~17 
  //see: (https://github.com/expo/expo/issues/17101)
  <Stack.Navigator
    initialRouteName="Users"
    screenOptions={{
      gestureEnabled: true,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Users"
      component={Users}
    />

    <Stack.Screen
      name="UserDetails"
      component={UserDetails}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default MainNavigator;
