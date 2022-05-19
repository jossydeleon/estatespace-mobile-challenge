import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#119e7a" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loader;