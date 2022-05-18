import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  route: RouteProp<{ params: { name: string } }>
}

const UserDetails: React.FC<Props> = ({ route }) => (
  <View style={styles.container}>
    <Text>{route.params.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserDetails;
