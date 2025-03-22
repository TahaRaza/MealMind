import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';

const ResultsScreen = ({route}) => {
  const {matchingRecipes} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      <ScrollView contentContainerStyle={styles.resultsList}>
        {matchingRecipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={styles.resultItem}
            onPress={() => navigation.navigate('DishDetails', {recipe})}>
            <Text style={styles.resultTitle}>{recipe.name}</Text>
            <Text style={styles.resultCuisine}>{recipe.cuisine}</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  resultsList: {
    flexDirection: 'column',
  },
  resultItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    borderColor: '#8B4726',
    borderWidth: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultCuisine: {
    fontSize: 14,
    color: '#555',
  },
});

export default ResultsScreen;
