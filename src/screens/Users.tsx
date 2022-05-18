import React, { useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';
import UserLists from '../components/UserLists';
import useApi from '../hooks/useApi';
import { UsersScreenNavigationProp } from '../navigation/types';

interface Props {
  navigation: UsersScreenNavigationProp;
}

const Users: React.FC<Props> = () => {

  // Hook to fetch api
  const { loading, data } = useApi();


  if (loading) {
    <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <UserLists
        users={data?.entries || []}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Users;
