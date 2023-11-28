import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import { Alert } from "react-native";
import DefaultImage from "../assets/PlaceholderImage.png";

const Card=({item})=>{
  const DEF_IMG=Image.resolveAssetSource(DefaultImage).uri;

  return(
    <View>
      <View style={styles.photoText}>
        <Image source={{uri:item.item.urlToImage?item.item.urlToImage:DEF_IMG}} style={styles.photo} resizeMethod='resize' resizeMode='cover'/>
        <Text>{item.item.title}</Text>
      </View>
      <View style={styles.newsSource}><Text style={styles.sourceText}>{item.item.source.name}</Text></View>
      <Text>{item.item.author}</Text>
      <Text>{item.item.publishedAt}</Text>
      <Button title="Read more" onPress={()=>{Alert.alert(item.item.title,
        item.item.description?item.item.description:'Sorry, no additional information provided',
        [
          {
            text: 'Ok',
          },
        ],
        { cancelable: false })}}/>
    </View>
  )
}

const styles=StyleSheet.create({
  photoText:{
    flexDirection:'row',
    width:'50%',
    margin:10
  },
  photo:{
    width:'100%',
    height:100
  },
  newsSource:{
    position:'absolute',
    backgroundColor:'red',
    borderRadius:20,
    top:10,
    left:10
  },
  sourceText:{
    fontWeight:'bold',
    color:'white'
  },
})

export default Card;