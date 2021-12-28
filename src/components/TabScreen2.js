import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class TabScreen2 extends Component {
  componentDidMount() {
    console.log('This.props param : ', this.props.route);
  }

  render() {
    return (
      <View>
        {/* <Text> TabScreen2 </Text> */}
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text> Go Back!...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabScreen2;
