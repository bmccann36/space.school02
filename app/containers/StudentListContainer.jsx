import React, { Component } from 'react';

import StudentList from "../components/StudentList"

export default class StudentListContainer extends Component{
  constructor(){
    super()
    this.state = {
      selectedCampus: 0,
      allStudents: []
    }
  }


  render(){
  return (
   <div className= "student-list-container">
   <h1> Student List Container </h1>
    {/* <StudentList /> */}
 </div>
  )
}
}


