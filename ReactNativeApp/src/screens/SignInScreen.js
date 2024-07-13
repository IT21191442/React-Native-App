import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { auth } from '../utils/firebase';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          Alert.alert('Error', 'Invalid email or password');
        } else {
          Alert.alert('Error', error.message);
        }
        console.error(error);
      });
  };

  const onForgotPasswordPressed = () => {
    // Implement forgot password functionality
    console.log('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign In</Text>

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton title="Sign In" onPress={onSignInPressed} />

        <CustomButton
          title="Forgot password?"
          onPress={onForgotPasswordPressed}
          style={styles.forgotPasswordButton}
        />

        <CustomButton
          title="Don't have an account? Create one"
          onPress={onSignUpPress}
          style={styles.signUpButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent',
  },
  signUpButton: {
    backgroundColor: 'transparent',
  },
});

export default SignInScreen;