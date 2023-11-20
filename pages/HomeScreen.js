import React from 'react';
import { View,Text } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Realm from 'realm';
let realm;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'ProductDatabase.realm',
      schema: [
        {
          name: 'product_details',
          properties: {
            product_id: { type: 'int', default: 0 },
            product_name: 'string',
            product_description: 'string',
            product_price: 'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
          backgroundColor:'#dddddd'
        }}>        

<View style={{position:'absolute',borderColor:'black',borderWidth:1,width:'90%',height:'90%',borderRadius:50,top:'5%',left:'5%',backgroundColor:'white'}}></View>

<View style={{position:'absolute',top:'10%',width:'90%',left:'5%',alignContent:'center',alignItems:'center'}}>
  <Mytext text="LR12 SHOP" />
  <Mybutton
    title='START SHOPPING!'
    customClick={() => this.props.navigation.navigate('ViewAll')}
  />
</View>

<View style={{position:'absolute',borderColor:'black',borderWidth:1,width:'90%',height:'50%',borderBottomRightRadius:50,borderBottomLeftRadius:50,bottom:'5%',left:'5%',backgroundColor:'#bbbbbb'}}></View>
<View style={{position:'absolute',width:'35%',height:'20%',borderWidth:1,borderColor:'black',borderRadius:100,top:'35%',left:'32%',alignItems:'center',backgroundColor:'white'}}><Text style={{position:'relative',top:'35%',fontSize:30,fontWeight:'bold'}}>A</Text></View>
<Text style={{position:'absolute',top:'55%',left:'30%'}}>Welcome, administrator</Text>
<View style={{flex:1,position:'absolute',bottom:'10%',width:'100%'}}>

<Mybutton
          title="Register Product"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update Product"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View Product"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="Delete Product"
          customClick={() => this.props.navigation.navigate('Delete')}
        />

</View>
       
      </View>
    );
  }
}