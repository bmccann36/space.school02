
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
// make an axios request for all students
import StudentsContainer from './StudentsContainer'
import Nav from '../components/Nav'
// import Campuses from '../components/Campuses'
import CampusContainer from './CampusContainer'
// import StudentList from '../components/StudentList'


export default class AppContainer extends Component {
  constructor() {
    super()
    }

  render(){
    return (
      <BrowserRouter>
      <div >
      <Nav />
        <div >
          <Route exact path= "/" component= {CampusContainer} />

          <Route exact path="/students" component={StudentsContainer} />
        </div>
      </div>
        </BrowserRouter>

    )

}
}

// HOW TO USE RENDER + PASS PROPS
    /* <Route path= "/" render={() => <Campuses campuses={this.state.campuses}
    setCampus = {this.changeSelected}
     />} /> */


// HOW I RENDERED STUDENT LIST
    /* <StudentList
    students= {this.state.allStudents}
    campuses= {this.state.campuses}
    /> */


// props that were passed to students container
          {/* allStudents = {this.state.allStudents}
          campuses = {this.state.campuses} />} */}
