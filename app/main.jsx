'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './store'

import Nav from './components/Nav'
import AppContainer from './containers/AppContainer'



render(
  <Provider store={store}>

      <div className= "main">
          <AppContainer />
      </div>

  </Provider>,
  document.getElementById('main')
)


