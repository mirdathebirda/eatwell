import React from 'react';
import { Image,ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';

export default class HowToMainScreen extends React.Component {
  static navigationOptions = {
    title: 'How Tos',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
				<View style={styles.row}>
					<ProximaText style={styles.header}>Prep</ProximaText>
	        <Image style={styles.image} source={require('../../assets/images/howtos/dice.jpeg')} />
					<Image style={styles.image} source={require('../../assets/images/howtos/slice.jpg')} />
				</View>
				<View style={styles.row}>
					<ProximaText style={styles.header}>Cook</ProximaText>
					<Image style={styles.image} source={require('../../assets/images/howtos/fryegg.jpg')} />
					<Image style={styles.image} source={require('../../assets/images/howtos/sear.jpg')} />
				</View>
				<View style={styles.row}>
					<ProximaText style={styles.header}>Bake</ProximaText>
					<Image style={styles.image} source={require('../../assets/images/howtos/softpeak.jpg')} />
					<Image style={styles.image} source={require('../../assets/images/howtos/frostcake.jpg')} />
				</View>
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
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	image: {
		width:50,
		height:50,
	}
});
