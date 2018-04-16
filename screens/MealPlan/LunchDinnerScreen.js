import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText,ProximaTextBold } from '../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class LunchDinner extends React.Component {
  static navigationOptions = {
    title: 'Lunch/Dinner',
  };

	render() {
    const { navigate } = this.props.navigation; //used to link to other pages

		return (
			<ScrollView style={styles.container}>
        <ProximaText> hi </ProximaText>
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
	datebar: {
		borderTopWidth:2,
		borderBottomWidth:2,
	},
	date: {
		textAlign: 'center',
		fontSize:17,
		marginTop:5,
		marginBottom:5,
	},
	header: {
		fontSize:17,
		marginTop:10,
		marginBottom:10,
		textAlign: 'left',
	},
	mealplanBar: {
		alignItems:'center',
		backgroundColor: Colors.lemon,
		flex:1,
		flexDirection:'column',
		marginTop:10,
		marginBottom:5,
		paddingTop:5,
		paddingBottom: 5,
		paddingLeft:5,
		paddingRight: 5,
	},
	pcircles: {
		flexDirection: 'row',
		marginTop:5,
		marginBottom:5,
	},
	pcircle: {
		flexDirection:'column',
		marginLeft:10,
		marginRight:10,
	},
	mealPlanMeals: {

	},
	meals: {
		flexDirection:'column',
	},
	item: {
		marginTop: 5,
		marginRight:5,
		marginLeft:5,
		marginBottom:5,
		paddingBottom:5,
		flex:1,
		flexDirection: 'row',
	},
	image: {
		height: 165,
		width: 165,
		marginBottom:5,
	},
	itemText: {
		marginLeft:10,
		marginTop:10,
	},
});
