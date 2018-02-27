import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../../constants/Colors';
import { ProximaText } from '../../components/StyledText';


export default class ImprovingHealth extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProximaText style={styles.header}> Tips for improving your health </ProximaText>
				<ProximaText>Good nutrition is one of the keys to a healthy life. You can improve your health by keeping a balanced diet. You should eat foods that contain vitamins and minerals. This includes fruits, vegetables, whole grains, dairy, and a source of protein.</ProximaText>
				<ProximaText>Ask yourself the following questions. If you answer yes to any of them, talk to your doctor about your health. You may need to improve your eating habits for better nutrition.</ProximaText>
				<ProximaText>Do you have a health problem or risk factor, such as high blood pressure or high cholesterol?</ProximaText>
				<ProximaText>Did your doctor tell you that you can improve your condition with better nutrition?
				Do diabetes, cancer, heart disease, or osteoporosis run in your family?</ProximaText>
				<ProximaText>Are you overweight?</ProximaText>
				<ProximaText>Do you have questions about what foods you should eat or whether you should take vitamins?</ProximaText>
				<ProximaText>Do you think that you would benefit from seeing a registered dietitian or someone who specializes in nutrition counseling? </ProximaText>
				<ProximaText style={styles.header}> Path to improved health </ProximaText>
				<ProximaText> It can be hard to change your eating habits. It helps if you focus on small changes. Making changes to your diet may also be beneficial if you have diseases that can be made worse by things you are eating or drinking. Symptoms from conditions such as kidney disease, lactose intolerance, and celiac disease can all benefit from changes in diet. Below are suggestions to improve your health. Be sure to stay in touch with your doctor so they know how you are doing.</ProximaText>
				<ProximaText>
					- Find the strong and weak points in your current diet. Do you eat 4-5 cups of fruits and vegetables every day? Do you get enough calcium? Do you eat whole grain, high-fiber foods? If so, you’re on the right track! Keep it up. If not, add more of these foods to your daily diet.
					- Keep track of your food intake by writing down what you eat and drink every day. This record will help you assess your diet. You’ll see if you need to eat more or less from certain food groups.
					- Think about asking for help from a dietitian. They can help you follow a special diet, especially if you have a health issue. </ProximaText>
				<ProximaText> Almost everyone can benefit from cutting back on unhealthy fat. If you currently eat a lot of fat, commit to cutting back and changing your habits. Unhealthy fats include things such as: dark chicken meat; poultry skin; fatty cuts of pork, beef, and lamb; and high-fat dairy foods (whole milk, butter, cheeses). Ways to cut back on unhealthy fats include:</ProximaText>
				<ProximaText>
					- Rather than frying meat, bake, grill, or broil it. Take off the skin before cooking chicken or turkey. Try eating fish at least once a week.
					- Reduce any extra fat. This includes butter on bread, sour cream on baked potatoes, and salad dressings. Use low-fat or nonfat versions of these foods.
					- Eat plenty of fruits and vegetables with your meals and as snacks.
					- Read the nutrition labels on foods before you buy them. If you need help with the labels, ask your doctor or dietitian.
					- When you eat out, be aware of hidden fats and larger portion sizes.
					- Staying hydrated is important for good health. Drink zero- or low-calorie beverages, such as water or tea. Sweetened drinks add lots of sugar and calories to your diet. This includes fruit juice, soda, sports and energy drinks, sweetened or flavored milk, and sweetened iced tea.
				</ProximaText>
				<ProximaText style={styles.header}> Things to consider </ProximaText>
				<ProximaText> Balanced nutrition and regular exercise are good for your health. These habits can help you lose or maintain weight. Try to set realistic goals. They could be making some of the small diet changes listed above or walking daily.</ProximaText>

				<ProximaText>Doctors and dietitians suggest making healthy eating habits a part of daily life rather than following fad diets. Nutrition tips and diets from different sources can be misleading. Keep in mind the advice below, and always check with your doctor first.</ProximaText>

				<ProximaText>Secret diets aren’t the answer. Fad or short-term diets may promise to help you lose weight fast. However, they are hard to keep up with and could be unhealthy.
				Good nutrition doesn’t come in a pill. Try eating a variety of foods instead. Your body benefits most from healthy whole foods. Only take vitamins that your doctor prescribes.
				Diet programs or products can confuse you with their claims. Most people in these ads get paid for their endorsements. They don’t talk about side effects, problems, or regained weight.</ProximaText>
				<ProximaText style={styles.header}>Questions to ask your doctor</ProximaText>
				<ProximaText>
					- How many servings should I eat from each food group?
					- If I’m on a strict diet, such as vegetarian or vegan, how can I improve my health?
					- Are there certain eating habits I should follow for my health condition?
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
});
