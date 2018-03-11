import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';
import CheckBox from 'react-native-checkbox';


export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

  render() {
    return (
      <View style={styles.container}>
				<ProximaText style={styles.header}> Produce </ProximaText>
				<CheckBox label=' 4oz broccoli' checked={false} />
				<CheckBox label=' 2 beefsteak tomatoes' checked={false} />

				<ProximaText style={styles.header}> Meat </ProximaText>
				<CheckBox label=' 1lb of chicken' checked={false} />

				<ProximaText style={styles.header}> Dairy </ProximaText>
				<CheckBox label='1 cup buttermilk' checked={false} />
				<CheckBox label=' 1 large egg' checked={false} />

				<ProximaText style={styles.header}>Dry/Baking Goods</ProximaText>
				<CheckBox label=' 1 cup Panko breadcrumbs' checked={false} />
				<CheckBox label='3/4 all-purpose flour' checked={false} />
				<CheckBox label='1/2 cup cornstarch' checked={false} />

				<ProximaText style={styles.header}>Spices and Sauces</ProximaText>
				<CheckBox label='1/2 cup mayonaise' checked={false} />
				<CheckBox label='1/4 cup sweet chili sauce' checked={false} />
				<CheckBox label='1 tbsp hot sauce (Sriracha)' checked={false} />

			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingLeft:10,
		paddingRight:10,
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
