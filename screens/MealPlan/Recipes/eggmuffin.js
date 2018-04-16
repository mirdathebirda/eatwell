import React from 'react';
import { Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class EggMuffin extends React.Component {
  static navigationOptions = {
    title: 'Healthy Breakfast Egg Muffins'
  };

  constructor(props){
    super(props);

    this.state = {
      carbs: 80,
      protein:7,
      fat:5,
      fiber:2,
      health:'♥ ♥ ♡ ',
      prepTime:'10 mins',
      cookTime:'25 mins',
      totalTime: '35 mins',
      ingredients: [
        {
          name: 'eggs',
          measurement: 'large',
          quantity: 12,
        },
        {
          name: 'nonfat milk',
          measurement: 'cup',
          quantity: (1/3).toFixed(2),
        },
        {
          name: 'cherry tomatoes',
          measurement: 'cup',
          quantity: (3/4).toFixed(2),
        },
        {
          name: 'onions',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'avocado',
          measurement: '',
          quantity: '',
        },
        {
          name: 'salsa',
          measurement: '',
          quantity: '',
        },
        {
          name: 'crumbled toija or feta cheese',
          measurement: '',
          quantity: '',
        },
      ],
      instructions: [
        '1. Preheat the overn to 350 degrees Farenheit. Grease a muffin pann with cooking spray.',
        '2. In a large bowl, whisk together the eggs, nonfat milk and 1.2 teaspoon pepper. Stir in the spinach, tomatoes and onions.',
        '3. Divide the mixture evenly between the 12 muffin pan cups and bake the muffin for 20 to 25 minutes, or until the egg is fully cooked. Remove the muffins from the over and let them cool for 5 minutes in the pan then use a knife to loosen the muffins from the cups.',
        '4. Top each muffin with sliced avocado, a follop of sala and a sprinkling of cheese then serve.',
      ],
    }
  }

  render() {
    const { navigate } = this.props.navigation; //used to link to other pages

    var ingredientsList = [];
    for (let i = 0; i < this.state.ingredients.length; i++) {
      ingredientsList.push(
        <ProximaText key={i}>     {this.state.ingredients[i].quantity} {this.state.ingredients[i].name} {this.state.ingredients[i].measurement}
        </ProximaText>
    )}

    const instructionsList = this.state.instructions.map((instruction) => {
      return(
        <ProximaText style={styles.paragraph} key={instruction}>     {instruction}
        </ProximaText>
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style = {styles.mealplanBar}>
            <View style={styles.nutritionFacts} >
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText} > {this.state.carbs} </ProximaText>
                <ProximaText style={styles.nutritionFactText} > Carbs </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> {this.state.protein} </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Protein </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> {this.state.fat} </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Fat </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> {this.state.fiber} </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Fiber </ProximaText>
              </View>
              <View style={styles.nutritionFact} >
                <ProximaText style={styles.nutritionFactText}> {this.state.health}</ProximaText>
                <ProximaText style={styles.nutritionFactText}> Health </ProximaText>
              </View>
            </View>
          </View>
           <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={require('../../../assets/images/recipes/eggmuffin.png')} />
         <View style={styles.mealTimes}>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Prep Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> {this.state.prepTime}</ProximaText>
           </View>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Cook Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> {this.state.cookTime} </ProximaText>
           </View>
           <View style={styles.mealTime}>
             <ProximaTextBold style={styles.mealTimeText}> Total Time </ProximaTextBold>
             <ProximaText style={styles.mealTimeText}> {this.state.totalTime} </ProximaText>
           </View>
         </View>
         <ProximaTextBold style={styles.header}> Ingredients </ProximaTextBold>
          {ingredientsList}

        <TouchableOpacity onPress={() => navigate('AddtoMP')} style={styles.button} >
           <ProximaText style={styles.buttonText}> Add to Meal Plan </ProximaText>
         </TouchableOpacity>

         <ProximaTextBold style={styles.header}> Instructions </ProximaTextBold>
          {instructionsList}
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
    flexDirection: 'column',
    marginTop:5,
    marginBottom:5,
    width: Dimensions.get('window').width/3,
  },
  mealTimeText: {
    // fontSize:17,
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
