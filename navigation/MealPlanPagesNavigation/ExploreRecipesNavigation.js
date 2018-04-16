import { Notifications } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Colors from '../../constants/Colors';
import EatwellIcon from '../RootNavigation'

import MealPlanMainScreen from '../../screens/MealPlan/MealPlanMainScreen';
import EggMuffinScreen from '../../screens/MealPlan/Recipes/eggmuffin';
import ChickenTacoAvocadoScreen from '../../screens/MealPlan/Recipes/chickentacoavocado';
import GranolaScreen from '../../screens/MealPlan/Recipes/granola';
import BangBangChickenScreen from '../../screens/MealPlan/Recipes/bangbangchicken';

import AddToMealplanScreen from '../../screens/MealPlan/AddToMealplan';
import BreakfastScreen from '../../screens/MealPlan/BreakfastScreen';
import LunchDinnerScreen from '../../screens/MealPlan/LunchDinnerScreen';
import SnackScreen from '../../screens/MealPlan/SnackScreen';


export default StackNavigator(
  {
    Main: {
      screen: MealPlanMainScreen,
    },
    EggMuffin: {
      screen: EggMuffinScreen,
    },
		ChickenTacoAvocado: {
      screen: ChickenTacoAvocadoScreen,
    },
		Granola: {
      screen: GranolaScreen,
    },
    BangBangChicken: {
      screen: BangBangChickenScreen,
    },
    AddtoMP: {
      screen: AddToMealplanScreen,
    },
    Breakfast: {
      screen: BreakfastScreen,
    },
    LunchDinner: {
      screen: LunchDinnerScreen,
    },
    Snacks: {
      screen: SnackScreen,
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
      tabBarVisible: true,
    }),
  }
);
