import React from 'react';
import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { UsersScreenNavigationProp } from '../navigation/types';
import { User } from '../types';
import UserItem from './UserItem';
import useData from '../hooks/useData';

interface UserListsProps {
    users: User[];
    onFetchMore: () => void;
}

/**
 * This component renders a list of user
 */
const UserLists: React.FC<UserListsProps> = ({ users, onFetchMore }) => {

    // Hook navigation
    const navigation = useNavigation<UsersScreenNavigationProp>();

    // Hook data context
    const { setUser } = useData();

    /**
       * Navigate to User details screen
       * @param user User information object
       */
    const handleUserSelected = React.useCallback((user: User) => {
        setUser(user);
        navigation.navigate("UserDetails", { name: user.name.firstName })
    }, [navigation]);

    /**
     * Render each user in a UserItem component
     * @param param0 
     * @returns 
     */
    const renderItem: ListRenderItem<User> = ({ item }) => (
        <UserItem user={item} onPress={handleUserSelected} />
    )

    return (
        <FlatList
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            onEndReachedThreshold={0.3}
            onEndReached={onFetchMore}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
    },
});

export default UserLists;