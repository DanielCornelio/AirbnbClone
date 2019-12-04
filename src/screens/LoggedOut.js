import React, {Component} from 'react';
import colors from '../styles/colors';
import {StyleSheet, View, Text, Image} from 'react-native';

class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={require('../img/airbnb-logo.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
});
export default LoggedOut;
