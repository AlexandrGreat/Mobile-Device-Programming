import React from 'react';
import {
  View,
  YellowBox,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

export default class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'ProductDatabase.realm' });
    this.state = {
      input_product_id: '',
      product_name: '',
      product_description: '',
      product_price: '',
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
      this.setState({
        product_name: product_details[0].product_name,
      });
      this.setState({
        product_description: product_details[0].product_description,
      });
      this.setState({
        product_price: product_details[0].product_price,
      });
    } else {
      alert('No product found');
      this.setState({
        product_name: '',
      });
      this.setState({
        product_description: '',
      });
      this.setState({
        product_price: '',
      });
    }
  };
  updateProduct = () => {
    var that = this;
    const { input_product_id } = this.state;
    const { product_name } = this.state;
    const { product_description } = this.state;
    const { product_price } = this.state;
    if (input_product_id) {
      if (product_name) {
        if (product_description) {
          if (product_price) {
            realm.write(() => {
              var ID = this.state.input_product_id;
              console.log('ID', ID);
              var obj = realm
                .objects('product_details')
                .filtered('product_id =' + this.state.input_product_id);
              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].product_name = this.state.product_name;
                obj[0].product_description = this.state.product_description;
                obj[0].product_price = this.state.product_price;
                Alert.alert(
                  'Success',
                  'Product updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        that.props.navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                alert('Product Updation Failed');
              }
            });
          } else {
            alert('Please fill Price');
          }
        } else {
          alert('Please fill Description');
        }
      } else {
        alert('Please fill Name');
      }
    } else {
      alert('Please fill Product Id');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#dddddd', flex: 1 }}>
        <View style={{position:'absolute',borderColor:'black',borderWidth:1,width:'90%',height:'90%',borderRadius:50,top:'5%',left:'5%',backgroundColor:'white',paddingTop:'20%'}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Product Id"
              onChangeText={input_product_id => this.setState({ input_product_id })}
            />
            <Mybutton
              title="Search Product"
              customClick={this.searchProduct.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Name"
              value={this.state.product_name}
              onChangeText={product_name => this.setState({ product_name })}
            />
            <Mytextinput
              placeholder="Enter Description"
              value={'' + this.state.product_description}
              onChangeText={product_description => this.setState({ product_description })}
              maxLength={225}
            />
            <Mytextinput
              value={this.state.product_price}
              placeholder="Enter Price"
              onChangeText={product_price => this.setState({product_price })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <Mybutton
              title="Update Product"
              customClick={this.updateProduct.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        </View>
      </View>
    );
  }
}