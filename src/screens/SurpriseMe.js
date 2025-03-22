import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import colors from '../styles/colors';

const SurpriseMe = (navigation, route) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Surprise Me</Text>
      <Image
        source={require('E:/MealMind/src/assets/images/CB.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Chicken Biryani</Text>
      <Text style={styles.heading}>INGREDIENTS</Text>
      <ScrollView style={styles.ingredientsList}>
        <Text style={styles.ingredient}>• 3/2 cup Vegetable oil</Text>
        <Text style={styles.ingredient}>• 3 Medium onions, chopped fine</Text>
        <Text style={styles.ingredient}>
          • 3 Cloves of Garlic, chopped fine
        </Text>
        <Text style={styles.ingredient}>
          • 1-inch piece of Ginger, chopped fine
        </Text>
        <Text style={styles.ingredient}>• 1/4 lb Boneless chicken</Text>
        <Text style={styles.ingredient}>• 8 Brown Cardamom pods</Text>
        <Text style={styles.ingredient}>• 1/2 teaspoon Turmeric</Text>
        <Text style={styles.ingredient}>• 1/8 Whole Black Peppercorns</Text>
        <Text style={styles.ingredient}>• 2 teaspoons Dried Coriander</Text>
        <Text style={styles.ingredient}>• 2 teaspoons Garam Masala</Text>
        <Text style={styles.ingredient}>• 2 teaspoons White poppy seeds</Text>
        <Text style={styles.ingredient}>• 2 teaspoons Fresh lemon juice</Text>
        <Text style={styles.ingredient}>• 3/2 teaspoons Cayenne Pepper</Text>
        <Text style={styles.ingredient}>• 1/2 teaspoon Cumin</Text>
        <Text style={styles.ingredient}>• 1/2 teaspoon Salt</Text>
        <Text style={styles.ingredient}>• 2 teaspoons Tomato Paste</Text>
        <Text style={styles.ingredient}>• 1 cup Water</Text>
        <Text style={styles.ingredient}>• 3/4 cup Plain yogurt</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 32,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#d2b48c',
    padding: 5,
    borderRadius: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredientsList: {
    hideScrollbar: true,
  },
  ingredient: {
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'sans-serif',
  },
});

export default SurpriseMe;
