import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class ListCard extends Component {
  render() {
    const {nameStyle, imageStyle, cardStyle, textStyle, ownericonStyle} = styles;
    const {ownericon,ownerid,image,post} = this.props
    return (
        <View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',backgroundColor:'white',borderColor:'black',borderWidth:0.1,marginTop:10,elevation:10}}>
            <Image style={ownericonStyle} source={ownericon} />
            <View style={nameStyle}><Text>{ownerid}</Text></View>
        </View>
        <View style={cardStyle}>
            <Image style={imageStyle} source={image} />
            <View style={textStyle}>
            <Text>{post}</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ownericonStyle: {
    height: 40,
    borderRadius: 40/2,
    width: '10%',
    // marginTop: 2,
    marginRight : '2%',
    marginLeft:10,
    marginBottom:2,
    // alignSelf:'flex-start',
    // alignItems:'flex-start',
    // flexDirection:'row',
    justifyContent:'center',
    // display:'flex',
    // flexWrap:'wrap',
    // backgroundColor:'#b3b3b3',
    
  },
  nameStyle: {
    height: 38,
    // alignSelf: 'flex-start',
    // alignItems:'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  imageStyle: {
    height: 300,
    width: '100%',
    // borderColor:'black',borderWidth:0.2,
  },
  cardStyle: {
    // backgroundColor: 'white',
    width: '100%',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor:'#b3b3b3',
    elevation:10,
  },
});

export default ListCard;
