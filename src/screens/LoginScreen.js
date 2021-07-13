import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { Title, Text } from 'react-native-paper';
import WelcomeImg from '../assets/images/welcome.png';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.top}>
        <Image source={WelcomeImg} style={styles.img} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.title}>
          <Title style={styles.titleText}>Welcome back!</Title>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput placeholder="Username" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={styles.btn}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btnContainer, styles.textContainer]}>
          <Text style={styles.text}>New Here?</Text>
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.link}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  top: {
    height: '45%',
    display: 'flex',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '75%',
    height: '75%',
  },
  title: {
    marginBottom: 20,
  },
  titleText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 30,
    color: '#389AF5',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  bottom: {
    height: '55%',
    marginTop: -25,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderRadius: 50,
    borderColor: '#389AF5',
    borderWidth: 1.7,
    paddingHorizontal: 25,
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
  },
  label: {
    marginBottom: 8,
    color: '#389AF5',
    fontSize: 17,
  },
  inputContainer: {
    marginVertical: 8,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 50,
    backgroundColor: '#3894F5',
    paddingHorizontal: 50,
    paddingVertical: 13,
    color: '#fff',
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
  },
  textContainer: {
    flexDirection: 'row',
    fontFamily: 'Rubik-Regular',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  text: {
    fontFamily: 'Rubik-Regular',
    color: '#3894F5',
    paddingRight: 2,
    fontSize: 15,
  },
  link: {
    color: '#3894F5',
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    paddingLeft: 5,
  },
});
