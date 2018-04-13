import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class EightEatingHabits extends React.Component {
  static navigationOptions = {
    title: '8 eating habits you should cut right now',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
  				<ProximaText style={styles.paragraph}>      No one eats perfectly all the time – even dietitians! But when bad habits become common practice, you can end up with weight gain, high cholesterol, high blood pressure and a host of other potential health problems. So which lousy habits are getting folks into trouble? Here are the top 10 faux pas on our hit list, and how to avoid them. How many are part of your regular routine?</ProximaText>

  				<ProximaTextBold style={styles.header}> 1: Poor Meal Planning </ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      According to our readers, “time” is one of the biggest barriers to healthy eating, but last-minute decisions often lead to fast-food drive thrus and pizza delivery. Taking a few minutes to plan out weekly meals before shopping for the week will save you money, calories,  and time in the long run.
  				</ProximaText>

  				<ProximaTextBold style={styles.header}> 2: Too Many Meals Away From Home </ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Restaurants and take-out will always mean super-sized portions, along with more calories and sodium. Make the effort to prepare meals at home most nights of the week and use our tips when you do venture out.</ProximaText>

  				<ProximaTextBold style={styles.header}> 3: Too Many Processed Foods</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Salty and fatty convenience foods that have been stripped of nutrients are everywhere you turn. Opt for mostly fresh and whole foods and read labels to help make the smartest choices when you do go for more highly processed goods.</ProximaText>

  				<ProximaTextBold style={styles.header}> 4: Too Much Added Sugar</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Aside from the candies, cookies and soda that Americans already eat too much of, sugar is lurking in places you might not expect, like whole grain cereals, salad dressings, condiments and breads. Take inventory of the total sugar in your diet and find ways to cut back on those empty calories.</ProximaText>

  				<ProximaTextBold style={styles.header}> 5. Mindless Eating</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Instead of just eating when hungry, many of us grab food when we’re bored, tired, stressed, happy, sad – you name it! Check out our tips for eating smart and for the right reasons.</ProximaText>

  				<ProximaTextBold style={styles.header}> 6. Not Eating Together</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Along the same lines as eating mindlessly comes eating while distracted, over-scheduled and in multiple shifts. Turn off the TV (and yes, even the computer and cell phone) at meals and make time to eat as a family as much as possible.</ProximaText>

  				<ProximaTextBold style={styles.header}> 7: Eating on the Run</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Leaving the house for a busy day without packed snacks or meals sets the stage for diet disaster. You’ll resort to meals that are too processed, too heavy, and too much on your waistline.</ProximaText>

  				<ProximaTextBold style={styles.header}> 8: Giant Portion Sizes</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      You think you can eyeball portions but have you ever really measured out your morning cereal, spoonfuls of peanut butter or olive oil for cooking? Overdoing portions (even with healthy foods) can cause a calorie overload. Just do it a few times to give yourself some perspective. </ProximaText>
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
