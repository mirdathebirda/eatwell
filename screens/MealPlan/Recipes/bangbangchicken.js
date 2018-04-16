import React from 'react';
import { Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class BangBangChicken extends React.Component {
  static navigationOptions = {
    title: 'Bang Bang Chicken'
  };

  constructor(props){
    super(props);

    this.state = {
      carbs: 80,
      protein:7,
      fat:5,
      fiber:2,
      prepTime:'10 mins',
      cookTime:'25 mins',
      totalTime: '35 mins',
      ingredients: [
        {
          name: 'hot sauce (Sriracha)',
          measurement: 'tbsp',
          quantity: 2,
        },
        {
          name: 'mayonnaise',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'sweet chili sauce',
          measurement: 'cup',
          quantity: (1/4).toFixed(2),
        },
        {
          name: 'honey',
          measurement: 'tbsp',
          quantity: 2,
        },
        {
          name: 'chicken breasts (boneless, skinless)',
          measurement: '',
          quantity: 4,
        },
        {
          name: 'all purpose flour',
          measurement: 'cup',
          quantity: (3/4).toFixed(2),
        },
        {
          name: 'cornstarch',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'garlic powder',
          measurement: 'tbsp',
          quantity: 1,
        },
        {
          name: 'smoked paprika',
          measurement: 'tsp',
          quantity: 1,
        },
        {
          name: 'salt',
          measurement: 'tsp',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'pepper',
          measurement: 'tsp',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'egg',
          measurement: 'large',
          quantity: 1,
        },
        {
          name: 'buttermilk',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'Panko breadcrumbs',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'oil',
          measurement: '',
          quantity: '',
        },
      ],
      instructions: [
        '1. To prepare the sauce, mix all the ingredients for the sauce together in a bowl and refrigerate until ready for serving.',
        '2. In a medium bowl, mix flour, cornstarch, garlic powder, smoked paprika, salt and pepper. To the bowl add the hot sauce, egg, buttermilk and whisk until you have a smooth batter. Add the chicken pieces to the bowl, toss to make sure each piece is coated in the batter and set aside.',
        '3. In another bowl add about a cup of Panko breadcrumbs.',
        '4. Add about 1/2 inch of oil in a large skillet and heat the oil over medium-high heat.',
        '5. Coat each piece of chicken with breadcrumbs, add more breadcrumbs as needed, and fry on both sides for about 3 minutes or until chicken is cooked through. Place on paper napkins to soak up some of the oil. Repeat with all chicken pieces. Do not overcrowd the chicken, only add a few pieces of chicken to the skillet at a time, so the chicken turns out crispy.',
        '6. Drizzle chicken with sauce and serve.',
      ],
    }
  }


  render() {
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
                <ProximaText style={styles.nutritionFactText}> ♥ ♥ ♥ </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Health </ProximaText>
              </View>
            </View>
          </View>
           <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={require('../../../assets/images/recipes/bangbangchicken.png')} />
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

         <TouchableOpacity style={styles.button} >
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
