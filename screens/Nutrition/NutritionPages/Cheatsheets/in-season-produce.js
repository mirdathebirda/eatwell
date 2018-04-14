import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../../../constants/Colors';
import { ProximaText } from '../../../../components/StyledText';



export default class InSeasonProduce extends React.Component {
  static navigationOptions = {
    title: 'Pick In Season Produce',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.header}>What's in Season in New England</ProximaText>
				<ProximaText>
          Apples, July through October (cold storage until spring)
        </ProximaText>
        <ProximaText>
          Arugula, May through September
        </ProximaText>
        <ProximaText>
          Asparagus, May and June
        </ProximaText>
        <ProximaText>
          Basil, July through September
        </ProximaText>
        <ProximaText>
          Beets, June through December
        </ProximaText>
        <ProximaText>
          Blueberries, July and August
        </ProximaText>
        <ProximaText>
          Broccoli, June through November
        </ProximaText>
        <ProximaText>
          Broccoli raab, August through November
        </ProximaText>
        <ProximaText>
          Brussels sprouts, September through November
        </ProximaText>
          <ProximaText>
          Cabbage, June through October
        </ProximaText>
        <ProximaText>
          Cantaloupes, August and September
        </ProximaText>
        <ProximaText>
          Carrots, June through September (local harvest available from storage through March)
        </ProximaText>
        <ProximaText>
          Cauliflower, August through November
        </ProximaText>
        <ProximaText>
          Celeriac/celery root, September through November
        </ProximaText>
        <ProximaText>
          Celery, August through October
        </ProximaText>
        <ProximaText>
          Chard, May through November
        </ProximaText>
        <ProximaText>
          Cherries, July
        </ProximaText>
        <ProximaText>
          Chicories, September and October
        </ProximaText>
        <ProximaText>
          Corn, June through August
        </ProximaText>
        <ProximaText>
          Cranberries, October through December
        </ProximaText>
        <ProximaText>
          Cucumbers, July through October
        </ProximaText>
        <ProximaText>
          Currants, August
        </ProximaText>
        <ProximaText>
          Eggplant, July through October
        </ProximaText>
        <ProximaText>
          Escarole, September and October
        </ProximaText>
        <ProximaText>
          Fava beans, May and June
        </ProximaText>
        <ProximaText>
          Fennel, October and November
        </ProximaText>
        <ProximaText>
          Fiddleheads, April and May
        </ProximaText>
        <ProximaText>
          Garlic, July through October (stored year-round)
        </ProximaText>
        <ProximaText>
          Garlic scapes/green garlic, May and June
        </ProximaText>
        <ProximaText>
          Grapes, September and October
        </ProximaText>
        <ProximaText>
          Green beans, July through September
        </ProximaText>
        <ProximaText>
          Green onions/scallions, May through September
        </ProximaText>
        <ProximaText>
          Kale, June through November
        </ProximaText>
        <ProximaText>
          Herbs, April through September
        </ProximaText>
        <ProximaText>
          Kohlrabi, June and July, September and October
        </ProximaText>
        <ProximaText>
          Leeks, August through December
        </ProximaText>
        <ProximaText>
          Lettuce, May through October
        </ProximaText>
        <ProximaText>
          Melons, July through October
        </ProximaText>
        <ProximaText>
          Mint, spring and summer
        </ProximaText>
        <ProximaText>
          Morels, spring
        </ProximaText>
        <ProximaText>
          Mushrooms (cultivated), year-round
        </ProximaText>
        <ProximaText>
          Mushrooms (wild), spring through fall
        </ProximaText>
        <ProximaText>
          Nectarines, August and September
        </ProximaText>
        <ProximaText>
          Nettles, spring
        </ProximaText>
        <ProximaText>
          New Potatoes, May
        </ProximaText>
        <ProximaText>
          Onions, July through October (stored in winter)
        </ProximaText>
        <ProximaText>
          Oregano, June through October
        </ProximaText>
        <ProximaText>
          Parsley, May through November
        </ProximaText>
        <ProximaText>
          Parsnips, April and May and again October through December
        </ProximaText>
        <ProximaText>
          Peaches, July through September
        </ProximaText>
        <ProximaText>
          Pears, August through December
        </ProximaText>
        <ProximaText>
          Pea greens, April through June
        </ProximaText>
        <ProximaText>
          Peas and pea pods, July through October
        </ProximaText>
        <ProximaText>
          Peppers (sweet), July through October
        </ProximaText>
        <ProximaText>
          Plums & pluots, August and September
        </ProximaText>
        <ProximaText>
          Potatoes, July through December (available from storage year-round)
        </ProximaText>
        <ProximaText>
          Pumpkins, September through November
        </ProximaText>
        <ProximaText>
          Radicchio, September and October
        </ProximaText>
        <ProximaText>
          Radishes, May through September
        </ProximaText>
        <ProximaText>
          Raspberries, July through September
        </ProximaText>
        <ProximaText>
          Rhubarb, May through July
        </ProximaText>
        <ProximaText>
          Rutabagas, August through November
        </ProximaText>
        <ProximaText>
          Scallions/green onions, May through September
        </ProximaText>
        <ProximaText>
          Shelling beans, September through November
        </ProximaText>
        <ProximaText>
          Snap peas/snow peas/pea pods, June through September
        </ProximaText>
        <ProximaText>
          Spinach, May through September
        </ProximaText>
        <ProximaText>
          Squash (summer), July through September
        </ProximaText>
        <ProximaText>
          Squash (winter), August through December
        </ProximaText>
        <ProximaText>
          Stinging Nettles, spring
        </ProximaText>
        <ProximaText>
          Strawberries, June
        </ProximaText>
        <ProximaText>
          Thyme, May through September
        </ProximaText>
        <ProximaText>
          Tomatoes, July through September
        </ProximaText>
        <ProximaText>
          Turnips, August through November (local harvest available from storage through the winter)
        </ProximaText>
        <ProximaText>
          Watermelons, August through October
        </ProximaText>
        <ProximaText>
          Winter Squash, August through December
        </ProximaText>
        <ProximaText>
          Zucchini, July through September
        </ProximaText>
        <ProximaText>
          Zucchini Blossoms, June and July
				</ProximaText>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight:15,
		backgroundColor: '#fff',
  },
	header: {
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
	},
  paragraph: {
    fontSize: 15,
  },
});
