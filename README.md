Weather-App Installation and setup guide:

when git cloning:
Access token: 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

/*INSTALLATION STEPS*/

1. open terminal or git-bash inside the 'Weather-App' folder 

2. In the terminal - run 'npm install', this will install the node_modules folder 
which is required to run locally 

DEPENDENCIES TO INSTALL:

3. Next install these dependences one by one 
	
	These installs the navigation functions required to navigate between screens:
		npm install @react-navigation/native
		npm install @react-navigation/native-stack
		expo install react-native-screens react-native-safe-area-context


	These installs the drawer navigation feature:
		npm install @react-navigation/drawer
		expo install react-native-gesture-handler react-native-reanimated

	This one installs the linear gradient feauture:
		expo install expo-linear-gradient

	This one installs the location permission feature:
		npm install expo-location

	This one installs the form feature:
		npm install formik

	This one installs the image picker for our specific weather app feature:
		npm install @react-native-picker/picker --save

	This one installs uuidv4 for creating unique ids in keys for mapped items: 
		npm install uuidv4

	These installs redux, needed for passing useStates variables between pages:
		npm install react-redux
		npm install redux
		npm install redux-thunk

	This is to fix dependencies if errors are thrown when launchng the app:
		expo doctor --fix-dependencies


/*TO RUN THE PROJECT*/

Inside the Weather-App folder, open Terminal and run the following command:

		npm start

	It will promt you with options to run the app on
	Please select a  for 'android' 
	Running it on a web browser WILL produce an error, 
	as our app is based on android/IOS




