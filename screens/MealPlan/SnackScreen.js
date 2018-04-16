import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText,ProximaTextBold } from '../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';
import { SearchBar } from 'react-native-elements'


export default class Snack extends React.Component {
  static navigationOptions = {
    title: 'Snacks',
  };

	render() {
    const { navigate } = this.props.navigation; //used to link to other pages

		return (
      <View style={styles.container}>
  			<ScrollView style={styles.container}>
          <SearchBar lightTheme placeholder='Type Here...' />
          <View style = {styles.mealplanBar}>
            <ProximaText style = {styles.header}> This Week's Meal Plan </ProximaText>
            <View style={styles.pcircles} >
              <View style={styles.pcircle} >
                <PercentageCircle borderWidth={5} radius={25} percent={75} color={Colors.navy}></PercentageCircle>
                <ProximaText> Carbs </ProximaText>
              </View>
              <View style={styles.pcircle} >
                <PercentageCircle borderWidth={5} radius={25} percent={54} color={Colors.navy}></PercentageCircle>
                <ProximaText> Protein </ProximaText>
              </View>
              <View style={styles.pcircle} >
                <PercentageCircle borderWidth={5} radius={25} percent={92} color={Colors.navy}></PercentageCircle>
                <ProximaText> Fat </ProximaText>
              </View>
              <View style={styles.pcircle} >
                <PercentageCircle borderWidth={5} radius={25} percent={33} color={Colors.navy}></PercentageCircle>
                <ProximaText> Fiber </ProximaText>
              </View>
              <View style={styles.pcircle} >
                <PercentageCircle borderWidth={5} radius={25} percent={61} color={Colors.navy}></PercentageCircle>
                <ProximaText> Iron </ProximaText>
              </View>
            </View>
          </View>
          <View style={styles.categories}>
  					<TouchableOpacity onPress={() => navigate('Granola')} style={styles.item}>
  						<Image style={styles.image} source={require('../../assets/images/recipes/granola.png')} />
  						<ProximaText> Homemade Granola </ProximaText>
  					</TouchableOpacity>
  					<TouchableOpacity onPress={() => navigate('Granola')} style={styles.item}>
  						<Image style={styles.image} source={require('../../assets/images/recipes/granola.png')} />
  						<ProximaText> Homemade Granola </ProximaText>
  					</TouchableOpacity>
  					<TouchableOpacity onPress={() => navigate('Granola')} style={styles.item}>
  						<Image style={styles.image} source={require('../../assets/images/recipes/granola.png')} />
  						<ProximaText> Homemade Granola </ProximaText>
  					</TouchableOpacity>
  				</View>
  			</ScrollView>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
	header: {
		fontSize:17,
		marginTop:10,
		marginBottom:10,
		textAlign: 'left',
	},
	mealplanBar: {
		alignItems:'center',
		backgroundColor: Colors.lemon,
		flex:1,
		flexDirection:'column',
		marginTop:10,
		marginBottom:5,
		paddingTop:5,
		paddingBottom: 5,
		paddingLeft:5,
		paddingRight: 5,
	},
	pcircles: {
		flexDirection: 'row',
		marginTop:5,
		marginBottom:5,
	},
	pcircle: {
		flexDirection:'column',
		marginLeft:10,
		marginRight:10,
	},
	mealPlanMeals: {

	},
	meals: {
		flexDirection:'column',
	},
  categories: {
    flexDirection: 'column',
  },
  item: {
    borderColor:'#000000',
    borderWidth:0.8,
    marginTop: 10,
    marginRight:5,
    marginLeft:5,
    marginBottom:5,
    paddingBottom:5,
  },
  image: {
    height: 165,
    marginBottom:5,
  },
});
