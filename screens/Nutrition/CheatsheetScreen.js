import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';


export default class CheatsheetScreen extends React.Component {
  static navigationOptions = {
    title: 'Cheatsheets',
  };

  render() {
		//TODO: dix this so it doesn't only navigate to routes in TabNavigators only
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
  				<TouchableOpacity onPress={() => navigate('CorrectPortionSizes')}>
  	        <ProximaText style={styles.articleb}> Correct Portion Sizes </ProximaText>
  				</TouchableOpacity>
  				<TouchableOpacity onPress={() => navigate('InSeasonProduce')}>
  					<ProximaText style={styles.articley}> Pick in season produce </ProximaText>
  				</TouchableOpacity>
  				<TouchableOpacity onPress={() => navigate('MeatDone')}>
  					<ProximaText style={styles.articleb}> Is your meat done? </ProximaText>
  				</TouchableOpacity>
  				<TouchableOpacity onPress={() => navigate('LongFridge')}>
  					<ProximaText style={styles.articley}> How long does food list in the fridge? </ProximaText>
  				</TouchableOpacity>
  				<TouchableOpacity onPress={() => navigate('CommonSubstitutions')}>
  					<ProximaText style={styles.articleb}> Common Substitutions </ProximaText>
  				</TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
		paddingLeft: 10,
		paddingRight:10,
    backgroundColor: '#fff',
  },
	articleb: {
		color: Colors.lemon,
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
		color:  Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
});
