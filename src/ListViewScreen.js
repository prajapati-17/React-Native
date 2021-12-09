import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ListCard from './reusableComponets/ListCard';
import axios from 'axios';
class ListViewScreen extends Component {
  state = {
    imageList: [],
    showLoader: false,
  };

  renderLoader() {
    if (this.state.showLoader) {
      return <ActivityIndicator size="large" color="#b3b3b3" style={styles.loaderStyle}/>;
    }
  }

  getImageAPICall() {
    this.setState({
        showLoader:true,
    }); 
    axios
      .get('https://picsum.photos/v2/list')
      .then(respose => {
        console.log(respose.data);
        this.setState({
            showLoader:false,
        }); 
        this.setState({
          imageList: respose.data,
        });
      })
      .catch(error => {
        this.setState({
            showLoader:false,
        });
        console.log('Error'); 
      });
  }

  componentDidMount() {
    this.getImageAPICall();
  }
  render() {
    const {ViewStyle, HeaderViewStyle} = styles;
    const Data = [
      {
        yourownericon: require('./postit.jpg'),
        yourownerid: 'Hitesh',
        yourimage: require('./birds.jpg'),
        yourpost: '1st Post',
      },
      {
        yourownericon: require('./postit.jpg'),
        yourownerid: 'bro',
        yourimage: require('./thumpsup.jpg'),
        yourpost: '2nd Post',
      },
      {
        yourownericon: require('./postit.jpg'),
        yourownerid: 'yes',
        yourimage: require('./postit.jpg'),
        yourpost: '2nd Post',
      },
      {
        yourownericon: require('./postit.jpg'),
        yourownerid: 'bro',
        yourimage: require('./thumpsup.jpg'),
        yourpost: '2nd Post',
      },
      {
        yourownericon: require('./postit.jpg'),
        yourownerid: 'Hitesh',
        yourimage: require('./birds.jpg'),
        yourpost: '1st Post',
      },
    ];
    // this.getImageAPICall();
    return (
      <View style={ViewStyle}>
        <View style={HeaderViewStyle}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'DancingScript-Bold',
            }}>
            Post Card
          </Text>
        </View>
        {/* <ListCard ownericon={require('./birds.jpg')}   ownerid ="ankit" image={require('./postit.jpg')} post="3rd Post" /> */}
        {/* <ListCard/> */}
        <FlatList
          // data = {Data}
          data={this.state.imageList}
          renderItem={item => {
            // console.log(item,item.item,item.item.yourimage);
            return (
              <ListCard
                ownericon={item.item.download_url}
                ownerid={item.item.author}
                image={item.item.download_url}
                post={item.item.id}
              />
            );
          }}
        />
        {this.renderLoader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  HeaderViewStyle: {
    backgroundColor: '#d3d3d3',
    height: 50,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle:{
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
  },
});

export default ListViewScreen;
