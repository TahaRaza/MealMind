// import React from 'react';
// import { View, TouchableOpacity, Image } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { setAvatar } from '../redux/memberSlice';

// const avatars = [
//   require('../assets/images/Avatar1.png'),
//   require('../assets/images/Avatar2.png'),
//   require('../assets/images/Avatar3.png'),
// ];

// const ChooseAvatarScreen = ({ navigation }) => {
//   const dispatch = useDispatch();

//   const selectAvatar = (avatar) => {
//     dispatch(setAvatar(avatar));
//     navigation.goBack();
//   };

//   return (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//       {avatars.map((avatar, index) => (
//         <TouchableOpacity key={index} onPress={() => selectAvatar(avatar)}>
//           <Image source={avatar} style={{ width: 100, height: 100 }} />
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default ChooseAvatarScreen;

















import React from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAvatar} from '../redux/memberSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const avatars = [
  {id: 1, source: require('../assets/avatars/Avatar1.png')},
  {id: 2, source: require('../assets/avatars/Avatar3.png')},
  {id: 3, source: require('../assets/avatars/anya.png')},
  {id: 4, source: require('../assets/avatars/boy1.png')},
  {id: 5, source: require('../assets/avatars/hijabi.png')},
  {id: 6, source: require('../assets/avatars/old-man.png')},
  {id: 7, source: require('../assets/avatars/man1.png')},
  // Add more avatars as needed
];

const ChooseAvatarScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const avatarSize = width * 0.3;
  const spacing = width * 0.05;

  const handleSelectAvatar = avatar => {
    dispatch(setAvatar(avatar.source));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          android_ripple={{color: '#FFF', borderless: true}}>
          <Icon name="arrow-back" size={24} color="#622906" />
        </Pressable>
        <Text style={styles.title}>Choose Avatar</Text>
      </View>

      {/* Avatar Grid */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {avatars.map(avatar => (
          <Pressable
            key={avatar.id}
            onPress={() => handleSelectAvatar(avatar)}
            style={({pressed}) => [
              styles.avatarContainer,
              {
                width: avatarSize,
                height: avatarSize,
                margin: spacing,
                opacity: pressed ? 0.8 : 1,
              },
            ]}>
            <Image
              source={avatar.source}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5BA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE3D5',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#622906',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatarImage: {
    width: '80%',
    height: '80%',
  },
});

export default ChooseAvatarScreen;
