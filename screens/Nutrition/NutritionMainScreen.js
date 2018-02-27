import React from 'react';
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';



export default class NutritionMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrition and Cheatsheets',
  };

	render() {
		//TODO: dix this so it doesn't only navigate to routes in TabNavigators only
		const { navigate } = this.props.navigation; //used to link to other pages

		return (
			<ScrollView style={styles.container}>
				<ProximaText style={styles.header}> Frequently Viewed Articles </ProximaText>
				<TouchableOpacity onPress={() => navigate('NutritionPages/HealthierRecipes')}>
					<ProximaText style={styles.articleb}> 10 ways to make recipes healthier</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('SnackAMeal')}>
					<ProximaText style={styles.articley}> Call a snack a meal, and you're less apt to overeat </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('EightEatingHabits')}>
					<ProximaText style={styles.articleb}> 8 eating habits you should cut right now </ProximaText>
				</TouchableOpacity>

				<ProximaText style={styles.header}> Newest Articles </ProximaText>
				<TouchableOpacity onPress={() => navigate('ExerciseFat')}>
					<ProximaText style={styles.articley}>How exercise can make for healthier fat</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('ImprovingHealth')}>
					<ProximaText style={styles.articleb}> Tips for improving your health</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('AllAboutCoffee')}>
					<ProximaText style={styles.articley}>All about coffee</ProximaText>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
		paddingLeft: 10,
		paddingRight:10,
    backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	articleb: {
		color: '#fff',
		backgroundColor: Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
	articley: {
		backgroundColor: Colors.lemon,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
});
