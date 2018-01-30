import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router';
import { Constants } from 'expo';
import { WebBrowser } from 'expo';



export default class App extends React.Component {
  render() {
    return (
      <View style=styles.button>
        <Button
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='Meal Planning' />

        <Button
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='Nutrition and Cheatsheets' />

        <Button
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='How Tos' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // marginTop:Constants.statusBarHeight,
  	marginBottom: Constants.statusBarHeight,
  },
});
