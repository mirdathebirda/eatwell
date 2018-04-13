import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText } from '../../../../components/StyledText';



export default class CommonSubstitutions extends React.Component {
  static navigationOptions = {
    title: 'Correct Portion Sizes',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.header}>8 eating habits you should cut right now</ProximaText>
				<ProximaText>No one eats perfectly all the time – even dietitians! But when bad habits become common practice, you can end up with weight gain, high cholesterol, high blood pressure and a host of other potential health problems. So which lousy habits are getting folks into trouble? Here are the top 10 faux pas on our hit list, and how to avoid them. How many are part of your regular routine?</ProximaText>
				<ProximaText> 1: Poor Meal Planning </ProximaText>
				<ProximaText> According to our readers, “time” is one of the biggest barriers to healthy eating, but last-minute decisions often lead to fast-food drive thrus and pizza delivery. Taking a few minutes to plan out weekly meals before shopping for the week will save you money, calories,  and time in the long run.
				</ProximaText>

				<ProximaText> 2: Too Many Meals Away From Home </ProximaText>
				<ProximaText> Restaurants and take-out will always mean super-sized portions, along with more calories and sodium. Make the effort to prepare meals at home most nights of the week and use our tips when you do venture out.</ProximaText>

				<ProximaText> 3: Too Many Processed Foods</ProximaText>
				<ProximaText> Salty and fatty convenience foods that have been stripped of nutrients are everywhere you turn. Opt for mostly fresh and whole foods and read labels to help make the smartest choices when you do go for more highly processed goods.</ProximaText>

				<ProximaText> 4: Too Much Added Sugar</ProximaText>
				<ProximaText> Aside from the candies, cookies and soda that Americans already eat too much of, sugar is lurking in places you might not expect, like whole grain cereals, salad dressings, condiments and breads. Take inventory of the total sugar in your diet and find ways to cut back on those empty calories.</ProximaText>

				<ProximaText> 5. Mindless Eating</ProximaText>
				<ProximaText> Instead of just eating when hungry, many of us grab food when we’re bored, tired, stressed, happy, sad – you name it! Check out our tips for eating smart and for the right reasons.</ProximaText>

				<ProximaText> 6. Not Eating Together</ProximaText>
				<ProximaText> Along the same lines as eating mindlessly comes eating while distracted, over-scheduled and in multiple shifts. Turn off the TV (and yes, even the computer and cell phone) at meals and make time to eat as a family as much as possible.</ProximaText>

				<ProximaText> 7: Eating on the Run</ProximaText>
				<ProximaText> Leaving the house for a busy day without packed snacks or meals sets the stage for diet disaster. You’ll resort to meals that are too processed, too heavy, and too much on your waistline.</ProximaText>

				<ProximaText> 8: Giant Portion Sizes</ProximaText>
				<ProximaText> You think you can eyeball portions but have you ever really measured out your morning cereal, spoonfuls of peanut butter or olive oil for cooking? Overdoing portions (even with healthy foods) can cause a calorie overload. Just do it a few times to give yourself some perspective. </ProximaText>
      </ScrollView>
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
