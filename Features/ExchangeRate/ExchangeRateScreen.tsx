import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ExchangeRateScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Exchange Rate</Text>
        </View>
    );
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
})

export default ExchangeRateScreen;