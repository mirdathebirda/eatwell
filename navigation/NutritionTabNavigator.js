import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import EatwellIcon from './RootNavigation'

import HomeScreen from '../screens/HomeScreen';
import NutritionMainScreen from '../screens/Nutrition/NutritionMainScreen';
import ArticleScreen from '../screens/Nutrition/ArticleScreen';
import CheatsheetScreen from '../screens/Nutrition/CheatsheetScreen';
import MacroScreen from '../screens/Nutrition/MacroScreen';
import NutritionSettingsScreen from '../screens/Nutrition/NutritionSettingsScreen';

import NutritionMainNavigator from './NutritionPagesNavigation/NutritionMainNavigation';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    NutritionMain: {
      screen: NutritionMainNavigator,
      navigationOptions: {
        header: null,
      }
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
            iconName = EatwellIcon;
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
    backTitle: null,
    headerLeft: null,
    left: null,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
