
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native'

import { 
	Image,
	Button,
	View,
	Text,
	Icon,
	NavigationBar,
	Title,
	Subtitle,
	Caption,
	Row,
} from '@shoutem/ui';



export default function Tabs({ tab, onPress }) {

	const tabs = [
		{ key: 'early', title: 'Partie 1' },
		{ key: 'late', title: 'Partie 2' },
		{ key: 'now', title: 'Now' },
	]

	return (
		<View style={{backgroundColor: '#fff'}} styleName='flexible horizontal v-center'>

			{tabs.map(({ key, title}) => {
				return (
					<Button style={{height: 80}} key={key}
				  	onPress={() => onPress(key)} 
				  	styleName={'full-width '+(tab === key ? '':'muted')}
				  >
				    <Icon name="sidebar" />
				    <Text>{title}</Text>
				  </Button>	
				 )
			})}

		</View>
	)

}