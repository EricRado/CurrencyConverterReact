import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CurrencyConverterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Currency Converter</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CurrencyConverterScreen;