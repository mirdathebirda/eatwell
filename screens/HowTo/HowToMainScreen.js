import React from 'react';
import { Image,ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';


export default class HowToMainScreen extends React.Component {
  static navigationOptions = {
    title: 'How Tos',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/images/howtos/dice.jpeg')} />
				<Image source={require('../../assets/images/howtos/slice.jpg')} />
				<Image source={require('../../assets/images/howtos/fryegg.jpg')} />
				<Image source={require('../../assets/images/howtos/sear.jpg')} />
				<Image source={require('../../assets/images/howtos/softpeak.jpg')} />
				<Image source={require('../../assets/images/howtos/frostcake.jpg')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
