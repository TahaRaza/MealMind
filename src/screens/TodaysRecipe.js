import React from 'react';
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

const TodaysRecipe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletxt}>What do you have in Mind?</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          textAlign="left"
        />
      </View>
      <View style={styles.historyContainer}>
        <View style={styles.historyClear}>
          <Text style={styles.sectionTitle}>History</Text>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>clear all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.historyList}>
          <View style={styles.historyItem}>
            <Image
              source={require('E:/MealMind/src/assets/images/CB.png')} // Replace with actual image URL
              style={styles.historyImage}
            />
            <Text style={styles.historyText}>Chicken Biryani</Text>
          </View>
          <View style={styles.historyItem}>
            <Image
              source={require('E:/MealMind/src/assets/images/FF.png')} // Replace with actual image URL
              style={styles.historyImage}
            />
            <Text style={styles.historyText}>French Fries</Text>
          </View>
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
