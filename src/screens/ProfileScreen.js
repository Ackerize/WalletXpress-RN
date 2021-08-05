import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'

const ProfileScreen = () => {
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<View style={styles.background}>
			<FocusAwareStatusBar
				barStyle="dark-content"
				backgroundColor="white"
			/>
			<TouchableOpacity onPress={handleLogout}>
				<Text style={styles.logout}>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ProfileScreen

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'white',
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logout: {
		borderRadius: 10,
		backgroundColor: 'red',
		color: 'white',
		fontWeight: 'bold',
		width: 100,
		paddingVertical: 10,
        textAlign: 'center',
	},
})
