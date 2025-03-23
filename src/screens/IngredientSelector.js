import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../styles/colors';
import {categories, allItems} from '../constants/ingredientData2.js';
import {useNavigation} from '@react-navigation/native';
import {recipes} from '../constants/recipesData2.js'; // Import your recipes data

const IngredientSelector = () => {
  const [activeCategory, setActiveCategory] = useState('Spices');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();

  const filteredItems = searchQuery
    ? Object.values(allItems)
        .flat()
        .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
    : allItems[activeCategory];

  const toggleSelection = item => {
    setSelectedItems(prevSelectedItems => {
      const newSelectedItems = prevSelectedItems.includes(item)
        ? prevSelectedItems.filter(i => i !== item)
        : [...prevSelectedItems, item];
      console.log('Selected Items:', newSelectedItems); // Debug log
      return newSelectedItems;
    });
  };

  const handleSearchDishes = () => {
    const matchingRecipes = recipes.filter(recipe =>
      selectedItems.some(item =>
        recipe.ingredients.some(ingredient =>
          ingredient.name.toLowerCase().includes(item.toLowerCase()),
        ),
      ),
    );
    console.log('Matching Recipes:', matchingRecipes); // Debug log
    navigation.navigate('Results', {matchingRecipes});
  };

  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>SELECT INGREDIENTS</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
          textAlign="left"
        />
        <View style={styles.categoryContainer}>
          <ScrollView horizontal style={styles.categoryScroll}>
            {categories.map(category => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  {
                    backgroundColor:
                      activeCategory === category ? '#8B4726' : '#5D3F31',
                  },
                ]}
                onPress={() => {
                  setActiveCategory(category);
                  setSearchQuery(''); // Clear search when category is selected
                }}>
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.itemContainer}>
          <ScrollView contentContainerStyle={styles.itemScroll}>
            {filteredItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.itemButton,
                  {
                    backgroundColor: selectedItems.includes(item)
                      ? '#654321' // Darker color for selected items
                      : '#8B4726',
                    borderColor: selectedItems.includes(item)
                      ? '#FFD700'
                      : '#8B4726',
                    borderWidth: 2,
                  },
                ]}
                onPress={() => toggleSelection(item)}>
                <Text style={styles.itemButtonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[
            styles.searchDishesButton,
            {opacity: selectedItems.length > 0 ? 1 : 0.5},
          ]}
          disabled={selectedItems.length === 0}
          onPress={handleSearchDishes}>
          <Text style={styles.searchDishesButtonText}>Search Dishes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deselectAllButton}
          onPress={handleDeselectAll}>
          <Text style={styles.deselectAllButtonText}>Deselect All</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    marginVertical: 10,
    textAlign: 'center',
    color: colors.text,
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryScroll: {
    flexDirection: 'row',
  },
  categoryButton: {
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
  },
  itemScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemButton: {
    width: '48%', // Adjust width to control number of items per row
    marginVertical: 5,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: '48%',
  },
  itemButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  searchDishesButton: {
    backgroundColor: colors.box,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  searchDishesButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deselectAllButton: {
    backgroundColor: '#FF6347', // Tomato color for deselect button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  deselectAllButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IngredientSelector;
