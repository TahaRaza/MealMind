import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import colors from '../styles/colors';

const DishDetailsScreen = ({route}) => {
  const {recipe} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Image source={{uri: recipe.image}} style={styles.img} />
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.subtitle}>Cuisine: {recipe.cuisine}</Text>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            • {ingredient.name}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Recipe Steps:</Text>
        {recipe.recipeSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={styles.stepTitle}>
              {step.step}. {step.title}
            </Text>
            {step.details.map((detail, idx) => (
              <Text key={idx} style={styles.stepDetail}>
                - {detail}
              </Text>
            ))}
          </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  img: {
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: 20,
    width: '100%',
    height: 200,
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
  stepContainer: {
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepDetail: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 2,
  },
  allergy: {
    fontSize: 16,
    marginVertical: 5,
    color: 'red',
  },
});

export default DishDetailsScreen;
