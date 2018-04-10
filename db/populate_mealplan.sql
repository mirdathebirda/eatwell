-- CREATE TABLE IF NOT EXISTS eatwell.mealplan (
-- 	title VARCHAR(200),
-- 	id VARCHAR(100) PRIMARY KEY UNIQUE,
--     category INT, -- 0 for breakfast, 1 for lunch/din , 2 for snacks
-- 	prep_time INT,
-- 	cook_time INT,
-- 	total_time INT,
-- 	ingredients JSON,
--  info JSON, -- instructions[], images[] and set[]
--  skills JSON,
-- 	nutrition_info JSON
-- );

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Baked Chicken and Cheese Taquitos', uuid(), 30, 25, 55,
	'{"olive oil": [3,"tbsp"],
	  "onion":[1,"cup"],
	  "minced garlic":[2,"cloves"],
	  "cumin":[1.5,"tsp"],
	  "paprika":[1.5,"tsp"],
	  "salt":[0.25,"tsp"],
	  "black pepper":[0.25,"tsp"],
	  "rotisserie chicken":[3,"cups"],
	  "shredded cheddar or Mexican blend cheese":[1,"cup"],
	  "low sodium chicken broth":[1.5,"cups"],
	  "corn tortillas":[12],
	  "guacamole":["for serving"," "],
	  "salsa":["for serving"," "]
	}',
	'{ "instructions": [
		"Preheat the oven to 425ºF and line a baking sheet with parchment paper.",
		"In a large saucepan, heat the olive oil over medium heat. Add the diced onion and cook until its translucent, 3 to 5 minutes. Add the garlic, and cook, stirring occasionally, for about 3 minutes until its golden and fragrant.",
		"Reduce the heat to low, and then add the lime juice, cumin, paprika, salt and black pepper to the pan, stirring to combine. Add the shredded chicken, tossing to combine."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 380, "protein":23, "fats": 20, "carbs":40
	}'
);



INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Bang Bang Chicken', uuid(), 15, 15, 30,
'{"mayonnaise": [0.5,"cup"],
  "sweet chili sauce":[0.25,"cup"],
  "hot sauce":[2,"tbsp"],
  "cumin":[1,"tbsp"],
  "honey":[2,"tbsp"],
  "salt":["to taste"," "],
  "pepper":["to taste"," "],
  "skinless, boneless chicken breast":[4,"pieces"],
  "buttermilk":[1,"cup"],
  "all purpose flour":[0.75,"cups"],
  "cornstarch":[0.5, "cup"],
  "egg":[1, "large"],
  "garlic powder":[1, "tbsp"],
  "smoked paprika":[1, "tsp"],
  "panko breakcrumps":[1, "cup"],
  "oil":["for frying", ""]
}',
'{ "instructions": [
	"Preheat the oven to 425ºF and line a baking sheet with parchment paper.",
    "In a large saucepan, heat the olive oil over medium heat. Add the diced onion and cook until its translucent, 3 to 5 minutes. Add the garlic, and cook, stirring occasionally, for about 3 minutes until its golden and fragrant.",
    "Reduce the heat to low, and then add the lime juice, cumin, paprika, salt and black pepper to the pan, stirring to combine. Add the shredded chicken, tossing to combine.",
    "Transfer the chicken mixture to a large bowl and let it cool for 10 minutes, and then stir in the shredded cheese.",
    "In a medium saucepan over medium heat, bring the chicken broth to a simmer. One at a time, dip each tortilla into the broth for 10 to 15 seconds, just until its pliable enough to roll. Transfer the tortilla to your work surface and place about 3 tablespoons of the chicken mixture on the lower third of each tortilla. Tightly roll up the tortilla, and then place it seam-side down on the prepared baking sheet. Repeat the filling and rolling process with the remaining tortillas.",
    "Bake the taquitos for 15 to 20 minutes until golden brown and crispy. Serve with guacamole and salsa."
    ],
   "images":["image"]
}',
'{"Tell if your meat is done": "link",
"Fry": "link"
}',
'{ "calories": 617, "protein":39.8, "fats": 26.4, "carbs":52.4 }'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Zucchini Turkey Bolognese', uuid(), 15, 15, 30,
'{"olive oil": [3,"tbsp"],
  "minced garlic":[1,"tbsp"],
  "small diced onion":[0.5,"cup"],
  "ground turkey":[1,"lb"],
  "crush tomatoes":[1,"can"],
  "tomato paste":[2,"tbsp"],
  "sugar":[2,"tsp"],
  "zucchini":[3, "medium"],
  "parmesan cheese":["for serving", " "]
}',
'{ "instructions": [
	"Add 2 tablespoons olive oil to a large sauté pan set over medium-low heat. Once the oil is warm, add the garlic and onions and cook, stirring constantly, until the garlic is golden and the onions are translucent, about 3 minutes.",
    "Add the ground turkey to the pan, increase the heat to medium, and using a spatula, break the ground turkey apart into small pieces while it cooks. Once the turkey is fully cooked, add the crushed tomatoes, tomato paste, 1 teaspoon salt, 1/2 teaspoon pepper and 2 teaspoons sugar. Reduce the heat to low and cook the sauce, stirring occasionally, for 10 minutes. While the sauce cooks, make the zucchini noodles.",
    "Using a spiralizer, mandolin or vegetable peeler, cut the zucchini into noodles. Add the remaining 1 tablespoon olive oil to a large sauté pan set over medium-low heat. Add the zucchini noodles and cook them, tossing them constantly, for 2 minutes just until they’re wilted slightly. (Do not overcook the noodles or they will be soggy.)",
    "When ready to serve, plate the zucchini noodles, top them with the turkey bolognese and garnish with Parmesan cheese. Serve immediately."
    ],
   "images":["image"]
}',
'{"Saute": "link",
"Use a sprializer": "link"
}',
'{ "calories": 350, "protein":30, "fats": 19, "carbs":26 }'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Fluffy Greek Yogurt Pancakes', uuid(), 10, 5, 15,
'{"whole wheat flour": [1,"cup"],
  "all purpose flour": [1,"cup"],
  "baking powder":[4,"tsp"],
  "salt":[0.25,"tsp"],
  "unsweetened almond milk (or any other variety of milk)":[1.5,"cups"],
  "eggs":[2,"large"],
  "vanilla extract":[2,"tsp"],
  "plain 2% Greek yogurt":[0.5,"cup"],
  "maple sytrup":["for serving"," "],
  "fruit":["for serving"," "]
}',
'{ "instructions": [
	"In a large bowl, whisk together the whole-wheat flour, all-purpose flour, baking powder, salt and sugar.",
    "In a small bowl, whisk together the milk, eggs and vanilla extract. Pour the liquid mixture into the flour mixture and stir just until combined. Add the yogurt and stir.",
    "Heat a 12-inch nonstick skillet or griddle over medium heat and spray it well with nonstick cooking spray. Working in batches, spoon a quarter cup of the batter onto the pan for each pancake and cook just until bubbles form around the edges of each pancake, about 3 minutes. Flip and cook for 90 seconds more. Transfer the pancakes to a warm plate. Repeat with the remaining batter.",
    "Serve the pancakes topped with maple syrup and fruit."
    ],
   "images":["image"]
}',
'{
}',
'{ "calories": 310, "protein":14, "fats": 5, "carbs":52 }'
);


INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Baked Turkey Meatballs with Quinoa', uuid(), 10, 15, 25,
'{"whole milk": [0.25,"cup"],
  "breadcrumbs (Italian or plain)": [0.25,"cup"],
  "ground turkey":[1.5,"lbs"],
  "egg":[1,"large"],
  "minced garlic":[2,"tbsp"],
  "chopped parsley":[2,"tbsp"],
  "parmesan cheese":[0.25,"cup"],
  "uncooked quinoa":[1,"cup"],
  "marinara sauce":[1,"cup"]
}',
'{ "instructions": [
	"Preheat the oven to 500°F. Generously grease a baking dish or nonstick mini muffin pan with cooking spray.",
    "In a small bowl, stir together the milk and breadcrumbs and let the mixture sit for 5 minutes.",
    "In a large bowl, combine the ground turkey, breadcrumb mixture, egg, minced garlic, chopped parsley, grated Parmesan, 1/2 teaspoon salt and 1/4 teaspoon pepper. Use your hands to thoroughly combine the mixture and then shape it into balls using 2 to 3 tablespoons of meat per meatball.",
    "Arrange the meatballs in a single layer in the prepared baking dish or nonstick mini muffin pan. Bake the meatballs for 15 minutes until they are cooked through.",
    "While the meatballs bake, prepare the quinoa according to package directions. (See this video for tips on how to cook quinoa.)",
    "When ready to serve, divide the quinoa among plates then place the meatballs on top. Spoon the marinara sauce over the meatballs and garnish with grated Parmesan cheese."
    ],
   "images":["image"]
}',
'{"How to cook quinoa":"link"
}',
'{ "calories": 310, "protein":35, "fats": 6, "carbs":25 }'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Sheet Pan Chicken Fajitas', uuid(), 15, 25, 40,
'{"chicken breasts": [4,"medium"],
  "bell pepper": [1,"red"],
  "bell pepper": [1,"green"],
  "bell pepper": [1,"yellow"],
  "bell pepper": [1,"orange"],
  "red onion": [1,"large"],
  "garlic powder": [1,"tsp"],
  "ground cumin": [1,"tsp"],
  "paprika": [0.5,"tsp"],
  "chili powder": [0.25,"tsp"],
  "olive oil": [2,"tbsp"],
  "tortillas, guacamole, salsa, and cheese": ["for serving",""]
}',
'{ "instructions": [
	"Preheat oven to 400°F. Line a large baking sheet with foil and grease it with cooking spray.",
    "Cut the chicken, peppers and onions into 1/2-inch strips then add them to a large bowl.",
    "In a small bowl, whisk together the garlic powder, ground cumin, paprika, chili powder, 1 teaspoon salt and 1/2 teaspoon pepper. Drizzle the chicken, peppers and onions with the olive oil then sprinkle on the seasoning and toss until well mixed. Arrange the mixture in a single layer on the baking sheet and bake for 20 to 25 minutes or until the chicken is cooked through.",
    "Remove the baking sheet from the oven and serve the fajitas with tortillas and your choice of toppings, such as guacamole, salsa, cheese and sour cream."
    ],
   "images":["image"]
}',
'{"How to cook quinoa":"link"
}',
'{ "calories": 100, "protein":1, "fats": 7, "carbs":7 }'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Baked Turkey Meatballs with Quinoa', uuid(), 10, 15, 25,
'{"whole milk": [0.25,"cup"],
  "breadcrumbs (Italian or plain)": [0.25,"cup"],
  "ground turkey":[1.5,"lbs"],
  "egg":[1,"large"],
  "minced garlic":[2,"tbsp"],
  "chopped parsley":[2,"tbsp"],
  "parmesan cheese":[0.25,"cup"],
  "uncooked quinoa":[1,"cup"],
  "marinara sauce":[1,"cup"]
}',
'{ "instructions": [
	"Preheat the oven to 500°F. Generously grease a baking dish or nonstick mini muffin pan with cooking spray.",
    "In a small bowl, stir together the milk and breadcrumbs and let the mixture sit for 5 minutes.",
    "In a large bowl, combine the ground turkey, breadcrumb mixture, egg, minced garlic, chopped parsley, grated Parmesan, 1/2 teaspoon salt and 1/4 teaspoon pepper. Use your hands to thoroughly combine the mixture and then shape it into balls using 2 to 3 tablespoons of meat per meatball.",
    "Arrange the meatballs in a single layer in the prepared baking dish or nonstick mini muffin pan. Bake the meatballs for 15 minutes until they are cooked through.",
    "While the meatballs bake, prepare the quinoa according to package directions. (See this video for tips on how to cook quinoa.)",
    "When ready to serve, divide the quinoa among plates then place the meatballs on top. Spoon the marinara sauce over the meatballs and garnish with grated Parmesan cheese."
    ],
   "images":["image"]
}',
'{"How to cook quinoa":"link"
}',
'{ "calories": 310, "protein":35, "fats": 6, "carbs":25 }'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Parmesan Baked Chicken Tenders', uuid(), 15, 15, 30,
'{"olive oil": [2,"tbsp"],
  "whole wheat or white breadcrumbs": [1,"cup"],
  "grated Parmesan cheese: [0.5,"cup"],
  "shredded Parmesan cheese: [0.25,"cup"],
  "all purpose flour": [0.5,"cup"],
  "egg": [1,"large"],
  "egg whites": [2,"large"],
  "uncooked chicken tenders": [1.25,"lbs"]
}',
'{ "instructions": [
	"Preheat the oven to 475°F. Line a baking sheet with foil and brush it with the olive oil.",
    "In a medium bowl, stir together the breadcrumbs, Parmesan cheese and 1/2 teaspoon pepper. Place the flour in a second medium bowl. In a third medium bowl, whisk together the eggs.",
    "Bread each chicken tender by dredging it in the flour, shaking off any excess, then adding it to the eggs, coating it on all sides and shaking off any excess. Transfer the chicken to the breadcrumb mixture, pressing it onto the chicken on all sides. Place the chicken tender on the prepared baking sheet and repeat the breading process with the remaining tenders, spacing them about 2 inches apart on the baking sheet. Spray the top of the chicken tenders lightly with cooking spray. (This is optional, but it leads to a more golden brown color and crunch.)",
    "Bake the chicken tenders for 15 minutes, turning them once halfway through, until they’re cooked throughout. Remove them from the oven and serve them with your preferred dipping sauces."
    ],
   "images":["image"]
}',
'{"Breading chicken":"link"
}',
'{ "calories": 300, "protein":31, "fats": 10, "carbs":22}'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Chicken Taco Avocado', uuid(), 15, 15, 30,
'{"cooked black beans": [1,"can"],
  "canned corn": [1,"can"],
  "green chiles: [1,"4oz can"],
  "shredded rotisserie chicken: [1,"cup"],
  "taco seasoning": [1,"package"],
  "fresh cilantro": [3,"tbsp"],
  "avocado": [2,"ripe"],
  "ranch dressing": [1,"cup"],
  "lime juice": [0.25,"cup"],
  "kosher salt": [1,"tsp"],
  "ground black pepper": [1,"tsp"]
}',
'{ "instructions": [
	"Heat broiler. In a large bowl, combine black beans, corn, 1/2 can green chiles, Tyson Grilled & Ready Pulled Chicken Breasts, cheddar, taco seasoning, and fresh cilantro. Stir until combined.",
    "Halve and separate three avocados, removing pit and hollowing out insides. Mash insides in a small bowl and set aside.",
    "Place avocado boats face up and fill each with 1/3 cup of filling. Sprinkle with more cheddar and more fresh cilantro, then broil until cheese is melty, about 2 minutes.",
    "Make the dressing: In a medium bowl, combine ranch, lime juice, remaining green chiles, cilantro, salt, and pepper and stir to combine. Fold in mashed avocados and mix until smooth.",
    "Remove avocado boats from oven and transfer to serving dish. Drizzle with dressing and garnish with more cilantro, if desired. Serve immediately."
    ],
   "images":["image"]
}',
'{" ":" "
}',
'{ "calories": 413, "protein":13, "fats": 32, "carbs":16}'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Cinnamon Applesauce Pancakes', uuid(), 10, 5, 15,
'{"all purpose flour": [1.5,"cups"],
  "ground cinnamon": [0.5,"tsp"],
  "baking powder: [2,"tbsps"],
  "light brown sugar: [0.25,"cup"],
  "whole milk": [1,"cup"],
  "applesauce": [1,"cup"],
  "egg": [1,"large"],
  "vegetable oil": [2,"tbsp"],
  "vanilla extract": [1.5,"tsp"]
}',
'{ "instructions": [
	"In a large bowl, whisk together the flour, cinnamon, baking powder and brown sugar.",
    "In a separate medium bowl, whisk together the milk, applesauce, egg, vegetable oil and vanilla extract.",
    "Add the wet ingredients to the dry ingredients and mix just until combined. (The batter should be lumpy.)",
    "Place a nonstick pan or griddle over medium-low heat. Drop dollops of the batter onto the hot pan. Once bubbles form, flip the pancakes once and continue cooking 1 to 2 more minutes until the pancakes are cooked throughout. Serve immediately with maple syrup or other toppings."
    ],
   "images":["image"]
}',
'{" ":" "
}',
'{ "calories": 339, "protein":8, "fats": 10, "carbs":52}'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Turkey Taco Stew', uuid(), 25, 40, 65,
'{"olive oil": [1,"medium"],
  "onion": [1,"cup"],
  "green pepper: [1,"green"],
  "ground turkey: [1.5,"lbs"],
  "diced tomatoes with chilies": [1,"(15oz) can"],
  "pinto beans with chili sauce": [1,"(10oz) can"],
  "taco seasoning": [1,"(1oz) envelope"],
  "tomato soup": [1,"(10oz) can"],
  "tomato paste": [1,"(6oz) can"],
  "water": [1,"cup"],
  "tortilla chips": ["for serving (optional)"," "],
  "sour cream, shredded cheese and sliced scallions": ["for serving (optional)"," "]
}',
'{ "instructions": [
	"Place a large heavy-bottomed stock pot over medium heat. Add the olive oil, and once it is warm, add the diced onions and peppers and cook, stirring, until the onions are transluscent, about 3 minutes.",
    "Add the ground turkey and using a spatula, break it apart into pieces and cook it until it is cooked through.",
    "Add all of the remaining ingredients, except for the optional toppings, then reduce the heat to low and simmer the stew until it is heated throughout.",
    "When ready to serve, crumble a handful of tortilla chips into a bowl then ladle in the stew and top it with sour cream, shredded cheese and sliced scallions (optional)."
    ],
   "images":["image"]
}',
'{" ":" "
}',
'{ "calories": 180, "protein":27, "fats": 6, "carbs":2}'
);


INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Breakfast Bruschetta', uuid(), 10, 10, 20,
'{"French bread": [8,"1in thick"],
  "unsalted butter": [3,"tbsp"],
  "whole milk: [0.25,"cup"],
  "chopped fresh chives": [1,"tbsp"],
  "eggs": [4,"large"],
  "black pepper": [0.125,"tsp"],
  "mashed avocado": [0.75,"cup"],
  "diced tomatoes": [1,"cup"]
}',
'{ "instructions": [
	"Preheat oven to 400ºF.",
    "Melt 2 tablespoons of the butter and brush it on both cut sides of each slice of French bread. Arrange the bread slices on a baking sheet and bake for 5 minutes, then flip them and bake an additional 3 to 5 minutes until toasted. Remove the bread from the oven and set it aside.",
    "In a medium bowl, whisk together the eggs, milk, chives and pepper.",
    "Heat a medium nonstick sauté pan over medium-low heat. Add the remaining 1 tablespoon of the butter to the pan, and once it has melted, pour in the eggs. Cook the eggs, stirring as needed, until they’re scrambled to your desired consistency.",
    "Spread a portion of the mashed avocado on one side of each slice of toasted bread. Top the avocado with the scrambled eggs and garnish with the diced tomatoes."
    ],
   "images":["image"]
}',
'{"Scrambling eggs":"link"
}',
'{ "calories": 350, "protein":12, "fats": 21, "carbs":30}'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
'Healthy Breakfast Egg Muffins', uuid(), 10, 25, 35,
'{"nonfat milk: [0.25,"cup"],
  "chopped fresh spinach": [1,"cup"],
  "eggs": [12,"large"],
  "diced onions": [0.5,"cup"],
  "mashed avocado": [0.75,"cup"],
  "quartered cherry tomatoes": [0.5,"cup"],
  "salsa": ["for serving"," "],
  "crumbled cotija or feta cheese": ["for serving"," "],
}',
'{ "instructions": [
	"Preheat the oven to 350°F. Grease a muffin pan with cooking spray.",
    "In a large bowl, whisk together the eggs, nonfat milk and 1/2 teaspoon pepper. Stir in the spinach, tomatoes and onions.",
    "Divide the mixture evenly between the 12 muffin pan cups and bake the muffins for 20 to 25 minutes, or until the egg is fully cooked. Remove the muffins from the oven and let them cool for 5 minutes in the pan then use a knife to loosen the muffins from the cups.",
    "Top each muffin with sliced avocado, a dollop of salsa and a sprinkling of cheese then serve."
    ],
   "images":["image"]
}',
'{"Scrambling eggs":"link"
}',
'{ "calories": 80, "protein":7, "fats": 5, "carbs":2}'
);

INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Baked Cauliflower Tots', uuid(), 30, 45, 75,
	'{"cauliflower": [2,"medium heads"],
	  "onion":[0.25,"cup"],
	  "grated Parmesan cheese":[0.25,"cup"],
	  "ground breadcrumbs":[1,"cup"],
	  "egg":[1,"large"],
	}',
	'{ "instructions": [
		"Preheat the oven to 350°F. Grease a nonstick baking sheet liberally with cooking spray.",
		"Bring a large pot of salted water to a boil. Add the cauliflower florets to the water and cook them just until fork tender, 5 to 10 minutes. Thoroughly drain the florets and transfer them to a food processor. Pulse the cauliflower for a few seconds just until the it breaks down into small pieces (about the size of grains of rice). (Do not overmix the cauliflower or the mixture will be too wet to form.)",
		"Measure out 3 packed cups of the cauliflower and add it to a large bowl.Stir in the diced onion, Parmesan cheese, breadcrumbs, egg, 1 teaspoon salt and 1/4 teaspoon pepper, mixing until thoroughly combined. (The mixture should be roughly the consistency of mashed potatoes.) Using your hands, scoop up 1- to 2-tablespoons of the mixture and mold it into a tater tot shape. Place it on the prepared baking sheet and repeat the shaping process with the remainder of the mixture, spacing the tots about 1 inch apart.",
		"Bake the tots for about 20 minutes then flip them and bake an additional 10 to 15 minutes until crisped. Remove and serve with ketchup, pesto, hummus or your preferred dipping sauce."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 100, "protein":7, "fats": 20, "carbs":40
	}'
);


INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Salmon with Honey-Garlic Glaze', uuid(), 30, 45, 75,
	'{"honey": [0.5,"cup"],
	  "low sodium soy sauce":[0.33,"cup"],
	  "pineapple juice":[0.75,"cup"],
	  "minced garlic":[1,"tbsp"],
	  "fresh ginger":[1.5,"tsps"],
		"salmon":[2,"6oz filets"],
		"cornstarch":[1,"tsp"],
		"chopped scallions":["for garnish"," "],
		"toasted sesame seeds":["for garnish"," "],
	}',
	'{ "instructions": [
		"In a medium bowl or liquid measuring cup, whisk together the honey, soy sauce, pineapple juice, garlic and ginger. Place the salmon filets in a large sealable plastic bag then pour in half of the marinade and refrigerate the salmon for a minimum of 15 minutes and up to 6 hours. (Reserve the remaining half of the marinade.)",
		"When you are ready to bake the salmon, preheat the oven to 350°F and line a baking sheet with foil. Remove the salmon from the fridge, lightly coat the foil with cooking spray and arrange each filet skin side down on the baking sheet. (Discard the marinade in the bag.) Bake the salmon for about 15 minutes or until it’s cooked through. (The cooking time will vary based on the thickness of your salmon filets, but aim for an internal temperature of 145°F.)",
		"While the salmon is baking, pour the reserved half of the marinade into a small saucepan set over medium-high heat. In a small bowl whisk together the cornstarch with 2 teaspoons water. Whisk the cornstarch mixture into the sauce, bring it to a boil, and continue cooking it until it reduces and is thick enough to coat the back of a spoon.",
		"Remove the salmon from the oven, transfer each filet to a serving plate and top it with the glaze. Garnish the salmon with chopped scallions and sesame seeds and serve immediately."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 411, "protein":35, "fats": 10, "carbs":44
	}'
);


INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Healthy Breakfast Cookies', uuid(), 30, 45, 75,
	'{"creamy peanut butter (or other nut butter)": [1,"cup"],
	  "honey":[0.25,"cup"],
	  "vanilla extract":[1,"tsp"],
	  "mashed ripe bananas":[2,"medium"],
	  "ground cinnamon":[1,"tsp"],
		"quick oats":[2.25,"cups"],
		"dried cranberries or raisins":[0.5,"cup"],
		"chopped nuts, such as almonst, walnuts or pistachios":["0.66","cup"]
	}',
	'{ "instructions": [
		"Preheat the oven to 325°F. Line a baking sheet with parchment paper or a Silpat.",
		"In the bowl of a stand mixer fitted with the paddle attachment, beat together the peanut butter, honey, vanilla extract, mashed bananas, salt and cinnamon.",
		"Add the oats, dried cranberries and nuts and mix until combined. Scoop about 1/4-cup mounds of the cookie dough onto the baking sheet, flattening each cookie slightly. (The cookies will not spread while baking, so you can space them relatively close together.)",
		"Bake the cookies for 14 to 16 minutes until they’re golden brown but still soft. Remove the cookies from the oven then allow them to cool for 5 minutes on the baking sheet before transferring them to a rack to cool completely."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 280, "protein":35, "fats": 10, "carbs":44
	}'
);


INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Zucchini Fritters', uuid(), 20, 5, 25,
	'{"creamy peanut butter (or other nut butter)": [1,"cup"],
	  "honey":[0.25,"cup"],
	  "vanilla extract":[1,"tsp"],
	  "mashed ripe bananas":[2,"medium"],
	  "ground cinnamon":[1,"tsp"],
		"quick oats":[2.25,"cups"],
		"dried cranberries or raisins":[0.5,"cup"],
		"chopped nuts, such as almonst, walnuts or pistachios":["0.66","cup"]
	}',
	'{ "instructions": [
		"Preheat the oven to 325°F. Line a baking sheet with parchment paper or a Silpat.",
		"In the bowl of a stand mixer fitted with the paddle attachment, beat together the peanut butter, honey, vanilla extract, mashed bananas, salt and cinnamon.",
		"Add the oats, dried cranberries and nuts and mix until combined. Scoop about 1/4-cup mounds of the cookie dough onto the baking sheet, flattening each cookie slightly. (The cookies will not spread while baking, so you can space them relatively close together.)",
		"Bake the cookies for 14 to 16 minutes until they’re golden brown but still soft. Remove the cookies from the oven then allow them to cool for 5 minutes on the baking sheet before transferring them to a rack to cool completely."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 280, "protein":35, "fats": 10, "carbs":44
	}'
);



INSERT INTO eatwell.mealplan(title,id, prep_time,cook_time,total_time,ingredients,info,skills,nutrition_info)
values(
	'Baked Chicken Teriyaki Meatballs', uuid(), 10, 15, 25,
	'{"creamy peanut butter (or other nut butter)": [1,"cup"],
	  "honey":[0.25,"cup"],
	  "vanilla extract":[1,"tsp"],
	  "mashed ripe bananas":[2,"medium"],
	  "ground cinnamon":[1,"tsp"],
		"quick oats":[2.25,"cups"],
		"dried cranberries or raisins":[0.5,"cup"],
		"chopped nuts, such as almonst, walnuts or pistachios":["0.66","cup"]
	}',
	'{ "instructions": [
		"Preheat the oven to 325°F. Line a baking sheet with parchment paper or a Silpat.",
		"In the bowl of a stand mixer fitted with the paddle attachment, beat together the peanut butter, honey, vanilla extract, mashed bananas, salt and cinnamon.",
		"Add the oats, dried cranberries and nuts and mix until combined. Scoop about 1/4-cup mounds of the cookie dough onto the baking sheet, flattening each cookie slightly. (The cookies will not spread while baking, so you can space them relatively close together.)",
		"Bake the cookies for 14 to 16 minutes until they’re golden brown but still soft. Remove the cookies from the oven then allow them to cool for 5 minutes on the baking sheet before transferring them to a rack to cool completely."
		],
	   "images":["image"]
	}',
	'{"none": "none"
	}',
	'{ "calories": 280, "protein":35, "fats": 10, "carbs":44
	}'
);

SELECT * FROM eatwell.mealplan;
