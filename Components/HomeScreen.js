import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";

const HomeScreen=()=>{
    const [data,setData]=useState([]);
    const [category,setCategory]=useState([
        {id:1,name:'Top Headlines',category:'general'},
        {id:2,name:'Business',category:'business'},
        {id:3,name:'Health',category:'health'},
        {id:4,name:'Science',category:'science'},
        {id:5,name:'Technology',category:'technology'},
        {id:6,name:'Sports',category:'sports'},
        {id:7,name:'Entertainment',category:'entertainment'},
    ]);
    const [country,SetCountry]=useState([
        {id:1,name:'ae',country:'ae'},
        {id:2,name:'ar',country:'ar'},
        {id:3,name:'at',country:'at'},
        {id:4,name:'au',country:'au'},
        {id:5,name:'be',country:'be'},
        {id:6,name:'bg',country:'bg'},
        {id:7,name:'br',country:'br'},
        {id:8,name:'ca',country:'ca'},
        {id:9,name:'ch',country:'ch'},
        {id:10,name:'cn',country:'cn'},
        {id:11,name:'co',country:'co'},
        {id:12,name:'cu',country:'cu'},
        {id:13,name:'cz',country:'cz'},
        {id:14,name:'de',country:'de'},
        {id:15,name:'eg',country:'eg'},
        {id:16,name:'fr',country:'fr'},
        {id:17,name:'gb',country:'gb'},
        {id:18,name:'gr',country:'gr'},
        {id:19,name:'hk',country:'hk'},
        {id:20,name:'hu',country:'hu'},
        {id:21,name:'id',country:'id'},
        {id:22,name:'ie',country:'ie'},
        {id:23,name:'il',country:'il'},
        {id:24,name:'in',country:'in'},
        {id:25,name:'it',country:'it'},
        {id:26,name:'jp',country:'jp'},
        {id:27,name:'kr',country:'kr'},
        {id:28,name:'lt',country:'lt'},
        {id:29,name:'lv',country:'lv'},
        {id:30,name:'ma',country:'ma'},
        {id:31,name:'mx',country:'mx'},
        {id:32,name:'my',country:'my'},
        {id:33,name:'ng',country:'ng'},
        {id:34,name:'nl',country:'nl'},
        {id:35,name:'no',country:'no'},
        {id:36,name:'nz',country:'nz'},
        {id:37,name:'ph',country:'ph'},
        {id:38,name:'pl',country:'pl'},
        {id:39,name:'pt',country:'pt'},
        {id:40,name:'ro',country:'ro'},
        {id:41,name:'rs',country:'rs'},
        {id:42,name:'ru',country:'ru'},
        {id:43,name:'sa',country:'sa'},
        {id:44,name:'se',country:'se'},
        {id:45,name:'sg',country:'sg'},
        {id:46,name:'si',country:'si'},
        {id:47,name:'sk',country:'sk'},
        {id:48,name:'th',country:'th'},
        {id:49,name:'tr',country:'tr'},
        {id:50,name:'tw',country:'tw'},
        {id:51,name:'ua',country:'ua'},
        {id:52,name:'us',country:'us'},
        {id:53,name:'ve',country:'ve'},
        {id:54,name:'za',country:'za'},
    ]);
    const [cSelect,setCSelect]=useState(50);
    const [tSelect,setTSelect]=useState(0);
    useEffect(()=>{getData()},[]);

    const getData=async()=>{
    const response=await fetch(`https://newsapi.org/v2/top-headlines?country=${country[cSelect].country}&apiKey=d8d62263406c4a31b8ee04813aadcdb3`);
    const data=await response.json();
    setData(data.articles);
    }

    const getTotalData=async(country,category)=>{
        const response=await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=d8d62263406c4a31b8ee04813aadcdb3&category=${category}`);
        const data=await response.json();
        console.log("REQUEST FOR: " +country+" "+category)
        setData(data.articles);
    }

    const getCountryData=async(country,category)=>{
        const response=await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=d8d62263406c4a31b8ee04813aadcdb3&category=${category}`);
        const data=await response.json();
        setData(data.articles);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headText}>Country: {country[cSelect].country}</Text>
            <View>
                <FlatList horizontal  showsHorizontalScrollIndicator data={country} renderItem={({item,index})=>{
                    return(<TouchableOpacity onPress={()=>{setCSelect(index); getTotalData(country[index].country,category[tSelect].category)}} style={styles.countryList}><Text style={styles.countryText}>{item.name}</Text></TouchableOpacity>)
                }}/>
            </View>
            <Text style={styles.headText}>Category: {category[tSelect].category}</Text>
            <View>
                <FlatList horizontal  showsHorizontalScrollIndicator={false} data={category} renderItem={({item,index})=>{
                    return(<TouchableOpacity onPress={()=>{setTSelect(index); getTotalData(country[cSelect].country,category[index].category)}} style={styles.categoryList}><Text style={styles.categoryText}>{item.name}</Text></TouchableOpacity>)
                }}/>
                <View style={styles.line}></View>
            </View>
            <View>
                <FlatList height={'80%'} scrollEnabled data={data} renderItem={(item,index)=>{return <Card item={item}/>}}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        position:'relative',
        top:'4%'
    },
    headText:{
        fontWeight:'bold',
        alignSelf:'center'
    },
    countryList:{
        backgroundColor:'blue',
        borderRadius:20, 
        margin:4,
        width:30,
        alignItems:'center'
    },
    countryText:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    categoryList:{
        backgroundColor:'yellow',
        borderRadius:10, 
        margin:10,
        height:35
    },
    categoryText:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    },
    line:{
        width:'100%',
        height:'2%',
        borderWidth:2,
        borderColor:'black'
    },
})

export default HomeScreen;