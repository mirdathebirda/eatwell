import React from 'react';
import {
	Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { ProximaText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
		//usage: navigate.('routeName') - routeNames can be found in TabNavigators
		const { navigate } = this.props.navigation; //used to link to other pages

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
						<Button styles={styles.mainButtons} title="Go to Meal Plan Main Page!!!!" onPress={() => navigate('MealPlanMain')}/>
						<Button styles={styles.mainButtons} title="Go to Nutrition Main Page!!!!" onPress={() => navigate('NutritionMain')}/>
						<Button styles={styles.mainButtons} title="Go to HowTo Main Page!!!!" onPress={() => navigate('HowToMain')}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	mainButtons:{
		backgroundColor:'#293753',
		fontSize: 50,
		marginTop: 100,
		marginBottom: 100,
		marginLeft:10,
		marginRight:10,
	},
	container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
