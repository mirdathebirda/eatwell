import { Notifications } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Colors from '../../constants/Colors';
import EatwellIcon from '../RootNavigation'

import HowToMainScreen from '../../screens/HowTo/HowToMainScreen';
import DiceScreen from '../../screens/HowTo/HowToPages/dice';
import FrostCakeScreen from '../../screens/HowTo/HowToPages/frostcake';
import FryEggScreen from '../../screens/HowTo/HowToPages/fryegg';
import SearScreen from '../../screens/HowTo/HowToPages/sear';
import SliceScreen from '../../screens/HowTo/HowToPages/slice';
import SoftPeakScreen from '../../screens/HowTo/HowToPages/softpeak';

export default StackNavigator(
  {
    Main: {
      screen: HowToMainScreen,
    },
    Dice: {
      screen: DiceScreen,
    },
		FrostCake: {
      screen: FrostCakeScreen,
    },
		FryEgg: {
      screen: FryEggScreen,
    },
    Slice: {
      screen: SliceScreen,
    },
    SoftPeak: {
      screen: SoftPeakScreen,
    },
    Sear: {
      screen: SearScreen,
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
