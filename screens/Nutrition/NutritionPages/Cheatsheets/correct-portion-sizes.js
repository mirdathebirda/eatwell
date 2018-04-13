import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText } from '../../../../components/StyledText';



export default class CorrectPortionSizes extends React.Component {
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
