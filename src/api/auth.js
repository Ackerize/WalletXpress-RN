import axios from 'axios'
import { API_HOST } from '../utils/constants';

import { login } from '../actions/auth';

const URL_BASE = `${API_HOST}/users`

export const registerUser = (user, navigation) => {
	axios
		.post(URL_BASE, user)
		.then(({ data }) => {
            navigation.navigate('Login');
		})
		.catch(({ response }) => {
			const { data } = response
			console.log(data);
		})
}

export const loginUser =  (user, navigation, dispatch) => {
	axios
		.post(`${URL_BASE}/login`, user)
		.then(({ data }) => {
			dispatch(login());
            navigation.navigate('Home');
		})
		.catch(({ response }) => {
			const { data } = response
			console.log(data);
		});
}
