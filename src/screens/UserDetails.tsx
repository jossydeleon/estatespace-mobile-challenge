import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserDetails: React.FC = () => (
  <View style={styles.container}>
    <Text>User Details</Text>
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
