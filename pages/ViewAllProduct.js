import React from 'react';
import { FlatList, Text, View, Button, Alert } from 'react-native';
import Realm from 'realm';
let realm;

export default class ViewAllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'ProductDatabase.realm' });
    var product_details = realm.objects('product_details');
    this.state = {
      FlatListItems: product_details,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.product_id}</Text>
              <Text>Name: {item.product_name}</Text>
              <Text>Description: {item.product_description}</Text>
              <Text>Price: {item.product_price}</Text>
              <Button title='BUY' onPress={()=>{Alert.alert('Confirm purchase',`Buy ${item.product_name}?`,[{text:'Cancel'},{text:`Buy ${item.product_price}`}])}}/>
            </View>
          )}
        />
      </View>
    );
  }
}