import React, { Component } from "react";
import { View ,Text, TouchableOpacity } from "react-native";

class NextScreen extends Component{
    componentDidMount(){
        console.log('This.props param : ',this.props.route);
    }

    render(){
        return(
            <View>
                <Text> The Next Screen </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text> Go Back!...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NextScreen;