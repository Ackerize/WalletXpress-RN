import axios from 'axios';
import { API_HOST } from '../utils/constants';
import React from 'react';
import { login } from '../actions/auth';
import Toast from '../components/Toast';
import { Image } from 'react-native';

const URL_BASE = `${API_HOST}/users`;

export const registerUser = (user, navigation) => {
	axios
		.post(URL_BASE, user)
		.then(({ data }) => {
			Toast.show({
				title: 'User created',
				text: 'Your user was successfully created.',
				color: '#2ecc71',
				timing: 2000,
				icon: (
					<Image
						source={require('../assets/tick.png')}
						style={{ width: 25, height: 25 }}
						resizeMode="contain"
					/>
				),
			});
			setTimeout(() => {
				navigation.navigate('Login');
			}, 2005);
		})
		.catch(({ response }) => {
			const { data } = response;
			Toast.show({
				title: 'Oops!',
				text: `${data.message}`,
				color: '#e74c3c',
				timing: 2500,
				icon: (
					<Image
						source={require('../assets/close.png')}
						style={{ width: 25, height: 25 }}
						resizeMode="contain"
					/>
				),
			});
		});
};

export const loginUser = (user, navigation, dispatch) => {
	axios
		.post(`${URL_BASE}/login`, user)
		.then(({ data }) => {
			dispatch(login());
			Toast.show({
				title: 'Welcome!',
				text: 'You are successfully logged in.',
				color: '#2ecc71',
				timing: 2000,
				icon: (
					<Image
						source={require('../assets/tick.png')}
						style={{ width: 25, height: 25 }}
						resizeMode="contain"
					/>
				),
			});
			navigation.navigate('Home');
		})
		.catch(({ response }) => {
			const { data } = response;
			Toast.show({
				title: 'Oops!',
				text: `${data.message}`,
				color: '#e74c3c',
				timing: 2500,
				icon: (
					<Image
						source={require('../assets/close.png')}
						style={{ width: 25, height: 25 }}
						resizeMode="contain"
					/>
				),
			});
		});
};
