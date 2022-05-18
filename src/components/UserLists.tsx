import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import { UsersScreenNavigationProp } from '../navigation/types';
import { User } from '../types';
import UserItem from './UserItem';

interface UserListsProps {
    users: User[];
}

/**
 * This component renders a list of user
 */
const UserLists: React.FC<UserListsProps> = ({ users }) => {

    const navigation = useNavigation<UsersScreenNavigationProp>();

    /**
       * Navigate to User details screen
       * @param user User information object
       */
    const handleUserSelected = React.useCallback((user: User) => {
        navigation.navigate("UserDetails", { name: user.email })
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
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
    },
});

export default UserLists;