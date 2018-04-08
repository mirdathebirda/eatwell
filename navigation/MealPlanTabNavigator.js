import React from 'react';
import { Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import EatwellIcon from './RootNavigation'
import HomeScreen from '../screens/HomeScreen';
import MealPlanMainScreen from '../screens/MealPlan/MealPlanMainScreen';
import GroceryListScreen from '../screens/MealPlan/GroceryListScreen';
import ExploreRecipesScreen from '../screens/MealPlan/ExploreRecipesScreen';
import MealPlanSettingsScreen from '../screens/MealPlan/MealPlanSettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBar: ({ state }) => ({
          visible: false
        })
      }
    },
    MealPlanMain: {
      screen: MealPlanMainScreen,
    },
    GroceryList: {
      screen: GroceryListScreen,
    },
    ExploreRecipes: {
      screen: ExploreRecipesScreen,
    },
		MealPlanSettings: {
      screen: MealPlanSettingsScreen,
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
          case 'MealPlanMain':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'GroceryList':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
					case 'ExploreRecipes':
						iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
						break;
					case 'MealPlanSettings':
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
