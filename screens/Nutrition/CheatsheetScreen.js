import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';


export default class CheatsheetScreen extends React.Component {
  static navigationOptions = {
    title: 'Cheatsheets',
  };

  render() {
		//TODO: dix this so it doesn't only navigate to routes in TabNavigators only
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <ScrollView style={styles.container}>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articleb}> Correct Portion Sizes</ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articley}> Pick in produce seaso}n </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articleb}> Is your meat done? </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articley}> How long does food last in the fridge? </ProximaText>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('MealPlanMain')}>
					<ProximaText style={styles.articleb}> Common Substitutions </ProximaText>
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
