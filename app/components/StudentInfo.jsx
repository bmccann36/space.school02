import React, { Component } from 'react';


export default class StudentInfo extends Component {
  constructor(props){
  super(props)
}

  render() {
    let student = false
    let campus = false
    if (this.props.student) {
      student = this.props.student[0]
      campus = student.campus
      console.log(student, campus)
    }
    return (

      <div className="single-student-display">
        {student ?
        <div>
        <h1> Campus : {campus.name} </h1>
        <h1> Student : {student.name} </h1>
        <h1> Gpa : {student.gpa} </h1>
        </div>
        :
        <p> no data </p>
        }
        {/* <h1> Name : {student.name} </h1> */}
      </div>

  )
  }
}
