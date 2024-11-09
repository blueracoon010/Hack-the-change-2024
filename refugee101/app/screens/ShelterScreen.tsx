// app/screens/ShelterScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShelterScreen() {
    return (
        <View style={styles.container}>
            <Text>Access Shelter Resources</Text>
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
