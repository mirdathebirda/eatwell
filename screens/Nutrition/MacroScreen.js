import React from 'react';
import { Dimensions, StyleSheet, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';
import { Button, CheckBox } from 'react-native-elements';


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
      <View style={styles.container}>
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
  					<View style={styles.exerciseOutput}>
  						<ProximaText style={styles.exerciseOutputTitle}> Days per week exercising </ProximaText>
  						<TextInput style={styles.textInput}
  						keyboardType = 'numeric'
  						underlineColorAndroid='transparent'
  						/>
  					</View>
  					<View style={styles.exerciseOutput}>
  						<ProximaText style={styles.exerciseOutputTitle}> Minutes per day exercising</ProximaText>
  						<TextInput style={styles.textInput}
  						keyboardType = 'numeric'
  						underlineColorAndroid='transparent'
  						/>
  					</View>
  				<ProximaText style={styles.articley}> Goals </ProximaText>
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

          <TouchableOpacity style={styles.button}>
            <ProximaText style={styles.buttonText}>CALCULATE</ProximaText>
          </TouchableOpacity>

  				<View style={styles.calculations}>
  					<ProximaText style={styles.calcField}></ProximaText>
  					<ProximaText style={styles.calcField}></ProximaText>
  					<ProximaText style={styles.calcField}></ProximaText>
  					<ProximaText style={styles.calcField}></ProximaText>
  					<ProximaText style={styles.calcField}></ProximaText>
  				</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.lemon,
    borderRadius: 5,
    height: 40,
    marginTop:10,
    paddingTop:12,
    paddingBottom:5,
    width: Dimensions.get('window').width,
  },
  buttonText: {
    color: Colors.navy,
    textAlign:'center',
  },
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
	exerciseOutput: {
		flexDirection:'row',
		marginTop:5,
		marginBottom:5,
	},
	exerciseOutputTitle: {
		flex:3,
	},
	textInput: {
		borderColor:'#000000',
		borderWidth:0.8,
		flex:1,
	},
	calculations: {
		flexDirection:'row',
		marginBottom:15,
	},
	calcField: {
		borderColor:'#000000',
		borderWidth:0.8,
		flex:1,
		marginTop:15,
		marginLeft:5,
		marginRight:5,
		marginBottom:15,
		height:30,
	},
});
