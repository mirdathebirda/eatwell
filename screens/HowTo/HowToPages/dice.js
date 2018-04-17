import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';



export default class Dice extends React.Component {
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
          <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={{uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/17/0/FNM_010116-Cooking-School-Dice-04.jpg.rend.hgtvcom.616.462.suffix/1450382214160.jpeg'}} />
  				<ProximaText style={styles.paragraph}> 1. Prepare the vegetables: Rinse and dry the vegetables. Remove the stem ends as needed. </ProximaText>
          <ProximaText style={styles.paragraph}> 2. Peel: Peel the vegetables, if desired. </ProximaText>
          <ProximaText style={styles.paragraph}> 3. Cut into steaks: Cut the vegetables lengthwise into slices: 1/4-inch thick for small dice, 1/2-inch thick for medium dice, and 3/4-inch thick for large dice. </ProximaText>
          <ProximaText style={styles.paragraph}> 4. Cut into sticks: Stack the slices on top of each other and cut the slices lengthwise into sticks that are the same width as the slices. </ProximaText>
          <ProximaText style={styles.paragraph}> 5. Dice: Cut the sticks crosswise, again in the same width as the sticks, to produce dice.</ProximaText>
          <TouchableOpacity style={styles.button} onPress={this.onPress} >
            <ProximaText style={styles.buttonText}> {this.state.buttonText} </ProximaText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  // Function
  onPress = () => {
    if (this.state.completed == false) {
      this.setState({
        buttonText:'✓',
        completed: true,
      })
    }
    else {
      this.setState({
        buttonText:"I've got this!",
        completed: false,
      })
    }
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
    textAlign:'center',
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
