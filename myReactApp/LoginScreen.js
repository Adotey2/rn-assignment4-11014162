import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#AFB0B6"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#AFB0B6"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <Image source={require('./assets/apple.png')} style={styles.socialIcon} />
        <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
      </View>
      <Text style={styles.register}>Haven't an account? Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#356899',
    textAlign: 'center',
    marginTop: 106,
    marginBottom: 41,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0D0D26',
    textAlign: 'left',
    width: '100%',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0D0D26',
    opacity: 0.4,
    textAlign: 'left',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 52,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
    width: '100%',
  },
  loginButton: {
    height: 56,
    backgroundColor: '#356899',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  orContinue: {
    fontSize: 13,
    fontWeight: '400',
    color: '#AFB0B6',
    textAlign: 'center',
    marginTop: 40,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '60%',
  },
  socialIcon: {
    width: 28,
    height: 28,
  },
  register: {
    fontSize: 14,
    fontWeight: '400',
    color: '#AFB0B6',
    textAlign: 'center',
    marginTop: 40,
  },
});

export default LoginScreen;
