import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';


export default class MacroScreen extends React.Component {
  static navigationOptions = {
    title: 'Macros',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.articleb}> What are nutrition macros? </ProximaText>
				<ProximaText style={styles.articley}> Describe your Daily Activity </ProximaText>
				<ProximaText style={styles.articleb}> Exercise Output </ProximaText>
				<ProximaText style={styles.articley}> Goals </ProximaText>
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
