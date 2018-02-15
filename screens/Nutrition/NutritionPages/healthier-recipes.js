import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class HealthierRecipes extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}> 10 ways to make recipes healthier</Text>
				<Text> 1. Make creamy dishes without the cream </Text>
				<Text> 2. Try cooking with less oil </Text>
				<Text> 3. Get crispy “fried” food without the grease </Text>
				<Text> 4. Amp up flavor without the salt shaker </Text>
				<Text> 5. Use whole grains in baked goods</Text>
				<Text> 6. Swap good fats for bad fats</Text>
				<Text> 7. Go for egg whites in place of whole eggs </Text>
				<Text> 8. Slim down homemade ice cream</Text>
				<Text> 9. Add grains or vegetables to meaty dishes </Text>
				<Text> 10. Reduce cheese, keep the flavor </Text>
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
