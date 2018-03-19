import React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';
import { CheckBox } from 'react-native-elements';


export default class MacroScreen extends React.Component {
  static navigationOptions = {
    title: 'Macros',
  };

	constructor(){
	 super();

	 this.state = {
			checked: false,
	 }
	}

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.articleb}> What are nutrition macros? </ProximaText>
				<ProximaText style={styles.articley}> Describe your Daily Activity </ProximaText>
				<CheckBox
          title="Sedentary"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Light Activity"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Active"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Very Active"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<ProximaText style={styles.articleb}> Exercise Output </ProximaText>
					<ProximaText> Days per week exercising</ProximaText>
					<TextInput style={styles.textInput}
				  keyboardType = 'numeric'
				  // onChangeText = {(text)=> this.onChanged(text)}
				  // value = {this.state.myNumber}
					/>
					<ProximaText> Minutes per day exercising</ProximaText>
					<TextInput style={styles.textInput}
				  keyboardType = 'numeric'
				  // onChangeText = {(text)=> this.onChanged(text)}
				  // value = {this.state.myNumber}
					/>
				<ProximaText style={styles.articley}> Goals </ProximaText>
				<ProximaText style={styles.articley}> Describe your Daily Activity </ProximaText>
				<CheckBox
          title="Lose Weight"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Lose 10%"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Maintain"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="Gain Muscle"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
      </ScrollView>
    );
  }

	// onChanged(text) {
	//   // code to remove non-numeric characters from text
	//   this.setState({myNumber: text})
	// }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    paddingTop: 15,
		paddingLeft: 15,
		paddingRight:15,
    backgroundColor: '#fff',
  },
	articleb: {
		color: Colors.lemon,
		backgroundColor: Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
	articley: {
		backgroundColor: Colors.lemon,
		color:  Colors.navy,
		marginTop:5,
		marginBottom: 5,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 5,
		paddingRight: 5,
	},
	textInput: {

	},
});
