// app/screens/JobBoardScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobBoardScreen() {
    return (
        <View style={styles.container}>
            <Text>Access Job Board</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
