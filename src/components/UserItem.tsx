import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { User } from "../types";

interface UserItemProps {
    user: User;
    onPress: (user: User) => void;
}

/**
 * This component render single user in the list
 * @param user User to render 
 */
const UserItem: React.FC<UserItemProps> = ({ user, onPress }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => onPress(user)}>
            <View>
                <Text style={styles.name}>{`${user.name.firstName} ${user.name.lastName}`}</Text>
                <Text style={styles.role}>{user.role}</Text>
            </View>
            <Text style={styles.accessory}>{'>'}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 10,
        backgroundColor: '#2c2c2c',
        borderRadius: 5
    },
    name: {
        color: '#d3d3d3',
        fontSize: 14,
        fontWeight: 'bold'
    },
    role: {
        color: 'gray',
        fontSize: 12
    },
    accessory: {
        color: '#119e7a',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default UserItem;