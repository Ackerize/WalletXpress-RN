import { types } from '../types/types'

const initialState = {
	loggedIn: false,
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.loggedIn:
			return {
				...state,
				loggedIn: true,
			}
		case types.loggedOut:
			return {
				...state,
				loggedIn: false,
			}
		default:
			return state
	};
};