import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Meal Mind</Text>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          title="Sign Up"
          style={{styles: styles.signupButton}}
          onPress={() => navigation.navigate('SignUp')}
        />
        <CustomButton
          title="Sign In"
          style={{styles: styles.signinButton}}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  signupButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
