import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText, ProximaTextBold } from '../../components/StyledText';
import Colors from '../../constants/Colors';
import { CheckBox } from 'react-native-elements';

export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

	constructor(){
   super();

   this.state = {
      ingredients: [
        {
          name: 'eggs',
          measurement: 'large',
          quantity: 12,
          checked: false,
          type:'produce',
          text:'',
        },
        {
          name: 'cherry tomatoes',
          measurement: 'cup',
          quantity: (3/4).toFixed(2),
          checked: false,
          type:'produce',
          text:'',
        },
        {
          name: 'onions',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
          checked: false,
          type:'produce',
          text:'',
        },
        {
          name: 'chicken breasts (boneless, skinless)',
          measurement: '',
          quantity: 4,
          checked: false,
          type:'meat',
          text:'',
        },
        {
          name: 'all purpose flour',
          measurement: 'cup',
          quantity: (3/4).toFixed(2),
          checked: false,
          type:'dry baking goods',
          text:'',
        },
        {
          name: 'Panko breadcrumbs',
          measurement: 'cup',
          quantity: 1,
          checked: false,
          type:'dry baking goods',
          text:'',
        },
        {
          name: 'buttermilk',
          measurement: 'cup',
          quantity: 1,
          checked: false,
          type:'dairy',
          text:'',
        },
        {
          name: 'Sweet Chili Sauce',
          measurement: 'cup',
          quantity: (1/2).toFixed(2),
          checked: false,
          type:'spices and sauces',
          text:'',
        },
      ],
   }
	}

  render() {
    var produce = [];
    var dairy = [];
    var spicesandsauces = [];
    var meat = []
    var drybakingoods = [];

    for (let i = 0; i < this.state.ingredients.length; i++) {
      this.state.ingredients[i].text = `${this.state.ingredients[i].quantity} ${this.state.ingredients[i].measurement} ${this.state.ingredients[i].name}`;

      if (this.state.ingredients[i].type == 'produce') {
        produce.push(
          <CheckBox key={i}
            title= {this.state.ingredients[i].text}
            checked= {this.state.ingredients[i].checked}
            checkedColor={Colors.navy}
            onPress={this.state.ingredients[i].checked = !this.state.ingredients[i].checked}
          />
        )
      }

      else if (this.state.ingredients[i].type == 'dairy') {
        dairy.push(
          <CheckBox key={i}
            title= {this.state.ingredients[i].text}
            checked={this.state.ingredients[i].checked}
            checkedColor={Colors.navy}
            onPress={this.state.ingredients[i].checked = !this.state.ingredients[i].checked}
          />
        )
      }
      else if (this.state.ingredients[i].type == 'spices and sauces') {
        spicesandsauces.push(
          <CheckBox key={i}
            title= {this.state.ingredients[i].text}
            checked={this.state.ingredients[i].checked}
            checkedColor={Colors.navy}
            onPress={this.state.ingredients[i].checked = !this.state.ingredients[i].checked}
          />
        )
      }
      else if (this.state.ingredients[i].type == 'meat') {
        meat.push(
          <CheckBox key={i}
            title= {this.state.ingredients[i].text}
            checked={this.state.ingredients[i].checked}
            checkedColor={Colors.navy}
            onPress={this.state.ingredients[i].checked = !this.state.ingredients[i].checked}
          />
        )
      }
      else if (this.state.ingredients[i].type == 'dry baking goods') {
        drybakingoods.push(
          <CheckBox key={i}
            title= {this.state.ingredients[i].text}
            checked={this.state.ingredients[i].checked}
            checkedColor={Colors.navy}
            onPress={this.state.ingredients[i].checked = !this.state.ingredients[i].checked}
          />
        )
      }
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
  				<ProximaTextBold style={styles.header}> Produce </ProximaTextBold>
          {produce}
          <ProximaTextBold style={styles.header}> Meat </ProximaTextBold>
          {meat}
          <ProximaTextBold style={styles.header}> Dairy </ProximaTextBold>
          {dairy}
          <ProximaTextBold style={styles.header}> Dry/Baking Goods </ProximaTextBold>
          {drybakingoods}
          <ProximaTextBold style={styles.header}> Spices and Sauces </ProximaTextBold>
          {spicesandsauces}
  			</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
		paddingLeft:15,
    backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 5,
		textDecorationLine: 'underline',
	},
	item:{
		paddingLeft:10,
		marginTop:5,
	},
});
