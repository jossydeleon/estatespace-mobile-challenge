import React from 'react';
import { Image, StyleSheet } from 'react-native';
import male from '../../assets/male.png';
import female from '../../assets/female.png';

interface AvatarProps {
    gender: "Male" | "Female";
}

const Avatar: React.FC<AvatarProps> = ({ gender }) => {
    return (
        <Image
            style={styles.avatar}
            source={gender === 'Male' ? male : female}
        />
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 200,
        height: 200,
        marginBottom: 15,
    },
})

export default Avatar;