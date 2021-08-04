import { types } from '../types/types'

export const uiStartLoading = () => ({
	type: types.uiStartLoading,
})

export const uiFinishLoading = () => ({
	type: types.uiFinishLoading,
})

export const login = () => ({
	type: types.loggedIn,
})

export const logout = () => ({
	type: types.loggedOut,
})
