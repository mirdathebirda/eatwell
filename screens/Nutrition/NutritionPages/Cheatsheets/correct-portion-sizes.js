import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText } from '../../../../components/StyledText';



export default class CorrectPortionSizes extends React.Component {
  static navigationOptions = {
    title: 'Correct Portion Sizes',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Image style={{ width:null, height: 500 }} source={{uri: 'https://www.healthyeating.org/Portals/0/Gallery/Album/Healthy%20Eating/portion%20size%20hand.JPG'}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingTop: 5,
		paddingLeft: 5,
		paddingRight:5,
		backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
});
