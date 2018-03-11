import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ProximaText } from '../../components/StyledText';
import { SearchBar } from 'react-native-elements'

export default class HowToCompleteSkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Skills',
  };

  render() {
		return (
      <ScrollView style={styles.container}>
				<SearchBar lightTheme placeholder='Type Here...' />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
		paddingBottom:50,
    backgroundColor: '#fff',
  },
});
