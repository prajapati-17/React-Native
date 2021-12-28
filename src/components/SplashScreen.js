import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import { getImageListFromAPI } from '../actions';
class SplashScreen extends Component {
  componentDidMount() {
    this.props.getImageListFromAPI(this.props.navigation);
    //   setTimeout(()=>{
    //     this.props.navigation.navigate('Tab Screens');
    //   })
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

export default connect(null,{getImageListFromAPI})(SplashScreen);
