import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import NutritionMainScreen from '../screens/Nutrition/NutritionMainScreen';
import ArticleScreen from '../screens/Nutrition/ArticleScreen';
import CheatsheetScreen from '../screens/Nutrition/CheatsheetScreen';
import MacroScreen from '../screens/Nutrition/MacroScreen';
import NutritionSettingsScreen from '../screens/Nutrition/NutritionSettingsScreen';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    NutritionMain: {
      screen: NutritionMainScreen,
    },
    Articles: {
      screen: ArticleScreen,
    },
		Cheatsheet: {
      screen: CheatsheetScreen,
    },
		Macros: {
      screen: MacroScreen,
    },
    NutritionSettings: {
      screen: NutritionSettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'NutritionMain':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Articles':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
					case 'Cheatsheet':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
					case 'Macros':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
          case 'NutritionSettings':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
