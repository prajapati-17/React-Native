import React, { Component } from "react";
import { View ,Text, TouchableOpacity } from "react-native";

class ImageDetailsScreen extends Component{
    componentDidMount(){
        console.log('This.props param : ',this.props.route);
    }

    render(){
        return(
            <View>
                <Text> Image Details : {this.props.route.params.image_id}</Text>
                {/* <Text> Image link : {this.props.route.key}</Text> */}
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text> Go Back!...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ImageDetailsScreen;