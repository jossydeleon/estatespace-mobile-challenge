import React from "react";
import { Button } from "react-native";
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
        <Button
            title={user.name.firstName}
            onPress={() => onPress(user)} />
    );
}

export default UserItem;