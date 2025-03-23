import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
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
import AddMemberScreen from './screens/AddMemberScreen';
import ChooseMemberScreen from './screens/ChooseMemberScreen';
import ChooseAvatarScreen from './screens/ChooseAvatarScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="ChooseMember"
              component={ChooseMemberScreen}
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
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              screenOptions={{headerShown: false}}
            />
            <Stack.Screen
              name="AddMember"
              component={AddMemberScreen}
              screenOptions={{headerShown: false}}
            />
            <Stack.Screen
              name="ChooseAvatarScreen"
              component={ChooseAvatarScreen}
              screenOptions={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
