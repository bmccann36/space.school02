import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StudentList from '../components/StudentList'
import Campuses from '../components/Campuses'
import EditCampus from '../components/EditCampus'
import SingleCampus from '../components/SingleCampus'

export default class CampusContainer extends Component {
  constructor() {
    super()
    this.state = { campuses: [],
      selectedCampus: 0,
      visibleStudents: [],
      allStudents: []
      }
this.changeSelected = this.changeSelected.bind(this)
this.deleteCampus = this.deleteCampus.bind(this)
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
this.setState( {selectedCampus: campusId})
})
}

deleteCampus(campusId){
  // console.log(campusId, 'campusId in delete campus called ')
  axios.delete(`/api/campuses/${campusId}/delete`)
  .then(res => res.data)
  // .then(data => console.log(data))
}

createCampus(payload){
  axios.post( '/api/campuses/add', payload)
  .then(res => res.data)
  // .then(data => console.log(data))
}

editCampus(campusId, payload){
  axios.put(`/api/campuses/${campusId}/edit`, payload)
  .then(res => res.data)
  // .then(data => console.log(data))
}


  render(){
  return (
    <div>
      <div className= "campus-container">
        <Campuses
          campuses={this.state.campuses}
          setCampus = {this.changeSelected}
        />
        { this.state.selectedCampus == 0 &&
        <EditCampus
        campuses={this.state.campuses}
        deleteCampus={this.deleteCampus}
        createCampus={this.createCampus}
        editCampus={this.editCampus}
         />
        }
        {this.state.selectedCampus !== 0 &&
        <SingleCampus
          students ={this.state.visibleStudents}
          campuses = {this.state.campuses}
          campusId = {this.state.selectedCampus}
        />
        }
    </div>

      <div className= "student-list-display">
        <StudentList students = {this.state.visibleStudents} />
      </div>
    </div>
  )
 }
}






