import React, { Component } from "react";
import { View ,Text, TouchableOpacity } from "react-native";

class TabScreen1 extends Component{
    componentDidMount(){
        console.log('This.props param : ',this.props.route);
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tab Screen2')}>
                    <Text> Go To Tabsceen2 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text> Go Back!...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TabScreen1;