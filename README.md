# Eatwell

## How To Get It To Run Locally
### For Desktop:
Download the latest XDE at: https://docs.expo.io/versions/latest/introduction/installation.html
Open up the desktop app and open eatwell project

### For Mobile:
Download Expo Client App from the GooglePlayStore/Apple Store
Enter URL (it can be found on the desktop client in the address bar next to the cog)

## ????googleit????
* ~css styles don't load -- look up how to organize stylesheets in react~
* icons for tabs? -- esp eatwell icon!!
* routing - why is it only for html links -.-"

* helpful for adding in custom fonts: https://facebook.github.io/react-native/docs/text.html#limited-style-inheritance

## TO DO:
### Front End Work:
* ✓ - Get main screens stubs set up
* ✓ - Figure out how to create a home screen and 3 tab navigation for mp, nutrition, and howtos
* ✓ - Set up flow for the screens
* ✓ - Start working on styles for the screens (Nutrition and HT will be easier than MP)
* Look up how to do routing so the pages go to the right articles
* ✓ - Find and download assets used in Invision prototype (fonts,images)


* Home Screen
	* ✓ - add images
	* ✓ - fix styles
	* remove the bottom navigation

* How To
	* ✓ -  How To Home
	* ✓ -  How To Completed
	* Individual Screens
	* Settings?
	* add i've got it functionality

		* Create functionality for "I got it" button -- should changed to (✓)
		* ✓ - Map up markup for HowTos

* Nutrition
	* ✓ - Nutrition Home
	* ✓ - Articles
	* ✓ - Cheatsheet
	* ✓ - Macros
	* Settings
	* Individual Screens

		* ✓ - figure out basic style
		* figure out routing to link to individual pages

* Meal Plan
	* ✓ - Meal Plan Home Screen
	* ✓ - Grocery List
	* ✓ - Explore Recipes Screen
	* Settings
	* Individual Screens
	* Fix date
	* ✓ - Fix checkmarks


### BackEnd Work
* Research on how to add a database
* Figure out which database (SQL?)
* Organize and style how i want database to be set up

### To the End:
* Figure out onboarding last -- will be hard to set up users
* Work on Settings Page for all last -- not even sure what i want to include -- will require users and backend

How to set state:
`constructor(props){
   super(props);

   this.state = {
      count: 0,
   }
}`
