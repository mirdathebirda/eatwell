import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class NutritionMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrition and Cheatsheets',
  };

	render() {
		return (
			<ScrollView style={styles.container}>
				<Text> Frequently Viewed Articles </Text>
				<Text> 10 ways to make recipes healthier</Text>
				<Text> Call a snack a meal, and you're less apt to overeat </Text>
				<Text> 8 eating habits you should cut right now </Text>

				<Text> Newest Articles </Text>
				<Text>How exercise can make for healthier fat</Text>
				<Text> Tips for improving your health</Text>
				<Text>All about coffee</Text>
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
