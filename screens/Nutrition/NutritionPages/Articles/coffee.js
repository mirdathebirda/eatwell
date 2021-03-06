import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class AllAboutCoffee extends React.Component {
  static navigationOptions = {
    title: 'All About Coffee',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
  				<ProximaText style={styles.paragraph}>      Coffee is among the most consumed — and controversial — beverages in the world. While coffee should be treated with care and avoided altogether by those who metabolize it poorly, it also provides health benefits to many people. Read on to find out what they are – and how to drink coffee responsibly. </ProximaText>
  				<ProximaText style={styles.paragraph}>      Coffee is the second most popular drink in the world, trailing only water and, debatably, tea. </ProximaText>
  				<ProximaText style={styles.paragraph}>      Caffeine, a key component of coffee, is a controversial compound. With 90% of North American adults consuming caffeine daily, it is the world’s most consumed psychoactive drug – and coffee is the delivery method of choice. </ProximaText>
  				<ProximaText style={styles.paragraph}>      Perhaps that’s why, in the fitness world, we’ve traditionally viewed coffee with some suspicion. </ProximaText>
  				<ProximaText style={styles.paragraph}>      But is coffee really bad for us? Should we give up our beloved cuppa joe? If it’s bad, why does it feel so good?</ProximaText>

  				<ProximaTextBold style={styles.header}> Coffee’s origins </ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      The coffee plant originated in East Africa — according to legend, a goat herder tried coffee cherries after he noticed his goats acting much more energetic after nibbling on the coffee bushes. </ProximaText>
  				<ProximaText style={styles.paragraph}>      The earliest evidence of coffee drinking occurred in the 15th century in Yemen.  From Yemen, coffee quickly spread to Egypt and North Africa, and by the 16th century it was being enjoyed by the rest of the Middle East, Persia, and Turkey and soon thereafter Italy and the rest of Europe.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Fast forward to today. Coffee is ubiquitous in our culture.  Everywhere you look, there’s a coffee shop on the corner. What effect might our cultural love of coffee have on our health? </ProximaText>
  				<ProximaText style={styles.paragraph}>      Short answer: Well, we’re not completely sure. </ProximaText>

  				<ProximaTextBold style={styles.header}> Coffee’s risks </ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Research on coffee’s safety is mixed, for several reasons: </ProximaText>
  				<ProximaText style={styles.paragraph}>      Metabolism matters. People vary genetically in how well they can process caffeine and coffee.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Coffee interacts with many hormones and neurotransmitters in the body, such as cortisol, acetylcholine, and insulin. These relationships are complex, and often depend on timing, amount, and people’s individual makeup.</ProximaText>
  				<ProximaText style={styles.paragraph}>      As a crop, coffee is less like corn or soy, and more like cacao or wine grapes: It’s typically grown and processed in smaller batches by smaller-scale farmers and producers. Variations in soil and climate, as well as later roasting and brewing technique, will change the taste and chemical makeup. It’s hard to standardize the exact chemical compounds in coffee from batch to batch. (By the way, JB likes to roast his own coffee. You can follow along with his process here.)</ProximaText>
  				<ProximaText style={styles.paragraph}>      So it’s hard to say definitively that coffee is “good” or “bad”; “healthy” or “unhealthy”. Let’s explore this in more depth.</ProximaText>

  				<ProximaTextBold style={styles.header}> Coffee’s benefits</ProximaTextBold>
  				<ProximaText style={styles.paragraph}>      Caffeine & dehydration</ProximaText>
  				<ProximaText style={styles.paragraph}>      For years, fitness enthusiasts worried that coffee would dehydrate them. However, a recent review of 10 studies found that consuming up to 550 mg of caffeine per day (or about five 8-oz cups) does not cause fluid-electrolyte imbalances in athletes or fitness enthusiasts.</ProximaText>
  				<ProximaText style={styles.paragraph}>      beverages as part of a normal lifestyle does not lead to fluid losses exceeding the volume of fluid consumed (intake and output were roughly equal), nor is it associated with poor hydration status.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Take-home: Don’t drink coffee as your only beverage, and drink enough water, and you’ll be fine.</ProximaText>

  				<ProximaText style={styles.paragraph}>      Coffee & performance</ProximaText>
  				<ProximaText style={styles.paragraph}>      Let’s be honest — that first morning coffee can transform us from beast to philosopher (or at least, slightly more awake and nicer beast). Coffee, and more specifically its caffeine content, provide many noted mental and physical performance benefits.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Caffeine reduces our rate of perceived exertion, so it doesn’t feel like we’re working as hard as we actually are. People who regularly drink coffee perform better on tests of reaction time, verbal memory, and visuo-spatial reasoning.</ProximaText>
  				<ProximaText style={styles.paragraph}>      better on tests of cognitive function if they had regularly consumed coffee over the course of their lifetimes.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Take-home: A little bit of coffee/caffeine before important tasks requiring alertness and energy can be a good thing.</ProximaText>

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
