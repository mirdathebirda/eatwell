import React from 'react';
import { Button, StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../constants/Colors';
import { ProximaText } from '../../../components/StyledText';



export default class FryEgg extends React.Component {
  constructor(props){
    super(props);

    this.state = {
       completed: false,
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
  				<ProximaText> FryEgg </ProximaText>
					<ProximaText>
 						Written Instructions
						1. Heat 2 tbsp of butter in a skillet over a medium-high heat.
						2. Break and egg into the pan.
						3. Cook until egg white is cooked through and yolk is cooked through to your liking (it can be runny or completely firm)
					</ProximaText>
					<Button title = "I've got it"/>
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
