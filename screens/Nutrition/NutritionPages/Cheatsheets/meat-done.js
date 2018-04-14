import React from 'react';
import {Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class MealDone extends React.Component {
  static navigationOptions = {
    title: 'Is your meat done?',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={{ width:null, height: 180, marginBottom: 15 }} source={{uri: 'https://www.omahasteaks.com/gifs/990x594/pr_ts004.jpg'}}   />

        <ProximaTextBold style={styles.header}> Chicken </ProximaTextBold>
				<ProximaText>Done if it's white all the way through (no raw pink) and all the juices run clear</ProximaText>

        <ProximaTextBold style={styles.header}> Ground Meat </ProximaTextBold>
				<ProximaText>Done if it's no longer pink (brown) </ProximaText>

        <ProximaTextBold style={styles.header}> Steak </ProximaTextBold>

        <ProximaText style={styles.subheader}> Rare </ProximaText>
				<ProximaText> Press your thumb and index  finger together and make a circle and touch the ball of your thumb. The soft feeling is rare. </ProximaText>

        <ProximaText style={styles.subheader}> Medium Rare </ProximaText>
				<ProximaText> Press your thumb and middle finger together and make a circle and touch the ball of your thumb. The soft,sort of springy feeling is medium rare. </ProximaText>

        <ProximaText style={styles.subheader}> Medium </ProximaText>
				<ProximaText> Press your thumb and ring finger together and make a circle and touch the ball of your thumb. The springy feeling is medium. </ProximaText>

        <ProximaText style={styles.subheader}> Well Done </ProximaText>
				<ProximaText> Press your thumb and pinky finger together and make a circle and touch the ball of your thumb. The firm feeling is well done. </ProximaText>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight:15,
		backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
  subheader:{
  },
});
