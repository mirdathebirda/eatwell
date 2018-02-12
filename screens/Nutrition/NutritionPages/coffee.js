import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class AllAboutCoffee extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> All about coffee </Text>
				<Text> Coffee is among the most consumed — and controversial — beverages in the world. While coffee should be treated with care and avoided altogether by those who metabolize it poorly, it also provides health benefits to many people. Read on to find out what they are – and how to drink coffee responsibly. </Text>
				<Text> Coffee is the second most popular drink in the world, trailing only water and, debatably, tea. </Text>
				<Text> Caffeine, a key component of coffee, is a controversial compound. With 90% of North American adults consuming caffeine daily, it is the world’s most consumed psychoactive drug – and coffee is the delivery method of choice. </Text>
				<Text> Perhaps that’s why, in the fitness world, we’ve traditionally viewed coffee with some suspicion. </Text>
				<Text>But is coffee really bad for us? Should we give up our beloved cuppa joe? If it’s bad, why does it feel so good?</Text>

				<Text style={styles.header}> Coffee’s origins </Text>
				<Text> The coffee plant originated in East Africa — according to legend, a goat herder tried coffee cherries after he noticed his goats acting much more energetic after nibbling on the coffee bushes. </Text>
				<Text> The earliest evidence of coffee drinking occurred in the 15th century in Yemen.  From Yemen, coffee quickly spread to Egypt and North Africa, and by the 16th century it was being enjoyed by the rest of the Middle East, Persia, and Turkey and soon thereafter Italy and the rest of Europe.</Text>
				<Text> Fast forward to today. Coffee is ubiquitous in our culture.  Everywhere you look, there’s a coffee shop on the corner. What effect might our cultural love of coffee have on our health? </Text>
				<Text> Short answer: Well, we’re not completely sure. </Text>

				<Text style={styles.header}> Coffee’s risks </Text>
				<Text> Research on coffee’s safety is mixed, for several reasons: </Text>
				<Text> Metabolism matters. People vary genetically in how well they can process caffeine and coffee.</Text>
				<Text> Coffee interacts with many hormones and neurotransmitters in the body, such as cortisol, acetylcholine, and insulin. These relationships are complex, and often depend on timing, amount, and people’s individual makeup.</Text>
				<Text>As a crop, coffee is less like corn or soy, and more like cacao or wine grapes: It’s typically grown and processed in smaller batches by smaller-scale farmers and producers. Variations in soil and climate, as well as later roasting and brewing technique, will change the taste and chemical makeup. It’s hard to standardize the exact chemical compounds in coffee from batch to batch. (By the way, JB likes to roast his own coffee. You can follow along with his process here.)</Text>
				<Text>So it’s hard to say definitively that coffee is “good” or “bad”; “healthy” or “unhealthy”. Let’s explore this in more depth.</Text>

				<Text style={styles.header}> Coffee’s benefits</Text>
				<Text>Caffeine & dehydration</Text>
				<Text>For years, fitness enthusiasts worried that coffee would dehydrate them. However, a recent review of 10 studies found that consuming up to 550 mg of caffeine per day (or about five 8-oz cups) does not cause fluid-electrolyte imbalances in athletes or fitness enthusiasts.</Text>
				<Text>beverages as part of a normal lifestyle does not lead to fluid losses exceeding the volume of fluid consumed (intake and output were roughly equal), nor is it associated with poor hydration status.</Text>
				<Text>Take-home: Don’t drink coffee as your only beverage, and drink enough water, and you’ll be fine.</Text>

				<Text>Coffee & performance</Text>
				<Text>Let’s be honest — that first morning coffee can transform us from beast to philosopher (or at least, slightly more awake and nicer beast). Coffee, and more specifically its caffeine content, provide many noted mental and physical performance benefits.</Text>
				<Text>Caffeine reduces our rate of perceived exertion, so it doesn’t feel like we’re working as hard as we actually are. People who regularly drink coffee perform better on tests of reaction time, verbal memory, and visuo-spatial reasoning.</Text>
				<Text>better on tests of cognitive function if they had regularly consumed coffee over the course of their lifetimes.</Text>
				<Text>Take-home: A little bit of coffee/caffeine before important tasks requiring alertness and energy can be a good thing.</Text>

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
