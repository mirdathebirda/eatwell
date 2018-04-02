-- CREATE TABLE IF NOT EXISTS nutrition (
-- 	title VARCHAR(200),
-- 	id VARCHAR(100) PRIMARY KEY UNIQUE,
--  category INT, -- 0 for article, 1 for cheatsheet 
-- 	date_posted DATETIME,
-- 	read_state BOOLEAN,
-- 	times_viewed INT,
-- 	last_viewed DATETIME,
--  body LONGTEXT
-- );

USE eatwell;

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'10 Ways to Make Recipes Healthier',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
"1. Make creamy dishes without the cream  
2. Try cooking with less oil  
3. Get crispy “fried” food without the grease  
4. Amp up flavor without the salt shaker  
5. Use whole grains in baked goods 
6. Swap good fats for bad fats 
7. Go for egg whites in place of whole eggs  
8. Slim down homemade ice cream 
9. Add grains or vegetables to meaty dishes  
10. Reduce cheese, keep the flavor"
);

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'8 eating habits you should cut right now',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
 "   No one eats perfectly all the time – even dietitians! But when bad habits become common practice, you can end up with weight gain, high cholesterol, high blood pressure and a host of other potential health problems. So which lousy habits are getting folks into trouble? Here are the top 10 faux pas on our hit list, and how to avoid them. How many are part of your regular routine? 
	  1: Poor Meal Planning  
	   According to our readers, “time” is one of the biggest barriers to healthy eating, but last-minute decisions often lead to fast-food drive thrus and pizza delivery. Taking a few minutes to plan out weekly meals before shopping for the week will save you money, calories,  and time in the long run.
	  2: Too Many Meals Away From Home  
	   Restaurants and take-out will always mean super-sized portions, along with more calories and sodium. Make the effort to prepare meals at home most nights of the week and use our tips when you do venture out. 
	  3: Too Many Processed Foods 
	   Salty and fatty convenience foods that have been stripped of nutrients are everywhere you turn. Opt for mostly fresh and whole foods and read labels to help make the smartest choices when you do go for more highly processed goods. 

	  4: Too Much Added Sugar 
	   Aside from the candies, cookies and soda that Americans already eat too much of, sugar is lurking in places you might not expect, like whole grain cereals, salad dressings, condiments and breads. Take inventory of the total sugar in your diet and find ways to cut back on those empty calories. 

	  5. Mindless Eating 
	   Instead of just eating when hungry, many of us grab food when we’re bored, tired, stressed, happy, sad – you name it! Check out our tips for eating smart and for the right reasons. 

	  6. Not Eating Together 
	   Along the same lines as eating mindlessly comes eating while distracted, over-scheduled and in multiple shifts. Turn off the TV (and yes, even the computer and cell phone) at meals and make time to eat as a family as much as possible. 

	  7: Eating on the Run 
	   Leaving the house for a busy day without packed snacks or meals sets the stage for diet disaster. You’ll resort to meals that are too processed, too heavy, and too much on your waistline. 

	  8: Giant Portion Sizes 
	   You think you can eyeball portions but have you ever really measured out your morning cereal, spoonfuls of peanut butter or olive oil for cooking? Overdoing portions (even with healthy foods) can cause a calorie overload. Just do it a few times to give yourself some perspective.   "
);


INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'All about coffee',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
 "   Coffee is among the most consumed — and controversial — beverages in the world. While coffee should be treated with care and avoided altogether by those who metabolize it poorly, it also provides health benefits to many people. Read on to find out what they are – and how to drink coffee responsibly.  
	 Coffee is the second most popular drink in the world, trailing only water and, debatably, tea.  
	 Caffeine, a key component of coffee, is a controversial compound. With 90% of North American adults consuming caffeine daily, it is the world’s most consumed psychoactive drug – and coffee is the delivery method of choice.  
	 Perhaps that’s why, in the fitness world, we’ve traditionally viewed coffee with some suspicion.  
	 But is coffee really bad for us? Should we give up our beloved cuppa joe? If it’s bad, why does it feel so good? 

	 Coffee’s origins  
	 The coffee plant originated in East Africa — according to legend, a goat herder tried coffee cherries after he noticed his goats acting much more energetic after nibbling on the coffee bushes.  
	 The earliest evidence of coffee drinking occurred in the 15th century in Yemen.  From Yemen, coffee quickly spread to Egypt and North Africa, and by the 16th century it was being enjoyed by the rest of the Middle East, Persia, and Turkey and soon thereafter Italy and the rest of Europe. 
	 Fast forward to today. Coffee is ubiquitous in our culture.  Everywhere you look, there’s a coffee shop on the corner. What effect might our cultural love of coffee have on our health?  
	 Short answer: Well, we’re not completely sure.  

	 Coffee’s risks  
	 Research on coffee’s safety is mixed, for several reasons:  
	 Metabolism matters. People vary genetically in how well they can process caffeine and coffee. 
	 Coffee interacts with many hormones and neurotransmitters in the body, such as cortisol, acetylcholine, and insulin. These relationships are complex, and often depend on timing, amount, and people’s individual makeup. 
	 As a crop, coffee is less like corn or soy, and more like cacao or wine grapes: It’s typically grown and processed in smaller batches by smaller-scale farmers and producers. Variations in soil and climate, as well as later roasting and brewing technique, will change the taste and chemical makeup. It’s hard to standardize the exact chemical compounds in coffee from batch to batch. (By the way, JB likes to roast his own coffee. You can follow along with his process here.) 
	 So it’s hard to say definitively that coffee is “good” or “bad”; “healthy” or “unhealthy”. Let’s explore this in more depth. 

	 Coffee’s benefits 
	 Caffeine & dehydration 
	 For years, fitness enthusiasts worried that coffee would dehydrate them. However, a recent review of 10 studies found that consuming up to 550 mg of caffeine per day (or about five 8-oz cups) does not cause fluid-electrolyte imbalances in athletes or fitness enthusiasts. 
	 beverages as part of a normal lifestyle does not lead to fluid losses exceeding the volume of fluid consumed (intake and output were roughly equal), nor is it associated with poor hydration status. 
	 Take-home: Don’t drink coffee as your only beverage, and drink enough water, and you’ll be fine. 

	Coffee & performance 
	Let’s be honest — that first morning coffee can transform us from beast to philosopher (or at least, slightly more awake and nicer beast). Coffee, and more specifically its caffeine content, provide many noted mental and physical performance benefits. 
	Caffeine reduces our rate of perceived exertion, so it doesn’t feel like we’re working as hard as we actually are. People who regularly drink coffee perform better on tests of reaction time, verbal memory, and visuo-spatial reasoning. 
	better on tests of cognitive function if they had regularly consumed coffee over the course of their lifetimes. 
	Take-home: A little bit of coffee/caffeine before important tasks requiring alertness and energy can be a good thing.  
 "
);

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'How exercise can make for healthier fat',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
 "   Exercise could help to make your fat tissue healthier, which, hear me out, is a good thing. 

	According to a timely new study, a single session of exercise may change the molecular workings of fat tissue in ways that, over time, should improve metabolic health. 

	This finding has particular relevance during the holidays, when, despite our best intentions, so many of us add to our fat stores. Exercise might make these annual bacchanals less metabolically damaging than otherwise. 

	Most of us probably think of our fat tissue as inert and undesirable. But our fat is, in fact, a busy and necessary tissue, producing and sending out multiple biochemical signals that affect biological operations throughout the body. 

	Fat tissue’s most important responsibility, however, is to securely store fat, and we should hope that it performs this function well. Provocative recent research in both animals and people has found that, if a person’s or animal’s fat tissue is relatively leaky, allowing fatty acids to ooze into the bloodstream, those roving fat blobs can accumulate in other tissues, particularly the muscles and liver. Once there, they contribute to the development of insulin resistance, a serious metabolic condition that often leads to diabetes. 

	In a study published earlier this year, for instance, scientists from the University of Michigan and elsewhere found that if overweight men and women had low levels of fatty acids in their bloodstream, they also were metabolically healthier than other overweight adults. 

	Even more interesting, they generally also had healthy fat, the scientists found, with biopsies showing less inflammation and scarring than in the fat from other overweight men and women. (This fat was subcutaneous, meaning it came from just beneath the skin.) 
	Presumably, the scientists speculated, this robust fat was leaking less than the frailer variety. 

	But that study did not examine why some people had healthier fat than others and whether the condition of anyone’s fat tissue might be changed. 
	So for the new study, which was published last month in the Journal of Applied Physiology, the same group of scientists began to consider exercise. 
	Exercise, of course, is well known to affect the amount of fat we store, since muscles use fatty acids as fuel. Exercise also is believed to prompt small amounts of white fat to transform into brown fat, a particularly desirable form of fat that burns a lot of calories. 
	But it has not been clear whether exercise directly alters the health of white fat tissue. 
	To find out, the researchers first gathered 20 men and women who were overweight but did not have insulin resistance. Eight of them exercised regularly. The others had been sedentary. 
	The researchers tested their volunteers’ body compositions and took fat samples. Then they had each volunteer exercise on a treadmill or stationary bike for an hour at a moderately tiring pace. 
	An hour later, the scientists repeated the fat biopsies. 
	Examining the various tissues microscopically afterward, the researchers found several tantalizing differences. 
	In almost all of the volunteers, the fat tissue after exercise showed greater amounts of a protein that is known to contribute to the development of more blood vessels. 
	This change could be important over time, says Jeffrey Horowitz, a professor of movement science at the University of Michigan School of Kinesiology who conducted the experiment with Douglas Van Pelt (now a postdoctoral researcher at the University of Kentucky) and others. 
	“More blood vessels in tissue means greater blood flow,” he says, with augmented delivery of oxygen and nutrients and better overall tissue health. 
	Interestingly, the fat tissue from those volunteers who regularly exercised also showed a small but meaningful increase in genetic activity related to blood vessel proliferation, suggesting that their tissue was more primed than that from the sedentary volunteers to start creating additional blood flow. 
	Their fat tissue also showed a slight increase in the gene expression of a substance that helps to reduce inflammation. 
	These alterations were not enormous, Dr. Horowitz says. They were subtle. But they occurred consistently and after a single session of exercise, he points out, and might, with continued exercise, be expected to improve fat health over time. 
	This study was small, however, and very short-term and did not look at whether other amounts or types of exercise would have comparable effects within fat. It also did not measure whether exercise actually changed the amounts of fat in the bloodstream and, since the volunteers were overweight, cannot tell us whether the effects would be comparable in people whose weight was normal. 
	Perhaps most fundamentally, the study concentrated on how to make our fat’s health rise when most of us would prefer that its quantity decline. 
	Dr. Horowitz understands. “There is no doubt that the best thing for metabolic health is to lose weight.” 
	But at this time of year, he says, when fat gain is common, a brisk walk or jog might make this added fat healthier and more stable, and the broader effects on our bodies a little less concerning.
 "
);

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'Tips for improving your health',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
 "  Good nutrition is one of the keys to a healthy life. You can improve your health by keeping a balanced diet. You should eat foods that contain vitamins and minerals. This includes fruits, vegetables, whole grains, dairy, and a source of protein. 
	Ask yourself the following questions. If you answer yes to any of them, talk to your doctor about your health. You may need to improve your eating habits for better nutrition. 
	Do you have a health problem or risk factor, such as high blood pressure or high cholesterol? 
	Did your doctor tell you that you can improve your condition with better nutrition?
	Do diabetes, cancer, heart disease, or osteoporosis run in your family? 
	Are you overweight? 
	Do you have questions about what foods you should eat or whether you should take vitamins? 
	Do you think that you would benefit from seeing a registered dietitian or someone who specializes in nutrition counseling?  
	Path to improved health  
	It can be hard to change your eating habits. It helps if you focus on small changes. Making changes to your diet may also be beneficial if you have diseases that can be made worse by things you are eating or drinking. Symptoms from conditions such as kidney disease, lactose intolerance, and celiac disease can all benefit from changes in diet. Below are suggestions to improve your health. Be sure to stay in touch with your doctor so they know how you are doing. 
		- Find the strong and weak points in your current diet. Do you eat 4-5 cups of fruits and vegetables every day? Do you get enough calcium? Do you eat whole grain, high-fiber foods? If so, you’re on the right track! Keep it up. If not, add more of these foods to your daily diet.
		- Keep track of your food intake by writing down what you eat and drink every day. This record will help you assess your diet. You’ll see if you need to eat more or less from certain food groups.
		- Think about asking for help from a dietitian. They can help you follow a special diet, especially if you have a health issue.  
	Almost everyone can benefit from cutting back on unhealthy fat. If you currently eat a lot of fat, commit to cutting back and changing your habits. Unhealthy fats include things such as: dark chicken meat; poultry skin; fatty cuts of pork, beef, and lamb; and high-fat dairy foods (whole milk, butter, cheeses). Ways to cut back on unhealthy fats include: 
				 
		- Rather than frying meat, bake, grill, or broil it. Take off the skin before cooking chicken or turkey. Try eating fish at least once a week.
		- Reduce any extra fat. This includes butter on bread, sour cream on baked potatoes, and salad dressings. Use low-fat or nonfat versions of these foods.
		- Eat plenty of fruits and vegetables with your meals and as snacks.
		- Read the nutrition labels on foods before you buy them. If you need help with the labels, ask your doctor or dietitian.
		- When you eat out, be aware of hidden fats and larger portion sizes.
		- Staying hydrated is important for good health. Drink zero- or low-calorie beverages, such as water or tea. Sweetened drinks add lots of sugar and calories to your diet. This includes fruit juice, soda, sports and energy drinks, sweetened or flavored milk, and sweetened iced tea.
				 
	Things to consider  
	Balanced nutrition and regular exercise are good for your health. These habits can help you lose or maintain weight. Try to set realistic goals. They could be making some of the small diet changes listed above or walking daily. 

	Doctors and dietitians suggest making healthy eating habits a part of daily life rather than following fad diets. Nutrition tips and diets from different sources can be misleading. Keep in mind the advice below, and always check with your doctor first. 

	Secret diets aren’t the answer. Fad or short-term diets may promise to help you lose weight fast. However, they are hard to keep up with and could be unhealthy.
	Good nutrition doesn’t come in a pill. Try eating a variety of foods instead. Your body benefits most from healthy whole foods. Only take vitamins that your doctor prescribes.
	Diet programs or products can confuse you with their claims. Most people in these ads get paid for their endorsements. They don’t talk about side effects, problems, or regained weight. 
	Questions to ask your doctor 
		- How many servings should I eat from each food group?
		- If I’m on a strict diet, such as vegetarian or vegan, how can I improve my health?
		- Are there certain eating habits I should follow for my health condition?
 "
);

