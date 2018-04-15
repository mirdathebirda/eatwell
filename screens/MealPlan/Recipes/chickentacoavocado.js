import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class ChickenTacoAvocado extends React.Component {
  static navigationOptions = {
    title: 'Chicken Taco Avocado'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style = {styles.mealplanBar}>
            <ProximaText style = {styles.header}> This Week's Meal Plan </ProximaText>
            <View style={styles.nutritionFacts} >
              <View style={styles.nutritionFact} >
                <ProximaText> 80 </ProximaText>
                <ProximaText> Carbs </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText> 7 </ProximaText>
                <ProximaText> Protein </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText> 5 </ProximaText>
                <ProximaText> Fat </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText> 2 </ProximaText>
                <ProximaText> Fiber </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText> ♥ ♥ ♥ </ProximaText>
                <ProximaText> Why? </ProximaText>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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
	nutritionFacts: {
		flexDirection: 'row',
		marginTop:5,
		marginBottom:5,
	},
	nutritionFact: {
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
