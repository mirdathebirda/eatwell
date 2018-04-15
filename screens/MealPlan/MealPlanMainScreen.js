import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText,ProximaTextBold } from '../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class MealPlanMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal Planning Main',
  };

	render() {
    const { navigate } = this.props.navigation; //used to link to other pages

		return (
			<ScrollView style={styles.container}>
				<View style={styles.datebar}>
					<ProximaText style={styles.date}> 12/3 - 12/9 </ProximaText>
				</View>
				<View style = {styles.mealplanBar}>
					<ProximaText style = {styles.header}> This Week's Meal Plan </ProximaText>
					<View style={styles.pcircles} >
						<View style={styles.pcircle} >
							<PercentageCircle borderWidth={5} radius={25} percent={75} color={Colors.navy}></PercentageCircle>
							<ProximaText> Carbs </ProximaText>
						</View>
						<View style={styles.pcircle} >
							<PercentageCircle borderWidth={5} radius={25} percent={54} color={Colors.navy}></PercentageCircle>
							<ProximaText> Protein </ProximaText>
						</View>
						<View style={styles.pcircle} >
							<PercentageCircle borderWidth={5} radius={25} percent={92} color={Colors.navy}></PercentageCircle>
							<ProximaText> Fat </ProximaText>
						</View>
						<View style={styles.pcircle} >
							<PercentageCircle borderWidth={5} radius={25} percent={33} color={Colors.navy}></PercentageCircle>
							<ProximaText> Fiber </ProximaText>
						</View>
						<View style={styles.pcircle} >
							<PercentageCircle borderWidth={5} radius={25} percent={61} color={Colors.navy}></PercentageCircle>
							<ProximaText> Iron </ProximaText>
						</View>
					</View>
				</View>
				<View style={styles.mealPlanMeals}>
					<ProximaTextBold style = {styles.header}> Breakfast </ProximaTextBold>
					<View style={styles.meals}>
						<TouchableOpacity onPress={() => navigate('EggMuffin')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/eggmuffin.png')} />
							<View style={styles.itemText}>
								<ProximaText>Healthy Breakfast Egg Muffins</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigate('EggMuffin')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/eggmuffin.png')} />
							<View style={styles.itemText}>
								<ProximaText>Healthy Breakfast Egg Muffins</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
					</View>
					<ProximaTextBold style = {styles.header}> Lunch/Dinner </ProximaTextBold>
					<View style={styles.meals}>
						<TouchableOpacity onPress={() => navigate('ChickenTacoAvocado')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/chickentacoavocado.png')} />
							<View style={styles.itemText}>
								<ProximaText>Chicken Taco Avocado</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigate('ChickenTacoAvocado')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/chickentacoavocado.png')} />
							<View style={styles.itemText}>
								<ProximaText>Chicken Taco Avocado</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
					</View>
					<ProximaTextBold style = {styles.header}> Snacks </ProximaTextBold>
					<View style={styles.meals}>
						<TouchableOpacity onPress={() => navigate('Granola')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/granola.png')} />
							<View style={styles.itemText}>
								<ProximaText>Granola</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigate('Granola')} style={styles.item}>
			        <Image style={styles.image} source={require('../../assets/images/recipes/granola.png')} />
							<View style={styles.itemText}>
								<ProximaText>Granola</ProximaText>
								<ProximaText>Description of recipes </ProximaText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
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
