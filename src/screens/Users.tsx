import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { UsersScreenNavigationProp } from '../navigation/types';

interface Props {
  navigation: UsersScreenNavigationProp;
}

const Users: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Hello Users!</Text>
      <Button onPress={() => navigation.navigate('UserDetails', { name: 'Salome' })} title="Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Users;
