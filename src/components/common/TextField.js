import React, {Component} from 'react';
import {TextInput} from 'react-native';
// import ListCard from './ListCard';

class TextField extends Component {
  render() {
    const {placeholder, onChangeText, style, value} = this.props;
    const {textFieldStyle} = styles;
    return (
      <TextInput
        placeholder={placeholder}
        style={[textFieldStyle,style]}
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        value={value}
      />
    );
  }
}

const styles = {
  textFieldStyle: {
    width: '90%',
    height: 40,
    borderBottomWidth: 2,
    alignSelf: 'center',
    borderColor: 'grey',
    color: 'black',
  },
};

export {TextField};
