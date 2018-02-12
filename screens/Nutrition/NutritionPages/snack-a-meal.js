import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class SnackAMeal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Call a snack a meal, and you're less apt to overeat </Text>
				<Text> Labeling some foods as meals rather than snacks could cut down on overeating, a new study suggests.

				The research included 80 people who were asked to eat a pasta dish presented as either a snack (eaten standing up from a plastic pot with a plastic fork) or a meal (eaten seated at a table from a ceramic plate with a metal fork).

				After they ate the meals, the participants were invited to taste-test additional foods, such as animal crackers and M&Ms.

				Those who'd eaten the pasta presented as a snack ate much more during the taste test than those who'd eaten the paste presented as a meal, according to the study, published online recently in the journal Appetite.

				"With our lives getting busier, increasing numbers of people are eating on the go and consuming foods that are labeled as 'snacks' to sustain them," said study author Jane Ogden, a professor of health psychology at the University of Surrey, England.

				"What we have found is that those who are consuming snacks are more likely to overeat as they may not realize or even remember what they have eaten," she added in a university news release.

				"To overcome this, we should call our food a meal and eat it as meal, helping make us more aware of what we are eating so that we don't overeat later on," she suggested.</Text>
      </View>
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
});
