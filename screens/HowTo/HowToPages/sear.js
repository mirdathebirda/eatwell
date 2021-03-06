import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../components/StyledText';



export default class Sear extends React.Component {
  static navigationOptions = {
    title: 'Sear',
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
          <Image style={{ width: Dimensions.get('window').width, height: 180, marginBottom: 15}} source={{uri: 'https://cdn.anovaculinary.com/wp-content/uploads/2017/01/Anova-Steak-Guide-Sous-Vide-Photos10-copy-flip-sear.jpg'}} />
          <ProximaTextBold style={styles.header}> Ingridients </ProximaTextBold>
          <ProximaText style={styles.paragraph}> 1 tablespoon vegetable oil </ProximaText>
          <ProximaText style={styles.paragraph}> Coarse salt and cracked (butcher-grind) pepper </ProximaText>
          <ProximaText style={styles.paragraph}> 1 boneless rib-eye or New York strip (shell) steak, 1 1/2 to 2 pounds and 2 1/2 inches thick, room temperature </ProximaText>
          <ProximaText style={styles.paragraph}> Steak Butter </ProximaText>

          <ProximaTextBold style={styles.header}> Instructions </ProximaTextBold>
          <ProximaText style={styles.paragraph}>
            1. Preheat oven to 400. Heat oil in a large cast-iron or other ovenproof skillet (not a nonstick) over medium-high until it begins to smoke. Pat steak dry with paper towels. Season each side with 1 teaspoon coarse salt and 1 teaspoon cracked pepper.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
            2. Cook steak in skillet over medium-high heat until a dark crust has formed, 5 to 7 minutes per side (reduce heat if meat is browning too quickly). Holding steak with tongs, quickly brown all edges, turning as necessary; lay steak flat in skillet.
          </ProximaText>
          <ProximaText style={styles.paragraph}>
            3. Transfer skillet to oven. Roast until an instant-read thermometer inserted in the thickest part of steak registers desired doneness, 5 to 15 minutes. Transfer to a plate; spread with 1 tablespoon Steak Butter. Cover loosely with aluminum foil, and let rest 5 to 10 minutes (temperature will then rise another 5 to 10 degrees). Slice across the grain; serve with remaining Steak Butter. Cover and refrigerate any leftovers, up to 2 days.
          </ProximaText>

          <ProximaTextBold style={styles.header}> Cook's Notes </ProximaTextBold>
          <ProximaText style={styles.paragraph}>
            A cast-iron pan holds the heat and distributes it evenly, so it browns well rather than scorching the food in some spots and leaving it pale in others.
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
