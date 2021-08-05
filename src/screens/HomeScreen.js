import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
})
