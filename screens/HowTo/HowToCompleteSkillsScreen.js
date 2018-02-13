import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';

export default class HowToCompleteSkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Skills',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
