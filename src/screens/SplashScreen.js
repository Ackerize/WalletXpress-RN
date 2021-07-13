import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import imageSplash from '../assets/images/inicio.png';
import LottieView from 'lottie-react-native';
import RightArrow from '../assets/animations/rightarrow';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.top}>
        <Image source={imageSplash} style={styles.imageSplash} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.container}>
          <Title style={styles.title}>Easiest way to manage your wallet</Title>
          <Text style={styles.paragraph}>
            Connect your wallet to your friends family brand and experience
          </Text>
          <TouchableOpacity style={styles.btnContainer}>
            <View style={styles.btn}>
              <LottieView
                source={RightArrow}
                style={styles.arrow}
                autoPlay
                loop
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#6C5CE8',
    height: '100%',
  },
  imageSplash: {
    width: '80%',
    height: '80%',
  },
  top: {
    height: '62%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '38%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    width: '100%',
  },
  container: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 33,
    marginTop: 35,
    fontWeight: 'bold',
    lineHeight: 42,
    fontFamily: 'Rubik',
    color: '#0F1447',
  },
  paragraph: {
    fontSize: 18,
    color: '#C7C7C7',
    fontWeight: 'bold',
    paddingTop: 15,
    fontFamily: 'Rubik',
  },
  btn: {
    backgroundColor: '#5CCCEF',
    borderRadius: 85 / 2,
    width: 85,
    height: 85,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    height: 60,
    width: 60,
    zIndex: 100,
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
});
