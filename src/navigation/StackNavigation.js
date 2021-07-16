import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppNavigation from './AppNavigation'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator()

const isSignedIn = false

const StackNavigation = () => {
	return (
		<Stack.Navigator>
			{!isSignedIn ? (
				<>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerTransparent: true, title: '' }}
					/>
					<Stack.Screen
						name="Register"
						component={RegisterScreen}
						options={{ headerTransparent: true, title: '', headerLeft: ()=> null, }}
					/>
				</>
			) : (
				<Stack.Screen
					name="Home"
					component={AppNavigation}
					options={{ headerTransparent: true, title: '' }}
				/>
			)}
		</Stack.Navigator>
	)
}

export default StackNavigation
