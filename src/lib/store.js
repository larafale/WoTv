import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'
import devTools from 'remote-redux-devtools'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  })

export function configureStore(initialState) {
  
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware
    ),
    devTools({
      name: Platform.OS,
      /*hostname: 'localhost',
      port: 5678*/
    }),
  )
  return createStore(reducer, initialState, enhancer)
}

