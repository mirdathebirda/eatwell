import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class MacroScreen extends React.Component {
  static navigationOptions = {
    title: 'Macros',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> What are nutrition macros? </Text>
				<Text> Describe your Daily Activity </Text>
				<Text> Exercise Output </Text>
				<Text> Goals </Text>
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
