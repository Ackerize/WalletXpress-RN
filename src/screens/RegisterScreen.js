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
import WalletImg from '../assets/images/wallet.png'

const RegisterScreen = ({ navigation }) => {

  const onSignIn = () => {
    navigation.navigate('Login');
  };

    return (
        <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.top}>
        <Image source={WalletImg} style={styles.img} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.title}>
          <Title style={styles.titleText}>Create account</Title>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput placeholder="Username" style={styles.input} />
        </View>
        <View style={[styles.inputContainer, styles.password]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btnContainer, styles.textContainer]}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity style={styles.linkContainer} onPress={onSignIn}>
            <Text style={styles.link}>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    top: {
      height: '42%',
      display: 'flex',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: '65%',
      height: '65%',
    },
    title: {
      marginBottom: 15,
    },
    titleText: {
      fontFamily: 'Rubik-SemiBold',
      fontSize: 30,
      color: '#389AF5',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    bottom: {
      height: '60%',
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
    password: {
        marginBottom: 20,
    },
    inputContainer: {
      marginVertical: 7,
    },
    btnContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
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
    },
    text: {
      fontFamily: 'Rubik-Regular',
      color: '#3894F5',
      paddingRight: 2,
      fontSize: 15,
      paddingTop: 15
    },
    link: {
      color: '#3894F5',
      fontFamily: 'Rubik-Bold',
      fontSize: 16,
      paddingLeft: 5,
      paddingTop: 15
    },
  });
  
