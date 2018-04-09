import { Notifications } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Colors from '../../constants/Colors';
import EatwellIcon from './RootNavigation'

import NutritionMainScreen from '../../screens/Nutrition/NutritionMainScreen';
import EightEatingHabitsScreen from '../../screens/Nutrition/NutritionPages/8-eating-habits';
import CoffeeScreen from '../../screens/Nutrition/NutritionPages/coffee';
import ExerciseFatScreen from '../../screens/Nutrition/NutritionPages/exercise-fat';
import HealthierRecipesScreen from '../../screens/Nutrition/NutritionPages/healthier-recipes';
import SnackAMealScreen from '../../screens/Nutrition/NutritionPages/snack-a-meal';
import ImproveHealthScreen from '../../screens/Nutrition/NutritionPages/improve-health';

export default StackNavigator(
  {
    Main: {
      screen: NutritionMainScreen,
    },
    EightEatingHabits: {
      screen: EightEatingHabitsScreen,
    },
		Coffee: {
      screen: CoffeeScreen,
    },
		ExerciseFat: {
      screen: ExerciseFatScreen,
    },
    HealthierRecipes: {
      screen: HealthierRecipesScreen,
    },
    ImproveHealth: {
      screen: ImproveHealthScreen,
    },
    SnackAMeal: {
      screen: SnackAMealScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
				//  TODO: changes default font for headers to proxima nova, but its throwing me
				// https://docs.expo.io/versions/latest/guides/using-custom-fonts.html
				// fontFamily:'ProximaNova-Regular',
      },
      tabBarVisible: false,
    }),
  }
);
