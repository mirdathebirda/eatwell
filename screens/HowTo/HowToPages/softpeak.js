import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';



export default class SoftPeak extends React.Component {
  static navigationOptions = {
    title: 'Beat Egg Whites to Soft Peaks',
  };

  constructor(props){
    super(props);

    this.state = {
       completed: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Image style={{ width: Dimensions.get('window').width, height: 300, marginBottom: 15}} source={{uri: 'https://bhg-backend-environment-prod-contentbucket-jvtb2yi8us17.s3.amazonaws.com/bhg/images/2017/8/1/101146617.jpg'}} />
  				<ProximaText style={styles.paragraph}> 1. Let egg whites stand at room temperature for 30 minutes so that they will beat up higher and faster than cold egg whites. </ProximaText>

          <Image style={{ width: Dimensions.get('window').width, height: 300, marginBottom: 15}} source={{uri: 'https://bhg-backend-environment-prod-contentbucket-jvtb2yi8us17.s3.amazonaws.com/bhg/images/2017/8/1/101146618.jpg'}} />
  				<ProximaText style={styles.paragraph}> 2. Crack eggs, and separate the yolks from the whites by using an egg separator. </ProximaText>
  				<ProximaText style={styles.paragraph}> 3. Make sure egg whites are in a clean glass or metal bowl and that there's no stray yolk or fat particles, which can prevent proper whipping. </ProximaText>

          <Image style={{ width: Dimensions.get('window').width, height: 300, marginBottom: 15}} source={{uri: 'https://bhg-backend-environment-prod-contentbucket-jvtb2yi8us17.s3.amazonaws.com/bhg/images/2017/8/1/101146621.jpg'}} />
  				<ProximaText style={styles.paragraph}> 4. To beat egg whites until they form soft peaks, use an electric mixer set on medium, or a rotary beater. Scrape the sides of the bowl often with a rubber spatula. </ProximaText>

          <Image style={{ width: Dimensions.get('window').width, height: 300, marginBottom: 15}} source={{uri: 'https://bhg-backend-environment-prod-contentbucket-jvtb2yi8us17.s3.amazonaws.com/bhg/images/2017/8/1/101146624.jpg'}} />
  				<ProximaText style={styles.paragraph}> 5. Continue to beat the eggs until the tips of egg whites curl when beaters are lifted. </ProximaText>

  				<Button title='Ive got it!' color='#293753'/>
          {/*  TODO: change this stupid thing to touchable opacity bc buttons are a stupid piece of shit write add on press functionality and styles for the button */}
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
  paragraph: {
    fontSize: 15,
    marginTop:3,
    marginBottom:3,
  },
});
