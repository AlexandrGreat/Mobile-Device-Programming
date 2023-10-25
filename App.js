import React, {useEffect, useRef} from "react";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import { SafeAreaView,ScrollView,Text,StyleSheet,View,ImageBackground,Animated,useWindowDimensions } from "react-native";

const images=[image1,image2,image3,image4];

const App=()=>{

    const scrollX=useRef(new Animated.Value(0)).current;
    const{width:windowWidth}=useWindowDimensions();

    moveValue1=new Animated.Value(-200);
    moveValue2=new Animated.Value(-300);
    moveValue3=new Animated.Value(-300);
    moveValue4=new Animated.Value(-700);
  
    useEffect(()=>{animate()},[])
  
    const animate=()=>
    {
      Animated.parallel([
        Animated.timing(
          this.moveValue1,{toValue:0,duration:2000}
        ),
        Animated.timing(
          this.moveValue2,{toValue:0,duration:2000,delay:2000}
        ),
        Animated.timing(
          this.moveValue3,{toValue:0,duration:2000,delay:4000}
        ),
        Animated.timing(
          this.moveValue4,{toValue:0,duration:2000,delay:6000}
        )
      ]).start();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.niceContainer}></View>
            <View style={styles.greeting}>
                    <Animated.Text style={[styles.h2, {position:'relative',top:this.moveValue1}]}>Welocome to</Animated.Text>
                    <Animated.Text style={[styles.h1, {position:'relative',left:this.moveValue2}]}>LR8 App</Animated.Text>
                    <Animated.Text style={[styles.h3, {position:'relative',right:this.moveValue3}]}>components animation</Animated.Text>
            </View>
            
            <Animated.View style={{position:'relative',bottom:this.moveValue4}}>
            <View style={styles.scrollContainer}>
            <ScrollView style={styles.scrollViewStyle} horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}])} scrollEventThrottle={1}>
                    {images.map((image,imageIndex)=>{return(<View style={{width:windowWidth,height:250}} key={imageIndex}>
                        <ImageBackground source={image} style={styles.card}>
                            <View style={styles.textContainer}>
                                <Text style={styles.infoText}>
                                    {"Image - "+(imageIndex+1)}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>);})}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {images.map((image,imageIndex)=>{const width=scrollX.interpolate({
                        inputRange:[windowWidth*(imageIndex-1),windowWidth*imageIndex,windowWidth*(imageIndex+1)],outputRange:[8,16,8],extrapolate:'clamp'
                    });return(<Animated.View key={imageIndex} style={[styles.normalDot,{width}]}></Animated.View>)})}
                </View>
            </View>
            </Animated.View>
                
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#CCC'
    },
    scrollContainer:{
        height:300,
        alignContent:'center',
        alignItems:'center',
    },
    card:{
        flex:1,
        marginVertical:4,
        marginHorizontal:16,
        borderRadius:5,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    textContainer:{
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingHorizontal:24,
        paddingVertical:8,
        borderRadius:5,
    },
    infoText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    normalDot:{
        height:8,
        width:8,
        borderRadius:4,
        backgroundColor:'silver',
        marginHorizontal:4,
    },
    indicatorContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },
    greeting:{
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        top:'0%'
    },
    h1:{
        color:'red',
        fontSize:30,
        fontWeight:'bold'
    },
    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    h3:{
        fontSize:15
    },
    niceContainer:{
        width:'95%',
        height:'90%',
        position:'absolute',
        borderWidth:1,
        borderColor:'black',
        borderRadius:25,
        backgroundColor:'white'
    }
});

export default App;
