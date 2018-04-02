-- CREATE TABLE IF NOT EXISTS mealplan (
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
-- 
USE eatwell;

INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
values(
'Baked Chicken and Cheese Taquitos', uuid(), 30, 25, 55,
'{"olive oil": [3,"tbsp"],
  "onion":[1,"cup"],
  "minced garlic":[2,"cloves"],
  "cumin":[1 1/2,"tsp"],
  "paprika":[1 1/2,"tsp"],
  "salt":[1/4,"tsp"],
  "black pepper":[1/4,"tsp"],
  "rotisserie chicken":[3,"cups"],
  "shredded cheddar or Mexican blend cheese":[1,"cup"],
  "low sodium chicken broth":[1 1/2,"cups"],
  "corn tortillas":[12],
  "guacamole":["for serving",""],
  "salsa":["for serving",""],
}',
'{ "instructions": [
	"Preheat the oven to 425ºF and line a baking sheet with parchment paper.",
    "In a large saucepan, heat the olive oil over medium heat. Add the diced onion and cook until its translucent, 3 to 5 minutes. Add the garlic, and cook, stirring occasionally, for about 3 minutes until its golden and fragrant.",
    "Reduce the heat to low, and then add the lime juice, cumin, paprika, salt and black pepper to the pan, stirring to combine. Add the shredded chicken, tossing to combine.
",
    ],
   "images":[]
}',
'{
}'
'{ "calories": 380, "protein":23, "fats": 20, "carbs":40 }'
);

INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
values(
'Bang Bang Chicken', uuid(), 15, 15, 30,
'{"mayonnaise": [1/2,"cup"],
  "sweet chili sauce":[1/4,"cup"],
  "hot sauce":[2,"tbsp"],
  "cumin":[1,"tbsp"],
  "honey":[2,"tbsp"],
  "salt":["to taste",""],
  "pepper":["to taste".""],
  "skinless, boneless chicken breast":[4,"pieces"],
  "buttermilk":[1,"cup"],
  "all purpose flour":[3/4,"cups],
  "cornstarch":[1/2, "cup"],
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
   "images":[],
}',
'{"Tell if your meat is done", "link",
"Fry", "link"
}',
'{ "calories": 617, "protein":39.8, "fats": 26.4, "carbs":52.4 }'
);

INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
values(
'Zucchini Turkey Bolognese', uuid(), 15, 15, 30,
'{"olive oil": [3,"tbsp"],
  "minced garlic":[1,"tbsp"],
  "small diced onion":[1/2,"cup"],
  "ground turkey":[1,"lb"],
  "crush tomatoes":[1,"can"],
  "tomato paste":[2,"tbsp"],
  "sugar":[2,"tsp"],
  "zucchini":[3, "medium"],
  "parmesan cheese":["for serving", ""],
}',
'{ "instructions": [
	"Add 2 tablespoons olive oil to a large sauté pan set over medium-low heat. Once the oil is warm, add the garlic and onions and cook, stirring constantly, until the garlic is golden and the onions are translucent, about 3 minutes.",
    "Add the ground turkey to the pan, increase the heat to medium, and using a spatula, break the ground turkey apart into small pieces while it cooks. Once the turkey is fully cooked, add the crushed tomatoes, tomato paste, 1 teaspoon salt, 1/2 teaspoon pepper and 2 teaspoons sugar. Reduce the heat to low and cook the sauce, stirring occasionally, for 10 minutes. While the sauce cooks, make the zucchini noodles.",
    "Using a spiralizer, mandolin or vegetable peeler, cut the zucchini into noodles. Add the remaining 1 tablespoon olive oil to a large sauté pan set over medium-low heat. Add the zucchini noodles and cook them, tossing them constantly, for 2 minutes just until they’re wilted slightly. (Do not overcook the noodles or they will be soggy.)",
    "When ready to serve, plate the zucchini noodles, top them with the turkey bolognese and garnish with Parmesan cheese. Serve immediately."
    ],
   "images":[],
}',
'{"Saute", "link",
"Use a sprializer", "link"
}',
'{ "calories": 350, "protein":30, "fats": 19, "carbs":26 }'
);

INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
values(
'Fluffy Greek Yogurt Pancakes', uuid(), 10, 5, 15,
'{"whole wheat flour": [1,"cup"],
  "all purpose flour": [1,"cup"],
  "baking powder":[4,"tsp"],
  "salt":[1/4,"tsp"],
  "unsweetened almond milk (or any other variety of milk)":[1 1/2,"cups"],
  "eggs":[2,"large"],
  "vanilla extract":[2,"tsp"],
  "plain 2% Greek yogurt":[1/2,"cup"],
  "maple sytrup":["for serving",""],
  "fruit":["for serving",""]
}',
'{ "instructions": [
	"In a large bowl, whisk together the whole-wheat flour, all-purpose flour, baking powder, salt and sugar.",
    "In a small bowl, whisk together the milk, eggs and vanilla extract. Pour the liquid mixture into the flour mixture and stir just until combined. Add the yogurt and stir.",
    "Heat a 12-inch nonstick skillet or griddle over medium heat and spray it well with nonstick cooking spray. Working in batches, spoon a quarter cup of the batter onto the pan for each pancake and cook just until bubbles form around the edges of each pancake, about 3 minutes. Flip and cook for 90 seconds more. Transfer the pancakes to a warm plate. Repeat with the remaining batter.",
    "Serve the pancakes topped with maple syrup and fruit."
    ],
   "images":[],
}',
'{
}',
'{ "calories": 310, "protein":14, "fats": 5, "carbs":52 }'
);


INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
values(
'Baked Turkey Meatballs with Quinoa', uuid(), 10, 15, 25,
'{"whole milk": [1/4,"cup"],
  "breadcrumbs (Italian or plain)": [1/4,"cup"],
  "ground turkey":[1 1/2,"lbs"],
  "egg":[1,"large"],
  "minced garlic":[2,"tbsp"],
  "chopped parsley":[2,"tbsp"],
  "parmesan cheese":[1/4,"cup"],
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
   "images":[],
}',
'{"How to cook quinoa":"link"
}',
'{ "calories": 310, "protein":35, "fats": 6, "carbs":25 }'
);

INSERT INTO mealplan(title,id, prep_time,cook_time,total_time,ingredients,instructions,info,nutrition_info) 
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
  "paprika": [1/2,"tsp"],
  "chili powder": [1/4,"tsp"],
  "olive oil": [2,"tbsp"],
  "tortillas, guacamole, salsa, and cheese": ["for serving",""],
}',
'{ "instructions": [
	"Preheat oven to 400°F. Line a large baking sheet with foil and grease it with cooking spray.",
    "Cut the chicken, peppers and onions into 1/2-inch strips then add them to a large bowl.",
    "In a small bowl, whisk together the garlic powder, ground cumin, paprika, chili powder, 1 teaspoon salt and 1/2 teaspoon pepper. Drizzle the chicken, peppers and onions with the olive oil then sprinkle on the seasoning and toss until well mixed. Arrange the mixture in a single layer on the baking sheet and bake for 20 to 25 minutes or until the chicken is cooked through.",
    "Remove the baking sheet from the oven and serve the fajitas with tortillas and your choice of toppings, such as guacamole, salsa, cheese and sour cream."
    ],
   "images":[],
}',
'{"How to cook quinoa":"link"
}',
'{ "calories": 100, "protein":1, "fats": 7, "carbs":7 }'
);
