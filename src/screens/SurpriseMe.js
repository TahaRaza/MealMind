import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import colors from '../styles/colors';
import {recipes} from '../constants/recipesData2'; // Adjust the path as needed

const SurpriseMe = () => {
  // Generate a random index between 0 and the length of the recipes array
  const randomIndex = Math.floor(Math.random() * recipes.length);
  // Get a random recipe using the random index
  const randomRecipe = recipes[randomIndex];
  console.log(randomRecipe);

  const img = 'url:' + randomRecipe.image;
  console.log(img);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ingredientsList}>
        <Text style={styles.title}>Surprise Me</Text>
        <Image source={{img}} style={styles.titleImg} />
        <Text style={styles.subtitle}>{randomRecipe.name}</Text>

        <Text style={styles.heading}>INGREDIENTS</Text>
        {randomRecipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            • {ingredient.name} - {ingredient.quantity}
          </Text>
        ))}

        <Text style={styles.heading}>RECIPE STEPS</Text>
        {randomRecipe.recipeSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            {step.details.map((detail, detailIndex) => (
              <Text key={detailIndex} style={styles.stepDetail}>
                • {detail}
              </Text>
            ))}
          </View>
        ))}
        <Text style={styles.heading}>ALLERGIES</Text>
        <Text style={styles.allergies}>
          {randomRecipe.allergies.join(', ')}
        </Text>
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
  titleImg: {
    alignSelf: 'center',
    width: 300,
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
    marginTop: 10,
  },
  ingredient: {
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'sans-serif',
  },
  stepsList: {
    marginTop: 10,
  },
  stepContainer: {
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepDetail: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: 'sans-serif',
  },
  allergies: {
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'sans-serif',
    color: 'red',
  },
});

export default SurpriseMe;
