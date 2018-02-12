import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class EightEatingHabits extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>8 eating habits you should cut right now</Text>
				<Text>No one eats perfectly all the time – even dietitians! But when bad habits become common practice, you can end up with weight gain, high cholesterol, high blood pressure and a host of other potential health problems. So which lousy habits are getting folks into trouble? Here are the top 10 faux pas on our hit list, and how to avoid them. How many are part of your regular routine?</Text>
				<Text> 1: Poor Meal Planning </Text>
				<Text> According to our readers, “time” is one of the biggest barriers to healthy eating, but last-minute decisions often lead to fast-food drive thrus and pizza delivery. Taking a few minutes to plan out weekly meals before shopping for the week will save you money, calories,  and time in the long run.
				</Text>

				<Text> 2: Too Many Meals Away From Home </Text>
				<Text> Restaurants and take-out will always mean super-sized portions, along with more calories and sodium. Make the effort to prepare meals at home most nights of the week and use our tips when you do venture out.</Text>

				<Text> 3: Too Many Processed Foods</Text>
				<Text> Salty and fatty convenience foods that have been stripped of nutrients are everywhere you turn. Opt for mostly fresh and whole foods and read labels to help make the smartest choices when you do go for more highly processed goods.</Text>

				<Text> 4: Too Much Added Sugar</Text>
				<Text> Aside from the candies, cookies and soda that Americans already eat too much of, sugar is lurking in places you might not expect, like whole grain cereals, salad dressings, condiments and breads. Take inventory of the total sugar in your diet and find ways to cut back on those empty calories.</Text>

				<Text> 5. Mindless Eating</Text>
				<Text> Instead of just eating when hungry, many of us grab food when we’re bored, tired, stressed, happy, sad – you name it! Check out our tips for eating smart and for the right reasons.</Text>

				<Text> 6. Not Eating Together</Text>
				<Text> Along the same lines as eating mindlessly comes eating while distracted, over-scheduled and in multiple shifts. Turn off the TV (and yes, even the computer and cell phone) at meals and make time to eat as a family as much as possible.</Text>

				<Text> 7: Eating on the Run</Text>
				<Text> Leaving the house for a busy day without packed snacks or meals sets the stage for diet disaster. You’ll resort to meals that are too processed, too heavy, and too much on your waistline.</Text>

				<Text> 8: Giant Portion Sizes</Text>
				<Text> You think you can eyeball portions but have you ever really measured out your morning cereal, spoonfuls of peanut butter or olive oil for cooking? Overdoing portions (even with healthy foods) can cause a calorie overload. Just do it a few times to give yourself some perspective. </Text>
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
