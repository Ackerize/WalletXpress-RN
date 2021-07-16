import React from 'react'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from '../screens/HomeScreen'
import Statistic from '../screens/StatisticScreen'
import History from '../screens/HistoryScreen'
import Profile from '../screens/ProfileScreen'

const Tabs = AnimatedTabBarNavigator()

const TabBarIcon = ({ name, size, tintColor }) => (
	<Icon name={name} size={size ? size : 24} color={tintColor} />
)

export default function AppNavigation() {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				activeBackgroundColor: '#DBF2EC',
				activeTintColor: '#478B91',
				inactiveTintColor: '#9E9EA7',
			}}>
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="home"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Statistic"
				component={Statistic}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="equalizer"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="History"
				component={History}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="history"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon
							focused={focused}
							tintColor={color}
							name="person"
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	)
}
