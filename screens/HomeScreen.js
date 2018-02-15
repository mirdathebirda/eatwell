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

import { ProximaText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
		//usage: navigate.('routeName') - routeNames can be found in TabNavigators
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <View style={styles.container}>
				<ProximaText style={styles.header}> Eatwell </ProximaText>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
			      <Image style={styles.button} source={require('../assets/images/mealplanning.jpg')} />
			    </TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('NutritionMain')}>
						<Image style={styles.button} source={require('../assets/images/nutrition.jpg')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('HowToMain')}>
			      <Image style={styles.button} source={require('../assets/images/howto.png')} />
			    </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	button:{
		marginTop: 10,
		marginBottom: 10,
		marginLeft:10,
		marginRight:10,
		width:null,
		height: 180,
	},
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
