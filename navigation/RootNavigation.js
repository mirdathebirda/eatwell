import { Notifications } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MealPlanNavigator from './MealPlanTabNavigator';
import NutritionNavigator from './NutritionTabNavigator';
import HowToTabNavigator from './HowToTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
		MealPlan: {
      screen: MealPlanNavigator,
    },
		Nutrition: {
      screen: NutritionNavigator,
    },
		HowTo: {
      screen: HowToTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      header: null,
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

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}

//for Eatwell Logo
export class EatwellIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/images/eatwell-logo.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
