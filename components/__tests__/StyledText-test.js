import 'react-native';
import React from 'react';
import { ProximaText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ProximaText>Snapshot test!</ProximaText>).toJSON();

  expect(tree).toMatchSnapshot();
});
