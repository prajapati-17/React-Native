import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';

class onBoarding extends Component {
  componentDidMount() {
    console.log('This.props param : ', this.props.route);
    // this.props.getImageListFromAPI(this.props.navigation);
  }

  render() {
    return (
      <View>
        <Text> onBoarding </Text>
        <TouchableOpacity onPress={()=>this.props.getImageListFromAPI(this.props.navigation)}>
          <Text>Next</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Tab Screens")}>
          <Text>Next</Text>
        </TouchableOpacity>
         */}
      </View>
    );
  }
}

const mapSTateToProps = state =>{
    return {};
};

export default connect(mapSTateToProps,{getImageListFromAPI})(onBoarding);
