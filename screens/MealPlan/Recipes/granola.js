import React from 'react';
import { Alert, Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';


export default class Granola extends React.Component {
  static navigationOptions = {
    title: 'Homemade Granola'
  };

  constructor(props){
    super(props);

    this.state = {
      carbs: 368,
      protein:7,
      fat:20,
      fiber:43,
      health: '♥ ♥ ♥ ',
      prepTime:'10 mins',
      cookTime:'40 mins',
      totalTime: '50 mins',
      ingredients: [
        {
          name: 'old-fashioned oats',
          measurement: 'cups',
          quantity: 3,
        },
        {
          name: 'chopped nuts',
          measurement: 'cup',
          quantity: (1.5).toFixed(2),
        },
        {
          name: 'honey',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'vegetable oil',
          measurement: 'cup',
          quantity: (1/3).toFixed(2),
        },
        {
          name: 'egg whites',
          measurement: 'large',
          quantity: 2,
        },
        {
          name: 'light brown sugar',
          measurement: 'tbsp',
          quantity: 2,
        },
        {
          name: 'ground cinnamon',
          measurement: 'tsp',
          quantity: (1/2).toFixed(2),
        },
        {
          name: 'vanilla extract',
          measurement: 'tbp',
          quantity: 2,
        },
        {
          name: 'dried crandberries or raisins',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
        },
      ],
      instructions: [
        '1. Preheat the over to 325 degrees farenheit and line a baking sheet with parchment paper',
        '2. Spread the oats and nuts on the backing sheet, mixing them to combine, and then bake them for 10 minutes, stirring occasionally, until lightly browned. Transfer the toasted oats and nuts to a large bowl',
        '3. In a separate medium bowl, whisk together the honey, vegetable oil, egg whites, brown sugar, cinnamon and vanilla extract. Pour the mixture over the oats and nuts and stir until the mixture is combined',
        '4. Pour the mixture back onto the lined baking sheet, spreading it into an even layer, and bake it for 30 to 40 minutes, stirring every 10 minutes, until it is golden brown and mostly dry. Remove the granola from the overn, stir it one more time, then allow it to cool completely on the baking sheet.',
        'Once the granola has cooled, stir in the dried canberries and servie it immediately or transfer it to an airtight container and store it up to 2 weeks at room temperature',
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
                <ProximaText style={styles.nutritionFactText}> {this.state.health} </ProximaText>
                <ProximaText style={styles.nutritionFactText}> Health </ProximaText>
              </View>
            </View>
          </View>
           <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={require('../../../assets/images/recipes/granola.png')} />
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

          <TouchableOpacity onPress={() => { Alert.alert('This is already in your meal plan!'); }} style={styles.button} >
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
