import React from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

export default class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'ProductDatabase.realm' });
    this.state = {
      input_product_id: '',
      productData: '',
    };
  }
  searchProduct = () => {
    const { input_product_id } = this.state;
    console.log(this.state.input_product_id);
    var product_details = realm
      .objects('product_details')
      .filtered('product_id =' + input_product_id);
    console.log(product_details);
    if (product_details.length > 0) {
      console.log(product_details[0]);
      this.setState({
        productData: product_details[0],
      });
    } else {
      alert('No product found');
      this.setState({
        productData: '',
      });
    }
  };
  render() {
    return (
      <View  style={{backgroundColor:'#dddddd',flex:1}}>
        <View style={{position:'absolute',borderColor:'black',borderWidth:1,width:'90%',height:'90%',borderRadius:50,top:'5%',left:'5%',backgroundColor:'white',paddingTop:'20%'}}>
        <Mytextinput
          placeholder="Enter Product Id"
          onChangeText={input_product_id => this.setState({ input_product_id })}
        />
        <Mybutton
          title="Search Product"
          customClick={this.searchProduct.bind(this)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>Product Id: {this.state.productData.product_id}</Text>
          <Text>Product Name: {this.state.productData.product_name}</Text>
          <Text>Product Contact: {this.state.productData.product_description}</Text>
          <Text>Product Address: {this.state.productData.product_price}</Text>
        </View>
        </View>
      </View>
    );
  }
}