import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';



export default class Slice extends React.Component {
  static navigationOptions = {
    title: 'Slice',
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
          <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={{uri: 'https://www.seriouseats.com/images/2014/04/20140421-knife-skills-citrus-12.jpg'}} />

          <ProximaTextBold style={styles.header}> What it's used for: </ProximaTextBold>
          <ProximaText style={styles.paragraph}> Slicing large vegetables and meats, or rough-slicing herbs with a Western-style chef's knife. </ProximaText>

          <ProximaTextBold style={styles.header}> Instructions: </ProximaTextBold>
          <ProximaText style={styles.paragraph}>
            Create a flat, stable surface for your food to rest on by slicing it in half or slicing off a thin section of its face. Hold the food steady with your non-knife hand, curling your fingers into a claw and tucking your knuckles underneath.
          </ProximaText>

          <ProximaText style={styles.paragraph}>
            Hold the tip of the blade against the cutting board with the knife angled upwards, the flat side resting against your knuckles.
          </ProximaText>

          <ProximaText style={styles.paragraph}>
            With the tip of the blade in constant contact with the cutting board, pull the knife backwards slightly until the blade slices into the food.
          </ProximaText>

          <ProximaText style={styles.paragraph}>
            Continue by pressing downwards and forwards, using the full length of the blade to slice through your food.
          </ProximaText>

          <ProximaText style={styles.paragraph}>
            Repeat, using a circular motion and keeping the blade tip against the board at all times.
          </ProximaText>

          <TouchableOpacity style={styles.button} onPress={this.onPress} >
            <ProximaText style={styles.buttonText}> {this.state.buttonText} </ProximaText>
          </TouchableOpacity>

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
  button:{
    backgroundColor: Colors.navy,
    borderRadius: 5,
    height: 40,
    marginTop:10,
    marginBottom:30,
    paddingTop:12,
    paddingBottom:5,
    width: 100,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
  },
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
