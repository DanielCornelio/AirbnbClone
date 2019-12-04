import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class RoundedButton extends Component {
  render() {
    const {text} = this.props;
    return (
      <TouchableHighlight >
        <Text>{text}</Text>
      </TouchableHighlight>
    );
  }
}

RoundedButton.PropTypes = {
  text: PropTypes.string.isRequired,
};

const style = StyleSheet.create({
    wrapper:{

    },
});

