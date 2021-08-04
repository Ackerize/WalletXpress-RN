import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import StackNavigation from './src/navigation/StackNavigation'
import {
	login,
	logout,
	uiFinishLoading,
	uiStartLoading,
} from './src/actions/auth'

const App = () => {
	const dispatch = useDispatch()
	const { ui, auth } = useSelector(state => state)
	const { loading } = ui
	const { loggedIn } = auth

	const [readyInit, setReadyInit] = useState(false)
	const [readyLogin, setReadyLogin] = useState(false)

	useEffect(() => {
		AsyncStorage.getItem('loading').then(response => {
			if (response == true) dispatch(uiStartLoading())
			else dispatch(uiFinishLoading())
			setReadyInit(true)
		})
	}, [])

	useEffect(() => {
		AsyncStorage.getItem('logged').then(response => {
			const auxResponse = Boolean(response)
			if (auxResponse == true) dispatch(login())
			else dispatch(logout())
			setReadyLogin(true)
		})
	}, [])

	useEffect(() => {
		AsyncStorage.setItem('loading', `${loading}`).then(response =>
			console.log('saved loading'),
		)
	}, [loading])

	useEffect(() => {
		AsyncStorage.setItem('logged', `${loggedIn}`).then(response =>
			console.log('saved logged'),
		)
	}, [loggedIn])

	if (!readyInit || !readyLogin) return null

	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	)
}

export default App
