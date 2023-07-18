import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'

export default function ActionCard() {

  function openWebsite(webSiteLink: string) {
    Linking.openURL(webSiteLink)

  }
  return (
    <View>
      <Text>ActionCard</Text>

      <View style={[styles.Card, styles.elevatedCard]}>
        <View style={styles.Container}>
          <Text style={styles.HeadingText}>
            Hello World
          </Text>
        </View >
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
          }}

          style={styles.ImageSize}
        />
        <View style={styles.BodyContainer}>
          <Text numberOfLines={5}>
            Copy link
            Design tokens & color roles
            Design tokens enable flexibility and consistency across a product by allowing
            designers to assign an element's color role in a UI, rather than a set v
            alue Tokens act as a bridge between an element's assigned role and the
            chosen color value for a role. With the addition of tokens, designing
            for relationships of elements is more fundamental than selecting specific colors.
          </Text>
        </View>
        <View style={styles.FooterContainer}>
          <TouchableOpacity onPress={() => openWebsite('http://61.95.183.12:8080/merdazz/#/parent/dashboard')}>
            <Text style ={styles.SocialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => 
            openWebsite('http://61.95.183.12:8080/merdazz/#/parent/dashboard')}
            >
            <Text style ={styles.SocialLinks}> Open Web </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  HeadingText: {

    fontSize: 24,
    fontWeight: 'bold'
  },
  Card: {

    
    height: 400,
    width: 350,
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius:8
  },
  elevatedCard: {
    backgroundColor: 'red',
    elevation: 4,
    shadowOffset:{width: 1,height:1},shadowColor:'#333',shadowOpacity:0.4

  },
  Container: {

    height : 50,
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'center'

  }, ImageSize: {
    height: 180
  }, BodyContainer: {
    padding: 10
  },
  FooterContainer: {
    padding:10,
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },SocialLinks:{

    fontSize : 24,
    paddingVertical:8,
    paddingHorizontal: 20,
    backgroundColor:'white',
    color :'black',
    borderRadius :8
    
  }

})