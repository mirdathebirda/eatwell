import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class CommonSubstitutions extends React.Component {
  static navigationOptions = {
    title: 'Common Baking Substitutions',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ProximaTextBold style={styles.header}>Baking Powder </ProximaTextBold>
          <ProximaText> 1 teaspoon baking powder = ¼ teaspoon baking soda + ½ teaspoon cream of tartar + ¼ teaspoon cornstarch </ProximaText>

          <ProximaTextBold style={styles.header}> Baking Soda </ProximaTextBold>
          <ProximaText> ½ teaspoon baking soda = 2 teaspoon baking powder </ProximaText>

          <ProximaTextBold style={styles.header}> Butter </ProximaTextBold>
          <ProximaText> 1 cup salted butter = 1 cup margarine </ProximaText>
          <ProximaText> 1 cup salted butter = 1 cup vegetable shortening + ½ teaspoon salt </ProximaText>
          <ProximaText> 1 cup salted butter = 7/8 cup lard + ½ teaspoon salt </ProximaText>
          <ProximaText> 1 cup unsalted butter = 1 cup salted butter = 1 cup vegetable shortening = 1 cup lard *minus* ½ teaspoon salt from recipe </ProximaText>

          <ProximaTextBold style={styles.header}> Buttermilk </ProximaTextBold>
          <ProximaText> 1 cup buttermilk = 1 tablespoon lemon juice or white vinegar + enough milk to make 1 cup. Let stand for 5 minutes </ProximaText>
          <ProximaText> 1 cup buttermilk = 1 cup plain yogurt </ProximaText>

          <ProximaTextBold style={styles.header}> Cake Flour </ProximaTextBold>
          <ProximaText> 1 cup cake flour =  ¾ cup sifted all-purpose flour + 2 tablespoons cornstarch </ProximaText>

          <ProximaTextBold style={styles.header}> Chocolate </ProximaTextBold>
          <ProximaText> 1 ounce unsweetened chocolate = 3 tablespoons natural unsweetened cocoa powder + 1 tablespoon unsalted butter, vegetable oil or shortening </ProximaText>

          <ProximaTextBold style={styles.header}> Cocoa Powder </ProximaTextBold>
          <ProximaText> 3 tablespoons natural unsweetened cocoa powder = 1 ounce unsweetened chocolate + reduce fat in recipe by 1 tablespoon </ProximaText>
          <ProximaText> 3 tablespoons Dutch-process cocoa powder = 3 tablespoons natural unsweetened cocoa powder + ⅛ teaspoon baking soda </ProximaText>

          <ProximaTextBold style={styles.header}> Eggs </ProximaTextBold>
          <ProximaText> 1 egg = ¼ cup applesauce </ProximaText>
          <ProximaText> 1 egg = 1 tablespoons ground flaxseed + 3 tablespoons water </ProximaText>
          <ProximaText> 1 egg = ¼ cup silken tofu pureed </ProximaText>
          <ProximaText> 1 egg = 3 tablespoons mayonnaise </ProximaText>
          <ProximaText>1 egg = ½ banana mashed with ½ teaspoon baking powder </ProximaText>

          <ProximaTextBold style={styles.header}> Half-and-Half </ProximaTextBold>
          <ProximaText> 1 cup half-and-half = ½ cup whole milk + ½ cup heavy cream </ProximaText>

          <ProximaTextBold style={styles.header}> Milk </ProximaTextBold>
          <ProximaText> 1 cup whole milk = ½ cup evaporated milk + ½ cup water </ProximaText>
          <ProximaText> 1 cup whole milk = 1 cup skim milk + 2 tablespoons melted butter or margarine </ProximaText>

          <ProximaTextBold style={styles.header}> Pumpkin Pie Spice </ProximaTextBold>
          <ProximaText> 1 teaspoon pumpkin pie spice = ½ teaspoon ground cinnamon + ¼ teaspoon ground ginger + 1/8 teaspoon ground allspice + 1/8 teaspoon ground nutmeg </ProximaText>

          <ProximaTextBold style={styles.header}> Sour Cream </ProximaTextBold>
          <ProximaText> 1 cup sour cream = 1 cup plain yogurt </ProximaText>

          <ProximaTextBold style={styles.header}> Vanilla Beans </ProximaTextBold>
          <ProximaText> 1 vanilla bean = 2½ teaspoons vanilla extract </ProximaText>

          <ProximaTextBold style={styles.header}> Vegetable Oil </ProximaTextBold>
          <ProximaText> 1 cup vegetable oil = 1 cup applesauce = 1 cup fruit puree </ProximaText>

          <ProximaTextBold style={styles.header}> Vegetable Shortening </ProximaTextBold>
          <ProximaText> 1 cup vegetable shortening = 1 cup butter </ProximaText>
          <ProximaText> 1 cup vegetable shortening = 1 cup margarine </ProximaText>

          <ProximaTextBold style={styles.header}> Yeast </ProximaTextBold>
          <ProximaText> 1 envelope (¼-ounce) active dry yeast = 2¼ teaspoons active dry yeast </ProximaText>
          <ProximaText> 1 envelope (¼-ounce) active dry yeast = 2¼ teaspoons rapid-rise yeast </ProximaText>
          <ProximaText> 1 envelope (¼-ounce) active dry yeast = ⅓ of a 2-ounce cake yeast </ProximaText>
        </ScrollView>
      </View>
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
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
});
