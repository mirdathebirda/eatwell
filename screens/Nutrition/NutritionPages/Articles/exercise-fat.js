import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText } from '../../../../components/StyledText';


export default class ExerciseFat extends React.Component {
  static navigationOptions = {
    title: 'How exercise can make for healthier fat',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
  				<ProximaText style={styles.paragraph}>       Exercise could help to make your fat tissue healthier, which, hear me out, is a good thing.</ProximaText>

  				<ProximaText style={styles.paragraph}>       According to a timely new study, a single session of exercise may change the molecular workings of fat tissue in ways that, over time, should improve metabolic health.</ProximaText>

  				<ProximaText style={styles.paragraph}>       This finding has particular relevance during the holidays, when, despite our best intentions, so many of us add to our fat stores. Exercise might make these annual bacchanals less metabolically damaging than otherwise.</ProximaText>

  				<ProximaText style={styles.paragraph}>       Most of us probably think of our fat tissue as inert and undesirable. But our fat is, in fact, a busy and necessary tissue, producing and sending out multiple biochemical signals that affect biological operations throughout the body.</ProximaText>

  				<ProximaText style={styles.paragraph}>      Fat tissue’s most important responsibility, however, is to securely store fat, and we should hope that it performs this function well. Provocative recent research in both animals and people has found that, if a person’s or animal’s fat tissue is relatively leaky, allowing fatty acids to ooze into the bloodstream, those roving fat blobs can accumulate in other tissues, particularly the muscles and liver. Once there, they contribute to the development of insulin resistance, a serious metabolic condition that often leads to diabetes.</ProximaText>

  				<ProximaText style={styles.paragraph}>       In a study published earlier this year, for instance, scientists from the University of Michigan and elsewhere found that if overweight men and women had low levels of fatty acids in their bloodstream, they also were metabolically healthier than other overweight adults.</ProximaText>

  				<ProximaText style={styles.paragraph}>       Even more interesting, they generally also had healthy fat, the scientists found, with biopsies showing less inflammation and scarring than in the fat from other overweight men and women. (This fat was subcutaneous, meaning it came from just beneath the skin.)</ProximaText>
  				<ProximaText style={styles.paragraph}>      Presumably, the scientists speculated, this robust fat was leaking less than the frailer variety.</ProximaText>

  				<ProximaText style={styles.paragraph}>      But that study did not examine why some people had healthier fat than others and whether the condition of anyone’s fat tissue might be changed.</ProximaText>
  				<ProximaText style={styles.paragraph}>      So for the new study, which was published last month in the Journal of Applied Physiology, the same group of scientists began to consider exercise.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Exercise, of course, is well known to affect the amount of fat we store, since muscles use fatty acids as fuel. Exercise also is believed to prompt small amounts of white fat to transform into brown fat, a particularly desirable form of fat that burns a lot of calories.</ProximaText>
  				<ProximaText style={styles.paragraph}>       But it has not been clear whether exercise directly alters the health of white fat tissue.</ProximaText>
  				<ProximaText style={styles.paragraph}>      To find out, the researchers first gathered 20 men and women who were overweight but did not have insulin resistance. Eight of them exercised regularly. The others had been sedentary.</ProximaText>
  				<ProximaText style={styles.paragraph}>      The researchers tested their volunteers’ body compositions and took fat samples. Then they had each volunteer exercise on a treadmill or stationary bike for an hour at a moderately tiring pace.</ProximaText>
  				<ProximaText style={styles.paragraph}>      An hour later, the scientists repeated the fat biopsies.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Examining the various tissues microscopically afterward, the researchers found several tantalizing differences.</ProximaText>
  				<ProximaText style={styles.paragraph}>      In almost all of the volunteers, the fat tissue after exercise showed greater amounts of a protein that is known to contribute to the development of more blood vessels.</ProximaText>
  				<ProximaText style={styles.paragraph}>      This change could be important over time, says Jeffrey Horowitz, a professor of movement science at the University of Michigan School of Kinesiology who conducted the experiment with Douglas Van Pelt (now a postdoctoral researcher at the University of Kentucky) and others.</ProximaText>
  				<ProximaText style={styles.paragraph}>      “More blood vessels in tissue means greater blood flow,” he says, with augmented delivery of oxygen and nutrients and better overall tissue health.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Interestingly, the fat tissue from those volunteers who regularly exercised also showed a small but meaningful increase in genetic activity related to blood vessel proliferation, suggesting that their tissue was more primed than that from the sedentary volunteers to start creating additional blood flow.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Their fat tissue also showed a slight increase in the gene expression of a substance that helps to reduce inflammation.</ProximaText>
  				<ProximaText style={styles.paragraph}>      These alterations were not enormous, Dr. Horowitz says. They were subtle. But they occurred consistently and after a single session of exercise, he points out, and might, with continued exercise, be expected to improve fat health over time.</ProximaText>
  				<ProximaText style={styles.paragraph}>      This study was small, however, and very short-term and did not look at whether other amounts or types of exercise would have comparable effects within fat. It also did not measure whether exercise actually changed the amounts of fat in the bloodstream and, since the volunteers were overweight, cannot tell us whether the effects would be comparable in people whose weight was normal.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Perhaps most fundamentally, the study concentrated on how to make our fat’s health rise when most of us would prefer that its quantity decline.</ProximaText>
  				<ProximaText style={styles.paragraph}>      Dr. Horowitz understands. “There is no doubt that the best thing for metabolic health is to lose weight.”</ProximaText>
  				<ProximaText style={styles.paragraph}>      But at this time of year, he says, when fat gain is common, a brisk walk or jog might make this added fat healthier and more stable, and the broader effects on our bodies a little less concerning.

            
  				</ProximaText>
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
