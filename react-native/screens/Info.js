import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';

export default function InfoScreen() {

    const lastUpdate = "26 Nov 2021";

    return (
        <View style={styles.container}>
            <Text>Version 1.0.0</Text>
            <Text>
                <Text>Last Update: </Text><Text>{lastUpdate}</Text>
            </Text>
            <Image source={require('../assets/WeddingWishes.png')}
                style={{ resizeMode: 'contain', overflow: 'hidden', minWidth: 203, maxWidth: 406, minHeight: 56, maxHeight: 113, }} />
            <Text>© 2021 einajade-forest</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3%',
    },
    h1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 13,
    }
});