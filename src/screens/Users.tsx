import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import UserLists from '../components/UserLists';
import useApi from '../hooks/useApi';
import { UsersScreenNavigationProp } from '../navigation/types';

interface Props {
  navigation: UsersScreenNavigationProp;
}

const Users: React.FC<Props> = () => {

  // Hook to fetch api
  const { data, fetchMore } = useApi();

  return (
    <View style={styles.container}>
      <UserLists
        users={data}
        onFetchMore={fetchMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

export default Users;
