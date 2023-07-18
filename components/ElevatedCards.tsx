import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headerText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>1</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>2</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>3</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>4</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>5</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>6</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>7</Text>
                </View>
            </ScrollView>
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
        padding: 8,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8

    },
    elevatedCard: {

        backgroundColor: "#ff0e0e",
        elevation: 4,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: '#000000',
        // shadowOpacity: 0.4,
        shadowRadius: 16




    }

})