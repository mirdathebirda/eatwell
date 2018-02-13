import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';


export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

  render() {
    return (
      <View>
				<ProximaText style={styles.header}> Produce </ProximaText>
				<ProximaText> 4oz broccoli </ProximaText>
				<ProximaText> 2 beefsteak tomatoes </ProximaText>

				<ProximaText style={styles.header}> Meat </ProximaText>
				<ProximaText> 1lb of chicken </ProximaText>

				<ProximaText style={styles.header}> Dairy </ProximaText>
				<ProximaText>1 cup buttermilk </ProximaText>
				<ProximaText> 1 large egg</ProximaText>

				<ProximaText style={styles.header}>Dry/Baking Goods</ProximaText>
				<ProximaText> 1 cup Panko breadcrumbs </ProximaText>
				<ProximaText> 3/4 all-purpose flour </ProximaText>
				<ProximaText> 1/2 up cornstarch </ProximaText>

				<ProximaText style={styles.header}>Spices and Sauces</ProximaText>
				<ProximaText>1/2 cup mayonaise</ProximaText>
				<ProximaText>1/4 cup sweet chili sauce</ProximaText>
				<ProximaText>1 tbsp hot sauce (Sriracha)</ProximaText>
			</View>
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
		textDecorationLine: 'underline',
	},
});
