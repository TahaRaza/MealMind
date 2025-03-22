import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SurpriseMe from './screens/SurpriseMe';
import TodaysRecipe from './screens/TodaysRecipe';
import IngredientSelector from './screens/IngredientSelector';
import ResultsScreen from './screens/ResultsScreen';
import DishDetailsScreen from './screens/DishDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="SurpriseMe"
          component={SurpriseMe}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="TodaysRecipe"
          component={TodaysRecipe}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="IngredientSelector"
          component={IngredientSelector}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen
          name="DishDetails"
          component={DishDetailsScreen}
          screenOptions={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
