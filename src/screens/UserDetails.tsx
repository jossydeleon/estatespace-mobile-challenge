import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from '../components/Avatar';
import useData from '../hooks/useData';

const UserDetails: React.FC = () => {

  // Hook data store
  const { userSelected, setUser } = useData();

  useEffect(() => {
    return () => setUser(undefined);
  }, [])

  return (
    <View style={styles.container}>
      <Avatar gender={userSelected.gender} />
      <Text style={styles.name}>{`${userSelected?.name.firstName} ${userSelected?.name.lastName}`}</Text>
      <Text style={styles.role}>{userSelected?.role}</Text>
      <Text style={styles.email}>{userSelected.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  name: {
    color: '#d3d3d3',
    fontSize: 25,
    fontWeight: 'bold',
  },
  role: {
    color: 'gray',
    fontSize: 16,
  },
  email: {
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic'
  },
});

export default UserDetails;
