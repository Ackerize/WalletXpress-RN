import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

let isSignedIn = false;

const StackNavigation = () => {
	const { loading } = useSelector(state => state.ui);
	return (
		<Stack.Navigator>
			{!loading ? (
				!isSignedIn ? (
					<>
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{ headerTransparent: true, title: '' }}
						/>
						<Stack.Screen
							name="Register"
							component={RegisterScreen}
							options={{
								headerTransparent: true,
								title: '',
								headerLeft: () => null,
							}}
						/>
					</>
				) : (
					<Stack.Screen
						name="Home"
						component={AppNavigation}
						options={{ headerTransparent: true, title: '' }}
					/>
				)
			) : (
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ headerTransparent: true, title: '' }}
				/>
			)}
		</Stack.Navigator>
	);
};

export default StackNavigation;
