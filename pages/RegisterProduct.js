import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

export default class RegisterProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: '',
      product_description: '',
      product_price: '',
    };
    realm = new Realm({ path: 'ProductDatabase.realm' });
  }

  register_product = () => {
    var that = this;
    const { product_name } = this.state;
    const { product_description } = this.state;
    const { product_price } = this.state;
    if (product_name) {
      if (product_description) {
        if (product_price) {
          realm.write(() => {
            var ID =
              realm.objects('product_details').sorted('product_id', true).length > 0
                ? realm.objects('product_details').sorted('product_id', true)[0]
                    .product_id + 1
                : 1;
            realm.create('product_details', {
              product_id: ID,
              product_name: that.state.product_name,
              product_description: that.state.product_description,
              product_price: that.state.product_price,
            });
            Alert.alert(
              'Success',
              'You have registered product successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
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
              placeholder="Enter Name"
              onChangeText={product_name => this.setState({ product_name })}
            />
            <Mytextinput
              placeholder="Enter Description"
              onChangeText={product_description => this.setState({ product_description })}
              maxLength={225}
            />
            <Mytextinput
              placeholder="Enter Price"
              onChangeText={product_price => this.setState({ product_price })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <Mybutton
              title="Submit"
              customClick={this.register_product.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        </View>
      </View>
    );
  }
}