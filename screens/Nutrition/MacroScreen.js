import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class MacroScreen extends React.Component {
  static navigationOptions = {
    title: 'Macros',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.articleb}> What are nutrition macros? </Text>
				<Text style={styles.articley}> Describe your Daily Activity </Text>
				<Text style={styles.articleb}> Exercise Output </Text>
				<Text style={styles.articley}> Goals </Text>
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
	articleb: {
		color: '#fff',
		backgroundColor: Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
	articley: {
		backgroundColor: Colors.lemon,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
});
