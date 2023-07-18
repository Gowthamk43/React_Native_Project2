import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headerText}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Greenn</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row'

    },
    card: {

        
        margin: 8,
        width: 100,
        height: 100,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center'
    },
    cardOne: {

        backgroundColor: '#ff0e0e'
    },
    cardTwo: {

        backgroundColor: '#0e4aff'
    },
    cardThree: {

        backgroundColor: '#00be00'
    }
})