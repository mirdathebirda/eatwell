import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Constants } from 'expo';



export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button style = {styles.mealplan}
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='Meal Planning' />

        <Button style = {styles.nutrition}
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='Nutrition and Cheatsheets' />

        <Button style = {styles.howto}
        large
        icon={{name: 'envira', type: 'font-awesome'}}
        title='How Tos' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  mealplan: {
    fontSize: 50,
    height:60,
    backgroundColor: '#000',
  	marginBottom: Constants.statusBarHeight,
  },
  nutrition: {
    fontSize: 50,
    height:60,
    backgroundColor: '#0000ff',
  	marginBottom: Constants.statusBarHeight,
  },
  howto: {
    fontSize: 50,
    height:60,
    backgroundColor: '#ffff00',
  	marginBottom: Constants.statusBarHeight,
  },
});
