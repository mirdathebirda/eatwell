import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';


export default class SnackAMeal extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.header}> Call a snack a meal, and you're less apt to overeat </ProximaText>
				<ProximaText> Labeling some foods as meals rather than snacks could cut down on overeating, a new study suggests.</ProximaText>

				<ProximaText>The research included 80 people who were asked to eat a pasta dish presented as either a snack (eaten standing up from a plastic pot with a plastic fork) or a meal (eaten seated at a table from a ceramic plate with a metal fork).</ProximaText>

				<ProximaText>After they ate the meals, the participants were invited to taste-test additional foods, such as animal crackers and M&Ms.</ProximaText>

				<ProximaText>Those who'd eaten the pasta presented as a snack ate much more during the taste test than those who'd eaten the paste presented as a meal, according to the study, published online recently in the journal Appetite.</ProximaText>

				<ProximaText>"With our lives getting busier, increasing numbers of people are eating on the go and consuming foods that are labeled as 'snacks' to sustain them," said study author Jane Ogden, a professor of health psychology at the University of Surrey, England.</ProximaText>

				<ProximaText>"What we have found is that those who are consuming snacks are more likely to overeat as they may not realize or even remember what they have eaten," she added in a university news release.</ProximaText>

				<ProximaText>"To overcome this, we should call our food a meal and eat it as meal, helping make us more aware of what we are eating so that we don't overeat later on," she suggested.</ProximaText>
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
});
