import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import StackNavigation from './src/navigation/StackNavigation';
import { uiFinishLoading, uiStartLoading } from './src/actions/auth';

const App = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.ui);

	useEffect(() => {
		AsyncStorage.getItem('loading').then(response => {
			if (response !== null && response !== undefined) {
				if (response == true) dispatch(uiStartLoading());
				else dispatch(uiFinishLoading());
			}
		})
	}, [])

	useEffect(() => {
		AsyncStorage.setItem('loading', `${loading}`).then(response =>
			console.log('saved'),
		)
	}, [loading]);

	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
};

export default App;
