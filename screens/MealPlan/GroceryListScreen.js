import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';


export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
				<ProximaText style={styles.header}> Produce </ProximaText>
				<ProximaText style={styles.item}> 4oz broccoli </ProximaText>
				<ProximaText style={styles.item}> 2 beefsteak tomatoes </ProximaText>

				<ProximaText style={styles.header}> Meat </ProximaText>
				<ProximaText style={styles.item}> 1lb of chicken </ProximaText>

				<ProximaText style={styles.header}> Dairy </ProximaText>
				<ProximaText style={styles.item}>1 cup buttermilk </ProximaText>
				<ProximaText style={styles.item}> 1 large egg</ProximaText>

				<ProximaText style={styles.header}>Dry/Baking Goods</ProximaText>
				<ProximaText style={styles.item}> 1 cup Panko breadcrumbs </ProximaText>
				<ProximaText style={styles.item}> 3/4 all-purpose flour </ProximaText>
				<ProximaText style={styles.item}> 1/2 up cornstarch </ProximaText>

				<ProximaText style={styles.header}>Spices and Sauces</ProximaText>
				<ProximaText style={styles.item}>1/2 cup mayonaise</ProximaText>
				<ProximaText style={styles.item}>1/4 cup sweet chili sauce</ProximaText>
				<ProximaText style={styles.item}>1 tbsp hot sauce (Sriracha)</ProximaText>
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
		paddingLeft:15,
    backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 5,
		textDecorationLine: 'underline',
	},
	item:{
		paddingLeft:10,
		marginTop:5,
	},
});
