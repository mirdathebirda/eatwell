import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';



export default class HealthierRecipes extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.header}> 10 ways to make recipes healthier</ProximaText>
				<ProximaText> 1. Make creamy dishes without the cream </ProximaText>
				<ProximaText> 2. Try cooking with less oil </ProximaText>
				<ProximaText> 3. Get crispy “fried” food without the grease </ProximaText>
				<ProximaText> 4. Amp up flavor without the salt shaker </ProximaText>
				<ProximaText> 5. Use whole grains in baked goods</ProximaText>
				<ProximaText> 6. Swap good fats for bad fats</ProximaText>
				<ProximaText> 7. Go for egg whites in place of whole eggs </ProximaText>
				<ProximaText> 8. Slim down homemade ice cream</ProximaText>
				<ProximaText> 9. Add grains or vegetables to meaty dishes </ProximaText>
				<ProximaText> 10. Reduce cheese, keep the flavor </ProximaText>
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
