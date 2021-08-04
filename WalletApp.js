import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function WalletApp() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	)
}
