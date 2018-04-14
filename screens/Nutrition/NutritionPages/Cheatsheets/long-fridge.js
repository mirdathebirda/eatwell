import React from 'react';
import { Dimensions, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText, ProximaTextBold } from '../../../../components/StyledText';



export default class LongFridge extends React.Component {
  static navigationOptions = {
    title: 'How long does food last in the fridge?',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Image style={{ width: (Dimensions.get('window').width-25), height: 1800 }} source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/s--CB7YAOT3--/c_fit,fl_progressive,q_80,w_636/18g30n5q701lqjpg.jpg'}} />
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
