import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './src/store/store'

export default function WalletApp() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}