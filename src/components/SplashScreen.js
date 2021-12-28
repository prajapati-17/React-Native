import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
      setTimeout(()=>{
        this.props.navigation.navigate('Tab Screens');
      })
    // console.log('This.props param : ', this.props.route);
  }

  render() {
    return (
      <View>
        <Text> Welcome To the PostCard!! </Text>
        <ActivityIndicator size="large" color="red"/>
      </View>
    );
  }
}

export default SplashScreen;
