import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to SignIn after 1 seconds
    const timer = setTimeout(() => {
      navigation.replace('SignIn'); // Replace SplashScreen with SignIn
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/MealMind.png')} // E:\MealMind\assets\images\MealMind.png
        style={styles.logo}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 231,
    height: 231,
  },
});
