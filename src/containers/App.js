
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Image as ImageRN
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



import Movies from '../containers/Movies'
import Tabs from '../containers/Tabs'


class App extends Component {

  render() {

    return <View style={styles.screenView} styleName="flexible">

      <StatusBar
        hidden={true}
        color="red"
        barStyle="light-content"
      />

      <View style={styles.containerView} styleName="flexible">

        {/* header */}
        <View style={styles.headerView} styleName="horizontal h-center">
        </View>

        {/* movies */}
        <View style={styles.moviesView} styleName="flexible">
          <Movies />
        </View>

        {/* menu */}
        <View style={styles.tabsView} styleName="horizontal">
          <Tabs 
            tab={this.props.tab} 
            onPress={(tab) => { this.props.actions.goToTab(tab)}} 
          />
        </View>

      </View>
    </View>

  } 

}


const styles = {

  /* root layout styles */
  screenView: {},
  containerView: {},

  /* app layout styles */
  headerView: {
    backgroundColor: '#5d5d5d',
  },

  moviesView: {
    backgroundColor: '#eee',
    marginBottom: -4
  },

  tabsView: {
    backgroundColor: '#eee',
    marginTop: -2
  }

}


function mapStateToProps(state, ownProps) {
  return {
    /*...state,*/
    tab: state.tab,
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    /*dispatch: dispatch*/
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

