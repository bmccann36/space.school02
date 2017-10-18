'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './store'

// import Root from './components/Root'
import Nav from './components/Nav'
import AppContainer from './containers/AppContainer'
// import StudentsHome from './components/StudentsHome'
// import Home from './components/Home'


// add a path for the studentList view
// /campus/:campusId/students   renders the student list component as well as the campuses component


render(
  <Provider store={store}>

      <div className= "main">
          {/* <Nav /> */}
          <AppContainer />
          {/* <Route exact path='/students' component={StudentsHome} /> */}
      </div>

  </Provider>,
  document.getElementById('main')
)


