import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const HistoryScreen = () => {
    return (
        <View style={styles.background}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
            <Text>HistoryScreen</Text>
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
})
