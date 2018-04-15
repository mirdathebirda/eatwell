import React from 'react';
import { Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';

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
            <View style={styles.nutritionFacts} >
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText} > 80 </ProximaText>
                <ProximaText style={styles.nutritionFactText} > Carbs </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> 7 </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Protein </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> 5 </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Fat </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> 2 </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Fiber </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> ♥ ♥ ♥ </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Health </ProximaText>
              </View>
            </View>
          </View>
           <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={require('../../../assets/images/recipes/eggmuffin.png')} />
         <View style={styles.mealTimes}>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Prep Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> 10 mins </ProximaText>
           </View>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Cook Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> 25 mins </ProximaText>
           </View>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Total Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> 35 mins </ProximaText>
           </View>
         </View>
         <ProximaTextBold style={styles.header}> Ingredients </ProximaTextBold>
         <ProximaText>      12 large eggs </ProximaText>
         <ProximaText>      1/3 cup nonfat milk </ProximaText>
         <ProximaText>      3/4 cup quartered cherry tomatoes </ProximaText>
         <ProximaText>      1/2 cup diced onions </ProximaText>
         <ProximaText>      sliced avocado, for serving </ProximaText>
         <ProximaText>      salsa for serving </ProximaText>
         <ProximaText>      crumbled toija or feta cheese, for serving </ProximaText>

         <TouchableOpacity style={styles.button} >
           <ProximaText style={styles.buttonText}> Add to Meal Plan </ProximaText>
         </TouchableOpacity>

         <ProximaTextBold style={styles.header}> Instructions </ProximaTextBold>
          <ProximaText style={styles.paragraph}>
                  1. Preheat the overn to 350 degrees Farenheit. Grease a muffin pann with cooking spray.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
                  2. In a large bowl, whisk together the eggs, nonfat milk and 1.2 teaspoon pepper. Stir in the spinach, tomatoes and onions.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
                  3. Divide the mixture evenly between the 12 muffin pan cups and bake the muffin for 20 to 25 minutes, or until the egg is fully cooked. Remove the muffins from the over and let them cool for 5 minutes in the pan then use a knife to loosen the muffins from the cups.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
                  4. Top each muffin with sliced avocado, a follop of sala and a sprinkling of cheese then serve.
          </ProximaText>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.lemon,
    borderColor: Colors.navy,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderRadius: 5,
    height: 35,
    marginTop:10,
    marginBottom: 5,
    paddingTop:10,
    width: 100,
  },
  buttonText: {
    color: Colors.navy,
    textAlign:'center',
  },
  container: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5,
		paddingRight: 5,
    backgroundColor: '#fff',
  },
  mealplanBar: {
    alignItems:'center',
    backgroundColor: Colors.lemon,
    flex:1,
    flexDirection:'column',
    marginBottom:5,
    paddingTop:5,
    paddingBottom: 5,
    paddingLeft:5,
    paddingRight: 5,
  },
  mealTimes: {
    borderTopWidth:1,
    borderBottomWidth:1,
    flexDirection: 'row',
  },
  mealTime: {
    textAlign: 'center',
    flexDirection: 'column',
    fontSize:17,
    marginTop:5,
    marginBottom:5,
    width: Dimensions.get('window').width/3,
  },
  mealTimeText: {
    textAlign: 'center',
  },
	header: {
		fontSize:17,
		marginTop:10,
		marginBottom:10,
		textAlign: 'left',
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
  nutritionFactText:{
    fontSize:17,
    textAlign:'center',
    marginTop:2,
    marginBottom:2,
  },
  paragraph: {
    fontSize: 15,
    marginTop:3,
    marginBottom:10,
  },
});
