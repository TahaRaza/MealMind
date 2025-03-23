import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from '../redux/memberSlice';


const {width, height} = Dimensions.get('window');

const AddMemberScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [allergies, setAllergies] = useState('');
  const [favourite, setFavourite] = useState('');
  const [dislikes, setDislikes] = useState('');
  const selectedAvatar = useSelector((state) => state.members.selectedAvatar);
  const dispatch = useDispatch();

  const handleAddMember = () => {
    if (name && selectedAvatar && allergies && favourite && dislikes) {
      dispatch(addMember({ name, avatar: selectedAvatar, allergies, favourite, dislikes, }));
      navigation.navigate('ChooseMember');
    }
  };

  return (
    // <ScrollView>
    // <View style={{ flex: 1, backgroundColor: '#FFE5BA' }}>
    //   <TouchableOpacity onPress={() => navigation.navigate('ChooseAvatarScreen')}>
    //     {selectedAvatar ? (
    //       <Image source={selectedAvatar} style={{ width: 150, height: 180, backgroundColor: '#933B05', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, borderRadius: 30 }} />
    //     ) : (
    //       <View style={{ width: 200, height: 100, backgroundColor: '#933B05', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, borderRadius: 30 }}>
    //         <Text style={{ fontSize: 25 ,fontWeight: 'bold', color: 'black', alignSelf: 'center' }}>Select Avatar</Text>
    //       </View>
    //     )}
    //   <Text style={{ fontSize: 20 ,fontWeight: '700', color: '#622906', left: 30, marginBottom: -15,marginTop: 30 }}>Add Name</Text>
    //   </TouchableOpacity>
    //   <TextInput
    //     placeholder="Enter Name"
    //     placeholderTextColor={'#622906'}
    //     value={name}
    //     onChangeText={setName}
        
    //     style={{ borderWidth: 3, borderColor: '#622906', padding: 10, margin: 30 }}
    //   />
      
    //   <Text style={{ fontSize: 20 ,fontWeight: '700', color: '#622906', left: 30, marginBottom: -15,marginTop: 10 }}>Add Allergies</Text>\
    //   <TextInput
    //     placeholder="Enter Allergies"
    //     placeholderTextColor={'#622906'}
    //     value={allergies}
    //     onChangeText={setallergies}
        
    //     style={{ borderWidth: 3, borderColor: '#622906', padding: 10, margin: 30 }}
    //   />
    //   <Text style={{ fontSize: 20 ,fontWeight: '700', color: '#622906', left: 30, marginBottom: -15,marginTop: 10 }}>Add Most Favourite Meal</Text>\
    //   <TextInput
    //     placeholder="Enter Most Favourite Meal"
    //     value={favourite}
    //     onChangeText={setfavourite}
    //     placeholderTextColor={'#622906'}
    //     style={{ borderWidth: 3, borderColor: '#622906', padding: 10, margin: 30 }}
    //   />
    //   <Text style={{ fontSize: 20 ,fontWeight: '700', color: '#622906', left: 30, marginBottom: -15,marginTop: 10 }}>Add Least Favourite Meal</Text>\
    //   <TextInput
    //     placeholder="Enter Least Favourite Meal"
    //     value={dislikes}
    //     onChangeText={setdislikes}
    //     placeholderTextColor={'#622906'}
    //     style={{ borderWidth: 3, borderColor: '#622906', padding: 10, margin: 30 }}
    //   />
    //   {/* <Button title="Add Member" onPress={handleAddMember} style={{ width: 10 }} /> */}
    //   <Pressable onPress={handleAddMember} style={{ backgroundColor: '#622906', padding: 10, margin: 40, borderRadius: 10, alignItems: 'center', height: 70, justifyContent: 'center' }}>
    //     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>ADD</Text>
    //   </Pressable>
    // </View>
    // </ScrollView>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseAvatarScreen')}
          style={styles.avatarContainer}>
          {selectedAvatar ? (
            <Image source={selectedAvatar} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>Select Avatar</Text>
            </View>
          )}
        </TouchableOpacity>

        <FormField
          label="Add Name"
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />

        <FormField
          label="Add Allergies"
          placeholder="Enter Allergies"
          value={allergies}
          onChangeText={setAllergies}
        />
        {/* instead of this line add multi options dropdown with names 'dairy', 'nut', 'gluten', 'soy' */}

        <FormField
          label="Add Most Favourite Meal"
          placeholder="Enter Most Favourite Meal"
          value={favourite}
          onChangeText={setFavourite}
        />

        <FormField
          label="Add Least Favourite Meal"
          placeholder="Enter Least Favourite Meal"
          value={dislikes}
          onChangeText={setDislikes}
        />

        <Pressable
          onPress={handleAddMember}
          style={({pressed}) => [
            styles.addButton,
            pressed && styles.buttonPressed,
          ]}>
          <Text style={styles.buttonText}>ADD MEMBER</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const FormField = ({label, placeholder, value, onChangeText}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'#7A4B23'}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      autoCorrect={false}
      returnKeyType="done"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFE5BA',
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginVertical: height * 0.03,
  },
  avatarImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 10,
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  avatarPlaceholder: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 10,
    backgroundColor: '#933B05',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  avatarPlaceholderText: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#FFE5BA',
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#622906',
    marginBottom: height * 0.01,
    marginLeft: width * 0.02,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#622906',
    borderRadius: width * 0.02,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    color: '#622906',
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#622906',
    borderRadius: width * 0.02,
    paddingVertical: height * 0.025,
    marginTop: height * 0.04,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFE5BA',
    fontSize: width * 0.045,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
});
export default AddMemberScreen;
