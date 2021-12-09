import React,{Component} from 'react';
import {View, Text ,StyleSheet,FlatList} from 'react-native';
import ListCard from './reusableComponets/ListCard';

class ListViewScreen extends Component{
    render(){
        const {ViewStyle,HeaderViewStyle} = styles;
        const Data = [
            {
                yourownericon : require('./postit.jpg'),
                yourownerid : 'Hitesh', 
                yourimage : require('./birds.jpg'),
                yourpost : '1st Post', 
            },
            {
                yourownericon :require('./postit.jpg'),
                yourownerid : 'bro', 
                yourimage : require('./thumpsup.jpg'),
                yourpost : '2nd Post', 
            },
            {
                yourownericon :require('./postit.jpg'),
                yourownerid : 'yes', 
                yourimage : require('./postit.jpg'),
                yourpost : '2nd Post', 
            },
            {
                yourownericon :require('./postit.jpg'),
                yourownerid : 'bro', 
                yourimage : require('./thumpsup.jpg'),
                yourpost : '2nd Post', 
            },
            {
                yourownericon : require('./postit.jpg'),
                yourownerid : 'Hitesh', 
                yourimage : require('./birds.jpg'),
                yourpost : '1st Post', 
            },
        ];

        return (
            <View style={ViewStyle}>
                <View style={HeaderViewStyle}> 
                    <Text style={{fontSize:20,fontWeight:'bold',fontFamily:'DancingScript-Bold'}}>Post Card</Text>
                </View>
                {/* <ListCard ownericon={require('./birds.jpg')}   ownerid ="ankit" image={require('./postit.jpg')} post="3rd Post" /> */}
                {/* <ListCard/> */}
                <FlatList 
                data = {Data}
                renderItem={item =>{
                    console.log(item,item.item,item.item.yourimage);
                    return (
                    <ListCard  ownericon={item.item.yourownericon} ownerid={item.item.yourownerid} image={item.item.yourimage} post={item.item.yourpost}/>
                    )
                }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        ViewStyle:{
            backgroundColor: 'white',
            flex : 1,

        },
        HeaderViewStyle:{
            backgroundColor: '#d3d3d3',
            height: 50,
            elevation: 10,
            alignItems: 'center',
            justifyContent:'center',
        },
    }
);

export default ListViewScreen;