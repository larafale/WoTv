
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

import {Button, SocialIcon, Icon} from 'react-native-elements'
import VIcon from 'react-native-vector-icons/FontAwesome';

export default class UiKit extends Component {


	render() {
    return (
    	<View>


        {/*
          documentation: https://github.com/react-native-community/react-native-elements#buttons
        */}

        <Text></Text>
        
        <Button
          icon={{name: 'code'}}
          title='CALL TO ACTION' />

        <Text></Text>
        
        <Button
          icon={{name: 'envira', type: 'font-awesome', buttonStyle: {
            borderWidth: 4
          }}}
          iconRight
          raised
          color='#fff'
          fontSize={14}
          textStyle={{fontWeight: 'bold'}}
          fontFamily='Montserrat'
          backgroundColor='red'
          borderRadius={4}
          margin={10}
          title='CALL TO ACTION' />

        <Text></Text>

        <SocialIcon
          type='twitter'
        />

        <SocialIcon
          raised={false}
          type='gitlab'
        />

        <SocialIcon
          light
          type='medium'
        />

        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />

        <SocialIcon
          title='Some Twitter Message'
          button
          type='twitter'
        />

        <SocialIcon
          button
          type='medium'
        />


        <SocialIcon
          button
          light
          type='instagram'
        />

        <Icon
          name='rowing' />

        <Icon
          name='g-translate'
          color='#00aced' />

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />

        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
        />

        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('click')} />

			  <VIcon name="plane" size={70} color="red" style={{padding:20}} />


    	</View>
	   )
  } 

}