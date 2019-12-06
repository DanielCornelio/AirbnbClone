import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors/index';

export default class RoundedButton extends Component {
  render() {
    const {text} = this.props;
    return (
      <TouchableHighlight style={styles.wrapper}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

RoundedButton.PropTypes = {
  text: PropTypes.string.isRequired,
};

const style = StyleSheet.create({
  wrapper: {},
  buttonText: {
    color: colors.white,
  },
});
