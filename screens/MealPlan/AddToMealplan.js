import React from 'react';
import { Image, Picker, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText,ProximaTextBold } from '../../components/StyledText';

import PercentageCircle from 'react-native-percentage-circle';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

export default class AddtoMP extends React.Component {
  static navigationOptions = {
    title: 'Add Meal to Meal Plan',
  };

  constructor(){
   super();

   this.state = {
      checked: false,
      date:"12-03-2017",
   }
	}

	render() {
    const { navigate } = this.props.navigation; //used to link to other pages

		return (
      <View style={styles.container}>
  			<ScrollView style={styles.container}>
          <ProximaTextBold style={styles.header}> What week do you want to add this too? </ProximaTextBold>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="Select Date"
            format="MM-DD-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: 0,
                top: 4,
                marginLeft: 5,
              },
              dateInput: {
                marginLeft: 5,
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          <View style = {styles.mealplanBar}>
  					<ProximaText> Updated Nutrition: </ProximaText>
  					<View style={styles.pcircles} >
  						<View style={styles.pcircle} >
  							<PercentageCircle borderWidth={5} radius={25} percent={75} color={Colors.navy}></PercentageCircle>
  							<ProximaText> Carbs </ProximaText>
  						</View>
  						<View style={styles.pcircle} >
  							<PercentageCircle borderWidth={5} radius={25} percent={54} color={Colors.navy}></PercentageCircle>
  							<ProximaText> Protein </ProximaText>
  						</View>
  						<View style={styles.pcircle} >
  							<PercentageCircle borderWidth={5} radius={25} percent={92} color={Colors.navy}></PercentageCircle>
  							<ProximaText> Fat </ProximaText>
  						</View>
  						<View style={styles.pcircle} >
  							<PercentageCircle borderWidth={5} radius={25} percent={33} color={Colors.navy}></PercentageCircle>
  							<ProximaText> Fiber </ProximaText>
  						</View>
  						<View style={styles.pcircle} >
  							<PercentageCircle borderWidth={5} radius={25} percent={61} color={Colors.navy}></PercentageCircle>
  							<ProximaText> Iron </ProximaText>
  						</View>
  					</View>
  				</View>

          <View style={styles.servings}>
            <ProximaText style={{marginLeft: 50, marginTop:20, width: 150}}> How many servings?</ProximaText>
            <Picker
              selectedValue={this.state.language}
              style={{ borderWidth:1, borderColor: '#000', height: 50, width: 100, marginRight: 150 }}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>
          </View>
          <ProximaText style={styles.paragraph}>
            Great! These ingredients will be added  to your grocery list (deselect any you don't want to add)
          </ProximaText>
          <CheckBox
            title="4oz brocoli"
            checked={this.state.checked}
  					checkedColor={Colors.navy}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="4oz brocoli"
            checked={this.state.checked}
  					checkedColor={Colors.navy}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="4oz brocoli"
            checked={this.state.checked}
  					checkedColor={Colors.navy}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <TouchableOpacity onPress={() => navigate('Main')} style={styles.button} >
           <ProximaText style={styles.buttonText}> Okay! </ProximaText>
         </TouchableOpacity>
  			</ScrollView>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.lemon,
    borderColor: Colors.navy,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderRadius: 5,
    height: 35,
    marginTop:10,
    marginBottom: 5,
    marginRight: 5,
    paddingTop:10,
    width: 100,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: Colors.navy,
    textAlign:'center',
  },
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
	mealplanBar: {
		alignItems:'center',
		backgroundColor: Colors.lemon,
		flex:1,
		flexDirection:'column',
		marginTop:10,
		marginBottom:5,
		paddingTop:5,
		paddingBottom: 5,
		paddingLeft:5,
		paddingRight: 5,
	},
  header: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 5,
    marginLeft: 5,
	},
  paragraph: {
    fontSize: 15,
    marginTop:5,
    marginBottom:5,
    marginLeft: 5,
  },
	pcircles: {
		flexDirection: 'row',
		marginTop:5,
		marginBottom:5,
	},
	pcircle: {
		flexDirection:'column',
		marginLeft:10,
		marginRight:10,
	},
	categories: {
		flexDirection: 'column',
	},
	item: {
		borderColor:'#000000',
		borderWidth:0.8,
		marginTop: 10,
		marginRight:5,
		marginLeft:5,
		marginBottom:5,
		paddingBottom:5,
	},
	image: {
		height: 165,
		marginBottom:5,
	},
  servings: {
    flexDirection:'row',
  }
});
