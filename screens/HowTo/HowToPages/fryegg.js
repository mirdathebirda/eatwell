import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';



export default class FryEgg extends React.Component {
  static navigationOptions = {
    title: 'Fry an Egg',
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
          <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={{uri: 'https://ak9.picdn.net/shutterstock/videos/2891269/thumb/3.jpg'}} />
  				<ProximaText style={styles.paragraph}> 1. Heat 2 tbsp of butter in a skillet over a medium-high heat. </ProximaText>
  				<ProximaText style={styles.paragraph}> 2. Break and egg into the pan. </ProximaText>
  				<ProximaText style={styles.paragraph}> 3. Cook until egg white is cooked through and yolk is cooked through to your liking (it can be runny or completely firm) </ProximaText>
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
