
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import { 
  Image,
  Button,
  View,
  Text,
  Icon,
  NavigationBar,
  Title,
  ListView,
  Subtitle,
  Caption,
  Row,
} from '@shoutem/ui';




function Movie(movie) {

  const film = movie.list[0]
  const lightbox = {resizeMode:'contain',style:{flex:1,margin:0,backgroundColor:'transparent'}}

  return (
    <Row style={styles.movie} >
      <Image
        style={styles.moviePic}
        source={{ uri: film.image_small || 'http://www.cleanshop.co.id/images/product/no-image.jpg' }}
      />
      <View style={styles.movieBox} styleName="vertical stretch space-between">
        <Subtitle>{film.titre}</Subtitle>
        <View styleName="horizontal space-between">
          <View styleName="horizontal">
          <Image
            style={styles.movieChannel}
            source={{ uri: 'http://static.programme-tv.net/var/p/chaines/'+movie.idChaine+'.gif' }}
          />
          <Caption style={{alignItems:'flex-start'}}>{movie.name}</Caption>
          </View>
          <Caption>{film.heure.split(':')[0] +':'+ film.heure.split(':')[1]}</Caption>
        </View>
      </View>
    </Row>
  )
}


class Movies extends Component {

  constructor(props){
    super(props)

    this.state = { 
      loading: true
    }
  }

  componentDidMount() {
    this._onRefresh()
  }

  _onRefresh() {
    this.setState({ loading: true })
    this.props.actions.fetchMovies(this.props.tab, (function(){
      this.setState({ loading: false })
    }).bind(this))
  }

  render() {

    const movies = <ListView 
      ref='listView'
      data={this.props.movies}
      loading={this.state.loading}
      renderRow={Movie}
      onRefresh={this._onRefresh.bind(this)}
      onLoadMore={() => {}}
      renderHeader={() => {}}
    />


    return movies
  } 

}

const styles = {

  movie: {
    margin: 0,
    padding: 0,
  },

  movieBox: {
    borderColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
    margin: 0,
  },

  moviePic: {
    height: 100, 
    width: 150, 
    margin: 0,
    marginTop: -1,
  },

  movieChannel: {
    resizeMode: 'contain',
    width: 30,
    height: 16,
    marginRight: 4,
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

