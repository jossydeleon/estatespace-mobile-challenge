import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useData from '../hooks/useData';

const UserDetails: React.FC = () => {

  // Hook data store
  const { userSelected, setUser } = useData();

  useEffect(() => {
    return () => setUser(undefined);
  }, [])

  return (
    <View style={styles.container}>
      <Text>{userSelected?.name.firstName}</Text>
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

export default UserDetails;
