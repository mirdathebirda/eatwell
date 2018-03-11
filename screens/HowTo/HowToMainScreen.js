import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';

export default class HowToMainScreen extends React.Component {
  static navigationOptions = {
    title: 'How Tos',
  };

  render() {
		//TODO: dix this so it doesn't only navigate to routes in TabNavigators only
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <ScrollView style={styles.container}>
				<ProximaText style={styles.header}>Prep</ProximaText>
				<View style={styles.row}>
					<TouchableOpacity onPress={() => navigate('Dice')} style={styles.item}>
		        <Image style={styles.image} source={require('../../assets/images/howtos/dice.jpeg')} />
						<ProximaText> Dice </ProximaText>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('Slice')} style={styles.item}>
						<Image style={styles.image} source={require('../../assets/images/howtos/slice.jpg')} />
						<ProximaText> Slice </ProximaText>
					</TouchableOpacity>
				</View>
				<ProximaText style={styles.header}>Cook</ProximaText>
				<View style={styles.row}>
					<TouchableOpacity onPress={() => navigate('FryEgg')} style={styles.item}>
						<Image style={styles.image} source={require('../../assets/images/howtos/fryegg.jpg')} />
						<ProximaText> Fry an Egg </ProximaText>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('Sear')} style={styles.item}>
						<Image style={styles.image} source={require('../../assets/images/howtos/sear.jpg')} />
						<ProximaText> Sear a steak </ProximaText>
					</TouchableOpacity>
				</View>
				<ProximaText style={styles.header}>Bake</ProximaText>
				<View style={styles.row}>
					<TouchableOpacity onPress={() => navigate('SoftPeak')} style={styles.item}>
						<Image style={styles.image} source={require('../../assets/images/howtos/softpeak.jpg')} />
						<ProximaText> Get a soft peak </ProximaText>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('FrostCake')} style={styles.item}>
						<Image style={styles.image} source={require('../../assets/images/howtos/frostcake.jpg')} />
						<ProximaText> Frost a cake </ProximaText>
					</TouchableOpacity>
				</View>
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
	header: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
		marginLeft:5,
	},
	row: {
		flex:1,
		flexDirection: 'row',
		marginRight:5,
		marginLeft:5,
	},
	item: {
		borderColor:'#000000',
		borderWidth:0.8,
		marginRight:5,
		marginLeft:5,
		paddingBottom:5,
	},
	image: {
		width:165,
		height:165,
		marginBottom:5,
	}
});
