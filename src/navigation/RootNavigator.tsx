import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { myTheme } from '../theme';

const RootNavigator: React.FC = () => (
  <NavigationContainer theme={myTheme}>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
