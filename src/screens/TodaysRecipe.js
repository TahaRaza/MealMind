import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {recipes} from '../constants/recipesData2'; // Import your recipes data

const TodaysRecipe = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    const matchingRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    console.log('Matching Recipes:', matchingRecipes); // Debug log
    navigation.navigate('Results', {
      matchingRecipes,
      updateHistory: addToHistory,
    });
  };

  const addToHistory = recipe => {
    setHistory(prevHistory => {
      // Avoid duplicates
      if (!prevHistory.some(item => item.name === recipe.name)) {
        return [recipe, ...prevHistory];
      }
      return prevHistory;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletxt}>What do you have in Mind?</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          textAlign="left"
          onSubmitEditing={handleSearch} // Trigger search on submit
        />
      </View>
      <View style={styles.historyContainer}>
        <View style={styles.historyClear}>
          <Text style={styles.sectionTitle}>History</Text>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setHistory([])}>
            <Text style={styles.clearButtonText}>clear all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.historyList}>
          {history.map((recipe, index) => (
            <View key={index} style={styles.historyItem}>
              <Image
                source={{uri: recipe.image}} // Assuming each recipe has an image URL
                style={styles.historyImage}
              />
              <Text style={styles.historyText}>{recipe.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  titlecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titletxt: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  historyContainer: {
    flex: 6,
  },
  historyClear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  clearButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  clearButtonText: {
    color: '#007BFF',
    fontSize: 14,
  },
  historyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  historyItem: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
  },
  historyImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text,
    fontWeight: 'bold',
  },
});

export default TodaysRecipe;
