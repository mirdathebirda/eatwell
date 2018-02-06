import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class CheatsheetScreen extends React.Component {
  static navigationOptions = {
    title: 'Cheatsheets',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
				<Text> Correct Portion Sizes</Text>
				<Text> Pick in produce season </Text>
				<Text> Is your meat done? </Text>
				<Text> How long does food last in the fridge? </Text>
				<Text> Common Substitutions </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
