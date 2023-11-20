import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;
export default class DeleteProduct extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'ProductDatabase.realm' });
    this.state = {
      input_product_id: '',
    };
  }
  deleteProduct = () => {
    var that = this;
    const { input_product_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_product_id;
      if (
        realm.objects('product_details').filtered('product_id =' + input_product_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('product_details').filtered('product_id =' + input_product_id)
        );
        var product_details = realm.objects('product_details');
        console.log(product_details);
        Alert.alert(
          'Success',
          'Product deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => that.props.navigation.navigate('HomeScreen'),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert('Please insert a valid Product Id');
      }
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: '#dddddd', flex: 1 }}>
        <View style={{position:'absolute',borderColor:'black',borderWidth:1,width:'90%',height:'90%',borderRadius:50,top:'5%',left:'5%',backgroundColor:'white',paddingTop:'20%'}}>
        <Mytextinput
          placeholder="Enter Product Id"
          onChangeText={input_product_id => this.setState({ input_product_id })}
        />
        <Mybutton
          title="Delete Product"
          customClick={this.deleteProduct.bind(this)}
        />
        </View>
      </View>
    );
  }
}