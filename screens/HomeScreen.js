import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Colors from '../constants/Colors';
import { ProximaText, SunValleyText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
		//usage: navigate.('routeName') - routeNames can be found in TabNavigators
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <View style={styles.container}>
				<SunValleyText style={styles.header}> eatwell </SunValleyText>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
			      <Image style={styles.button} source={require('../assets/images/mealplanning.jpg')} />
						<View style={styles.backdrop}>
							<ProximaText style={styles.title}> Meal Planning </ProximaText>
						</View>
			    </TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('NutritionMain')}>
						<Image style={styles.button} source={require('../assets/images/nutrition.jpg')} />
						<View style={styles.backdrop}>
							<ProximaText style={styles.title}> Nutrition and Cheatsheets </ProximaText>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('HowToMain')}>
			      <Image style={styles.button} source={require('../assets/images/howto.png')} />
						<View style={styles.backdrop}>
							<ProximaText style={styles.title}> How Tos </ProximaText>
						</View>
			    </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	button:{
		marginTop: 10,
		marginLeft:10,
		marginRight:10,
		paddingBottom:40,
		width:null,
		height: 180,
	},
	header: {
    color: Colors.navy,
		fontSize: 50,
		marginTop: 5,
		marginBottom: 5,
	},
	backdrop: {
		backgroundColor: Colors.lemon,
		marginBottom:10,
		marginLeft:10,
		marginRight:10,
		paddingTop:7,
		paddingBottom:7,
		paddingLeft:5,
		paddingRight:5,
		width: null,
	},
	title: {
		// TODO: change to Bold font
		color: Colors.navy,
		fontSize:20,
	},
	container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
