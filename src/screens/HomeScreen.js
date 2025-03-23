import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../styles/colors';
import {useSelector} from 'react-redux';

const HomeScreen = ({route, navigation}) => {
  // const { username } = route.params || { username: 'Guest' };

  // const user = useSelector((state) => state.auth.user);
  const user = useSelector(state => state.auth && state.auth.user);
  // if (!user) {
  //   return <Text>Loading...</Text>; // or handle it with a default value
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        s
        <Text style={styles.title}>
          Welcome, {user ? user.name : 'Guest'}!{' '}
        </Text>
        <Text style={styles.title}>What is in your Meal Mind?</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('TodaysRecipe')}>
          <Text style={styles.boxTxt}>Today’s Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('ChooseMember')}>
          <Text style={styles.boxTxt}>Today’s Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('SurpriseMe')}>
          <Text style={styles.boxTxt}>Surprise Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  optionsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 6,
    marginTop: 20,
  },
  box: {
    width: 264,
    height: 155,
    marginVertical: 20,
    backgroundColor: colors.box,
    borderRadius: 16,
    justifyContent: 'center',
  },
  boxTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
});

export default HomeScreen;
