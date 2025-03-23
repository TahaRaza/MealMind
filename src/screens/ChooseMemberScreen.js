// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
// import { useSelector } from 'react-redux';

// const ChooseMemberScreen = ({ navigation }) => {
//   const members = useSelector((state) => state.members.members);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFE5BA' }}>
//       <ScrollView>
//       <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#622906', marginTop: 30 }}>Who is in for Today's Meal?</Text>
//       <FlatList
//         data={members}
//         numColumns={3}
//         scrollEnabled={true}

//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity>
//           <View style={{ margin: 20, alignItems: 'center', backgroundColor: '#933B05D4', width: 100, height: 100, borderRadius: 20 }}>
//             <Image source={item.avatar} style={{ width: 80, height: 80 }} />
//             <Text>{item.name}</Text>
//           </View>
//           </TouchableOpacity>
//         )}
//       />
//       <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
//         <View style={{ width: 80, height: 80, backgroundColor: '#622906', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20 }}>
//           <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
//         </View>
//       </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default ChooseMemberScreen;



// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: colors.primary,
// //   },
// //   title: {
// //       fontSize: 24,
// //       fontWeight: 'bold',
// //       justifyContent: 'center',
// //       alignSelf: 'center',
// //       marginTop: 50,
// //       color: colors.text,
// //     },
// // });




import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');
const MEMBER_CARD_SIZE = width * 0.38;
const CONTAINER_PADDING = width * 0.04;

const ChooseMemberScreen = ({navigation}) => {
  const members = useSelector(state => state.members.members);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Who's Joining Today's Meal?</Text>

      <View style={styles.gridContainer}>
        {members.map((member, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={styles.memberCardContainer}
            onPress={() => navigation.navigate('IngredientSelector')}
            activeOpacity={0.9}>
            <View style={styles.avatarContainer}>
              <Image
                source={member.avatar}
                style={styles.avatarImage}
                resizeMode="contain"
              />
              <View style={styles.nameBadge}>
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMember')}
        activeOpacity={0.8}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFE5BA',
    padding: CONTAINER_PADDING,
    paddingTop: width * 0.08,
    paddingBottom: width * 0.15,
  },
  title: {
    fontSize: width * 0.065,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'center',
    color: '#622906',
    marginBottom: width * 0.08,
    letterSpacing: 0.5,
    fontWeight: '700',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: CONTAINER_PADDING * 0.5,
  },
  memberCardContainer: {
    width: MEMBER_CARD_SIZE,
    marginBottom: width * 0.06,
  },
  avatarContainer: {
    backgroundColor: 'rgba(147, 59, 5, 0.85)',
    width: '100%',
    aspectRatio: 1,
    borderRadius: width * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.03,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  avatarImage: {
    width: '75%',
    height: '75%',
    borderRadius: width * 0.03,
  },
  nameBadge: {
    position: 'absolute',
    bottom: -width * 0.015,
    backgroundColor: '#933B05',
    paddingVertical: width * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.03,
    elevation: 2,
  },
  memberName: {
    color: 'white',
    fontSize: width * 0.034,
    fontWeight: '600',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: width * 0.06,
    alignSelf: 'center',
    width: MEMBER_CARD_SIZE * 0.7,
    aspectRatio: 1,
    backgroundColor: '#622906',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: MEMBER_CARD_SIZE * 0.35,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: MEMBER_CARD_SIZE * 0.35,
    fontWeight: '300',
    marginTop: -MEMBER_CARD_SIZE * 0.05,
  },
});

export default ChooseMemberScreen;
