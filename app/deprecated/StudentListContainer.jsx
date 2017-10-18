import React, { Component } from 'react';
import axios from 'axios'

import StudentList from "../components/StudentList"

export default class StudentListContainer extends Component{
  constructor(props){
    super(props)
    this.state = {allStudents: []}
  }

  componentDidMount(){
    const campusId = this.props.campus
    console.log(campusId, 'in list container')
    axios.get(`/api/campuses/${campusId}/students`)
    .then(res => res.data)
    .then(list => {
      console.log(list)
      this.setState( {allStudents: list} )
    })
  }


  render(){
    // console.log('props in studnet list', this.props)
  return (
   <div className= "student-list-container">
   <h1> Student List Container </h1>
    <StudentList students={this.state.allStudents} />
 </div>
  )
}
}


