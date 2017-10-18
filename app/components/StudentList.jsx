
import React, { Component } from 'react';

export default class StudentList extends Component {
  constructor(props) {
    super(props)
    }




    render(){
      const students = this.props.students
    return (
      <div className= "student-list">
        <h1> student list component </h1>
      {students.map((student) => {
        return <h1> {student.name} </h1>
      })}
      </div>
    )
  }
}

