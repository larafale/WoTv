
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { configureStore } from './src/lib/store'
import App from './src/containers/App'


const store = configureStore()


const Wrapper = () => (
	<Provider store={store} >
		<App color='red' />
	</Provider>
)

AppRegistry.registerComponent('WoTv', () => Wrapper)