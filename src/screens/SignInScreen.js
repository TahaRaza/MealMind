import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// Configure Google Sign-In once at the top
GoogleSignin.configure({
  webClientId: 'AIzaSyC4gNjfLEet01F_dpJA_4SsBKsXHZxVYi8',
});

const SignInScreen = ({route, navigation}) => {
  const {username} = route.params || {username: 'Guest'};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home', {username});
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      console.log('Google Sign-In Successful');
      Alert.alert('Success', 'Signed in with Google!');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Google Sign-In Error', error.message);
      console.error(error);
    }
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Image
          source={require('../assets/images/MealMind.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.title}>Sign In</Text>
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
        <CustomButton
          title={loading ? 'Signing in...' : 'SIGN IN'}
          style={styles.button}
          onPress={handleLogin}
        />
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          DON'T HAVE AN ACCOUNT? SIGN UP
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'column',
    marginTop: 50,
  },
  container3: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
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
  button: {
    marginVertical: 10,
    width: '70%',
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
