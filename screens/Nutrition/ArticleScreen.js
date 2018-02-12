import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';


export default class ArticleScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.articleb}> 10 ways to make recipes healthier</Text>
				<Text style={styles.articley}> Call a snack a meal, and you're less apt to overeat </Text>
				<Text style={styles.articleb}> 8 eating habits you should cut right now </Text>
				<Text style={styles.articley}>How exercise can make for healthier fat</Text>
				<Text style={styles.articleb}> Tips for improving your health</Text>
				<Text style={styles.articley}>All about coffee</Text>
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
