import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import EatwellIcon from './RootNavigation'

import HomeScreen from '../screens/HomeScreen';
import HowToMainScreen from '../screens/HowTo/HowToMainScreen';
import HowToCompleteSkillsScreen from '../screens/HowTo/HowToCompleteSkillsScreen';
import HowToSettingsScreen from '../screens/HowTo/HowToSettingsScreen';

import HowToMainNavigator from './HowTonPagesNavigation/HowToMainNavigation';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    HowToMain: {
      screen: HowToMainNavigator,
    },
    HowToCompleted: {
      screen: HowToCompleteSkillsScreen,
    },
    HowToSettings: {
      screen: HowToSettingsScreen,
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
          case 'HowToMain':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'HowToCompleted':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
          case 'HowToSettings':
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
