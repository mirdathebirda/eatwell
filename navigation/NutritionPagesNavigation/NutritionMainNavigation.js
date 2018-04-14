import { Notifications } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Colors from '../../constants/Colors';
import EatwellIcon from '../RootNavigation'

import NutritionMainScreen from '../../screens/Nutrition/NutritionMainScreen';
import ArticleMainScreen from '../../screens/Nutrition/ArticleScreen';
import EightEatingHabitsScreen from '../../screens/Nutrition/NutritionPages/Articles/8-eating-habits';
import CoffeeScreen from '../../screens/Nutrition/NutritionPages/Articles/coffee';
import ExerciseFatScreen from '../../screens/Nutrition/NutritionPages/Articles/exercise-fat';
import HealthierRecipesScreen from '../../screens/Nutrition/NutritionPages/Articles/healthier-recipes';
import SnackAMealScreen from '../../screens/Nutrition/NutritionPages/Articles/snack-a-meal';
import ImproveHealthScreen from '../../screens/Nutrition/NutritionPages/Articles/improve-health';

import CheatsheetMainScreen from '../../screens/Nutrition/CheatsheetScreen';
import CommonSubstitutionsScreen from '../../screens/Nutrition/NutritionPages/Cheatsheets/common-substitutions';
import CorrectPortionSizesScreen from '../../screens/Nutrition/NutritionPages/Cheatsheets/correct-portion-sizes';
import InSeasonProduceScreen from '../../screens/Nutrition/NutritionPages/Cheatsheets/in-season-produce';
import LongFridgeScreen from '../../screens/Nutrition/NutritionPages/Cheatsheets/long-fridge';
import MeatDoneScreen from '../../screens/Nutrition/NutritionPages/Cheatsheets/meat-done';


export default StackNavigator(
  {
    NutritionMain: {
      screen: NutritionMainScreen,
    },
    Article: {
      screen: ArticleMainScreen,
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
    Cheatsheet: {
      screen: CheatsheetMainScreen,
    },
    CommonSubstitutions: {
      screen: CommonSubstitutionsScreen,
    },
    CorrectPortionSizes: {
      screen: CorrectPortionSizesScreen,
    },
    InSeasonProduce: {
      screen: InSeasonProduceScreen,
    },
    LongFridge: {
      screen: LongFridgeScreen,
    },
    MeatDone: {
      screen: MeatDoneScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerVisible: true,
      headerTitleStyle: {
        fontWeight: 'normal',
				//  TODO: changes default font for headers to proxima nova, but its throwing me
				// https://docs.expo.io/versions/latest/guides/using-custom-fonts.html
				// fontFamily:'ProximaNova-Regular',
      },
      tabBarVisible: true,
    }),
  }
);
