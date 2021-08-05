import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Title } from 'react-native-paper';
import CarouselCards from '../components/CarouselCards';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const cards = [{
    name: 'Rudi Vallecios',
    balance: '100.00',
    bgColor: "#6558B7"
}, {
    name: 'Juan Pablo Escobar',
    balance: '200.00',
    bgColor: "#0047cc"
}, {
    name: 'Cristian Mundo',
    balance: '320.00',
    bgColor: "#F9AB66"
}]

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
            <Title style={styles.title}>My cards</Title>
            <View style={styles.container}>
                <CarouselCards data={cards} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Rubik-SemiBold',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