INSERT INTO nutrition(title,id,date_posted,read_state,times_viewed,last_viewed,body) 
values(
'Call a snack a meal, and you are less apt to overeat',
uuid(),
0,
'2014-07-10 23:50:12',
false,
0,
'1000-01-01 00:00:00',
 "  Labeling some foods as meals rather than snacks could cut down on overeating, a new study suggests. 
	The research included 80 people who were asked to eat a pasta dish presented as either a snack (eaten standing up from a plastic pot with a plastic fork) or a meal (eaten seated at a table from a ceramic plate with a metal fork). 
	After they ate the meals, the participants were invited to taste-test additional foods, such as animal crackers and M&Ms. 
	Those who had eaten the pasta presented as a snack ate much more during the taste test than those who would have eaten the paste presented as a meal, according to the study, published online recently in the journal Appetite. 
	"With our lives getting busier, increasing numbers of people are eating on the go and consuming foods that are labeled as "snacks"to sustain them," said study author Jane Ogden, a professor of health psychology at the University of Surrey, England. 
	"What we have found is that those who are consuming snacks are more likely to overeat as they may not realize or even remember what they have eaten," she added in a university news release. 
	"To overcome this, we should call our food a meal and eat it as meal, helping make us more aware of what we are eating so that we don not overeat later on," she suggested. 
 "
);

SELECT * FROM eatwell.nutrition;