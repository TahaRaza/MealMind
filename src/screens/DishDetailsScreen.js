import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const DishDetailsScreen = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Cuisine: {recipe.cuisine}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          • {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Recipe Steps:</Text>
      {recipe.recipeSteps.map((step, index) => (
        <Text key={index} style={styles.step}>
          {index + 1}. {step}
        </Text>
      ))}
      {recipe.allergies.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>Allergies:</Text>
          {recipe.allergies.map((allergy, index) => (
            <Text key={index} style={styles.allergy}>
              • {allergy}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 5,
  },
  step: {
    fontSize: 16,
    marginVertical: 5,
  },
  allergy: {
    fontSize: 16,
    marginVertical: 5,
    color: 'red',
  },
});

export default DishDetailsScreen;
