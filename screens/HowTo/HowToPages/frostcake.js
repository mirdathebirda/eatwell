import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';



export default class FrostCake extends React.Component {
  static navigationOptions = {
    title: 'Dice',
  };

  constructor(props){
    super(props);

    this.state = {
      buttonText: "I've got this!",
      completed: false,
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={{uri: 'http://img.food.com/img/upload/package/holiday/H2_Holidays_Frost_Cake_Crumb_Coat_6.jpg'}} />

          <ProximaTextBold style={styles.header}> What You Need </ProximaTextBold>
          <ProximaText style={styles.paragraph}> cake layers </ProximaText>
          <ProximaText style={styles.paragraph}> cake stand </ProximaText>
          <ProximaText style={styles.paragraph}> parchment paper </ProximaText>
          <ProximaText style={styles.paragraph}> frosting </ProximaText>
          <ProximaText style={styles.paragraph}> offset spatula </ProximaText>

          <ProximaTextBold style={styles.header}> Instructions </ProximaTextBold>

          <ProximaTextBold style={styles.subheader}> 1. Put a dab of frosting on the cake stand </ProximaTextBold>
          <ProximaText style={styles.paragraph}>  Dab a couple tablespoons of frosting on the stand before putting down the first cake layer. This will prevent the cake from sliding. </ProximaText>
          <ProximaText style={styles.paragraph}>
            Tip: If you don’t have a cake stand, turn a large, wide-bottomed mixing bowl upside down and place a plate on top of it. Frosting is easier when the cake is elevated and closer to eye level.
          </ProximaText>

          <ProximaTextBold style={styles.subheader}> 2. Place the first cake layer on the stand </ProximaTextBold>
          <ProximaText style={styles.paragraph}>
            Put the cake layer on top of the frosting right-side up so that the flat bottom sits on the stand.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
            Tip: Cool your cake layers upside down to help flatten them out, which will make your final cake much prettier and easier to assemble.
          </ProximaText>

          <ProximaTextBold style={styles.subheader}> Put a few strips of parchment paper under your cake </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Tuck overlapping pieces of parchment paper under the edge of the cake; this will help keep your stand clean as you frost. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Start with 1 to 1½ cups of frosting </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Using an offset spatula, put a big dollop of frosting—about 1 to 1½ cups—on top of the bottom layer. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Spread the frosting just beyond the edge of your cake </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Using the spatula, start in the middle of the cake and spread the frosting evenly over the top and just past the edge of the top surface. The overhang of frosting will help you frost the sides of the cake. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Place the second layer top-side down </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Place the second cake layer on top and press gently to make sure it sticks. Take a step back and check that it is level and centered. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Use 1 to 1½ cups of frosting for the second layer </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Put a big dollop of frosting on the center of the cake and, using the offset spatula, spread it to the edges. If you get crumbs in the frosting, simply scrape the dirty frosting off your spatula into a separate bowl. </ProximaText>
          <ProximaText style={styles.paragraph}> Tip: Be generous when you start to frost. You can always scrape some off if you end up with too much, but if you start with too little, you risk pulling crumbs from the cake into the frosting. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Frost the sides in sections </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Think of the cake in quarters and tackle one quarter at a time, turning the cake stand as you go. Aim to get the cake covered with frosting first. </ProximaText>


          <ProximaTextBold style={styles.subheader}> Smooth out the frosting or create any look you like </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Once the cake is frosted, you can go back and beautify. Smooth out the frosting or create swirls or other textures. Remove any excess frosting. Gently pull away the strips of parchment paper to reveal your beautifully frosted cake. </ProximaText>
  				<Button title='Ive got it!' color='#293753'/>
          {/*  TODO: change this stupid thing to touchable opacity bc buttons are a stupid piece of shit write add on press functionality and styles for the button */}
        </ScrollView>
      </View>
    );
  }

  // Function
  onPress = () => {
    this.setState({
      buttonText:'✓',
      completed: true,
    })
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
		marginBottom: 8,
	},
  subheader: {
    fontSize: 15,
  },
  paragraph: {
    fontSize: 15,
    marginTop:3,
    marginBottom:15,
  },
});
