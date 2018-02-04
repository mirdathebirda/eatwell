import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class NutritionMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Nutrition Main',
  };

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={
								__DEV__
									? require('../assets/images/robot-dev.png')
									: require('../assets/images/robot-prod.png')
							}
							style={styles.welcomeImage}
						/>
					</View>

					<View style={styles.getStartedContainer}>
						{this._maybeRenderDevelopmentModeWarning()}

						<Text style={styles.getStartedText}>Get started by opening</Text>

						<View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
							<MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
						</View>

						<Text style={styles.getStartedText}>
							Change this text and your app will automatically reload.
						</Text>
					</View>

					<View style={styles.helpContainer}>
						<TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
							<Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
