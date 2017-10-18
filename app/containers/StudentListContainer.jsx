import React, { Component } from 'react';
import axios from 'axios'

import StudentList from "../components/StudentList"

export default class StudentListContainer extends Component{
  constructor(){
    super()
    this.state = {
      selectedCampus: 0,
      allStudents: []
    }
  }

  componentDidMount(){

    const campusId = this.props.match.params.campusId
    console.log(campusId)
    axios.get(`/api/campuses/${campusId}/students`)
    .then(res => res.data)
    .then(list => {
      this.setState( {allStudents: list} )
    })
  }


  render(){
    // console.log(this.state)
  return (
   <div className= "student-list-container">
   <h1> Student List Container </h1>
    <StudentList students={this.state.allStudents} />
 </div>
  )
}
}


