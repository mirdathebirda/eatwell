import React from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ProximaText } from '../../components/StyledText';
import Colors from '../../constants/Colors';
import { CheckBox } from 'react-native-elements';

export default class GroceryListScreen extends React.Component {
  static navigationOptions = {
    title: 'Grocery List',
  };

	constructor(){
   super();

   this.state = {
      checked: false,
   }
	}

  render() {
		const { checked } = this.state;

    return (
      <ScrollView style={styles.container}>
				<ProximaText style={styles.header}> Produce </ProximaText>
				<CheckBox
          title="4oz brocoli"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="2 beefsteak tomatoes"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

				<ProximaText style={styles.header}> Meat </ProximaText>
				<CheckBox
          title="1lb of chicken"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

				<ProximaText style={styles.header}> Dairy </ProximaText>
				<CheckBox
          title="1 cup buttermilk"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="1 large egg"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

				<ProximaText style={styles.header}>Dry/Baking Goods</ProximaText>
				<CheckBox
          title="1 cup Panko breadcrumbs"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="3/4 all-purpose flour"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title=" 1/2 cup cornstarch"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

				<ProximaText style={styles.header}>Spices and Sauces</ProximaText>
				<CheckBox
          title="1/2 cup mayonaise"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="1/4 cup sweet chili sauce"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
				<CheckBox
          title="1 tbsp hot sauce (Sriracha)"
          checked={this.state.checked}
					checkedColor={Colors.navy}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
		paddingLeft:15,
    backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 5,
		textDecorationLine: 'underline',
	},
	item:{
		paddingLeft:10,
		marginTop:5,
	},
});
