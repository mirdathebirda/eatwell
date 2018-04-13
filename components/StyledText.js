import React from 'react';
import { Text } from 'react-native';

export class ProximaText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'proxima-nova' }]} />;
  }
}

export class ProximaTextBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'proxima-nova-bold' }]} />;
  }
}

export class SunValleyText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'sun-valley' }]} />;
  }
}
