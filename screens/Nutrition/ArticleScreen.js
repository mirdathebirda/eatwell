import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';



export default class ArticleScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
		//TODO: dix this so it doesn't only navigate to routes in TabNavigators only
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <ScrollView style={styles.container}>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
	        <ProximaText style={styles.articleb}> 10 ways to make recipes healthier</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articley}> Call a snack a meal, and you're less apt to overeat </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articleb}> 8 eating habits you should cut right now </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articley}>How exercise can make for healthier fat</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articleb}> Tips for improving your health</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articley}>All about coffee</ProximaText>
				</TouchableOpacity>
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
	articleb: {
		color: Colors.lemon,
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
		color:  Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
});
