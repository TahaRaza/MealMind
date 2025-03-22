import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const CustomButton = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.text, // Dark background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.primary, // Cream text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
