import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
    message: string
}

const Notes: React.FC<Props> = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    text: {
        color: '#d3d3d3',
        textAlign: 'center',
    }
})

export default Notes;