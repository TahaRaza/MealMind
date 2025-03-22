import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'AIzaSyC4gNjfLEet01F_dpJA_4SsBKsXHZxVYi8',
});

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSelected, setSelection] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!isSelected) {
      Alert.alert('Privacy Policy', 'You must accept the Privacy Policy.');
      return;
    }
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await userCredential.user.updateProfile({displayName: username});
      Alert.alert('Success', 'Account created successfully!');
      console.log('User registered:', userCredential.user);
      navigation.navigate('SignIn', {username: username});
    } catch (error) {
      Alert.alert('Sign-Up Error', error.message);
      console.error('Error signing up:', error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      console.log('Google Sign-In Successful');
      Alert.alert('Success', 'Signed in with Google!');
    } catch (error) {
      Alert.alert('Google Sign-In Error', error.message);
      console.error(error);
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
