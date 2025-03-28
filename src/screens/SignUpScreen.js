import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import '@react-native-firebase/app';
import auth, {
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/authSlice';
import colors from '../styles/colors';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '691846190946-7jvfb9dkhrhh6qj9iuk3k9o4lpu8hpbs.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  // const handleSignUp = async () => {
  //   console.log("1");
  //   if (!email || !password || !name) {
  //     Alert.alert.Alert.alert('Error', 'Please fill in all fields.');
  //     return;
  //   }
  //   console.log("2");
  //   if (!isPrivacyAccepted) {
  //     Alert.alert.Alert.alert('Privacy Policy', 'You must accept the Privacy Policy.');
  //     return;
  //   }
  //   console.log("3");
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     console.log("4");
  //     await userCredential.user.updateProfile({ displayName: name });
  //     console.log("5");
  //     Alert.alert.Alert.alert('Success', 'Account created successfully!');
  //     console.log("6");
  //     console.log('User registered:', userCredential.user);
  //     console.log("7");
  //     navigation.navigate('SignIn');
  //   } catch (error) {
  //     console.log("8");
  //     Alert.alert.Alert.alert('Sign-Up Error', error.message);
  //     console.log("9");
  //     console.error('Error signing up:', error.message);
  //     console.log("10");
  //   }
  // };

  // const handleSignUp = async () => {
  //   // Corrected condition to use 'username' instead of 'name'
  //   if (!email || !password || !username) {
  //     Alert.alert('Error', 'Please fill in all fields.');
  //     return;
  //   }
  //   setLoading(true);
  //   // Corrected to check 'isSelected' instead of 'isPrivacyAccepted'
  //   if (!isSelected) {
  //     Alert.alert('Privacy Policy', 'You must accept the Privacy Policy.');
  //     return;
  //   }

  //   try {
  //     const userCredential = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     const userData = {
  //       name: userCredential.user.displayName || 'User', // Firebase might not return a name
  //       setemail: userCredential.user.email,
  //     };
  //     dispatch(setUser(userData));
  //     // Corrected to use 'username' state variable
  //     await userCredential.user.updateProfile({displayName: username});

  //     Alert.alert('Success', 'Account created successfully!');
  //     navigation.navigate('SignIn');
  //   } catch (error) {
  //     Alert.alert('Sign-Up Error', error.message);
  //   }
  //   setLoading(false);
  // };

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!isSelected) {
      Alert.alert('Privacy Policy', 'You must accept the Privacy Policy.');
      return;
    }

    // setLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await user.updateProfile({displayName: username});

      // Dispatch user info to Redux
      dispatch(setUser({name: username, email: user.email}));

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Sign-Up Error', error.message);
    }
    // setLoading(false);
  };

  const signInWithGoogle = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();
      const {data} = signInResult;

      if (!data.idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);

      console.log('User signed in with Google!');
      Alert.alert.Alert.alert('Success', 'Signed in with Google!');
      navigation.navigate('SignIn');
    } catch (error) {
      console.log('Google Sign-In Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/MealMind.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.privacyContainer}>
          <Text style={styles.policy}>I have read the Privacy Policy</Text>
          <TouchableOpacity
            onPress={() => setSelection(!isSelected)}
            style={[styles.checkbox, isSelected && styles.checked]}>
            {isSelected && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Sign Up"
          style={styles.button}
          onPress={handleSignUp}
        />
        <View style={styles.separator}>
          <Text style={styles.separatorText}>OR</Text>
        </View>
        <CustomButton
          title="Sign Up with Google"
          style={styles.button}
          onPress={signInWithGoogle}
        />
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Already have an account? Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    width: '70%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
  policy: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '400',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.text,
  },
  checkmark: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 10,
    width: '70%',
  },
  separator: {
    marginVertical: 10,
    alignItems: 'center',
  },
  separatorText: {
    color: colors.text,
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: colors.text,
  },
  logo: {
    width: 231,
    height: 231,
  },
});
