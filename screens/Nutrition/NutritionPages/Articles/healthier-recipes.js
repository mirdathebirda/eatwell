import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class HealthierRecipes extends React.Component {
  static navigationOptions = {
    title: '10 Ways to Make Recipes Healthier',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ProximaTextBold style={styles.header}>1. Use Smart Fats </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/Olive_Oil.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Not all fat is bad. Opt for unsaturated (e.g., olive oil) over saturated fats such as butter. But still use them in moderation because all fats are loaded with calories.</ProximaText>

          <ProximaTextBold style={styles.header}>2. Go Unrefined</ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/quinoa.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Pick whole grains over refined grains. Whole grains like brown rice and bulgur have their bran intact and thus have more fiber, B vitamins, magnesium, zinc and other nutrients.</ProximaText>

          <ProximaTextBold style={styles.header}>3. Eat more fruits and vegetables </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/imagecache/standard/color_wheel_310.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Most people don’t get enough! Aim for 4 to 13 servings of fruits and vegetables a day. Pick produce in a variety of colors to get a range of antioxidants and vitamins. A serving size is 1/2 to 1 cup depending on the fruit or vegetable.</ProximaText>

          <ProximaTextBold style={styles.header}>4. It's not all about meat! </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/Garlic-Roasted-Pork_0.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Meat is a great source of protein but it’s also a big source of saturated fat in many people’s diets. So eat small amounts of lean meat, fish and poultry. Fill up the rest of your plate with healthy vegetables and whole grains.</ProximaText>

          <ProximaTextBold style={styles.header}>5. Choose Low-Fat Dairy </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/parfait_0.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Dairy products like milk, sour cream and yogurt are a good source of calcium. Replacing whole-milk dairy products with low-fat or nonfat is an easy way to cut saturated fat in your diet.</ProximaText>

          <ProximaTextBold style={styles.header}>6. Keep portions reasonable </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/imagecache/standard/5418salmon_steak225.jpg'}}
          />
  				<ProximaText>Even though we would all like a magic bullet for weight control, it really boils down to calories. One of the easiest ways to manage calorie intake is by eating healthy portions. </ProximaText>

          <ProximaTextBold style={styles.header}>7. Use Sweeteners Judiciously </ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/sugar.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Sugars of any kind, whether corn syrup, white sugar, brown sugar, honey or maple syrup, add significant calories without any nutritive value.</ProximaText>

          <ProximaTextBold style={styles.header}>8. Keep an Eye on Sodium</ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/salt_0.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Whether you have high blood pressure or not, it’s wise to watch your sodium intake. The USDA’s dietary guidelines for Americans recommend consuming less than 2,300 mg (about 1 teaspoon salt) daily.</ProximaText>

          <ProximaTextBold style={styles.header}>9. Go For the Flavor</ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/citrus_0.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Enhance food with bold flavors from healthy ingredients like fresh herbs, spices and citrus. When your food has great flavor, there’s no reason to feel deprived.</ProximaText>

          <ProximaTextBold style={styles.header}>10. Be Mindful and Enjoy</ProximaTextBold>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://www.eatingwell.com/sites/default/files/Healthy_Lunch.jpg'}}
          />
  				<ProximaText style={styles.paragraph}>      Make conscious food decisions rather than grabbing for what is most convenient. Make sure it is something delicious and savor it. When you enjoy what you eat, you feel satisfied.</ProximaText>
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
		marginTop: 10,
		marginBottom: 5,
	},
  paragraph: {
    fontSize: 15,
    marginTop:3,
    marginBottom:3,
  },
});
