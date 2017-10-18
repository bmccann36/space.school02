import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StudentList from '../components/StudentList'
import Campuses from '../components/Campuses'

export default class CampusContainer extends Component {
  constructor() {
    super()
    this.state = { campuses: [],
      selectedCampus: 0,
      visibleStudents: [],
      allStudents: []
      }
this.changeSelected = this.changeSelected.bind(this)
}

componentDidMount(){
const campuses = axios.get('/api/campuses')
const students = axios.get('/api/students')

Promise.all([campuses, students])
.then(res => res.map(r => r.data))
.then(data => {
this.setState({campuses: data[0], allStudents: data[1]})
})
// data[0] is campuses  data[1] is students
}

// when the campus div is clicked it changes campus ID on state
changeSelected(campusId){
axios.get(`/api/campuses/${campusId}/students`)
.then(res => res.data)
.then(list => {
this.setState( {visibleStudents: list} )
})
}

  render(){
  return (
    <div>
    <h1> CampusContainer </h1>
      <Route exact path= "/" render={() => <Campuses
      campuses={this.state.campuses}
      setCampus = {this.changeSelected} />}
      />
      <Route exact path = "/" render={() => <StudentList students = {this.state.visibleStudents} />}
      />
    </div>
  )
 }
}






