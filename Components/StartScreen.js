import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const StartScreen=({navigation})=>{
    useEffect(()=>{setTimeout(()=>{navigation.navigate("News")},1500)},[])

    return(
        <View style={styles.container}>
            <Text style={styles.whiteText}>News</Text>
            <Text style={styles.whiteText}>Application</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:'100%',
        height:'100%'
    },
    whiteText:{
        fontWeight:'bold',
        fontSize:22,
        color:'white',
        alignSelf:'center',
        position:'relative',
        top:'40%'
    },
})
export default StartScreen