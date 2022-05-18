import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import DataProvider from './context/DataProvider';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <DataProvider>
        <RootNavigator />
      </DataProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default registerRootComponent(App);
