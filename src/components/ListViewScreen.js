import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

// Declusterting
import {ListCard, TextField} from './common';
import { connect } from 'react-redux';
import {imageSearchBoxValueChanged,getImageListFromAPI,toggleImageListLoader} from '../actions';
import axios from 'axios';

class ListViewScreen extends Component {
  state = {
    imageList: [],
    showLoader: false,
  };

  renderLoader() {
    // if (this.state.showLoader) {
    if(this.props.showLoader){
      return (
        <ActivityIndicator
          size="large"
          color="#b3b3b3"
          style={styles.loaderStyle}
        />
      );
    }
  }

  getImageAPICall() {
    this.setState({
      showLoader: false,
    });
    axios
      .get('https://picsum.photos/v2/list')
      .then(respose => {
        console.log(respose.data);
        this.setState({
          showLoader: false,
        });
        this.setState({
          imageList: respose.data,
        });
      })
      .catch(error => {
        this.setState({
          showLoader: false,
        });
        console.log('Error');
      });
  }

  componentDidMount() {
    // this.getImageAPICall();
    // this.props.toggleImageListLoader(true);
    this.props.getImageListFromAPI();
    // this.props.toggleImageListLoader(false);
    // console.log(this.props);
  }
  render() {
    const {ViewStyle, HeaderViewStyle} = styles;
    // const Data = [
    //   {
    //     yourownericon: require('./postit.jpg'),
    //     yourownerid: 'Hitesh',
    //     yourimage: require('./birds.jpg'),
    //     yourpost: '1st Post',
    //   },
    // {
    //   yourownericon: require('./postit.jpg'),
    //   yourownerid: 'bro',
    //   yourimage: require('./thumpsup.jpg'),
    //   yourpost: '2nd Post',
    // },
    // {
    //   yourownericon: require('./postit.jpg'),
    //   yourownerid: 'yes',
    //   yourimage: require('./postit.jpg'),
    //   yourpost: '2nd Post',
    // },
    // {
    //   yourownericon: require('./postit.jpg'),
    //   yourownerid: 'bro',
    //   yourimage: require('./thumpsup.jpg'),
    //   yourpost: '2nd Post',
    // },
    // {
    //   yourownericon: require('./postit.jpg'),
    //   yourownerid: 'Hitesh',
    //   yourimage: require('./birds.jpg'),
    //   yourpost: '1st Post',
    // },
    // ];
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
        <TextField
          placeholder="Search"
          onChangeText={value=>{
            console.log('filtered image list : ',this.props.filtered_image_list);
            // console.log('imagelist',this.props.image_list);
            this.props.imageSearchBoxValueChanged(this.props.image_list_val,value);

          }}
          value = {this.props.image_search_value}
          style = {{width:'95%'}}
        />
        <FlatList
          // data = {Data}
          // data={this.state.imageList}
          // data = {this.props.image_list_val}
          data = {this.props.filtered_image_list}
          renderItem={item => {
            // console.log('GEt item data:',this.props.filtered_image_list);
            console.log(item,item.item,item.item.download_url);
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
  loaderStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

// connect 

const mapStateToProps =state =>{
  // console.log('maptoprop',state.imageListing.image_search)
  return{
    image_search_value : state.imageListing.image_search,
    image_list_val : state.imageListing.image_list,
    showLoader : state.imageListing.showLoader,
    filtered_image_list: state.imageListing.filtered_image_list,
  };
};

export default connect((mapStateToProps),{imageSearchBoxValueChanged,getImageListFromAPI,toggleImageListLoader})(ListViewScreen);
