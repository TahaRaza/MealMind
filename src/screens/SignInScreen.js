import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/authSlice';

const SignInScreen = ({route, navigation}) => {
  // const { username } = route.params || { username: 'Guest' };
  // const [email, setEmail] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '691846190946-7jvfb9dkhrhh6qj9iuk3k9o4lpu8hpbs.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please enter both email and password');
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const userCredential = await auth().signInWithEmailAndPassword(email, password);
  //     // const user = userCredential.user;
  //     // dispatch(setUser(user));
  //     // const userData = {
  //     //   name: userCredential.user.displayName || 'User', // Firebase might not return a name
  //     //   setemail: userCredential.user.email,
  //     // };
  //     // dispatch(setUser(userData));
  //     Alert.alert('Success', 'Logged in successfully');
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     Alert.alert('Login Failed', error.message);
  //   }
  //   setLoading(false);
  // };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      // Dispatch user info to Redux
      dispatch(setUser({name: user.displayName || 'User', email: user.email}));

      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
    setLoading(false);
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     // Check if your device supports Google Play
  //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //     // Get the users ID token
  //     const signInResult = await GoogleSignin.signIn();
  //     const { data } = signInResult;

  //     if (!data.idToken) {
  //       throw new Error('No ID token found');
  //     }

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

  //     // Sign-in the user with the credential
  //     await auth().signInWithCredential(googleCredential);

  //     console.log('User signed in with Google!');
  //     Alert.alert('Success', 'Signed in with Google!');

  //     // navigation.navigate('ChooseMember');
  //   } catch (error) {
  //     console.log('Google Sign-In Error:', error);
  //   }
  // };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const signInResult = await GoogleSignin.signIn();
      const {idToken} = signInResult;

      if (!data.idToken) {
        throw new Error('No ID token found');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential.user;

      // Dispatch user info to Redux
      dispatch(setUser({name: user.displayName || 'User', email: user.email}));

      Alert.alert('Success', 'Signed in with Google!');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Google Sign-In Error:', error);
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

        <View style={styles.separator}>
          <Text style={styles.separatorText}>OR</Text>
        </View>

        <CustomButton
          title={loading ? 'Signing in...' : 'Sign in with Google'}
          style={styles.button}
          onPress={signInWithGoogle}
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
