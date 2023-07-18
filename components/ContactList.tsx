import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {


    const contacts = [
        {

            id: 1,
            name: 'Gowtham',
            status: 'InActive',
            image: 'https://plus.unsplash.com/premium_photo-1676389763792-4519eaf7c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
        }, {

            id: 2,
            name: 'Keshav',
            status: 'Active',
            image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
        }, {

            id: 3,
            name: 'Krish',
            status: 'InActive',
            image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=789&q=80'
        }, {

            id: 4,
            name: 'Mama',
            status: 'Active',
            image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
        }, {

            id: 5,
            name: 'Prasanth',
            status: 'InActive',
            image: 'https://plus.unsplash.com/premium_photo-1671462505492-03f9682bff61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        }
    ]



    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container}
                scrollEnabled={false}>

                {contacts.map(({ id, name, status, image }) => (
                    <View key={id} style={styles.viewContainer}>

                        <Image
                            source={{ uri: image }
                            }

                            style={styles.imageStyle} />


                        <View >
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameStyle}>{name}</Text>
                                <Text style={styles.statusStyle}>{status}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        marginHorizontal: 8
    }, container: {
    
        


    },
    viewContainer: {
        marginHorizontal: 8,
        flexDirection: "row",
        padding: 8,
        backgroundColor :'red',
        marginTop:8,
        borderRadius: 8


    },
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 360,
        marginRight: 8,
        



    },
    nameStyle: {

        color : 'black',
        fontWeight:'bold'
    },
    statusStyle: {
        color : 'black',
        
    },

    nameContainer: {
        flex: 1,
        justifyContent: 'center'
    }

})