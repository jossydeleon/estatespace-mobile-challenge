import React, { useLayoutEffect } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Loader from '../components/Loader';
import Notes from '../components/Notes';
import UserLists from '../components/UserLists';
import useApi from '../hooks/useApi';
import { UsersScreenNavigationProp } from '../navigation/types';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  navigation: UsersScreenNavigationProp;
}

const Users: React.FC<Props> = ({ navigation }) => {

  // Hook to fetch api
  const { loading, data, fetching, error, fetchMore, refresh } = useApi();

  React.useEffect(() => {
    data.map(item => console.log(`${item.id} - ${item.name.firstName}`))
  }, [data])

  // Layout effect to modify screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          // @ts-ignore: Issue with the TS version used in expo by default
          <Ionicons
            name="reload"
            size={22}
            color="#119e7a"
            style={styles.icon}
            onPress={() => refresh()}
          />
        )
      }
    })
  }, [navigation])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Notes message={error} />
  }

  return (
    <View style={styles.container}>
      <UserLists
        users={data}
        onFetchMore={fetchMore}
        isFetching={fetching}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 18
  }
});

export default Users;
