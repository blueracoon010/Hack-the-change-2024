// app/screens/HealthcareScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthcareScreen() {
    return (
        <View style={styles.container}>
            <Text>Access Healthcare Resources</Text>
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
