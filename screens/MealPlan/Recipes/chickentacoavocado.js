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

  constructor(props){
    super(props);

    this.state = {
      carbs: 413,
      protein:13,
      fat:32,
      fiber:16,
      health:'♥ ♡  ♡ ',
      prepTime:'20 mins',
      cookTime:'2 mins',
      totalTime: '22 mins',
      ingredients: [
        {
          name: 'black beans',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'canned corn',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'green chiles',
          measurement: 'can (oz)',
          quantity: 4,
        },
        {
          name: 'shredded rotisserie chicken',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'shredded cheaddar',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'Taco Seasoning',
          measurement: 'package',
          quantity: 1,
        },
        {
          name: 'fresh cilantro',
          measurement: 'tbsp',
          quantity: 3,
        },
        {
          name: 'ripe avocados',
          measurement: '',
          quantity: 3,
        },
        {
          name: 'ranch dressing',
          measurement: 'cup',
          quantity: 1,
        },
        {
          name: 'lime juice',
          measurement: 'cup',
          quantity: (1/4).toFixed(2),
        },
        {
          name: 'kosher salt',
          measurement: 'tsp',
          quantity: 1,
        },
        {
          name: 'fresh ground black pepper',
          measurement: 'tsp',
          quantity: 1,
        },
      ],
      instructions: [
        '1. Heat broiler. In a large bowl, combine black beans, corn, 1/2 can green chiles, Tyson Grilled & Ready Pulled Chicken Breasts, cheddar, taco seasoning, and fresh cilantro. Stir until combined.',
        '2. Halve and separate three avocados, removing pit and hollowing out insides. Mash insides in a small bowl and set aside.',
        '3. Place avocado boats face up and fill each with 1/3 cup of filling. Sprinkle with more cheddar and more fresh cilantro, then broil until cheese is melty, about 2 minutes.',
        '4. Make the dressing: In a medium bowl, combine ranch, lime juice, remaining green chiles, cilantro, salt, and pepper and stir to combine. Fold in mashed avocados and mix until smooth.',
        '5. Remove avocado boats from oven and transfer to serving dish. Drizzle with dressing and garnish with more cilantro, if desired. Serve immediately.',
      ],
    }
  }

  render() {
    const { navigate } = this.props.navigation; //used to link to other pages

    var ingredientsList = [];
    for (let i = 0; i < this.state.ingredients.length; i++) {
      ingredientsList.push(
        <ProximaText key={i}>     {this.state.ingredients[i].quantity} {this.state.ingredients[i].measurement} {this.state.ingredients[i].name}
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
                <ProximaText style={styles.nutritionFactText}> {this.state.health} </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Health </ProximaText>
              </View>
            </View>
          </View>
           <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={require('../../../assets/images/recipes/chickentacoavocado.png')} />
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
