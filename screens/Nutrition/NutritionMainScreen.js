import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';



export default class NutritionMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrition and Cheatsheets',
  };

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}> Frequently Viewed Articles </Text>
				<Text style={styles.articleb}> 10 ways to make recipes healthier</Text>
				<Text style={styles.articley}> Call a snack a meal, and you're less apt to overeat </Text>
				<Text style={styles.articleb}> 8 eating habits you should cut right now </Text>

				<Text style={styles.header}> Newest Articles </Text>
				<Text style={styles.articley}>How exercise can make for healthier fat</Text>
				<Text style={styles.articleb}> Tips for improving your health</Text>
				<Text style={styles.articley}>All about coffee</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
		paddingLeft: 10,
		paddingRight:10,
    backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	articleb: {
		color: '#fff',
		backgroundColor: Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
	articley: {
		backgroundColor: Colors.lemon,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
});
