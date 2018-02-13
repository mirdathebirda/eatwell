import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

  render() {
    return (
      <View>
				<Text style={styles.header}> Produce </Text>
				<Text> 4oz broccoli </Text>
				<Text> 2 beefsteak tomatoes </Text>

				<Text style={styles.header}> Meat </Text>
				<Text> 1lb of chicken </Text>

				<Text style={styles.header}> Dairy </Text>
				<Text>1 cup buttermilk </Text>
				<Text> 1 large egg</Text>

				<Text style={styles.header}>Dry/Baking Goods</Text>
				<Text> 1 cup Panko breadcrumbs </Text>
				<Text> 3/4 all-purpose flour </Text>
				<Text> 1/2 up cornstarch </Text>

				<Text style={styles.header}>Spices and Sauces</Text>
				<Text>1/2 cup mayonaise</Text>
				<Text>1/4 cup sweet chili sauce</Text>
				<Text>1 tbsp hot sauce (Sriracha)</Text>
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
