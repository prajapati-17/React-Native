import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';
import AsyncStorage from '../extras/AsyncStore';
class SplashScreen extends Component {
  componentDidMount() {
    const asyncStore = new AsyncStorage();
    // asyncStore.storeData('OpenTimes','0');
    asyncStore
      .getData('OpenTimes')
      .then(value => {
        console.log('open time value: ', value);
        if (value) {
          console.log('opening for the 2nd time so value is already stored');
          this.props.getImageListFromAPI(this.props.navigation);
        } else {
          console.log('opening for the first time so no value store');
          asyncStore.storeData('OpenTimes','1');
          this.props.navigation.navigate('onBoaring Screen');
        }
      });
    // this.props.getImageListFromAPI(this.props.navigation);
    //   setTimeout(()=>{
    //     this.props.navigation.navigate('Tab Screens');
    //   })
    // console.log('This.props param : ', this.props.route);
  }

  render() {
    return (
      <View>
        <Text> Welcome To the PostCard!! </Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}

export default connect(null, {getImageListFromAPI})(SplashScreen);
